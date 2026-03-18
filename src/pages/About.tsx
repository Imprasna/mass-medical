import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { Target, Users, Award, ShieldCheck } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16 md:space-y-24">
      <SEO 
        title="About Us" 
        description="PharmaNext exists to bridge the gap between laboratory breakthroughs and patient bedside. Discover our visionary approach to medicine." 
      />
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Our Story</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none">
            Humanity <br className="hidden sm:block" /> Through <br className="hidden sm:block" /> Science.
          </h1>
          <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Founded in 2018, PharmaNext was born from a simple realization: the gap between laboratory breakthroughs and patient bedside was too wide. We exist to bridge that gap.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] rounded-5xl overflow-hidden glass"
        >
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" 
            alt="PharmaNext Headquarters" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* The Founder / Owner Section */}
      <section className="glass rounded-5xl p-8 md:p-20 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <div className="aspect-square rounded-4xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
              alt="Dr. Elena Vance - Founder" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">The Visionary</h2>
              <p className="text-black/40 font-bold uppercase tracking-widest text-xs md:text-sm">Dr. Elena Vance — Founder & CEO</p>
            </div>
            <p className="text-base md:text-lg text-black/60 italic leading-relaxed">
              "Our goal isn't just to manufacture drugs; it's to engineer hope. We look at the molecular level to solve human-scale problems. Every patient is a person, not a data point."
            </p>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="font-display text-2xl md:text-3xl font-bold">20+</h4>
                <p className="text-xs md:text-sm text-black/40">Years of Research</p>
              </div>
              <div>
                <h4 className="font-display text-2xl md:text-3xl font-bold">15</h4>
                <p className="text-xs md:text-sm text-black/40">Patents Held</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full -mr-48 -mb-48" />
      </section>

      {/* What We Do - Bento Grid */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">What We Do</span>
          <h2 className="font-display text-5xl font-bold tracking-tighter">Our Core Capabilities</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-4xl space-y-6"
          >
            <Target className="w-12 h-12 text-blue-500" />
            <h3 className="text-2xl font-display font-bold">Precision Medicine</h3>
            <p className="text-black/60">Developing targeted therapies that address the specific genetic markers of individual patients.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-4xl space-y-6"
          >
            <Users className="w-12 h-12 text-emerald-500" />
            <h3 className="text-2xl font-display font-bold">Patient Advocacy</h3>
            <p className="text-black/60">Working directly with patient groups to ensure our research aligns with real-world needs.</p>
          </motion.div>
          <motion.div 
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-4xl space-y-6"
          >
            <ShieldCheck className="w-12 h-12 text-purple-500" />
            <h3 className="text-2xl font-display font-bold">Ethical Research</h3>
            <p className="text-black/60">Maintaining the highest standards of transparency and integrity in every clinical trial.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
