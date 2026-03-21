const COOKIE_PREFERENCES_KEY = 'ioamigo_cookie_preferences';

export const saveConsentPreferences = (preferences) => {
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
};

export const getConsentPreferences = () => {
  const preferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  return preferences ? JSON.parse(preferences) : null;
};

export const hasConsent = (category) => {
  const preferences = getConsentPreferences();
  if (!preferences) {
    // If no preferences are set, assume no consent for non-functional categories
    return category === 'functional';
  }
  return preferences[category];
};

// Default preferences if none are found
export const defaultPreferences = {
  functional: true, // Essential cookies are always on
  analytics: true,
  marketing: false, // Add if plan to use marketing cookies
};
