import { getRecipeHref } from '../lib/route-state';

const FACET_PAGE_SIZE = 5;

export default function RecipeLibrary({
  activeCategory,
  activeTag,
  allCategories,
  allTags,
  bookmarkedRecipeIds,
  collectionName,
  currentFilters,
  filteredRecipes,
  isLibraryLoading,
  mobileFiltersOpen,
  onOpenCollectionPicker,
  onOpenRecipe,
  setActiveCategory,
  setActiveTag,
  setMobileFiltersOpen,
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
          aria-label="Close filters"
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
            <h2 id="mobile-filters-title">Filters</h2>
            <button
              type="button"
              className="filter-panel-close"
              aria-label="Close filters"
              onClick={() => setMobileFiltersOpen(false)}
            >
              Close
            </button>
          </div>
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
          <div className="filter-header">
            <h2>{collectionName ? collectionName : 'Recipes'}</h2>
            <span>{isLibraryLoading ? '...' : filteredRecipes.length}</span>
          </div>
          {collectionName ? <p className="empty-state">Showing recipes from this collection.</p> : null}
          {isLibraryLoading ? (
            <p className="empty-state">Loading recipes.</p>
          ) : filteredRecipes.length ? (
            <div className="recipe-card-grid">
              {filteredRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  bookmarkedRecipeIds={bookmarkedRecipeIds}
                  currentFilters={currentFilters}
                  onOpenCollectionPicker={onOpenCollectionPicker}
                  onOpenRecipe={onOpenRecipe}
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

function RecipeCard({ bookmarkedRecipeIds, currentFilters, onOpenCollectionPicker, onOpenRecipe, recipe, toggleBookmark }) {
  const isBookmarked = bookmarkedRecipeIds.includes(recipe.id);
  const recipeHref = getRecipeHref(recipe.id, currentFilters);

  return (
    <article className="recipe-card">
      <div className="recipe-card-media">
        <a className="recipe-card-image-link" href={recipeHref} onClick={onOpenRecipe}>
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
          className="collection-button"
          aria-label={`Add ${recipe.title} to a collection`}
          onClick={() => onOpenCollectionPicker(recipe)}
        >
          +
        </button>
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
      <a className="recipe-card-link" href={recipeHref} onClick={onOpenRecipe}>
        <span className="recipe-card-title">{recipe.title}</span>
        {recipe.totalTime ? <span className="recipe-card-meta">{recipe.totalTime}</span> : null}
      </a>
    </article>
  );
}
