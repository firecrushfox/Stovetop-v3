import { useEffect, useRef, useState } from 'react';
import { getListHref, getRecipeHref } from '../lib/route-state';

const DESKTOP_PAGE_SIZE = 4;

export default function HomeRecipeCarousel({ collections }) {
  const trackRef = useRef(null);
  const [activeCollectionId, setActiveCollectionId] = useState(collections[0]?.id ?? '');
  const [currentPage, setCurrentPage] = useState(0);
  const [mediaHeight, setMediaHeight] = useState(0);

  useEffect(() => {
    if (!collections.length) {
      return;
    }

    const hasActiveCollection = collections.some((collection) => collection.id === activeCollectionId);

    if (!hasActiveCollection) {
      setActiveCollectionId(collections[0].id);
    }
  }, [activeCollectionId, collections]);

  const activeCollection = collections.find((collection) => collection.id === activeCollectionId) ?? collections[0] ?? null;
  const items = activeCollection ? [...activeCollection.recipes, { id: 'see-all', type: 'cta' }] : [];

  useEffect(() => {
    setCurrentPage(0);
    trackRef.current?.scrollTo({ left: 0, behavior: 'auto' });
  }, [activeCollectionId]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollTo({
      left: track.clientWidth * currentPage,
      behavior: 'smooth'
    });
  }, [currentPage]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const syncMediaHeight = () => {
      const media = track.querySelector('.home-carousel-image-link, .home-carousel-image-placeholder');
      setMediaHeight(media instanceof HTMLElement ? media.offsetHeight : 0);
    };

    syncMediaHeight();

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(() => syncMediaHeight())
      : null;

    if (observer) {
      observer.observe(track);
    } else {
      window.addEventListener('resize', syncMediaHeight);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', syncMediaHeight);
    };
  }, [activeCollectionId, items.length]);

  const totalPages = Math.ceil(items.length / DESKTOP_PAGE_SIZE);
  const canGoPrevious = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  return (
    <section
      className="home-carousel"
      aria-label="Homepage recipe collections"
      style={mediaHeight ? { '--carousel-media-height': `${mediaHeight}px` } : undefined}
    >
      {collections.length ? (
        <>
          {collections.length > 1 ? (
            <div className="home-carousel-tabs" role="tablist" aria-label="Recipe collections">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  type="button"
                  role="tab"
                  className={collection.id === activeCollectionId ? 'home-carousel-tab active' : 'home-carousel-tab'}
                  aria-selected={collection.id === activeCollectionId}
                  onClick={() => setActiveCollectionId(collection.id)}
                >
                  {collection.name}
                </button>
              ))}
            </div>
          ) : null}

          <div className="home-carousel-shell">
            <button
              type="button"
              className="home-carousel-arrow home-carousel-arrow-left"
              aria-label="Show previous recipes"
              disabled={!canGoPrevious}
              onClick={() => setCurrentPage((page) => Math.max(page - 1, 0))}
            >
              <span aria-hidden="true">&larr;</span>
            </button>

            <div
              ref={trackRef}
              className="home-carousel-track"
              role="tabpanel"
              aria-label={activeCollection.name}
            >
              {items.map((item) =>
                item.type === 'cta' ? (
                  <article key={item.id} className="home-carousel-card home-carousel-card-cta">
                    <a className="home-carousel-see-all" href={getListHref({ collection: activeCollection.id })}>
                      <span>See all recipes</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </article>
                ) : (
                  <article key={item.id} className="home-carousel-card">
                    <a className="home-carousel-image-link" href={getRecipeHref(item.id)} onClick={scrollToTop}>
                      {item.image ? (
                        <img
                          className="home-carousel-image"
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="home-carousel-image-placeholder">
                          <span>{item.cuisine || item.categories[0] || 'Recipe'}</span>
                        </div>
                      )}
                    </a>

                    <a className="home-carousel-card-link" href={getRecipeHref(item.id)} onClick={scrollToTop}>
                      <span className="home-carousel-card-title">{item.title}</span>
                      {item.author ? <span className="home-carousel-card-author">{item.author}</span> : null}
                      <span className="home-carousel-card-meta">
                        {item.totalTime || item.categories[0] || item.cuisine || 'Featured recipe'}
                      </span>
                    </a>
                  </article>
                )
              )}
            </div>

            <button
              type="button"
              className="home-carousel-arrow home-carousel-arrow-right"
              aria-label="Show more recipes"
              disabled={!canGoNext}
              onClick={() => setCurrentPage((page) => Math.min(page + 1, totalPages - 1))}
            >
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </>
      ) : (
        <p className="empty-state">No homepage collections yet.</p>
      )}
    </section>
  );
}

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}
