import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Link as LinkIcon, BookOpen, ChevronRight, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { imageUrls } from '@/config/urls';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { allPublications } from '@/data/publicationsData';
import { timelineEvents } from '@/data/timelineEventsData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import HeaderInPage from '@/components/HeaderInPage';
import ImageSeparator from '@/components/ImageSeparator';
import { routePaths } from '@/config/routes';
import HelmetPage from '@/components/HelmetPage';
import { historyPageMeta } from '@/data/Metadata/historyPageMeta';

const HistoryPage = () => {
  return (
    <div className="bg-white pb-12">
      <HelmetPage {...historyPageMeta} />
      <HeaderInPage
        title={'Nuestra Historia'}
        subtitle={
          'El Instituto Oftalmológico Amigó (IOA) ha sido un referente en oftalmología avanzada en Canarias. Fundado por el Dr. Alfredo Amigó Rodríguez, su historia es el reflejo de una vocación médica sólida, una apuesta constante por la innovación tecnológica y un compromiso inquebrantable con la calidad humana y científica en la atención al paciente.'
        }
        backgroundImgUrl={imageUrls.historyPage.header}
      />

      <main className="bg-gray-50 py-16 md:py-24 relative overflow-hidden">
        <div className="container-custom text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Hitos de Nuestra Trayectoria
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto text-justify">
            Un recorrido por los hitos que marcaron el origen y la consolidación
            de nuestra historia.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'center',
            mousewheel: true,
          }}
          className="w-[90vw] mx-auto"
        >
          {/* Línea temporal */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2 z-0"></div>

          <CarouselContent className="-ml-4">
            {timelineEvents.map((event, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-3/4 md:basis-1/6 lg:basis-1/6 xl:basis-1/6 2xl:basis-1/6"
              >
                <div className="p-1 h-full">
                  <div className="p-6 bg-white rounded-lg shadow-xl border-t-4 border-brand-DEFAULT hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col transform hover:scale-105 overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bold text-brand-dark text-lg">
                        {event.year}
                      </span>
                      {event.image ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="relative group cursor-pointer">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-16 h-12 object-cover rounded-md border-2 border-gray-200 transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-md flex items-center justify-center">
                                <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            <div className="relative max-w-xl max-h-[90vh] mx-4">
                              <motion.img
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                src={event.image}
                                alt="Imagen ampliada"
                                className="w-full h-auto object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                                loading="lazy"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <event.icon />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 break-words max-w-full">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {event.description}
                    </p>
                    {event.link && (
                      <Link
                        to={event.link}
                        className="inline-flex items-center font-semibold text-brand-DEFAULT hover:text-brand-dark transition-colors mt-auto"
                      >
                        <LinkIcon className="w-4 h-4 mr-2" />
                        {event.linkText || 'Saber más'}
                      </Link>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 text-brand-DEFAULT hover:text-brand-dark z-20 md:left-4 md:top-1/2 md:h-14 md:w-14" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 text-brand-DEFAULT hover:text-brand-dark z-20 md:right-4 md:top-1/2 md:h-14 md:w-14" />
        </Carousel>
      </main>

      <section className="bg-white py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
              El Instituto Oftalmológico Amigó en la Actualidad
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Con más de 30 años de experiencia, el{' '}
              <strong>Dr. Alfredo Amigó</strong> continúa liderando el Instituto
              Oftalmológico Amigó con rigor científico y compromiso ético. Bajo
              su dirección, se han tratado{' '}
              <strong>decenas de miles de pacientes</strong> con{' '}
              <strong>técnicas avanzadas</strong> en un entorno personalizado y
              autónomo. El Instituto Oftalmológico Amigó sigue siendo un centro
              de referencia en{' '}
              <strong>cirugía refractiva, cataratas y glaucoma</strong> en{' '}
              <strong>Canarias</strong>, integrando nuevas tecnologías con
              responsabilidad y dedicación.
            </p>
          </motion.div>
        </div>
      </section>

      <ImageSeparator imageUrl={imageUrls.newsPageHeader} />

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-left mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Divulgación y Compromiso Científico
            </h2>
            <p className="text-lex text-gray-600 max-w-3xl">
              Nuestro compromiso con la excelencia nos impulsa a estar en la
              vanguardia del conocimiento, participando activamente en congresos
              y publicaciones científicas.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPublications.slice(0, 6).map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="mb-3">
                      <BookOpen className="w-8 h-8 text-brand-DEFAULT" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-brand-dark">
                      {pub.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">{pub.journal}</p>
                    <p className="text-sm text-gray-600">{pub.authors}</p>
                    <p className="text-sm font-bold text-gray-600">
                      {pub.year}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-brand-dark text-white hover:bg-brand-dark/90"
            >
              <Link to={routePaths.publications}>
                Ver todas las publicaciones
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;
