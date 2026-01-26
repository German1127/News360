import { useEffect, useState } from 'react';
import { newsService } from '../services/newsService';

/**
 * Custom hook para obtener las noticias principales.
 * @returns {{ news: Array, loading: boolean, error: Error | null }}
 */
export const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await newsService.getTopHeadlines();
        setNews(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return { news, loading, error };
};