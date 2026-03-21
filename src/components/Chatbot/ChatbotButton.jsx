import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../ui/button';
import { imageUrls } from '@/config/urls';

const ChatbotButton = ({ onClick, isOpen }) => {
  return (
    <div className="fixed bottom-16 right-6 z-[50]">
      <Button
        onClick={onClick}
        className="px-4 py-1 pr-4 flex items-center space-x-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out focus:ring-4 focus:ring-blue-300/50 animate-pulse-subtle"
        aria-label={isOpen ? 'Cerrar chat' : 'Abrir chat'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <img
              src={imageUrls.chatbot_versions[0]} // Fallback for browsers that don't support srcset
              srcSet={`${imageUrls.chatbot_versions[0]} 40w,
                       ${imageUrls.chatbot_versions[1]} 80w,
                       ${imageUrls.chatbot_versions[2]} 120w`}
              sizes="40px" // Image is always 40px wide
              alt="Robot Icon"
              className="w-10 h-10"
            />
            <span className="hidden md:inline text-lg font-semibold">
              ¿Te ayudo?
            </span>
          </>
        )}
      </Button>
    </div>
  );
};

export default ChatbotButton;
