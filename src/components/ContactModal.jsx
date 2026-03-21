import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import SpecialtyContactForm from './specialties/SpecialtyContactForm';

const ContactModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control dialog open/close

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-transparent border-none shadow-none p-0 max-w-sm">
        <DialogTitle className="sr-only"></DialogTitle>
        <SpecialtyContactForm onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
