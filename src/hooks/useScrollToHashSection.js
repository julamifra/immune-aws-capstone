import { useEffect } from 'react';

/**
 * Scrolls to the section indicated by the hash in the URL when the dependencies change.
 * @param {boolean} ready - Should be true when the DOM is ready for scrolling (e.g., data loaded)
 */
export function useScrollToHashSection(ready) {
  useEffect(() => {
    if (!ready) return;
    if (window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [ready]);
}
