import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building, Users, History, Info } from 'lucide-react';
import { imageUrls } from '@/config/urls';
import { routePaths } from '@/config/routes';
import HelmetPage from '@/components/HelmetPage';
import { aboutPageMeta } from '@/data/Metadata/aboutPageMeta';

const aboutSections = [
  {
    title: 'Nuestro Centro',
    description:
      'Descubre nuestras modernas instalaciones, equipadas con la última tecnología para el cuidado de tu visión.',
    link: '/quienes-somos/centro',
    icon: Building,
  },
  {
    title: 'Profesionales',
    description:
      'Un equipo de oftalmólogos y especialistas apasionados por la salud ocular y comprometidos con tu bienestar.',
    link: '/quienes-somos/equipo',
    icon: Users,
  },
  {
    title: 'Nuestra Historia',
    description:
      'Más de 30 años de trayectoria y dedicación, innovando constantemente en el campo de la oftalmología.',
    link: '/quienes-somos/historia',
    icon: History,
  },
  {
    title: 'Sobre Nosotros',
    description:
      'Conoce nuestra misión, visión y los valores que nos guían cada día para ofrecerte el mejor servicio.',
    link: '/quienes-somos/sobre-nosotros',
    icon: Info,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      <HelmetPage {...aboutPageMeta} />
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Fondo de la sección Conoce el Instituto Oftalmológico Amigó"
            className="w-full h-full object-cover"
            src={imageUrls.headersBackground.aboutPage}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/30"></div>
        </div>
        <div className="container-custom relative z-10 text-left px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-brand-dark"
          >
            Conoce el Instituto Oftalmológico Amigó
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-3xl text-brand-DEFAULT"
          >
            Somos un referente en salud ocular en Tenerife, combinando
            experiencia, tecnología de vanguardia y un trato cercano y
            personalizado.
          </motion.p>
        </div>
      </header>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 mt-10">
        Explora el Instituto Oftalmológico Amigó
      </h2>

      <main className="container-custom py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={section.link}
                className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full group"
              >
                <div className="flex items-center justify-center bg-brand-extralight text-brand-dark rounded-full w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110">
                  <section.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 mb-4">{section.description}</p>
                <span className="font-semibold text-brand-DEFAULT group-hover:underline">
                  Saber más &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
