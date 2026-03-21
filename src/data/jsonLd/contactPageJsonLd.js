import { routePaths } from '@/config/routes';

export const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': `https://ioamigo.com${routePaths.contact}#webpage`,
      url: `https://ioamigo.com${routePaths.contact}`,
      name: 'Contacto | Instituto Oftalmológico Amigó',
      description:
        'Ponte en contacto con el Instituto Oftalmológico Amigó. Teléfono, dirección y formulario de contacto.',
      isPartOf: {
        '@id': 'https://ioamigo.com/#website',
      },
      breadcrumb: {
        '@id': `https://ioamigo.com${routePaths.contact}#breadcrumb`,
      },
      inLanguage: 'es',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://ioamigo.com${routePaths.contact}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: 'https://ioamigo.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Contacto',
          item: `https://ioamigo.com${routePaths.contact}`,
        },
      ],
    },
  ],
};
