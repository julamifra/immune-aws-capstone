import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Info } from 'lucide-react';
import {
  saveConsentPreferences,
  getConsentPreferences,
  defaultPreferences,
} from '@/lib/cookieConsent';

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState(defaultPreferences);

  useEffect(() => {
    const storedPreferences = getConsentPreferences();
    if (storedPreferences) {
      setPreferences(storedPreferences);
      // If preferences exist, banner should not be visible unless explicitly reset
      setIsVisible(false);
    } else {
      setIsVisible(true); // Show if no preferences stored
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      ...defaultPreferences,
      analytics: true,
      marketing: true,
    }; // Accept all
    saveConsentPreferences(newPreferences);
    setPreferences(newPreferences);
    setIsVisible(false);
    // Reload to apply GA4 if it wasn't loaded initially
    window.location.reload();
  };

  const handleSavePreferences = () => {
    saveConsentPreferences(preferences);
    setIsVisible(false);
    // Reload to apply GA4 if it wasn't loaded initially
    window.location.reload();
  };

  const handleCheckboxChange = (category) => {
    setPreferences((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  return (
    <motion.div
      initial={{ y: '100%', opacity: 0, pointerEvents: 'none' }}
      animate={{
        y: isVisible ? '0%' : '100%',
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-[100] p-4"
    >
      <div className="container-custom">
        <div className="bg-gray-800/90 backdrop-blur-sm text-white p-6 rounded-xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <Info className="w-8 h-8 text-brand-light flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold">
                Aviso sobre el uso de cookies y almacenamiento local
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Este sitio web utiliza cookies y almacenamiento local para
                mejorar tu experiencia. Puedes gestionar tus preferencias a
                continuación.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-2">
                <label className="flex items-center cursor-not-allowed">
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    disabled
                    className="mr-2 accent-brand-DEFAULT"
                  />
                  <span>Esenciales/Funcionales (siempre activas)</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handleCheckboxChange('analytics')}
                    className="mr-2 accent-brand-DEFAULT"
                  />
                  <span>Analíticas</span>
                </label>
                {/* Add more categories if needed, e.g., Marketing */}
                {/*
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handleCheckboxChange('marketing')}
                        className="mr-2 accent-brand-DEFAULT"
                      />
                      <span>Marketing</span>
                    </label>
                    */}
              </div>

              <p className="text-sm text-gray-300 mt-4">
                Consulta más detalles en nuestra{' '}
                <Link
                  to="/politica-privacidad"
                  className="underline hover:text-brand-light transition-colors"
                >
                  Política de Privacidad
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <Button
              className="bg-brand-DEFAULT hover:bg-brand-dark w-full border border-white"
              onClick={handleAcceptAll}
            >
              Aceptar todas
            </Button>
            <Button
              className="bg-gray-600 hover:bg-gray-700 w-full"
              onClick={handleSavePreferences}
            >
              Guardar preferencias
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsentBanner;
