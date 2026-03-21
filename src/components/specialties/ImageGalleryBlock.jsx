import React from 'react';

const ImageGalleryBlock = ({ images }) => {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`grid gap-8 ${images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}
      >
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            {image.title && (
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                {image.title}
              </h3>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryBlock;
