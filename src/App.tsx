import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { PatientCare } from './pages/PatientCare';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { SEO } from './components/SEO';

const RouteScrollReset = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const NotFound = () => (
  <>
    <SEO title="Page Not Found" description="The page you requested could not be found." noindex />
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto" aria-labelledby="not-found-heading">
      <h1 id="not-found-heading" className="font-display text-4xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-600">The page may have moved or the address may be incorrect.</p>
    </section>
  </>
);

export default function App() {
  return (
    <Router>
      <RouteScrollReset />
      <Preloader />
      <div className="min-h-screen relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-slate-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 blur-[120px] rounded-full"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-100/50 blur-[120px] rounded-full"
          />
        </div>

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route
                path="/products"
                element={(
                  <PageWrapper>
                    <>
                      <SEO
                        title="Medical Equipment Catalog"
                        description="Browse medical equipment from MASS MedCare, including syringe and infusion pumps, patient monitors, ventilators, BiPAP machines, and CPAP machines."
                        keywords="medical equipment catalog, syringe pumps, infusion pumps, patient monitors, ventilators, BiPAP, CPAP"
                      />
                      <Products />
                    </>
                  </PageWrapper>
                )}
              />
              <Route path="/care" element={<PageWrapper><PatientCare /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
