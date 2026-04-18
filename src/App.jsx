import { useDeferredValue, useEffect, useRef, useState } from 'react';
import { loadRecipe, loadRecipes } from './lib/recipes';
import { filterRecipes, getListHref, getRecipeHref, getRoute, LIST_ROUTE } from './lib/route-state';

const FACET_PAGE_SIZE = 5;

export default function App() {
  const initialRoute = getRoute(window.location.hash || LIST_ROUTE);
  const mobileSearchInputRef = useRef(null);
  const [recipes, setRecipes] = useState([]);
  const [isLibraryLoading, setIsLibraryLoading] = useState(true);
  const [query, setQuery] = useState(initialRoute.query);
  const [activeTag, setActiveTag] = useState(initialRoute.tag);
  const [activeCategory, setActiveCategory] = useState(initialRoute.category);
  const [visibleTagCount, setVisibleTagCount] = useState(FACET_PAGE_SIZE);
  const [visibleCategoryCount, setVisibleCategoryCount] = useState(FACET_PAGE_SIZE);
  const [route, setRoute] = useState(initialRoute);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(isStandaloneDisplay());
  const [showIosInstallHelp, setShowIosInstallHelp] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const normalizedDeferredQuery = deferredQuery.trim().toLowerCase();
  const currentFilters = { query, tag: activeTag, category: activeCategory };
  const currentListHref = getListHref(currentFilters);

  const allTags = collectFacetCounts(recipes, 'tags');
  const allCategories = collectFacetCounts(recipes, 'categories');

  useEffect(() => {
    let cancelled = false;

    loadRecipes()
      .then((loadedRecipes) => {
        if (cancelled) {
          return;
        }

        setRecipes(loadedRecipes);
        setIsLibraryLoading(false);
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        setRecipes([]);
        setIsLibraryLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute(window.location.hash || LIST_ROUTE));

    window.addEventListener('hashchange', syncRoute);
    syncRoute();

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    setQuery(route.query);
    setActiveTag(route.tag);
    setActiveCategory(route.category);
  }, [route]);

  useEffect(() => {
    if (route.type !== 'list') {
      setMobileFiltersOpen(false);
    }
  }, [route]);

  useEffect(() => {
    if (!mobileFiltersOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    mobileSearchInputRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileFiltersOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileFiltersOpen]);

  useEffect(() => {
    if (route.type !== 'list') {
      return;
    }

    const nextHash = getListHref({ query, tag: activeTag, category: activeCategory });

    if (window.location.hash === nextHash) {
      return;
    }

    window.history.replaceState(null, '', nextHash);
    setRoute((current) => ({
      ...current,
      query,
      tag: activeTag,
      category: activeCategory
    }));
  }, [activeCategory, activeTag, query, route.type]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [route]);

  useEffect(() => {
    let cancelled = false;

    if (route.type !== 'recipe') {
      setActiveRecipe(null);
      setIsRecipeLoading(false);
      return () => {
        cancelled = true;
      };
    }

    setIsRecipeLoading(true);
    setActiveRecipe(null);

    loadRecipe(route.recipeId).then((recipe) => {
      if (cancelled) {
        return;
      }

      setActiveRecipe(recipe);
      setIsRecipeLoading(false);
    });

    return () => {
      cancelled = true;
    };
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

  const filteredRecipes = filterRecipes(recipes, {
    query: normalizedDeferredQuery,
    tag: activeTag,
    category: activeCategory
  });

  if (route.type === 'recipe') {
    return (
      <div className="shell">
        <header className="hero">
          <div className="hero-spacer" aria-hidden="true" />
          <a className="hero-title-link" href={currentListHref}>
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
          {isRecipeLoading ? <LoadingRecipe /> : null}
          {!isRecipeLoading && activeRecipe ? (
            <RecipePage recipe={activeRecipe} listHref={currentListHref} />
          ) : null}
          {!isRecipeLoading && !activeRecipe ? <MissingRecipe listHref={currentListHref} /> : null}
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
          aria-label={mobileFiltersOpen ? 'Close search and filters' : 'Open search and filters'}
          onClick={() => setMobileFiltersOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.44 4.44 1.06-1.06-4.44-4.44A6.5 6.5 0 0 0 10.5 4Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
              fill="currentColor"
            />
          </svg>
        </button>
        <a className="hero-title-link" href={currentListHref}>
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
        {mobileFiltersOpen ? (
          <button
            type="button"
            className="filter-drawer-backdrop"
            aria-label="Close search and filters"
            onClick={() => setMobileFiltersOpen(false)}
          />
        ) : null}
        <section className="sidebar library-page">
          <div
            id="mobile-filters"
            className={mobileFiltersOpen ? 'filter-panel mobile-open' : 'filter-panel'}
            role={mobileFiltersOpen ? 'dialog' : undefined}
            aria-modal={mobileFiltersOpen ? 'true' : undefined}
            aria-labelledby="mobile-filters-title"
          >
            <div className="filter-panel-header">
              <h2 id="mobile-filters-title">Search and Filters</h2>
              <button
                type="button"
                className="filter-panel-close"
                aria-label="Close search and filters"
                onClick={() => setMobileFiltersOpen(false)}
              >
                Close
              </button>
            </div>

            <label className="search">
              <span>Search</span>
              <input
                ref={mobileSearchInputRef}
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
              <span>{isLibraryLoading ? '...' : filteredRecipes.length}</span>
            </div>
            {isLibraryLoading ? (
              <p className="empty-state">Loading recipes.</p>
            ) : filteredRecipes.length ? (
              <div className="recipe-card-grid">
                {filteredRecipes.map((recipe) => (
                  <a
                    key={recipe.id}
                    className="recipe-card"
                    href={getRecipeHref(recipe.id, currentFilters)}
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
                    <span className="recipe-card-meta">
                      {[recipe.cuisine, recipe.totalTime, recipe.yield].filter(Boolean).join(' | ')}
                    </span>
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

function LoadingRecipe() {
  return (
    <article className="empty-library">
      <h2>Loading recipe</h2>
      <p>Fetching the full recipe content.</p>
    </article>
  );
}

function RecipePage({ recipe, listHref }) {
  return (
    <article className="recipe-detail recipe-page">
      <a className="back-link" href={listHref}>
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
              .join(' | ')}
          </p>
        </div>
        {recipe.image ? (
          <div className="recipe-image-frame">
            <img className="recipe-image" src={recipe.image} alt={recipe.title} loading="lazy" />
          </div>
        ) : null}
      </div>

      {recipe.warnings?.length ? (
        <section className="parse-warning-panel" aria-live="polite">
          <h3>Recipe Format Warnings</h3>
          <ul>
            {recipe.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        </section>
      ) : null}

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
          {recipe.dateSaved ? ` | Saved ${recipe.dateSaved}` : ''}
        </p>
      </footer>
    </article>
  );
}

function MissingRecipe({ listHref }) {
  return (
    <article className="empty-library">
      <h2>Recipe not found</h2>
      <p>The requested recipe could not be found. Return to the library to choose another one.</p>
      <a className="back-link" href={listHref}>
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
