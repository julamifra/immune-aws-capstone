import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { LogIn, LogOut, PlusCircle, UserCog, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import BlogForm from './BlogForm';

const AdminPanel = ({
  openNewsFormDialog,
  closeNewsFormDialog,
  formMode,
  isFormOpen,
  onPostAdded,
  onPostUpdated,
  currentPost,
}) => {
  const { signIn, signOut, isAuthenticated, loading: authLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    const { error: signInError } = await signIn(email, password);
    if (signInError) {
      setError(signInError.message || 'Error al iniciar sesión.');
      setTimeout(() => setError(''), 3000);
    } else {
      setEmail('');
      setPassword('');
    }
  };

  const handleLogout = async () => {
    await signOut();
  };

  if (authLoading) {
    return <Loader2 className="h-6 w-6 text-gray-500 animate-spin" />;
  }

  if (!isAuthenticated) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Admin Login">
            <UserCog className="h-6 w-6 text-gray-500 hover:text-brand-DEFAULT transition-colors" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <LogIn className="w-5 h-5 text-brand-DEFAULT" />
              Acceso de Administrador
            </DialogTitle>
            <DialogDescription>
              Introduce tus credenciales de Supabase para gestionar las
              noticias.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4 pt-4">
            <div>
              <Label htmlFor="email-modal">Email</Label>
              <Input
                id="email-modal"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <Label htmlFor="password-modal">Contraseña</Label>
              <Input
                id="password-modal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
            <DialogFooter className="pt-2">
              <Button type="submit" className="w-full" disabled={authLoading}>
                {authLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  'Iniciar Sesión'
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center gap-2"
    >
      <Dialog
        open={isFormOpen}
        onOpenChange={(isOpen) =>
          isOpen
            ? openNewsFormDialog('add', currentPost)
            : closeNewsFormDialog()
        }
      >
        <DialogTrigger asChild>
          <Button size="sm" onClick={() => openNewsFormDialog('add')}>
            <PlusCircle className="mr-2 h-4 w-4" /> Añadir Noticia
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[750px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {formMode === 'add' ? 'Crear Nueva Noticia' : 'Editar Noticia'}
            </DialogTitle>
            <DialogDescription>
              {formMode === 'add'
                ? 'Rellena los campos para publicar una nueva entrada.'
                : 'Modifica los campos para actualizar la entrada.'}
            </DialogDescription>
          </DialogHeader>
          <BlogForm
            formMode={formMode}
            currentPost={currentPost}
            onPostAdded={onPostAdded}
            onPostUpdated={onPostUpdated}
            closeNewsFormDialog={closeNewsFormDialog}
          />
        </DialogContent>
      </Dialog>

      <Button
        variant="outline"
        size="sm"
        onClick={handleLogout}
        disabled={authLoading}
        className="text-black"
      >
        {authLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <LogOut className="mr-2 h-4 w-4 text-black" />
        )}
        Salir
      </Button>
    </motion.div>
  );
};

export default AdminPanel;
