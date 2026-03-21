import React from 'react';
import { Button } from '@/components/ui/button';

const Step2Reason = ({ reasons, onSelectReason, onBack }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-center">
        Motivo de la consulta
      </h3>
      <div className="space-y-3">
        {reasons.map((reason) => (
          <Button
            variant="outline"
            key={reason}
            onClick={() => onSelectReason(reason)}
            className="w-full text-left justify-start text-base py-3 h-auto"
          >
            {reason}
          </Button>
        ))}
      </div>
      <button
        onClick={onBack}
        className="w-full mt-6 text-center text-sm text-gray-600 hover:underline"
      >
        Volver atrás
      </button>
    </div>
  );
};

export default Step2Reason;
