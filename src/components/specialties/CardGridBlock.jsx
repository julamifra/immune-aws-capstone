import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const CardGridBlock = ({
  id,
  title,
  cards,
  gridColumns = 3,
  icon: IconComponent,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const handleModalOpen = (card) => {
    setModalContent({ title: card.title, content: card.detail.content });
    setModalOpen(true);
  };

  const gridLayoutClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  const renderCardContent = (card, isCardLink = false) => (
    <Card className="h-full bg-white hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out border-gray-200/80 flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-brand-dark">
          {card.title}
        </CardTitle>
        <CardDescription className="text-gray-600 pt-2">
          <span dangerouslySetInnerHTML={{ __html: card.description }}></span>
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        {card.detail && (
          <Button
            variant="outline"
            size="sm"
            className="w-full"
            onClick={(e) => {
              e.stopPropagation();
              handleModalOpen(card);
            }}
          >
            <ChevronRight className="mr-2 h-4 w-4" />
            {card.detail.detailButtonText}
          </Button>
        )}
        {card.button &&
          (isCardLink ? (
            <div
              className={cn(
                buttonVariants({ variant: 'outline', size: 'sm' }),
                'w-full'
              )}
            >
              {card.button.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          ) : (
            <Button asChild variant="outline" size="sm" className="w-full">
              <Link to={card.button.link}>
                {card.button.text}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          ))}
      </CardFooter>
    </Card>
  );

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <section id={id} className="scroll-mt-24">
        <div className="flex items-center gap-4 mb-8">
          {IconComponent && (
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-blue-600" />
            </div>
          )}
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        </div>
        <div
          className={cn(
            'grid gap-6',
            gridLayoutClasses[gridColumns] || gridLayoutClasses[3]
          )}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              {card.detail ? (
                <div
                  className="h-full cursor-pointer"
                  onClick={() => handleModalOpen(card)}
                >
                  {renderCardContent(card)}
                </div>
              ) : (
                <Link
                  to={card.button.link}
                  className="block h-full"
                  aria-label={`${card.button.text} sobre ${card.title}`}
                >
                  {renderCardContent(card, true)}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{modalContent.title}</DialogTitle>
        </DialogHeader>
        <div
          className="prose prose-lg max-w-none mt-4 text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: modalContent.content }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CardGridBlock;
