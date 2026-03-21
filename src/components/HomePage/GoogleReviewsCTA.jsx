import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { logUserEvent } from '@/services/eventLogger';
import { ExternalLink } from 'lucide-react';
import GoogleIcon from '@/components/icons/GoogleIcon';
import { googleWriteReviewUrl } from '@/config/urls';
import ReactGA from 'react-ga4';

const GoogleReviewsCTA = () => {
  const handleReviewClick = () => {
    logUserEvent('home_page_google_review_click');
    ReactGA.event('cta_click', {
      category: 'engagement',
      label: 'Google Review CTA',
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
          className="text-center bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-200"
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white mb-6 mx-auto">
            <GoogleIcon />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            ¿Te gustó tu experiencia?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto text-justify">
            Tu opinión es muy importante. Ayuda a otros pacientes a conocernos
            compartiendo tu experiencia en Google. ¡Solo te tomará un minuto!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#4285F4] hover:bg-[#3367D6] text-white font-semibold text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <a
              href={googleWriteReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleReviewClick}
            >
              <ExternalLink className="w-5 h-5 mr-3" />
              Escribir una reseña
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-6">
            Necesitarás una cuenta de Google para dejar tu opinión.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsCTA;
