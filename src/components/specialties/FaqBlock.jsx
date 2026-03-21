import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FaqBlock = ({ title, items, icon: Icon = HelpCircle, id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items || items.length === 0) {
    return null;
  }

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="flex-grow text-xl md:text-2xl font-bold text-gray-800">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        {items.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
          >
            <button
              className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="font-semibold text-lg text-gray-800">
                {faq.question}
              </h3>
              <motion.div
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    className="mt-2 text-gray-600 pr-8"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqBlock;
