import { useEffect, useMemo, useState } from 'react';

export default function CollectionsPage({
  onCreateCollection,
  onDeleteCollection,
  onRemoveRecipeFromCollection,
  onRenameCollection,
  onAddRecipeToCollection,
  recipes,
  userCollections
}) {
  const [activeCollectionId, setActiveCollectionId] = useState(userCollections[0]?.id ?? '');
  const [draftName, setDraftName] = useState('');
  const [newCollectionName, setNewCollectionName] = useState('');
  const [recipeQuery, setRecipeQuery] = useState('');

  useEffect(() => {
    if (!userCollections.length) {
      setActiveCollectionId('');
      setDraftName('');
      return;
    }

    const activeCollection = userCollections.find((collection) => collection.id === activeCollectionId) ?? userCollections[0];
    setActiveCollectionId(activeCollection.id);
    setDraftName(activeCollection.name);
  }, [activeCollectionId, userCollections]);

  const activeCollection = userCollections.find((collection) => collection.id === activeCollectionId) ?? null;
  const activeRecipes = useMemo(() => {
    if (!activeCollection) {
      return [];
    }

    const recipeMap = new Map(recipes.map((recipe) => [recipe.id, recipe]));
    return activeCollection.recipeIds.map((recipeId) => recipeMap.get(recipeId)).filter(Boolean);
  }, [activeCollection, recipes]);

  const availableRecipes = useMemo(() => {
    if (!activeCollection) {
      return [];
    }

    const normalizedQuery = recipeQuery.trim().toLowerCase();

    return recipes
      .filter((recipe) => !activeCollection.recipeIds.includes(recipe.id))
      .filter((recipe) => !normalizedQuery || recipe.searchText.includes(normalizedQuery))
      .slice(0, 24);
  }, [activeCollection, recipeQuery, recipes]);

  function handleCreateCollection(event) {
    event.preventDefault();
    const name = newCollectionName.trim();

    if (!name) {
      return;
    }

    onCreateCollection(name);
    setNewCollectionName('');
  }

  function handleRenameCollection(event) {
    event.preventDefault();

    if (!activeCollection) {
      return;
    }

    const name = draftName.trim();

    if (!name || name === activeCollection.name) {
      return;
    }

    onRenameCollection(activeCollection.id, name);
  }

  return (
    <section className="collections-page" aria-label="Collections">
      <aside className="collections-sidebar">
        <div className="collections-panel">
          <div className="filter-header">
            <h2>Your Collections</h2>
            <span>{userCollections.length}</span>
          </div>

          <form className="collections-create-inline" onSubmit={handleCreateCollection}>
            <input
              type="text"
              value={newCollectionName}
              onChange={(event) => setNewCollectionName(event.target.value)}
              placeholder="Create a collection"
            />
            <button type="submit">Create</button>
          </form>

          {userCollections.length ? (
            <div className="collections-nav-list">
              {userCollections.map((collection) => (
                <button
                  key={collection.id}
                  type="button"
                  className={collection.id === activeCollectionId ? 'collections-nav-item active' : 'collections-nav-item'}
                  onClick={() => {
                    setActiveCollectionId(collection.id);
                    setDraftName(collection.name);
                  }}
                >
                  <span>{collection.name}</span>
                  <span>{collection.recipeIds.length}</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="empty-state">Create your first collection to start curating homepage picks.</p>
          )}
        </div>
      </aside>

      <section className="collections-editor">
        {activeCollection ? (
          <>
            <div className="collections-panel">
              <form className="collections-rename-form" onSubmit={handleRenameCollection}>
                <label className="search">
                  <span>Collection name</span>
                  <input
                    type="text"
                    value={draftName}
                    onChange={(event) => setDraftName(event.target.value)}
                    placeholder="Collection name"
                  />
                </label>
                <div className="collections-editor-actions">
                  <button type="submit" className="mobile-search-submit">
                    Rename
                  </button>
                  <button
                    type="button"
                    className="collections-delete-button"
                    onClick={() => onDeleteCollection(activeCollection.id)}
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>

            <div className="collections-editor-grid">
              <div className="collections-panel">
                <div className="filter-header">
                  <h2>Recipes In Collection</h2>
                  <span>{activeRecipes.length}</span>
                </div>
                {activeRecipes.length ? (
                  <div className="collections-recipe-list">
                    {activeRecipes.map((recipe) => (
                      <article key={recipe.id} className="collections-recipe-item">
                        <div>
                          <strong>{recipe.title}</strong>
                          <span>{recipe.totalTime || recipe.cuisine || 'Recipe'}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onRemoveRecipeFromCollection(activeCollection.id, recipe.id)}
                        >
                          Remove
                        </button>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="empty-state">No recipes in this collection yet.</p>
                )}
              </div>

              <div className="collections-panel">
                <div className="filter-header">
                  <h2>Add Recipes</h2>
                  <span>{availableRecipes.length}</span>
                </div>
                <label className="search">
                  <span>Search recipes</span>
                  <input
                    type="search"
                    value={recipeQuery}
                    onChange={(event) => setRecipeQuery(event.target.value)}
                    placeholder="Search by title, ingredient, tag..."
                  />
                </label>
                {availableRecipes.length ? (
                  <div className="collections-recipe-list">
                    {availableRecipes.map((recipe) => (
                      <article key={recipe.id} className="collections-recipe-item">
                        <div>
                          <strong>{recipe.title}</strong>
                          <span>{recipe.totalTime || recipe.cuisine || 'Recipe'}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onAddRecipeToCollection(activeCollection.id, recipe.id)}
                        >
                          Add
                        </button>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="empty-state">No matching recipes available to add.</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="collections-panel">
            <p className="empty-state">Create a collection to start adding recipes.</p>
          </div>
        )}
      </section>
    </section>
  );
}
