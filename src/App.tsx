import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Research } from './pages/Research';
import { PatientCare } from './pages/PatientCare';
import { Contact } from './pages/Contact';
import { NewsletterForm } from './components/NewsletterForm';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <div className="min-h-screen relative">
        {/* Dynamic Background Gradients */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 blur-[120px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-100/50 blur-[120px] rounded-full" 
          />
        </div>

        <Navbar />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
            <Route path="/research" element={<PageWrapper><Research /></PageWrapper>} />
            <Route path="/care" element={<PageWrapper><PatientCare /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>

        <footer className="py-20 px-6 border-t border-black/5">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h2 className="font-display font-bold text-2xl tracking-tighter">PHARMANEXT</h2>
              <p className="text-sm text-black/40 leading-relaxed">
                Redefining the future of human health through molecular innovation and empathetic care.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-2 text-sm text-black/60">
                <li><Link to="/" className="hover:text-black">Home</Link></li>
                <li><Link to="/about" className="hover:text-black">About</Link></li>
                <li><Link to="/services" className="hover:text-black">Services</Link></li>
                <li><Link to="/products" className="hover:text-black">Products</Link></li>
                <li><Link to="/research" className="hover:text-black">Research</Link></li>
                <li><Link to="/care" className="hover:text-black">Patient Care</Link></li>
                <li><Link to="/contact" className="hover:text-black">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-widest">Legal</h4>
              <ul className="space-y-2 text-sm text-black/60">
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-black">Terms of Service</a></li>
                <li><a href="#" className="hover:text-black">Cookie Policy</a></li>
              </ul>
            </div>
            <NewsletterForm />
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex justify-between items-center text-xs text-black/20 font-bold tracking-widest uppercase">
            <span>© 2026 PHARMANEXT INC.</span>
            <span>SAN FRANCISCO, CA</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}
