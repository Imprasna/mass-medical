import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import massMedicalLogo from '../assets/images/massmedical_logo.svg';

const logoPaths = [
  'M 262.0,43.0 L 255.0,36.0 L 255.0,35.0 L 251.0,34.0 L 249.0,32.0 L 246.0,32.0 L 241.0,30.0 L 231.0,30.0 L 227.0,32.0 L 224.0,32.0 L 216.0,37.0 L 208.0,47.0 L 205.0,55.0 L 205.0,141.0 L 203.0,144.0 L 90.0,144.0 L 84.0,146.0 L 78.0,149.0 L 69.0,159.0 L 68.0,163.0 L 66.0,166.0 L 66.0,171.0 L 65.0,172.0 L 65.0,179.0 L 67.0,184.0 L 66.0,185.0 L 72.0,194.0 L 78.0,199.0 L 89.0,203.0 L 227.0,203.0 L 228.0,202.0 L 235.0,201.0 L 238.0,199.0 L 241.0,199.0 L 245.0,195.0 L 248.0,194.0 L 255.0,188.0 L 262.0,178.0 L 268.0,161.0 L 268.0,55.0 L 266.0,49.0 Z',
  'M 318.0,30.0 L 306.0,30.0 L 305.0,31.0 L 301.0,31.0 L 295.0,34.0 L 287.0,41.0 L 284.0,45.0 L 280.0,54.0 L 280.0,71.0 L 279.0,72.0 L 279.0,77.0 L 280.0,78.0 L 280.0,143.0 L 279.0,145.0 L 280.0,146.0 L 280.0,150.0 L 282.0,153.0 L 283.0,153.0 L 284.0,155.0 L 285.0,155.0 L 293.0,163.0 L 293.0,164.0 L 294.0,164.0 L 298.0,169.0 L 304.0,174.0 L 308.0,173.0 L 342.0,140.0 L 342.0,135.0 L 343.0,134.0 L 343.0,96.0 L 342.0,95.0 L 342.0,88.0 L 343.0,87.0 L 343.0,63.0 L 342.0,62.0 L 342.0,54.0 L 340.0,48.0 L 335.0,40.0 L 326.0,33.0 Z',
  'M 320.0,178.0 L 321.0,183.0 L 341.0,203.0 L 342.0,203.0 L 343.0,205.0 L 456.0,205.0 L 457.0,204.0 L 461.0,204.0 L 466.0,202.0 L 472.0,198.0 L 477.0,193.0 L 481.0,184.0 L 482.0,171.0 L 481.0,170.0 L 481.0,167.0 L 479.0,161.0 L 477.0,159.0 L 476.0,156.0 L 466.0,148.0 L 459.0,145.0 L 451.0,145.0 L 450.0,144.0 L 414.0,144.0 L 413.0,145.0 L 374.0,145.0 L 373.0,144.0 L 370.0,145.0 L 369.0,144.0 L 366.0,145.0 L 363.0,144.0 L 362.0,145.0 L 355.0,145.0 L 352.0,147.0 L 351.0,149.0 L 350.0,149.0 L 333.0,166.0 L 321.0,176.0 Z',
  'M 225.0,240.0 L 224.0,238.0 L 199.0,214.0 L 196.0,214.0 L 195.0,213.0 L 194.0,214.0 L 89.0,214.0 L 80.0,217.0 L 77.0,219.0 L 70.0,227.0 L 69.0,227.0 L 69.0,229.0 L 65.0,237.0 L 64.0,247.0 L 65.0,248.0 L 66.0,257.0 L 68.0,259.0 L 70.0,264.0 L 72.0,265.0 L 75.0,269.0 L 83.0,273.0 L 85.0,275.0 L 89.0,275.0 L 90.0,276.0 L 190.0,276.0 L 224.0,244.0 Z',
  'M 476.0,225.0 L 467.0,217.0 L 463.0,215.0 L 453.0,214.0 L 452.0,213.0 L 451.0,214.0 L 448.0,214.0 L 447.0,213.0 L 385.0,213.0 L 384.0,214.0 L 378.0,214.0 L 377.0,213.0 L 375.0,214.0 L 352.0,214.0 L 351.0,213.0 L 345.0,213.0 L 344.0,214.0 L 322.0,214.0 L 321.0,215.0 L 317.0,215.0 L 299.0,225.0 L 288.0,238.0 L 283.0,248.0 L 281.0,254.0 L 281.0,259.0 L 280.0,260.0 L 280.0,357.0 L 281.0,358.0 L 281.0,362.0 L 286.0,371.0 L 294.0,378.0 L 304.0,382.0 L 318.0,382.0 L 319.0,381.0 L 323.0,381.0 L 336.0,372.0 L 340.0,365.0 L 342.0,359.0 L 342.0,321.0 L 343.0,320.0 L 343.0,306.0 L 342.0,305.0 L 342.0,288.0 L 343.0,286.0 L 342.0,285.0 L 342.0,279.0 L 345.0,276.0 L 407.0,276.0 L 408.0,277.0 L 411.0,277.0 L 412.0,276.0 L 414.0,277.0 L 416.0,276.0 L 447.0,276.0 L 450.0,277.0 L 451.0,276.0 L 458.0,276.0 L 464.0,274.0 L 471.0,270.0 L 471.0,269.0 L 476.0,265.0 L 480.0,258.0 L 481.0,252.0 L 482.0,251.0 L 482.0,237.0 Z',
  'M 244.0,247.0 L 240.0,247.0 L 237.0,249.0 L 236.0,251.0 L 227.0,260.0 L 226.0,260.0 L 222.0,265.0 L 218.0,268.0 L 218.0,269.0 L 214.0,272.0 L 207.0,280.0 L 206.0,280.0 L 205.0,282.0 L 205.0,358.0 L 207.0,364.0 L 210.0,369.0 L 218.0,377.0 L 230.0,382.0 L 242.0,382.0 L 243.0,381.0 L 249.0,380.0 L 256.0,376.0 L 263.0,368.0 L 267.0,358.0 L 267.0,272.0 L 259.0,263.0 L 260.0,262.0 L 259.0,263.0 Z',
];

const MINIMUM_DISPLAY_DURATION = 300;

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentVal = 0;
    let isDocReady = document.readyState === 'complete';
    const startedAt = performance.now();

    const updateProgressState = (val: number) => {
      currentVal = Math.min(100, val);
      setProgress(Math.round(currentVal));
    };

    let hideTimeout: number | undefined;
    const interval = window.setInterval(() => {
      if (currentVal < 90) {
        updateProgressState(currentVal + (isDocReady ? 12 : 5));
      } else if (currentVal < 99) {
        updateProgressState(currentVal + (isDocReady ? 10 : 1));
      } else if (isDocReady && performance.now() - startedAt >= MINIMUM_DISPLAY_DURATION) {
        updateProgressState(100);
        clearInterval(interval);
        hideTimeout = window.setTimeout(() => setLoading(false), 150);
      }
    }, 50);

    const onPageLoaded = () => {
      isDocReady = true;
    };

    if (!isDocReady) {
      window.addEventListener('load', onPageLoaded);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        clearInterval(interval);
        if (hideTimeout !== undefined) window.clearTimeout(hideTimeout);
        updateProgressState(100);
        setLoading(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearInterval(interval);
      if (hideTimeout !== undefined) window.clearTimeout(hideTimeout);
      window.removeEventListener('load', onPageLoaded);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.025, filter: 'blur(8px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex select-none flex-col items-center justify-center overflow-hidden bg-[#102230] text-white"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(0,152,192,0.24),transparent_48%),radial-gradient(rgba(220,232,238,0.72)_0.7px,transparent_0.7px)] [background-size:auto,34px_34px] opacity-40"
          />

          <motion.div
            aria-hidden="true"
            animate={{ scale: [0.85, 1.12, 0.85], opacity: [0.25, 0.52, 0.25] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute h-[22rem] w-[22rem] rounded-full bg-cyan-400/20 blur-[100px]"
          />

          <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-7"
            >
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-5 rounded-full border border-dashed border-cyan-100/15"
              />
              <motion.div
                aria-hidden="true"
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-full border border-sky-300/10"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: [1, 1.035, 1] }}
                transition={{
                  opacity: { duration: 0.4, ease: 'easeOut' },
                  scale: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="relative h-32 w-40"
              >
                <svg
                  viewBox="0 0 552 411"
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full overflow-visible drop-shadow-[0_0_18px_rgba(103,232,249,0.85)]"
                >
                  {logoPaths.map((path, index) => (
                    <motion.path
                      key={path}
                      d={path}
                      fill="none"
                      stroke="#7ce4ed"
                      strokeWidth="4"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, strokeOpacity: 0.85 }}
                      animate={{
                        pathLength: [0, 1],
                        strokeOpacity: [0.85, 1, 0],
                      }}
                      transition={{
                        pathLength: {
                          duration: 1.2,
                          delay: 0.1 + index * 0.06,
                          ease: [0.42, 0, 0.2, 1],
                        },
                        strokeOpacity: {
                          duration: 1.2,
                          delay: 0.1 + index * 0.06,
                          times: [0, 0.8, 1],
                          ease: [0.42, 0, 0.2, 1],
                        },
                      }}
                    />
                  ))}
                </svg>
                <motion.img
                  src={massMedicalLogo}
                  alt="Mass Medical"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1] }}
                  transition={{ duration: 0.6, delay: 1.2, times: [0, 0.65, 1], ease: 'easeOut' }}
                  className="absolute inset-0 h-full w-full object-contain drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35, ease: 'easeOut' }}
              className="text-center"
            >
              <h1 className="font-display text-[clamp(2rem,8vw,3.5rem)] font-semibold tracking-[-0.06em] text-white">
                MASS <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">MEDICAL</span>
              </h1>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.32em] text-slate-400 sm:text-xs">
                Care in every connection
              </p>
            </motion.div>

            <div className="mt-12 w-full max-w-sm space-y-3">
              <div className="flex items-center justify-between px-0.5 text-xs">
                <span className="flex items-center gap-2.5 font-medium tracking-wide text-slate-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                  </span>
                  Preparing your experience
                </span>
                <span className="font-mono tabular-nums text-cyan-100">{progress}%</span>
              </div>

              <div
                role="progressbar"
                aria-label="Page loading progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                className="relative h-2 w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.07] p-[2px] shadow-[inset_0_1px_3px_rgba(0,0,0,0.3)]"
              >
                <motion.div
                  className="relative h-full overflow-hidden rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-300 shadow-[0_0_16px_rgba(34,211,238,0.55)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ type: 'spring', stiffness: 75, damping: 22, mass: 0.5 }}
                >
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/90 to-transparent"
                    animate={{ x: ['0%', '300%'] }}
                    transition={{ duration: 1.25, repeat: Infinity, ease: 'linear' }}
                  />
                </motion.div>
              </div>
              <div className="flex justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
                <span>Secure</span>
                <span>Professional care</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLoading(false)}
            className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md transition-colors hover:border-cyan-200/30 hover:bg-white/10 hover:text-white"
          >
            <span>Skip</span>
            <span className="rounded border border-white/15 px-1.5 py-0.5 text-[9px] text-slate-400">ESC</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
