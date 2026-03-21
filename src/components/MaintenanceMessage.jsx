import React from 'react';
import { Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const MaintenanceMessage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 text-center p-8"
    >
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
        <Wrench
          className="h-16 w-16 text-brand-dark mx-auto mb-6"
          strokeWidth={1.5}
        />
        <h2 className="text-3xl font-bold text-brand-dark mb-3">
          Página en Revisión
        </h2>
        <p className="text-gray-600 max-w-md">
          Estamos trabajando para mejorar esta sección y ofrecerte la mejor
          información. Vuelve a visitarnos pronto.
        </p>
        <br />
        <p className="text-gray-600 max-w-md">
          <b>Mientras tanto puede usar nuestro Asistente Virtual.</b>
        </p>
      </div>
    </motion.div>
  );
};

export default MaintenanceMessage;
