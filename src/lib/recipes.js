const recipeModules = import.meta.glob('../../recipes/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
});

export function loadRecipes() {
  return Object.entries(recipeModules)
    .map(([path, raw]) => parseRecipe(path, raw))
    .filter(Boolean)
    .sort((left, right) => left.title.localeCompare(right.title));
}

function parseRecipe(path, raw) {
  if (typeof raw !== 'string' || !raw.trim()) {
    return null;
  }

  const { frontmatter, body } = splitFrontmatter(raw);
  const title = fixMojibake(frontmatter.title || getMarkdownTitle(body) || fileStem(path));
  const sections = parseSections(body);

  return {
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
    categories: normalizeList(frontmatter.categories),
    tags: normalizeList(frontmatter.tags),
    description: sections.description,
    ingredients: sections.ingredients,
    instructions: sections.instructions,
    notes: sections.notes,
    raw
  };
}

function splitFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    return { frontmatter: {}, body: raw };
  }

  return {
    frontmatter: parseFrontmatter(match[1]),
    body: match[2]
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

    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);

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

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseSections(body) {
  const sections = {};
  let current = 'description';

  for (const line of body.split(/\r?\n/)) {
    if (line.startsWith('# ')) {
      continue;
    }

    const sectionMatch = line.match(/^##\s+(.*)$/);

    if (sectionMatch) {
      current = sectionMatch[1].trim().toLowerCase();
      sections[current] = [];
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
    notes: formatParagraphs(sections.notes || [])
  };
}

function formatParagraphs(lines) {
  return lines
    .join('\n')
    .split(/\n\s*\n/)
    .map((chunk) => chunk.replace(/^\s*>\s?/gm, '').trim())
    .filter(Boolean)
    .map(fixMojibake);
}

function formatList(lines, ordered = false) {
  return lines
    .map((line) => {
      if (ordered) {
        return line.replace(/^\s*\d+\.\s+/, '').trim();
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
  if (!value || !/[ÃÂâ]/.test(value)) {
    return value;
  }

  try {
    const bytes = new Uint8Array([...value].map((char) => char.charCodeAt(0) & 0xff));
    const repaired = new TextDecoder('utf-8', { fatal: false }).decode(bytes);
    return repaired.includes('\uFFFD') ? value : repaired;
  } catch {
    return value;
  }
}
