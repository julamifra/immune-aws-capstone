import { useState, useEffect, useCallback } from 'react';
import {
  fetchNews as fetchNewsService,
  addNews as addNewsService,
  updateNews as updateNewsService,
  deleteNews as deleteNewsService,
} from '@/services/newsService';

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

  const addNews = useCallback(
    async (newPostData) => {
      setLoading(true);
      try {
        const newPost = await addNewsService(newPostData);
        fetchNews();
        return newPost;
      } catch (err) {
        console.error('Error adding news to Supabase:', err);
        setError(err.message || 'Failed to add news');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fetchNews]
  );

  const updateNews = useCallback(
    async (postId, updatedPostData) => {
      setLoading(true);
      try {
        const updatedPost = await updateNewsService(postId, updatedPostData);
        fetchNews();
        return updatedPost;
      } catch (err) {
        console.error('Error updating news in Supabase:', err);
        setError(err.message || 'Failed to update news');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fetchNews]
  );

  const deleteNews = useCallback(
    async (postId) => {
      setLoading(true);
      try {
        await deleteNewsService(postId);
        fetchNews();
        return postId;
      } catch (err) {
        console.error('Error deleting news from Supabase:', err);
        setError(err.message || 'Failed to delete news');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [fetchNews]
  );

  const refreshNews = useCallback(() => {
    fetchNews();
  }, [fetchNews]);

  return {
    news,
    loading,
    error,
    totalPages,
    addNews,
    updateNews,
    deleteNews,
    refreshNews,
  };
};

export default useNews;
