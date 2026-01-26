import React from 'react';
import { NewsCard } from '../components/news/NewsCard';
import { useNews } from '../hooks/useNews';

export const HomePage = () => {
  const { news, loading, error } = useNews();

  if (loading) return <p>Cargando noticias...</p>;
  if (error) return <p>Error al cargar noticias: {error.message}</p>;

  return (
    <section className="home-page">
      <h1>Últimas Noticias</h1>
      {news.length > 0 ? (
        <div className="news-grid">
          {news.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>
      ) : (
        <p>No hay noticias disponibles.</p>
      )}
    </section>
  );
};