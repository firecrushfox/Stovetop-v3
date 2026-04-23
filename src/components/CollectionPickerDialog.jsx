import { useEffect, useState } from 'react';

export default function CollectionPickerDialog({
  recipe,
  userCollections,
  onAddToCollection,
  onClose,
  onCreateCollection
}) {
  const [newCollectionName, setNewCollectionName] = useState('');

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  function handleCreateSubmit(event) {
    event.preventDefault();
    const normalizedName = newCollectionName.trim();

    if (!normalizedName) {
      return;
    }

    onCreateCollection(normalizedName, recipe.id);
    setNewCollectionName('');
  }

  return (
    <>
      <button
        type="button"
        className="collection-dialog-backdrop"
        aria-label="Close collections dialog"
        onClick={onClose}
      />
      <div className="collection-dialog" role="dialog" aria-modal="true" aria-labelledby="collection-dialog-title">
        <div className="collection-dialog-header">
          <div>
            <p className="eyebrow">Collections</p>
            <h2 id="collection-dialog-title">Add {recipe.title}</h2>
          </div>
          <button type="button" className="collection-dialog-close" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="collection-dialog-body">
          {userCollections.length ? (
            <div className="collection-list">
              {userCollections.map((collection) => {
                const containsRecipe = collection.recipeIds.includes(recipe.id);

                return (
                  <button
                    key={collection.id}
                    type="button"
                    className={containsRecipe ? 'collection-list-item active' : 'collection-list-item'}
                    disabled={containsRecipe}
                    onClick={() => onAddToCollection(collection.id, recipe.id)}
                  >
                    <span>{collection.name}</span>
                    <span>{containsRecipe ? 'Added' : `${collection.recipeIds.length} recipes`}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="empty-state">No collections yet. Create one below.</p>
          )}

          <form className="collection-create-form" onSubmit={handleCreateSubmit}>
            <label className="search">
              <span>New collection name</span>
              <input
                type="text"
                value={newCollectionName}
                onChange={(event) => setNewCollectionName(event.target.value)}
                placeholder="Weeknight dinners"
              />
            </label>
            <button type="submit" className="mobile-search-submit">
              Create collection
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
