import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Expand,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import HeaderInPage from '@/components/HeaderInPage';
import { useFacilities } from '@/hooks/useFacilities';
import { techItems, categories } from '@/data/facilitiesData';
import {
  imageUrls,
  googleMapsEmbedUrl,
  google3DViewMapUrl,
  googleMapGoToUrl,
} from '@/config/urls';
import VideoModal from '@/components/VideoModal';
import { logUserEvent } from '@/services/eventLogger';
import HelmetPage from '@/components/HelmetPage';
import { facilitiesPageMeta } from '@/data/Metadata/facilitiesPageMeta';

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, delay },
});

const imageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const FacilitiesPage = () => {
  const {
    activeCategory,
    currentPage,
    totalPages,
    paginatedImages,
    filteredImages,
    handleCategoryChange,
    setCurrentPage,
  } = useFacilities();
  const [selectedImage, setSelectedImage] = useState(null);
  const [direction, setDirection] = useState(0);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    setDirection(1);
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    setDirection(-1);
    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="bg-white">
      <HelmetPage {...facilitiesPageMeta} />
      <HeaderInPage
        title={'Nuestro Centro'}
        subtitle={
          'En nuestro centro oftalmológico, ponemos a tu disposición la tecnología más avanzada junto con un equipo de especialistas altamente capacitados.'
        }
        backgroundImgUrl={imageUrls.facilitiesPage.headerImg}
      />

      <main className="py-16 md:py-24 space-y-20">
        <section className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Nuestras Instalaciones
            </h2>
            <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto text-justify">
              Un espacio diseñado para tu bienestar, donde la tecnología de
              vanguardia se une a un ambiente acogedor y profesional.
            </p>
          </motion.div>

          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(cat.id)}
                className={`rounded-full transition-all duration-300 ${activeCategory === cat.id ? 'bg-brand-dark text-white' : 'text-brand-dark'}`}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 h-[600px] md:h-[700px]"
            >
              {paginatedImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.className}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => handleImageClick(image)}
                >
                  <img
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src={image.src}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Expand className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-600">
                Página {currentPage} de {totalPages}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </section>

        <motion.section
          className="bg-gray-50 py-20 md:py-28"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container-custom">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
                Un Centro Pensado para Ti
              </h2>
              <p className="text-lg text-gray-600 mt-4 text-justify">
                En el Instituto Oftalmológico Amigó, cada detalle de nuestro
                centro ha sido cuidadosamente planificado para ofrecerte una
                experiencia excepcional. Creemos que un entorno confortable y
                tecnológicamente avanzado es fundamental para tu tranquilidad y
                para alcanzar los mejores resultados.
              </p>
              <div className="flex justify-center mt-8">
                <VideoModal videoUrl={imageUrls.homePageVideo}>
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-brand-dark text-white hover:bg-brand-dark/90"
                    onClick={() => logUserEvent('facilities_page_video_click')}
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    <span>Descubre nuestra clínica</span>
                  </Button>
                </VideoModal>
              </div>
            </div>
            <Card className="shadow-2xl overflow-hidden mt-12">
              <div className="h-96 md:h-[500px] lg:h-[600px]">
                <iframe
                  title="Ubicación de la clínica del Instituto Oftalmológico Amigó"
                  src={google3DViewMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Card>
          </div>
        </motion.section>

        <motion.section
          className="container-custom"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-4">
              Tecnología y Equipamiento de Vanguardia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-justify">
              Gracias a nuestro equipamiento de vanguardia, podemos ofrecer
              diagnósticos detallados y tratamientos personalizados, asegurando
              la máxima calidad en cada paso de tu cuidado visual.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index * 0.2)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <img
                    alt={item.imageAlt}
                    className="w-full h-56 object-cover"
                    src={item.imgUrl}
                    loading="lazy"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-brand-dark">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="container-custom"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold text-brand-dark mb-6">
                  Encuéntranos
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-brand-DEFAULT mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Dirección</h3>
                      <p className="text-gray-600">
                        C. de Bravo Murillo, 16, 38003 Santa Cruz de Tenerife
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-6 h-6 text-brand-DEFAULT mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Teléfono</h3>
                      <a
                        href="tel:922535971"
                        className="text-gray-600 hover:text-brand-DEFAULT"
                      >
                        922 535 971
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-6 h-6 text-brand-DEFAULT mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <a
                        href="mailto:ioamigo@ioamigo.com"
                        className="text-gray-600 hover:text-brand-DEFAULT"
                      >
                        ioamigo@ioamigo.com
                      </a>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  size="lg"
                  className="mt-8 bg-brand-dark text-white hover:bg-brand-dark/90"
                >
                  <a
                    href={googleMapGoToUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cómo llegar
                  </a>
                </Button>
              </div>
              <div className="h-64 md:h-full">
                <iframe
                  title="Ubicación de la clínica del Instituto Oftalmológico Amigó"
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Card>
        </motion.section>
      </main>

      <Dialog
        open={!!selectedImage}
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedImage(null);
        }}
      >
        <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0 shadow-none flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={selectedImage?.src}
              src={selectedImage?.src}
              alt={selectedImage?.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg absolute"
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FacilitiesPage;
