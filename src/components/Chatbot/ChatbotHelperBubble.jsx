import React from 'react';
import { X } from 'lucide-react';

const ChatbotHelperBubble = ({ onClose }) => {
  return (
    <div className="fixed bottom-[9.5rem] right-4 z-[60] w-64">
      <div className="relative bg-white p-4 rounded-lg shadow-xl border-2 border-blue-500">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Cerrar aviso"
        >
          <X className="w-5 h-5" />
        </button>
        <p className="text-sm text-gray-800">
          ¡Hola! 👋 ¿Necesitas ayuda? Haz clic aquí para hablar con nuestro
          asistente virtual.
        </p>
        <div className="absolute bottom-[-10px] right-4 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-blue-500"></div>
      </div>
    </div>
  );
};

export default ChatbotHelperBubble;
