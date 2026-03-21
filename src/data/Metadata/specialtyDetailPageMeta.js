export const getSpecialtyDetailPageMeta = (specialty) => {
  if (!specialty || !specialty.seo) return {};

  const { seo } = specialty;

  return {
    title: seo.title,
    description: seo.description,
    canonicalUrl: seo.canonical,
    ogImage: seo.ogImage,
    jsonLd: seo.jsonLd,
    ogType: seo.ogType || 'website', // Default to 'website' if not provided
    twitterCard: seo.twitterCard || 'summary_large_image', // Default if not provided
  };
};
