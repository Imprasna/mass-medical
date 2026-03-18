import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowUpRight, Activity, Beaker, Heart, ShieldCheck, Globe, Zap } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">
      <SEO
        title="Home"
        description="PharmaNext - Redefining the boundaries of modern medicine through advanced molecular science and empathetic care."
      />
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-gradient">
            Pioneering <br className="hidden sm:block" /> Human <br className="hidden sm:block" /> Potential.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
            We merge advanced molecular science with empathetic care to redefine the boundaries of modern medicine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate('/research')}
              className="bg-black text-white px-8 py-4 rounded-4xl font-medium flex items-center justify-center gap-2 group"
            >
              Our Research <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/care')}
              className="glass px-8 py-4 rounded-4xl font-medium"
            >
              Patient Care
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative px-4 sm:px-0"
        >
          {/* Organic Shape Container */}
          <div className="aspect-square overflow-hidden group relative" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=1200"
              alt="Advanced Molecular Research"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Overlay for depth */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* Floating Stats Cards - Hidden on small mobile for clarity */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 glass p-4 sm:p-6 rounded-4xl space-y-1 sm:space-y-2 z-10"
          >
            <div className="flex items-center gap-2 text-emerald-600">
              <Activity className="w-3 h-3 sm:w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Live Trials</span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold">142+</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 glass p-4 sm:p-6 rounded-4xl space-y-1 sm:space-y-2 z-10"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <ShieldCheck className="w-3 h-3 sm:w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">FDA Approved</span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold">28</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="py-8 md:py-12 border-y border-black/5 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 md:gap-20 whitespace-nowrap"
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex gap-12 md:gap-20 items-center">
              <span className="font-display text-2xl md:text-4xl font-bold opacity-10">GLOBAL INNOVATION AWARD 2025</span>
              <span className="font-display text-2xl md:text-4xl font-bold opacity-10">ISO 9001 CERTIFIED</span>
              <span className="font-display text-2xl md:text-4xl font-bold opacity-10">SUSTAINABLE PHARMA LEADER</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Science & R&D Bento Grid */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Science & R&D</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">Molecular Excellence</h2>
          </div>
          <p className="text-black/40 max-w-xs text-sm">
            Our bento-grid approach to research allows for rapid iteration and cross-disciplinary breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          <motion.div
            whileHover={{ scale: 0.98 }}
            onClick={() => alert('Opening Genomic Sequencing details...')}
            className="md:col-span-2 md:row-span-2 glass rounded-4xl p-8 md:p-10 flex flex-col justify-between group cursor-pointer overflow-hidden relative min-h-[400px] md:min-h-0"
          >
            <img
              src="https://images.pexels.com/photos/8940511/pexels-photo-8940511.jpeg"
              alt="Genomic Sequencing"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-4 relative z-10">
              <Beaker className="w-12 h-12 text-blue-500" />
              <h3 className="text-3xl font-display font-bold">Genomic <br /> Sequencing</h3>
              <p className="text-black/60 max-w-xs">Mapping the future of personalized medicine through advanced DNA analysis.</p>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -mr-20 -mb-20 group-hover:scale-150 transition-transform duration-700" />
            <ArrowUpRight className="absolute top-10 right-10 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.98 }}
            onClick={() => alert('Opening Cardiovascular Health details...')}
            className="md:col-span-2 glass rounded-4xl p-8 flex items-center gap-8 group cursor-pointer"
          >
            <div className="w-20 h-20 bg-emerald-500/10 rounded-3xl flex items-center justify-center">
              <Heart className="w-10 h-10 text-emerald-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold">Cardiovascular Health</h3>
              <p className="text-sm text-black/60">Next-gen heart health monitoring and treatment.</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.98 }}
            onClick={() => alert('Opening Global Reach details...')}
            className="glass rounded-4xl p-8 flex flex-col justify-center items-center text-center space-y-4 group cursor-pointer"
          >
            <Globe className="w-8 h-8 text-purple-500" />
            <h3 className="font-display font-bold">Global Reach</h3>
            <p className="text-xs text-black/40">Serving 40+ countries worldwide.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 0.98 }}
            onClick={() => alert('Opening Rapid Response details...')}
            className="glass-dark rounded-4xl p-8 flex flex-col justify-center items-center text-center space-y-4 group cursor-pointer text-white"
          >
            <Zap className="w-8 h-8 text-yellow-400" />
            <h3 className="font-display font-bold">Rapid Response</h3>
            <p className="text-xs text-white/40">Accelerated trial protocols.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Clinical Trials List */}
      <section className="space-y-12">
        <h2 className="font-display text-5xl font-bold tracking-tighter">Clinical Trials</h2>
        <div className="space-y-4">
          {[
            { id: '01', title: 'Neuro-Regen Protocol', phase: 'Phase III', status: 'Recruiting' },
            { id: '02', title: 'Onco-Shield Therapy', phase: 'Phase II', status: 'Active' },
            { id: '03', title: 'Cardio-Sync V2', phase: 'Phase IV', status: 'Completed' },
          ].map((trial, idx) => (
            <motion.div
              key={trial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group flex items-center justify-between p-8 rounded-4xl hover:bg-white transition-colors border-b border-black/5 last:border-0"
            >
              <div className="flex items-center gap-12">
                <span className="font-display text-2xl font-bold text-black/20">{trial.id}</span>
                <div>
                  <h4 className="text-xl font-bold">{trial.title}</h4>
                  <p className="text-sm text-black/40">{trial.phase}</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className={cn(
                  "px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest",
                  trial.status === 'Recruiting' ? "bg-emerald-100 text-emerald-700" :
                    trial.status === 'Active' ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                )}>
                  {trial.status}
                </span>
                <button
                  onClick={() => alert(`Opening details for ${trial.title}...`)}
                  className="glass px-6 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white"
                >
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
