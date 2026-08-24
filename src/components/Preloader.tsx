import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Atom, Activity, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface Particle {
  id: number;
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  size: number;
  delay: number;
  color: string;
  mass: number;
}

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [massValue, setMassValue] = useState(0);
  const [stage, setStage] = useState<'gathering' | 'condensing' | 'critical' | 'release'>('gathering');
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);

  // Generate 48 mass nodes on mount
  useEffect(() => {
    const colors = [
      '#10b981', // emerald-500
      '#06b6d4', // cyan-500
      '#3b82f6', // blue-500
      '#0284c7', // sky-600
      '#0f172a', // slate-900
      '#059669'  // emerald-600
    ];

    const generated: Particle[] = Array.from({ length: 48 }, (_, i) => {
      const angle = (i / 48) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
      const distance = 140 + Math.random() * 180;
      const initialX = Math.cos(angle) * distance;
      const initialY = Math.sin(angle) * distance;
      const targetAngle = angle + Math.PI * 0.75;
      const targetRadius = 15 + Math.random() * 35;

      return {
        id: i,
        initialX,
        initialY,
        targetX: Math.cos(targetAngle) * targetRadius,
        targetY: Math.sin(targetAngle) * targetRadius,
        size: 3 + Math.random() * 4.5,
        delay: Math.random() * 0.3,
        color: colors[i % colors.length],
        mass: Math.round(10 + Math.random() * 90)
      };
    });

    setParticles(generated);
  }, []);

  // Smooth, robust page loading progress tracker
  useEffect(() => {
    let currentVal = 0;
    let isDocReady = document.readyState === 'complete';

    const updateProgressState = (val: number) => {
      currentVal = Math.min(100, val);
      progressRef.current = currentVal;
      setProgress(Math.round(currentVal));

      // Calculate Molecular Mass accumulation in Kilodaltons (kDa)
      const calculatedMass = (currentVal * 5.42).toFixed(1);
      setMassValue(parseFloat(calculatedMass));

      if (currentVal < 35) {
        setStage('gathering');
      } else if (currentVal < 75) {
        setStage('condensing');
      } else if (currentVal < 95) {
        setStage('critical');
      } else {
        setStage('release');
      }
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
          ref={containerRef}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(6px)"
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F8FAFC] text-slate-900 select-none overflow-hidden"
        >
          {/* Subtle Ambient Mass Field Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* Glowing Center of Mass Core Radial Aura */}
          <motion.div
            animate={{
              scale: stage === 'critical' ? [1.2, 1.5, 1.3] : [0.9, 1.15, 0.9],
              opacity: stage === 'critical' ? 0.65 : 0.35
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-400/20 via-sky-500/20 to-teal-300/20 blur-3xl pointer-events-none"
          />

          {/* Main MASS Gravitational Stage */}
          <div className="relative flex flex-col items-center justify-center max-w-sm w-full px-6">
            {/* The Gravitational Particle Field */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">

              {/* Gravitational Orbital Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-slate-300/80 pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 rounded-full border border-emerald-400/30 pointer-events-none"
              />
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-16 rounded-full border-2 border-slate-900/10 pointer-events-none"
              />

              {/* Collapsing Mass Particles */}
              {particles.map((p) => {
                const isCondensing = stage === 'condensing' || stage === 'critical' || stage === 'release';
                return (
                  <motion.div
                    key={p.id}
                    initial={{
                      x: p.initialX,
                      y: p.initialY,
                      scale: 0.2,
                      opacity: 0
                    }}
                    animate={{
                      x: isCondensing ? p.targetX : p.initialX * 0.75,
                      y: isCondensing ? p.targetY : p.initialY * 0.75,
                      scale: isCondensing ? [1, 1.3, 1] : 1,
                      opacity: isCondensing ? [0.8, 1, 0.9] : 0.6
                    }}
                    transition={{
                      duration: 1.2,
                      delay: p.delay,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute rounded-full shadow-sm"
                    style={{
                      width: `${p.size}px`,
                      height: `${p.size}px`,
                      backgroundColor: p.color,
                      boxShadow: `0 0 8px ${p.color}80`
                    }}
                  />
                );
              })}

              {/* Core Nucleus - Liquid Mass Assembly */}
              <motion.div
                animate={{
                  scale: stage === 'critical' ? [1.08, 1.2, 1.1] : [0.96, 1.04, 0.96],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{
                  scale: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 16, repeat: Infinity, ease: "linear" }
                }}
                className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/95 backdrop-blur-2xl border-2 border-slate-900/10 shadow-2xl flex items-center justify-center group overflow-hidden"
              >
                {/* Internal Fluid Energy Gradient */}
                <motion.div
                  animate={{
                    background: [
                      "radial-gradient(circle at 30% 30%, rgba(16,185,129,0.25), transparent 70%)",
                      "radial-gradient(circle at 70% 70%, rgba(14,165,233,0.25), transparent 70%)",
                      "radial-gradient(circle at 30% 70%, rgba(20,184,166,0.25), transparent 70%)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0"
                />

                {/* Animated Biological Mass Icon */}
                <div className="relative flex flex-col items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative"
                  >
                    <Atom className="w-9 h-9 sm:w-11 sm:h-11 text-slate-900 stroke-[1.75]" />
                    <motion.div
                      animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 m-auto w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-md shadow-emerald-500/50"
                    />
                  </motion.div>
                </div>

                {/* Shockwave Rings on Critical Mass */}
                {stage === 'critical' && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 1 }}
                    animate={{ scale: 2.2, opacity: 0 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-3xl border-2 border-emerald-500 pointer-events-none"
                  />
                )}
              </motion.div>
            </div>

            {/* Typography Section: Bold Dynamic "MASS" Branding */}
            <div className="mt-3 flex flex-col items-center text-center space-y-2.5 z-20 w-full">
              {/* Kinetic MASS letters with weight transformation */}
              <div className="flex items-center gap-1.5">
                {['M', 'A', 'S', 'S'].map((letter, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 12, scale: 0.85 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      fontWeight: stage === 'critical' ? 900 : 800
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + idx * 0.08,
                      ease: "easeOut"
                    }}
                    className="font-display text-4xl sm:text-5xl font-black tracking-tighter text-slate-900 inline-block drop-shadow-xs"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Subtitle & Concept Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Molecular Accelerated Synthesis</span>
              </motion.div>

              {/* Live Mass Spectrometry & Working Progress Telemetry Bar */}
              <div className="w-full pt-2 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono text-slate-700 font-semibold px-0.5">
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                    <span>MASS: {massValue} kDa</span>
                  </span>
                  <span className="text-slate-900 font-bold tabular-nums">{progress}%</span>
                </div>

                {/* Progress Track with animated high-visibility gradient & inner glow */}
                <div className="h-2.5 w-full bg-slate-200/90 rounded-full overflow-hidden p-0.5 border border-slate-300 shadow-inner relative">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 rounded-full transition-all duration-100 ease-out relative shadow-sm"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Glowing leading edge light */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/80 rounded-full blur-[1px]" />
                  </div>
                </div>

                {/* State Tag Indicator */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 px-0.5">
                  <span>STAGE: {stage.toUpperCase()}</span>
                  <span>SYSTEM READY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Skip Control for Immediate Access */}
          <button
            onClick={() => setLoading(false)}
            className="absolute bottom-6 right-6 px-3.5 py-1.5 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 text-xs font-mono font-medium transition-all flex items-center gap-1.5 backdrop-blur-sm shadow-xs"
          >
            <span>Skip</span>
            <span className="text-slate-400 text-[10px]">ESC</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
