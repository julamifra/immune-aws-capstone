export const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ioamigo.com/#website',
      url: 'https://ioamigo.com/',
      name: 'Instituto Oftalmológico Amigó',
      description:
        'Clínica oftalmológica de referencia en Tenerife, especializada en el diagnóstico y tratamiento de enfermedades oculares (Cirugía ocular, glaucoma, cataratas, miopía, cataratas, presbicia...) con la última tecnología.',
      publisher: {
        '@id': 'https://ioamigo.com/#organization',
      },
      inLanguage: 'es',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://ioamigo.com/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://ioamigo.com/#webpage',
      url: 'https://ioamigo.com/',
      name: 'Instituto Oftalmológico Amigó | Tu Clínica Oftalmológica en Tenerife',
      isPartOf: {
        '@id': 'https://ioamigo.com/#website',
      },
      description:
        'En el Instituto Oftalmológico Amigó en Tenerife, cuidamos de tu salud visual con un equipo de expertos y tecnología de vanguardia. Pide tu cita.',
      inLanguage: 'es',
    },
    {
      '@type': 'Organization',
      '@id': 'https://ioamigo.com/#organization',
      name: 'Instituto Oftalmológico Amigó',
      url: 'https://ioamigo.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vknsnmxtlpzjvopwhxyl.supabase.co/storage/v1/object/public/new-images/logo1.jpg',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+34-922-535-971',
        contactType: 'customer service',
      },
    },
    {
      '@type': 'MedicalClinic',
      '@id': 'https://ioamigo.com/#medical-clinic',
      name: 'Instituto Oftalmológico Amigó',
      image:
        'https://vknsnmxtlpzjvopwhxyl.supabase.co/storage/v1/object/public/new-images/logo1.jpg',
      url: 'https://ioamigo.com/',
      telephone: '+34-922-535-971',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'C. de Bravo Murillo, 16',
        addressLocality: 'Santa Cruz de Tenerife',
        postalCode: '38003',
        addressRegion: 'Santa Cruz de Tenerife',
        addressCountry: 'ES',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '20:00',
        },
      ],
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '28.462323',
        longitude: '-16.252561',
      },
      sameAs: [
        'https://www.instagram.com/oftalmologoamigo/',
        'https://www.youtube.com/@Ioamigo',
        'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.1',
        reviewCount: '92',
      },
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Cirugía Refractiva',
          description: 'Corrección de defectos refractivos mediante láser',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Operación de Cataratas',
          description:
            'Cirugía de cataratas con tecnología de última generación',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Tratamiento de Glaucoma',
          description: 'Diagnóstico y tratamiento del glaucoma',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Cirugía de Retina y Mácula',
          description: 'Tratamiento de enfermedades de la retina y mácula',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Láser Femtosegundo',
          description:
            'Cirugía ocular con tecnología láser de femtosegundo de última generación',
        },
      ],
      paymentAccepted: 'Efectivo, Tarjeta de crédito, Transferencia bancaria',
      currenciesAccepted: 'EUR',
    },
  ],
};
