import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { SEO } from './components/SEO';

const Home = lazy(() => import('./pages/Home').then(({ Home }) => ({ default: Home })));
const About = lazy(() => import('./pages/About').then(({ About }) => ({ default: About })));
const Services = lazy(() => import('./pages/Services').then(({ Services }) => ({ default: Services })));
const Products = lazy(() => import('./pages/Products').then(({ Products }) => ({ default: Products })));
const Research = lazy(() => import('./pages/Research').then(({ Research }) => ({ default: Research })));
const PatientCare = lazy(() => import('./pages/PatientCare').then(({ PatientCare }) => ({ default: PatientCare })));
const Contact = lazy(() => import('./pages/Contact').then(({ Contact }) => ({ default: Contact })));

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
    <section className="min-h-[55vh] pt-40 pb-24 px-6 max-w-3xl mx-auto text-center" aria-labelledby="not-found-heading">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">404 Error</p>
      <h1 id="not-found-heading" className="mt-4 font-display text-4xl sm:text-5xl font-bold">Page not found</h1>
      <p className="mt-4 text-slate-600">The page may have moved or the address may be incorrect. Try one of these pages instead.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-700">Go to home</Link>
        <Link to="/products" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50">Browse products</Link>
        <Link to="/contact" className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-50">Contact us</Link>
      </div>
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
        <div
          className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(ellipse_at_15%_15%,rgba(0,102,179,0.10),transparent_35%),radial-gradient(ellipse_at_85%_85%,rgba(0,200,216,0.08),transparent_40%)]"
          aria-hidden="true"
        />

        <Navbar />

        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="min-h-[60vh]" aria-label="Loading page" />}>
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
                          description="Browse medical equipment from MASS Medical, including syringe and infusion pumps, patient monitors, ventilators, BiPAP machines, and CPAP machines."
                          keywords="medical equipment catalog, syringe pumps, infusion pumps, patient monitors, ventilators, BiPAP, CPAP"
                        />
                        <Products />
                      </>
                    </PageWrapper>
                  )}
                />
                <Route path="/research" element={<PageWrapper><Research /></PageWrapper>} />
                <Route path="/care" element={<PageWrapper><PatientCare /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>

        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}
