import React from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, LayoutGrid, List, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { categories } from '@/data/categoriesData';
import { cn } from '@/lib/utils';

const BlogFilters = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  onNewPage,
  viewMode,
  setViewMode,
}) => {
  const allCategories = ['Todos', ...categories];
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-4 rounded-lg border border-gray-200/80 bg-white shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4"
    >
      {/* Contenedor principal de filtros y búsqueda */}
      <div className="flex items-center gap-4 flex-grow">
        {/* Buscador */}
        <div className="relative flex-grow">
          <Input
            type="search"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              onNewPage(1);
            }}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        {/* Botones de modo de vista */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            onClick={() => {
              setViewMode('list');
              onNewPage(1);
            }}
            variant={viewMode === 'list' ? 'secondary' : 'outline'}
            size="icon"
            className="flex-shrink-0 border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight"
            aria-label="Vista de lista"
          >
            <List className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => {
              setViewMode('grid');
              onNewPage(1);
            }}
            variant={viewMode === 'grid' ? 'secondary' : 'outline'}
            size="icon"
            className="flex-shrink-0 border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight"
            aria-label="Vista de cuadrícula"
          >
            <LayoutGrid className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Dropdown de Categorías */}
      <div className="w-full md:w-auto md:flex-shrink-0">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-full md:min-w-[200px] justify-between border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight hover:text-brand-dark"
            >
              <span>
                {selectedCategory === 'Todos'
                  ? 'Todas las categorías'
                  : selectedCategory}
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
            {allCategories.map((category) => (
              <DropdownMenuItem
                key={category}
                onSelect={() => {
                  setSelectedCategory(category);
                  onNewPage(1);
                }}
                className={cn(
                  selectedCategory === category && 'bg-brand-extralight'
                )}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  );
};

export default BlogFilters;
