import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { routePaths } from '@/config/routes';
import { highlightsPreview } from '@/data/facilitiesData';
import ReactGA from 'react-ga4';
import { logUserEvent } from '@/services/eventLogger';

const HighlightCardItem = memo(({ item, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay }}
  >
    <Card className="h-full card-hover border-0 shadow-lg overflow-hidden">
      <div className="relative h-56">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          alt={item.title}
          src={item.imgUrl}
          loading="lazy"
        />
      </div>
      <CardHeader className="pt-6">
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 bg-brand-extralight rounded-full flex items-center justify-center">
            <item.icon className="w-6 h-6 text-brand-DEFAULT" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900 text-center">
          {item.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-center text-sm leading-relaxed">
          {item.description}
        </p>
      </CardContent>
    </Card>
  </motion.div>
));

HighlightCardItem.displayName = 'HighlightCardItem';

const FacilitiesPreview = () => {
  const handleExploreClick = () => {
    logUserEvent('home_page_explore_facilities_click');
    ReactGA.event('explore_facilities_click', {
      category: 'navigation',
      label: 'Explorar Instalaciones',
    });
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Instalaciones <span className="text-gradient">de Vanguardia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre un entorno moderno y tecnológicamente avanzado, diseñado
            para ofrecerte la mejor atención oftalmológica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlightsPreview.map((item) => (
            <HighlightCardItem
              key={item.title}
              item={item}
              delay={item.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            onClick={handleExploreClick}
            className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white text-lg px-8 py-3"
          >
            <Link to={routePaths.center}>
              Explorar Instalaciones <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesPreview;
