import { supabase } from '../lib/supabaseClient';

export const fetchNews = async (
  page,
  itemsPerPage,
  searchTerm,
  selectedCategory
) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage - 1;

  let query = supabase.from('news_articles').select('*', { count: 'exact' });

  if (searchTerm) {
    query = query.or(
      `title.ilike.%${searchTerm}%,excerpt.ilike.%${searchTerm}%`
    );
  }

  if (selectedCategory !== 'Todos') {
    query = query.ilike('category', `%${selectedCategory}%`);
  }

  const { data, error, count } = await query
    .order('date', { ascending: false })
    .range(startIndex, endIndex);

  if (error) throw error;

  return { data, count };
};
