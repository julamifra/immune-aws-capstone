import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';
import HelmetPage from '@/components/HelmetPage';
import Loader from '@/components/Loader';

const SpecialiesPage = () => {
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageMeta, setPageMeta] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { specialtiesData } = await import('@/data/specialtiesData');
        setSpecialties(specialtiesData);

        const { getSpecialtiesPageMeta } = await import(
          '@/data/Metadata/specialtiesPageMeta'
        );
        const meta = getSpecialtiesPageMeta();
        setPageMeta(meta);
      } catch (error) {
        console.error('Failed to load specialties data or meta:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-gray-50">
      <HelmetPage {...pageMeta} />
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Fondo de la sección Nuestras Especialidades"
            className="w-full h-full object-cover object-bottom"
            src={imageUrls.headersBackground.specialtiesPage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/60"></div>
        </div>
        <div className="container-custom relative z-10 text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark"
          >
            Nuestras Especialidades
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl text-brand-DEFAULT"
          >
            Información sobre las patologías oculares más comunes y los
            tratamientos que ofrecemos para cuidar tu salud visual.
          </motion.p>
        </div>
      </header>

      <main className="container-custom py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="h-full">
                <Card className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 group flex flex-col">
                  <CardContent className="flex flex-col items-start p-6 flex-grow">
                    <div className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110">
                      <specialty.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {specialty.title}
                    </h3>
                    <p
                      className="text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: specialty.subtitle,
                      }}
                    ></p>
                    <Link
                      to={routePaths.specialties + '/' + specialty.slug}
                      className="font-semibold text-blue-600 group-hover:underline mt-auto pt-4"
                    >
                      Conocer más &rarr;
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <section className="bg-white py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container-custom"
        >
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-brand-dark mb-2">
                ¿Tienes dudas o necesitas una cita?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Nuestro equipo está listo para ayudarte. Contáctanos y da el
                primer paso hacia una mejor visión.
              </p>
            </div>
            <Link to={routePaths.contact}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark text-white hover:shadow-lg hover:scale-105 transition-transform duration-300 text-lg px-8 py-6 shrink-0"
              >
                Contactar ahora <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SpecialiesPage;
