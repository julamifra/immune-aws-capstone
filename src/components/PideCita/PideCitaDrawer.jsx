import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { sendEmailService } from '@/services/contactService';
import Step1PatientStatus from './Step1PatientStatus';
import Step2Reason from './Step2Reason';
import Step3Form from './Step3Form';
import Step4Confirmation from './Step4Confirmation';

const reasons = [
  'Revisión oftalmológica',
  'Revisión con interés en cirugía',
  'Consulta de seguimiento',
  'Otro motivo',
];

const PideCitaDrawer = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const stepLabels = ['Identificación', 'Motivo', 'Datos'];

  const [formData, setFormData] = useState({
    isPatient: null,
    reason: '',
    fullName: '',
    phone: '',
    email: '',
    whatsappPreference: false,
    preferredDate: null,
    preferredTime: '',
    message: '',
  });

  // Reset state when closing
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({
          isPatient: null,
          reason: '',
          fullName: '',
          phone: '',
          whatsappPreference: false,
          preferredDate: null,
          preferredTime: '',
          message: '',
        });
      }, 300); // Reset after closing animation
    }
  }, [isOpen]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSelectPatientType = (isPatient) => {
    setFormData({ ...formData, isPatient });
    handleNext();
  };

  const handleSelectReason = (reason) => {
    setFormData({ ...formData, reason });
    handleNext();
  };

  const handleSubmit = async (finalFormData) => {
    setIsSubmitting(true);

    try {
      const dataToSend = { ...finalFormData };

      if (dataToSend.preferredDate) {
        const formattedDate = new Date(
          dataToSend.preferredDate
        ).toLocaleDateString('es-ES', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        dataToSend.preferredDate = formattedDate;
      }

      await sendEmailService(dataToSend, 'onlineAppointment');
      setFormData(finalFormData);
      setStep(4);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      toast({
        variant: 'destructive',
        title: 'Error al enviar',
        description:
          'Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo más tarde o llámanos.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <Step1PatientStatus onSelectPatientType={handleSelectPatientType} />
        );
      case 2:
        return (
          <Step2Reason
            reasons={reasons}
            onSelectReason={handleSelectReason}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Step3Form
            initialData={formData}
            onSubmit={handleSubmit}
            onBack={handleBack}
            isSubmitting={isSubmitting}
          />
        );
      case 4:
        return <Step4Confirmation onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    // Overlay
    <div
      className={`fixed inset-0 bg-black bg-opacity-60 z-[999] transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-lg bg-white shadow-xl z-[1000] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 h-full flex flex-col">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Pedir Cita</h2>
            <button
              onClick={onClose}
              className="text-4xl font-light text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
          </div>
          <div className="mt-4 mb-4 text-center text-sm text-gray-600 bg-blue-50 p-3 rounded-md">
            <p>
              Una vez enviada tu solicitud, nuestro equipo te contactará para
              confirmar la cita.
            </p>
          </div>

          {step < 4 && (
            <div className="flex items-center justify-between mb-8 px-2">
              {stepLabels.map((label, index) => {
                const stepNumber = index + 1;
                const isCompleted = step > stepNumber;
                const isCurrent = step === stepNumber;

                return (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          isCompleted
                            ? 'bg-brand-dark text-white'
                            : isCurrent
                              ? 'border-2 border-brand-DEFAULT text-brand-DEFAULT'
                              : 'bg-gray-200 text-gray-500'
                        }`}
                      >
                        {isCompleted ? '✓' : stepNumber}
                      </div>
                      <p
                        className={`mt-2 text-xs font-semibold ${
                          isCurrent ? 'text-brand-DEFAULT' : 'text-gray-500'
                        }`}
                      >
                        {label}
                      </p>
                    </div>
                    {index < stepLabels.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 ${
                          isCompleted || isCurrent
                            ? 'bg-brand-DEFAULT'
                            : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}

          <div className="flex-grow overflow-y-auto px-4">
            {renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PideCitaDrawer;
