import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { PatientPortalModal } from './PatientPortalModal';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Research', path: '/research' },
  { name: 'Patient Care', path: '/care' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
        <div className="glass rounded-full px-6 md:px-8 py-4 flex items-center justify-between transition-all duration-500">
          <Link to="/" className="font-display font-bold text-xl tracking-tighter z-50">
            PHARMANEXT
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-black/60",
                  location.pathname === item.path ? "text-black" : "text-black/40"
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="h-1 w-1 bg-black rounded-full mx-auto mt-1"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPortalOpen(true)}
              className="hidden sm:block bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform"
            >
              Portal
            </button>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden z-50 p-2 glass rounded-full"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden bg-[#F5F5F7]/80 backdrop-blur-2xl pt-32 px-8"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-4xl font-display font-bold tracking-tighter",
                      location.pathname === item.path ? "text-black" : "text-black/30"
                    )}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsPortalOpen(true);
                }}
                className="mt-8 bg-black text-white py-4 rounded-2xl font-bold text-lg"
              >
                Access Portal
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PatientPortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
    </>
  );
};
