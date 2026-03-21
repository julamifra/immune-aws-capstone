import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialBlock = ({ quote, author, authorInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="my-12"
    >
      <div className="bg-teal-50/70 border-l-4 border-teal-500 rounded-r-lg p-8 relative overflow-hidden">
        <Quote className="absolute top-4 right-4 w-16 h-16 text-teal-200/80 transform -translate-y-1/4" />
        <blockquote
          className="text-xl italic text-gray-700 font-serif relative z-10"
          dangerouslySetInnerHTML={{ __html: quote }}
        />
        <footer className="mt-6 text-right">
          <p className="font-bold text-gray-800">{author}</p>
          {authorInfo && <p className="text-sm text-gray-600">{authorInfo}</p>}
        </footer>
      </div>
    </motion.div>
  );
};

export default TestimonialBlock;
