import React from 'react';
import styles from './NewsCard.module.css';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x200?text=No+Image';

/**
 * Componente para renderizar una única tarjeta de noticia.
 * @param {{ article: { urlToImage: string, title: string, description: string, url: string } }} props
 */
export const NewsCard = ({ article }) => {
  const imageUrl = article.urlToImage || article.imageUrl || article.UrlToImage || PLACEHOLDER_IMAGE;

  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={article.title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <p className={styles.cardDescription}>{article.description}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
          Leer más
        </a>
      </div>
    </article>
  );
};