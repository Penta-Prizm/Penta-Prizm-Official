import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ApplicationFormModal from './components/ApplicationFormModal.jsx';
import SubmissionSuccessOverlay from './components/SubmissionSuccessOverlay.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import BrandingPage from './pages/BrandingPage.jsx';
import ContentCreationPage from './pages/ContentCreationPage.jsx';
import VideoProductionPage from './pages/VideoProductionPage.jsx';
import WebDevelopmentPage from './pages/WebDevelopmentPage.jsx';
import AppDevelopmentPage from './pages/AppDevelopmentPage.jsx';
import MarketingPage from './pages/MarketingPage.jsx';
import DigitalMarketingPage from './pages/DigitalMarketingPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import PortfolioDetailPage from './pages/PortfolioDetailPage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';
import InsightDetailPage from './pages/InsightDetailPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import TermsPage from './pages/TermsPage.jsx';
import CookiePolicyPage from './pages/CookiePolicyPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Scroll to top on route change
function ScrollToTopOnNav() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// The 3D scene lives on the home page only.
const MODEL_ROUTE = '/';

// Safety net: if the 3D model never reports back, the loader falls back to
// the fault state instead of freezing forever.
const MODEL_LOAD_TIMEOUT = 20000;

function AppInner() {
  const [isLoading, setIsLoading] = useState(true);
  const [modelProgress, setModelProgress] = useState(0);
  const [modelStatus, setModelStatus] = useState('pending'); // 'pending' | 'ready' | 'error'
  const [documentReady, setDocumentReady] = useState(
    () => typeof document !== 'undefined' && document.readyState === 'complete'
  );
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [preselectedApplication, setPreselectedApplication] = useState(null);
  const [preselectedCustomItem, setPreselectedCustomItem] = useState(null);
  const [successOverlay, setSuccessOverlay] = useState({ isOpen: false, name: '', contact: '' });

  const location = useLocation();
  const modelRequired = location.pathname === MODEL_ROUTE;

  // All document level assets are in place.
  useEffect(() => {
    if (documentReady) return undefined;
    const handleLoad = () => setDocumentReady(true);
    window.addEventListener('load', handleLoad, { once: true });
    return () => window.removeEventListener('load', handleLoad);
  }, [documentReady]);

  // Scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Lock scroll during loading
  useEffect(() => {
    if (isLoading) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

      const preventScroll = (e) => e.preventDefault();
      const preventKeys = (e) => {
        if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space', ' '].includes(e.key)) {
          e.preventDefault();
        }
      };
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeys);

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        window.removeEventListener('wheel', preventScroll);
        window.removeEventListener('touchmove', preventScroll);
        window.removeEventListener('keydown', preventKeys);
      };
    }
  }, [isLoading]);

  const handleLoadingComplete = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsLoading(false);
  }, []);

  /* ------------------------------------------------------------------ *
   * 3D model loading state (shared by the loader and the hero scene)
   * ------------------------------------------------------------------ */
  const handleModelProgress = useCallback((value) => {
    setModelProgress((previous) => (value > previous ? value : previous));
  }, []);

  const handleModelReady = useCallback(() => {
    setModelStatus((previous) => (previous === 'ready' ? previous : 'ready'));
  }, []);

  const handleModelError = useCallback(() => {
    setModelStatus((previous) => (previous === 'ready' ? previous : 'error'));
  }, []);

  // Watchdog: a model that never reports back must not freeze the loader.
  useEffect(() => {
    if (!modelRequired || modelStatus !== 'pending') return undefined;
    const timer = setTimeout(() => {
      setModelStatus((previous) => (previous === 'pending' ? 'error' : previous));
    }, MODEL_LOAD_TIMEOUT);
    return () => clearTimeout(timer);
  }, [modelRequired, modelStatus]);

  // Routes without the 3D scene report their real document level progress.
  const [documentProgress, setDocumentProgress] = useState(0);
  useEffect(() => {
    if (modelRequired) return undefined;
    const compute = () => {
      const images = Array.from(document.images || []);
      const loaded = images.filter((image) => image.complete).length;
      const imageRatio = images.length > 0 ? loaded / images.length : 1;
      const readyRatio =
        document.readyState === 'complete' ? 1 : document.readyState === 'interactive' ? 0.85 : 0.4;
      setDocumentProgress(
        Math.min(99, Math.round(Math.min(readyRatio, 0.3 + imageRatio * 0.7) * 100))
      );
    };
    compute();
    const interval = setInterval(compute, 250);
    return () => clearInterval(interval);
  }, [modelRequired]);

  const loadingComplete = modelRequired ? modelStatus === 'ready' : documentReady;
  const loaderStatus = modelStatus === 'error' ? 'error' : loadingComplete ? 'ready' : 'loading';
  const loaderProgress =
    modelStatus === 'ready'
      ? 100
      : modelRequired
        ? Math.min(99, Math.round(modelProgress))
        : Math.min(99, documentProgress);

  const handleOpenContact = (serviceName = '') => {
    const item =
      typeof serviceName === 'string' && serviceName
        ? { title: serviceName }
        : null;
    setPreselectedApplication(item);
    setApplicationFormOpen(true);
  };

  const handleSelectServiceFromGrid = (serviceId) => {
    const serviceNames = {
      projects: { title: 'Brand Strategy & Identity', services: ['BRANDING'] },
      design: { title: 'Digital Experiences & Web', services: ['WEBSITE DEVELOPMENT', 'APP DEVELOPMENT'] },
      custom: { title: 'Creative Content & Media', services: ['CREATIVE CONTENT'] },
      upcycling: { title: 'Digital Marketing & Growth', services: ['MARKETING', 'DIGITAL MARKETING'] },
    };
    setPreselectedApplication(
      serviceNames[serviceId] || { title: 'Custom Project Inquiry', services: ['BRANDING'] }
    );
    setApplicationFormOpen(true);
  };

  const handleOpenCustomWithItem = (item) => {
    if (typeof item === 'string') {
      handleOpenContact(item);
      return;
    }
    setPreselectedApplication(item);
    setApplicationFormOpen(true);
  };

  const handleFormSuccess = (data) => {
    setApplicationFormOpen(false);
    setPreselectedApplication(null);
    setPreselectedCustomItem(null);
    setSuccessOverlay({ isOpen: true, name: data.name, contact: data.contact });
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white flex flex-col selection:bg-[#ff3b19] selection:text-white">
      <ScrollToTopOnNav />

      {/* Loading Screen (only on initial load) */}
      {isLoading && (
        <LoadingScreen
          onLoadingComplete={handleLoadingComplete}
          progress={loaderProgress}
          status={loaderStatus}
        />
      )}

      {/* Skip-to-content link for accessibility/crawlability */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[99999] focus:bg-[#ff3b19] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      {/* Header */}
      <Header onOpenContact={() => handleOpenContact()} isLoaded={!isLoading} />

      {/* All Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenContact={handleOpenContact}
              onSelectService={handleSelectServiceFromGrid}
              onOpenCustomWithItem={handleOpenCustomWithItem}
              isLoaded={!isLoading}
              preselectedCustomItem={preselectedCustomItem}
              onFormSuccess={handleFormSuccess}
              onModelProgress={handleModelProgress}
              onModelReady={handleModelReady}
              onModelError={handleModelError}
            />
          }
        />
        <Route path="/services" element={<ServicesPage onOpenContact={handleOpenContact} />} />
        <Route path="/branding" element={<BrandingPage onOpenContact={handleOpenContact} />} />
        <Route path="/content-creation" element={<ContentCreationPage onOpenContact={handleOpenContact} />} />
        <Route path="/video-production" element={<VideoProductionPage onOpenContact={handleOpenContact} />} />
        <Route path="/web-development" element={<WebDevelopmentPage onOpenContact={handleOpenContact} />} />
        <Route path="/app-development" element={<AppDevelopmentPage onOpenContact={handleOpenContact} />} />
        <Route path="/marketing" element={<MarketingPage onOpenContact={handleOpenContact} />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage onOpenContact={handleOpenContact} />} />
        <Route path="/portfolio" element={<PortfolioPage onOpenContact={handleOpenContact} />} />
        <Route path="/portfolio/:id" element={<PortfolioDetailPage onOpenContact={handleOpenContact} />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightDetailPage onOpenContact={handleOpenContact} />} />
        <Route path="/contact" element={<ContactPage onOpenContact={handleOpenContact} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage onOpenContact={handleOpenContact} />} />
        <Route path="/terms-and-conditions" element={<TermsPage onOpenContact={handleOpenContact} />} />
        <Route path="/terms" element={<TermsPage onOpenContact={handleOpenContact} />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage onOpenContact={handleOpenContact} />} />
        <Route path="/disclaimer" element={<DisclaimerPage onOpenContact={handleOpenContact} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer */}
      <Footer onOpenContact={() => handleOpenContact()} />

      {/* Application Form Overlay */}
      <ApplicationFormModal
        isOpen={applicationFormOpen}
        onClose={() => setApplicationFormOpen(false)}
        preselectedItem={preselectedApplication}
        onSuccess={handleFormSuccess}
      />

      {/* Submission Success Overlay */}
      <SubmissionSuccessOverlay
        isOpen={successOverlay.isOpen}
        name={successOverlay.name}
        contact={successOverlay.contact}
        onClose={() => setSuccessOverlay((s) => ({ ...s, isOpen: false }))}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
