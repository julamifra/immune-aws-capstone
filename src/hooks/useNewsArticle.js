import { useState, useEffect } from 'react';
import { fetchNewsArticleBySlug } from '@/services/newsService';

const useNewsArticle = (slug) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      setError('No slug provided');
      return;
    }

    const fetchArticle = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchNewsArticleBySlug(slug);
        setArticle(data);
      } catch (err) {
        console.error('Error fetching news article from Blog API:', err);
        setError(err.message || 'Failed to fetch news article');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  return { article, loading, error };
};

export default useNewsArticle;
