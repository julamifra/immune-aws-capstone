import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { logUserEvent } from '@/services/eventLogger';
import { PhoneCall, CalendarPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga4';

const CTA = () => {
  const handleAppointmentClick = () => {
    logUserEvent('home_page_cta_request_appointment_click');
    ReactGA.event('cta_click', {
      category: 'engagement',
      label: 'Request Appointment CTA',
    });
  };

  const handleCallClick = () => {
    logUserEvent('home_page_cta_call_click');
    ReactGA.event('cta_click', {
      category: 'engagement',
      label: 'Call Us CTA',
    });
  };

  return (
    <section className="section-padding relative bg-gray-900">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        alt="Abstract background with soft light flares"
        src="https://images.unsplash.com/photo-1438986710423-1bf13038bc14"
      />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Listo para Ver el Mundo con Claridad?
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-justify">
            No dejes que los problemas de visión te limiten. En Instituto
            Oftalmológico Amigó, estamos listos para ofrecerte la mejor atención
            oftalmológica en Tenerife. ¡Da el primer paso hacia una mejor salud
            visual hoy mismo!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white font-semibold text-lg px-8 py-3 transform hover:scale-105 transition-transform duration-300 shadow-lg"
              onClick={handleAppointmentClick}
            >
              <Link to="/contacto">
                <CalendarPlus className="w-5 h-5 mr-2" />
                Contáctanos
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark font-semibold text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300"
              onClick={handleCallClick}
            >
              <a href="tel:922535971">
                <PhoneCall className="w-5 h-5 mr-2" />
                Llámanos: 922 535 971
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
