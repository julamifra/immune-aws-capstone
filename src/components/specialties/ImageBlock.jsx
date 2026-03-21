import React from 'react';

const ImageBlock = ({ imageSlug, caption }) => {
  return (
    <figure className="my-8">
      <img
        className="w-full h-auto rounded-xl shadow-lg border border-gray-200"
        alt={caption || `Ilustración para ${imageSlug}`}
        src="https://images.unsplash.com/photo-1635448764835-325306125f0c"
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageBlock;
