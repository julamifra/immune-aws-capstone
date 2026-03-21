import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';
import { categories } from '@/data/facilitiesData';

export const facilitiesPageMeta = {
  title:
    'Nuestro Centro | Instalaciones de Vanguardia | Instituto Oftalmológico Amigó',
  description:
    'Descubre las modernas instalaciones del Instituto Oftalmológico Amigó en Santa Cruz de Tenerife. Tecnología de vanguardia y un ambiente diseñado para tu confort y salud visual.',
  canonicalUrl: `https://ioamigo.com${routePaths.center}`,
  ogImage: imageUrls.facilitiesPage.headerImg,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Nuestro Centro | Instalaciones de Vanguardia | Instituto Oftalmológico Amigó',
    description:
      'Descubre las modernas instalaciones del Instituto Oftalmológico Amigó en Santa Cruz de Tenerife. Tecnología de vanguardia y un ambiente diseñado para tu confort y salud visual.',
    url: `https://ioamigo.com${routePaths.center}`,
    hasPart: categories.map((category) => ({
      '@type': 'WebPageElement',
      name: category.name,
      description: category.name,
    })),
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
          name: 'Nuestro Centro',
          item: `https://ioamigo.com${routePaths.center}`,
        },
      ],
    },
  },
};
