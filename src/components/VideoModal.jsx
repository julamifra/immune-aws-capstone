import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ReactGA from 'react-ga4';

const VideoModal = ({ children, videoId = 'l-nC_n2p1hI', videoUrl }) => {
  const handleOpenChange = (isOpen) => {
    if (isOpen) {
      ReactGA.event({
        action: 'video_play',
        category: 'engagement',
        label: videoUrl ? `Video URL: ${videoUrl}` : `Video ID: ${videoId}`,
      });
    }
  };

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-black border-0 p-0 max-w-4xl w-full">
        <DialogTitle className="sr-only">Reproductor de video</DialogTitle>
        <div className="aspect-video">
          {videoUrl ? (
            <video
              className="w-full h-full"
              controls
              autoPlay
              style={{ backgroundColor: 'black' }}
            >
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta la reproducción de videos.
            </video>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
