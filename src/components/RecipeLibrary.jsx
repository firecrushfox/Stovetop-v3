import { getRecipeHref } from '../lib/route-state';

const FACET_PAGE_SIZE = 5;

export default function RecipeLibrary({
  activeCategory,
  activeTag,
  allCategories,
  allTags,
  bookmarkedRecipeIds,
  bookmarkedRecipes,
  currentFilters,
  filteredRecipes,
  isLibraryLoading,
  mobileFiltersOpen,
  mobileSearchInputRef,
  query,
  setActiveCategory,
  setActiveTag,
  setMobileFiltersOpen,
  setQuery,
  setVisibleCategoryCount,
  setVisibleTagCount,
  toggleBookmark,
  visibleCategoryCount,
  visibleTagCount
}) {
  return (
    <>
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

          <FacetGroup
            activeValue={activeCategory}
            title="Categories"
            values={allCategories}
            visibleCount={visibleCategoryCount}
            onClear={() => setActiveCategory('')}
            onSelect={(value) => setActiveCategory(value === activeCategory ? '' : value)}
            onShowMore={() =>
              setVisibleCategoryCount((current) =>
                current >= allCategories.length
                  ? FACET_PAGE_SIZE
                  : Math.min(current + FACET_PAGE_SIZE, allCategories.length)
              )
            }
          />

          <FacetGroup
            activeValue={activeTag}
            title="Tags"
            values={allTags}
            visibleCount={visibleTagCount}
            onClear={() => setActiveTag('')}
            onSelect={(value) => setActiveTag(value === activeTag ? '' : value)}
            onShowMore={() =>
              setVisibleTagCount((current) =>
                current >= allTags.length
                  ? FACET_PAGE_SIZE
                  : Math.min(current + FACET_PAGE_SIZE, allTags.length)
              )
            }
          />
        </div>

        <section className="recipe-list">
          {!isLibraryLoading && bookmarkedRecipes.length ? (
            <section className="bookmark-list">
              <div className="filter-header">
                <h2>Bookmarks</h2>
                <span>{bookmarkedRecipes.length}</span>
              </div>
              <div className="recipe-card-grid">
                {bookmarkedRecipes.map((recipe) => (
                  <RecipeCard
                    key={`bookmark-${recipe.id}`}
                    bookmarkedRecipeIds={bookmarkedRecipeIds}
                    currentFilters={currentFilters}
                    recipe={recipe}
                    toggleBookmark={toggleBookmark}
                  />
                ))}
              </div>
            </section>
          ) : null}
          <div className="filter-header">
            <h2>Recipes</h2>
            <span>{isLibraryLoading ? '...' : filteredRecipes.length}</span>
          </div>
          {isLibraryLoading ? (
            <p className="empty-state">Loading recipes.</p>
          ) : filteredRecipes.length ? (
            <div className="recipe-card-grid">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  bookmarkedRecipeIds={bookmarkedRecipeIds}
                  currentFilters={currentFilters}
                  recipe={recipe}
                  toggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          ) : (
            <p className="empty-state">No recipes match the current filters.</p>
          )}
        </section>
      </section>
    </>
  );
}

function FacetGroup({ activeValue, onClear, onSelect, onShowMore, title, values, visibleCount }) {
  return (
    <div className="filter-group">
      <div className="filter-header">
        <h2>{title}</h2>
        {activeValue ? (
          <button type="button" onClick={onClear}>
            Clear
          </button>
        ) : null}
      </div>
      <div className="chips">
        {values.slice(0, visibleCount).map(({ value, count }) => (
          <button
            key={value}
            type="button"
            className={value === activeValue ? 'chip active' : 'chip'}
            onClick={() => onSelect(value)}
          >
            <span>{value}</span>
            <span className="chip-count">{count}</span>
          </button>
        ))}
      </div>
      {values.length > FACET_PAGE_SIZE ? (
        <button type="button" className="show-more-button" onClick={onShowMore}>
          {visibleCount >= values.length ? 'Show Less' : 'Show More'}
        </button>
      ) : null}
    </div>
  );
}

function RecipeCard({ bookmarkedRecipeIds, currentFilters, recipe, toggleBookmark }) {
  const isBookmarked = bookmarkedRecipeIds.includes(recipe.id);
  const recipeHref = getRecipeHref(recipe.id, currentFilters);

  return (
    <article className="recipe-card">
      <div className="recipe-card-media">
        <a className="recipe-card-image-link" href={recipeHref} onClick={scrollToTop}>
          {recipe.image ? (
            <img className="recipe-card-image" src={recipe.image} alt={recipe.title} loading="lazy" />
          ) : (
            <div className="recipe-card-image-placeholder">
              <span>{recipe.cuisine || 'Recipe'}</span>
            </div>
          )}
        </a>
        <button
          type="button"
          className={isBookmarked ? 'bookmark-button active' : 'bookmark-button'}
          aria-label={isBookmarked ? `Remove ${recipe.title} from bookmarks` : `Save ${recipe.title} to bookmarks`}
          aria-pressed={isBookmarked}
          onClick={() => toggleBookmark(recipe.id)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M8 4.75h8a1.25 1.25 0 0 1 1.25 1.25v13.06l-5.25-3.13-5.25 3.13V6A1.25 1.25 0 0 1 8 4.75Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <a className="recipe-card-link" href={recipeHref} onClick={scrollToTop}>
        <span className="recipe-card-title">{recipe.title}</span>
        {recipe.totalTime ? <span className="recipe-card-meta">{recipe.totalTime}</span> : null}
      </a>
    </article>
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}
