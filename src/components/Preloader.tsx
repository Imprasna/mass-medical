import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity } from 'lucide-react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Smooth, robust page loading progress tracker
  useEffect(() => {
    let currentVal = 0;
    let isDocReady = document.readyState === 'complete';

    const updateProgressState = (val: number) => {
      currentVal = Math.min(100, val);
      setProgress(Math.round(currentVal));
    };

    // Incremental progress loop ensuring smooth animation from 0 to 100%
    const interval = setInterval(() => {
      if (currentVal < 90) {
        // Fast steady progress up to 90%
        const increment = Math.random() * 3.5 + 1.8;
        updateProgressState(currentVal + increment);
      } else if (currentVal < 99) {
        // Slow down slightly near finish unless fully loaded
        const increment = isDocReady ? 3.5 : 0.8;
        updateProgressState(currentVal + increment);
      } else if (currentVal >= 99) {
        updateProgressState(100);
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 400);
      }
    }, 30);

    const onPageLoaded = () => {
      isDocReady = true;
    };

    if (document.readyState === 'complete') {
      isDocReady = true;
    } else {
      window.addEventListener('load', onPageLoaded);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        updateProgressState(100);
        setLoading(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('load', onPageLoaded);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(6px)"
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC] text-slate-900 select-none overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <motion.div
            animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.25, 0.45, 0.25] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-500/20 to-teal-300/20 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6">
            <motion.div
              animate={{ scale: [1, 1.015, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-full text-center"
            >
              <h1
                aria-label="Mass Medical"
                className="relative bg-gradient-to-r from-slate-900 via-emerald-700 to-slate-900 bg-clip-text text-[clamp(2rem,9vw,4rem)] font-display font-bold tracking-[-0.06em] text-transparent"
                style={{ perspective: 600 }}
              >
                <span aria-hidden="true" className="inline-flex whitespace-nowrap">
                  {'Mass Medical'.split('').map((letter, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 24, rotateX: -70, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 180,
                        damping: 16,
                        delay: 0.12 + idx * 0.055,
                      }}
                      className={
                        letter === ' '
                          ? 'inline-block w-[0.28em] shrink-0 text-[0px]'
                          : 'inline-block'
                      }
                    >
                      {letter === ' ' ? '\u00a0' : letter}
                    </motion.span>
                  ))}
                </span>
                <motion.span
                  aria-hidden="true"
                  animate={{ backgroundPosition: ['150% 0%', '-100% 0%'] }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    ease: 'easeInOut',
                  }}
                  className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(110deg, transparent 38%, rgba(255,255,255,0.12) 44%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.12) 56%, transparent 62%)',
                    backgroundSize: '250% 100%',
                  }}
                >
                  Mass Medical
                </motion.span>
              </h1>

            </motion.div>

            <div className="mt-10 w-full max-w-sm space-y-3">
              <div className="flex items-center justify-between px-0.5 font-mono text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-2 text-emerald-700">
                  <Activity className="h-4 w-4 animate-pulse text-emerald-600" />
                  <span>Preparing your experience</span>
                </span>
                <span className="tabular-nums text-slate-900">{progress}%</span>
              </div>

              <div
                role="progressbar"
                aria-label="Page loading progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                className="relative h-2.5 w-full overflow-hidden rounded-full border border-slate-300 bg-slate-200/90 p-0.5 shadow-inner"
              >
                <div
                  className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.45)] transition-[width] duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-y-0 right-0 w-2 rounded-full bg-white/80 blur-[1px]" />
                  <motion.div
                    initial={{ x: '-150%' }}
                    animate={{ x: progress < 100 ? ['-150%', '350%'] : '350%' }}
                    transition={{
                      duration: 1.1,
                      repeat: progress < 100 ? Infinity : 0,
                      ease: 'linear',
                    }}
                    className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/90 to-transparent"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setLoading(false)}
            className="absolute bottom-6 right-6 flex items-center gap-1.5 rounded-full bg-slate-200/80 px-3.5 py-1.5 font-mono text-xs font-medium text-slate-700 shadow-xs backdrop-blur-sm transition-all hover:bg-slate-300"
          >
            <span>Skip</span>
            <span className="text-slate-400 text-[10px]">ESC</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
