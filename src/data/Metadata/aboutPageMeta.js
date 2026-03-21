import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';

export const aboutPageMeta = {
  title:
    'Conoce el Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
  description:
    'Descubre el Instituto Oftalmológico Amigó: nuestra misión, visión, valores, equipo de profesionales y modernas instalaciones en Santa Cruz de Tenerife.',
  canonicalUrl: `https://ioamigo.com${routePaths.about}`,
  ogImage: imageUrls.teamPage.header,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Conoce el Instituto Oftalmológico Amigó',
    description:
      'Descubre el Instituto Oftalmológico Amigó: nuestra misión, visión, valores, equipo de profesionales y modernas instalaciones en Santa Cruz de Tenerife.',
    url: `https://ioamigo.com${routePaths.about}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: `https://ioamigo.com${routePaths.home}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Quiénes Somos',
          item: `https://ioamigo.com${routePaths.about}`,
        },
      ],
    },
  },
};
