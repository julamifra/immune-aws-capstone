import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useNewsArticle from '@/hooks/useNewsArticle';
import { Button } from '@/components/ui/button';
import { imageUrls } from '@/config/urls';
import {
  ArrowLeft,
  Calendar,
  User,
  Loader2,
  AlertTriangle,
} from 'lucide-react';
import { routePaths } from '@/config/routes';
import YouTubeEmbed from '@/components/Blog/YouTubeEmbed';
import HelmetPage from '@/components/HelmetPage';
import { getBlogDetailPageMeta } from '@/data/Metadata/blogDetailPageMeta';

const NewsDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { article, loading, error } = useNewsArticle(slug);

  if (loading) {
    return (
      <div className="section-padding text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <Loader2 className="h-16 w-16 text-brand-DEFAULT animate-spin mb-4" />
        <p className="text-xl text-gray-600">Cargando noticia...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-padding text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Error al cargar la noticia
        </h1>
        <p className="text-gray-600 mb-8">{error}</p>
        <Button onClick={() => navigate(routePaths.blog)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ir al Blog
        </Button>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="section-padding text-center flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">
          Noticia no encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          La noticia que buscas no existe o ha sido eliminada.
        </p>
        <Button onClick={() => navigate(routePaths.blog)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Ir al Blog
        </Button>
      </div>
    );
  }

  const imageSrc =
    article.image_slug && article.image_slug.startsWith('http')
      ? article.image_slug
      : imageUrls.newsDetailFallbackImage;

  return (
    <>
      <HelmetPage {...getBlogDetailPageMeta(article, slug)} />
      {/* Estilos para contenido de las noticias del blog */}
      <style>{`
          p {
            text-align: justify;
            margin-bottom: 15px;
            color: #555;
          }
          ul {
            list-style-type: disc;
            margin-left: 20px;
            margin-bottom: 15px;
            color: #555;
          }
          li {
            margin-bottom: 5px;
            color: #555;
          }
        `}</style>
      <div className="bg-white min-h-screen">
        <div className="relative h-72 md:h-96">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt={`Imagen de cabecera para la noticia: ${article.title}`}
            src={imageSrc}
            loading="eager"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                'https://images.unsplash.com/photo-1594969551748-fca4d0b2041d';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>

        <div className="container-custom -mt-24 md:-mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              onClick={() => navigate(routePaths.blog)}
              variant="secondary"
              className="mb-6 shadow-lg"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ir al Blog
            </Button>
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
              <div className="mb-6">
                <div className="flex flex-wrap gap-x-1 mb-4">
                  {article.category.split(',').map((cat, catIndex) => (
                    <span
                      key={catIndex}
                      className="inline-block bg-brand-extralight text-brand-DEFAULT text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {cat.trim()}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {article.title}
                </h1>
                <div className="flex flex-wrap items-center text-sm text-gray-500 mt-4 gap-x-6 gap-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-brand-DEFAULT" />
                    <span>
                      {new Date(article.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-brand-DEFAULT" />
                    <span>Por: {article.author}</span>
                  </div>
                </div>
              </div>

              <div
                className="text-lg italic text-gray-600"
                dangerouslySetInnerHTML={{ __html: article.excerpt }}
              />

              <hr className="my-8 border-t-2 border-[#555]" />

              <article className="prose prose-lg max-w-none prose-p:text-gray-700 prose-headings:text-brand-dark prose-a:text-brand-DEFAULT hover:prose-a:text-brand-dark prose-img:rounded-lg prose-img:shadow-md prose-img:my-8">
                {article.content_json &&
                  article.content_json.length > 0 &&
                  article.content_json.map((section, index) => (
                    <section key={index}>
                      {section.title && (
                        <h2 className="text-brand-dark-gray mt-[30px] mb-[15px] text-3xl">
                          {section.title}
                        </h2>
                      )}
                      {section.content && (
                        <div
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      )}
                      {section.youtube_url && (
                        <YouTubeEmbed url={section.youtube_url} />
                      )}
                    </section>
                  ))}
              </article>
              {/* <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                Artículos Relacionados
              </h2> */}
            </div>
          </motion.div>
        </div>
        <div className="h-24"></div>
      </div>
    </>
  );
};

export default NewsDetailPage;
