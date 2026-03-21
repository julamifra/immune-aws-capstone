import { supabase } from '@/lib/supabaseClient';
import { getSessionId } from '@/lib/utils';

/**
 * Registra un evento de interacción del usuario.
 * @param {string} eventType - El tipo de evento (p. ej., 'cta_click', 'form_submit').
 * @param {object} details - Un objeto con detalles adicionales sobre el evento.
 */
export const logUserEvent = async (eventType, eventData = {}) => {
  if (import.meta.env.PROD) {
    try {
      const sessionId = getSessionId();

      const eventPayload = {
        session_id: sessionId,
        event_type: eventType,
        event_data: eventData,
        path: window.location.pathname + window.location.search,
      };

      await supabase.functions.invoke('log-event', {
        body: eventPayload,
      });
    } catch (error) {
      // No bloquear la interacción del usuario, solo registrar el error en la consola
      console.error(`Error al registrar el evento '${eventType}':`, error);
    }
  }
};
