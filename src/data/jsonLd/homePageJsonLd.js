export const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ioamigo.com/#website',
      url: 'https://ioamigo.com/',
      name: 'Instituto Oftalmologico Amigo',
      description:
        'Clinica oftalmologica de referencia en Tenerife, especializada en el diagnostico y tratamiento de enfermedades oculares con tecnologia de ultima generacion.',
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
      name: 'Instituto Oftalmologico Amigo | Tu Clinica Oftalmologica en Tenerife',
      isPartOf: {
        '@id': 'https://ioamigo.com/#website',
      },
      description:
        'En el Instituto Oftalmologico Amigo en Tenerife, cuidamos de tu salud visual con un equipo de expertos y tecnologia de vanguardia. Pide tu cita.',
      inLanguage: 'es',
    },
    {
      '@type': 'Organization',
      '@id': 'https://ioamigo.com/#organization',
      name: 'Instituto Oftalmologico Amigo',
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
      name: 'Instituto Oftalmologico Amigo',
      image:
        'https://vknsnmxtlpzjvopwhxyl.supabase.co/storage/v1/object/public/new-images/logo1.jpg',
      url: 'https://ioamigo.com/',
      telephone: '+34-922-535-971',
      priceRange: 'EUR',
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
        'https://www.linkedin.com/company/instituto-oftalmologico-amigo/',
      ],
      availableService: [
        {
          '@type': 'MedicalProcedure',
          name: 'Cirugia Refractiva',
          description: 'Correccion de defectos refractivos mediante laser',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Operacion de Cataratas',
          description:
            'Cirugia de cataratas con tecnologia de ultima generacion',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Tratamiento de Glaucoma',
          description: 'Diagnostico y tratamiento del glaucoma',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Cirugia de Retina y Macula',
          description: 'Tratamiento de enfermedades de la retina y macula',
        },
        {
          '@type': 'MedicalProcedure',
          name: 'Laser Femtosegundo',
          description:
            'Cirugia ocular con tecnologia laser de femtosegundo de ultima generacion',
        },
      ],
      paymentAccepted: 'Efectivo, Tarjeta de credito, Transferencia bancaria',
      currenciesAccepted: 'EUR',
    },
  ],
};
