import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, Tag, ChevronRight } from 'lucide-react';
import { BlogItemActions } from './BlogItemActions';
import { routePaths } from '@/config/routes';

const BlogList = ({
  newsItems,
  isAuthenticated,
  onEdit,
  onDelete,
  searchTerm,
  viewMode,
}) => {
  if (newsItems.length === 0) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-xl text-gray-600 py-12"
      >
        {searchTerm
          ? 'No se encontraron noticias con los filtros seleccionados.'
          : 'Aún no hay noticias publicadas relacionadas con esta categoría.'}
      </motion.p>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {newsItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg shadow-sm hover:bg-gray-50 gap-4"
          >
            <div className="flex-grow overflow-hidden">
              <Link to={`${routePaths.blog}/${item.slug}`} title={item.title}>
                <h3 className="text-lg font-bold text-brand-dark hover:text-brand-DEFAULT transition-colors">
                  {item.title}
                </h3>
              </Link>
              <p
                className="text-sm text-gray-600 mt-1 line-clamp-2 md:line-clamp-1"
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
              />
              <p className="text-xs text-gray-500 mt-2">Por: {item.author}</p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 self-end md:self-center">
              <Button
                asChild
                variant="outline"
                size="icon"
                aria-label="Leer más"
              >
                <Link to={`${routePaths.blog}/${item.slug}`}>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
              {isAuthenticated && (
                <BlogItemActions
                  post={item}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  viewMode={viewMode}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
      {newsItems.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Card className="h-full flex flex-col overflow-hidden card-hover border-0 shadow-xl bg-gray-50/50">
            <div className="relative h-56">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt={`Imagen de la noticia: ${item.title}`}
                src={
                  item.image_slug && item.image_slug.startsWith('http')
                    ? item.image_slug
                    : 'https://images.unsplash.com/photo-1699272856522-fba05ad54f8b'
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://images.unsplash.com/photo-1699272856522-fba05ad54f8b';
                }}
              />
            </div>
            <CardHeader className="p-6">
              <div className="flex items-center text-xs text-gray-500 mb-2 space-x-3">
                <div className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-DEFAULT" />
                  <span>
                    {new Date(item.date).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                {item.category && (
                  <div className="flex items-center">
                    <Tag className="w-3.5 h-3.5 mr-1.5 text-brand-DEFAULT" />
                    <span className="bg-brand-extralight text-brand-dark font-semibold px-2 py-1 rounded-full text-xs">
                      {item.category
                        .split(',')
                        .map((cat) => cat.trim())
                        .join(', ')}
                    </span>
                  </div>
                )}
              </div>
              <CardTitle className="text-xl font-bold text-brand-dark hover:text-brand-DEFAULT transition-colors">
                <Link to={`${routePaths.blog}/${item.slug}`}>{item.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-grow">
              <CardDescription
                className="text-gray-700 leading-relaxed line-clamp-3"
                dangerouslySetInnerHTML={{ __html: item.excerpt }}
              />
            </CardContent>
            <CardFooter className="p-6 pt-0 border-t border-gray-200 mt-auto">
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center text-xs text-gray-500">
                  <User className="w-3.5 h-3.5 mr-1.5 text-brand-DEFAULT" />
                  <span>Por: {item.author}</span>
                </div>
                <Button
                  asChild
                  variant="link"
                  className="text-brand-DEFAULT hover:text-brand-dark p-0 text-sm"
                >
                  <Link to={`${routePaths.blog}/${item.slug}`}>
                    Leer más <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </CardFooter>
            {isAuthenticated && (
              <div className="mt-4 p-4 border-t border-gray-200">
                <BlogItemActions
                  post={item}
                  onEdit={onEdit}
                  onDelete={onDelete}
                  viewMode={viewMode}
                />
              </div>
            )}
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogList;
