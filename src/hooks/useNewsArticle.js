import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

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
        const { data, error: dbError } = await supabase
          .from('news_articles')
          .select('*')
          .eq('slug', slug)
          .single();

        if (dbError) {
          if (dbError.code === 'PGRST116') {
            // No rows found
            setArticle(null);
          } else {
            throw dbError;
          }
        }
        setArticle(data);
      } catch (err) {
        console.error(
          'Error fetching news article by slug from Supabase:',
          err
        );
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
