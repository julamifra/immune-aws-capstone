import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useNews from '@/hooks/useNews';
import AdminPanel from '@/components/Blog/AdminPanel/AdminPanel';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import BlogList from '@/components/Blog/BlogList';
import BlogFilters from '@/components/Blog/BlogFilters';
import BlogPagination from '@/components/Blog/BlogPagination';
import { imageUrls } from '@/config/urls';
import { Loader2 } from 'lucide-react';
import HelmetPage from '@/components/HelmetPage';
import { blogPageMeta } from '@/data/Metadata/blogPageMeta';

import LatestNewsAside from '@/components/Blog/LatestNewsAside';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid');

  const {
    news,
    loading,
    error,
    totalPages,
    addNews,
    updateNews,
    deleteNews,
    refreshNews,
  } = useNews(
    currentPage,
    viewMode === 'grid' ? 6 : 15,
    searchTerm,
    selectedCategory
  );

  const { isAuthenticated } = useAuth();
  const { toast } = useToast();

  const [currentEditingPost, setCurrentEditingPost] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('add');

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error al cargar noticias',
        description: `No se pudieron cargar las noticias. ${error}`,
      });
    }
  }, [error, toast]);

  const handlePostAdded = async (newPostData) => {
    await addNews(newPostData);
  };

  const handlePostUpdated = async (postId, updatedPostData) => {
    await updateNews(postId, updatedPostData);
  };

  const handlePostDeleted = async (postId) => {
    await deleteNews(postId);
  };

  const openNewsFormDialog = (mode, post = null) => {
    setFormMode(mode);
    setCurrentEditingPost(post);
    setIsFormOpen(true);
  };

  const closeNewsFormDialog = () => {
    setIsFormOpen(false);
    setCurrentEditingPost(null);
  };

  return (
    <div className="bg-white min-h-screen">
      <HelmetPage {...blogPageMeta} />
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Fondo abstracto con tonos verdes y azules"
            className="w-full h-full object-cover"
            src={imageUrls.headersBackground.newsPage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/20"></div>
        </div>
        <div className="container-custom relative z-10 flex justify-between items-start gap-8">
          <div className="flex-grow">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-extrabold text-brand-dark"
            >
              Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg md:text-xl max-w-3xl text-brand-DEFAULT"
            >
              Tu fuente de información fiable sobre el cuidado de los ojos,
              tratamientos innovadores y consejos para mantener una visión
              saludable.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-shrink-0 pt-2"
          >
            <AdminPanel
              openNewsFormDialog={openNewsFormDialog}
              closeNewsFormDialog={closeNewsFormDialog}
              formMode={formMode}
              isFormOpen={isFormOpen}
              onPostAdded={handlePostAdded}
              onPostUpdated={handlePostUpdated}
              currentPost={currentEditingPost}
            />
          </motion.div>
        </div>
      </header>

      <main className="pt-10 pb-16 sm:pb-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="mb-8">
                <BlogFilters
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  onNewPage={() => setCurrentPage(1)}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                />
              </div>

              <div>
                {loading && (
                  <div className="flex justify-center items-center py-20">
                    <Loader2 className="h-16 w-16 text-brand-DEFAULT animate-spin" />
                    <p className="ml-4 text-xl text-gray-600">
                      Cargando noticias...
                    </p>
                  </div>
                )}

                {!loading && !error && (
                  <BlogList
                    newsItems={news}
                    isAuthenticated={isAuthenticated}
                    onEdit={(post) => openNewsFormDialog('edit', post)}
                    onDelete={handlePostDeleted}
                    searchTerm={searchTerm}
                    viewMode={viewMode}
                  />
                )}

                {!loading && !error && totalPages > 1 && (
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  />
                )}
              </div>
            </div>
            <div className="lg:col-span-4">
              <LatestNewsAside />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;
