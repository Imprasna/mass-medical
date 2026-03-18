import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F5F5F7]"
        >
          <div className="relative w-24 h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#1D1D1F"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 1 }}
                animate={{ pathLength: 1, opacity: [1, 1, 0] }}
                transition={{ 
                  pathLength: { duration: 1.5, ease: "easeInOut" },
                  opacity: { duration: 0.5, delay: 1.5 }
                }}
              />
              <motion.path
                d="M30 50 L50 70 L70 30"
                fill="none"
                stroke="#1D1D1F"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </svg>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-display font-bold tracking-tighter text-sm"
            >
              PHARMANEXT
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
