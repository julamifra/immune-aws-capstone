import { routePaths } from '@/config/routes';

export const blogPageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `https://ioamigo.com${routePaths.blog}#webpage`,
      url: `https://ioamigo.com${routePaths.blog}`,
      name: 'Blog | Instituto Oftalmológico Amigó',
      description:
        'Artículos sobre salud visual, oftalmología y consejos de nuestros expertos en el Instituto Oftalmológico Amigó.',
      isPartOf: {
        '@id': 'https://ioamigo.com/#website',
      },
      breadcrumb: {
        '@id': `https://ioamigo.com${routePaths.blog}#breadcrumb`,
      },
      inLanguage: 'es',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `https://ioamigo.com${routePaths.blog}#breadcrumb`,
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
          name: 'Blog',
          item: `https://ioamigo.com${routePaths.blog}`,
        },
      ],
    },
  ],
};
