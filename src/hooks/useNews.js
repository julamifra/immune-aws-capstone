import { useState, useEffect, useCallback } from 'react';
import { fetchNews as fetchNewsService } from '@/services/newsService';

const useNews = (
  page = 1,
  itemsPerPage = 6,
  searchTerm = '',
  selectedCategory = 'Todos'
) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, count } = await fetchNewsService(
        page,
        itemsPerPage,
        searchTerm,
        selectedCategory
      );

      setNews(data || []);
      setTotalPages(Math.ceil(count / itemsPerPage));
    } catch (err) {
      console.error('Error fetching news from Supabase:', err);
      setError(err.message || 'Failed to fetch news');
      setNews([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [page, itemsPerPage, searchTerm, selectedCategory]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return {
    news,
    loading,
    error,
    totalPages,
  };
};

export default useNews;
