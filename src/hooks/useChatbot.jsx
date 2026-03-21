import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReactGA from 'react-ga4';
import { logUserEvent } from '@/services/eventLogger';
import { invokeChatRag } from '@/services/chatbotService';
import { Link } from 'react-router-dom';

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHelper, setShowHelper] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [showPrivacyBanner, setShowPrivacyBanner] = useState(false);

  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);

  const hasConversation = messages.some((msg) => msg.role === 'user');

  const handleSendMessage = async () => {
    const userPrompt = inputValue.trim();
    if (userPrompt === '') return;

    const conversationTurnId = uuidv4();

    logUserEvent('chatbot_prompt', {
      prompt: userPrompt,
      conversation_turn_id: conversationTurnId,
    });

    const newMessages = [...messages, { role: 'user', content: userPrompt }];

    setMessages(newMessages);
    setInputValue('');
    if (inputRef.current) {
      inputRef.current.blur();
    }
    setIsLoading(true);

    try {
      const data = await invokeChatRag(newMessages);
      const botMessage = { role: 'assistant', content: data.answer };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      logUserEvent('chatbot_response', {
        response: data.answer,
        conversation_turn_id: conversationTurnId,
      });
    } catch (error) {
      let messageContent;
      if (error.context && error.context.status === 429) {
        messageContent =
          'Has alcanzado el límite de peticiones. Por favor, inténtalo de nuevo en unos momentos.';
      } else {
        messageContent =
          'Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo.';
      }
      const errorMessage = {
        role: 'assistant',
        content: messageContent,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseHelper = () => {
    setShowHelper(false);
    localStorage.setItem('hasSeenChatbotHelper', 'true');
  };

  const toggleChat = () => {
    if (showHelper) {
      handleCloseHelper();
    }
    if (!isOpen) {
      ReactGA.event('chat_interaction', {
        category: 'engagement',
        label: 'Chat Opened',
      });
    }
    setIsOpen(!isOpen);
  };

  const handleReset = () => {
    setIsConfirmOpen(true);
  };

  const confirmReset = () => {
    setMessages([
      {
        role: 'assistant',
        content: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
      },
    ]);
    setIsConfirmOpen(false);
  };

  const handleDismissPrivacyBanner = () => {
    setShowPrivacyBanner(false);
    localStorage.setItem('hasSeenChatPrivacyBanner', 'true');
  };

  const renderMessageContent = (content) => {
    try {
      if (typeof content === 'string') {
        return content;
      }

      if (Array.isArray(content)) {
        return content.map((part, index) => {
          if (part.type === 'text') {
            return <span key={index}>{part.value}</span>;
          }
          if (part.type === 'link') {
            if (part.url.startsWith('/')) {
              return (
                <Link
                  key={index}
                  to={part.url}
                  className="text-blue-600 hover:underline"
                >
                  {part.text}
                </Link>
              );
            }
            return (
              <a
                key={index}
                href={part.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {part.text}
              </a>
            );
          }
          return null;
        });
      }

      return null;
    } catch (error) {
      console.error('Error rendering message content:', error);
      logUserEvent('chatbot_render_error', { error: error.message });
      return (
        <div>
          Ha ocurrido un error al procesar la respuesta. Por favor, genera una
          nueva conversación.
        </div>
      );
    }
  };

  useEffect(() => {
    const hasSeen = localStorage.getItem('hasSeenChatbotHelper');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setShowHelper(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showHelper) {
      const closeTimer = setTimeout(() => {
        handleCloseHelper();
      }, 20000);
      return () => clearTimeout(closeTimer);
    }
  }, [showHelper]);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalStyle;
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const hasSeen = localStorage.getItem('hasSeenChatPrivacyBanner');
      if (!hasSeen) {
        setShowPrivacyBanner(true);
      }
    }
  }, [isOpen]);

  return {
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
  };
};
