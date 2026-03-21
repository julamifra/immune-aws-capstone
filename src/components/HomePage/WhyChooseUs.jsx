import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { logUserEvent } from '@/services/eventLogger';
import { HeartHandshake, Cpu, Award, Eye, ChevronRight } from 'lucide-react';
import { imageUrls } from '@/config/urls';
import ReactGA from 'react-ga4';

const reasons = [
  {
    icon: <HeartHandshake className="w-8 h-8 text-brand-DEFAULT" />,
    title: 'Acompañamiento médico continuo',
    description:
      'El mismo oftalmólogo te atiende en todo el proceso, de principio a fin.',
  },
  {
    icon: <Award className="w-8 h-8 text-brand-DEFAULT" />,
    title: 'Más de 25.000 cirugías',
    description:
      'Gran experiencia quirúrgica con decisiones basadas en criterio médico.',
  },
  {
    icon: <Eye className="w-8 h-8 text-brand-DEFAULT" />,
    title: 'Tratamiento personalizado',
    description: 'Planes a medida según tu evolución, sin protocolos rígidos.',
  },
  {
    icon: <Cpu className="w-8 h-8 text-brand-DEFAULT" />,
    title: 'Todo en un solo centro',
    description:
      'Consulta y cirugía en la misma clínica, sin traslados ni esperas.',
  },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const handleKnowUsClick = () => {
    logUserEvent('home_page_why_choose_us_click');
    ReactGA.event('why_choose_us_click', {
      category: 'engagement',
      label: 'Conócenos Mejor',
    });
  };

  return (
    <section className="section-padding bg-stone-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Imagen - se muestra primero en móvil */}
          <motion.div
            className="mb-12 lg:mb-0 order-1 lg:order-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <picture>
              <source srcSet={imageUrls.whyChooseUsImage} type="image/webp" />
              <img
                alt="Doctor oftalmólogo operando con tecnología láser de última generación en el Instituto Oftalmológico Amigó"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                src={imageUrls.whyChooseUsImage}
                loading="lazy"
                width="800"
                height="600"
              />
            </picture>
          </motion.div>

          {/* Texto + Razones + Botón */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="order-2 lg:order-none"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              ¿Por qué elegir el Instituto{' '}
              <span className="text-gradient">Oftalmológico Amigó?</span>
            </h2>

            <p className="mt-4 text-lg text-secondary-foreground max-w-2xl">
              Nuestro compromiso es combinar la tecnología más avanzada con un
              cuidado humano y personalizado para proteger lo que más importa:
              tu visión.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-DEFAULT transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 bg-brand-secondary p-3 rounded-full">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Botón centrado solo en móvil */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-10 flex justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                variants="outline"
                className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white text-lg px-8 py-3"
                onClick={handleKnowUsClick}
              >
                <Link to="/quienes-somos/sobre-nosotros">
                  Conócenos Mejor <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
