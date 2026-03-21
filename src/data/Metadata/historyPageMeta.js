import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';

export const historyPageMeta = {
  title: 'Nuestra Historia | Instituto Oftalmológico Amigó',
  description:
    'Descubre la trayectoria y los hitos del Instituto Oftalmológico Amigó. Más de 30 años de experiencia en oftalmología en Santa Cruz de Tenerife.',
  canonicalUrl: `https://ioamigo.com${routePaths.history}`,
  ogImage: imageUrls.historyPage.header,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Nuestra Historia | Instituto Oftalmológico Amigó',
    description:
      'Descubre la trayectoria y los hitos del Instituto Oftalmológico Amigó. Más de 30 años de experiencia en oftalmología en Santa Cruz de Tenerife.',
    url: `https://ioamigo.com${routePaths.history}`,
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
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Nuestra Historia',
          item: `https://ioamigo.com${routePaths.history}`,
        },
      ],
    },
  },
};
