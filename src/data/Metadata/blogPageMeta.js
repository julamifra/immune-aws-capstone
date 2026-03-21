import { routePaths } from '@/config/routes';
import { blogPageJsonLd } from '@/data/jsonLd/blogPageJsonLd';

export const blogPageMeta = {
  title: 'Blog | Instituto Oftalmológico Amigó',
  description:
    'Artículos sobre salud visual, oftalmología y consejos de nuestros expertos en el Instituto Oftalmológico Amigó. Mantente informado sobre las últimas novedades en oftalmología.',
  keywords:
    'blog oftalmología, salud visual, consejos oftalmológicos, noticias oftalmología, artículos salud ocular, Instituto Oftalmológico Amigó',
  canonicalUrl: `https://ioamigo.com${routePaths.blog}`,
  ogImage:
    'https://vknsnmxtlpzjvopwhxyl.supabase.co/storage/v1/object/public/new-images/home_page_img.png',
  jsonLd: blogPageJsonLd,
};
