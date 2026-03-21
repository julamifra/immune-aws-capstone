import React from 'react';
import { motion } from 'framer-motion';
import { logUserEvent } from '@/services/eventLogger';
import { Link } from 'react-router-dom';
import { routePaths } from '@/config/routes';
import { Award, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VideoModal from '@/components/VideoModal';
import { imageUrls } from '@/config/urls';
import ReactGA from 'react-ga4';

const Hero = () => {
  const handleContactClick = () => {
    logUserEvent('home_page_hero_contact_click');
    ReactGA.event({
      category: 'Engagement',
      action: 'Contact Button Clicked',
      label: 'Hero Section',
    });
  };

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center text-left overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrls.homePageImage_versions[0]}
          srcSet={`${imageUrls.homePageImage_versions[0]} 480w,
                     ${imageUrls.homePageImage_versions[1]} 768w,
                     ${imageUrls.homePageImage_versions[2]} 1024w,
                     ${imageUrls.homePageImage_versions[3]} 1440w,
                     ${imageUrls.homePageImage_versions[4]} 1920w,
                     ${imageUrls.homePageImage_versions[5]} 2560w,
                     ${imageUrls.homePageImage_versions[6]} 3840w`}
          sizes="100vw"
          alt="Fondo de la clínica oftalmológica IO Amigo en Santa Cruz de Tenerife"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      <div className="absolute top-20 left-1/2 w-16 h-16 bg-brand-light/10 rounded-full opacity-30 floating-animation animate-delay-500"></div>
      <div className="absolute bottom-20 right-1/2 w-24 h-24 bg-purple-500/10 rounded-full opacity-30 floating-animation animate-delay-1000"></div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-7/12"
        >
          {/* Logo for mobile, hidden on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-4 flex md:hidden items-center justify-start"
          >
            <div className="group relative flex items-center">
              <Link to="/quienes-somos/sobre-nosotros#vista-oftalmologos">
                <img
                  src={imageUrls.vistaLogo_versions[0]}
                  srcSet={`${imageUrls.vistaLogo_versions[0]} 100w, ${imageUrls.vistaLogo_versions[1]} 200w`}
                  sizes="90px"
                  alt="Vista Oftalmólogos Logo"
                  className="h-10 w-auto"
                  loading="lazy"
                  width="90"
                  height="32"
                />
              </Link>
              <div className="absolute bottom-full mb-2 w-max max-w-xs p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none">
                <p className="font-semibold">Miembro de Vista Oftalmólogos</p>
                <p className="text-xs text-gray-300">
                  La red nacional de clínicas oftalmológicas de referencia.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Award className="w-4 h-4 text-yellow-300" />
            <span>Más de 30 años cuidando tu visión</span>
            {/* Logo for desktop, hidden on mobile */}
            <div className="w-px h-5 bg-white/50 hidden md:block"></div>
            <div className="group relative hidden md:flex items-center">
              <Link to="/quienes-somos/sobre-nosotros#vista-oftalmologos">
                <img
                  src={imageUrls.vistaLogo_versions[0]}
                  srcSet={`${imageUrls.vistaLogo_versions[0]} 100w, ${imageUrls.vistaLogo_versions[1]} 200w`}
                  sizes="90px"
                  alt="Vista Oftalmólogos Logo"
                  className="h-8 w-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                  loading="lazy"
                  width="90"
                  height="32"
                />
              </Link>
              <div className="absolute bottom-full mb-2 w-max max-w-xs p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none -translate-x-1/2 left-1/2">
                <p className="font-semibold">Miembro de Vista Oftalmólogos</p>
                <p className="text-xs text-gray-300">
                  La red nacional de clínicas oftalmológicas de referencia.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            <span className="shadow-text">Tu visión </span>
            <span className="text-gradient">nuestra prioridad absoluta</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10 shadow-text-sm"
          >
            En <strong>Instituto Oftalmológico Amigó</strong>, combinamos la
            última tecnología oftalmológica con un equipo experto y apasionado.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <Link to={routePaths.contact}>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-4 border-2 border-white text-white bg-white/10 hover:bg-brand-dark hover:text-white backdrop-blur-sm hover:shadow-xl shadow-lg"
                  onClick={() => handleContactClick()}
                >
                  Contactar
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              <VideoModal videoUrl={imageUrls.homePageVideo}>
                <Button
                  variant="link"
                  className="text-white text-lg hover:text-brand-light transition-colors duration-300 p-0 hover:no-underline"
                  onClick={() => logUserEvent('home_page_hero_video_click')}
                >
                  <PlayCircle className="w-8 h-8 mr-3" />
                  <span className="font-semibold">
                    Descubre nuestra clínica
                  </span>
                </Button>
              </VideoModal>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
