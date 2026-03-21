import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { routePaths } from '@/config/routes';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { teamMembers } from '@/data/teamMembersData';
import ReactGA from 'react-ga4';
import { logUserEvent } from '@/services/eventLogger';

const teamMembersPreview = teamMembers.map((member) => {
  return {
    name: member.name,
    specialty: member.specialty,
    imageSrc: member.urlImg,
  };
});

const duplicatedMembers = [...teamMembersPreview, ...teamMembersPreview];

const TeamPreview = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile && !isHovered) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          ease: 'linear',
          duration: 40,
          repeat: Infinity,
        },
      });
    } else if (!isMobile && isHovered) {
      controls.stop();
    }
  }, [isMobile, controls, isHovered]);

  const handlePrevious = () => {
    if (isMobile) return;

    const newIndex =
      currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);

    controls.start({
      x: `${-25 * newIndex}%`,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    });
  };

  const handleNext = () => {
    if (isMobile) return;

    const newIndex =
      currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    controls.start({
      x: `${-25 * newIndex}%`,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    });
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
    }
  };

  const handleViewTeamClick = () => {
    logUserEvent('home_page_view_team_click');
    ReactGA.event('view_team_click', {
      category: 'navigation',
      label: 'Conocer al Equipo Completo',
    });
  };

  return (
    <section className="section-padding bg-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Nuestro Equipo de{' '}
            <span className="text-gradient">Especialistas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los profesionales dedicados a cuidar tu visión con la
            máxima experiencia y calidez humana.
          </p>
        </motion.div>

        <div
          className={`relative group ${
            isMobile ? 'overflow-x-auto' : 'overflow-hidden'
          }`}
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className={`flex ${isMobile ? 'w-max' : 'w-full'}`}
            animate={!isMobile ? controls : undefined}
          >
            {duplicatedMembers.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 p-2 ${
                  isMobile ? 'w-[75vw]' : 'w-1/2 sm:w-1/3 md:w-1/4'
                }`}
              >
                <Card className="overflow-hidden rounded-2xl shadow-lg border-0 h-full">
                  <div className="relative h-72 sm:h-80 md:h-96">
                    <img
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      alt={`Retrato profesional de ${member.name}`}
                      src={member.imageSrc}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-white/80">{member.specialty}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </motion.div>

          {!isMobile && (
            <>
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

              {/* Botones de navegación */}
              <motion.button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </motion.button>

              <motion.button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </motion.button>

              {/* Indicadores de posición */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {teamMembers.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      controls.start({
                        x: `${-25 * index}%`,
                        transition: {
                          duration: 0.5,
                          ease: 'easeInOut',
                        },
                      });
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-white'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Button
            asChild
            size="lg"
            variants="outline"
            onClick={handleViewTeamClick}
            className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white text-lg px-8 py-3"
          >
            <Link to={routePaths.team}>
              Conocer al Equipo Completo <Users className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
