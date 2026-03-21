import { generateSpecialtiesPageJsonLd } from '@/data/jsonLd/specialtiesPageJsonLd';
import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';

export const getSpecialtiesPageMeta = () => {
  const specialtiesPageJsonLd = generateSpecialtiesPageJsonLd();
  const title =
    'Nuestras Especialidades | Instituto Oftalmológico Amigó | Clínica oftalmológica en Tenerife';
  const description =
    'Descubre las especialidades oftalmológicas del Instituto Oftalmológico Amigó. Información sobre patologías oculares comunes y tratamientos avanzados para tu salud visual.';
  const keywords =
    'especialidades oftalmología, tratamientos oculares, cirugía refractiva, operación cataratas, tratamiento glaucoma, cirugía retina, láser femtosegundo, operación miopía, hipermetropía, astigmatismo, presbicia';
  const canonicalUrl = `https://ioamigo.com${routePaths.specialties}`;
  const ogImage = imageUrls.facilitiesPage.quirofano1;

  return {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    jsonLd: specialtiesPageJsonLd,
  };
};
