import { routePaths } from '@/config/routes';
import { contactPageJsonLd } from '@/data/jsonLd/contactPageJsonLd';

export const contactPageMeta = {
  title: 'Contacto | Instituto Oftalmológico Amigó',
  description:
    'Ponte en contacto con el Instituto Oftalmológico Amigó en Tenerife. Solicita información, pide cita o consulta tus dudas. Teléfono: 922 535 971.',
  keywords:
    'contacto oftalmólogo Tenerife, pedir cita oftalmólogo, teléfono Instituto Oftalmológico Amigó, dirección clínica oftalmológica Santa Cruz',
  canonicalUrl: `https://ioamigo.com${routePaths.contact}`,
  ogImage:
    'https://vknsnmxtlpzjvopwhxyl.supabase.co/storage/v1/object/public/new-images/home_page_img.png',
  jsonLd: contactPageJsonLd,
};
