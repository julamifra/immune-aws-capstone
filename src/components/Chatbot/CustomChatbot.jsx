import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Textarea } from '../ui/textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { X, Send, MessageSquarePlus } from 'lucide-react';
import Loader from '@/components/Loader';
import ChatbotButton from './ChatbotButton';
import ChatbotHelperBubble from './ChatbotHelperBubble';
import { imageUrls } from '@/config/urls';
import ConfirmationDialog from '../ui/ConfirmationDialog';
import { useChatbot } from '@/hooks/useChatbot';

const CustomChatBot = () => {
  const {
    isOpen,
    setIsOpen,
    showHelper,
    messages,
    inputValue,
    setInputValue,
    isLoading,
    isConfirmOpen,
    setIsConfirmOpen,
    showPrivacyBanner,
    hasConversation,
    messagesEndRef,
    chatContainerRef,
    messagesContainerRef,
    inputRef,
    handleSendMessage,
    handleCloseHelper,
    toggleChat,
    handleReset,
    confirmReset,
    handleDismissPrivacyBanner,
    renderMessageContent,
  } = useChatbot();

  return (
    <>
      {showHelper && <ChatbotHelperBubble onClose={handleCloseHelper} />}
      <ChatbotButton onClick={toggleChat} isOpen={isOpen} />
      {isOpen && (
        <div
          className="fixed top-16 bottom-16 left-0 right-0 w-full h-auto md:top-auto md:bottom-8 md:right-8 md:left-auto md:w-[450px] md:h-[calc(100vh-12rem)] md:max-h-[850px] z-50"
          ref={chatContainerRef}
        >
          <Card className="flex flex-col h-full border-2 border-brand shadow-lg shadow-brand/50">
            <CardHeader className="flex flex-row justify-between items-center">
              <div className="flex items-center space-x-2">
                <img
                  src={imageUrls.chatbot_versions[0]} // Fallback for browsers that don't support srcset
                  srcSet={`${imageUrls.chatbot_versions[0]} 40w,
                           ${imageUrls.chatbot_versions[1]} 80w,
                           ${imageUrls.chatbot_versions[2]} 120w`}
                  sizes="40px" // Image is always 40px wide
                  alt="Robot Icon"
                  className="w-10 h-10"
                />
                <CardTitle>Asistente Virtual</CardTitle>
              </div>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleReset}
                  disabled={!hasConversation}
                >
                  <MessageSquarePlus className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </CardHeader>
            <CardContent
              ref={messagesContainerRef}
              className="flex-grow overflow-y-auto p-4"
            >
              <div className="flex flex-col space-y-2">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg max-w-xs ${
                      msg.role === 'assistant'
                        ? 'bg-gray-200 text-black self-start'
                        : 'bg-brand text-white self-end'
                    }`}
                  >
                    {renderMessageContent(msg.content)}
                  </div>
                ))}
                {isLoading && <Loader text="Escribiendo" />}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className="relative w-full">
                <Textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Escribe tu pregunta..."
                  disabled={isLoading}
                  className="pr-12 resize-none h-10 md:h-auto min-h-[40px] md:min-h-[80px]"
                  rows={1}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={isLoading}
                  className="absolute bottom-2 right-2 h-8 w-8"
                  size="icon"
                  variant="ghost"
                >
                  <Send className="h-5 w-5 text-brand" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Asistente Virtual puede producir información inexacta.
              </p>
              {showPrivacyBanner && (
                <div className="relative text-xs text-gray-500 mt-5 p-3 border rounded-lg bg-gray-100">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-0 right-0 h-6 w-6"
                    onClick={handleDismissPrivacyBanner}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <p>
                    Tus mensajes serán almacenados para mejorar nuestro
                    servicio. Consulta nuestra{' '}
                    <Link
                      to="/politica-privacidad"
                      className="underline hover:text-brand-light"
                    >
                      Política de Privacidad
                    </Link>
                    .
                  </p>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
      <ConfirmationDialog
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        onConfirm={confirmReset}
        title="Reiniciar Conversación"
        description="¿Estás seguro de que quieres borrar la conversación? Esta acción no se puede deshacer."
      />
    </>
  );
};

export default CustomChatBot;
