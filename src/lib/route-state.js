export const HOME_ROUTE = '#/';
export const LIST_ROUTE = '#/recipes';
export const SAVED_ROUTE = '#/saved';
export const COLLECTIONS_ROUTE = '#/collections';
export const RECIPE_ROUTE_PREFIX = '#/recipe/';

export function getRoute(hash = HOME_ROUTE) {
  const normalizedHash = hash || HOME_ROUTE;
  const [path, search = ''] = normalizedHash.split('?');
  const params = new URLSearchParams(search);
  const filters = {
    query: params.get('q') || '',
    tag: params.get('tag') || '',
    category: params.get('category') || '',
    collection: params.get('collection') || '',
    source: params.get('source') || ''
  };

  if (path.startsWith(RECIPE_ROUTE_PREFIX)) {
    return {
      type: 'recipe',
      recipeId: decodeURIComponent(path.slice(RECIPE_ROUTE_PREFIX.length)),
      ...filters
    };
  }

  if (path === LIST_ROUTE) {
    return {
      type: 'list',
      ...filters
    };
  }

  if (path === SAVED_ROUTE) {
    return {
      type: 'saved',
      ...filters
    };
  }

  if (path === COLLECTIONS_ROUTE) {
    return {
      type: 'collections',
      ...filters
    };
  }

  return {
    type: 'home',
    ...filters
  };
}

export function getListHref(filters = {}) {
  const search = buildRouteSearch({ ...filters, source: '' });
  return `${LIST_ROUTE}${search}`;
}

export function getSavedHref() {
  return SAVED_ROUTE;
}

export function getRecipeHref(recipeId, filters = {}, source = '') {
  const search = buildRouteSearch({ ...filters, source });
  return `${RECIPE_ROUTE_PREFIX}${encodeURIComponent(recipeId)}${search}`;
}

export function buildRouteSearch({ query = '', tag = '', category = '', collection = '', source = '' }) {
  const params = new URLSearchParams();

  if (query) {
    params.set('q', query);
  }

  if (tag) {
    params.set('tag', tag);
  }

  if (category) {
    params.set('category', category);
  }

  if (collection) {
    params.set('collection', collection);
  }

  if (source) {
    params.set('source', source);
  }

  const search = params.toString();
  return search ? `?${search}` : '';
}

export function filterRecipes(recipes, { query = '', tag = '', category = '', collectionRecipeIds = null }) {
  const normalizedQuery = query.trim().toLowerCase();
  const allowedRecipeIds = collectionRecipeIds ? new Set(collectionRecipeIds) : null;

  return recipes.filter((recipe) => {
    const matchesQuery = !normalizedQuery || recipe.searchText.includes(normalizedQuery);
    const matchesTag = !tag || recipe.tags.includes(tag);
    const matchesCategory = !category || recipe.categories.includes(category);
    const matchesCollection = !allowedRecipeIds || allowedRecipeIds.has(recipe.id);

    return matchesQuery && matchesTag && matchesCategory && matchesCollection;
  });
}
