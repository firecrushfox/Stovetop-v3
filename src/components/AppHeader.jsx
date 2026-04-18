import { HOME_ROUTE, LIST_ROUTE, SAVED_ROUTE } from '../lib/route-state';

export default function AppHeader({
  mobileFiltersOpen,
  mobileNavOpen,
  mobileSearchInputRef,
  mobileSearchOpen,
  onFilterToggle,
  onInstallClick,
  onSearchChange,
  onSearchSubmit,
  onSearchToggle,
  onNavToggle,
  query,
  route,
  setMobileNavOpen,
  setMobileSearchOpen,
  showInstallAction
}) {
  const isListRoute = route.type === 'list';
  const isSavedRoute = route.type === 'saved';

  function handleSearchSubmit(event) {
    event.preventDefault();
    onSearchSubmit();
  }

  return (
    <>
      <header className="hero">
        <div className="hero-leading-actions">
          <button
            type="button"
            className={mobileNavOpen ? 'hero-icon-button active hero-menu-button' : 'hero-icon-button hero-menu-button'}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-nav"
            aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={onNavToggle}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {mobileNavOpen ? (
                <path
                  d="M6.5 6.5l11 11m0-11l-11 11"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7.25h16M4 12h16M4 16.75h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
          <button
            type="button"
            className={mobileSearchOpen ? 'hero-icon-button active hero-search-button' : 'hero-icon-button hero-search-button'}
            aria-expanded={mobileSearchOpen}
            aria-controls="mobile-search"
            aria-label={mobileSearchOpen ? 'Close search' : 'Open search'}
            onClick={onSearchToggle}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.44 4.44 1.06-1.06-4.44-4.44A6.5 6.5 0 0 0 10.5 4Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
                fill="currentColor"
              />
            </svg>
          </button>
          {isListRoute ? (
            <button
              type="button"
              className={mobileFiltersOpen ? 'hero-icon-button active hero-filter-button' : 'hero-icon-button hero-filter-button'}
              aria-expanded={mobileFiltersOpen}
              aria-controls="mobile-filters"
              aria-label={mobileFiltersOpen ? 'Close filters' : 'Open filters'}
              onClick={onFilterToggle}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4.75 6.25h14.5M8 12h12M11.25 17.75h9.25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="6.25" r="1.25" fill="currentColor" />
                <circle cx="10.25" cy="12" r="1.25" fill="currentColor" />
                <circle cx="13.5" cy="17.75" r="1.25" fill="currentColor" />
              </svg>
            </button>
          ) : null}
        </div>

        <a className="hero-title-link" href={HOME_ROUTE}>
          <h1>Stovetop</h1>
        </a>

        <div className="hero-trailing-actions">
          <form className="hero-search-form" role="search" onSubmit={handleSearchSubmit}>
            <label className="hero-search-field">
              <span className="sr-only">Search recipes</span>
              <button type="submit" className="hero-search-submit" aria-label="Search recipes">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.44 4.44 1.06-1.06-4.44-4.44A6.5 6.5 0 0 0 10.5 4Zm0 1.5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <input
                type="search"
                value={query}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Search recipes"
              />
            </label>
          </form>
          {showInstallAction ? (
            <button type="button" className="install-button" onClick={onInstallClick}>
              Install
            </button>
          ) : (
            <div className="hero-spacer" aria-hidden="true" />
          )}
        </div>
      </header>

      <nav className="top-nav" aria-label="Primary">
        <a className={isListRoute ? 'top-nav-link active' : 'top-nav-link'} href={LIST_ROUTE}>
          Recipes
        </a>
        <a className={isSavedRoute ? 'top-nav-link active' : 'top-nav-link'} href={SAVED_ROUTE}>
          Saved
        </a>
      </nav>

      {mobileNavOpen ? (
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close navigation menu"
          onClick={() => setMobileNavOpen(false)}
        />
      ) : null}
      <nav
        id="mobile-nav"
        className={mobileNavOpen ? 'mobile-nav-panel open' : 'mobile-nav-panel'}
        aria-label="Mobile navigation"
      >
        <a
          className={isListRoute ? 'mobile-nav-link active' : 'mobile-nav-link'}
          href={LIST_ROUTE}
          onClick={() => setMobileNavOpen(false)}
        >
          Recipes
        </a>
        <a
          className={isSavedRoute ? 'mobile-nav-link active' : 'mobile-nav-link'}
          href={SAVED_ROUTE}
          onClick={() => setMobileNavOpen(false)}
        >
          Saved
        </a>
      </nav>

      {mobileSearchOpen ? (
        <button
          type="button"
          className="filter-drawer-backdrop"
          aria-label="Close search"
          onClick={() => setMobileSearchOpen(false)}
        />
      ) : null}
      <div
        id="mobile-search"
        className={mobileSearchOpen ? 'header-search-panel mobile-open' : 'header-search-panel'}
        role={mobileSearchOpen ? 'dialog' : undefined}
        aria-modal={mobileSearchOpen ? 'true' : undefined}
        aria-labelledby="mobile-search-title"
      >
        <div className="filter-panel-header">
          <h2 id="mobile-search-title">Search Recipes</h2>
          <button
            type="button"
            className="filter-panel-close"
            aria-label="Close search"
            onClick={() => setMobileSearchOpen(false)}
          >
            Close
          </button>
        </div>
        <form className="header-search-mobile-form" role="search" onSubmit={handleSearchSubmit}>
          <label className="search">
            <span>Search</span>
            <input
              ref={mobileSearchInputRef}
              type="search"
              value={query}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search title, ingredient, tag..."
            />
          </label>
          <button type="submit" className="mobile-search-submit">
            Show results
          </button>
        </form>
      </div>
    </>
  );
}
