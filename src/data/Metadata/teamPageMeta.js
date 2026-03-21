import { routePaths } from '@/config/routes';
import { imageUrls } from '@/config/urls';
import { teamMembers } from '@/data/teamMembersData';

export const getTeamPageMeta = () => {
  const title =
    'Nuestro Equipo Médico | Instituto Oftalmológico Amigó | Clínica oftalmológica en Tenerife';
  const description =
    'Conoce al equipo de oftalmólogos y profesionales del Instituto Oftalmológico Amigó en Santa Cruz de Tenerife. Expertos en salud visual a tu servicio.';
  const canonicalUrl = `https://ioamigo.com${routePaths.team}`;
  const ogImage = imageUrls.teamPage.header;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: teamMembers.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.title,
        description: member.specialty,
        image: member.urlImg,
        url: canonicalUrl,
        worksFor: {
          '@type': 'Organization',
          name: 'Instituto Oftalmológico Amigó',
        },
      },
    })),
  };

  return {
    title,
    description,
    canonicalUrl,
    ogImage,
    jsonLd,
  };
};
