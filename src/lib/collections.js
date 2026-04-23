import { DEFAULT_COLLECTIONS } from './default-collections';

export const USER_COLLECTIONS_STORAGE_KEY = 'stovetop-user-collections';
export const HOMEPAGE_COLLECTION_LIMIT = 20;

export function loadUserCollections() {
  try {
    const stored = window.localStorage.getItem(USER_COLLECTIONS_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];

    return Array.isArray(parsed)
      ? parsed
        .filter(isValidCollection)
        .map((collection) => ({
          ...collection,
          type: 'user',
          recipeIds: [...new Set(collection.recipeIds.filter((value) => typeof value === 'string'))]
        }))
      : [];
  } catch {
    return [];
  }
}

export function saveUserCollections(collections) {
  window.localStorage.setItem(USER_COLLECTIONS_STORAGE_KEY, JSON.stringify(collections));
}

export function createUserCollection(name) {
  return {
    id: `collection-${slugify(name)}-${Date.now().toString(36)}`,
    name: name.trim(),
    type: 'user',
    recipeIds: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
}

export function addRecipeToUserCollection(collections, collectionId, recipeId) {
  return collections.map((collection) => {
    if (collection.id !== collectionId || collection.recipeIds.includes(recipeId)) {
      return collection;
    }

    return {
      ...collection,
      recipeIds: [...collection.recipeIds, recipeId],
      updatedAt: new Date().toISOString()
    };
  });
}

export function removeRecipeFromUserCollection(collections, collectionId, recipeId) {
  return collections.map((collection) => {
    if (collection.id !== collectionId) {
      return collection;
    }

    return {
      ...collection,
      recipeIds: collection.recipeIds.filter((id) => id !== recipeId),
      updatedAt: new Date().toISOString()
    };
  });
}

export function renameUserCollection(collections, collectionId, name) {
  return collections.map((collection) => {
    if (collection.id !== collectionId) {
      return collection;
    }

    return {
      ...collection,
      name: name.trim(),
      updatedAt: new Date().toISOString()
    };
  });
}

export function deleteUserCollection(collections, collectionId) {
  return collections.filter((collection) => collection.id !== collectionId);
}

export function getHomepageCollections(recipes, userCollections) {
  const recipeMap = new Map(recipes.map((recipe) => [recipe.id, recipe]));
  const defaultCollections = DEFAULT_COLLECTIONS
    .map((definition) => resolveDefaultCollection(definition, recipes, HOMEPAGE_COLLECTION_LIMIT))
    .filter((collection) => collection.recipeIds.length)
    .map((collection) => ({
      ...collection,
      recipes: collection.recipeIds.map((recipeId) => recipeMap.get(recipeId)).filter(Boolean)
    }));
  const visibleUserCollections = userCollections
    .map((collection) => ({
      ...collection,
      recipeIds: collection.recipeIds.filter((recipeId) => recipeMap.has(recipeId)).slice(0, HOMEPAGE_COLLECTION_LIMIT)
    }))
    .filter((collection) => collection.recipeIds.length)
    .map((collection) => ({
      ...collection,
      recipes: collection.recipeIds.map((recipeId) => recipeMap.get(recipeId)).filter(Boolean)
    }));

  return {
    defaultCollections,
    featuredUserCollection: pickRandomCollection(visibleUserCollections)
  };
}

export function getResolvedUserCollections(recipes, userCollections) {
  const recipeMap = new Map(recipes.map((recipe) => [recipe.id, recipe]));

  return userCollections.map((collection) => ({
    ...collection,
    recipes: collection.recipeIds.map((recipeId) => recipeMap.get(recipeId)).filter(Boolean)
  }));
}

export function getCollectionMap(recipes, userCollections) {
  const defaultCollections = DEFAULT_COLLECTIONS
    .map((definition) => resolveDefaultCollection(definition, recipes))
    .filter((collection) => collection.recipeIds.length);
  const userCollectionEntries = userCollections
    .map((collection) => ({
      ...collection,
      recipeIds: collection.recipeIds.filter((recipeId) => recipes.some((recipe) => recipe.id === recipeId))
    }))
    .filter((collection) => collection.recipeIds.length);

  return new Map(
    [...defaultCollections, ...userCollectionEntries].map((collection) => [collection.id, collection])
  );
}

function resolveDefaultCollection(definition, recipes, limit = Infinity) {
  const matches = recipes
    .map((recipe) => ({ recipe, score: scoreRecipe(recipe, definition.terms) }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || left.recipe.title.localeCompare(right.recipe.title))
    .slice(0, limit)
    .map((entry) => entry.recipe.id);

  return {
    id: definition.id,
    name: definition.name,
    type: 'default',
    recipeIds: matches
  };
}

function scoreRecipe(recipe, terms) {
  return terms.reduce((total, term) => total + (recipe.searchText.includes(term) ? 1 : 0), 0);
}

function isValidCollection(value) {
  return (
    value &&
    typeof value === 'object' &&
    typeof value.id === 'string' &&
    typeof value.name === 'string' &&
    Array.isArray(value.recipeIds)
  );
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function pickRandomCollection(collections) {
  if (!collections.length) {
    return null;
  }

  return collections[Math.floor(Math.random() * collections.length)];
}
