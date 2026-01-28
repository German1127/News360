import React from 'react';
import { NewsCard } from '../components/news/NewsCard';
import { useNews } from '../hooks/useNews';

export const HomePage = () => {
  const { news, loading, error } = useNews();

  if (error) return <p>Error al cargar noticias: {error.message}</p>;

  if (loading) {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <h1 className="page-title">News360</h1>
          </div>
        </nav>
        <main className="main-container">
          <div className="skeleton" style={{ height: '400px', marginBottom: '3rem', borderRadius: '16px' }}></div>
          <div className="news-grid">
            {[...Array(4)].map((_, i) => <div key={i} className="skeleton-card skeleton"></div>)}
          </div>
        </main>
      </>
    );
  }

  // Separa la primera noticia para destacarla
  const heroArticle = news.length > 0 ? news[0] : null;
  const gridArticles = news.length > 1 ? news.slice(1) : [];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="page-title">News360</h1>
        </div>
      </nav>

      <main className="main-container">
        {heroArticle && <NewsCard article={heroArticle} featured={true} />}

        <h2 className="section-title">Últimas Noticias</h2>
        
        {gridArticles.length > 0 ? (
          <div className="news-grid">
            {gridArticles.map((article) => (
              <NewsCard key={article.url} article={article} />
            ))}
          </div>
        ) : (
          <p>No hay más noticias disponibles.</p>
        )}
      </main>
    </>
  );
};