import React from 'react';

const ImageSeparator = ({ imageUrl }) => {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Separador decorativo"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gray-800/70"></div>
      </div>
      <div className="container-custom relative z-10 flex justify-center">
        {/* Puedes añadir contenido aquí si lo deseas, como un título o texto sobre la imagen */}
      </div>
    </section>
  );
};

export default ImageSeparator;
