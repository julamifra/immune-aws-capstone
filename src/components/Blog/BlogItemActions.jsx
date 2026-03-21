import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Edit, Trash2 } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const BlogItemActions = ({ post, onEdit, onDelete, viewMode }) => {
  const { isAuthenticated } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { toast } = useToast();

  if (!isAuthenticated) return null;

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await onDelete(post.id);
      toast({
        title: 'Noticia eliminada',
        description: `"${post.title}" ha sido eliminada correctamente.`,
      });
      setShowConfirmDialog(false);
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error al eliminar',
        description: `No se pudo eliminar la noticia. ${error.message || 'Inténtalo de nuevo.'}`,
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="flex gap-2 mt-2 justify-end">
        <Button
          variant="outline"
          size={viewMode === 'list' ? 'icon' : 'sm'}
          onClick={() => onEdit(post)}
          aria-label={viewMode === 'list' ? 'Editar noticia' : undefined}
        >
          <Edit className={cn('h-4 w-4', viewMode !== 'list' && 'mr-1')} />
          {viewMode !== 'list' && 'Editar'}
        </Button>
        <Button
          variant="destructive"
          size={viewMode === 'list' ? 'icon' : 'sm'}
          onClick={() => setShowConfirmDialog(true)}
          disabled={isDeleting}
          aria-label={viewMode === 'list' ? 'Eliminar noticia' : undefined}
        >
          {isDeleting ? (
            <Loader2
              className={cn(
                'h-4 w-4',
                viewMode !== 'list' && 'mr-1',
                'animate-spin'
              )}
            />
          ) : (
            <Trash2 className={cn('h-4 w-4', viewMode !== 'list' && 'mr-1')} />
          )}
          {viewMode !== 'list' && 'Borrar'}
        </Button>
      </div>
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Eliminación</DialogTitle>
            <DialogDescription>
              ¿Estás seguro de que quieres eliminar la noticia "{post.title}"?
              Esta acción no se puede deshacer.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
              disabled={isDeleting}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <Loader2 className="h-4 w-4 mr-1 animate-spin" />
              ) : null}
              Eliminar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogItemActions;
