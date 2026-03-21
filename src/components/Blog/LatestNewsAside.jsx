import React from 'react';
import { Link } from 'react-router-dom';
import useNews from '@/hooks/useNews';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Loader2, Calendar } from 'lucide-react';
import { routePaths } from '@/config/routes';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import ContactModal from '@/components/ContactModal';
import { contactInfo } from '@/data/contactInfoData';
import { logUserEvent } from '@/services/eventLogger';

const LatestNewsAside = () => {
  const { news, loading, error } = useNews(1, 6);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <Loader2 className="h-8 w-8 text-brand-DEFAULT animate-spin" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-sm">Error al cargar noticias.</p>;
  }

  return (
    <aside className="sticky top-24">
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-brand-dark mb-6">
          Últimas Noticias
        </h2>
        <ul className="space-y-4">
          {news.map((item) => (
            <li key={item.id}>
              <Link
                to={`${routePaths.blog}/${item.slug}`}
                className="block group"
              >
                <Card className="transition-all duration-300 ease-in-out hover:shadow-md hover:border-brand-DEFAULT/50 border-transparent border">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base font-bold text-brand-dark leading-tight group-hover:text-brand-DEFAULT">
                      {item.title}
                    </CardTitle>
                    <div className="flex items-center text-xs text-gray-500 mt-2">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-brand-DEFAULT" />
                      <span>
                        {new Date(item.date).toLocaleDateString('es-ES', {
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Card className="shadow-xl border-0 bg-gray-50/50 p-6 text-center w-full">
          <CardTitle className="text-2xl font-bold text-brand-dark mb-4">
            ¿Prefieres que te llamemos?
          </CardTitle>
          <CardDescription className="text-gray-600 mb-6">
            Si lo deseas, puedes llamarnos directamente al{' '}
            <a
              href={`tel:${contactInfo
                .find((info) => info.title === 'Llámanos')
                ?.content.replace(/\s/g, '')}`}
              className="font-semibold underline text-brand-DEFAULT hover:text-brand-dark"
            >
              {contactInfo.find((info) => info.title === 'Llámanos')?.content}
            </a>{' '}
            o, si lo prefieres, déjanos tus datos y te contactaremos nosotros.
          </CardDescription>
          <ContactModal>
            <Button
              size="lg"
              className="bg-gradient-to-r from-brand-DEFAULT to-brand-dark hover:from-brand-dark hover:to-brand-DEFAULT text-white text-lg py-3 transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => logUserEvent('blog_aside_call_us_click')}
            >
              ¡Sí, llámame!
            </Button>
          </ContactModal>
        </Card>
      </motion.div>
    </aside>
  );
};

export default LatestNewsAside;
