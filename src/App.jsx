import { useEffect, useState } from 'react';
import { loadRecipes } from './lib/recipes';

const FACET_PAGE_SIZE = 5;
const LIST_ROUTE = '#/';
const RECIPE_ROUTE_PREFIX = '#/recipe/';
const recipes = loadRecipes();
const allTags = collectFacetCounts(recipes, 'tags');
const allCategories = collectFacetCounts(recipes, 'categories');

export default function App() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [visibleTagCount, setVisibleTagCount] = useState(FACET_PAGE_SIZE);
  const [visibleCategoryCount, setVisibleCategoryCount] = useState(FACET_PAGE_SIZE);
  const [route, setRoute] = useState(getRoute());
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(isStandaloneDisplay());
  const [showIosInstallHelp, setShowIosInstallHelp] = useState(false);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute());

    window.addEventListener('hashchange', syncRoute);
    syncRoute();

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    if (route.type !== 'list') {
      setMobileFiltersOpen(false);
    }
  }, [route]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [route]);

  useEffect(() => {
    const onBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredInstallPrompt(event);
    };

    const onAppInstalled = () => {
      setDeferredInstallPrompt(null);
      setIsInstalled(true);
      setShowIosInstallHelp(false);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const showInstallAction = !isInstalled;
  const isiOS = isAppleMobile();

  async function handleInstallClick() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice;
      setDeferredInstallPrompt(null);
      return;
    }

    if (isiOS) {
      setShowIosInstallHelp((current) => !current);
    }
  }

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesQuery =
      !query ||
      [
        recipe.title,
        recipe.author,
        recipe.cuisine,
        recipe.description.join(' '),
        recipe.tags.join(' '),
        recipe.categories.join(' '),
        recipe.ingredients.join(' ')
      ]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesTag = !activeTag || recipe.tags.includes(activeTag);
    const matchesCategory = !activeCategory || recipe.categories.includes(activeCategory);

    return matchesQuery && matchesTag && matchesCategory;
  });

  if (route.type === 'recipe') {
    const recipe = recipes.find((item) => item.id === route.recipeId) ?? null;

    return (
      <div className="shell">
        <header className="hero">
          <div className="hero-spacer" aria-hidden="true" />
          <a className="hero-title-link" href={LIST_ROUTE}>
            <h1>Stovetop</h1>
          </a>
          {showInstallAction ? (
            <button type="button" className="install-button" onClick={handleInstallClick}>
              Install
            </button>
          ) : (
            <div className="hero-spacer" aria-hidden="true" />
          )}
        </header>

        <main className="page-layout">
          {showIosInstallHelp ? <InstallHelp /> : null}
          {recipe ? <RecipePage recipe={recipe} /> : <MissingRecipe />}
        </main>
      </div>
    );
  }

  return (
    <div className="shell">
      <header className="hero">
        <button
          type="button"
          className={mobileFiltersOpen ? 'hero-icon-button active' : 'hero-icon-button'}
          aria-expanded={mobileFiltersOpen}
          aria-controls="mobile-filters"
          aria-label="Toggle search and filters"
          onClick={() => setMobileFiltersOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.44 4.44 1.06-1.06-4.44-4.44A6.5 6.5 0 0 0 10.5 4Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <a className="hero-title-link" href={LIST_ROUTE}>
          <h1>Stovetop</h1>
        </a>
        {showInstallAction ? (
          <button type="button" className="install-button" onClick={handleInstallClick}>
            Install
          </button>
        ) : (
          <div className="hero-spacer" aria-hidden="true" />
        )}
      </header>

      <main className="page-layout">
        {showIosInstallHelp ? <InstallHelp /> : null}
        <section className="sidebar library-page">
          <div
            id="mobile-filters"
            className={mobileFiltersOpen ? 'filter-panel mobile-open' : 'filter-panel'}
          >
            <label className="search">
              <span>Search</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title, ingredient, tag..."
              />
            </label>

            <div className="filter-group">
              <div className="filter-header">
                <h2>Categories</h2>
                {activeCategory ? (
                  <button type="button" onClick={() => setActiveCategory('')}>
                    Clear
                  </button>
                ) : null}
              </div>
              <div className="chips">
                {allCategories.slice(0, visibleCategoryCount).map(({ value, count }) => (
                  <button
                    key={value}
                    type="button"
                    className={value === activeCategory ? 'chip active' : 'chip'}
                    onClick={() => setActiveCategory(value === activeCategory ? '' : value)}
                  >
                    <span>{value}</span>
                    <span className="chip-count">{count}</span>
                  </button>
                ))}
              </div>
              {allCategories.length > FACET_PAGE_SIZE ? (
                <button
                  type="button"
                  className="show-more-button"
                  onClick={() =>
                    setVisibleCategoryCount((current) =>
                      current >= allCategories.length
                        ? FACET_PAGE_SIZE
                        : Math.min(current + FACET_PAGE_SIZE, allCategories.length)
                    )
                  }
                >
                  {visibleCategoryCount >= allCategories.length ? 'Show Less' : 'Show More'}
                </button>
              ) : null}
            </div>

            <div className="filter-group">
              <div className="filter-header">
                <h2>Tags</h2>
                {activeTag ? (
                  <button type="button" onClick={() => setActiveTag('')}>
                    Clear
                  </button>
                ) : null}
              </div>
              <div className="chips">
                {allTags.slice(0, visibleTagCount).map(({ value, count }) => (
                  <button
                    key={value}
                    type="button"
                    className={value === activeTag ? 'chip active' : 'chip'}
                    onClick={() => setActiveTag(value === activeTag ? '' : value)}
                  >
                    <span>{value}</span>
                    <span className="chip-count">{count}</span>
                  </button>
                ))}
              </div>
              {allTags.length > FACET_PAGE_SIZE ? (
                <button
                  type="button"
                  className="show-more-button"
                  onClick={() =>
                    setVisibleTagCount((current) =>
                      current >= allTags.length
                        ? FACET_PAGE_SIZE
                        : Math.min(current + FACET_PAGE_SIZE, allTags.length)
                    )
                  }
                >
                  {visibleTagCount >= allTags.length ? 'Show Less' : 'Show More'}
                </button>
              ) : null}
            </div>
          </div>

          <section className="recipe-list">
            <div className="filter-header">
              <h2>Recipes</h2>
              <span>{filteredRecipes.length}</span>
            </div>
            {filteredRecipes.length ? (
              <div className="recipe-card-grid">
                {filteredRecipes.map((recipe) => (
                  <a
                    key={recipe.id}
                    className="recipe-card"
                    href={getRecipeHref(recipe.id)}
                    onClick={scrollToTop}
                  >
                    <div className="recipe-card-image-frame">
                      {recipe.image ? (
                        <img
                          className="recipe-card-image"
                          src={recipe.image}
                          alt={recipe.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="recipe-card-image-placeholder">
                          <span>{recipe.cuisine || 'Recipe'}</span>
                        </div>
                      )}
                    </div>
                    <span className="recipe-card-title">{recipe.title}</span>
                  </a>
                ))}
              </div>
            ) : (
              <p className="empty-state">No recipes match the current filters.</p>
            )}
          </section>
        </section>
      </main>
    </div>
  );
}

function RecipePage({ recipe }) {
  return (
    <article className="recipe-detail recipe-page">
      <a className="back-link" href={LIST_ROUTE}>
        Back to Recipes
      </a>

      <div className="detail-header">
        <div>
          <p className="eyebrow">{recipe.cuisine || 'Recipe'}</p>
          <h2>{recipe.title}</h2>
          <p className="detail-meta">
            {[
              recipe.author,
              recipe.yield,
              recipe.prepTime && `Prep ${recipe.prepTime}`,
              recipe.cookTime && `Cook ${recipe.cookTime}`,
              recipe.totalTime && `Total ${recipe.totalTime}`
            ]
              .filter(Boolean)
              .join(' • ')}
          </p>
        </div>
        {recipe.image ? (
          <div className="recipe-image-frame">
            <img className="recipe-image" src={recipe.image} alt={recipe.title} loading="lazy" />
          </div>
        ) : null}
      </div>

      {recipe.description.length ? (
        <section className="content-section">
          <h3>Description</h3>
          {recipe.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ) : null}

      <div className="detail-grid">
        <section className="content-section">
          <h3>Ingredients</h3>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="content-section">
          <h3>Instructions</h3>
          <ol className="instruction-list">
            {recipe.instructions.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </div>

      {recipe.notes.length ? (
        <section className="content-section">
          <h3>Notes</h3>
          {recipe.notes.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ) : null}

      <footer className="detail-footer">
        <div className="chips">
          {recipe.categories.map((category) => (
            <span key={category} className="chip static">
              {category}
            </span>
          ))}
          {recipe.tags.map((tag) => (
            <span key={tag} className="chip static">
              {tag}
            </span>
          ))}
        </div>
        <p className="source-line">
          {recipe.source ? (
            <a href={recipe.source} target="_blank" rel="noreferrer">
              Original source
            </a>
          ) : (
            'No source URL'
          )}
          {recipe.dateSaved ? ` • Saved ${recipe.dateSaved}` : ''}
        </p>
      </footer>
    </article>
  );
}

function MissingRecipe() {
  return (
    <article className="empty-library">
      <h2>Recipe not found</h2>
      <p>The requested recipe could not be found. Return to the library to choose another one.</p>
      <a className="back-link" href={LIST_ROUTE}>
        Back to Library
      </a>
    </article>
  );
}

function InstallHelp() {
  return (
    <section className="install-help">
      <h2>Install Stovetop</h2>
      <p>On iPhone or iPad, open the browser share menu and choose Add to Home Screen.</p>
      <p>When installed from a proper HTTPS site, Stovetop opens as its own app window instead of a normal browser tab.</p>
    </section>
  );
}

function getRoute() {
  const hash = window.location.hash || LIST_ROUTE;

  if (hash.startsWith(RECIPE_ROUTE_PREFIX)) {
    return {
      type: 'recipe',
      recipeId: decodeURIComponent(hash.slice(RECIPE_ROUTE_PREFIX.length))
    };
  }

  return { type: 'list' };
}

function getRecipeHref(recipeId) {
  return `${RECIPE_ROUTE_PREFIX}${encodeURIComponent(recipeId)}`;
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

function isStandaloneDisplay() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

function isAppleMobile() {
  const userAgent = window.navigator.userAgent || '';
  return /iPad|iPhone|iPod/.test(userAgent) || (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);
}

function collectFacetCounts(list, field) {
  const counts = new Map();

  for (const item of list) {
    for (const value of item[field] || []) {
      counts.set(value, (counts.get(value) || 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([value, count]) => ({ value, count }))
    .sort((left, right) => right.count - left.count || left.value.localeCompare(right.value));
}
