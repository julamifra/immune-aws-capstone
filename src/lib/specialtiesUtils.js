export const findSpecialtyBySlug = async (slug) => {
  const { specialtiesData } = await import('../data/specialtiesData');
  return specialtiesData.find((specialty) => specialty.slug === slug);
};
