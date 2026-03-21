import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingActionButton = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 100 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0, opacity: 0, y: 100 }}
      transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
      className="fixed bottom-5 right-5 z-50 md:hidden"
    >
      <Button
        asChild
        size="icon"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-DEFAULT to-brand-dark text-white shadow-xl hover:scale-110 transition-transform duration-300 ease-in-out focus:ring-4 focus:ring-brand-DEFAULT/50"
      >
        <Link to="/contacto" aria-label="Solicitar Cita Previa">
          <CalendarPlus className="w-6 h-6" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default FloatingActionButton;
