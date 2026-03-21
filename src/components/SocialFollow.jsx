import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { imageUrls, socialLinks as urlLinks } from '@/config/urls';
import ReactGA from 'react-ga4';

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    url: urlLinks.instagram,
    handle: '@ioamigo',
  },
  {
    name: 'X (Twitter)',
    icon: Twitter,
    url: urlLinks.twitter,
    handle: '@ioamigo',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: urlLinks.youtube,
    handle: '@Ioamigo',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: urlLinks.linkedin,
    handle: 'Canal IO Amigo',
  },
];

const SocialFollow = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleSocialClick = (socialName) => {
    ReactGA.event('social_follow_click', {
      category: 'engagement',
      label: socialName,
    });
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-20 pt-20 border-t border-gray-200"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Síguenos en <span className="text-gradient">Redes Sociales</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Mantente al día con nuestras últimas noticias, consejos de salud
          visual y contenido exclusivo.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          className="lg:col-span-2 space-y-6"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick(social.name)}
              variants={itemVariants}
              className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-brand-extralight/50 transition-all duration-300 group shadow-sm hover:shadow-md hover:scale-105"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-extralight to-white rounded-full flex items-center justify-center border border-gray-100">
                <social.icon className="w-6 h-6 text-brand-DEFAULT" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-brand-dark">
                  {social.name}
                </h3>
                <p className="text-gray-600 group-hover:text-brand-DEFAULT">
                  {social.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 relative aspect-video rounded-xl overflow-hidden shadow-2xl group border-4 border-white"
        >
          <img
            src={imageUrls.contactPage.team}
            alt="Equipo al completo del Instituto Oftalmológico Amigó"
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SocialFollow;
