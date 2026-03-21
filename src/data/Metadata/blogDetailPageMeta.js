import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';
import { stripHtml } from '@/lib/utils';

export const getBlogDetailPageMeta = (article, slug) => {
  if (!article) return {};

  const title = `${article.title} | Blog | Instituto Oftalmológico Amigó`;
  const description = stripHtml(article.excerpt);
  const canonicalUrl = `https://ioamigo.com${routePaths.blog}/${slug}`;
  const imageSrc =
    article.image_slug && article.image_slug.startsWith('http')
      ? article.image_slug
      : imageUrls.newsDetailFallbackImage;

  // Generate keywords from article categories
  const keywords = article.category
    ? `${article.category}, oftalmología, salud visual, Instituto Oftalmológico Amigó`
    : 'oftalmología, salud visual, Instituto Oftalmológico Amigó';

  const publishedTime = new Date(article.date).toISOString();
  const modifiedTime = article.updated_at
    ? new Date(article.updated_at).toISOString()
    : publishedTime;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    image: [imageSrc],
    datePublished: publishedTime,
    dateModified: modifiedTime,
    author: [
      {
        '@type': 'Person',
        name: article.author,
      },
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Instituto Oftalmológico Amigó',
      logo: {
        '@type': 'ImageObject',
        url: imageUrls.ioaLogo_original,
      },
    },
    description: stripHtml(article.excerpt),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };

  return {
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage: imageSrc,
    jsonLd,
    ogType: 'article',
    publishedTime,
    modifiedTime,
    author: article.author,
  };
};
