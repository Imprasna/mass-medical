import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { ArrowUpRight, Activity, Beaker, Heart, ShieldCheck, Globe, Zap, ArrowRight, Truck, Headphones, Users, Award, HomeIcon, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Testimonials } from '../components/Testimonials';
import { WhyUs } from '../components/WhyUs';
import { ClinicalTrialsCarousel } from '../components/ClinicalTrialsCarousel';
import herosecImg from '../assets/images/hero_section.png';

export const Home = () => {
  const navigate = useNavigate();

  const criticalEquipment = [
    'Syringe Pumps',
    'Infusion Pumps',
    'BiPAP Machines',
    'Ventilators',
    'Oxygen Concentrators',
    'Oxygen Cylinders'
  ];

  return (
    <div className="pt-32 pb-15 px-6 max-w-7xl mx-auto space-y-14">
      <SEO
        title="Home"
        description="MASS Medical - Redefining the boundaries of modern medicine through advanced molecular science and empathetic care."
      />
      {/* Hero Section */}
      {/* <section className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left"
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-gradient">
            Premium Supplies <br className="hidden sm:block" /> for Hospitals.
          </h1>
          <p className="text-lg md:text-xl text-black/60 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Trusted by leading healthcare networks for reliable, medical-grade materials, rapid fulfillment, and uncompromising ISO-compliant quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => navigate('/Services')}
              className="bg-black text-white px-8 py-4 rounded-4xl font-medium flex items-center justify-center gap-2 group"
            >
              Explore Machinery <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/care')}
              className="bg-white/80 border-2 border-slate-300/80 hover:border-black px-8 py-4 rounded-4xl font-medium shadow-sm transition-all"
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
          
          <div className="aspect-square overflow-hidden group relative" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=1200"
              alt="Advanced Molecular Research"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
           
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 bg-white/90 backdrop-blur-xl border-2 border-emerald-300/90 hover:border-emerald-500 p-4 sm:p-6 rounded-4xl space-y-1 sm:space-y-2 z-10 shadow-lg shadow-emerald-500/5 transition-colors"
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
            className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 bg-white/90 backdrop-blur-xl border-2 border-blue-300/90 hover:border-blue-500 p-4 sm:p-6 rounded-4xl space-y-1 sm:space-y-2 z-10 shadow-lg shadow-blue-500/5 transition-colors"
          >
            <div className="flex items-center gap-2 text-blue-600">
              <ShieldCheck className="w-3 h-3 sm:w-4 h-4" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">FDA Approved</span>
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold">28</div>
          </motion.div>
        </motion.div>
      </section> */}
      <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[580px] lg:min-h-[640px]">
        {/* Left Column: Headline, Description, CTAs, and Trust Badges */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 xl:col-span-6 space-y-6 sm:space-y-8 text-left z-10"
        >
          {/* Main Hero Headline */}
          <div className="space-y-2">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.02]">
              Premium <br />
              Supplies for <br />
              <span className="bg-gradient-to-r from-sky-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Hospitals
              </span>
              <span className="text-emerald-500">.</span>
            </h1>
          </div>

          {/* Subtitle / Value Description */}
          <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
            Trusted by leading healthcare networks for reliable, medical-grade materials, rapid fulfillment, and uncompromising ISO-compliant quality standards.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-stretch sm:items-center pt-1">
            <button
              onClick={() => navigate('/products')}
              className="bg-black text-white px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold flex items-center justify-center gap-2 group hover:bg-slate-800 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white/90 border border-slate-200 hover:border-slate-400 text-slate-900 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-xs hover:bg-white transition-all text-center hover:scale-[1.02] active:scale-[0.98]"
            >
              Partner With Us
            </button>
          </div>

          {/* Value Proposition Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4 pt-6 border-t border-slate-200/80">
            {/* 1. ISO Certified */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50/90 border border-blue-100/90 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">ISO 9001 Certified</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">Quality you can trust</p>
              </div>
            </div>

            {/* 2. Fast Delivery */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50/90 border border-blue-100/90 flex items-center justify-center shrink-0">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">Fast & Reliable Delivery</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">On-time, every time</p>
              </div>
            </div>

            {/* 3. Dedicated Support */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50/90 border border-blue-100/90 flex items-center justify-center shrink-0">
                <Headphones className="w-5 h-5 text-blue-600" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-tight">Dedicated Support</h4>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-tight">Here for you 24/7</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Hero Laboratory & Hospital Supplies Visual with Floating Metric Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center"
        >
          {/* Main Visual Frame */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[16/11] rounded-5xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl">
            <img
              src={herosecImg}
              alt="Medical Scientist inspecting sterile pharmaceutical supplies in sterile hospital laboratory"
              className="w-full h-full object-cover object-center"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {/* Soft Ambient Depth Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

            {/* Subtle Laboratory Watermark Tag */}
            <div className="absolute bottom-4 left-6 text-white/80 font-mono text-[10px] uppercase tracking-widest pointer-events-none drop-shadow-xs">
              Sterile Supplies • Cleanroom Grade A
            </div>
          </div>

          {/* Floating Pill Card 1: Top Right - LIVE TRIALS (142+) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 right-2 sm:-top-5 sm:right-4 md:-top-6 md:right-6 bg-white/95 backdrop-blur-xl border-2 border-emerald-300/90 p-3.5 sm:p-5 rounded-3xl shadow-xl shadow-emerald-500/10 z-20 transition-all hover:scale-105 min-w-[130px] sm:min-w-[150px]"
          >
            <div className="flex items-center gap-1.5 text-emerald-600 pb-0.5">
              <Activity className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700">Live Trials</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
              60+
            </div>
          </motion.div>

          {/* Floating Pill Card 2: Center Left - FDA APPROVED (28) */}
          {/* <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-1/2 -left-2 sm:-left-4 md:-left-6 -translate-y-1/2 bg-white/95 backdrop-blur-xl border-2 border-blue-300/90 p-3.5 sm:p-5 rounded-3xl shadow-xl shadow-blue-500/10 z-20 transition-all hover:scale-105 min-w-[130px] sm:min-w-[145px]"
          >
            <div className="flex items-center gap-1.5 text-blue-600 pb-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600">FDA Approved</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
              28
            </div>
          </motion.div> */}

          {/* Floating Pill Card 3: Bottom Right - HOSPITALS SERVED (500+) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute -bottom-3 right-2 sm:-bottom-5 sm:right-4 md:-bottom-6 md:right-6 bg-white/95 backdrop-blur-xl border-2 border-emerald-300/90 p-3.5 sm:p-5 rounded-3xl shadow-xl shadow-emerald-500/10 z-20 transition-all hover:scale-105 min-w-[140px] sm:min-w-[170px]"
          >
            <div className="flex items-center gap-1.5 text-emerald-600 pb-0.5">
              <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-700">Hospitals Served</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-slate-900 tracking-tight">
              5+
            </div>
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
              <span className="font-display text-2xl md:text-3xl font-bold opacity-30">GLOBAL INNOVATION AWARD 2025</span>
              <span className="w-3 h-3 rounded-full bg-slate-300 hidden sm:inline-block" />
              <span className="font-display text-2xl md:text-3xl font-bold opacity-30">ISO 9001 CERTIFIED</span>
              <span className="w-3 h-3 rounded-full bg-slate-300 hidden sm:inline-block" />
              <span className="font-display text-2xl md:text-3xl font-bold opacity-30">SUSTAINABLE PHARMA LEADER</span>
              <span className="w-3 h-3 rounded-full bg-slate-300 hidden sm:inline-block" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Products & Services Carousel Section */}
      <ClinicalTrialsCarousel />

      {/* Why Us / The MASS Medical Difference Section */}
      <WhyUs />

      {/* Clinical Trials List */}
      {/* <section className="space-y-12">
        <h2 className="font-display text-5xl font-bold tracking-tighter">Supplies & Services Ecosystem</h2>
        <div className="space-y-4">
          {[
            { id: '01', title: 'Syringe Pump', phase: '', status: 'Products' },
            { id: '02', title: 'Infusion Pump', phase: '', status: 'Products' },
            { id: '03', title: 'BiPAP Machine', phase: '', status: 'Products' },
            { id: '04', title: 'Oxygen Concentrator', phase: '', status: 'Products' },
            { id: '05', title: 'Ventilator', phase: '', status: 'Products' },
            { id: '06', title: 'Beds', phase: '', status: 'Products' },
            { id: '07', title: 'Linens (Bedsheets, Pillow Covers, Blankets)', phase: '', status: 'Products' },
            { id: '08', title: 'ICU Setup at Home', phase: '', status: 'Products' },
            { id: '09', title: 'Bulk Masks', phase: '', status: 'Products' },
            { id: '10', title: 'Complete Hospital Setup', phase: '', status: 'Products' },
            { id: '11', title: 'NABH', phase: '', status: 'Services' },
            { id: '12', title: 'Oxygen Cylinders', phase: '', status: 'Products' },
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
                  trial.status === 'Products' ? "bg-emerald-100 text-emerald-700" :
                    trial.status === 'Services' ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"
                )}>
                  {trial.status}
                </span>
                <button
                  onClick={() => alert(`Opening details for ${trial.title}...`)}
                  className="glass px-6 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black hover:text-white"
                >

                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* Science & R&D Bento Grid */}
      <section id="healthcare-solutions" className="space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-slate-200/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-[0.25em]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              HEALTHCARE SOLUTIONS
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.02]">
              Complete Care Solutions.
            </h2>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            From critical-care equipment to complete hospital setups, we provide reliable medical equipment and essential healthcare supplies for hospitals, clinics, nursing homes, and home-care patients.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Main Card — Left (Featured Critical Care Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-5xl p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-2xl border-2 border-slate-800 relative group"
          >
            {/* Background Glows & Accent Watermark */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase">
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                  Critical Care
                </div>
                <span className="text-xs font-mono text-slate-400 tracking-wider">ICU GRADE</span>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                  Critical Care & Medical Equipment
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Reliable equipment for critical care, respiratory support, and patient monitoring.
                </p>
              </div>

              {/* Equipment Items Badges / List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                  Featured Equipment Categories
                </div>
                <div className="flex flex-wrap gap-2">
                  {criticalEquipment.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 backdrop-blur-md transition-all shadow-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Callout */}
            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between relative z-10">
              <span className="text-xs font-medium text-slate-400">Precision Calibrated • High Uptime</span>
              <button
                onClick={() => navigate('/products')}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-200"
                aria-label="View critical care equipment"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          {/* Right Side 3-Card Structured Grid */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Top-Right Card — Complete Hospital Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/90 backdrop-blur-xl rounded-5xl p-8 sm:p-9 border-2 border-emerald-400 hover:border-slate-300/95 transition-all duration-300 shadow-xl shadow-slate-200/40 relative overflow-hidden group flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-60 h-60 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50/80 px-3 py-1 rounded-full border border-emerald-200">
                    End-to-End Setup
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                    Complete Hospital Solutions
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    From individual equipment to end-to-end hospital setup, we help healthcare facilities source the essential equipment, beds, linens, consumables, and infrastructure they need.
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-700 relative z-10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Infrastructure • Beds & Linens • Consumables</span>
                </div>
                <button
                  onClick={() => navigate('/services')}
                  className="inline-flex items-center gap-1.5 text-slate-900 font-bold hover:text-emerald-600 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Bottom Row: 2 Cards (Bottom-Left & Bottom-Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Bottom-Left Card — Home ICU & Patient Care */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/90 backdrop-blur-xl rounded-5xl p-7 sm:p-8 border-2 border-sky-400 hover:border-slate-300/90 transition-all duration-300 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-sky-50 border border-sky-200/80 flex items-center justify-center text-sky-600">
                      <HomeIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                      ICU Setup at Home
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Home ICU & Patient Care
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Hospital beds, respiratory support equipment, oxygen solutions, linens, and essential care equipment delivered for home-based patient care.
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700 relative z-10">
                  <span>Home Delivery & Setup</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>

              {/* Bottom-Right Card — Quality. Compliance. Reliability. */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/90 backdrop-blur-xl rounded-5xl p-7 sm:p-8 border-2 border-emerald-400 hover:border-slate-300/90 transition-all duration-300 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-emerald-700">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      NABH-Ready Solutions
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      Quality. Compliance. Reliability.
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      Equipment and healthcare supplies selected with quality, safety, documentation, and hospital standards in mind.
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700 relative z-10">
                  <span>100% Standard Compliant</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

    </div>
  );
};
