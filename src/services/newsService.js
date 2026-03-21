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

export const addNews = async (newPostData) => {
  const { data, error } = await supabase
    .from('news_articles')
    .insert([newPostData])
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const updateNews = async (postId, updatedPostData) => {
  const { data, error } = await supabase
    .from('news_articles')
    .update(updatedPostData)
    .eq('id', postId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const deleteNews = async (postId) => {
  // Obtener la URL de la imagen antes de eliminar la noticia
  const { data: newsArticle, error: fetchError } = await supabase
    .from('news_articles')
    .select('image_slug')
    .eq('id', postId)
    .single();

  if (fetchError) throw fetchError;

  // Si existe una imagen, eliminarla de Supabase Storage
  if (
    newsArticle &&
    newsArticle.image_slug &&
    newsArticle.image_slug !== 'default-news-image'
  ) {
    const imageUrl = newsArticle.image_slug;

    const imgName = imageUrl.split('blog-images/')[1];
    const imgPath = `blog-images/${imgName}`;

    const { error: storageError } = await supabase.storage
      .from('new-images')
      .remove([imgPath]);

    if (storageError) {
      console.error(
        'Error deleting image from Supabase Storage:',
        storageError
      );
      throw storageError;
    }
  }

  const { error } = await supabase
    .from('news_articles')
    .delete()
    .eq('id', postId);

  if (error) throw error;
  return postId;
};
