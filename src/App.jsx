import { useDeferredValue, useEffect, useRef, useState } from 'react';
import InstallHelp from './components/InstallHelp';
import LoadingRecipe from './components/LoadingRecipe';
import MissingRecipe from './components/MissingRecipe';
import RecipeLibrary from './components/RecipeLibrary';
import RecipePage from './components/RecipePage';
import { loadRecipe, loadRecipes } from './lib/recipes';
import { filterRecipes, getListHref, getRoute, LIST_ROUTE } from './lib/route-state';

const FACET_PAGE_SIZE = 5;

export default function App() {
  const [bookmarkedRecipeIds, setBookmarkedRecipeIds] = useState(() => loadBookmarkedRecipeIds());
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
  const bookmarkedRecipes = recipes.filter((recipe) => bookmarkedRecipeIds.includes(recipe.id));

  function toggleBookmark(recipeId) {
    setBookmarkedRecipeIds((current) =>
      current.includes(recipeId)
        ? current.filter((id) => id !== recipeId)
        : [...current, recipeId]
    );
  }

  useEffect(() => {
    window.localStorage.setItem('stovetop-bookmarks', JSON.stringify(bookmarkedRecipeIds));
  }, [bookmarkedRecipeIds]);

  return (
    <div className="shell">
      <header className="hero">
        {route.type === 'list' ? (
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
        ) : (
          <div className="hero-spacer" aria-hidden="true" />
        )}
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
        {route.type === 'recipe' ? (
          <>
            {isRecipeLoading ? <LoadingRecipe /> : null}
            {!isRecipeLoading && activeRecipe ? (
              <RecipePage recipe={activeRecipe} listHref={currentListHref} />
            ) : null}
            {!isRecipeLoading && !activeRecipe ? <MissingRecipe listHref={currentListHref} /> : null}
          </>
        ) : (
          <RecipeLibrary
            activeCategory={activeCategory}
            activeTag={activeTag}
            allCategories={allCategories}
            allTags={allTags}
            bookmarkedRecipeIds={bookmarkedRecipeIds}
            bookmarkedRecipes={bookmarkedRecipes}
            currentFilters={currentFilters}
            filteredRecipes={filteredRecipes}
            isLibraryLoading={isLibraryLoading}
            mobileFiltersOpen={mobileFiltersOpen}
            mobileSearchInputRef={mobileSearchInputRef}
            query={query}
            setActiveCategory={setActiveCategory}
            setActiveTag={setActiveTag}
            setMobileFiltersOpen={setMobileFiltersOpen}
            setQuery={setQuery}
            setVisibleCategoryCount={setVisibleCategoryCount}
            setVisibleTagCount={setVisibleTagCount}
            toggleBookmark={toggleBookmark}
            visibleCategoryCount={visibleCategoryCount}
            visibleTagCount={visibleTagCount}
          />
        )}
      </main>
    </div>
  );
}

function isStandaloneDisplay() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true
  );
}

function isAppleMobile() {
  const userAgent = window.navigator.userAgent || '';
  return (
    /iPad|iPhone|iPod/.test(userAgent) ||
    (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1)
  );
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

function loadBookmarkedRecipeIds() {
  try {
    const stored = window.localStorage.getItem('stovetop-bookmarks');
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((value) => typeof value === 'string') : [];
  } catch {
    return [];
  }
}
