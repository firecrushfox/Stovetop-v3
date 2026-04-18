export default function MissingRecipe({ listHref }) {
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
