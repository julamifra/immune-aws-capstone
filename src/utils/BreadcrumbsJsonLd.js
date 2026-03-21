/**
 * Generates BreadcrumbList JSON-LD structured data
 * @param {Array} breadcrumbs - Array of breadcrumb objects with name and url
 * @returns {Object} BreadcrumbList schema
 *
 * Example:
 * const breadcrumbs = [
 *   { name: 'Inicio', url: 'https://ioamigo.com/' },
 *   { name: 'Especialidades', url: 'https://ioamigo.com/especialidades' },
 *   { name: 'Operación de Miopía', url: 'https://ioamigo.com/especialidades/operacion-miopia' }
 * ];
 * const jsonLd = generateBreadcrumbsJsonLd(breadcrumbs);
 */
export const generateBreadcrumbsJsonLd = (breadcrumbs) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};
