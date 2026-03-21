import React from 'react';
import VideoModal from '../VideoModal';
import { PlayCircle } from 'lucide-react';
import { baseThumbnailUrl } from '@/config/urls';

const VideoBlock = ({ title, videoId }) => {
  if (!videoId) {
    return <div>Error: No se ha proporcionado un ID de video.</div>;
  }

  const thumbnailUrl = baseThumbnailUrl + videoId + '/maxresdefault.jpg';

  return (
    <section className="w-full max-w-3xl mx-auto my-8">
      <VideoModal videoId={videoId}>
        <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            src={thumbnailUrl}
            alt={title || 'Vista previa del video'}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
            <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform duration-300" />
          </div>
          {title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h2 className="text-lg md:text-xl font-bold text-white">
                {title}
              </h2>
            </div>
          )}
        </div>
      </VideoModal>
    </section>
  );
};

export default VideoBlock;
