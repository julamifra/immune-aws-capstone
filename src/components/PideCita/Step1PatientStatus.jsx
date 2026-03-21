import React from 'react';
import { Button } from '@/components/ui/button';

const Step1PatientStatus = ({ onSelectPatientType }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-center">
        ¿Eres paciente de la clínica?
      </h3>
      <div className="space-y-4">
        <Button
          onClick={() => onSelectPatientType(true)}
          className="w-full text-lg py-3 h-auto bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white"
        >
          Sí, ya soy paciente
        </Button>
        <Button
          variant="outline"
          onClick={() => onSelectPatientType(false)}
          className="w-full text-lg py-3 h-auto"
        >
          No, soy un paciente nuevo
        </Button>
      </div>
      <p className="text-center text-sm text-gray-600 mt-8">
        Si lo prefiere, puede llamarnos directamente al{' '}
        <a
          href="tel:922535971"
          className="font-semibold text-brand-DEFAULT hover:underline"
        >
          922 535 971
        </a>
      </p>
    </div>
  );
};

export default Step1PatientStatus;
