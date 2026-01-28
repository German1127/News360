import React, { useState } from 'react';
import styles from './NewsCard.module.css';

const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/400x200?text=No+Image';

/**
 * Componente para renderizar una única tarjeta de noticia.
 * @param {{ article: object, featured?: boolean }} props
 */
export const NewsCard = ({ article, featured = false }) => {
  const [imgSrc, setImgSrc] = useState(article.urlToImage || article.imageUrl || article.UrlToImage || PLACEHOLDER_IMAGE);

  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.imageContainer}>
        <img
          src={imgSrc}
          alt={article.title}
          className={styles.cardImage}
          onError={() => setImgSrc(PLACEHOLDER_IMAGE)}
          loading="lazy"
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.cardSource}>{article.source?.name}</span>
          <span className={styles.cardDate}>{formattedDate}</span>
        </div>
        <h3 className={styles.cardTitle}>{article.title}</h3>
        <p className={styles.cardDescription}>
          {article.description?.length > 120
            ? `${article.description.substring(0, 120)}...`
            : article.description || 'Sin descripción disponible.'}
        </p>
        <div className={styles.cardFooter}>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
            Leer noticia completa &rarr;
          </a>
        </div>
      </div>
    </article>
  );
};