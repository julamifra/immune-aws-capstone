import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';

const BlogPagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, i) => i + 1
  ).filter((pageNumber) => {
    if (
      pageNumber === 1 ||
      pageNumber === totalPages ||
      pageNumber === currentPage
    )
      return true;
    if (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
      return true;
    // Show ellipsis logic: reduce number of visible pages if many pages exist
    if (
      (pageNumber === currentPage - 2 && currentPage > 3) ||
      (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
    )
      return false;
    return false; // Default to not show if not explicitly included
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-16 flex justify-center items-center space-x-2"
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight"
        aria-label="Primera página"
      >
        <ChevronsLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight"
        aria-label="Página anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {pageNumbers.map((pageNumber, index, arr) => {
        const prevPageNumber = arr[index - 1];
        const showEllipsisBefore =
          prevPageNumber && pageNumber > prevPageNumber + 1;
        return (
          <React.Fragment key={pageNumber}>
            {showEllipsisBefore && (
              <span className="text-gray-500 px-2">...</span>
            )}
            <Button
              variant={currentPage === pageNumber ? 'default' : 'outline'}
              onClick={() => onPageChange(pageNumber)}
              className={`${
                currentPage === pageNumber
                  ? 'bg-brand-DEFAULT text-white hover:bg-brand-dark'
                  : 'border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight'
              } w-10 h-10`}
            >
              {pageNumber}
            </Button>
          </React.Fragment>
        );
      })}

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight"
        aria-label="Página siguiente"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight"
        aria-label="Última página"
      >
        <ChevronsRight className="h-5 w-5" />
      </Button>
    </motion.div>
  );
};

export default BlogPagination;
