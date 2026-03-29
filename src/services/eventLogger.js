import { awsClient } from '@/lib/awsClient';
import { getSessionId } from '@/lib/utils';

/**
 * Registra un evento de interaccion del usuario.
 * @param {string} eventType - El tipo de evento.
 * @param {object} eventData - Detalles adicionales del evento.
 */
export const logUserEvent = async (eventType, eventData = {}) => {
  try {
    const sessionId = getSessionId();

    await awsClient.postUserEvent({
      sessionId,
      eventType,
      eventData,
      path: window.location.pathname + window.location.search,
      referrer: document.referrer || null,
      userAgent: navigator.userAgent,
    });
  } catch (error) {
    console.error(`Error al registrar el evento '${eventType}':`, error);
  }
};
