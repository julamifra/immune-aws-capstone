import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
        if (event === 'SIGNED_IN') {
          toast({
            title: '¡Sesión iniciada!',
            description: `Bienvenido de nuevo, ${session?.user?.email}.`,
          });
        } else if (event === 'SIGNED_OUT') {
          toast({
            title: 'Sesión cerrada',
            description: 'Has cerrado la sesión correctamente.',
          });
        }
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [toast]);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      setUser(data.user);
      return { user: data.user, error: null };
    } catch (error) {
      console.error('Error signing in:', error);
      toast({
        variant: 'destructive',
        title: 'Error al iniciar sesión',
        description:
          error.message || 'Comprueba tus credenciales e inténtalo de nuevo.',
      });
      return { user: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        variant: 'destructive',
        title: 'Error al cerrar sesión',
        description: error.message || 'Ha ocurrido un problema.',
      });
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    signIn,
    signOut,
    isAuthenticated: !!user,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
