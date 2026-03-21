import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';

export const cookiesPolicyPageMeta = {
  title: 'Política de Cookies | Instituto Oftalmológico Amigó',
  description:
    'Conoce nuestra política de cookies. Información detallada sobre qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas en el sitio web del Instituto Oftalmológico Amigó.',
  canonicalUrl: `https://ioamigo.com${routePaths.cookies}`,
  ogImage: imageUrls.ioaLogo_original,
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Política de Cookies | Instituto Oftalmológico Amigó',
    description:
      'Conoce nuestra política de cookies. Información detallada sobre qué son las cookies, cómo las utilizamos y cómo puedes gestionarlas en el sitio web del Instituto Oftalmológico Amigó.',
    url: `https://ioamigo.com${routePaths.cookies}`,
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
          name: 'Política de Cookies',
          item: `https://ioamigo.com${routePaths.cookies}`,
        },
      ],
    },
  },
};
