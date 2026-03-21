import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, PlusCircle, MinusCircle, ChevronDown } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { categories } from '@/data/categoriesData';

const BlogForm = ({
  currentPost,
  onPostAdded,
  onPostUpdated,
  formMode,
  closeNewsFormDialog,
}) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState(''); // Nuevo estado para el slug
  const [excerpt, setExcerpt] = useState('');
  const [sections, setSections] = useState([
    { title: '', content: '', youtube_url: '' },
  ]);
  const [category, setCategory] = useState([]);
  const [author, setAuthor] = useState('Equipo IO Amigo');
  const [mainImageFile, setMainImageFile] = useState(null);
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [currentPostId, setCurrentPostId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (formMode === 'edit' && currentPost) {
      setTitle(currentPost.title || '');
      setSlug(currentPost.slug || ''); // Cargar slug existente
      setExcerpt(currentPost.excerpt || '');
      setSections(currentPost.content_json);

      setCategory(
        currentPost.category
          ? currentPost.category.split(',').map((cat) => cat.trim())
          : []
      );
      setAuthor(currentPost.author || 'Equipo IO Amigo');
      setMainImageUrl(currentPost.image_slug || '');
      setMainImageFile(null);
      setCurrentPostId(currentPost.id);
    } else {
      setTitle('');
      setSlug(''); // Resetear slug
      setExcerpt('');
      setSections([{ title: '', content: '', youtube_url: '' }]); // Resetear secciones
      setCategory([]);
      setAuthor('Equipo IO Amigo');
      setMainImageFile(null);
      setMainImageUrl('');
      setCurrentPostId(null);
    }
  }, [formMode, currentPost]);

  const handleCategoryChange = (cat) => {
    setCategory((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handleAddSection = () => {
    setSections([...sections, { title: '', content: '', youtube_url: '' }]);
  };

  const handleRemoveSection = (index) => {
    const newSections = sections.filter((_, i) => i !== index);
    setSections(
      newSections.length > 0 ? newSections : [{ title: '', content: '' }]
    );
  };

  const handleSectionChange = (index, field, value) => {
    const newSections = [...sections];
    newSections[index][field] = value;
    setSections(newSections);
  };

  const handleImageUpload = async (file) => {
    if (!file) return currentPost?.image_slug || 'default-news-image';

    const fileName = `${Date.now()}_${file.name.replace(/\s+/g, '_')}`;
    const filePath = `blog-images/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('new-images')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Error uploading image:', uploadError);
      toast({
        variant: 'destructive',
        title: 'Error al subir imagen',
        description: uploadError.message,
      });
      throw uploadError;
    }

    const { data } = supabase.storage.from('new-images').getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validar que al menos una sección tenga contenido o título
    const hasContent = sections.some(
      (section) => section.title.trim() !== '' || section.content.trim() !== ''
    );

    if (!title || !excerpt || !hasContent) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description:
          'Título, extracto y al menos una sección de contenido son obligatorios.',
      });
      return;
    }
    setIsSubmitting(true);

    let uploadedImageUrl = mainImageUrl;
    if (mainImageFile) {
      try {
        uploadedImageUrl = await handleImageUpload(mainImageFile);
      } catch (uploadError) {
        setIsSubmitting(false);
        return;
      }
    }

    const postData = {
      title,
      excerpt,
      content_json: sections, // Add the new JSON field
      category: category.join(', '),
      author,
      date:
        formMode === 'add'
          ? new Date().toISOString()
          : currentPost
            ? currentPost.date
            : new Date().toISOString(),
      slug, // Usar el slug del estado
      image_slug: uploadedImageUrl || 'default-news-image',
    };

    try {
      if (formMode === 'add') {
        if (onPostAdded) await onPostAdded(postData);
        toast({
          title: '¡Noticia publicada!',
          description: 'La nueva entrada del blog se ha añadido correctamente.',
        });
      } else if (formMode === 'edit' && currentPostId) {
        if (onPostUpdated) await onPostUpdated(currentPostId, postData);
        toast({
          title: '¡Noticia actualizada!',
          description: 'La entrada del blog se ha actualizado correctamente.',
        });
      }
      closeNewsFormDialog();
    } catch (err) {
      toast({
        variant: 'destructive',
        title: `Error al ${formMode === 'add' ? 'publicar' : 'actualizar'}`,
        description: `No se pudo guardar la noticia. ${err.message || 'Inténtalo de nuevo.'}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="post-title">Título</Label>
        <Input
          id="post-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la noticia"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Label htmlFor="post-slug">Slug</Label>
        <Input
          id="post-slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="slug-de-la-noticia"
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Label htmlFor="post-excerpt">Extracto</Label>
        <Textarea
          id="post-excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Un breve resumen de la noticia..."
          disabled={isSubmitting}
        />
      </div>
      <div>
        <Label>Contenido Completo</Label>
        {sections.map((section, index) => (
          <div key={index} className="border p-4 rounded-md mb-4">
            <div className="flex justify-between items-center mb-2">
              <Label htmlFor={`section-title-${index}`}>
                Título de la Sección {index + 1}
              </Label>
              {sections.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => handleRemoveSection(index)}
                  disabled={isSubmitting}
                >
                  <MinusCircle className="h-4 w-4 mr-2" /> Eliminar Sección
                </Button>
              )}
            </div>
            <Input
              id={`section-title-${index}`}
              value={section.title}
              onChange={(e) =>
                handleSectionChange(index, 'title', e.target.value)
              }
              placeholder="Título de la sección"
              className="mb-2"
              disabled={isSubmitting}
            />
            <Label htmlFor={`section-content-${index}`}>
              Contenido de la Sección {index + 1}
            </Label>
            <Textarea
              id={`section-content-${index}`}
              value={section.content}
              onChange={(e) =>
                handleSectionChange(index, 'content', e.target.value)
              }
              placeholder="Escribe aquí el contenido de la sección. Puedes usar etiquetas HTML para formatear e insertar imágenes."
              rows={5}
              disabled={isSubmitting}
            />
            <div className="mt-2">
              <Label htmlFor={`section-youtube-${index}`}>
                Enlace de YouTube (Opcional)
              </Label>
              <Input
                id={`section-youtube-${index}`}
                value={section.youtube_url || ''}
                onChange={(e) =>
                  handleSectionChange(index, 'youtube_url', e.target.value)
                }
                placeholder="https://www.youtube.com/watch?v=..."
                className="mt-1"
                disabled={isSubmitting}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Para imágenes en el contenido: Sube la imagen a Supabase Storage
              (bucket 'new-images'), obtén la URL pública y usa:{' '}
              <code>&lt;img src="URL_PUBLICA" alt="Descripción"&gt;</code>.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Para párrafos: Usa la etiqueta{' '}
              <code>&lt;p&gt;Tu texto aquí&lt;/p&gt;</code>.
              <br /> Para texto en negrita:
              <code>&lt;strong&gt;Tu texto en negrita aquí&lt;/strong&gt;</code>
              .
            </p>
          </div>
        ))}
        <Button
          type="button"
          onClick={handleAddSection}
          disabled={isSubmitting}
          className="mt-2"
        >
          <PlusCircle className="h-4 w-4 mr-2" /> Añadir Sección
        </Button>
      </div>
      <div>
        <Label htmlFor="post-main-image">Imagen Principal de la Noticia</Label>
        <Input
          id="post-main-image"
          type="file"
          accept="image/*"
          onChange={(e) => setMainImageFile(e.target.files[0])}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-extralight file:text-brand-DEFAULT hover:file:bg-brand-DEFAULT/20"
          disabled={isSubmitting}
        />
        {mainImageUrl && !mainImageFile && (
          <p className="text-xs text-gray-500 mt-1">
            Actual:{' '}
            <a
              href={mainImageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-DEFAULT underline"
            >
              {mainImageUrl.substring(mainImageUrl.lastIndexOf('/') + 1)}
            </a>
          </p>
        )}
        {mainImageFile && (
          <p className="text-xs text-gray-500 mt-1">
            Nueva: {mainImageFile.name}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="post-category">Categoría</Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                disabled={isSubmitting}
                className="w-full justify-between"
              >
                {category.length > 0
                  ? category.join(', ')
                  : 'Selecciona una categoría'}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
              {categories.map((cat) => (
                <DropdownMenuCheckboxItem
                  key={cat}
                  checked={category.includes(cat)}
                  onCheckedChange={() => handleCategoryChange(cat)}
                >
                  {cat}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Label htmlFor="post-author">Autor</Label>
          <Input
            id="post-author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {isSubmitting
            ? formMode === 'add'
              ? 'Publicando...'
              : 'Actualizando...'
            : formMode === 'add'
              ? 'Publicar Noticia'
              : 'Actualizar Noticia'}
        </Button>
      </DialogFooter>
    </form>
  );
};

export default BlogForm;
