import {
  Eye,
  Glasses,
  HelpCircle,
  Thermometer,
  BookOpenCheck,
  Microscope,
  Sun,
  User,
  Droplet,
  Layers,
  CloudSun,
  EyeOff,
  FileQuestion,
  SquareStack,
  Lightbulb,
  Star,
  ScanEye,
  LucideEye,
  LucideEyeOff,
  BarChart,
  ClipboardPaste,
  Minus,
  BookUp2,
  SquareAsterisk,
} from 'lucide-react';
import { imageUrls, videoIds } from '../config/urls.js';
import { specialtiesSlugs, blogSlugs } from '../config/routes.js';

export const specialtiesData = [
  // Láser Femtosegundo
  {
    slug: 'laser-femtosegundo',
    title: 'Láser Femtosegundo',
    subtitle: 'Tecnología de vanguardia en cirugía ocular.',
    icon: Microscope,
    heroImageSlug: 'laser-femtosegundo-illustration',
    previewImageUrl: imageUrls.specialtyPreviewImages.laserFemtosegundo,
    overview:
      '<p>En el Instituto Oftalmológico Amigó, somos pioneros en Tenerife con la avanzada tecnología del <strong>láser de femtosegundo</strong>. Desde 2014, contamos con el primer y único láser LDV Z8 en la provincia de Santa Cruz de Tenerife, ofreciendo la máxima precisión y seguridad en <strong>cirugía ocular</strong> para nuestros pacientes.</p>',
    seo: {
      title:
        'Láser Femtosegundo en Tenerife | Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
      description:
        'Descubre la precisión del Láser de Femtosegundo en la Clínica Oftalmológica Amigó, Tenerife. Tecnología avanzada para cirugía refractiva (para tratar miopía, hipermetropía y astigmatismo) y de cataratas. Pide tu cita.',
      keywords:
        'laser femtosegundo, cirugía ocular, lasik, cataratas, tenerife, oftalmólogo, cirugía láser ojos, operación láser ojo',
      canonical: 'https://ioamigo.com/especialidades/laser-femtosegundo',
      ogTitle:
        'Láser Femtosegundo en Tenerife | Cirugía Ocular | Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
      ogDescription:
        'Descubre la precisión del Láser de Femtosegundo en la Clínica Oftalmológica Amigó, Tenerife. Tecnología avanzada para cirugía refractiva (para tratar miopía, hipermetropía y astigmatismo) y de cataratas. Pide tu cita.',
      ogImage: imageUrls.specialtyOgImages.laserFemtosegundo,
      ogUrl: 'https://ioamigo.com/especialidades/laser-femtosegundo',
      ogType: 'article',
      ogVideo: 'https://www.youtube.com/watch?v=UDNPE0obYDM',
      ogVideoType: 'video/mp4',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/laser-femtosegundo/#webpage',
            url: 'https://ioamigo.com/especialidades/laser-femtosegundo',
            name: 'Láser Femtosegundo en Tenerife | Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
            description:
              'Descubre la precisión del Láser de Femtosegundo en la Clínica Oftalmológica Amigó, Tenerife. Tecnología avanzada para cirugía refractiva (para tratar miopía, hipermetropía y astigmatismo) y de cataratas. Pide tu cita.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.laserFemtosegundo,
            image: imageUrls.specialtyOgImages.laserFemtosegundo,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-10-10T10:00:00+00:00',
            video: {
              '@type': 'VideoObject',
              name: '¿Qué es el Láser de Femtosegundo? | Cirugía Ocular de Precisión',
              description:
                'Descubre cómo el láser de femtosegundo revoluciona la cirugía ocular en el Instituto Oftalmológico Amigó. Precisión, seguridad y recuperación más rápida para operaciones de cataratas y cirugía refractiva (miopía, hipermetropía, astigmatismo).',
              thumbnailUrl:
                'https://img.youtube.com/vi/UDNPE0obYDM/maxresdefault.jpg',
              uploadDate: '2024-09-15T08:00:00+00:00',
              duration: 'PT1M32S',
              contentUrl: 'https://www.youtube.com/watch?v=UDNPE0obYDM',
              embedUrl: 'https://www.youtube.com/embed/UDNPE0obYDM',
              publisher: {
                '@type': 'Organization',
                name: 'Instituto Oftalmológico Amigó',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://ioamigo.com/logo.jpg',
                  width: 512,
                  height: 512,
                },
              },
            },
          },
          {
            '@type': 'MedicalProcedure',
            '@id':
              'https://ioamigo.com/especialidades/laser-femtosegundo/#medicalprocedure',
            name: 'Cirugía Ocular con Láser de Femtosegundo',
            description:
              'Procedimiento quirúrgico ocular 100% láser de alta precisión para la cirugía de cataratas y la corrección de defectos refractivos (FemtoLASIK). Ofrece máxima seguridad y una recuperación más rápida.',
            procedureType: 'SurgicalProcedure',
            medicalSpecialty: 'Ophthalmology',
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/laser-femtosegundo/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/laser-femtosegundo/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Es mejor el resultado con femtosegundo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Sí, la cirugía con láser de femtosegundo está considerada superior porque aporta mayor precisión, seguridad y rapidez. Este láser crea cortes exactos a nivel molecular, lo que se traduce en un mejor resultado en intervenciones como la cirugía refractiva y de cataratas. Además, facilita una recuperación más rápida para el paciente y reduce significativamente el riesgo de complicaciones.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son las ventajas del láser de femtosegundo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El láser de femtosegundo es más preciso y seguro que las técnicas tradicionales, ya que realiza incisiones controladas por ordenador y sin bisturí. Esto reduce riesgos, acelera la recuperación y permite resultados más predecibles. Además, es especialmente útil en casos complejos como cataratas avanzadas o córneas finas. En cirugía de cataratas permite incisiones más uniformes y una recuperación más rápida, incluso en casos complejos. En cirugía refractiva (LASIK), ofrece cortes exactos, menor riesgo de complicaciones y mejores resultados visuales en menos tiempo.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Por qué elegir láser de femtosegundo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Elegir el láser de femtosegundo significa apostar por la máxima precisión, seguridad y personalización en cirugía ocular. A diferencia de las técnicas convencionales con bisturí, este láser actúa separando los tejidos a nivel molecular mediante impulsos ultracortos, lo que reduce riesgos y ofrece resultados más exactos. En cirugía refractiva (LASIK – FemtoLASIK), el femtosegundo permite intervenir incluso en córneas finas y con menos riesgo de complicaciones, garantizando una recuperación visual más rápida. En cirugía de cataratas, aporta una gran ventaja en varias etapas del proceso, logrando incisiones uniformes y una colocación más precisa de la lente intraocular. En definitiva, el láser de femtosegundo es hoy la opción más recomendada porque asegura mejores resultados visuales, una recuperación más cómoda y un nivel de seguridad inigualable, tanto en tratamientos habituales como en casos complejos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuál es la diferencia entre el láser excímer y el láser de femtosegundo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El láser excímer y el láser de femtosegundo son tecnologías complementarias en cirugía ocular, pero tienen funciones diferentes. Láser excímer: corrige los defectos refractivos (miopía, hipermetropía, astigmatismo) modelando directamente la córnea. Es indoloro, muy preciso y permite una recuperación rápida. Láser de femtosegundo: se utiliza para preparar la cirugía mediante incisiones ultrarrápidas y controladas por ordenador (flap corneal en FemtoLASIK, capsulotomía en cataratas). Aumenta la seguridad y permite intervenir en casos complejos. En conjunto, se complementan para ofrecer resultados más predecibles y seguros.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'video',
        videoId: videoIds.laserFemtosegundo,
        title:
          '¿Qué es el Láser de Femtosegundo? | Instituto Oftalmológico Amigó',
      },
      {
        type: 'section',
        title: '¿Qué es el láser de femtosegundo?',
        id: 'que-es-el-laser-de-femtosegundo',
        content:
          '<p>El <strong>láser de femtosegundo</strong> es una herramienta quirúrgica de vanguardia que emite pulsos infrarrojos ultracortos. Su precisión permite separar el tejido ocular a nivel molecular sin dañarlo, garantizando una intervención segura y eficaz.</p><br/><p>Un femtosegundo es una unidad de tiempo extraordinariamente pequeña, equivalente a la milbillonésima parte de un segundo. Esta velocidad extrema posibilita procedimientos <strong>mínimamente invasivos, seguros y de alta precisión</strong>, optimizando los resultados para el paciente.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Aplicaciones',
        id: 'aplicaciones-para-el-laser-de-femtosegundo',
        content:
          '<p>Gracias a esta tecnología, podemos realizar procedimientos como:</p>',
        list: [
          `<strong><a href="${specialtiesSlugs.cirugia_refractiva}#cirugias-con-laser" class="text-blue-600 hover:underline">Cirugía refractiva LASIK:</a></strong> Corrección de miopía, hipermetropía, astigmatismo y presbicia con la máxima precisión.`,
          `<strong><a href="${specialtiesSlugs.operacion_cataratas}" class="text-blue-600 hover:underline">Cirugía de cataratas:</a></strong> Procedimiento sin bisturí ni cortes manuales, para una recuperación más rápida y segura.`,
          '<strong>Intervenciones intraoculares:</strong> Gran precisión para procedimientos complejos sin necesidad de abrir la cubierta externa del ojo.',
        ],
        icon: SquareStack,
      },
      {
        type: 'section',
        title: 'Principales ventajas',
        id: 'principales-ventajas-del-laser-de-femtosegundo',
        content: '',
        list: [
          '<strong>Precisión micrométrica:</strong> El láser actúa con exactitud milimétrica, sin afectar tejidos adyacentes. Permite tratar estructuras internas del ojo sin incisiones externas, como en la cirugía de cataratas, donde el láser atraviesa la córnea para actuar directamente en el cristalino.',
          '<strong>Menor riesgo quirúrgico:</strong> Elimina la necesidad de cuchillas o bisturíes, reduciendo significativamente las complicaciones.',
          '<strong>Diseño tridimensional asistido por ordenador:</strong> Planificación precisa de cada incisión, asegurando máxima exactitud y reproducibilidad.',
          '<strong>Recuperación rápida y segura:</strong> Favorece una cicatrización más estable y un retorno ágil a la vida cotidiana.',
          '<strong>Cirugías personalizadas:</strong> Adaptación del procedimiento a las características únicas de cada ojo para resultados óptimos.',
          '<strong>Mayor accesibilidad:</strong> Su precisión y seguridad abren la puerta a pacientes que antes no eran candidatos para la cirugía ocular.',
        ],
        finalContent:
          '<p>“El paciente ya no depende solo de la pericia del cirujano para un resultado óptimo.”</p>',
        icon: BookUp2,
      },
      {
        type: 'section',
        title: '¿Por qué elegir el láser de femtosegundo?',
        id: 'por-que-elegir-el-laser-de-femtosegundo',
        content:
          '<strong>Considerando sus múltiples beneficios, el láser de femtosegundo se posiciona como la técnica de elección para:</strong>',
        list: [
          '<strong>Cirugía refractiva:</strong> Corrección de miopía, hipermetropía, astigmatismo y presbicia.',
          '<strong>Cirugía de cataratas:</strong> Un procedimiento avanzado para restaurar la claridad visual.',
          '<strong>Procedimientos complejos:</strong> Incluyendo tratamientos para queratocono y trasplantes corneales, donde la precisión es crucial.',
        ],
        finalContent:
          '<p>Esta tecnología de vanguardia maximiza la seguridad, precisión y personalización de cada intervención, garantizando resultados superiores y una mayor tranquilidad para el paciente.</p><br/><p>En el Instituto Oftalmológico Amigó, nuestro <strong>compromiso con la innovación y la seguridad</strong> nos impulsa a incorporar las tecnologías más avanzadas. La integración del <strong>láser de femtosegundo</strong> representa un salto cualitativo en la <strong>cirugía ocular</strong>, ofreciendo a nuestros pacientes los mejores resultados con el máximo cuidado y confort.</p>',
        icon: Star,
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes',
        id: 'faq-laser-femtosegundo',
        icon: HelpCircle,
        items: [
          {
            question: '¿Es mejor el resultado con femtosegundo?',
            answer:
              '<p>La cirugía con láser de femtosegundo está considerada superior a las técnicas convencionales porque aporta mayor <strong>precisión, seguridad y rapidez.</strong> Este láser crea cortes exactos a nivel molecular, lo que se traduce en un mejor resultado en intervenciones como la cirugía refractiva y de cataratas. Además, facilita una <strong>recuperación más rápida</strong> para el paciente y reduce significativamente el riesgo de complicaciones.</p>',
          },
          {
            question: '¿Cuáles son las ventajas del láser de femtosegundo?',
            answer:
              '<p>El láser de femtosegundo es más preciso y seguro que las técnicas tradicionales, ya que realiza incisiones controladas por ordenador y sin bisturí. Esto reduce riesgos, acelera la recuperación y permite resultados más predecibles. Además, es especialmente útil en casos complejos como cataratas avanzadas o córneas finas.</p><br/><p>En cirugía de cataratas permite incisiones más uniformes y una recuperación más rápida, incluso en casos complejos. En cirugía refractiva (LASIK), ofrece cortes exactos, menor riesgo de complicaciones y mejores resultados visuales en menos tiempo.</p>',
          },
          {
            question: '¿Por qué elegir láser de femtosegundo?',
            answer:
              '<p>Elegir el láser de femtosegundo significa apostar por la <strong>máxima precisión, seguridad y personalización</strong> en cirugía ocular. A diferencia de las técnicas convencionales con bisturí, este láser actúa separando los tejidos a nivel molecular mediante impulsos ultracortos, lo que reduce riesgos y ofrece resultados más exactos.</p><br/><p>En cirugía refractiva (LASIK – FemtoLASIK), el femtosegundo permite intervenir incluso en córneas finas y con menos riesgo de complicaciones, garantizando una recuperación visual más rápida. En cirugía de cataratas, aporta una gran ventaja en varias etapas del proceso, logrando incisiones uniformes y una colocación más precisa de la lente intraocular.</p><br/><p>En definitiva, el láser de femtosegundo es hoy la opción más recomendada porque asegura <strong>mejores resultados visuales, una recuperación más cómoda y un nivel de seguridad inigualable,</strong> tanto en tratamientos habituales como en casos complejos.</p>',
          },
          {
            question:
              '¿Cuál es la diferencia entre el láser excímer y el láser de femtosegundo?',
            answer:
              '<p>El láser excímer y el láser de femtosegundo son tecnologías complementarias en cirugía ocular, pero tienen funciones diferentes.</p><br/><ul><li><strong>Láser excímer:</strong> corrige los defectos refractivos (miopía, hipermetropía, astigmatismo) modelando directamente la córnea para que la luz enfoque correctamente en la retina. Es <strong>indoloro, muy preciso y permite una recuperación rápida</strong>, ayudando a reducir o eliminar la necesidad de gafas o lentes de contacto.</li><li><strong>Láser de femtosegundo:</strong> se utiliza para <strong>preparar la cirugía</strong> mediante incisiones ultrarrápidas y controladas por ordenador. En cirugía refractiva (FemtoLASIK), crea el flap corneal con exactitud; en cirugía de cataratas, realiza la capsulotomía anterior y fragmenta el cristalino con mínima manipulación de los tejidos. Esto <strong>aumenta la seguridad, reduce complicaciones y permite intervenir en casos complejos.</strong></li></ul><br/><p>En conjunto, ambos <strong>láseres se complementan:</strong> el femtosegundo prepara el ojo de forma precisa y segura, mientras que el excímer corrige la visión. Esta combinación permite <strong>resultados más predecibles, recuperación más rápida y un alto nivel de seguridad en los pacientes.</strong></p>',
          },
        ],
      },
      {
        type: 'links_section',
        title:
          '¿Quieres saber más sobre cómo puede ayudarte el láser de femtosegundo según tu caso?',
        links: [
          {
            title: 'Cirugía refractiva LASIK',
            url: `${specialtiesSlugs.operacion_miopia}#cirugias-con-laser`,
          },
          {
            title: 'Cirugía de cataratas',
            url: `${specialtiesSlugs.operacion_cataratas}`,
          },
          {
            title: 'Ventajas del laser femtosegundo',
            url: `${blogSlugs.ventajas_laser_femtosegundo}`,
          },
        ],
      },
    ],
    isMaintenance: false,
  },
  // Cirugía Refractiva
  {
    slug: 'cirugia-refractiva',
    title: 'Cirugía refractiva',
    subtitle:
      'Corrige los defectos refractivos más comunes: Miopía, Hipermetropía y Astigmatismo.',
    icon: Glasses,
    heroImageSlug: 'refractive-errors-illustration',
    previewImageUrl:
      imageUrls.specialtyPreviewImages.miopiaHipermetropiaAstigmatismo,
    overview:
      '<p>Es un conjunto de procedimientos médicos que tienen como objetivo corregir los defectos visuales más comunes: <strong>miopía, hipermetropía, astigmatismo y la presbicia </strong> (vista cansada por la edad) </p></br><p>En condiciones normales, los rayos de luz que entran en el ojo se enfocan exactamente sobre la <strong>retina</strong>, lo que permite ver con nitidez. Cuando existe un defecto de refracción, la luz se enfoca <strong> antes o después de la retina</strong>, produciendo visión borrosa.</p></br><p>La cirugía refractiva busca <strong>modificar la forma en que la luz entra y se enfoca en el ojo</strong>, de manera que se consiga una visión más clara, reduciendo o incluso eliminando la necesidad de gafas o lentes de contacto.</p>',
    seo: {
      title:
        'Cirugía Refractiva en Tenerife | Miopía, Hipermetropía y Astigmatismo | Instituto Oftalmológico Amigó',
      description:
        'Descubre las técnicas de cirugía refractiva más avanzadas en Tenerife para corregir miopía, hipermetropía y astigmatismo. Ofrecemos LASIK, PRK, SMILE y lentes intraoculares (ICL) para una visión clara sin gafas. Consulta en Instituto Oftalmológico Amigó.',
      keywords:
        'cirugía refractiva, miopía, hipermetropía, astigmatismo, defectos refractivos, tenerife, cirugía láser ojos, operación láser ojo, LASIK, PRK, SMILE, lentes ICL, lentes intraoculares',
      canonical: 'https://ioamigo.com/especialidades/cirugia-refractiva',
      ogTitle:
        'Cirugía Refractiva en Tenerife | Miopía, Hipermetropía y Astigmatismo | Instituto Oftalmológico Amigó',
      ogDescription:
        'Descubre las técnicas de cirugía refractiva más avanzadas en Tenerife para corregir miopía, hipermetropía y astigmatismo. Ofrecemos LASIK, PRK, SMILE y lentes intraoculares (ICL) para una visión clara sin gafas. Consulta en Instituto Oftalmológico Amigó.',
      ogImage: imageUrls.specialtyOgImages.miopiaHipermetropiaAstigmatismo,
      ogUrl: 'https://ioamigo.com/especialidades/cirugia-refractiva',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/cirugia-refractiva/#webpage',
            url: 'https://ioamigo.com/especialidades/cirugia-refractiva',
            name: 'Cirugía Refractiva en Tenerife | Miopía, Hipermetropía y Astigmatismo | Instituto Oftalmológico Amigó',
            description:
              'Descubre las técnicas de cirugía refractiva más avanzadas en Tenerife para corregir miopía, hipermetropía y astigmatismo. Ofrecemos LASIK, PRK, SMILE y lentes intraoculares (ICL) para una visión clara sin gafas. Consulta en Instituto Oftalmológico Amigó.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage:
              imageUrls.specialtyOgImages.miopiaHipermetropiaAstigmatismo,
            image: imageUrls.specialtyOgImages.miopiaHipermetropiaAstigmatismo,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-09-12T00:00:00+00:00',
          },
          {
            '@type': 'MedicalCondition',
            '@id':
              'https://ioamigo.com/especialidades/cirugia-refractiva/#medicalcondition',
            name: 'Miopía, Hipermetropía y Astigmatismo',
            description:
              'La cirugía refractiva corrige miopía, hipermetropía y astigmatismo mediante técnicas láser (LASIK, PRK, SMILE) o implante de lentes intraoculares (ICL), buscando una visión clara sin gafas.',
            medicalSpecialty: 'Ophthalmology',
            possibleTreatment: [
              {
                '@type': 'MedicalProcedure',
                name: 'Cirugía Refractiva con Láser',
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Implante de Lentes Intraoculares (ICL)',
              },
              {
                '@type': 'MedicalDevice',
                name: 'Gafas',
              },
              {
                '@type': 'MedicalDevice',
                name: 'Lentes de contacto',
              },
            ],
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/cirugia-refractiva/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/cirugia-refractiva/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es la cirugía refractiva?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La cirugía refractiva es un conjunto de procedimientos quirúrgicos que corrigen los defectos de refracción del ojo, como la miopía, hipermetropía y astigmatismo, permitiendo ver con claridad sin necesidad de gafas o lentes de contacto.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Quién es candidato para la cirugía refractiva?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Generalmente, son candidatos personas mayores de 18 años con una graduación estable, buena salud ocular y sin enfermedades que contraindiquen la cirugía. Un examen oftalmológico completo determinará la idoneidad.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué tipos de cirugía refractiva existen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las técnicas más comunes incluyen LASIK (con microqueratomo o FemtoLASIK), PRK y el implante de lentes intraoculares (ICL). La elección depende de las características individuales del ojo y la graduación.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Es dolorosa la cirugía refractiva?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La cirugía se realiza con anestesia tópica (gotas) y es indolora. Puede sentirse una ligera presión o molestia durante el procedimiento, pero no dolor. La recuperación visual es rápida.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo es la anestesia?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Es siempre tópica (con gotas o colirio anestésico) para todas las técnicas quirúrgicas descritas y no es necesario el vendaje ocular postoperatorio. De esta manera, los riesgos anestésicos prácticamente desaparecen al tiempo que se obtiene una recuperación casi inmediata.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo es la cirugía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Aunque pueda sorprenderle, es esta probablemente la parte más sencilla de todo el procedimiento pues la preparación y estudios preoperatorios son, por necesidad, exhaustivos y extensos. Normalmente se operan los dos ojos el mismo día. El tratamiento láser dura unos pocos segundos por dioptría tratada. Pero de todos modos el paciente debe ser preparado para el tratamiento, con lo que la intervención dura en total sobre 10-15 minutos por ojo. En todo momento hay un dispositivo diseñado especialmente para ello que impide que el paciente pueda cerrar inadvertidamente los ojos mientras actúa el láser. Además, el rayo láser sigue, de forma exacta, todos los movimientos del ojo que puedan tener lugar. En el improbable caso que usted moviera el ojo en exceso, el láser se detiene automáticamente y se reanuda la intervención de manera segura una vez controlado el movimiento ocular. Una vez terminada la intervención y tras descansar unos minutos, el cirujano controlará que el ojo esté en condiciones favorables y entonces el paciente puede marchar a su casa por su propio pie, con los ojos destapados y ya sin necesidad de gafas. De manera rutinaria se le prescribirán lubricantes oculares durante unas semanas después de la cirugía que ayudaran a que su visión sea más robusta y constante.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son unas expectativas realistas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Lo que se puede esperar, y por norma se obtiene, es una correcta visión sin gafas ni lentes de contacto pero no se debe buscar la perfección porque sencillamente “la visión perfecta” no existe más que en nuestra imaginación o en nuestro recuerdo.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuándo puedo volver a hacer una vida normal tras la corrección con láser?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Siempre se recomienda que el día de la intervención se dedique a descansar y así evitar esfuerzos o actividades que requieran un esfuerzo visual. La reincorporación a la vida laboral se suele realizar a los pocos días tras la operación. Si bien la norma es que se alcanza una mejoría visual inmediata tras la operación haciendo ya innecesario el uso de gafas o lentes de contacto desde el primer día, el resultado visual definitivo no debe esperarse antes de que el ojo intervenido haya completado el proceso de curación, proceso que dura por lo general de uno a tres meses, siendo más rápido en el caso de FemtoLASIK.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto dura el efecto del láser?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Nuestra corrección láser es en sí misma estable, por lo que salvo muy contadas excepciones, tras un periodo inicial, los resultados no varían significativamente con el tiempo. Siempre pueden existir variaciones naturales en el ojo miope pero volver a necesitar gafas como antes de la operación es del todo improbable.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué riesgos tiene la operación?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La cirugía refractiva láser es por definición una intervención extremadamente segura y con una tasa de complicaciones muy baja. Aun así, es importante no olvidar que, al igual que cuando usted monta en coche o toma una medicina, toda operación tiene un riesgo de complicación por infrecuente que sea. Tras la valoración preoperatoria el cirujano podrá darle una idea más realista de sus posibilidades.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué hacer cuando mi ojo no es apto para la técnica con láser?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No todos los ojos ni los defectos refractivos son aptos para la corrección con láser. La cornea puede ser excesivamente delgada o la miopía demasiado elevada para una corrección segura con laser. En estos casos en el Instituto Oftalmológico Amigó indicamos otras técnicas refractivas que por otra parte realizamos frecuentemente y también ofrecen la posibilidad de una correcta visión sin gafas ni lentes de contacto.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué ocurre si tengo mucha miopía o mucha hipermetropía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'En los últimos años hemos desarrollado en nuestro instituto técnicas que nos permiten corregir con láser un mayor número de dioptrías, conservando la necesaria seguridad, incluso en pacientes que en otros centros han sido rechazados. Nuestra realidad es que la utilización del láser de femtosegundo o la personalización de la asfericidad corneal nos han marcado un antes y un después en este tipo de casos. No obstante continúan existiendo ojos donde el tratamiento más adecuado ya no es el láser sino otras técnicas como la implantación de lentes intraoculares fáquicas o afáquicas que nos permiten, tras una selección experta, una correcta corrección conservando todos los criterios de seguridad en casos de alta miopía, hipermetropía o astigmatismo. La decisión final de la técnica a emplear ha de tomarse después de un minucioso estudio en cada caso tras el que el especialista le explicará sus posibilidades.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'testimonial',
        id: 'testimonial-paciente-femtosegundo',
        quote:
          '<p>Me operé en Clínica Amigo para corregir mi miopía (tenía 8 dioptrías) y no puedo estar más feliz con el resultado. Desde la primera consulta me sentí súper bien atendida: el equipo fue súper profesional y resolvió todas mis dudas con mucha paciencia y claridad.</p></br><p>La operación fue rapidísima, duró solo 10 minutos, no sentí nada de dolor y al día siguiente ya veía perfectamente. ¡Una recuperación increíblemente rápida!</p></br><p>Recomiendo esta clínica al 100% si estás pensando en operarte.</p></br><p>¡Mil Gracias por cambiarme la vida!</p>',
        author: '',
        authorInfo: 'Paciente de cirugía refractiva',
      },
      {
        type: 'card_grid',
        id: 'miopia-hipermetropia-astigmatismo',
        title: 'Operaciones de Miopía, Hipermetropía y Astigmatismo',
        icon: ScanEye,
        gridColumns: 3,
        cards: [
          {
            title: 'Miopía',
            description:
              '<p>La <strong>miopía</strong> es el defecto refractivo más común, caracterizado por una visión borrosa de los objetos lejanos, mientras que los cercanos se ven con claridad.</p>',
            button: {
              text: 'Más Información',
              link: `${specialtiesSlugs.operacion_miopia}`,
            },
          },
          {
            title: 'Hipermetropía',
            description:
              '<p>La <strong>hipermetropía</strong> es un defecto de refracción donde las imágenes se enfocan detrás de la retina, causando visión borrosa de cerca.</p>',

            button: {
              text: 'Más Información',
              link: `${specialtiesSlugs.operacion_hipermetropia}`,
            },
          },
          {
            title: 'Astigmatismo',
            description:
              '<p>El <strong>astigmatismo</strong> es un defecto óptico causado por una curvatura irregular de la córnea, que provoca visión borrosa y distorsionada.</p>',

            button: {
              text: 'Más Información',
              link: `${specialtiesSlugs.operacion_astigmatismo}`,
            },
          },
        ],
      },
      {
        type: 'section',
        title: '¿Cómo se realiza?',
        id: 'como-se-realiza-la-cirugia-refractiva',
        content:
          '<p>Dependiendo de las características del paciente, el cirujano puede optar por <strong>modificar la córnea</strong> (la superficie transparente del ojo) con láser o por <strong>implantar lentes intraoculares</strong>.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Cirugías con láser',
        id: 'cirugias-con-laser',
        content: '',
        list: [
          {
            title: 'Tipos de láser utilizados',
            content:
              'En este grupo se utilizan dos <strong>tipos de láser</strong>:',
            childList: [
              {
                content: `<p><strong><a href="${blogSlugs.laser_excimer_calibracion}" class="text-blue-600 hover:underline">Láser excímer:</a></strong> remodela el tejido corneal con gran precisión.</p>`,
                icon: Minus,
              },
              {
                content: `<p><strong><a href="${specialtiesSlugs.laser_femtosegundo}" class="text-blue-600 hover:underline">Láser de femtosegundo:</a></strong> genera pulsos de altísima precisión que permiten realizar cortes e incisiones muy finas en la córnea sin usar bisturí. Este láser ha revolucionado la cirugía refractiva porque aumenta la seguridad y exactitud de procedimientos como el <strong>LASIK</strong> y es la base de técnicas más modernas como <strong>SMILE</strong>.</p>`,
                icon: Minus,
              },
            ],
          },
          {
            content: 'Las <strong>técnicas principales</strong> son:',
            childList: [
              {
                content: `<p><strong>LASIK</strong>: se levanta una fina capa de tejido corneal (antes con bisturí y hoy mayoritariamente con femtosegundo), se aplica láser Excímer para remodelar la córnea y luego se recoloca el tejido de la córnea. Es indolora, rápida y permite recuperar visión casi de inmediato.</p>`,
                icon: Minus,
              },
              {
                content: `<p><strong>PRK o LASEK</strong>: el láser Excímer actúa directamente sobre la superficie de la córnea. La recuperación es más lenta, pero es una buena opción para personas con córneas delgadas</p>`,
                icon: Minus,
              },
              {
                content: `<p><strong>SMILE</strong>: es una técnica poco invasiva, en la que se extrae un pequeño fragmento de tejido corneal a través de una incisión mínima. Genera menos sequedad ocular.</p>`,
                icon: Minus,
              },
            ],
          },
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Cirugías con lentes intraoculares',
        id: 'cirugias-con-lentes-intraoculares',
        // content: '',
        list: [
          {
            content: `<p><strong>Lentes fáquicas o ICL</strong>: se implantan dentro del ojo sin retirar el cristalino natural. Se suelen recomendar en pacientes jóvenes no aptos para cirugía con láser y graduaciones muy altas.</p>`,
            icon: Minus,
          },
          {
            content: `<p><strong>Reemplazo del cristalino</strong>: se extrae el cristalino natural y se coloca en su lugar una lente artificial (monofocal o multifocal). Es una opción habitual en personas mayores o con presbicia avanzada.</p>`,
            icon: Minus,
          },
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Ventajas',
        id: 'ventajas-cirugia-refractiva',
        content: '',
        icon: BookUp2,
        list: [
          'Mejora significativa de la visión sin depender de gafas ni lentes de contacto.',
          'Procedimientos rápidos (unos 10–20 minutos por ojo).',
          'Resultados estables y duraderos en la mayoría de los casos.',
          'Gran satisfacción: más del 90% de los pacientes logran independencia de gafas en defectos moderados.',
          'Mayor seguridad y precisión en las técnicas modernas gracias al láser de femtosegundo.',
        ],
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes sobre Cirugía Refractiva',
        id: 'faq-cirugia-refractiva',
        icon: HelpCircle,
        items: [
          {
            question: '¿Qué es la cirugía refractiva?',
            answer:
              'La cirugía refractiva es un conjunto de procedimientos quirúrgicos que corrigen los defectos de refracción del ojo, como la miopía, hipermetropía y astigmatismo, permitiendo ver con claridad sin necesidad de gafas o lentes de contacto.',
          },
          {
            question: '¿Quién es candidato para la cirugía refractiva?',
            answer:
              'Generalmente, son candidatos personas mayores de 18 años con una graduación estable, buena salud ocular y sin enfermedades que contraindiquen la cirugía. Un examen oftalmológico completo determinará la idoneidad.',
          },
          {
            question: '¿Qué tipos de cirugía refractiva existen?',
            answer:
              'Las técnicas más comunes incluyen LASIK (con microqueratomo o FemtoLASIK), PRK y el implante de lentes intraoculares (ICL). La elección depende de las características individuales del ojo y la graduación.',
          },
          {
            question: '¿Es dolorosa la cirugía refractiva?',
            answer:
              'La cirugía se realiza con anestesia tópica (gotas) y es indolora. Puede sentirse una ligera presión o molestia durante el procedimiento, pero no dolor. La recuperación visual es rápida.',
          },
          {
            question: '¿Cómo es la anestesia?',
            answer:
              'Es siempre tópica (con gotas o colirio anestésico) para todas las técnicas quirúrgicas descritas y no es necesario el vendaje ocular postoperatorio. De esta manera, los riesgos anestésicos prácticamente desaparecen al tiempo que se obtiene una recuperación casi inmediata.',
          },
          {
            question: '¿Cómo es la cirugía?',
            answer:
              'Aunque pueda sorprenderle, es esta probablemente la parte más sencilla de todo el procedimiento pues la preparación y estudios preoperatorios son, por necesidad, exhaustivos y extensos. Normalmente se operan los dos ojos el mismo día. El tratamiento láser dura unos pocos segundos por dioptría tratada. Pero de todos modos el paciente debe ser preparado para el tratamiento, con lo que la intervención dura en total sobre 10-15 minutos por ojo. En todo momento hay un dispositivo diseñado especialmente para ello que impide que el paciente pueda cerrar inadvertidamente los ojos mientras actúa el láser. Además, el rayo láser sigue, de forma exacta, todos los movimientos del ojo que puedan tener lugar. En el improbable caso que usted moviera el ojo en exceso, el láser se detiene automáticamente y se reanuda la intervención de manera segura una vez controlado el movimiento ocular. Una vez terminada la intervención y tras descansar unos minutos, el cirujano controlará que el ojo esté en condiciones favorables y entonces el paciente puede marchar a su casa por su propio pie, con los ojos destapados y ya sin necesidad de gafas. De manera rutinaria se le prescribirán lubricantes oculares durante unas semanas después de la cirugía que ayudaran a que su visión sea más robusta y constante.',
          },
          {
            question: '¿Cuáles son unas expectativas realistas?',
            answer:
              'Lo que se puede esperar, y por norma se obtiene, es una correcta visión sin gafas ni lentes de contacto pero no se debe buscar la perfección porque sencillamente “la visión perfecta” no existe más que en nuestra imaginación o en nuestro recuerdo.',
          },
          {
            question:
              '¿Cuándo puedo volver a hacer una vida normal tras la corrección con láser?',
            answer:
              'Siempre se recomienda que el día de la intervención se dedique a descansar y así evitar esfuerzos o actividades que requieran un esfuerzo visual. La reincorporación a la vida laboral se suele realizar a los pocos días tras la operación. Si bien la norma es que se alcanza una mejoría visual inmediata tras la operación haciendo ya innecesario el uso de gafas o lentes de contacto desde el primer día, el resultado visual definitivo no debe esperarse antes de que el ojo intervenido haya completado el proceso de curación, proceso que dura por lo general de uno a tres meses, siendo más rápido en el caso de FemtoLASIK.',
          },
          {
            question: '¿Cuánto dura el efecto del láser?',
            answer:
              'Nuestra corrección láser es en sí misma estable, por lo que salvo muy contadas excepciones, tras un periodo inicial, los resultados no varían significativamente con el tiempo. Siempre pueden existir variaciones naturales en el ojo miope pero volver a necesitar gafas como antes de la operación es del todo improbable.',
          },
          {
            question: '¿Qué riesgos tiene la operación?',
            answer:
              'La cirugía refractiva láser es por definición una intervención extremadamente segura y con una tasa de complicaciones muy baja. Aun así, es importante no olvidar que, al igual que cuando usted monta en coche o toma una medicina, toda operación tiene un riesgo de complicación por infrecuente que sea. Tras la valoración preoperatoria el cirujano podrá darle una idea más realista de sus posibilidades.',
          },
          {
            question:
              '¿Qué hacer cuando mi ojo no es apto para la técnica con láser?',
            answer:
              'No todos los ojos ni los defectos refractivos son aptos para la corrección con láser. La cornea puede ser excesivamente delgada o la miopía demasiado elevada para una corrección segura con laser. En estos casos en el Instituto Oftalmológico Amigó indicamos otras técnicas refractivas que por otra parte realizamos frecuentemente y también ofrecen la posibilidad de una correcta visión sin gafas ni lentes de contacto.',
          },
          {
            question:
              '¿Qué ocurre si tengo mucha miopía o mucha hipermetropía?',
            answer:
              'En los últimos años hemos desarrollado en nuestro instituto técnicas que nos permiten corregir con láser un mayor número de dioptrías, conservando la necesaria seguridad, incluso en pacientes que en otros centros han sido rechazados. Nuestra realidad es que la utilización del láser de femtosegundo o la personalización de la asfericidad corneal nos han marcado un antes y un después en este tipo de casos. No obstante continúan existiendo ojos donde el tratamiento más adecuado ya no es el láser sino otras técnicas como la implantación de lentes intraoculares fáquicas o afáquicas que nos permiten, tras una selección experta, una correcta corrección conservando todos los criterios de seguridad en casos de alta miopía, hipermetropía o astigmatismo. La decisión final de la técnica a emplear ha de tomarse después de un minucioso estudio en cada caso tras el que el especialista le explicará sus posibilidades.',
          },
        ],
      },
      {
        type: 'links_section',
        title: 'Tambíen te puede interesar',
        links: [
          {
            title:
              'Láser Excímer en cirugía ocular: precisión y calibración para resultados perfectos',
            url: `${blogSlugs.laser_excimer_calibracion}`,
          },
          {
            title: 'Láser de femtosegundo',
            url: `${specialtiesSlugs.laser_femtosegundo}`,
          },
          {
            title:
              'Operación de la presbicia (vista cansada) con láser o lentes intraoculares',
            url: `${specialtiesSlugs.operacion_presbicia}`,
          },
        ],
      },
    ],
    isMaintenance: false,
  },
  // Miopía
  {
    slug: 'operacion-miopia',
    title: 'Operación de Miopía',
    subtitle:
      'Corrige tu visión con nuestra avanzada cirugía refractiva láser.',
    icon: ScanEye,
    heroImageSlug: 'miopia-illustration',
    previewImageUrl: imageUrls.specialtyPreviewImages.miopia,
    overview:
      'La miopía es un defecto refractivo común donde los objetos cercanos se ven claros, pero los lejanos aparecen borrosos.',
    seo: {
      title:
        'Operación de Miopía en Tenerife | Cirugía Láser | Instituto Oftalmológico Amigó',
      description:
        'Especialistas en operación de miopía en Tenerife. Ofrecemos cirugía refractiva con FemtoLASIK y lentes ICL para que digas adiós a las gafas. ¡Pide tu cita!',
      keywords:
        'operación miopía tenerife, cirugía refractiva, precio operación miopía, lasik, femtolasik, clínica oftalmológica, tenerife, ioamigo, corrección visual, lentes ICL',
      canonical: 'https://ioamigo.com/especialidades/operacion-miopia',
      ogTitle:
        'Operación de Miopía en Tenerife | Cirugía Láser | Instituto Oftalmológico Amigó',
      ogDescription:
        'Especialistas en operación de miopía en Tenerife. Ofrecemos cirugía refractiva con FemtoLASIK y lentes ICL para que digas adiós a las gafas. ¡Pide tu cita!',
      ogImage: imageUrls.specialtyOgImages.miopia,
      ogUrl: 'https://ioamigo.com/especialidades/operacion-miopia',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-miopia/#webpage',
            url: 'https://ioamigo.com/especialidades/operacion-miopia',
            name: 'Operación de Miopía en Tenerife | Cirugía Láser | Instituto Oftalmológico Amigó',
            description:
              'Especialistas en operación de miopía en Tenerife. Ofrecemos cirugía refractiva con FemtoLASIK y lentes ICL para que digas adiós a las gafas. ¡Pide tu cita!',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.miopia,
            image: imageUrls.specialtyOgImages.miopia,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-08-28T00:00:00+00:00',
          },
          {
            '@type': 'MedicalProcedure',
            '@id':
              'https://ioamigo.com/especialidades/operacion-miopia/#medicalprocedure',
            name: 'Operación de Miopía',
            description:
              'Cirugía refractiva para corregir la miopía y mejorar la visión sin necesidad de gafas o lentes de contacto.',
            procedureType: 'SurgicalProcedure',
            medicalSpecialty: 'Ophthalmology',
            indication: {
              '@type': 'MedicalCondition',
              name: 'Miopía',
            },
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/operacion-miopia/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-miopia/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Cómo puedo saber si tengo miopía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El principal síntoma de la miopía es la dificultad para ver objetos a distancia. También puedes experimentar fatiga o malestar en los ojos. Estos síntomas suelen intensificarse por la noche debido a la dilatación de la pupila y otros factores.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Quiénes son candidatos para la cirugía ocular con láser?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La cirugía refractiva está dirigida a personas que desean dejar de depender de gafas o lentes de contacto. Es el oftalmólogo quien determina si el paciente es apto, evaluando las características del ojo, la edad y las preferencias personales.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo funciona la cirugía refractiva con láser?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La cirugía consiste en cambiar la forma de la córnea para corregir la graduación. El procedimiento se hace con un láser directamente sobre la córnea, en una técnica llamada PRK, o levantando una fina capa del tejido para moldearlo y después volverlo a colocar, en una técnica conocida como LASIK. Es un procedimiento indoloro que dura unos 10 minutos por ojo y no requiere hospitalización.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son las indicaciones a seguir después de la cirugía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La cirugía dura unos cinco minutos y se realiza con anestesia en gotas. Aunque verás de inmediato, la visión será borrosa al principio. Es fundamental que descanses con los ojos cerrados en un lugar con poca luz y sigas las instrucciones del médico sobre el uso de medicamentos tópicos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Soy un buen candidato para la cirugía refractiva?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La mayoría de personas con miopía son buenos candidatos. Los factores clave incluyen ser mayor de 18 años, tener una graduación estable durante el último año y una buena salud ocular general. En la primera consulta en nuestra clínica de Tenerife, realizaremos un completo estudio preoperatorio para confirmar tu idoneidad.',
                },
              },
              {
                '@type': 'Question',
                name: '¿La operación de miopía es dolorosa?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. La cirugía se realiza con anestesia en gotas y es un procedimiento muy rápido e indoloro. Puedes sentir una leve presión, pero no dolor. La recuperación visual es muy rápida, permitiéndote volver a tu rutina en pocos días.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: '¿Qué es la miopía?',
        id: 'que-es-la-miopia',
        content:
          '<p>La miopía es el defecto refractivo más común y se caracteriza por una <strong>visión borrosa </strong> de los objetos lejanos, mientras que los objetos cercanos se ven con claridad. Esto ocurre porque el ojo es más largo de lo normal o la córnea tiene una curvatura demasiado pronunciada, lo que provoca que la imagen se enfoque delante de la retina en lugar de sobre ella. Las personas con miopía suelen acercar los objetos para verlos con nitidez, de ahí que también se les conozca como <strong>“cortos de vista”.</strong></p><p>La <strong>OMS prevé</strong> que en 2050 un 50% de la población mundial tendrá miopía.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Síntomas de la miopía',
        id: 'sintomas-de-la-miopia',
        content: '',
        list: [
          'Visión borrosa de lejos',
          'Entrecerrar los ojos para ver mejor',
          'Dolor de cabeza',
          'Fatiga visual',
          'Dificultad para conducir, especialmente de noche',
        ],
        icon: Thermometer,
      },
      {
        type: 'section',
        title: 'Causas',
        id: 'causas',
        content:
          '<p>La causa principal de la miopía es genética, aunque también influyen factores ambientales como el uso excesivo de dispositivos electrónicos, la lectura prolongada en distancias cortas y la falta de exposición a la luz natural durante la infancia. Estos factores pueden favorecer un crecimiento anormal del globo ocular.</p>',
        list: [
          {
            content:
              '<strong>1. Factores genéticos:</strong> La miopía tiene un fuerte componente hereditario. Si uno o ambos padres son miopes, aumenta significativamente la probabilidad de que sus hijos también desarrollen miopía.',
          },
          {
            content: '<strong>2. Factores ambientales:</strong>',
            childList: [
              {
                content:
                  'Uso excesivo de visión cercana: Actividades como leer, escribir, estudiar o utilizar dispositivos móviles y pantallas durante muchas horas al día, especialmente en la infancia, están relacionadas con un mayor riesgo de desarrollar miopía.',
                icon: Minus,
              },
              {
                content:
                  'Falta de exposición a la luz natural: Estudios recientes han demostrado que pasar poco tiempo al aire libre durante la infancia puede favorecer la aparición y progresión de la miopía. La luz natural parece tener un efecto protector sobre el crecimiento ocular.',
                icon: Minus,
              },
            ],
          },
          {
            content:
              '<strong>3. Causas patológicas:</strong> Algunas enfermedades pueden causar miopía de forma temporal o permanente.',
          },
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-miopia',
        content:
          '<p>El objetivo de la corrección es enfocar la imagen correctamente sobre la retina. Las opciones incluyen:</p>',
        list: [
          {
            title: 'Cirugía refractiva con láser:',
            content:
              'En el <strong>Instituto Oftalmológico Amigó</strong> realizamos técnicas avanzadas de cirugía refractiva, utilizando la mejor tecnología disponible:',
            childList: [
              {
                content:
                  '<strong>FemtoLASIK: </strong> Técnica de alta precisión que emplea láser de femtosegundo para crear el flap corneal sin cuchillas, lo que permite una recuperación visual más rápida, menor inflamación y una cirugía más segura.',
                icon: Minus,
              },
              {
                content:
                  '<strong> LASIK convencional: </strong> Técnica segura y eficaz que utiliza un microqueratomo (cuchilla) para crear el flap. Aunque es ampliamente utilizada, se va reemplazando progresivamente por el FemtoLASIK.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Ablación superficial avanzada (PRK, LASEK, Epilasik): </strong> Alternativa para pacientes con córneas delgadas o en quienes no se recomienda LASIK. El láser se aplica directamente sobre la superficie de la córnea. La recuperación es más lenta, pero es una técnica muy útil en casos seleccionados.',
                icon: Minus,
              },
            ],
          },
          {
            content:
              '<strong> Implante de lentes ICL (lentes fáquicas):</strong>',
            childList: [
              {
                content:
                  'Indicadas especialmente en pacientes con muchas dioptrías (miopía magna, hipermetropía alta), córneas demasiado delgadas, ojos secos u otras condiciones que desaconsejen el uso del láser. Las lentes ICL se <strong>implantan dentro del ojo </strong> sin extraer el cristalino natural, lo que las convierte en una técnica reversible. Ofrecen una excelente calidad visual y una recuperación rápida.',
                icon: Minus,
              },
              {
                content: 'Ventajas:',
                childList: [
                  { content: 'Reversibilidad', icon: Minus },
                  {
                    content: 'Alta calidad visual incluso con muchas dioptrías',
                    icon: Minus,
                  },
                  {
                    content: 'Indicadas en córneas no aptas para láser',
                    icon: Minus,
                  },
                  {
                    content:
                      'Procedimiento seguro y personalizado, realizado bajo anestesia local.',
                    icon: Minus,
                  },
                ],
              },
            ],
          },
          {
            content: '<strong> Otras opciones no quirúrgicas:</strong>',
            childList: [
              { content: 'Gafas', icon: Minus },
              { content: 'Lentes de contacto', icon: Minus },
              {
                content:
                  'Control de la miopía con atropina: En niños y adolescentes con miopía progresiva, el colirio de atropina en dosis bajas (0.01%) puede ayudar a ralentizar el aumento de las dioptrías. Este tratamiento, supervisado por el oftalmólogo, se está consolidando como una herramienta útil para el control de la miopía infantil y adolescente.',
                icon: Minus,
              },
            ],
          },
        ],
        icon: ClipboardPaste,
      },
      {
        type: 'section',
        title: 'Miopía magna',
        id: 'miopia-magna',
        content:
          '<p>La miopía magna es una forma severa de miopía, generalmente superior a las 6 dioptrías, y se asocia a un alargamiento anormal del globo ocular.</p><p>Este tipo de miopía puede producir alteraciones en la retina y otras estructuras del ojo, aumentando el riesgo de enfermedades como <strong>desprendimiento de retina</strong>, <strong>maculopatía miópica</strong> o <strong>glaucoma</strong>. Requiere seguimiento oftalmológico estrecho y en algunos casos tratamientos específicos, incluyendo cirugía.</p>',
        icon: Layers,
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes',
        id: 'faq-operacion-miopia',
        icon: HelpCircle,
        items: [
          {
            question: '¿Cómo puedo saber si tengo miopía?',
            answer:
              'El principal síntoma de la miopía es la dificultad para ver objetos a distancia. También puedes experimentar fatiga o malestar en los ojos. Estos síntomas suelen intensificarse por la noche debido a la dilatación de la pupila y otros factores.',
          },
          {
            question:
              '¿Quiénes son candidatos para la cirugía ocular con láser?',
            answer:
              'La cirugía refractiva está dirigida a personas que desean dejar de depender de gafas o lentes de contacto. Es el oftalmólogo quien determina si el paciente es apto, evaluando las características del ojo, la edad y las preferencias personales.',
          },
          {
            question: '¿Cómo funciona la cirugía refractiva con láser?',
            answer:
              'La cirugía consiste en cambiar la forma de la córnea para corregir la graduación. El procedimiento se hace con un láser directamente sobre la córnea, en una técnica llamada PRK, o levantando una fina capa del tejido para moldearlo y después volverlo a colocar, en una técnica conocida como LASIK. Es un procedimiento indoloro que dura unos 10 minutos por ojo y no requiere hospitalización.',
          },
          {
            question:
              '¿Cuáles son las indicaciones a seguir después de la cirugía?',
            answer:
              'La cirugía dura unos cinco minutos y se realiza con anestesia en gotas. Aunque verás de inmediato, la visión será borrosa al principio. Es fundamental que descanses con los ojos cerrados en un lugar con poca luz y sigas las instrucciones del médico sobre el uso de medicamentos tópicos.',
          },
          {
            question: '¿Soy un buen candidato para la cirugía refractiva?',
            answer:
              'La mayoría de personas con miopía son buenos candidatos. Los factores clave incluyen ser mayor de 18 años, tener una graduación estable durante el último año y una buena salud ocular general. En la primera consulta en nuestra clínica de Tenerife, realizaremos un completo estudio preoperatorio para confirmar tu idoneidad.',
          },
          {
            question: '¿La operación de miopía es dolorosa?',
            answer:
              'No. La cirugía se realiza con anestesia en gotas y es un procedimiento muy rápido e indoloro. Puedes sentir una leve presión, pero no dolor. La recuperación visual es muy rápida, permitiéndote volver a tu rutina en pocos días.',
          },
        ],
      },
      {
        type: 'links_section',
        title: 'Tambíen te puede interesar',
        links: [
          {
            title: 'Operación de miopía: cómo es la cirugía paso a paso',
            url: '/blog/como-es-una-operacion-de-miopia',
          },
        ],
      },
    ],
    isMaintenance: false,
  },
  // Hipermetropía
  {
    slug: 'operacion-hipermetropia',
    title: 'Hipermetropía',
    subtitle: 'Dificultad para enfocar objetos cercanos.',
    icon: LucideEye,
    heroImageSlug: 'hipermetropia-illustration',
    previewImageUrl: imageUrls.specialtyPreviewImages.hipermetropia,
    overview:
      '<p>En el Instituto Oftalmológico Amigó, ofrecemos soluciones avanzadas para la <strong>hipermetropía</strong>, un defecto refractivo que dificulta la visión de objetos cercanos. Nuestro objetivo es proporcionarle una visión nítida y sin esfuerzo, adaptando el tratamiento a sus necesidades específicas.</p>',
    seo: {
      title:
        'Operación de Hipermetropía en Tenerife | Cirugía Láser y Lentes ICL | Instituto Oftalmológico Amigó',
      description:
        'Recupera tu visión de cerca con la operación de hipermetropía en Tenerife. Cirugía láser (FemtoLASIK, LASIK, PRK) y lentes ICL en el Instituto Oftalmológico Amigó. Consulta gratuita, tecnología avanzada y atención personalizada.',
      keywords:
        'hipermetropía, operación hipermetropía, cirugía láser, FemtoLASIK, LASIK, PRK, lentes ICL, lentes intraoculares, visión borrosa, clínica oftalmológica, Tenerife',
      canonical: 'https://ioamigo.com/especialidades/operacion-hipermetropia',
      ogTitle:
        'Operación de Hipermetropía en Tenerife | Cirugía Láser y Lentes ICL | Instituto Oftalmológico Amigó',
      ogDescription:
        'Recupera tu visión de cerca con la operación de hipermetropía en Tenerife. Cirugía láser (FemtoLASIK, LASIK, PRK) y lentes ICL en el Instituto Oftalmológico Amigó. Consulta gratuita, tecnología avanzada y atención personalizada.',
      ogImage: imageUrls.specialtyOgImages.hipermetropia,
      ogUrl: 'https://ioamigo.com/especialidades/operacion-hipermetropia',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      twitterTitle:
        'Operación de Hipermetropía en Tenerife | Cirugía Láser y Lentes ICL',
      twitterDescription:
        'Soluciones avanzadas para la hipermetropía en Tenerife: cirugía láser y lentes ICL en el Instituto Oftalmológico Amigó.',
      twitterImage: imageUrls.specialtyOgImages.hipermetropia,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-hipermetropia/#webpage',
            url: 'https://ioamigo.com/especialidades/operacion-hipermetropia',
            name: 'Operación de Hipermetropía en Tenerife | Cirugía Láser y Lentes ICL | Instituto Oftalmológico Amigó',
            description:
              'Recupera tu visión de cerca con la operación de hipermetropía en Tenerife. Cirugía láser (FemtoLASIK, LASIK, PRK) y lentes ICL en el Instituto Oftalmológico Amigó. Consulta gratuita, tecnología avanzada y atención personalizada.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.hipermetropia,
            image: imageUrls.specialtyOgImages.hipermetropia,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-09-12T00:00:00+00:00',
            publisher: {
              '@type': 'Organization',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              logo: {
                '@type': 'ImageObject',
                url: imageUrls.logo,
                width: 512,
                height: 512,
              },
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Especialidades',
                  item: 'https://ioamigo.com/especialidades',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Hipermetropía',
                  item: 'https://ioamigo.com/especialidades/operacion-hipermetropia',
                },
              ],
            },
          },
          {
            '@type': 'MedicalCondition',
            '@id':
              'https://ioamigo.com/especialidades/operacion-hipermetropia/#medicalcondition',
            name: 'Hipermetropía',
            alternateName: 'Hipermetropía ocular',
            description:
              'La hipermetropía es un defecto de refracción que dificulta el enfoque de objetos cercanos. Puede corregirse con cirugía láser (FemtoLASIK, LASIK, PRK) o implante de lentes ICL.',
            medicalSpecialty: 'Ophthalmology',
            possibleTreatment: [
              {
                '@type': 'MedicalProcedure',
                name: 'Cirugía Refractiva con Láser',
                procedureType: 'Surgical',
                howPerformed:
                  'El láser remodela la córnea para enfocar correctamente la luz sobre la retina.',
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Implante de Lentes Intraoculares (ICL)',
                procedureType: 'Surgical',
                howPerformed:
                  'Se implanta una lente dentro del ojo sin extraer el cristalino natural.',
              },
              {
                '@type': 'MedicalDevice',
                name: 'Gafas',
                purpose: 'Corrección óptica temporal de la hipermetropía.',
              },
              {
                '@type': 'MedicalDevice',
                name: 'Lentes de contacto',
                purpose: 'Corrección óptica temporal de la hipermetropía.',
              },
            ],
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/operacion-hipermetropia/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-hipermetropia/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es la hipermetropía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La hipermetropía es un defecto de refracción en el que las imágenes se enfocan detrás de la retina, causando visión borrosa de cerca. Esto ocurre porque el globo ocular es más corto de lo normal o la córnea es demasiado plana.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son las causas de la hipermetropía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La causa más frecuente es genética. También puede ser provocada por alteraciones en el desarrollo del ojo durante la infancia, como la hipermetropía fisiológica en recién nacidos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son los síntomas de la hipermetropía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los síntomas incluyen dificultad para ver de cerca, cansancio ocular al leer, dolor de cabeza, visión borrosa (especialmente al final del día) y, en algunos casos, estrabismo infantil.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo se trata la hipermetropía?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las opciones de tratamiento incluyen gafas, lentes de contacto, cirugía refractiva con láser (FemtoLASIK, LASIK convencional, PRK/LASEK) e implante de lentes ICL. La elección depende de las características individuales del ojo.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: '¿Qué es la hipermetropía?',
        id: 'que-es-la-hipermetropia',
        content:
          '<p>La <strong>hipermetropía</strong> es un defecto de refracción donde las imágenes se enfocan detrás de la retina, causando visión borrosa de cerca. Esto ocurre porque el globo ocular es más corto de lo normal o la córnea es demasiado plana. Como resultado, la visión de cerca suele ser borrosa, aunque en pacientes jóvenes, el ojo puede compensar el defecto y mantener una visión clara durante un tiempo.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Causas de la hipermetropía',
        id: 'causas-de-la-hipermetropia',
        content:
          '<p>La <strong>hipermetropía</strong> puede tener diversas causas, siendo la genética la más frecuente. También puede estar relacionada con el desarrollo ocular durante la infancia:</p>',
        list: [
          {
            content:
              '<strong>1. Hipermetropía fisiológica en la infancia:</strong> Es común en recién nacidos, ya que sus ojos aún no han alcanzado su tamaño definitivo. Generalmente se corrige de forma natural con el crecimiento, pero si es alta o no se trata, puede derivar en ojo vago o estrabismo.',
          },
          {
            content:
              '<strong>2. Causas genéticas:</strong> Existe un componente hereditario. Si los padres son hipermétropes, la probabilidad de que sus hijos también lo sean aumenta.',
          },
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Síntomas',
        id: 'sintomas',
        content:
          '<p>Los síntomas más comunes de la hipermetropía incluyen:</p>',
        list: [
          'Dificultad para ver de cerca',
          'Cansancio ocular al leer',
          'Dolor de cabeza',
          'Visión borrosa (especialmente al final del día)',
          'En algunos casos, estrabismo infantil',
        ],
        icon: Thermometer,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-hipermetropia',
        content:
          '<p>El objetivo principal del tratamiento de la hipermetropía es lograr que las imágenes se enfoquen correctamente sobre la retina, permitiendo una visión clara. En el Instituto Oftalmológico Amigó, ofrecemos diversas opciones, adaptadas a las necesidades de cada paciente:</p>',
        list: [
          {
            title: 'Cirugía refractiva con láser:',
            content:
              'En el <strong>Instituto Oftalmológico Amigó</strong>, empleamos tecnología de vanguardia para la cirugía refractiva, incluyendo:',
            childList: [
              {
                content:
                  '<strong>FemtoLASIK:</strong> Técnica de alta precisión que utiliza láser de femtosegundo para crear el flap corneal, lo que resulta en una recuperación visual más rápida, menor inflamación y mayor seguridad.',
                icon: Minus,
              },
              {
                content:
                  '<strong>LASIK convencional:</strong> Una técnica segura y eficaz que utiliza un microqueratomo. Aunque aún se emplea, el FemtoLASIK la está reemplazando progresivamente.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Ablación superficial avanzada (PRK, LASEK, Epilasik):</strong> Ideal para pacientes con córneas delgadas o cuando LASIK no es recomendable. El láser se aplica directamente sobre la superficie corneal, con una recuperación algo más lenta pero muy útil en casos específicos.',
                icon: Minus,
              },
            ],
          },
          {
            content:
              '<strong>Implante de lentes ICL (lentes fáquicas):</strong>',
            childList: [
              {
                content:
                  'Especialmente indicadas para pacientes con altas dioptrías, córneas muy delgadas, ojo seco severo u otras condiciones que desaconsejan el láser. Las lentes ICL se implantan dentro del ojo sin extraer el cristalino natural, siendo un procedimiento reversible que ofrece una excelente calidad visual y rápida recuperación.',
                icon: Minus,
              },
              {
                content: 'Ventajas:',
                childList: [
                  { content: 'Reversibilidad del procedimiento.', icon: Minus },
                  {
                    content:
                      'Alta calidad visual, incluso en casos de muchas dioptrías.',
                    icon: Minus,
                  },
                  {
                    content:
                      'Opción viable para córneas no aptas para cirugía láser.',
                    icon: Minus,
                  },
                  {
                    content:
                      'Procedimiento seguro y personalizado, realizado bajo anestesia local.',
                    icon: Minus,
                  },
                ],
              },
            ],
          },
          {
            content: '<strong>Otras opciones no quirúrgicas:</strong>',
            childList: [
              {
                content:
                  'Gafas: La solución más común para corregir la hipermetropía.',
                icon: Minus,
              },
              {
                content:
                  'Lentes de contacto: Una alternativa cómoda para muchos pacientes.',
                icon: Minus,
              },
              {
                content:
                  'Control de la miopía con atropina: Aunque principalmente para miopía, en algunos casos de hipermetropía en niños, el oftalmólogo puede considerar tratamientos para controlar su progresión.',
                icon: Minus,
              },
            ],
          },
        ],
        icon: ClipboardPaste,
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes sobre Hipermetropía',
        id: 'faq-hipermetropia',
        icon: HelpCircle,
        items: [
          {
            question: '¿Qué es la hipermetropía?',
            answer:
              'La hipermetropía es un defecto de refracción en el que las imágenes se enfocan detrás de la retina, causando visión borrosa de cerca. Esto ocurre porque el globo ocular es más corto de lo normal o la córnea es demasiado plana.',
          },
          {
            question: '¿Cuáles son las causas de la hipermetropía?',
            answer:
              'La causa más frecuente es genética. También puede ser provocada por alteraciones en el desarrollo del ojo durante la infancia, como la hipermetropía fisiológica en recién nacidos.',
          },
          {
            question: '¿Cuáles son los síntomas de la hipermetropía?',
            answer:
              'Los síntomas incluyen dificultad para ver de cerca, cansancio ocular al leer, dolor de cabeza, visión borrosa (especialmente al final del día) y, en algunos casos, estrabismo infantil.',
          },
          {
            question: '¿Cómo se trata la hipermetropía?',
            answer:
              'Las opciones de tratamiento incluyen gafas, lentes de contacto, cirugía refractiva con láser (FemtoLASIK, LASIK convencional, PRK/LASEK) e implante de lentes ICL. La elección depende de las características individuales del ojo.',
          },
        ],
      },
    ],
    isMaintenance: false,
  },
  // Astigmatismo
  {
    slug: 'operacion-astigmatismo',
    title: 'Astigmatismo',
    subtitle: 'Visión distorsionada a cualquier distancia.',
    icon: LucideEyeOff,
    heroImageSlug: 'astigmatismo-illustration',
    previewImageUrl: imageUrls.specialtyPreviewImages.astigmatismo,
    overview:
      'El astigmatismo es un defecto refractivo que causa visión borrosa o distorsionada debido a una curvatura irregular de la córnea o el cristalino.',
    seo: {
      title:
        'Operación de Astigmatismo en Tenerife | Cirugía Láser y Lentes ICL | Instituto Oftalmológico Amigó',
      description:
        'Corrige el astigmatismo en Tenerife con cirugía láser avanzada (FemtoLASIK, PRK) y lentes ICL. Instituto Oftalmológico Amigó: tecnología de vanguardia, atención personalizada y resultados óptimos.',
      keywords:
        'astigmatismo, operación astigmatismo, cirugía láser, FemtoLASIK, PRK, LASIK, lentes ICL, lentes intraoculares, visión borrosa, clínica oftalmológica, Tenerife',
      canonical: 'https://ioamigo.com/especialidades/operacion-astigmatismo',
      ogTitle:
        'Operación de Astigmatismo en Tenerife | Cirugía Láser y Lentes ICL | Instituto Oftalmológico Amigó',
      ogDescription:
        'Corrige el astigmatismo en Tenerife con cirugía láser avanzada (FemtoLASIK, PRK) y lentes ICL. Instituto Oftalmológico Amigó: tecnología de vanguardia, atención personalizada y resultados óptimos.',
      ogImage: imageUrls.specialtyOgImages.astigmatismo,
      ogUrl: 'https://ioamigo.com/especialidades/operacion-astigmatismo',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      twitterTitle:
        'Operación de Astigmatismo en Tenerife | Cirugía Láser y Lentes ICL',
      twitterDescription:
        'Soluciones avanzadas para el astigmatismo en Tenerife: cirugía láser y lentes ICL en el Instituto Oftalmológico Amigó.',
      twitterImage: imageUrls.specialtyOgImages.astigmatismo,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-astigmatismo/#webpage',
            url: 'https://ioamigo.com/especialidades/operacion-astigmatismo',
            name: 'Operación de Astigmatismo en Tenerife | Cirugía Láser y Lentes ICL | Instituto Oftalmológico Amigó',
            description:
              'Corrige el astigmatismo en Tenerife con cirugía láser avanzada (FemtoLASIK, PRK) y lentes ICL. Instituto Oftalmológico Amigó: tecnología de vanguardia, atención personalizada y resultados óptimos.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.astigmatismo,
            image: imageUrls.specialtyOgImages.astigmatismo,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-09-12T00:00:00+00:00',
            publisher: {
              '@type': 'Organization',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              logo: {
                '@type': 'ImageObject',
                url: imageUrls.logo,
                width: 512,
                height: 512,
              },
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Especialidades',
                  item: 'https://ioamigo.com/especialidades',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Astigmatismo',
                  item: 'https://ioamigo.com/especialidades/operacion-astigmatismo',
                },
              ],
            },
          },
          {
            '@type': 'MedicalCondition',
            '@id':
              'https://ioamigo.com/especialidades/operacion-astigmatismo/#medicalcondition',
            name: 'Astigmatismo',
            alternateName: 'Astigmatismo ocular',
            description:
              'El astigmatismo es un defecto óptico causado por una curvatura irregular de la córnea, que provoca visión borrosa y distorsionada.',
            medicalSpecialty: 'Ophthalmology',
            possibleTreatment: [
              {
                '@type': 'MedicalProcedure',
                name: 'Cirugía Refractiva con Láser',
                procedureType: 'Surgical',
                howPerformed:
                  'El láser remodela la córnea para corregir la curvatura irregular y enfocar la luz correctamente sobre la retina.',
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Implante de Lentes Intraoculares (ICL)',
                procedureType: 'Surgical',
                howPerformed:
                  'Se implanta una lente dentro del ojo sin extraer el cristalino natural.',
              },
              {
                '@type': 'MedicalDevice',
                name: 'Gafas',
                purpose: 'Corrección óptica temporal del astigmatismo.',
              },
              {
                '@type': 'MedicalDevice',
                name: 'Lentes de contacto',
                purpose: 'Corrección óptica temporal del astigmatismo.',
              },
            ],
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/operacion-astigmatismo/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-astigmatismo/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es el astigmatismo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El astigmatismo es un defecto óptico causado por una curvatura irregular de la córnea, que provoca visión borrosa y distorsionada.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son las causas del astigmatismo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las causas más frecuentes son la asimetría natural en la curvatura de la córnea (congénita), traumatismos oculares, cicatrices corneales y, en algunos casos, el queratocono.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son los síntomas del astigmatismo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los síntomas incluyen visión distorsionada o borrosa, dificultad para enfocar tanto de lejos como de cerca, dolor ocular o cefalea y fatiga visual, sobre todo al leer.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo se trata el astigmatismo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las opciones de tratamiento incluyen gafas, lentes de contacto, cirugía refractiva con láser (FemtoLASIK, PRK, LASIK convencional) e implante de lentes ICL. La elección depende de las características individuales del ojo.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: '¿Qué es el astigmatismo?',
        id: 'que-es-el-astigmatismo',
        content:
          '<p>El astigmatismo es un defecto óptico causado por una curvatura irregular de la córnea. En lugar de tener forma perfectamente esférica, la córnea presenta una forma ovalada, lo que provoca que las imágenes se enfoquen en varios puntos en lugar de uno solo. Puede coexistir con miopía o hipermetropía.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Causas',
        id: 'causas',
        content: '',
        list: [
          'Asimetría natural en la curvatura de la córnea (congénita)',
          'Traumatismos oculares',
          'Cicatrices corneales',
          'Queratocono (en algunos casos)',
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Síntomas',
        id: 'sintomas',
        content: '',
        list: [
          'Visión distorsionada o borrosa',
          'Dificultad para enfocar tanto de lejos como de cerca',
          'Dolor ocular o cefalea',
          'Fatiga visual, sobre todo al leer',
        ],
        icon: Thermometer,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-astigmatismo',
        content:
          '<p>El objetivo de la corrección es enfocar la imagen correctamente sobre la retina. Las opciones incluyen:</p>',
        list: [
          {
            title: 'Cirugía refractiva con láser:',
            content:
              'En el <strong>Instituto Oftalmológico Amigó</strong> realizamos técnicas avanzadas de cirugía refractiva, utilizando la mejor tecnología disponible:',
            childList: [
              {
                content:
                  '<strong>FemtoLASIK: </strong> Técnica de alta precisión que emplea láser de femtosegundo para crear el flap corneal sin cuchillas, lo que permite una recuperación visual más rápida, menor inflamación y una cirugía más segura.',
                icon: Minus,
              },
              {
                content:
                  '<strong> LASIK convencional: </strong> Técnica segura y eficaz que utiliza un microqueratomo (cuchilla) para crear el flap. Aunque es ampliamente utilizada, se va reemplazando progresivamente por el FemtoLASIK.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Ablación superficial avanzada (PRK, LASEK, Epilasik): </strong> Alternativa para pacientes con córneas delgadas o en quienes no se recomienda LASIK. El láser se aplica directamente sobre la superficie de la córnea. La recuperación es más lenta, pero es una técnica muy útil en casos seleccionados.',
                icon: Minus,
              },
            ],
          },
          {
            content:
              '<strong> Implante de lentes ICL (lentes fáquicas):</strong>',
            childList: [
              {
                content:
                  'Indicadas especialmente en pacientes con muchas dioptrías (miopía magna, hipermetropía alta), córneas demasiado delgadas, ojos secos u otras condiciones que desaconsejen el uso del láser. Las lentes ICL se <strong>implantan dentro del ojo </strong> sin extraer el cristalino natural, lo que las convierte en una técnica reversible. Ofrecen una excelente calidad visual y una recuperación rápida.',
                icon: Minus,
              },
              {
                content: 'Ventajas:',
                childList: [
                  { content: 'Reversibilidad', icon: Minus },
                  {
                    content: 'Alta calidad visual incluso con muchas dioptrías',
                    icon: Minus,
                  },
                  {
                    content: 'Indicadas en córneas no aptas para láser',
                    icon: Minus,
                  },
                  {
                    content:
                      'Procedimiento seguro y personalizado, realizado bajo anestesia local.',
                    icon: Minus,
                  },
                ],
              },
            ],
          },
          {
            content: '<strong> Otras opciones no quirúrgicas:</strong>',
            childList: [
              { content: 'Gafas', icon: Minus },
              { content: 'Lentes de contacto', icon: Minus },
              {
                content:
                  'Control de la miopía con atropina: En niños y adolescentes con miopía progresiva, el colirio de atropina en dosis bajas (0.01%) puede ayudar a ralentizar el aumento de las dioptrías. Este tratamiento, supervisado por el oftalmólogo, se está consolidando como una herramienta útil para el control de la miopía infantil y adolescente.',
                icon: Minus,
              },
            ],
          },
        ],
        icon: ClipboardPaste,
      },
    ],
    isMaintenance: false,
  },
  // Presbicia
  {
    slug: 'operacion-presbicia',
    title: 'Operación de Presbicia',
    subtitle:
      'Presbicia o Vista Cansada. Dificultad para enfocar de cerca relacionada con la edad.',
    icon: User,
    heroImageSlug: 'presbicia-illustration',
    previewImageUrl: imageUrls.specialtyPreviewImages.presbicia,
    overview:
      'La presbicia es la pérdida gradual de la capacidad para enfocar objetos cercanos, común a partir de los 40 años.',
    seo: {
      title:
        'Operación de Presbicia (Vista Cansada) en Tenerife | Instituto Oftalmológico Amigó',
      description:
        'Soluciones efectivas para la presbicia o vista cansada en Tenerife. Recupera tu visión de cerca con nuestros tratamientos personalizados en Instituto Oftalmológico Amigó.',
      keywords:
        'presbicia, vista cansada, operación presbicia, presbicia operacion precio, presbicia tratamiento, tenerife, oftalmólogo tenerife, ioamigo',
      canonical: 'https://ioamigo.com/especialidades/operacion-presbicia',
      ogTitle:
        'Operación de Presbicia (Vista Cansada) en Tenerife | Instituto Oftalmológico Amigó',
      ogDescription:
        'Soluciones efectivas para la presbicia o vista cansada en Tenerife. Recupera tu visión de cerca con nuestros tratamientos personalizados en Instituto Oftalmológico Amigó.',
      ogImage: imageUrls.specialtyOgImages.presbicia,
      ogUrl: 'https://ioamigo.com/especialidades/operacion-presbicia',
      ogType: 'article',
      ogVideo: 'https://www.youtube.com/watch?v=byl91haMTaM',
      ogVideoType: 'video/mp4',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-presbicia/#webpage',
            url: 'https://ioamigo.com/especialidades/operacion-presbicia',
            name: 'Operación de Presbicia (Vista Cansada) en Tenerife | Instituto Oftalmológico Amigó',
            description:
              'Soluciones efectivas para la presbicia o vista cansada en Tenerife. Recupera tu visión de cerca con nuestros tratamientos personalizados en Instituto Oftalmológico Amigó.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.presbicia,
            image: imageUrls.specialtyOgImages.presbicia,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-09-18T00:00:00+00:00',
            video: {
              '@type': 'VideoObject',
              name: 'Qué es la Presbicia o Vista Cansada y Cómo se Corrige | Instituto Oftalmológico Amigó',
              description:
                'El Dr. Alfredo Amigó explica qué es la presbicia o vista cansada, por qué aparece a partir de los 40 años y qué soluciones existen para corregirla, como la cirugía con lentes intraoculares o el tratamiento láser.',
              thumbnailUrl:
                'https://img.youtube.com/vi/byl91haMTaM/maxresdefault.jpg',
              uploadDate: '2024-09-20T08:00:00+00:00',
              duration: 'PT2M15S',
              contentUrl: 'https://www.youtube.com/watch?v=byl91haMTaM',
              embedUrl: 'https://www.youtube.com/embed/byl91haMTaM',
              publisher: {
                '@type': 'Organization',
                name: 'Instituto Oftalmológico Amigó',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://ioamigo.com/logo.jpg',
                  width: 512,
                  height: 512,
                },
              },
            },
          },
          {
            '@type': 'MedicalProcedure',
            '@id':
              'https://ioamigo.com/especialidades/operacion-presbicia/#medicalprocedure',
            name: 'Operación de Presbicia (Vista Cansada)',
            description:
              'Procedimiento quirúrgico para corregir la presbicia, o vista cansada, mediante el implante de lentes intraoculares o técnicas láser avanzadas.',
            procedureType: 'SurgicalProcedure',
            medicalSpecialty: 'Ophthalmology',
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/operacion-presbicia/#webpage',
            },
          },
        ],
      },
    },
    content: [
      {
        type: 'video',
        videoId: videoIds.presbicia,
        title: '¿Qué es la Presbicia? | Instituto Oftalmológico Amigó',
      },
      {
        type: 'section',
        title: '¿Qué es la presbicia?',
        id: 'que-es-la-presbicia',
        content:
          '<p>La <strong>presbicia</strong>, conocida popularmente como <string>vista cansada</strong>, es la dificultad progresiva para ver de cerca (leer, coser, usar el móvil…), a pesar de mantener una buena visión de lejos.</p><br><p>Aparece de manera natural a partir de los <strong>40-45 años</strong>, debido al <strong>envejecimiento del cristalino</strong>, la lente natural del ojo que con el paso del tiempo pierde elasticidad y ya no puede enfocar correctamente a diferentes distancias.</p><br/><p>La presbicia <strong>no es una enfermedad</strong>, sino una consecuencia natural del envejecimiento ocular. Sin embargo, puede afectar notablemente a la calidad de vida, obligando al uso de gafas para leer o realizar tareas de cerca.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Causas',
        id: 'causas-de-la-presbicia',
        content: '',
        list: [
          '<strong>Edad</strong>: es la causa principal. A partir de los 40 años el cristalino comienza a perder capacidad de acomodación.',
          '<strong>Cambios en el cristalino</strong>: con el tiempo se vuelve más rígido y menos flexible, dificultando el enfoque en distancias cortas.',
          '<strong>Factores genéticos</strong>: aunque aparece en todos, la edad de inicio puede variar según la predisposición familiar.',
          '<strong>Factores asociados</strong>: determinadas enfermedades (como la diabetes) o tratamientos prolongados con ciertos medicamentos pueden favorecer una aparición más precoz.',
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-de-la-presbicia',
        content:
          '<p>En el <strong>Instituto Oftalmológico Amigó</strong> ofrecemos las técnicas más avanzadas para la corrección de la presbicia, con más de 30 años de experiencia en este tipo de procedimientos. Gracias a los últimos avances tecnológicos, es posible corregir la presbicia y, al mismo tiempo, otros defectos refractivos asociados como la miopía, hipermetropía o astigmatismo.</p> <br/><p>El oftalmólogo será quien, tras un estudio personalizado, recomiende el tratamiento más adecuado en cada caso.</p>',
        list: [
          {
            title: 'Lentes intraoculares multifocales o de rango extendido',
            content:
              'La cirugía con <strong>lentes multifocales</strong> consiste en sustituir el cristalino envejecido por una lente intraocular que permite enfocar a varias distancias (cerca, intermedia y lejos)',
            childList: [
              {
                content:
                  'Procedimiento ambulatorio, con anestesia en gotas y de unos 12-15 minutos por ojo.',
                icon: Minus,
              },
              {
                content: 'Recuperación rápida y resultados estables.',
                icon: Minus,
              },
              {
                content: 'Elimina el riesgo de cataratas futuras.',
                icon: Minus,
              },
              {
                content:
                  'Según los estudios, más del <strong>90% de los pacientes operados</strong> no necesitan gafas para ninguna actividad tras la cirugía.',
                icon: Minus,
              },
            ],
          },
          {
            title: 'PresbiLASIK (tratamiento láser corneal)',
            content:
              'El <strong>PresbiLASIK</strong> es una técnica láser personalizada que remodela la córnea para mejorar la visión próxima e intermedia, al mismo tiempo que corrige otros defectos refractivos.',
            childList: [
              {
                content:
                  'Se basa en potenciar el “ojo lector” y el “ojo dominante” de forma natural.',
                icon: Minus,
              },
              {
                content: 'Procedimiento ambulatorio, con anestesia tópica.',
                icon: Minus,
              },
              {
                content:
                  'Recuperación visual rápida, con posibilidad de prescindir de gafas desde el primer día.',
                icon: Minus,
              },
              {
                content:
                  'En el <strong>Instituto Oftalmológico Amigó</strong> se añaden tratamientos de personalización corneal (asfericidad y aberrometría) para mejorar aún más los resultados.',
                icon: Minus,
              },
            ],
          },
          {
            title: 'Cirugía Premium con láser de femtosegundo (sin cuchillas)',
            content: `<p>La llegada del <strong><a href="${specialtiesSlugs.laser_femtosegundo}" class="text-blue-600 hover:underline">láser de femtosegundo LDV Z8</a></strong>, único en Canarias y en España, ha supuesto una auténtica revolución en la cirugía de la presbicia.</p><br/> <p>Gracias a esta tecnología, la cirugía de la presbicia es ahora más predecible, segura y eficaz que nunca:</p>`,
            childList: [
              {
                content:
                  'Incisiones y fragmentación del cristalino realizadas con máxima precisión por ordenador.',
                icon: Minus,
              },
              {
                content: 'Elimina el uso de bisturís o cuchillas.',
                icon: Minus,
              },
              {
                content: 'Reduce el riesgo de complicaciones e infecciones.',
                icon: Minus,
              },
              {
                content:
                  'Mejora la posición de la lente intraocular y la corrección del astigmatismo asociado.',
                icon: Minus,
              },
              {
                content:
                  'Recuperación más rápida y mayor seguridad para el paciente.',
                icon: Minus,
              },
            ],
          },
          {
            content: '<strong>Otras opciones no quirúrgicas</strong>',
            childList: [
              { content: 'Gafas progresivas', icon: Minus },
              { content: 'Lentes de contacto progresivas', icon: Minus },
            ],
          },
        ],
        icon: ClipboardPaste,
      },
    ],
    isMaintenance: false,
  },
  // Cataratas
  {
    slug: 'operacion-cataratas',
    title: 'Operación de Cataratas',
    subtitle: 'La opacificación del cristalino del ojo que nubla la visión.',
    icon: Sun,
    heroImageSlug: 'cataract-eye-close-up-illustration',
    previewImageUrl: imageUrls.specialtyPreviewImages.cataratas,
    overview:
      'La catarata es una pérdida de transparencia del cristalino, la lente natural del ojo que se encuentra detrás de la pupila. A medida que se vuelve opaca, la luz no puede pasar claramente, lo que provoca una visión borrosa similar a mirar a través de una ventana empañada. Es una de las principales causas de pérdida de visión en personas mayores, pero es tratable mediante cirugía.',
    seo: {
      title:
        'Operación de Cataratas en Tenerife | Cirugía Láser | Instituto Oftalmológico Amigó',
      description:
        'Recupera la claridad de tu visión con la operación de cataratas en la Clínica Oftalmológica Amigó, Tenerife. Utilizamos la última tecnología láser para resultados seguros y eficaces.',
      keywords:
        'cataratas, operación cataratas, cirugía cataratas, tenerife, oftalmólogo tenerife, cirugia ocular',
      canonical: 'https://ioamigo.com/especialidades/operacion-cataratas',
      ogTitle:
        'Operación de Cataratas en Tenerife | Cirugía Láser | Instituto Oftalmológico Amigó',
      ogDescription:
        'Recupera la claridad de tu visión con la operación de cataratas en la Clínica Oftalmológica Amigó, Tenerife. Utilizamos la última tecnología láser para resultados seguros y eficaces.',
      ogImage: imageUrls.specialtyOgImages.cataratas,
      ogUrl: 'https://ioamigo.com/especialidades/operacion-cataratas',
      ogType: 'article',
      ogVideo: 'https://www.youtube.com/watch?v=rQIzIzL8o_M',
      ogVideoType: 'video/mp4',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-cataratas/#webpage',
            url: 'https://ioamigo.com/especialidades/operacion-cataratas',
            name: 'Operación de Cataratas en Tenerife | Cirugía Láser | Instituto Oftalmológico Amigó',
            description:
              'Recupera la claridad de tu visión con la operación de cataratas en la Clínica Oftalmológica Amigó, Tenerife. Utilizamos la última tecnología láser para resultados seguros y eficaces.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.cataratas,
            image: imageUrls.specialtyOgImages.cataratas,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-10-05T12:00:00+00:00',
            video: {
              '@type': 'VideoObject',
              name: '¿Qué son las cataratas y cómo se tratan? | Cirugía de Cataratas',
              description:
                'Descubre qué son las cataratas, sus síntomas y cómo es la cirugía para recuperar una visión clara. En el Instituto Oftalmológico Amigó utilizamos la última tecnología para garantizar los mejores resultados.',
              thumbnailUrl:
                'https://img.youtube.com/vi/rQIzIzL8o_M/maxresdefault.jpg',
              uploadDate: '2024-09-10T08:00:00+00:00',
              duration: 'PT1M45S', // 1 minuto y 45 segundos
              contentUrl: 'https://www.youtube.com/watch?v=rQIzIzL8o_M',
              embedUrl: 'https://www.youtube.com/embed/rQIzIzL8o_M',
              publisher: {
                '@type': 'Organization',
                name: 'Instituto Oftalmológico Amigó',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://ioamigo.com/logo.jpg',
                  width: 512,
                  height: 512,
                },
              },
            },
          },
          {
            '@type': 'MedicalProcedure',
            '@id':
              'https://ioamigo.com/especialidades/operacion-cataratas/#medicalprocedure',
            name: 'Operación de Cataratas',
            description:
              'Cirugía para extraer el cristalino opaco del ojo y reemplazarlo por una lente intraocular artificial para restaurar la visión.',
            procedureType: 'SurgicalProcedure',
            medicalSpecialty: 'Ophthalmology',
            indication: {
              '@type': 'MedicalCondition',
              name: 'Cataratas',
            },
            bodyLocation: 'Ojo',
            preparation:
              'Examen oftalmológico completo para determinar el tipo de lente intraocular y la técnica quirúrgica más adecuada.',
            followup:
              'Revisiones postoperatorias para asegurar una correcta recuperación.',
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/operacion-cataratas/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/operacion-cataratas/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué son las cataratas y por qué se producen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Las cataratas son la pérdida de transparencia del cristalino, la lente natural del ojo. La causa más común es el envejecimiento, aunque también pueden ser congénitas, traumáticas, metabólicas (por diabetes) o por el uso de medicamentos como los corticoides.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son los síntomas más comunes de las cataratas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los síntomas incluyen visión borrosa o nublada, deslumbramiento con la luz, percepción alterada de los colores (más apagados o amarillentos) y, en ocasiones, una miopía secundaria que mejora temporalmente la visión de cerca.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo es la cirugía de cataratas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La cirugía de cataratas es un procedimiento rápido, indoloro y seguro. Se utiliza la técnica de facoemulsificación, que puede ser asistida con láser de femtosegundo, para aspirar el contenido opaco del cristalino y reemplazarlo por una lente intraocular personalizada.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué tipos de lentes intraoculares existen?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Existen lentes monofocales, que corrigen la visión lejana (requiriendo gafas para cerca), y lentes multifocales o de rango extendido, que permiten enfocar a varias distancias (cerca, intermedia y lejos), reduciendo o eliminando la necesidad de gafas.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'video',
        videoId: videoIds.cataratas,
        title:
          '¿Qué son las cataratas y cómo se tratan? | Instituto Oftalmológico Amigó',
      },
      {
        type: 'section',
        title: '¿Qué son las cataratas?',
        id: 'que-son-las-cataratas',
        content:
          '<p>Las cataratas son una de las principales causas de pérdida visual en el mundo y se producen por la pérdida de transparencia del <strong>cristalino</strong>, la lente natural del ojo.</p><br> <p>De forma natural, y debido al envejecimiento, el cristalino va perdiendo su claridad, lo que se traduce en visión borrosa y disminución de la agudeza visual. Aunque la causa más habitual es la edad, también pueden aparecer cataratas <strong>congénitas, traumáticas, metabólicas </strong> (como en la diabetes) o relacionadas con el uso prolongado de ciertos medicamentos, especialmente los <strong>corticoides</strong>.</p> ',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Síntomas',
        id: 'sintomas-de-la-catarata',
        content:
          'El desarrollo de las cataratas suele ser progresivo, por lo que sus síntomas aparecen de manera lenta y a veces pasan desapercibidos en sus fases iniciales:',
        list: [
          'Visión borrosa o nublada, especialmente en visión lejana.',
          'Deslumbramiento con la luz solar, lámparas o los faros de los coches durante la noche.',
          'Alteraciones en la percepción de los colores, que pueden verse apagados o amarillentos.',
          'En algunos casos, aparición de <strong>miopía secundaria</strong>, que puede mejorar temporalmente la visión cercana.',
        ],
        icon: Thermometer,
        finalContent:
          'Un examen rutinario realizado por el oftalmólogo es fundamental para detectar cataratas incipientes y valorar su evolución.',
      },
      {
        type: 'section',
        title: 'Tipos',
        id: 'tipos-de-cataratas',
        content:
          'Las cataratas pueden clasificarse según su <strong>origen</strong> o según la <strong>zona del cristalino</strong> afectada:',
        list: [
          {
            title: 'Según la causa:',
            content: '',
            childList: [
              {
                content:
                  '<strong>Seniles</strong>: las más frecuentes, relacionadas con la edad.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Metabólicas</strong>: vinculadas a enfermedades como la diabetes mellitus.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Congénitas</strong>: presentes desde el nacimiento o en los primeros meses de vida, asociadas a factores genéticos o infecciones maternas durante el embarazo (rubeola, toxoplasmosis).',
                icon: Minus,
              },
              {
                content:
                  '<strong>Traumáticas</strong>: producidas por golpes o lesiones oculares.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Tóxicas</strong>: asociadas al consumo prolongado de medicamentos como los corticoides.',
                icon: Minus,
              },
            ],
          },
          {
            title: 'Según la localización:',
            content: '',
            childList: [
              {
                content:
                  '<strong>Nucleares</strong>: opacidad en el centro del cristalino, afectan más la visión lejana.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Corticales</strong>: afectan la periferia del cristalino, alteran sobre todo la visión cercana.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Subcapsulares posteriores</strong>:localizadas en la parte más externa del cristalino, progresan rápidamente y causan deslumbramientos intensos.',
                icon: Minus,
              },
            ],
          },
        ],
        icon: BarChart,
        finalContent:
          'La correcta identificación del tipo y grado de catarata es clave para planificar la cirugía y anticipar posibles complicaciones.',
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-de-las-cataratas',
        content:
          'El tratamiento definitivo de las cataratas es <strong>quirúrgico</strong>. No existen medicamentos ni gafas que frenen su progresión o la eliminen.',
        list: [
          {
            title: 'Cirugía de cataratas:',
            content:
              'Actualmente, la cirugía es un procedimiento <strong>rápido, indoloro y altamente seguro</strong>. Se eliminan mediante la técnica de facoemulsificación con implante de lente intraocular. Esta técnica puede ayudarse del uso de láser femtosegundo.Consiste en aspirar el contenido opacificado del cristalino y sustituirlo por una <strong>lente intraocular (LIO)</strong> personalizada para cada paciente.',
          },
          {
            title: 'Tipos de lentes intraoculares:',
            content: '',
            childList: [
              {
                content:
                  '<strong>Monofocales</strong>: corrigen la visión lejana, pero el paciente necesitará gafas para leer o realizar tareas de cerca.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Multifocales o de rango extendido</strong>: permiten enfocar a varias distancias (cerca, intermedia y lejos), reduciendo o eliminando la necesidad de gafas.',
                icon: Minus,
              },
            ],
          },
          {
            title: `Cirugía con <a href="${specialtiesSlugs.laser_femtosegundo}" class="text-blue-600 hover:underline">láser de femtosegundo</a>`,
            content:
              'El láser de femtosegundo ha supuesto un gran avance en la cirugía de cataratas:',
            childList: [
              {
                content:
                  'Permite realizar incisiones precisas sin necesidad de bisturís.',
                icon: Minus,
              },
              {
                content: 'Fragmenta el cristalino de forma más segura.',
                icon: Minus,
              },
              {
                content: 'Aumenta la predictibilidad del resultado refractivo.',
                icon: Minus,
              },
              {
                content: 'Favorece una recuperación más rápida y estable.',
                icon: Minus,
              },
            ],
          },
        ],
        icon: ClipboardPaste,
        finalContent:
          'La elección de la técnica y el tipo de lente dependerá de un estudio personalizado de cada paciente, teniendo en cuenta sus necesidades visuales, estilo de vida y condiciones anatómicas del ojo.',
      },
    ],
    isMaintenance: false,
  },
  // Glaucoma
  {
    slug: 'tratamiento-glaucoma',
    title: 'Operación de Glaucoma',
    subtitle: 'La enfermedad silenciosa que daña el nervio óptico.',
    icon: EyeOff,
    heroImageSlug: 'glaucoma-optic-nerve-diagram',
    overview:
      'El glaucoma es un grupo de enfermedades oculares que dañan el nervio óptico, vital para la visión. Este daño suele estar causado por una presión anormalmente alta en el ojo (presión intraocular). Es una de las principales causas de ceguera en personas mayores de 60 años, y a menudo progresa sin síntomas tempranos, de ahí su apodo de "ladrón silencioso de la vista".',
    seo: {
      title:
        'Tratamiento Glaucoma en Tenerife | Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
      description:
        'Especialistas en el tratamiento del glaucoma en Tenerife. Ofrecemos diagnóstico precoz y terapias avanzadas para controlar la presión intraocular y proteger tu visión. Pide tu cita en la Clínica Oftalmológica Amigó.',
      keywords:
        'glaucoma, tratamiento glaucoma, presión intraocular, tenerife, oftalmólogo, nervio óptico',
      canonical: 'https://ioamigo.com/especialidades/tratamiento-glaucoma',
      ogTitle:
        'Tratamiento Glaucoma en Tenerife | Instituto Oftalmológico Amigó | Clínica oftalmológica en Santa Cruz de Tenerife',
      ogDescription:
        'Especialistas en el tratamiento del glaucoma en Tenerife. Ofrecemos diagnóstico precoz y terapias avanzadas para controlar la presión intraocular y proteger tu visión. Pide tu cita en la Clínica Oftalmológica Amigó.',
      ogImage: imageUrls.specialtyOgImages.glaucoma,
      ogUrl: 'https://ioamigo.com/especialidades/tratamiento-glaucoma',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-glaucoma/#webpage',
            url: 'https://ioamigo.com/especialidades/tratamiento-glaucoma',
            name: 'Tratamiento del Glaucoma en Tenerife | Instituto Oftalmológico Amigó',
            description:
              'Especialistas en el diagnóstico y tratamiento del glaucoma en Tenerife. Ofrecemos terapias avanzadas para controlar la presión intraocular y proteger tu visión.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.glaucoma,
            image: imageUrls.specialtyOgImages.glaucoma,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-09-21T00:00:00+00:00',
          },
          {
            '@type': 'MedicalProcedure',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-glaucoma/#medicalprocedure',
            name: 'Tratamiento del Glaucoma',
            description:
              'Conjunto de procedimientos médicos y quirúrgicos destinados a reducir la presión intraocular para prevenir el daño al nervio óptico y la pérdida de visión asociada al glaucoma.',
            procedureType: 'TherapeuticProcedure',
            medicalSpecialty: 'Ophthalmology',
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/tratamiento-glaucoma/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-glaucoma/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es el glaucoma?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El glaucoma es una enfermedad ocular crónica que daña el nervio óptico, generalmente debido a un aumento de la presión intraocular. Si no se trata, puede provocar una pérdida de visión irreversible.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son los síntomas del glaucoma?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El glaucoma de ángulo abierto, el más común, a menudo no presenta síntomas en sus primeras etapas. La pérdida de visión periférica es gradual. En el glaucoma de ángulo cerrado, los síntomas pueden ser repentinos e incluir dolor ocular intenso, visión borrosa y náuseas.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo se trata el glaucoma?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El tratamiento se centra en reducir la presión intraocular y puede incluir gotas para los ojos, tratamiento con láser (como la trabeculoplastia selectiva o SLT) o cirugía en casos más avanzados para mejorar el drenaje del humor acuoso.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Por qué es importante detectar el glaucoma a tiempo?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La detección temprana es crucial porque el daño al nervio óptico causado por el glaucoma es irreversible. Los exámenes oftalmológicos regulares permiten detectar la enfermedad antes de que se produzca una pérdida de visión significativa y comenzar el tratamiento para preservar la vista.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: '¿Qué es el glaucoma?',
        id: 'que-es-el-glaucoma',
        content:
          '<p>El glaucoma es una <strong>enfermedad crónica del nervio óptico</strong>, irreversible y progresiva, que puede provocar pérdida de visión y, en los casos más avanzados, ceguera. Su factor de riesgo más importante es la <strong>presión intraocular (PIO) elevada</strong>, aunque existen glaucomas con presión normal.</p><p>Se considera glaucoma cuando existe <strong>daño en el nervio óptico</strong>; en cambio, hablamos de <strong>hipertensión ocular</strong> cuando solo hay presión elevada sin afectación del nervio. La PIO depende de la producción de humor acuoso y de su drenaje.</p><p>Es la <strong>segunda causa de ceguera en el mundo occidental</strong>, y aproximadamente el <strong>50% de las personas que lo padecen</strong> no saben que lo tienen.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Tipos',
        id: 'tipos-de-glaucoma',
        content:
          'Se pueden clasificar según su origen y el ángulo de drenaje del humor acuoso:',
        list: [
          '<strong>Primario o secundario</strong> (dependiendo de si tiene causa conocida o aparece de forma espontánea).',
          '<strong>Ángulo abierto o cerrado</strong>, según la estructura del ojo que facilita el drenaje.',
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Síntomas',
        id: 'sintomas-del-glaucoma',
        content:
          '<p>En la mayoría de los casos, el glaucoma <strong>no presenta síntomas iniciales</strong> y progresa de forma silenciosa. La pérdida de visión periférica pasa desapercibida porque el cerebro compensa la imagen con la información del otro ojo.</p><p>Existen formas menos frecuentes, como el <strong>glaucoma agudo de ángulo cerrado</strong>, que sí provoca síntomas rápidos y graves:</p>',
        list: [
          'Dolor intenso en el ojo y la frente.',
          'Pérdida repentina de visión.',
          'Enrojecimiento ocular.',
          'Náuseas y vómitos.',
          'Visión de halos o arcoiris alrededor de las luces.',
        ],
        icon: Thermometer,
      },
      {
        type: 'section',
        title: 'Diagnóstico',
        id: 'diagnostico-del-glaucoma',
        content:
          'La detección precoz es clave para preservar la visión. Entre las pruebas más utilizadas se incluyen:',
        list: [
          'Medición de la <strong>presión intraocular (PIO)</strong>.',
          '<strong>Campo visual</strong>, para evaluar pérdida periférica.',
          '<strong>Tomografía de coherencia óptica (OCT)</strong>, para analizar el nervio óptico y la retina.',
        ],
        icon: Lightbulb,
      },
      {
        type: 'section',
        title: 'Factores de riesgo',
        id: 'factores-de-riesgo-del-glaucoma',
        content:
          'Algunos factores aumentan la probabilidad de desarrollar glaucoma:',
        list: [
          'Hipertensión ocular.',
          'Edad mayor de 40 años.',
          'Antecedentes familiares.',
          'Miopía o hipermetropía.',
          'Diabetes o enfermedades vasculares.',
          'Uso prolongado de esteroides.',
          'Traumatismos oculares previos.',
        ],
        icon: SquareAsterisk,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-del-glaucoma',
        content:
          'El objetivo del tratamiento es <strong>reducir la presión intraocular</strong> para frenar el daño al nervio óptico. Según la gravedad y características de cada paciente, los tratamientos se clasifican de menos a más invasivos:',
        list: [
          {
            title: 'Tratamientos médico-farmacológicos',
            content: '',
            childList: [
              {
                content: 'Colirios hipotensores',
                icon: Minus,
              },
              {
                content:
                  'Comprimidos para reducir la producción de humor acuoso',
                icon: Minus,
              },
            ],
          },
          {
            title: 'Tratamiento láser (ambulatorio)',
            content: '',
            childList: [
              {
                content:
                  '<strong>Iridotomía láser</strong>: para glaucomas de ángulo cerrado.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Trabeculoplastia</strong>: mejora el drenaje del humor acuoso en glaucomas de ángulo abierto.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Ciclofotocoagulación transescleral con láser diodo</strong>: reduce la producción de humor acuoso.',
                icon: Minus,
              },
            ],
          },
          {
            title: 'Tratamiento quirúrgico',
            content: '',
            childList: [
              {
                content:
                  '<strong>Cirugía mínimamente invasiva (MIGS)</strong>: una gama de procedimientos con incisiones muy pequeñas y uso de microdispositivos para reducir la presión intraocular (PIO) de forma segura y eficaz.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Cirugía filtrante</strong>: técnicas como la <strong>trabeculectomía</strong> o la <strong>esclerectomía profunda no perforante EPNP</strong>.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Dispositivos de drenaje o válvulas</strong>: como la <strong>válvula de Ahmed o Baerveldt</strong>, que redirigen el humor acuoso hacia un reservorio subconjuntival para reducir la presión ocular.',
                icon: Minus,
              },
            ],
          },
        ],
        icon: ClipboardPaste,
      },
      {
        type: 'section',
        title: 'Conclusión',
        id: 'conclusion-sobre-el-glaucoma',
        content:
          'El <strong>diagnóstico precoz y el tratamiento oportuno</strong> son fundamentales para frenar la progresión del glaucoma y evitar la pérdida irreversible de visión. La elección del tratamiento depende de un <b>estudio personalizado</b> de cada paciente, teniendo en cuenta su anatomía ocular, evolución de la enfermedad y expectativas visuales.',
        icon: BookOpenCheck,
      },
    ],
    isMaintenance: false,
  },
  // Retina y Mácula
  {
    slug: 'tratamiento-retina-macula',
    title: 'Retina y Mácula',
    subtitle: 'Enfermedades que afectan la parte posterior del ojo.',
    icon: Layers,
    heroImageSlug: 'retina-macula-illustration',
    overview:
      'Las patologías de la retina y la mácula pueden afectar gravemente la visión central y periférica, requiriendo diagnóstico y tratamiento especializado.',
    seo: {
      title:
        'Tratamiento de Retina y Mácula en Tenerife | Instituto Oftalmológico Amigó',
      description:
        'Tratamiento para enfermedades de la retina y mácula en Tenerife. DMAE, retinopatía diabética y más. Cuida el fondo de tu ojo con nuestros expertos.',
      keywords: 'retina, mácula, dmae, retinopatía, tenerife, oftalmólogo',
      canonical: 'https://ioamigo.com/especialidades/tratamiento-retina-macula',
      ogTitle:
        'Tratamiento de Retina y Mácula en Tenerife | Instituto Oftalmológico Amigó',
      ogDescription:
        'Tratamiento para enfermedades de la retina y mácula en Tenerife. DMAE, retinopatía diabética y más. Cuida el fondo de tu ojo con nuestros expertos.',
      ogImage: imageUrls.specialtyOgImages.retinaYMacula,
      ogUrl: 'https://ioamigo.com/especialidades/tratamiento-retina-macula',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-retina-macula/#webpage',
            url: 'https://ioamigo.com/especialidades/tratamiento-retina-macula',
            name: 'Tratamiento de Retina y Mácula en Tenerife | Instituto Oftalmológico Amigó',
            description:
              'Tratamiento para enfermedades de la retina y mácula en Tenerife. DMAE, retinopatía diabética y más. Cuida el fondo de tu ojo con nuestros expertos.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.retinaYMacula,
            image: imageUrls.specialtyOgImages.retinaYMacula,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-10-05T12:00:00+00:00',
          },
          {
            '@type': 'MedicalCondition',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-retina-macula/#medicalcondition',
            name: 'Enfermedades de la Retina y Mácula',
            description:
              'Afecciones que impactan la retina y la mácula, como la DMAE y la retinopatía diabética, que pueden comprometer seriamente la visión.',
            medicalSpecialty: 'Ophthalmology',
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-retina-macula/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es el desprendimiento de retina?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Es una urgencia oftalmológica en la que la retina se separa de la pared posterior del ojo. Sin tratamiento inmediato puede causar una pérdida visual severa y permanente.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué es la degeneración macular asociada a la edad (DMAE)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Afecta a la mácula, responsable de la visión central y de los detalles. Puede ser seca (progresiva) o húmeda (rápida y agresiva), siendo esta última una causa frecuente de pérdida visual en personas mayores.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué es la retinopatía diabética?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Es una complicación de la diabetes que daña los vasos sanguíneos de la retina. Puede producir hemorragias, edema macular o incluso desprendimiento de retina, siendo una de las principales causas de ceguera evitable en adultos.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué es un agujero macular?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Es una pequeña apertura en la mácula que provoca visión central borrosa o distorsionada. Generalmente requiere cirugía vitreorretiniana.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: '¿Qué es el retina?',
        id: 'que-es-la-retina',
        content:
          '<p>La retina es una <strong>delgada capa de tejido nervioso </strong> situada en la parte posterior del ojo. Su función es captar la luz y transformarla en impulsos nerviosos que son enviados al cerebro a través del nervio óptico, permitiendo la visión.</p><br><p>La <strong>retina</strong> es una fina membrana situada en la parte interna y posterior del ojo, compuesta por células nerviosas sensibles a la luz. Su función es transformar los estímulos luminosos en impulsos eléctricos que se envían al cerebro a través del nervio óptico, permitiendo la visión.</p><br><p>Se trata de una estructura esencial y delicada: cualquier alteración en la retina puede comprometer de forma seria y, en muchos casos, irreversible la capacidad visual.</p><br><p>En el centro de la retina se encuentra la <strong>mácula</strong>, una pequeña zona de apenas unos milímetros de diámetro pero esencial para la visión. La mácula es responsable de la <strong>visión central y de los detalles finos</strong>, lo que nos permite leer, reconocer rostros y distinguir colores con nitidez.</p>',
        icon: FileQuestion,
      },
      {
        type: 'card_grid',
        id: 'patologias-de-la-retina',
        title: 'Patologías de la retina',
        icon: BarChart,
        gridColumns: 3,
        cards: [
          {
            title: 'Desprendimiento de retina',
            description:
              '<p>Es una urgencia oftalmológica en la que la retina se separa de la pared posterior del ojo.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Es una urgencia oftalmológica en la que la retina se separa de la pared posterior del ojo. Sin tratamiento inmediato puede causar una pérdida visual severa y permanente.</p>',
            },
          },
          {
            title: 'Degeneración macular asociada a la edad (DMAE)',
            description:
              '<p>Afecta a la <strong>mácula</strong>, responsable de la visión central y de los detalles.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Afecta a la mácula, responsable de la visión central y de los detalles. Puede ser seca (progresiva) o húmeda (rápida y agresiva), siendo esta última una causa frecuente de pérdida visual en personas mayores.</p>',
            },
          },
          {
            title: 'Retinopatía diabética',
            description:
              '<p>Complicación de la <strong>diabetes</strong> que daña los vasos sanguíneos de la retina.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Complicación de la diabetes que daña los vasos sanguíneos de la retina. Puede producir hemorragias, edema macular o incluso desprendimiento de retina, siendo una de las principales causas de ceguera evitable en adultos.</p>',
            },
          },
          {
            title: 'Agujero macular',
            description:
              '<p>Pequeña apertura en la mácula que provoca visión central borrosa o distorsionada.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Pequeña apertura en la mácula que provoca visión central borrosa o distorsionada. Generalmente requiere cirugía vitreorretiniana.</p>',
            },
          },
          {
            title: 'Membrana epirretiniana',
            description:
              '<p>Es una fina capa de tejido que crece sobre la superficie de la mácula y provoca visión ondulada o borrosa.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Es una fina capa de tejido que crece sobre la superficie de la mácula y provoca visión ondulada o borrosa. Su tratamiento puede ser quirúrgico cuando afecta de manera significativa la visión.</p>',
            },
          },
          {
            title: 'Coroidopatía serosa central',
            description:
              '<p>Enfermedad que se caracteriza por una acumulación de líquido debajo de la retina central.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Enfermedad que aparece habitualmente en personas jóvenes o de mediana edad y se caracteriza por una acumulación de líquido debajo de la retina central. Suele resolverse de forma espontánea, aunque en casos persistentes puede necesitar tratamiento con láser o fármacos.</p>',
            },
          },
          {
            title: 'Miopía magna o patológica',
            description: '<p>Las personas con...</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Las personas con alta miopía tienen mayor riesgo de desarrollar degeneraciones periféricas, desgarros, desprendimientos de retina y otras complicaciones que comprometen la visión.</p>',
            },
          },
          {
            title: 'Oclusiones venosas de la retina',
            description:
              '<p>Bloqueo de las venas retinianas que provoca pérdida brusca de visión. </p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Bloqueo de las venas retinianas que provoca pérdida brusca de visión. Puede asociarse a enfermedades como la hipertensión o la diabetes y requiere diagnóstico y tratamiento urgente.</p>',
            },
          },
          {
            title: 'Desprendimiento posterior del vítreo',
            description:
              '<p>El vítreo puede separarse de la retina con la edad.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>El vítreo, gel que rellena el interior del ojo, puede separarse de la retina con la edad. Aunque en la mayoría de los casos es benigno, puede provocar tracción retiniana y desgarros que derivan en un desprendimiento de retina.</p>',
            },
          },
          {
            title: 'Retinosis pigmentaria',
            description:
              '<p>Enfermedad degenerativa y hereditaria de la retina que causa una pérdida progresiva de visión.</p>',
            detail: {
              detailButtonText: 'Más Información',
              content:
                '<p>Enfermedad degenerativa y hereditaria de la retina que causa una pérdida progresiva de visión, comenzando con la dificultad para ver en la oscuridad y reduciendo el campo visual hasta llegar, en fases avanzadas, a la visión en túnel.</p>',
            },
          },
        ],
      },
      {
        type: 'section',
        title: 'Diagnóstico y tratamiento',
        id: 'diagnostico-y-tratamiento-de-las-enfermedades-de-la-retina',
        content:
          '<p>Las patologías de la retina se diagnostican mediante pruebas como el <b>fondo de ojo</b>, la <strong>OCT (tomografía de coherencia óptica)</strong>, la angiografía fluoresceínica y otros estudios específicos.</p><br><p>Los tratamientos varían según la patología e incluyen:</p>',
        list: [
          '<strong>Inyecciones intravítreas</strong> para controlar la DMAE o el edema macular.',
          '<strong>Láser</strong> en casos de retinopatía diabética, oclusiones o desgarros.',
          '<strong>Cirugía vitreorretiniana</strong> en desprendimientos de retina, agujeros maculares o membranas epirretinianas.',
          '<strong>Seguimiento periódico</strong> en enfermedades degenerativas como la retinosis pigmentaria.',
        ],
        icon: Lightbulb,
      },
      {
        type: 'section',
        title: 'Resumen',
        id: 'resumen-sobre-las-enfermedades-de-la-retina',
        content:
          'La retina es clave para la visión y puede verse afectada por múltiples enfermedades, muchas de ellas <strong>silenciosas en sus fases iniciales.</strong> Por ello, las revisiones oftalmológicas periódicas son fundamentales para su detección precoz y para preservar la salud visual',
        icon: BookOpenCheck,
      },
    ],
    isMaintenance: false,
  },
  // Queratocono
  {
    slug: 'tratamiento-queratocono',
    title: 'Queratocono',
    subtitle: 'Deformación progresiva de la córnea.',
    icon: Droplet,
    heroImageSlug: 'queratocono-illustration',
    overview:
      'El queratocono es una enfermedad que adelgaza y deforma la córnea, provocando visión distorsionada y sensibilidad a la luz.',
    seo: {
      title:
        'Tratamiento de Queratocono en Tenerife | Crosslinking | Instituto Oftalmológico Amigó',
      description:
        'Frena el avance del queratocono con nuestros tratamientos en Tenerife, incluyendo crosslinking corneal. Consulta con nuestros especialistas en Instituto Oftalmológico Amigó.',
      keywords: 'queratocono, crosslinking, anillos intracorneales, tenerife',
      canonical: 'https://ioamigo.com/especialidades/tratamiento-queratocono',
      ogTitle:
        'Tratamiento de Queratocono en Tenerife | Crosslinking | Instituto Oftalmológico Amigó',
      ogDescription:
        'Frena el avance del queratocono con nuestros tratamientos en Tenerife, incluyendo crosslinking corneal. Consulta con nuestros especialistas en Instituto Oftalmológico Amigó.',
      ogImage: imageUrls.specialtyOgImages.queratocono,
      ogUrl: 'https://ioamigo.com/especialidades/tratamiento-queratocono',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-queratocono/#webpage',
            url: 'https://ioamigo.com/especialidades/tratamiento-queratocono',
            name: 'Tratamiento del Queratocono en Tenerife | Instituto Oftalmológico Amigó',
            description:
              'Frena el avance del queratocono con nuestros tratamientos en Tenerife, incluyendo crosslinking corneal y anillos intracorneales. Consulta con nuestros especialistas en Instituto Oftalmológico Amigó.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.queratocono,
            image: imageUrls.specialtyOgImages.queratocono,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-10-05T12:00:00+00:00',
          },
          {
            '@type': 'MedicalCondition',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-queratocono/#medicalcondition',
            name: 'Queratocono',
            description:
              'El queratocono es una enfermedad ocular que causa el adelgazamiento y la deformación progresiva de la córnea, resultando en visión distorsionada, astigmatismo irregular y sensibilidad a la luz.',
            medicalSpecialty: 'Ophthalmology',
            possibleTreatment: [
              {
                '@type': 'MedicalProcedure',
                name: 'Crosslinking Corneal',
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Implante de anillos intracorneales',
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Trasplante de córnea',
              },
            ],
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'C. de Bravo Murillo, 16',
                addressLocality: 'Santa Cruz de Tenerife',
                addressRegion: 'Santa Cruz de Tenerife',
                postalCode: '38003',
                addressCountry: 'ES',
              },
              telephone: '+34 922 535 971',
              priceRange: '€€',
              openingHours: 'Mo-Fr 09:00-20:00',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '28.468263',
                longitude: '-16.254624',
              },
              sameAs: [
                'https://www.instagram.com/oftalmologoamigo/',
                'https://www.linkedin.com/company/instituto-oftalmol%C3%B3gico-amig%C3%B3/',
              ],
            },
            mainEntityOfPage: {
              '@id':
                'https://ioamigo.com/especialidades/tratamiento-queratocono/#webpage',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-queratocono/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es el queratocono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El queratocono es una patología ocular crónica y progresiva que deforma la córnea, volviéndola más fina y cónica. Esto provoca visión borrosa y distorsionada, impidiendo que la luz se enfoque correctamente en la retina.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son las causas del queratocono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Aunque su origen exacto no está claro, el principal factor de riesgo es el frotamiento ocular frecuente y vigoroso. También influyen factores genéticos, alergias oculares y una mayor predisposición en pacientes jóvenes.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son los síntomas del queratocono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Los síntomas más comunes incluyen astigmatismo irregular, visión borrosa, cambios frecuentes de graduación, distorsión de imágenes, halos, fotofobia (sensibilidad a la luz) e irritación ocular.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo se trata el queratocono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El tratamiento depende del grado de evolución. Las opciones incluyen evitar frotarse los ojos, lentes de contacto especiales, y procedimientos quirúrgicos como el crosslinking corneal (para frenar la progresión), el implante de anillos intracorneales (para regularizar la córnea) y, en casos avanzados, el trasplante de córnea.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: '¿Qué es el queratocono?',
        id: 'que-es-el-queratocono',
        content:
          '<p>El queratocono es una <strong>patología ocular crónica y progresiva</strong> que afecta a la estructura de la córnea, la capa transparente que recubre la parte anterior del ojo. A medida que la enfermedad avanza, la córnea pierde su forma redondeada y se va adelgazando hasta adquirir una forma cónica e irregular. Esta deformación impide que la luz se enfoque correctamente en la retina, lo que provoca visión borrosa y distorsionada.</p><br><p>Se trata de una enfermedad relativamente <b>poco frecuente</b>, aunque no excepcional: se estima que afecta a 1 de cada 2.000 personas en España. Suele aparecer en la <strong>adolescencia o en adultos jóvenes</strong> y, en la mayoría de los casos, evoluciona durante varios años antes de estabilizarse. En general, cuanto antes se manifiesta, <strong>más rápida y agresiva</strong> suele ser su progresión.</p><br><p>El queratocono afecta normalmente a <b>ambos ojos</b>, aunque de forma <b>asimétrica</b>, y representa una de las enfermedades raras oculares más atendidas en clínicas especializadas de referencia.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Causas',
        id: 'causas',
        content:
          'El origen exacto del queratocono no está del todo claro, pero sí se conocen factores que favorecen su desarrollo:',
        list: [
          '<strong>Frotamiento ocular frecuente y vigoroso</strong>, el principal factor de riesgo',
          'Antecedentes familiares de queratocono (componente genético).',
          'Enfermedades alérgicas oculares (como conjuntivitis alérgica o atopia).',
          'Alteraciones del tejido conectivo.',
          'Mayor predisposición en pacientes diagnosticados en la adolescencia.',
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: 'Síntomas',
        id: 'sintomas-del-queratocono',
        content:
          '<p>El queratocono se inicia habitualmente en la pubertad y la mayoría de los pacientes son diagnosticados entre los 20 y 30 años, aunque hasta un 73% lo hace antes de los 24.</p><br><p>Los síntomas más frecuentes son:</p>',
        list: [
          '<strong>Astigmatismo irregular</strong> y visión borrosa.',
          'Cambios frecuentes en la graduación de gafas o lentillas.',
          '<strong>Distorsión de las imágenes</strong>, halos y deslumbramientos.',
          '<strong>Fotofobia</strong> (molestia ante la luz).',
          'Irritación y molestias oculares.',
          'Diferente calidad visual entre ambos ojos.',
        ],
        finalContent:
          '<p>El diagnóstico precoz es fundamental y se realiza mediante <strong>topografía o tomografía corneal</strong>, pruebas que permiten detectar irregularidades incluso en fases muy iniciales.</p>',
        icon: Thermometer,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-del-queratocono',
        content:
          '<p>El abordaje depende del <strong>grado de evolución</strong> de la enfermedad y de la edad del paciente.</p>',
        list: [
          {
            title: 'Tratamiento médico',
            childList: [
              {
                content:
                  'Evitar el <strong>frotamiento ocular</strong>, especialmente en pacientes jóvenes.',
                icon: Minus,
              },
              {
                content:
                  'Uso de <strong>colirios antihistamínicos y antiinflamatorios</strong> en caso de alergias.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Lentes de contacto especiales</strong> (rígidas permeables, esclerales o híbridas) que mejoran la visión al compensar la irregularidad corneal, aunque <strong>no detienen la progresión</strong> de la enfermedad.',
                icon: Minus,
              },
            ],
          },
          {
            title: 'Tratamiento quirúrgico',
            content:
              'Gracias a los avances actuales, hoy es posible retrasar o incluso evitar el trasplante de córnea en muchos casos:',
            childList: [
              {
                content:
                  '<strong>Crosslinking corneal:</strong> técnica que combina riboflavina y luz ultravioleta para reforzar la córnea y frenar la progresión.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Implante de anillos intracorneales:</strong> segmentos de material biocompatible que, insertados en la córnea mediante láser de femtosegundo, ayudan a regularizar su superficie.',
                icon: Minus,
              },
              {
                content:
                  '<strong>Cirugía refractiva de superficie (Trans-PRK) combinada con crosslinking:</strong> mejora la visión en casos seleccionados',
                icon: Minus,
              },
              {
                content:
                  '<strong>Trasplante de córnea:</strong> reservado para estadios avanzados o cuando otros tratamientos no son efectivos. Puede ser parcial (queratoplastia lamelar) o total (queratoplastia penetrante).',
                icon: Minus,
              },
            ],
          },
          {
            content: '',
          },
        ],
        icon: ClipboardPaste,
      },
      {
        type: 'section',
        title: 'Conclusión',
        id: 'conclusion-del-queratocono',
        content:
          '<p>El queratocono es una enfermedad ocular que, pese a ser considerada rara, tiene una gran relevancia clínica por su impacto en la calidad de vida de los pacientes jóvenes. El <strong>diagnóstico temprano y el tratamiento adecuado</strong> permiten frenar su evolución y evitar complicaciones más graves, preservando la visión durante muchos años.</p>',
        icon: BookOpenCheck,
      },
    ],
    isMaintenance: false,
  },
  // Párpados y vías lagrimales
  {
    slug: 'cirugia-parpados-vias-lagrimales',
    title: 'Párpados y vías lagrimales',
    subtitle: 'Trastornos que afectan la protección y lubricación ocular.',
    icon: CloudSun,
    heroImageSlug: 'parpados-vias-lagrimales-illustration',
    overview:
      'Las alteraciones en los párpados y las vías lagrimales pueden causar molestias, infecciones y problemas de visión si no se tratan adecuadamente.',
    seo: {
      title:
        'Cirugía de Párpados y Vías Lagrimales en Tenerife | Instituto Oftalmológico Amigó',
      description:
        'Soluciones para ptosis, blefaritis, orzuelos y problemas de vías lagrimales en Tenerife. Confía en los especialistas en oculoplastia de Instituto Oftalmológico Amigó.',
      keywords:
        'párpados caídos, ptosis, blefaritis, orzuelo, vías lagrimales, tenerife',
      canonical:
        'https://ioamigo.com/especialidades/cirugia-parpados-vias-lagrimales',
      ogTitle:
        'Cirugía de Párpados y Vías Lagrimales en Tenerife | Instituto Oftalmológico Amigó',
      ogDescription:
        'Soluciones para ptosis, blefaritis, orzuelos y problemas de vías lagrimales en Tenerife. Confía en los especialistas en oculoplastia de Instituto Oftalmológico Amigó.',
      ogImage: imageUrls.specialtyOgImages.parpadosYViasLagrimales,
      ogUrl:
        'https://ioamigo.com/especialidades/cirugia-parpados-vias-lagrimales',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/cirugia-parpados-vias-lagrimales/#webpage',
            url: 'https://ioamigo.com/especialidades/cirugia-parpados-vias-lagrimales',
            name: 'Cirugía de Párpados y Vías Lagrimales en Tenerife | Instituto Oftalmológico Amigó',
            description:
              'Soluciones para ptosis, blefaritis, orzuelos y problemas de vías lagrimales en Tenerife. Confía en los especialistas en oculoplastia de Instituto Oftalmológico Amigó.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage:
              imageUrls.specialtyOgImages.parpadosYViasLagrimales,
            image: imageUrls.specialtyOgImages.parpadosYViasLagrimales,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-10-05T12:00:00+00:00',
          },
          {
            '@type': 'MedicalCondition',
            '@id':
              'https://ioamigo.com/especialidades/cirugia-parpados-vias-lagrimales/#medicalcondition',
            name: 'Afecciones de Párpados y Vías Lagrimales',
            description:
              'Trastornos que afectan los párpados y el sistema de drenaje lagrimal, como la ptosis (párpado caído) y la blefaritis.',
            medicalSpecialty: 'Ophthalmology',
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/cirugia-parpados-vias-lagrimales/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es la ptosis palpebral (párpado caído)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La ptosis palpebral es la caída del párpado superior, que puede ser de nacimiento o adquirida. Puede afectar a uno o ambos ojos y, si es severa, puede interferir con la visión. Su tratamiento suele ser quirúrgico para elevar el párpado a su posición normal.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué es la blefaritis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La blefaritis es una inflamación crónica del borde de los párpados. Causa enrojecimiento, picor, descamación y sensación de cuerpo extraño. El tratamiento se basa en una higiene palpebral rigurosa y, en algunos casos, antibióticos o antiinflamatorios.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué es un orzuelo y un chalazión?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Un orzuelo es una infección aguda de una glándula en el borde del párpado, similar a un grano. Un chalazión es un quiste que se forma por la obstrucción de una glándula de Meibomio. Ambos pueden tratarse con calor local y, si no mejoran, con una pequeña cirugía.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Por qué lagrimea mi ojo constantemente?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El lagrimeo constante (epífora) puede deberse a un exceso de producción de lágrima o, más comúnmente, a una obstrucción en las vías lagrimales que impide su correcto drenaje. Un oftalmólogo especialista puede diagnosticar la causa y proponer el tratamiento adecuado, que puede incluir una cirugía llamada dacriocistorrinostomía.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: '¿Qué son los párpados?',
        id: 'que-son-los-parpados',
        content:
          '<p>Los párpados son estructuras móviles que recubren y protegen el ojo. Aunque su función más evidente es la <strong>protección ocular</strong>, también cumplen otras tareas fundamentales para mantener una buena salud visual.</p>',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Funciones principales de los párpados',
        id: 'funciones-de-los-parpados',
        list: [
          '<strong>Protección ocular:</strong> actúan como una barrera frente a golpes, polvo o cualquier elemento externo, cerrándose de forma refleja cuando algo se acerca demasiado al ojo.',
          '<strong>Distribución de la lágrima:</strong> con cada parpadeo, la lágrima se reparte de manera uniforme sobre la superficie ocular, manteniendo el ojo hidratado y protegido.',
          '<strong>Limpieza y regeneración:</strong> el roce del párpado ayuda a mantener el ojo libre de impurezas y estimula la regeneración de las células de la córnea.',
          '<strong>Glándulas asociadas:</strong> en el borde de los párpados se encuentran las glándulas de Meibomio, que secretan la capa lipídica de la lágrima, fundamental para evitar su evaporación prematura.',
        ],
        icon: Lightbulb,
      },
      {
        type: 'section',
        title: 'Principales patologías de los párpados',
        id: 'patologias-de-los-parpados',
        list: [
          {
            content:
              '<strong>Blefaritis:</strong> inflamación del borde palpebral.',
            icon: Minus,
          },
          {
            content:
              '<strong>Orzuelo y chalazión:</strong> infecciones o quistes en las glándulas del párpado.',
            icon: Minus,
          },
          {
            content:
              '<strong>Bolsas y exceso de piel:</strong> tratadas con <strong>blefaroplastia</strong>, cirugía que elimina el exceso de tejido en párpados superiores e inferiores.',
            icon: Minus,
          },
          {
            content:
              '<strong>Entropión y ectropión:</strong> malposiciones del párpado hacia dentro o hacia fuera.',
            icon: Minus,
          },
          {
            content:
              '<strong>Ptosis palpebral (párpado caído):</strong> desciende el párpado superior y puede interferir en la visión.',
            icon: Minus,
          },
          {
            content:
              '<strong>Retracción palpebral:</strong> los párpados permanecen más abiertos de lo normal.',
            icon: Minus,
          },
          {
            content:
              '<strong>Triquiasis y distiquiasis:</strong> crecimiento anómalo de las pestañas hacia la superficie ocular.',
            icon: Minus,
          },
          {
            content:
              '<strong>Blefaroespasmo:</strong> contracciones involuntarias del párpado.',
            icon: Minus,
          },
          {
            content:
              '<strong>Xantelasmas:</strong> depósitos grasos en los párpados.',
            icon: Minus,
          },
          {
            content:
              '<strong>Tumores palpebrales:</strong> lesiones benignas o malignas que deben diagnosticarse precozmente.',
            icon: Minus,
          },
          {
            content:
              '<strong>Parálisis facial (lagoftalmos):</strong> imposibilidad de cerrar completamente los párpados.',
            icon: Minus,
          },
        ],
        icon: BarChart,
      },
      {
        type: 'section',
        title: '¿Qué son las vías lagrimales?',
        id: 'que-son-las-vias-lagrimales',
        content:
          '<p>Las vías lagrimales se encargan de <strong>producir, distribuir y drenar la lágrima</strong> desde el ojo hasta la nariz.</p>',
        list: [
          'La <strong>glándula lagrimal</strong>, situada en el ángulo superior externo de la órbita, es la encargada de producir la lágrima.',
          'Desde allí, la lágrima se reparte sobre la superficie ocular gracias a los párpados.',
          'Para completar su recorrido, las lágrimas pasan por los <strong>puntos lagrimales</strong> (pequeños orificios en el borde interno de los párpados), llegan al <strong>saco lagrimal</strong> y finalmente al <strong>conducto nasolagrimal</strong>, que desemboca en la nariz.',
        ],
        finalContent:
          'Cuando alguna de estas estructuras se altera, pueden aparecer problemas como lagrimeo excesivo, ojo seco o infecciones.',
        icon: FileQuestion,
      },
      {
        type: 'section',
        title: 'Problemas en las vías lagrimales',
        id: 'problemas-en-las-vias-lagrimales',
        list: [
          {
            title: 'Alteraciones de la lágrima',
            childList: [
              {
                content: `<strong>Ojo seco:</strong> déficit en la cantidad o calidad de la lágrima.`,
                icon: Minus,
              },
              {
                content: `<strong>Epífora (lagrimeo excesivo):</strong> puede deberse a exceso de producción o a obstrucción del drenaje.`,
                icon: Minus,
              },
            ],
          },
          {
            title: 'Alteraciones en el aparato lagrimal',
            childList: [
              {
                content: `<strong>Glándula lagrimal:</strong> dacrioadenitis, anomalías congénitas o tumores.`,
                icon: Minus,
              },
              {
                content: `<strong>Puntos lagrimales:</strong> estenosis, obstrucciones o malformaciones.`,
                icon: Minus,
              },
              {
                content: `<strong>Saco lagrimal:</strong> dacriocistitis (infección), dacriolitos (cálculos) o tumores.`,
                icon: Minus,
              },
              {
                content: `<strong>Conducto nasolagrimal:</strong> obstrucciones, muy frecuentes en adultos y en recién nacidos.`,
                icon: Minus,
              },
            ],
          },
        ],
        icon: SquareAsterisk,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-de-las-patologias-de-los-parpados-y-vias-lagrimales',
        content:
          '<p>Los oftalmólogos especializados en oculoplastia se ocupan de las estructuras faciales perioculares: <strong>párpados, órbita y vías lagrimales.</strong> Emplean tanto <strong>tratamientos médicos</strong> como <strong>quirúrgicos</strong>, según el caso:</p>',
        list: [
          '<strong>Blefaroplastia</strong> (superior o inferior).',
          '<strong>Cirugía de entropión y ectropión</strong> con anestesia local.',
          '<strong>Corrección de ptosis palpebral y retracción palpebral.</strong>',
          '<strong>Eliminación de tumores palpebrales y xantelasmas.</strong>',
          '<strong>Tratamiento de la obstrucción lagrimal</strong> (dacriocistorrinostomía).',
          '<strong>Taponamiento lagrimal</strong> en casos de ojo seco.',
          '<strong>Luz pulsada y LipiFlow®</strong> para disfunciones de las glándulas de Meibomio.',
          '<strong>Toxina botulínica</strong> en blefaroespasmo.',
          '<strong>Láser CO₂ periocular</strong> para rejuvenecimiento y lesiones cutáneas.',
        ],
        icon: ClipboardPaste,
      },
      {
        type: 'faq',
        title: 'Preguntas Frecuentes',
        id: 'faq-parpados-vias-lagrimales',
        icon: HelpCircle,
        items: [
          {
            question: '¿Qué es la ptosis palpebral (párpado caído)?',
            answer:
              'La ptosis palpebral es la caída del párpado superior, que puede ser de nacimiento o adquirida. Puede afectar a uno o ambos ojos y, si es severa, puede interferir con la visión. Su tratamiento suele ser quirúrgico para elevar el párpado a su posición normal.',
          },
          {
            question: '¿Qué es la blefaritis?',
            answer:
              'La blefaritis es una inflamación crónica del borde de los párpados. Causa enrojecimiento, picor, descamación y sensación de cuerpo extraño. El tratamiento se basa en una higiene palpebral rigurosa y, en algunos casos, antibióticos o antiinflamatorios.',
          },
          {
            question: '¿Qué es un orzuelo y un chalazión?',
            answer:
              'Un orzuelo es una infección aguda de una glándula en el borde del párpado, similar a un grano. Un chalazión es un quiste que se forma por la obstrucción de una glándula de Meibomio. Ambos pueden tratarse con calor local y, si no mejoran, con una pequeña cirugía.',
          },
          {
            question: '¿Por qué lagrimea mi ojo constantemente?',
            answer:
              'El lagrimeo constante (epífora) puede deberse a un exceso de producción de lágrima o, más comúnmente, a una obstrucción en las vías lagrimales que impide su correcto drenaje. Un oftalmólogo especialista puede diagnosticar la causa y proponer el tratamiento adecuado, que puede incluir una cirugía llamada dacriocistorrinostomía.',
          },
        ],
      },
    ],
    isMaintenance: false,
  },
  // Superficie ocular
  {
    slug: 'tratamiento-superficie-ocular',
    title: 'Superficie ocular',
    subtitle:
      'Problemas de sequedad, irritación y enfermedades de la córnea y conjuntiva.',
    icon: Eye,
    heroImageSlug: 'superficie-ocular-illustration',
    overview:
      'La superficie ocular está formada por la córnea, la conjuntiva y la película lagrimal. Su función principal es proteger el ojo, mantenerlo hidratado y asegurar que la visión sea clara y nítida. Una superficie ocular sana permite que la luz llegue correctamente a la retina y que el ojo se mantenga cómodo y libre de irritaciones.',
    seo: {
      title:
        'Superficie Ocular y Ojo Seco en Tenerife | Instituto Oftalmológico Amigó',
      description:
        'Especialistas en diagnóstico y tratamiento de enfermedades de la superficie ocular en Tenerife: ojo seco, blefaritis, conjuntivitis y queratitis. Pide cita y mejora tu salud visual.',
      keywords:
        'superficie ocular, ojo seco, tratamiento ojo seco, blefaritis, conjuntivitis, queratitis, córnea, tenerife, oftalmólogo',
      canonical:
        'https://ioamigo.com/especialidades/tratamiento-superficie-ocular',
      ogTitle:
        'Superficie Ocular y Ojo Seco en Tenerife | Instituto Oftalmológico Amigó',
      ogDescription:
        'Especialistas en diagnóstico y tratamiento de enfermedades de la superficie ocular en Tenerife: ojo seco, blefaritis, conjuntivitis y queratitis. Pide cita y mejora tu salud visual.',
      ogImage: imageUrls.specialtyOgImages.superficieOcular,
      ogUrl: 'https://ioamigo.com/especialidades/tratamiento-superficie-ocular',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-superficie-ocular/#webpage',
            url: 'https://ioamigo.com/especialidades/tratamiento-superficie-ocular',
            name: 'Superficie Ocular y Ojo Seco en Tenerife | Instituto Oftalmológico Amigó',
            description:
              'Especialistas en diagnóstico y tratamiento de enfermedades de la superficie ocular en Tenerife: ojo seco, blefaritis, conjuntivitis y queratitis. Pide cita y mejora tu salud visual.',
            inLanguage: 'es',
            isPartOf: { '@id': 'https://ioamigo.com/#website' },
            primaryImageOfPage: imageUrls.specialtyOgImages.superficieOcular,
            image: imageUrls.specialtyOgImages.superficieOcular,
            datePublished: '2025-01-01T00:00:00+00:00',
            dateModified: '2025-10-07T10:00:00+00:00',
          },
          {
            '@type': 'MedicalCondition',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-superficie-ocular/#medicalcondition',
            name: 'Enfermedades de la Superficie Ocular',
            alternateName: 'Ojo Seco, Conjuntivitis, Blefaritis',
            description:
              'Afecciones que afectan la córnea, la conjuntiva y la película lagrimal, como el ojo seco, la conjuntivitis y la blefaritis, que pueden causar irritación, enrojecimiento y visión borrosa.',
            medicalSpecialty: 'Ophthalmology',
            possibleTreatment: [
              {
                '@type': 'MedicalTherapy',
                name: 'Lágrimas artificiales y lubricantes',
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Terapia de Luz Pulsada Intensa (IPL)',
              },
              {
                '@type': 'Drug',
                name: 'Medicación antiinflamatoria y antibiótica',
              },
              {
                '@type': 'MedicalProcedure',
                name: 'Cirugía de la superficie ocular',
              },
            ],
            provider: {
              '@type': 'MedicalBusiness',
              name: 'Instituto Oftalmológico Amigó',
              url: 'https://ioamigo.com',
            },
          },
          {
            '@type': 'FAQPage',
            '@id':
              'https://ioamigo.com/especialidades/tratamiento-superficie-ocular/#faqpage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es la superficie ocular?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La superficie ocular es el conjunto de estructuras que protegen el ojo, lo mantienen hidratado y aseguran una visión clara. Está formada por la córnea, la conjuntiva y la película lagrimal. Sus funciones principales son la protección, lubricación y garantizar una visión nítida.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué es el ojo seco y cuáles son sus síntomas?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El ojo seco es una enfermedad causada por la falta de lágrima o una lágrima de mala calidad. Los síntomas más comunes incluyen escozor, sensación de arenilla, enrojecimiento, fatiga ocular y visión borrosa que mejora temporalmente al parpadear.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Qué es la conjuntivitis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'La conjuntivitis es la inflamación de la conjuntiva, la membrana transparente que recubre el interior de los párpados y la parte blanca del ojo. Puede ser causada por virus, bacterias o alérgenos, y provoca enrojecimiento, picor, lagrimeo y secreciones (legañas).',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cómo se tratan los problemas de la superficie ocular?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'El tratamiento depende de la causa. Puede incluir desde lágrimas artificiales y lubricantes para el ojo seco, hasta medicación específica (antibióticos, antiinflamatorios) para infecciones o alergias. En casos de disfunción de las glándulas de Meibomio, se usan tratamientos como la limpieza palpebral o la luz pulsada (IPL). En situaciones más graves, pueden ser necesarias cirugías o trasplantes de córnea.',
                },
              },
            ],
          },
        ],
      },
    },
    content: [
      {
        type: 'section',
        title: 'Funciones principaless',
        id: 'funciones-principales-de-la-superficie-ocular',
        list: [
          '<strong>Protección:</strong> actúa como barrera frente a polvo, bacterias o cualquier elemento externo que pueda dañar el ojo.',
          '<strong>Hidratación y lubricación:</strong> la película lagrimal distribuye la lágrima por toda la superficie ocular, evitando sequedad e irritación.',
          '<strong>Visión nítida:</strong> una córnea transparente y bien hidratada garantiza que la luz se enfoque correctamente.',
          '<strong>Defensa inmunológica:</strong> protege frente a infecciones y ayuda a reparar pequeñas lesiones.',
        ],
        icon: Lightbulb,
      },
      {
        type: 'section',
        title: 'Inflamación ocular',
        id: 'inflamacion-ocular',
        content:
          '<p>La inflamación ocular no es una enfermedad en sí misma, sino una señal de que algo no funciona correctamente. Puede manifestarse con enrojecimiento, hinchazón, dolor o sensación de calor en el ojo. Aparece como respuesta del sistema inmunitario a infecciones, alergias o lesiones. Detectarla a tiempo es fundamental para evitar complicaciones.</p>',
        icon: Thermometer,
      },
      {
        type: 'section',
        title: 'Enfermedades más comunes que afectan la superficie ocular',
        id: 'enfermedades-de-la-superficie-ocular',
        list: [
          {
            content:
              'Ojo seco: falta de lágrima suficiente o de buena calidad, causando escozor, sensación de arenilla y visión borrosa.',
            icon: Minus,
          },
          {
            content:
              'Conjuntivitis: inflamación de la conjuntiva por virus, bacterias o alergias, que provoca enrojecimiento, lagrimeo y legañas.',
            icon: Minus,
          },
          {
            content:
              'Queratitis: inflamación de la córnea, que puede estar causada por infecciones, sequedad o irritación.',
            icon: Minus,
          },
          {
            content:
              'Blefaritis: inflamación de los párpados, generalmente por alteraciones en las glándulas de Meibomio.',
            icon: Minus,
          },
          {
            content:
              'Rosácea ocular y alergias oculares: afectan múltiples estructuras de la superficie ocular y producen enrojecimiento, picor y molestias.',
            icon: Minus,
          },
          {
            content:
              'Uveítis: inflamación de la úvea que puede comprometer la visión si no se trata a tiempo.',
            icon: Minus,
          },
          {
            content:
              'Edema corneal: acumulación de líquido en la córnea, provocando visión borrosa y sensación de cuerpo extraño.',
            icon: Minus,
          },
        ],
        icon: SquareAsterisk,
      },
      {
        type: 'section',
        title: 'Tratamientos',
        id: 'tratamientos-de-las-patologias-de-la-superficie-ocular',
        content:
          '<p>El abordaje depende de la enfermedad y de su gravedad:</p>',
        list: [
          'Lágrimas artificiales y lubricantes para mejorar la hidratación.',
          'Limpieza palpebral, luz pulsada para problemas de glándulas de los párpados.',
          'Medicación específica para infecciones, inflamaciones o alergias.',
          'Cirugía en casos avanzados de queratocono, opacidades corneales o daño grave en la córnea.',
          'Técnicas láser o trasplantes corneales cuando es necesario restaurar la visión y la estructura ocular.',
        ],
        finalContent:
          '<p>Mantener la superficie ocular sana es esencial para la comodidad y la salud visual. Revisiones periódicas con el oftalmólogo ayudan a detectar cualquier alteración a tiempo y a tratarla eficazmente.</p>',
        icon: ClipboardPaste,
      },
    ],
    isMaintenance: false,
  },
];
