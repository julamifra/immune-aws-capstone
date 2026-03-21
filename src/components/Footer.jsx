import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { imageUrls, socialLinks } from '@/config/urls';
import { routePaths } from '@/config/routes';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Link to="/" className="flex items-center space-x-4 mb-2">
                <img
                  src={imageUrls.ioaLogo_versions[0]}
                  srcSet={`${imageUrls.ioaLogo_versions[0]} 100w,
                           ${imageUrls.ioaLogo_versions[1]} 200w,
                           ${imageUrls.ioaLogo_versions[2]} 300w`}
                  sizes="144px"
                  alt="Logo del Instituto Oftalmológico Amigó en blanco"
                  className="h-12 w-auto"
                  width="144"
                  height="48"
                />
                <img
                  src={imageUrls.vistaLogo_versions[0]}
                  srcSet={`${imageUrls.vistaLogo_versions[0]} 100w,
                           ${imageUrls.vistaLogo_versions[1]} 200w,
                           ${imageUrls.vistaLogo_versions[2]} 300w`}
                  sizes="(max-width: 1023px) 105px, 147px"
                  alt="Vista Oftalmólogos Logo"
                  className="h-10 lg:h-14 w-auto"
                  loading="lazy"
                  width="105"
                  height="40"
                />
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Clínica oftalmológica líder en Santa Cruz de Tenerife,
                comprometida con la excelencia en el cuidado de tu salud visual.
              </p>
              <div className="flex space-x-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-DEFAULT transition-colors"
                  aria-label="Instagram de IO Amigo"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-DEFAULT transition-colors"
                  aria-label="YouTube de IO Amigo"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-DEFAULT transition-colors"
                  aria-label="Twitter de IO Amigo"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-brand-DEFAULT transition-colors"
                  aria-label="LinkedIn de IO Amigo"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <span className="text-lg font-semibold mb-6 block">
                Navegación
              </span>
              <nav className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Quienes Somos', path: routePaths.about },
                  { name: 'Especialidades', path: routePaths.specialties },
                  { name: 'Equipo Médico', path: routePaths.team },
                  {
                    name: 'Blog',
                    path: routePaths.blog,
                  },
                  { name: 'Contacto', path: routePaths.contact },
                  { name: 'Centro', path: routePaths.center },
                  { name: 'Historia', path: routePaths.history },
                  {
                    name: 'Sobre nosotros',
                    path: routePaths.aboutUs,
                  },
                ].map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="text-lg font-semibold mb-6 block">Contacto</span>
              <address className="space-y-4 not-italic">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-light mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400">
                    C. de Bravo Murillo, 16
                    <br />
                    38003 Santa Cruz de Tenerife
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-light flex-shrink-0" />
                  <a
                    href="tel:922535971"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    922 535 971
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-light flex-shrink-0" />
                  <a
                    href="mailto:ioamigo@ioamigo.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    ioamigo@ioamigo.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-brand-light mt-0.5 flex-shrink-0" />
                  <div className="text-gray-400">
                    <p>Lun - Vie: 9:00 - 20:00</p>
                  </div>
                </div>
              </address>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Instituto Oftalmológico Amigó. Todos los
              derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/politica-privacidad"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacidad
              </Link>
              <Link
                to="/aviso-legal"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Términos
              </Link>
              <Link
                to="/politica-cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
