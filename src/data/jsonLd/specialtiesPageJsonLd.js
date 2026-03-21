import { routePaths } from '@/config/routes';
export const generateSpecialtiesPageJsonLd = async () => {
  const { specialtiesData } = await import('../specialtiesData');
  const specialties = specialtiesData.map((specialty, index) => ({
    '@type': 'MedicalSpecialty',
    '@id': `https://ioamigo.com${routePaths.specialties}/${specialty.slug}`,
    name: specialty.title,
    description: specialty.subtitle,
    url: `https://ioamigo.com${routePaths.specialties}/${specialty.slug}`,
    image: specialty.previewImageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ioamigo.com${routePaths.specialties}/${specialty.slug}`,
    },
  }));

  const itemListElement = specialtiesData.map((specialty, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@id': `https://ioamigo.com${routePaths.specialties}/${specialty.slug}`,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `https://ioamigo.com${routePaths.specialties}`,
        url: `https://ioamigo.com${routePaths.specialties}`,
        name: 'Nuestras Especialidades | Instituto Oftalmológico Amigó',
        description:
          'Descubre las especialidades oftalmológicas del Instituto Oftalmológico Amigó. Información sobre patologías oculares comunes y tratamientos avanzados para tu salud visual.',
        inLanguage: 'es',
        isPartOf: {
          '@id': 'https://ioamigo.com/#website',
        },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: itemListElement,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://ioamigo.com${routePaths.specialties}/#breadcrumb`,
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
            name: 'Especialidades',
            item: `https://ioamigo.com${routePaths.specialties}`,
          },
        ],
      },
      ...specialties,
    ],
  };
};
