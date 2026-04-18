import { useDeferredValue, useEffect, useRef, useState } from 'react';
import AppHeader from './components/AppHeader';
import InstallHelp from './components/InstallHelp';
import LoadingRecipe from './components/LoadingRecipe';
import MissingRecipe from './components/MissingRecipe';
import RecipeLibrary from './components/RecipeLibrary';
import RecipePage from './components/RecipePage';
import SavedRecipesPage from './components/SavedRecipesPage';
import { loadRecipe, loadRecipes } from './lib/recipes';
import { filterRecipes, getListHref, getRoute, getSavedHref, HOME_ROUTE } from './lib/route-state';

const FACET_PAGE_SIZE = 5;

export default function App() {
  const [bookmarkedRecipeIds, setBookmarkedRecipeIds] = useState(() => loadBookmarkedRecipeIds());
  const initialRoute = getRoute(window.location.hash || HOME_ROUTE);
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
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [deferredInstallPrompt, setDeferredInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(isStandaloneDisplay());
  const [showIosInstallHelp, setShowIosInstallHelp] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState(null);
  const [isRecipeLoading, setIsRecipeLoading] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const normalizedDeferredQuery = deferredQuery.trim().toLowerCase();
  const currentFilters = { query, tag: activeTag, category: activeCategory };
  const currentCollectionHref = route.type === 'recipe' && route.source === 'saved'
    ? getSavedHref()
    : getListHref(currentFilters);

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
    const syncRoute = () => setRoute(getRoute(window.location.hash || HOME_ROUTE));

    window.addEventListener('hashchange', syncRoute);
    syncRoute();

    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  useEffect(() => {
    setQuery((current) => (current === route.query ? current : route.query));
    setActiveTag((current) => (current === route.tag ? current : route.tag));
    setActiveCategory((current) => (current === route.category ? current : route.category));
  }, [route.category, route.query, route.tag]);

  useEffect(() => {
    setMobileNavOpen(false);
    setMobileSearchOpen(false);
    setMobileFiltersOpen(false);
  }, [route]);

  useEffect(() => {
    if (!mobileSearchOpen && !mobileFiltersOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    document.body.style.overflow = 'hidden';
    if (mobileSearchOpen) {
      mobileSearchInputRef.current?.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileSearchOpen(false);
        setMobileFiltersOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileFiltersOpen, mobileSearchOpen]);

  useEffect(() => {
    if (route.type !== 'list') {
      return;
    }

    const nextHash = getListHref({ query, tag: activeTag, category: activeCategory });

    if (window.location.hash === nextHash) {
      return;
    }

    window.history.replaceState(null, '', nextHash);
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

  function handleSearchChange(nextQuery) {
    setQuery(nextQuery);
  }

  function handleSearchSubmit() {
    setMobileSearchOpen(false);

    if (route.type === 'list') {
      return;
    }

    const nextHash = getListHref({ query, tag: activeTag, category: activeCategory });

    if (window.location.hash === nextHash) {
      setRoute((current) => ({
        ...current,
        type: 'list',
        query,
        tag: activeTag,
        category: activeCategory
      }));
      return;
    }

    window.location.hash = nextHash;
  }

  return (
    <div className="shell">
      <AppHeader
        mobileFiltersOpen={mobileFiltersOpen}
        mobileNavOpen={mobileNavOpen}
        mobileSearchInputRef={mobileSearchInputRef}
        mobileSearchOpen={mobileSearchOpen}
        onFilterToggle={() => {
          setMobileNavOpen(false);
          setMobileSearchOpen(false);
          setMobileFiltersOpen((open) => !open);
        }}
        onInstallClick={handleInstallClick}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
        onSearchToggle={() => {
          setMobileNavOpen(false);
          setMobileFiltersOpen(false);
          setMobileSearchOpen((open) => !open);
        }}
        onNavToggle={() => {
          setMobileSearchOpen(false);
          setMobileFiltersOpen(false);
          setMobileNavOpen((open) => !open);
        }}
        query={query}
        route={route}
        setMobileNavOpen={setMobileNavOpen}
        setMobileSearchOpen={setMobileSearchOpen}
        showInstallAction={showInstallAction}
      />

      <main className="page-layout">
        {showIosInstallHelp ? <InstallHelp /> : null}
        {route.type === 'recipe' ? (
          <>
            {isRecipeLoading ? <LoadingRecipe /> : null}
            {!isRecipeLoading && activeRecipe ? (
              <RecipePage recipe={activeRecipe} listHref={currentCollectionHref} />
            ) : null}
            {!isRecipeLoading && !activeRecipe ? <MissingRecipe listHref={currentCollectionHref} /> : null}
          </>
        ) : route.type === 'list' ? (
          <RecipeLibrary
            activeCategory={activeCategory}
            activeTag={activeTag}
            allCategories={allCategories}
            allTags={allTags}
            bookmarkedRecipeIds={bookmarkedRecipeIds}
            currentFilters={currentFilters}
            filteredRecipes={filteredRecipes}
            isLibraryLoading={isLibraryLoading}
            mobileFiltersOpen={mobileFiltersOpen}
            setActiveCategory={setActiveCategory}
            setActiveTag={setActiveTag}
            setMobileFiltersOpen={setMobileFiltersOpen}
            setVisibleCategoryCount={setVisibleCategoryCount}
            setVisibleTagCount={setVisibleTagCount}
            toggleBookmark={toggleBookmark}
            visibleCategoryCount={visibleCategoryCount}
            visibleTagCount={visibleTagCount}
          />
        ) : route.type === 'saved' ? (
          <SavedRecipesPage
            bookmarkedRecipeIds={bookmarkedRecipeIds}
            bookmarkedRecipes={bookmarkedRecipes}
            isLibraryLoading={isLibraryLoading}
            toggleBookmark={toggleBookmark}
          />
        ) : (
          <HomePage />
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

function HomePage() {
  return <section className="home-page" aria-label="Homepage" />;
}
