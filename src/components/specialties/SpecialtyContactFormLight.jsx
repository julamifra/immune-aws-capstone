import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { sendEmailService } from '@/services/contactService';

const SpecialtyContactFormLight = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'Mañana (9:00-12:00)',
    subject: 'Solicitud de cita desde página de especialidad',
    message: 'Me gustaría solicitar una llamada.', // Pre-filled message
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendEmailService(formData, 'callMe');
      toast({
        title: '¡Solicitud Enviada!',
        description:
          'Gracias. Nos pondremos en contacto contigo para confirmar tu cita.',
        className: 'bg-green-500 text-white',
      });
      setFormData((prev) => ({
        ...prev,
        name: '',
        phone: '',
        preferredTime: 'Mañana (9:00-12:00)',
      }));
    } catch (error) {
      toast({
        title: 'Error al Enviar',
        description: `Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Card className="bg-black/20 backdrop-blur-lg border border-white/20 text-white w-full max-w-sm shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">¿Te llamamos?</CardTitle>
          <CardDescription className="text-gray-200 pt-2">
            Puedes llamarnos al{' '}
            <a
              href="tel:922535971"
              className="font-semibold underline hover:text-white"
            >
              922 535 971
            </a>{' '}
            o rellenar el formulario y te llamaremos lo antes posible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name-cita" className="text-gray-200">
                Nombre *
              </Label>
              <Input
                id="name-cita"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tu nombre"
                className="bg-white/10 border-white/30 focus:bg-white/20 focus:ring-white text-white placeholder:text-gray-300"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone-cita" className="text-gray-200">
                Teléfono *
              </Label>
              <Input
                id="phone-cita"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="Tu teléfono de contacto"
                className="bg-white/10 border-white/30 focus:bg-white/20 focus:ring-white text-white placeholder:text-gray-300"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime-cita" className="text-gray-200">
                Preferencia de horario de llamada
              </Label>
              <select
                id="preferredTime-cita"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="bg-white/10 border-white/30 focus:bg-white/20 focus:ring-white text-white placeholder:text-gray-300 w-full p-2 rounded-md"
                disabled={isSubmitting}
              >
                <option className="text-gray-900">Mañana (9:00-12:00)</option>
                <option className="text-gray-900">
                  Mediodía (12:00-15:00)
                </option>
                <option className="text-gray-900">Tarde (15:00-18:00)</option>
              </select>
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-brand-dark hover:bg-gray-200 transition-colors duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />{' '}
                  Solicitando...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Solicitar llamada
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SpecialtyContactFormLight;
