import React from 'react';
import { Button } from '@/components/ui/button';

const Step4Confirmation = ({ onClose }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center h-full">
      <svg
        className="w-16 h-16 text-green-500 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h3 className="text-xl font-semibold mb-4">¡Solicitud Enviada!</h3>
      <p className="text-gray-600 mb-6">
        Gracias por contactarnos. Nos pondremos en contacto contigo a la
        brevedad para confirmar la fecha y hora de tu cita.
      </p>
      <Button onClick={onClose} variant="outline" className="w-full max-w-xs">
        Cerrar
      </Button>
    </div>
  );
};

export default Step4Confirmation;
