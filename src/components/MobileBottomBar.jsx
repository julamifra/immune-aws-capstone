import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import ContactModal from './ContactModal';

const MobileBottomBar = ({ onPideCitaClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white text-md shadow-lg p-2 flex justify-around items-center md:hidden z-50">
      <div className="w-1/2 px-1">
        <ContactModal>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Phone className="w-4 h-4 mr-1" />
            ¿Te llamamos?
          </Button>
        </ContactModal>
      </div>
      <div className="w-1/2 px-1">
        <Button onClick={onPideCitaClick} className="w-full">
          Pedir Cita
        </Button>
      </div>
    </div>
  );
};

export default MobileBottomBar;
