import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';

export const aboutUsPageMeta = {
  title:
    'Sobre Nosotros | Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
  description:
    'Conoce la filosofía, experiencia y el equipo humano del Instituto Oftalmológico Amigó. Más de 30 años de dedicación a la salud visual en Tenerife.',
  canonicalUrl: `https://ioamigo.com${routePaths.aboutUs}`,
  ogImage: imageUrls.teamPage.header,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Sobre Nosotros | Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
    description:
      'Conoce la filosofía, experiencia y el equipo humano del Instituto Oftalmológico Amigó. Más de 30 años de dedicación a la salud visual en Tenerife.',
    url: `https://ioamigo.com${routePaths.aboutUs}`,
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: 'Instituto Oftalmológico Amigó',
      url: 'https://ioamigo.com',
    },
  },
};
