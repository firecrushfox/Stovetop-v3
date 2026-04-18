import assert from 'node:assert/strict';
import { parseRecipe } from '../src/lib/recipe-parser.js';
import { filterRecipes, getListHref, getRecipeHref, getRoute } from '../src/lib/route-state.js';

const tests = [
  {
    name: 'parseRecipe preserves Unicode titles and content',
    run() {
      const raw = `---
title: "Nước Chấm"
tags: [vietnamese, sauce]
---

# Nước Chấm

## Description
Bright, salty, sweet.

## Ingredients
- 2 tablespoons fish sauce
- 2 tablespoons lime juice

## Instructions
1. Stir everything together.

## Notes
Serve cold.
`;

      const recipe = parseRecipe('recipes/nuoc-cham.md', raw, { includeSearchText: true });

      assert.equal(recipe.title, 'Nước Chấm');
      assert.deepEqual(recipe.tags, ['vietnamese', 'sauce']);
      assert.match(recipe.searchText, /nước chấm/);
    }
  },
  {
    name: 'parseRecipe warns on broken frontmatter fences',
    run() {
      const raw = `---
title: "Broken Recipe"

# Broken Recipe

## Ingredients
- 1 thing

## Instructions
1. Do it.
`;

      const recipe = parseRecipe('recipes/broken.md', raw);

      assert.ok(recipe.warnings.includes('Frontmatter starts with `---` but is missing a closing fence.'));
    }
  },
  {
    name: 'parseRecipe accepts section aliases and inline lists',
    run() {
      const raw = `---
title: "Alias Recipe"
categories: [dinner, quick]
---

# Alias Recipe

## Summary
A short intro.

## Ingredient
- 1 onion

## Directions
1) Slice the onion.
2) Cook the onion.

## Note
Use medium heat.
`;

      const recipe = parseRecipe('recipes/alias.md', raw);

      assert.deepEqual(recipe.categories, ['dinner', 'quick']);
      assert.deepEqual(recipe.description, ['A short intro.']);
      assert.deepEqual(recipe.ingredients, ['1 onion']);
      assert.deepEqual(recipe.instructions, ['Slice the onion.', 'Cook the onion.']);
      assert.deepEqual(recipe.notes, ['Use medium heat.']);
      assert.equal(recipe.warnings.length, 0);
    }
  },
  {
    name: 'parseRecipe excludes source paragraphs from description',
    run() {
      const raw = `---
title: "Source Cleanup"
source: https://example.com/original
---

# Source Cleanup

This intro should remain.

> Source: https://example.com/body-copy

## Ingredients
- 1 thing

## Instructions
1. Do it.
`;

      const recipe = parseRecipe('recipes/source-cleanup.md', raw);

      assert.deepEqual(recipe.description, ['This intro should remain.']);
      assert.equal(recipe.source, 'https://example.com/original');
    }
  },
  {
    name: 'parseRecipe warns when required sections are missing',
    run() {
      const raw = `# Missing Bits

## Description
Only a description.
`;

      const recipe = parseRecipe('recipes/missing.md', raw);

      assert.ok(recipe.warnings.includes('Ingredients section is missing or empty.'));
      assert.ok(recipe.warnings.includes('Instructions section is missing or empty.'));
    }
  },
  {
    name: 'route helpers preserve list filters through recipe navigation',
    run() {
      const filters = {
        query: 'tofu bowl',
        tag: 'vegan',
        category: 'dinner'
      };

      const recipeHref = getRecipeHref('sticky-tofu', filters);
      const parsedRecipeRoute = getRoute(recipeHref);
      const parsedListRoute = getRoute(getListHref(filters));

      assert.equal(recipeHref, '#/recipe/sticky-tofu?q=tofu+bowl&tag=vegan&category=dinner');
      assert.deepEqual(parsedRecipeRoute, {
        type: 'recipe',
        recipeId: 'sticky-tofu',
        query: 'tofu bowl',
        tag: 'vegan',
        category: 'dinner'
      });
      assert.deepEqual(parsedListRoute, {
        type: 'list',
        query: 'tofu bowl',
        tag: 'vegan',
        category: 'dinner'
      });
    }
  },
  {
    name: 'filterRecipes applies query, tag, and category together',
    run() {
      const recipes = [
        {
          id: 'tofu-bowl',
          searchText: 'sticky tofu rice bowl sesame',
          tags: ['vegan', 'quick'],
          categories: ['dinner']
        },
        {
          id: 'chicken-soup',
          searchText: 'chicken soup ginger scallion',
          tags: ['comfort'],
          categories: ['dinner']
        },
        {
          id: 'tofu-salad',
          searchText: 'crispy tofu salad sesame herbs',
          tags: ['vegan'],
          categories: ['lunch']
        }
      ];

      const filtered = filterRecipes(recipes, {
        query: 'tofu',
        tag: 'vegan',
        category: 'dinner'
      });

      assert.deepEqual(
        filtered.map((recipe) => recipe.id),
        ['tofu-bowl']
      );
    }
  }
];

let failures = 0;

for (const test of tests) {
  try {
    test.run();
    console.log(`PASS ${test.name}`);
  } catch (error) {
    failures += 1;
    console.error(`FAIL ${test.name}`);
    console.error(error);
  }
}

if (failures) {
  process.exitCode = 1;
  console.error(`\n${failures} test(s) failed.`);
} else {
  console.log(`\n${tests.length} test(s) passed.`);
}
