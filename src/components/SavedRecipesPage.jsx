import { getRecipeHref } from '../lib/route-state';

export default function SavedRecipesPage({
  bookmarkedRecipeIds,
  bookmarkedRecipes,
  isLibraryLoading,
  toggleBookmark
}) {
  return (
    <section className="sidebar library-page saved-page">
      <section className="recipe-list">
        <div className="filter-header">
          <h2>Saved</h2>
          <span>{isLibraryLoading ? '...' : bookmarkedRecipes.length}</span>
        </div>
        {isLibraryLoading ? (
          <p className="empty-state">Loading saved recipes.</p>
        ) : bookmarkedRecipes.length ? (
          <div className="recipe-card-grid">
            {bookmarkedRecipes.map((recipe) => (
              <SavedRecipeCard
                key={recipe.id}
                bookmarkedRecipeIds={bookmarkedRecipeIds}
                recipe={recipe}
                toggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        ) : (
          <p className="empty-state">No saved recipes yet.</p>
        )}
      </section>
    </section>
  );
}

function SavedRecipeCard({ bookmarkedRecipeIds, recipe, toggleBookmark }) {
  const isBookmarked = bookmarkedRecipeIds.includes(recipe.id);
  const recipeHref = getRecipeHref(recipe.id, {}, 'saved');

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
          aria-label={isBookmarked ? `Remove ${recipe.title} from saved recipes` : `Save ${recipe.title} to saved recipes`}
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
