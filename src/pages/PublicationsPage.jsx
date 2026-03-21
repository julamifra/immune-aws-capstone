import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Download, Link as LinkIcon, Calendar } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { allPublications } from '@/data/publicationsData';
import HelmetPage from '@/components/HelmetPage';
import { publicationsPageMeta } from '@/data/Metadata/publicationsPageMeta';

const allKeywords = [
  ...new Set(allPublications.flatMap((p) => p.keywords)),
].sort();
const allYears = [...new Set(allPublications.map((p) => p.year))].sort(
  (a, b) => b - a
);

const PublicationsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKeywords, setSelectedKeywords] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const toggleKeyword = (keyword) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword)
        ? prev.filter((k) => k !== keyword)
        : [...prev, keyword]
    );
  };

  const toggleYear = (year) => {
    setSelectedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const filteredPublications = allPublications.filter((pub) => {
    const matchesSearchTerm =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesKeywords =
      selectedKeywords.length === 0 ||
      selectedKeywords.every((k) => pub.keywords.includes(k));
    const matchesYears =
      selectedYears.length === 0 || selectedYears.includes(pub.year);

    return matchesSearchTerm && matchesKeywords && matchesYears;
  });

  const groupedPublications = filteredPublications.reduce((acc, pub) => {
    (acc[pub.year] = acc[pub.year] || []).push(pub);
    return acc;
  }, {});

  const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

  const areFiltersActive =
    searchTerm !== '' ||
    selectedKeywords.length > 0 ||
    selectedYears.length > 0;

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedKeywords([]);
    setSelectedYears([]);
  };

  return (
    <div className="section-padding bg-white min-h-screen">
      <HelmetPage {...publicationsPageMeta} />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Publicaciones</span> Científicas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore las contribuciones de nuestro equipo al avance del
            conocimiento oftalmológico. Aquí encontrará una selección de
            nuestros trabajos de investigación.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 p-6 bg-gray-50 rounded-xl shadow-md"
        >
          <div className="grid md:grid-cols-4 gap-6 items-end">
            <div className="md:col-span-2 max-w-lg">
              <label
                htmlFor="search-pubs"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Buscar por título, autor o revista
              </label>
              <Input
                id="search-pubs"
                type="search"
                placeholder="Ej: DMAE, Dr. González, Ophthalmology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:col-span-2 flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={clearFilters}
                disabled={!areFiltersActive}
                className={`w-full md:w-auto ${areFiltersActive ? 'border-2 border-brand-dark' : 'border border-brand-DEFAULT'} text-brand-DEFAULT hover:bg-brand-extralight`}
              >
                Limpiar filtros
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight whitespace-nowrap"
                  >
                    <Filter className="w-4 h-4 mr-2" /> Palabras Clave{' '}
                    {selectedKeywords.length > 0 &&
                      `(${selectedKeywords.length})`}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 max-h-80 overflow-y-auto">
                  <DropdownMenuLabel>
                    Filtrar por Palabras Clave
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allKeywords.map((keyword) => (
                    <DropdownMenuCheckboxItem
                      key={keyword}
                      checked={selectedKeywords.includes(keyword)}
                      onCheckedChange={() => toggleKeyword(keyword)}
                    >
                      {keyword}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-extralight whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 mr-2" /> Año{' '}
                    {selectedYears.length > 0 && `(${selectedYears.length})`}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 max-h-80 overflow-y-auto">
                  <DropdownMenuLabel>Filtrar por Año</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {allYears.map((year) => (
                    <DropdownMenuCheckboxItem
                      key={year}
                      checked={selectedYears.includes(year)}
                      onCheckedChange={() => toggleYear(year)}
                    >
                      {year}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </motion.div>

        {/* Publications List */}
        {sortedYears.length > 0 ? (
          sortedYears.map((year) => (
            <div key={year} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-brand-DEFAULT pb-2"
              >
                {year}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {groupedPublications[year].map((pub, index) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
                      <CardHeader className="p-6 bg-brand-extralight/30">
                        <CardTitle className="text-xl font-semibold text-brand-dark leading-tight">
                          {pub.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-6">
                        <p className="text-sm text-gray-600 mb-1">
                          <strong>Autores:</strong> {pub.authors}
                        </p>
                        <p className="text-sm text-gray-600 mb-3">
                          <strong>Revista:</strong>{' '}
                          <em className="text-brand-DEFAULT">{pub.journal}</em>{' '}
                          ({pub.year})
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {pub.keywords.map((keyword) => (
                            <span
                              key={keyword}
                              className="px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 bg-gray-50 flex flex-wrap gap-4 justify-between items-center">
                        {pub.doi && (
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-dark hover:text-white"
                          >
                            <a
                              href={`https://doi.org/${pub.doi}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <LinkIcon className="w-4 h-4 mr-2" /> Ver en DOI
                            </a>
                          </Button>
                        )}

                        {pub.pdfLink && pub.pdfLink !== '#' && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="border-brand-DEFAULT text-brand-DEFAULT hover:bg-brand-dark hover:text-white"
                          >
                            <a
                              href={pub.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Download className="w-4 h-4 mr-2" /> Descargar
                              PDF
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-xl text-gray-600 py-12"
          >
            No se encontraron publicaciones con los filtros seleccionados.
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default PublicationsPage;
