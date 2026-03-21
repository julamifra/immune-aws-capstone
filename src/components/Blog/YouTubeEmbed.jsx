import React from 'react';

const YouTubeEmbed = ({ url }) => {
  const getYouTubeId = (youtubeUrl) => {
    let videoId = '';
    const urlObj = new URL(youtubeUrl);

    if (urlObj.hostname === 'youtu.be') {
      videoId = urlObj.pathname.slice(1);
    } else if (
      urlObj.hostname === 'www.youtube.com' ||
      urlObj.hostname === 'youtube.com'
    ) {
      videoId = urlObj.searchParams.get('v');
    }

    return videoId;
  };

  const videoId = getYouTubeId(url);

  if (!videoId) {
    return <p className="text-red-500">URL de YouTube no válida.</p>;
  }

  return (
    <div className="my-8 flex justify-center">
      <div className="w-full max-w-4xl">
        <div
          className="relative overflow-hidden rounded-lg shadow-md"
          style={{ paddingBottom: '50%' }} // Proporción 1:2 (ancho:alto)
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YouTubeEmbed;
