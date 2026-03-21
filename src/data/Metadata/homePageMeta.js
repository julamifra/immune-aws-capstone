import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';
import { homePageJsonLd } from '@/data/jsonLd/homePageJsonLd';

export const homePageMeta = {
  title: 'Instituto Oftalmológico Amigó | Tu Clínica Oftalmológica en Tenerife',
  description:
    'En el Instituto Oftalmológico Amigó en Tenerife, cuidamos de tu salud visual con un equipo de expertos y tecnología de vanguardia. Pide tu cita.',
  keywords:
    'oftalmólogo Tenerife, clínica oftalmológica Santa Cruz, cirugía ocular Tenerife, operación cataratas, operación miopía, tratamiento glaucoma, cirugía refractiva, láser femtosegundo, operación presbicia, oftalmología Tenerife',
  canonicalUrl: `https://ioamigo.com${routePaths.home}`,
  ogImage: imageUrls.homePageImage,
  jsonLd: homePageJsonLd,
  geoRegion: 'ES-TF',
  geoPlacename: 'Santa Cruz de Tenerife',
};
