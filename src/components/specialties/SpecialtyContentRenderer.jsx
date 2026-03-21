import React from 'react';
import { motion } from 'framer-motion';
import ImageBlock from './ImageBlock';
import RelatedInfoBlock from './RelatedInfoBlock';
import SectionBlock from './SectionBlock';
import LinksBlock from './LinksBlock';
import FaqBlock from './FaqBlock';
import TestimonialBlock from './TestimonialBlock';
import CardGridBlock from './CardGridBlock';
import ImageGalleryBlock from './ImageGalleryBlock';
import VideoBlock from './VideoBlock';

const componentMap = {
  section: SectionBlock,
  image: ImageBlock,
  related_info: RelatedInfoBlock,
  links_section: LinksBlock,
  faq: FaqBlock,
  testimonial: TestimonialBlock,
  card_grid: CardGridBlock,
  imageGalleryBlock: ImageGalleryBlock,
  video: VideoBlock,
};

const SpecialtyContentRenderer = ({ blocks }) => {
  return (
    <div className="space-y-12 md:space-y-16">
      {blocks.map((block, index) => {
        const Component = componentMap[block.type];
        if (!Component) {
          return (
            <div key={index}>
              Error: Bloque de tipo "{block.type}" no reconocido.
            </div>
          );
        }
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Component {...block} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default SpecialtyContentRenderer;
