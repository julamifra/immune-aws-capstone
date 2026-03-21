import { logUserEvent } from './eventLogger';

export const logPageView = (pathname, search, referrer) => {
  logUserEvent('page_view', { path: pathname + search, referrer });
};
