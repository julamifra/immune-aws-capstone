import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { v4 as uuidv4 } from 'uuid';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getSessionId = () => {
  if (typeof window.sessionStorage === 'undefined') {
    return null; // Return null or a default value if sessionStorage is not available
  }
  let sessionId = sessionStorage.getItem('session_id');
  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem('session_id', sessionId);
  }
  return sessionId;
};

export const stripHtml = (html) => {
  if (typeof window === 'undefined') {
    return html; // Or a basic stripping for SSR
  }
  let doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};
