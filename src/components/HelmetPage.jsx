import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetPage = ({
  title,
  description,
  canonicalUrl,
  ogImage,
  jsonLd,
  keywords,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  publishedTime,
  modifiedTime,
  author,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1',
  themeColor = '#FFFFFF',
  geoRegion,
  geoPlacename,
}) => {
  const siteName = 'Instituto Oftalmológico Amigó';
  const locale = 'es_ES';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Theme Color for Mobile Browsers */}
      <meta name="theme-color" content={themeColor} />

      {/* Geographic Tags */}
      {geoRegion && <meta name="geo.region" content={geoRegion} />}
      {geoPlacename && <meta name="geo.placename" content={geoPlacename} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Article-specific Open Graph Tags */}
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {ogType === 'article' && author && (
        <meta property="article:author" content={author} />
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@oftalmologoamigo" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default HelmetPage;
