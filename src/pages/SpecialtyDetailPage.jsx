import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { findSpecialtyBySlug } from '@/lib/specialtiesUtils';
import SpecialtyContentRenderer from '@/components/specialties/SpecialtyContentRenderer';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { imageUrls } from '@/config/urls';
import { routePaths } from '@/config/routes';
import MaintenanceMessage from '@/components/MaintenanceMessage';
import HelmetPage from '@/components/HelmetPage';
import { getSpecialtyDetailPageMeta } from '@/data/Metadata/specialtyDetailPageMeta';
import Loader from '@/components/Loader';
import SpecialtyContactFormLight from '@/components/specialties/SpecialtyContactFormLight';
import { useScrollToHashSection } from '@/hooks/useScrollToHashSection';

const SpecialtyDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [specialty, setSpecialty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchSpecialty = async () => {
      setLoading(true);
      const foundSpecialty = await findSpecialtyBySlug(slug);
      if (!foundSpecialty) {
        console.log(`Specialty with slug "${slug}" not found.`);
        navigate(routePaths.specialties, { replace: true });
        return;
      }
      setSpecialty(foundSpecialty);
      setLoading(false);
    };

    fetchSpecialty();
  }, [slug, navigate]);

  useScrollToHashSection(!!specialty && !loading);

  useEffect(() => {
    if (!specialty || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px', threshold: 0 }
    );

    const sections = contentRef.current?.querySelectorAll('section[id]');
    sections?.forEach((section) => observer.observe(section));

    return () => sections?.forEach((section) => observer.unobserve(section));
  }, [specialty, loading]);

  if (loading) {
    return <Loader />;
  }

  if (!specialty) {
    return null;
  }

  const navLinks = specialty.content.filter(
    (block) =>
      block.type === 'section' ||
      block.type === 'faq' ||
      block.type === 'card_grid'
  );

  return (
    <div className="bg-gray-50/80">
      <HelmetPage {...getSpecialtyDetailPageMeta(specialty)} />
      <header className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt={`Imagen abstracta relacionada con ${specialty.title}`}
            className="w-full h-full object-cover"
            src={imageUrls.specialtyDetailHeader_versions[2]}
            srcSet={`${imageUrls.specialtyDetailHeader_versions[0]} 480w,
                     ${imageUrls.specialtyDetailHeader_versions[1]} 800w,
                     ${imageUrls.specialtyDetailHeader_versions[2]} 1200w,
                     ${imageUrls.specialtyDetailHeader_versions[3]} 1600w,
                     ${imageUrls.specialtyDetailHeader_versions[4]} 2000w`}
            sizes="100vw"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/70 to-teal-600/70"></div>
        </div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-16 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left flex flex-col h-full"
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                {specialty.title}
              </h1>
              <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl">
                {specialty.subtitle}
              </p>
              <div className="flex-1" />
              <Button
                variant="secondary"
                className="bg-white/80 hover:bg-white text-gray-700 backdrop-blur-sm w-fit mb-6 hidden md:flex"
                asChild
              >
                <Link to={routePaths.specialties} className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="crawler-volverAEspecialidades">
                    Más especialidades
                  </span>
                </Link>
              </Button>
            </motion.div>
            <div className="hidden md:flex justify-center">
              <SpecialtyContactFormLight />
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-16 md:py-24">
        <div className="lg:hidden mb-8">
          <button
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className="flex items-center justify-between w-full px-4 py-3 text-lg font-semibold text-left text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span>En esta página</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${
                isMobileNavOpen ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          {isMobileNavOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-2 py-2 px-4 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={() => setIsMobileNavOpen(false)}
                      className={`block py-2 rounded-md text-base font-medium transition-colors ${
                        activeSection === link.id
                          ? 'text-blue-700 font-semibold'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.nav>
          )}
        </div>
        {specialty.isMaintenance ? (
          <MaintenanceMessage />
        ) : (
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <aside className="lg:col-span-3 lg:sticky lg:top-28 self-start hidden lg:block">
              <nav className="space-y-2">
                <h3 className="px-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  En esta página
                </h3>
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {link.title}
                  </a>
                ))}
              </nav>
            </aside>

            <main ref={contentRef} className="lg:col-span-9">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-none text-gray-600 leading-relaxed mb-12"
              >
                <div
                  className="max-w-none text-lg text-gray-600 mb-8 text-justify"
                  dangerouslySetInnerHTML={{ __html: specialty.overview }}
                />
              </motion.div>

              <SpecialtyContentRenderer blocks={specialty.content} />
            </main>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Button asChild variant="outline" size="lg">
            <Link
              to={routePaths.specialties}
              className="flex items-center justify-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver todas las especialidades
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialtyDetailPage;
