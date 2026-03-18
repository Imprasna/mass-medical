import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeartPulse, UserCheck, Stethoscope, Pill, ArrowRight } from 'lucide-react';
import { PatientPortalModal } from '../components/PatientPortalModal';
import { SEO } from '../components/SEO';

export const PatientCare = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16 md:space-y-20">
      <SEO 
        title="Patient Care" 
        description="Care that understands you. PharmaNext offers comprehensive support programs and personalized medical care." 
      />
      <header className="max-w-3xl space-y-6 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-black/40"
        >
          Patient Care
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none"
        >
          Care That <br className="hidden sm:block" /> Understands You.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-black/60 leading-relaxed"
        >
          We believe medicine is more than just molecules. It's about restoring quality of life and providing support at every step.
        </motion.p>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative h-[300px] md:h-[400px] rounded-5xl overflow-hidden glass"
      >
        <img 
          src="https://images.unsplash.com/photo-1584515729963-6f502766230b?auto=format&fit=crop&q=80&w=1600" 
          alt="Patient-Centered Care Approach" 
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 md:p-12">
          <div className="text-white space-y-2">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter">Human-Centric Approach</h2>
            <p className="text-white/80 max-w-xl text-sm md:text-base">Every breakthrough we achieve is measured by the lives it improves and the families it supports.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass rounded-5xl overflow-hidden flex flex-col group"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1576765608596-b2042ad8bf0a?auto=format&fit=crop&q=80&w=1000" 
              alt="Patient Support Programs" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 md:p-12 space-y-6 md:space-y-8 flex-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center">
              <HeartPulse className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter">Support Programs</h3>
            <p className="text-black/60 text-base md:text-lg leading-relaxed">
              Comprehensive financial and emotional support for patients undergoing long-term treatments.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Financial Assistance', 'Mental Health Support', 'Caregiver Resources'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-sm md:text-base">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => alert('Learning more about our support programs...')}
              className="flex items-center gap-2 font-bold text-emerald-600 text-sm md:text-base"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass-dark rounded-5xl overflow-hidden flex flex-col group text-white"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
              alt="Personalized Medical Care" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="p-8 md:p-12 space-y-6 md:space-y-8 flex-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center">
              <UserCheck className="w-7 h-7 md:w-8 md:h-8" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tighter">Personalized Care</h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              Tailored health plans based on your unique genetic profile and lifestyle needs.
            </p>
            <ul className="space-y-3 md:space-y-4">
              {['Genetic Profiling', 'Lifestyle Integration', '24/7 Nurse Hotline'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-medium text-sm md:text-base">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setIsPortalOpen(true)}
              className="flex items-center gap-2 font-bold text-white text-sm md:text-base"
            >
              Access Portal <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { icon: Stethoscope, label: 'Find a Doctor' },
          { icon: Pill, label: 'Medication Guide' },
          { icon: HeartPulse, label: 'Health Tracker' },
          { icon: UserCheck, label: 'Patient Stories' },
        ].map((item, idx) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => alert(`Opening ${item.label}...`)}
            className="glass p-6 md:p-8 rounded-4xl flex flex-col items-center gap-3 md:gap-4 hover:bg-white transition-all group"
          >
            <item.icon className="w-6 h-6 md:w-8 md:h-8 text-black/40 group-hover:text-black transition-colors" />
            <span className="font-bold text-xs md:text-sm text-center">{item.label}</span>
          </motion.button>
        ))}
      </section>

      <PatientPortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
    </div>
  );
};
