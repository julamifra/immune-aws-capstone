import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HelmetPage from '@/components/HelmetPage';
import { notFoundPageMeta } from '@/data/Metadata/notFoundPageMeta';

const fadeIn = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    delay,
  },
});

const NotFoundPage = () => {
  return (
    <div className="flex-grow flex items-center justify-center bg-gray-50/50 text-center px-4">
      <HelmetPage {...notFoundPageMeta} />
      <motion.div
        variants={fadeIn()}
        initial="initial"
        animate="animate"
        className="max-w-md"
      >
        <div className="mx-auto bg-yellow-100 rounded-full w-24 h-24 flex items-center justify-center mb-6">
          <AlertTriangle className="w-12 h-12 text-yellow-500" />
        </div>
        <h1 className="text-6xl font-extrabold text-brand-dark tracking-tighter">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mt-2 mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white"
        >
          <Link to="/">Volver a la página de inicio</Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
