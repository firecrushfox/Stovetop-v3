export const LIST_ROUTE = '#/';
export const RECIPE_ROUTE_PREFIX = '#/recipe/';

export function getRoute(hash = LIST_ROUTE) {
  const normalizedHash = hash || LIST_ROUTE;
  const [path, search = ''] = normalizedHash.split('?');
  const params = new URLSearchParams(search);
  const filters = {
    query: params.get('q') || '',
    tag: params.get('tag') || '',
    category: params.get('category') || ''
  };

  if (path.startsWith(RECIPE_ROUTE_PREFIX)) {
    return {
      type: 'recipe',
      recipeId: decodeURIComponent(path.slice(RECIPE_ROUTE_PREFIX.length)),
      ...filters
    };
  }

  return {
    type: 'list',
    ...filters
  };
}

export function getListHref(filters = {}) {
  const search = buildRouteSearch(filters);
  return `${LIST_ROUTE}${search}`;
}

export function getRecipeHref(recipeId, filters = {}) {
  const search = buildRouteSearch(filters);
  return `${RECIPE_ROUTE_PREFIX}${encodeURIComponent(recipeId)}${search}`;
}

export function buildRouteSearch({ query = '', tag = '', category = '' }) {
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

  const search = params.toString();
  return search ? `?${search}` : '';
}

export function filterRecipes(recipes, { query = '', tag = '', category = '' }) {
  const normalizedQuery = query.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const matchesQuery = !normalizedQuery || recipe.searchText.includes(normalizedQuery);
    const matchesTag = !tag || recipe.tags.includes(tag);
    const matchesCategory = !category || recipe.categories.includes(category);

    return matchesQuery && matchesTag && matchesCategory;
  });
}
