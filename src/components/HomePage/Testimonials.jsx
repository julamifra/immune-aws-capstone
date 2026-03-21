import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Star, UserCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { fetchGoogleReviews } from '@/services/googleReviewsService';
import { googleReadReviewUrl } from '@/config/urls';
import { cn } from '@/lib/utils';
import ReactGA from 'react-ga4';
import { logUserEvent } from '@/services/eventLogger';

const Testimonials = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [businessInfo, setBusinessInfo] = useState(null);

  const loadReviews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const placeId =
        import.meta.env.VITE_PLACE_ID || 'ChIJVWQh22LLQQwRSqEGBdoE7D4';
      const res = await fetchGoogleReviews(placeId);

      // Extraer las reseñas del objeto de respuesta
      if (res && res.reviews) {
        setData(res.reviews);
        setBusinessInfo({
          name: res.name,
          rating: res.rating,
          reviewCount: res.reviewCount,
        });
      } else {
        setError('Formato de datos inesperado.');
      }
    } catch (err) {
      setError('No se pudieron cargar las reseñas.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadReviews();
  }, [loadReviews]);

  const handleViewAllReviewsClick = () => {
    logUserEvent('home_page_view_all_reviews_click');
    ReactGA.event('view_all_reviews_click', {
      category: 'engagement',
      label: 'View All Google Reviews',
    });
  };

  const formatRelativeTime = (relativeTime) => {
    const timeMap = {
      'years ago': 'años',
      'year ago': 'año',
      'months ago': 'meses',
      'month ago': 'mes',
      'weeks ago': 'semanas',
      'week ago': 'semana',
      'days ago': 'días',
      'day ago': 'día',
      'hours ago': 'horas',
      'hour ago': 'hora',
      'minutes ago': 'minutos',
      'minute ago': 'minuto',
    };

    let translatedTime = relativeTime;
    Object.entries(timeMap).forEach(([eng, esp]) => {
      translatedTime = translatedTime.replace(eng, esp);
    });

    return `Hace ${translatedTime.replace('ago', '').trim()}`;
  };

  const truncateText = (text, maxLength = 200) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const LoadingState = () => (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
      <p className="text-gray-600 text-lg">Cargando testimonios...</p>
    </div>
  );

  const ErrorState = () => (
    <div className="flex flex-col items-center justify-center py-20">
      <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
      <p className="text-gray-900 text-lg font-semibold mb-2">
        Error al cargar testimonios
      </p>
      <p className="text-gray-600 text-center mb-6">{error}</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
      >
        Reintentar
      </button>
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lo que{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nuestros Pacientes
            </span>{' '}
            Dicen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa.
            Lee algunas de sus experiencias.
          </p>

          {businessInfo && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(businessInfo.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-gray-900">
                  {businessInfo.rating}
                </span>
              </div>
              <span className="text-gray-600">
                ({businessInfo.reviewCount} reseñas)
              </span>
            </div>
          )}
        </motion.div>

        {loading && <LoadingState />}

        {error && <ErrorState />}

        {!loading && !error && data.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              No hay testimonios disponibles en este momento.
            </p>
          </div>
        )}

        {!loading && !error && data.length > 0 && (
          <>
            <div
              className={cn(
                'grid gap-8',
                data.length === 4
                  ? 'lg:grid-cols-2 lg:max-w-4xl lg:mx-auto'
                  : 'lg:grid-cols-3'
              )}
            >
              {data.map((review, index) => (
                <motion.div
                  key={`${review.author}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-shadow duration-300 border-0 shadow-xl bg-gray-50/70 flex flex-col">
                    <CardContent className="p-8 flex-grow flex flex-col">
                      <div className="flex mb-4">
                        {[...Array(review.rating || 5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                        "{truncateText(review.text)}"
                      </p>
                      <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-200 flex items-center justify-center">
                          {review.authorPhoto ? (
                            <img
                              src={review.authorPhoto}
                              alt="Foto de perfil"
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          ) : (
                            <UserCircle className="w-8 h-8 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-grow">
                          <p className="font-bold text-gray-900">
                            {review.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {formatRelativeTime(review.relativeTime)}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Botón para ver todas las reseñas en Google */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <a
                href={googleReadReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleViewAllReviewsClick}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Ver todas las reseñas en Google
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
