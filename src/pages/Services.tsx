import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { FlaskConical, ClipboardList, ShieldCheck, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Drug Discovery & Development',
    icon: FlaskConical,
    description: 'End-to-end research and development of novel therapeutic compounds.',
    specs: [
      'Target identification and validation',
      'Lead optimization and screening',
      'Pre-clinical safety assessment',
      'Pharmacokinetics & Pharmacodynamics'
    ],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '02',
    title: 'Clinical Trial Management',
    icon: ClipboardList,
    description: 'Comprehensive oversight of Phase I-IV clinical trials with a focus on data integrity.',
    specs: [
      'Global site selection & monitoring',
      'Patient recruitment & retention',
      'Electronic Data Capture (EDC)',
      'Regulatory submission support'
    ],
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '03',
    title: 'Regulatory Consulting',
    icon: ShieldCheck,
    description: 'Navigating complex global regulatory landscapes to ensure compliance and market entry.',
    specs: [
      'FDA & EMA strategy development',
      'Quality Management Systems (QMS)',
      'Post-market surveillance',
      'Audit readiness & support'
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: '04',
    title: 'Patient Support Programs',
    icon: HeartHandshake,
    description: 'Personalized assistance programs to improve patient adherence and outcomes.',
    specs: [
      'Financial assistance navigation',
      'Disease education & counseling',
      'Adherence monitoring tools',
      '24/7 clinical support line'
    ],
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1000'
  }
];

export const Services = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">
      <SEO 
        title="Our Services" 
        description="Comprehensive Pharma Solutions including drug discovery, clinical trials, global regulatory consulting, and patient support." 
      />
      <header className="max-w-3xl space-y-6 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-black/40"
        >
          Our Services
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none"
        >
          Comprehensive <br className="hidden sm:block" /> Pharma Solutions.
        </motion.h1>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative h-[400px] md:h-[500px] rounded-5xl overflow-hidden glass"
      >
        <img 
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600" 
          alt="Excellence in Every Molecule" 
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent flex items-center p-8 md:p-16">
          <div className="max-w-xl text-white space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-none">Excellence in <br /> Every Molecule</h2>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">We provide a full spectrum of services to accelerate the journey from laboratory discovery to patient care.</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-8 md:space-y-12">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-5xl overflow-hidden grid lg:grid-cols-2 group"
          >
            <div className="p-8 md:p-12 lg:p-16 space-y-6 md:space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white rounded-2xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="font-display text-3xl md:text-4xl font-bold text-black/10">{service.id}</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter">{service.title}</h2>
                <p className="text-black/60 text-base md:text-lg leading-relaxed">{service.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2 text-xs md:text-sm font-medium text-black/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    {spec}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => alert(`Requesting consultation for ${service.title}...`)}
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group/btn hover:scale-105 transition-transform"
              >
                Consultation <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quality & Compliance Section */}
      <section className="glass rounded-5xl p-8 md:p-20 overflow-hidden relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Our Standards</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">Uncompromising Quality</h2>
            </div>
            <p className="text-base md:text-lg text-black/60 leading-relaxed">
              Every process, from initial research to final distribution, is governed by the highest international quality standards. Our facilities are ISO 9001 and GMP certified, ensuring safety and efficacy at every stage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">ISO 9001</div>
              <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">GMP Certified</div>
              <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">FDA Compliant</div>
            </div>
          </div>
          <div className="aspect-video rounded-4xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1000" 
              alt="Uncompromising Quality Control" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full -ml-48 -mt-48" />
      </section>

      {/* Global Impact Section */}
      <section className="space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Global Reach</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">Impact Across Borders</h2>
          </div>
          <p className="text-black/40 max-w-xs text-sm">
            Our services extend to over 50 countries, ensuring that life-saving medicine reaches those who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] rounded-5xl overflow-hidden glass group"
          >
            <img 
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80&w=1000" 
              alt="Global Logistics" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-display font-bold">Logistics Excellence</h3>
                <p className="text-white/60 text-sm">Cold-chain management and global distribution networks.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative h-[400px] rounded-5xl overflow-hidden glass group"
          >
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
              alt="Strategic Partnerships" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-display font-bold">Strategic Partnerships</h3>
                <p className="text-white/60 text-sm">Collaborating with global health organizations and governments.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
