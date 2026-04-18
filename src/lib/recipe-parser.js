export function parseRecipe(path, raw, options = {}) {
  const { includeRaw = false, includeSearchText = false } = options;

  if (typeof raw !== 'string' || !raw.trim()) {
    return null;
  }

  const { frontmatter, body, warnings: frontmatterWarnings } = splitFrontmatter(raw);
  const title = fixMojibake(frontmatter.title || getMarkdownTitle(body) || fileStem(path));
  const sections = parseSections(body);
  const warnings = [
    ...frontmatterWarnings,
    ...sections.warnings,
    ...validateRecipe({ path, title, ingredients: sections.ingredients, instructions: sections.instructions })
  ];

  const recipe = {
    id: slugify(`${title}-${path}`),
    path,
    title,
    author: fixMojibake(frontmatter.author || ''),
    source: frontmatter.source || '',
    yield: frontmatter.yield || '',
    prepTime: normalizeDuration(frontmatter.prep_time || ''),
    cookTime: normalizeDuration(frontmatter.cook_time || ''),
    totalTime: normalizeDuration(frontmatter.total_time || ''),
    cuisine: fixMojibake(frontmatter.cuisine || ''),
    image: frontmatter.image || '',
    dateSaved: frontmatter.date_saved || '',
    categories: mergeLists(normalizeList(frontmatter.categories), sections.categories),
    tags: mergeLists(normalizeList(frontmatter.tags), sections.tags),
    description: sections.description,
    ingredients: sections.ingredients,
    instructions: sections.instructions,
    notes: sections.notes,
    warnings
  };

  if (includeSearchText) {
    recipe.searchText = buildSearchText(recipe);
  }

  if (includeRaw) {
    recipe.raw = raw;
  }

  return recipe;
}

export function createRecipeSummary(path, raw) {
  const recipe = parseRecipe(path, raw, { includeSearchText: true });

  if (!recipe) {
    return null;
  }

  return {
    id: recipe.id,
    path: recipe.path,
    title: recipe.title,
    author: recipe.author,
    yield: recipe.yield,
    prepTime: recipe.prepTime,
    cookTime: recipe.cookTime,
    totalTime: recipe.totalTime,
    cuisine: recipe.cuisine,
    image: recipe.image,
    dateSaved: recipe.dateSaved,
    categories: recipe.categories,
    tags: recipe.tags,
    searchText: recipe.searchText
  };
}

function buildSearchText(recipe) {
  return [
    recipe.title,
    recipe.author,
    recipe.cuisine,
    recipe.description.join(' '),
    recipe.tags.join(' '),
    recipe.categories.join(' '),
    recipe.ingredients.join(' ')
  ]
    .join(' ')
    .toLowerCase();
}

function splitFrontmatter(raw) {
  const warnings = [];
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    if (raw.startsWith('---')) {
      warnings.push('Frontmatter starts with `---` but is missing a closing fence.');
    }

    return { frontmatter: {}, body: raw, warnings };
  }

  return {
    frontmatter: parseFrontmatter(match[1]),
    body: match[2],
    warnings
  };
}

function parseFrontmatter(text) {
  const result = {};
  const lines = text.split(/\r?\n/);
  let activeKey = '';

  for (const line of lines) {
    if (!line.trim()) {
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

    if (keyMatch) {
      activeKey = keyMatch[1];
      const value = keyMatch[2].trim();

      if (!value) {
        result[activeKey] = [];
        continue;
      }

      result[activeKey] = parseScalar(value);
      continue;
    }

    const itemMatch = line.match(/^\s*-\s+(.*)$/);

    if (itemMatch && activeKey) {
      if (!Array.isArray(result[activeKey])) {
        result[activeKey] = [];
      }

      result[activeKey].push(parseScalar(itemMatch[1]));
    }
  }

  return result;
}

function parseScalar(value) {
  const trimmed = value.trim();
  const inlineListMatch = trimmed.match(/^\[(.*)\]$/);

  if (inlineListMatch) {
    return splitInlineList(inlineListMatch[1]);
  }

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  if (trimmed === 'true') {
    return true;
  }

  if (trimmed === 'false') {
    return false;
  }

  if (trimmed === 'null') {
    return '';
  }

  return trimmed;
}

function parseSections(body) {
  const sections = {};
  const warnings = [];
  let current = 'description';
  sections[current] = [];

  for (const line of body.split(/\r?\n/)) {
    if (line.startsWith('# ')) {
      continue;
    }

    const sectionMatch = line.match(/^##\s+(.*)$/);

    if (sectionMatch) {
      const heading = fixMojibake(sectionMatch[1].trim());
      const normalized = normalizeSectionHeading(heading);

      if (!normalized) {
        current = '';
        warnings.push(`Unrecognized section heading: "${heading}".`);
        continue;
      }

      current = normalized;
      if (!sections[current]) {
        sections[current] = [];
      }
      continue;
    }

    if (!current) {
      continue;
    }

    if (!sections[current]) {
      sections[current] = [];
    }

    sections[current].push(line);
  }

  return {
    description: formatParagraphs(sections.description || []),
    ingredients: formatList(sections.ingredients || []),
    instructions: formatList(sections.instructions || [], true),
    notes: formatNotes(sections.notes || []),
    tags: formatList(sections.tags || []),
    categories: formatList(sections.categories || []),
    warnings
  };
}

function formatParagraphs(lines) {
  return lines
    .join('\n')
    .split(/\n\s*\n/)
    .map((chunk) => chunk.replace(/^\s*>\s?/gm, '').trim())
    .filter(Boolean)
    .map(fixMojibake)
    .filter((paragraph) => !isSourceParagraph(paragraph));
}

function formatNotes(lines) {
  return lines
    .map((line) => line.replace(/^\s*>\s?/gm, '').trim())
    .map((line) => line.replace(/^\s*(?:\d+[.)]|[-*])\s*/, '').trim())
    .map(stripWrappingEmphasis)
    .map(fixMojibake)
    .filter(Boolean)
    .filter((note) => !isSourceParagraph(note));
}

function formatList(lines, ordered = false) {
  return lines
    .map((line) => {
      if (ordered) {
        return line.replace(/^\s*(?:\d+[.)]|[-*])\s+/, '').trim();
      }

      return line.replace(/^\s*[-*]\s+/, '').trim();
    })
    .filter(Boolean)
    .map(fixMojibake);
}

function getMarkdownTitle(body) {
  const match = body.match(/^#\s+(.*)$/m);
  return match ? match[1].trim() : '';
}

function normalizeList(value) {
  if (!value) {
    return [];
  }

  const list = Array.isArray(value) ? value : [value];
  return list.map((item) => fixMojibake(String(item))).filter(Boolean);
}

function mergeLists(...lists) {
  return [...new Set(lists.flat())];
}

function splitInlineList(value) {
  return value
    .split(',')
    .map((item) => parseScalar(item.trim()))
    .flat()
    .filter(Boolean);
}

function normalizeSectionHeading(value) {
  const normalized = value.toLowerCase().replace(/[:]+$/g, '').replace(/\s+/g, ' ').trim();

  const aliases = {
    description: 'description',
    summary: 'description',
    about: 'description',
    ingredients: 'ingredients',
    ingredient: 'ingredients',
    instructions: 'instructions',
    instruction: 'instructions',
    directions: 'instructions',
    method: 'instructions',
    steps: 'instructions',
    notes: 'notes',
    note: 'notes',
    tags: 'tags',
    tag: 'tags',
    categories: 'categories',
    category: 'categories'
  };

  return aliases[normalized] || '';
}

function isSourceParagraph(value) {
  return /^source:\s+\S+/i.test(value.trim());
}

function stripWrappingEmphasis(value) {
  const match = value.match(/^([*_])(.*)\1$/);
  return match ? match[2].trim() : value;
}

function validateRecipe(recipe) {
  const warnings = [];

  if (!recipe.title) {
    warnings.push(`Recipe "${fileStem(recipe.path)}" is missing a title.`);
  }

  if (!recipe.ingredients.length) {
    warnings.push('Ingredients section is missing or empty.');
  }

  if (!recipe.instructions.length) {
    warnings.push('Instructions section is missing or empty.');
  }

  return warnings;
}

function normalizeDuration(value) {
  if (!value) {
    return '';
  }

  const direct = fixMojibake(String(value));
  const match = direct.match(/^PT(?:(\d+)H)?(?:(\d+)M)?$/i);

  if (!match) {
    return direct;
  }

  const hours = Number(match[1] || 0);
  const minutes = Number(match[2] || 0);
  const parts = [];

  if (hours) {
    parts.push(`${hours} hr`);
  }

  if (minutes) {
    parts.push(`${minutes} min`);
  }

  return parts.join(' ');
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function fileStem(path) {
  return path.split('/').pop()?.replace(/\.md$/i, '') || 'recipe';
}

function fixMojibake(value) {
  if (!value || !looksLikeMojibake(value)) {
    return value;
  }

  try {
    let current = value;

    for (let attempt = 0; attempt < 3; attempt += 1) {
      const repaired = decodeLatin1AsUtf8(current);

      if (!repaired || repaired.includes('\uFFFD') || repaired === current) {
        break;
      }

      if (mojibakeScore(repaired) > mojibakeScore(current)) {
        break;
      }

      current = repaired;

      if (!looksLikeMojibake(current)) {
        break;
      }
    }

    return current;
  } catch {
    return value;
  }
}

function looksLikeMojibake(value) {
  return /(?:Ã.|Â.|â.|Æ°|á»|áº|Å|Ð|Ñ)/.test(value);
}

function mojibakeScore(value) {
  const matches = value.match(/(?:Ã.|Â.|â.|Æ°|á»|áº|Å|Ð|Ñ|\uFFFD)/g);
  return matches ? matches.length : 0;
}

function decodeLatin1AsUtf8(value) {
  const bytes = new Uint8Array([...value].map((char) => char.charCodeAt(0) & 0xff));
  return new TextDecoder('utf-8', { fatal: false }).decode(bytes);
}
