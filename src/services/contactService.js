import { supabase } from '@/lib/supabaseClient';
import ReactGA from 'react-ga4';

export const sendEmailService = async (formData, emailType) => {
  if (!['contactForm', 'onlineAppointment', 'callMe', ''].includes(emailType)) {
    throw new Error('Tipo de email inválido.');
  }

  // Invoke the Supabase Edge Function
  const { data, error } = await supabase.functions.invoke(
    '-send-contact-email-with-recaptcha',
    {
      body: JSON.stringify({ ...formData, emailType }),
    }
  );

  if (error) {
    console.error('Supabase function error:', error);
    throw new Error(
      error.message || 'Error al invocar la función de Supabase.'
    );
  }

  if (data && data.error) {
    console.error('Error from Edge Function:', data.error);
    throw new Error(data.error || 'Error devuelto por la función de envío.');
  }

  // Track successful form submission based on email type
  ReactGA.event('generate_lead', {
    category: 'conversion',
    action: emailType, // 'contactForm', 'onlineAppointment', 'callMe'
    label: `Lead from ${emailType}`,
  });

  return data;
};
