import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  User,
  Stethoscope,
  Home,
  MessageSquare,
  ClipboardCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { imageUrls } from '@/config/urls';
import HeaderInPage from '@/components/HeaderInPage';
import HelmetPage from '@/components/HelmetPage';
import { aboutUsPageMeta } from '@/data/Metadata/aboutUsPageMeta';
import { useScrollToHashSection } from '@/hooks/useScrollToHashSection';

const fadeIn = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.6,
    delay,
  },
});
const AboutUsPage = () => {
  useScrollToHashSection(true);
  return (
    <div className="bg-gray-50/50">
      <HelmetPage {...aboutUsPageMeta} />
      <HeaderInPage
        title={'Sobre Nosotros'}
        subtitle={
          'En el Instituto Oftalmológico Amigó (IOA) en Tenerife, ofrecemos una atención oftalmológica basada en más de 30 años de experiencia, criterio clínico y cercanía real.'
        }
        backgroundImgUrl={imageUrls.aboutUsPage.header}
      />

      <main className="container-custom py-16 md:py-24 space-y-20 px-4 sm:px-6 lg:px-8">
        <motion.section
          variants={fadeIn(0.4)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-left max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Nuestra Filosofía
          </h2>
          <p className="text-lg text-gray-600">
            En el corazón de la Clínica del Instituto Oftalmológico Amigó late
            una filosofía de trabajo que combina la más alta precisión médica
            con un profundo sentido de la humanidad. No solo tratamos ojos,
            cuidamos personas. Cada diagnóstico, cada tratamiento y cada sonrisa
            compartida se basa en la confianza, el respeto y la búsqueda
            incansable de la mejor solución para tu visión.
          </p>
        </motion.section>

        <motion.section
          variants={fadeIn(0.55)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-left space-y-6"
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4 text-center">
            Lo que nos hace únicos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-brand-extralight/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-brand-DEFAULT" />
                </div>
                <CardTitle className="text-2xl font-semibold text-brand-dark text-center">
                  Seguimiento por el mismo médico
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  En el Instituto Oftalmológico Amigó, el mismo oftalmólogo te
                  acompaña durante todo el proceso:{' '}
                  <strong>
                    desde la primera visita hasta el postoperatorio
                  </strong>
                  , pasando por las decisiones diagnósticas y terapéuticas.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-brand-extralight/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-brand-DEFAULT" />
                </div>
                <CardTitle className="text-2xl font-semibold text-brand-dark text-center">
                  Más de 25.000 cirugías realizadas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Amplia experiencia en cirugía de cataratas, cirugía refractiva
                  (miopía, hipermetropía, astigmatismo, presbicia) y cirugía de
                  glaucoma, con indicaciones basadas siempre en{' '}
                  <strong>criterio clínico, no estadístico</strong>.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-brand-extralight/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-brand-DEFAULT" />
                </div>
                <CardTitle className="text-2xl font-semibold text-brand-dark text-center">
                  Equipo humano estable y especializado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Tanto el personal médico como asistencial, muy especializado,
                  <strong> permanece constante a lo largo de los años</strong>.
                  Todos conocen a los pacientes y colaboran en su seguimiento de
                  forma coordinada.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-brand-extralight/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-brand-DEFAULT" />
                </div>
                <CardTitle className="text-2xl font-semibold text-brand-dark text-center">
                  Consulta y cirugía en el mismo centro
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Disponemos de{' '}
                  <strong>quirófanos propios en la clínica</strong>, lo que
                  evita traslados, listas de espera internas y cambios de
                  entorno innecesarios.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-brand-extralight/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-8 h-8 text-brand-DEFAULT" />
                </div>
                <CardTitle className="text-2xl font-semibold text-brand-dark text-center">
                  Tratamiento verdaderamente personalizado
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  No seguimos protocolos cerrados. Cada plan terapéutico se
                  ajusta a la evolución, situación y necesidades concretas del
                  paciente, con{' '}
                  <strong>seguimiento clínico activo y directo</strong>.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-brand-extralight/50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-brand-DEFAULT" />
                </div>
                <CardTitle className="text-2xl font-semibold text-brand-dark text-center">
                  Contacto médico y asistencial continuo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Ofrecemos <strong>comunicación fluida con el paciente</strong>
                  : teléfono directo, resolución de dudas, visitas presenciales
                  cuando es necesario. Estamos disponibles y atentos a cada
                  evolución.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={fadeIn(0.6)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div>
            <span className="text-brand-DEFAULT font-semibold">Tecnología</span>
            <h2 className="text-3xl font-bold text-brand-dark mt-2 mb-4">
              Innovación al Servicio de tu Visión
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-justify">
              Creemos que la mejor atención médica va de la mano de la mejor
              tecnología. Con más de 25.000 cirugías realizadas y quirófanos
              propios en el mismo centro, invertimos constantemente en equipos
              de diagnóstico y tratamiento de última generación. Desde láseres
              de femtosegundo hasta sistemas de imagen de alta resolución,
              nuestras instalaciones están preparadas para ofrecerte la máxima
              precisión y seguridad, evitando traslados y esperas innecesarias.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-dark text-white hover:bg-brand-dark/90"
            >
              <Link to="/quienes-somos/centro">
                Descubre nuestras instalaciones
              </Link>
            </Button>
          </div>
          <div>
            <img
              alt="Oftalmólogo usando un equipo de diagnóstico avanzado"
              className="rounded-lg shadow-xl"
              src={imageUrls.aboutUsPage.sala1}
              loading="lazy"
            />
          </div>
        </motion.section>

        <motion.section
          className="text-left bg-gray-100 rounded-xl p-12"
          variants={fadeIn(0.7)}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          <div className="mx-auto bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-md float-right ml-6">
            <Users className="w-10 h-10 text-brand-DEFAULT" />
          </div>
          <h2 className="text-3xl font-bold text-brand-dark mb-4">
            Un Equipo que te Cuida
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mb-8">
            Nuestro mayor activo es el talentoso equipo de profesionales que
            forman el Instituto Oftalmológico Amigó. Oftalmólogos,
            optometristas, enfermeros y personal de atención al cliente trabajan
            en sintonía para que tu experiencia sea excepcional desde el primer
            contacto.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight/50 hover:text-brand-dark"
          >
            <Link to="/quienes-somos/equipo">
              Conoce a nuestros profesionales
            </Link>
          </Button>
        </motion.section>
      </main>
      <motion.section
        id="vista-oftalmologos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 sm:py-20 bg-gray-100"
        variants={fadeIn(0.7)}
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              src={imageUrls.vistaLogo_principal} // Using a larger version of the logo
              alt="Vista Oftalmólogos Logo"
              className="h-20 w-auto mx-auto mb-10"
              width="300"
              height="80"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6"
            >
              Una Red de Excelencia en el Cuidado de tu Visión
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-lg text-gray-600 space-y-6 text-left text-justify"
            >
              <p>
                El <strong>Instituto Oftalmológico Amigó</strong> forma parte de{' '}
                <strong>VISTA OFTALMÓLOGOS</strong>, la sociedad que agrupa a
                prestigiosas clínicas oftalmológicas de autor en España. Esta
                alianza nace de la inquietud de reconocidos profesionales por
                ofrecer un servicio de máxima calidad a un mayor número de
                personas, creando una organización moderna y un servicio de
                excelencia a nivel nacional.
              </p>
              <p>
                Con más de <strong>35 centros</strong> repartidos por toda la
                geografía española, Vista Oftalmólogos se ha consolidado como un
                referente en el sector. Cada clínica miembro, como la nuestra,
                está dotada de la más avanzada tecnología y cuenta con equipos
                de oftalmólogos con más de 30 años de experiencia, poniendo
                siempre las necesidades del paciente en primer lugar.
              </p>
              <p>
                Nuestra misión conjunta es clara: mejorar la calidad de vida de
                nuestros pacientes a través de diagnósticos precisos,
                tratamientos personalizados y un compromiso inquebrantable con
                la innovación y el cuidado de la salud visual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-12"
            >
              <a
                href="https://www.vistaoftalmologos.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Visitar Web Oficial</Button>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
export default AboutUsPage;
