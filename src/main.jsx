import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '@/App';
import '@/index.css';
import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/global.css';
import ReactGA from 'react-ga4';
import { hasConsent } from '@/lib/cookieConsent'; // Import hasConsent

if (hasConsent('analytics')) {
  ReactGA.initialize('G-GR13ELLH8R');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
