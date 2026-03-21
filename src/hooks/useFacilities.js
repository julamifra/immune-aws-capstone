import { useState, useMemo } from 'react';
import { galleryImages } from '@/data/facilitiesData';

const ITEMS_PER_PAGE = 6;

export const useFacilities = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages = useMemo(
    () =>
      activeCategory === 'all'
        ? galleryImages
        : galleryImages.filter((img) => img.category === activeCategory),
    [activeCategory]
  );

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);

  const paginatedImages = useMemo(
    () =>
      filteredImages.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      ),
    [filteredImages, currentPage]
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return {
    activeCategory,
    currentPage,
    totalPages,
    paginatedImages,
    filteredImages,
    handleCategoryChange,
    setCurrentPage,
  };
};
