import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

import SocialFollow from '@/components/SocialFollow';
import ContactModal from '@/components/ContactModal'; // New import
import { googleMapsEmbedUrl } from '@/config/urls';
import { contactInfo } from '@/data/contactInfoData';
import HelmetPage from '@/components/HelmetPage';
import { contactPageMeta } from '@/data/Metadata/contactPageMeta';
import { logUserEvent } from '@/services/eventLogger'; // New import

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();
    if (!token) {
      toast({
        title: 'Verificación Requerida',
        description: 'Por favor, completa el reCAPTCHA para continuar.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendEmailService(
        { ...formData, recaptchaToken: token },
        'contactForm'
      );

      toast({
        title: '¡Mensaje Enviado!',
        description:
          'Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad.',
        className: 'bg-green-500 text-white',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      recaptchaRef.current.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error al Enviar',
        description: `Hubo un problema al enviar tu mensaje: ${error.message}. Por favor, inténtalo de nuevo más tarde.`,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-padding bg-white min-h-screen">
      <HelmetPage {...contactPageMeta} />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ponte en <span className="text-gradient">Contacto</span> con
            Nosotros
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes preguntas o deseas programar una cita? Estamos aquí para
            ayudarte. Utiliza el formulario o contáctanos directamente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="shadow-xl border-0 bg-gray-50/50">
                <CardHeader className="p-6 md:p-8">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-brand-dark">
                    Envíanos tu Consulta
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Rellena el formulario y te responderemos lo antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          Nombre completo *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Ej: Ana García López"
                          className="border-gray-300 focus:border-brand-DEFAULT focus:ring-brand-DEFAULT"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Ej: 600 123 456"
                          className="border-gray-300 focus:border-brand-DEFAULT focus:ring-brand-DEFAULT"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        Correo electrónico *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Ej: tuemail@ejemplo.com"
                        className="border-gray-300 focus:border-brand-DEFAULT focus:ring-brand-DEFAULT"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">
                        Asunto *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Ej: Consulta sobre cirugía refractiva"
                        className="border-gray-300 focus:border-brand-DEFAULT focus:ring-brand-DEFAULT"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Escribe aquí tu mensaje detallado..."
                        rows={5}
                        className="border-gray-300 focus:border-brand-DEFAULT focus:ring-brand-DEFAULT"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="flex justify-center py-4">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white text-lg py-3 transition-all duration-300 ease-in-out transform hover:scale-105"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Enviando...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send className="w-5 h-5" />
                          <span>Enviar Mensaje</span>
                        </div>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Los campos marcados con * son obligatorios. Tu privacidad
                      es importante para nosotros.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="shadow-xl border-0 bg-gray-50/50 p-6 text-center w-full">
                <CardTitle className="text-2xl font-bold text-brand-dark mb-4">
                  ¿Prefieres que te llamemos?
                </CardTitle>
                <CardDescription className="text-gray-600 mb-6">
                  Si lo deseas, puedes llamarnos directamente al{' '}
                  <a
                    href={`tel:${contactInfo.find((info) => info.title === 'Llámanos')?.content.replace(/\s/g, '')}`}
                    className="font-semibold underline text-brand-DEFAULT hover:text-brand-dark"
                  >
                    {
                      contactInfo.find((info) => info.title === 'Llámanos')
                        ?.content
                    }
                  </a>{' '}
                  o, si lo prefieres, déjanos tus datos y te contactaremos
                  nosotros.
                </CardDescription>
                <ContactModal>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white text-lg py-3 transition-all duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => logUserEvent('contact_page_call_us_click')}
                  >
                    ¡Sí, llámame!
                  </Button>
                </ContactModal>
              </Card>
            </motion.div>
          </div>

          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <Card className="shadow-xl border-0">
                <CardHeader className="p-6 bg-brand-extralight/30">
                  <CardTitle className="text-2xl font-bold text-brand-dark">
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-brand-extralight rounded-lg flex items-center justify-center mt-1">
                        <info.icon className="w-5 h-5 text-brand-DEFAULT" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {info.title}
                        </h4>
                        <p className="text-brand-DEFAULT font-medium">
                          {info.title === 'Escríbenos' ? (
                            <a
                              href={`mailto:${info.content}`}
                              className="hover:underline"
                            >
                              {info.content}
                            </a>
                          ) : info.title === 'Llámanos' ? (
                            <a
                              href={`tel:${info.content.replace(/\s/g, '')}`}
                              className="hover:underline"
                            >
                              {info.content}
                            </a>
                          ) : (
                            info.content
                          )}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              id="mapa"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-80 rounded-xl overflow-hidden shadow-xl text-justify"
            >
              <iframe
                title="Ubicación de la clínica del Instituto Oftalmológico Amigo"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
        <SocialFollow />
      </div>
    </div>
  );
};

export default ContactPage;
