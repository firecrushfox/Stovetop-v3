export default function RecipePage({ onOpenCollectionPicker, recipe, listHref }) {
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
          <button
            type="button"
            className="detail-collection-button"
            onClick={() => onOpenCollectionPicker(recipe)}
          >
            Add to collection
          </button>
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
