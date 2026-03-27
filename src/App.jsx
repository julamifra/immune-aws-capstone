import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from '@/components/ScrollToTop';

import Loader from '@/components/Loader';
import { routePaths } from '@/config/routes';
import { HelmetProvider } from 'react-helmet-async';
import { logPageView } from '@/services/logService';
import PideCitaDrawer from '@/components/PideCita/PideCitaDrawer';
import MobileBottomBar from '@/components/MobileBottomBar';

// No Lazy-loading for HomePage and NewsPage
import NotFoundPage from '@/pages/NotFoundPage';
import HomePage from '@/pages/HomePage';

// Lazy-loaded page components
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const FacilitiesPage = lazy(() => import('@/pages/FacilitiesPage'));
const TeamPage = lazy(() => import('@/pages/TeamPage'));
const HistoryPage = lazy(() => import('@/pages/HistoryPage'));
const AboutUsPage = lazy(() => import('@/pages/AboutUsPage'));
const SpecialiesPage = lazy(() => import('@/pages/SpecialtiesPage'));
const SpecialtyDetailPage = lazy(() => import('@/pages/SpecialtyDetailPage'));
const NewsDetailPage = lazy(() => import('@/pages/BlogDetailPage'));
const PublicationsPage = lazy(() => import('@/pages/PublicationsPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsOfUsePage = lazy(() => import('@/pages/TermsOfUsePage'));
const CookiesPolicyPage = lazy(() => import('@/pages/CookiesPolicyPage'));

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function App() {
  const location = useLocation();
  const previousPathRef = useRef(document.referrer);
  const [isPideCitaOpen, setIsPideCitaOpen] = React.useState(false);

  const handlePideCitaClick = () => {
    setIsPideCitaOpen(true);
  };

  const handlePideCitaClose = () => {
    setIsPideCitaOpen(false);
  };

  useEffect(() => {
    if (import.meta.env.PROD) {
      if (previousPathRef.current !== location.pathname + location.search) {
        logPageView(
          location.pathname,
          location.search,
          previousPathRef.current
        );
        ReactGA.send({
          hitType: 'pageview',
          page: location.pathname + location.search,
        });
      }
      previousPathRef.current = location.pathname + location.search;
    }
  }, [location.pathname, location.search]);

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col pb-20 md:pb-0">
        <Header onPideCitaClick={handlePideCitaClick} />
        <ScrollToTop />
        <main
          className={`flex-grow flex flex-col ${
            location.pathname !== '/' ? 'pt-16 lg:pt-20' : ''
          }`}
        >
          <AnimatePresence mode="wait">
            <Suspense fallback={<Loader />}>
              <Routes location={location} key={location.pathname}>
                <Route
                  path={routePaths.home}
                  element={
                    <PageWrapper>
                      <HomePage />
                    </PageWrapper>
                  }
                />

                <Route
                  path={routePaths.about}
                  element={
                    <PageWrapper>
                      <AboutPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.center}
                  element={
                    <PageWrapper>
                      <FacilitiesPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.team}
                  element={
                    <PageWrapper>
                      <TeamPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.history}
                  element={
                    <PageWrapper>
                      <HistoryPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.aboutUs}
                  element={
                    <PageWrapper>
                      <AboutUsPage />
                    </PageWrapper>
                  }
                />

                <Route
                  path={routePaths.specialties}
                  element={
                    <PageWrapper>
                      <SpecialiesPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.specialties + '/:slug'}
                  element={
                    <PageWrapper>
                      <SpecialtyDetailPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.blog}
                  element={
                    <PageWrapper>
                      <BlogPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.blog + '/:slug'}
                  element={
                    <PageWrapper>
                      <NewsDetailPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.publications}
                  element={
                    <PageWrapper>
                      <PublicationsPage />
                    </PageWrapper>
                  }
                />

                <Route
                  path={routePaths.contact}
                  element={
                    <PageWrapper>
                      <ContactPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.privacy}
                  element={
                    <PageWrapper>
                      <PrivacyPolicyPage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.terms}
                  element={
                    <PageWrapper>
                      <TermsOfUsePage />
                    </PageWrapper>
                  }
                />
                <Route
                  path={routePaths.cookies}
                  element={
                    <PageWrapper>
                      <CookiesPolicyPage />
                    </PageWrapper>
                  }
                />
                {/* 404 Not Found Route */}
                <Route
                  path="*"
                  element={
                    <PageWrapper>
                      <NotFoundPage />
                    </PageWrapper>
                  }
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
        <Toaster />
        <CookieConsentBanner />
        <MobileBottomBar onPideCitaClick={handlePideCitaClick} />
        <PideCitaDrawer isOpen={isPideCitaOpen} onClose={handlePideCitaClose} />
      </div>
    </HelmetProvider>
  );
}

const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="flex-grow flex flex-col"
  >
    {children}
  </motion.div>
);

export default App;
