import { parseRecipe } from './recipe-parser';
import { recipeIndexData, recipeIndexUrl } from 'virtual:recipe-index';

const recipeModules = import.meta.glob('../../recipes/**/*.md', {
  query: '?raw',
  import: 'default'
});

let recipeIndexPromise = null;

export function loadRecipes() {
  if (!recipeIndexPromise) {
    recipeIndexPromise = loadRecipeIndex().then((entries) =>
      entries
        .map((entry) => ({
          ...entry,
          categories: [...entry.categories],
          tags: [...entry.tags]
        }))
        .sort((left, right) => left.title.localeCompare(right.title))
    );
  }

  return recipeIndexPromise;
}

export async function loadRecipeSummary(recipeId) {
  const recipes = await loadRecipes();
  return recipes.find((recipe) => recipe.id === recipeId) ?? null;
}

export async function loadRecipe(recipeId) {
  const summary = await loadRecipeSummary(recipeId);

  if (!summary) {
    return null;
  }

  const loadModule = recipeModules[summary.path];

  if (!loadModule) {
    return null;
  }

  const raw = await loadModule();
  const recipe = parseRecipe(summary.path, raw, { includeRaw: true, includeSearchText: true });

  if (!recipe) {
    return null;
  }

  return recipe;
}

function loadRecipeIndex() {
  if (recipeIndexData) {
    return Promise.resolve(recipeIndexData);
  }

  return fetch(recipeIndexUrl, { cache: 'no-store' }).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load recipe index: ${response.status}`);
    }

    return response.json();
  });
}
