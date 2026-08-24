import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

            // Calculate scroll progress percentage (0 - 100)
            if (totalHeight > 0) {
                const progress = Math.min(100, Math.max(0, (currentScrollY / totalHeight) * 100));
                setScrollProgress(progress);
            }

            // Show button after scrolling down 280px
            if (currentScrollY > 280) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // SVG Circular progress radius & circumference
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-7 right-7 z-40"
                >
                    <button
                        onClick={scrollToTop}
                        type="button"
                        aria-label="Scroll back to top of page"
                        className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-white/80 hover:bg-white/95 backdrop-blur-xl border border-slate-200/90 hover:border-emerald-400/80 text-slate-800 hover:text-emerald-600 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                    >
                        {/* SVG Circular Scroll Progress Ring */}
                        <svg
                            className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
                            viewBox="0 0 44 44"
                            aria-hidden="true"
                        >
                            <circle
                                cx="22"
                                cy="22"
                                r={radius}
                                className="stroke-slate-200/70"
                                strokeWidth="2.5"
                                fill="none"
                            />
                            <circle
                                cx="22"
                                cy="22"
                                r={radius}
                                className="stroke-emerald-500 transition-all duration-150 ease-out"
                                strokeWidth="2.5"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                fill="none"
                            />
                        </svg>

                        {/* Arrow Up Icon with subtle hover lift */}
                        <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
