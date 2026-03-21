import React, { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { imageUrls } from '@/config/urls';
import { routePaths } from '@/config/routes';
import ReactGA from 'react-ga4';
import { logUserEvent } from '@/services/eventLogger';
import Loader from '@/components/Loader';
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1,
    },
  }),
};

const SpecialtyCardItem = memo(({ specialty, index }) => {
  const handleCardClick = () => {
    const eventName = `specialty_preview_${specialty.title
      .toLowerCase()
      .replace(/\s+/g, '_')}`;
    logUserEvent(eventName);
    ReactGA.event('specialty_preview_click', {
      category: 'engagement',
      label: specialty.title,
    });
  };

  return (
    <motion.div
      key={index}
      custom={index}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <Link
        to={specialty.link}
        className="block group h-full"
        onClick={handleCardClick}
      >
        <Card className="overflow-hidden h-full shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative">
          <div className="relative h-48 overflow-hidden">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt={`Ilustración sobre el tratamiento de ${specialty.title}`}
              src={specialty.previewImageUrl}
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-brand-DEFAULT/90 via-brand-DEFAULT/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute bottom-0 left-0 right-0">
              <div className="bg-black/50 backdrop-blur-sm px-4 py-2">
                <h3 className="text-white text-xl font-bold drop-shadow-lg">
                  {specialty.title}
                </h3>
              </div>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
              <span className="bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-3 py-1 rounded-full border border-white/40 drop-shadow-lg">
                Saber más
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
});

SpecialtyCardItem.displayName = 'SpecialtyCardItem';

const SpecialtiesPreview = () => {
  const [specialties, setSpecialties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const { specialtiesData } = await import('@/data/specialtiesData');
        const filteredSpecialties = specialtiesData
          .filter(
            (specialty) =>
              specialty.slug === 'laser-femtosegundo' ||
              specialty.slug === 'operacion-presbicia' ||
              specialty.slug === 'operacion-cataratas' ||
              specialty.slug === 'cirugia-refractiva'
          )
          .map((specialty) => ({
            title: specialty.title,
            description: specialty.description,
            link: routePaths.specialties + `/${specialty.slug}`,
            imageSlug: specialty.imageSlug,
            previewImageUrl:
              specialty.previewImageUrl || imageUrls.defaultSpecialtyPreview,
          }));
        setSpecialties(filteredSpecialties);
      } catch (error) {
        console.error('Failed to load specialties data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpecialties();
  }, []);

  const handleViewAllClick = () => {
    logUserEvent('home_page_view_all_specialties_click');
    ReactGA.event('view_all_specialties_click', {
      category: 'navigation',
      label: 'View All Specialties Button',
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="bg-white pt-8 pb-16 md:pb-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <SpecialtyCardItem
              key={index}
              specialty={specialty}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            onClick={handleViewAllClick}
            className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-dark hover:text-white hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link to={routePaths.specialties}>
              Ver todas las especialidades{' '}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtiesPreview;
