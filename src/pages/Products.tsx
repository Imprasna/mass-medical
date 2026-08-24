import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Activity,
  Wind,
  HeartPulse,
  Zap,
  Info,
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  FileText,
  Send,
  Phone,
  User,
  Mail,
  Building2,
  Sparkles,
  Layers,
  ChevronRight,
  Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import syringePumpImg from '../assets/images/syringe_pump.png';
import infusionPumpImg from '../assets/images/Infusion_Pump.png';
import BiPAPMachineImg from '../assets/images/BiPAP_Machine.png';
import ventilatorImg from '../assets/images/ventilator.png';
import patientmoniterImg from '../assets/images/patientmoniter.png';
import cpapImg from '../assets/images/cpap.png';

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  filterCategory: string;
  tagline: string;
  icon: React.ElementType;
  image: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  footnote?: string;
}

const products: ProductItem[] = [
  {
    id: 'prod-syringe-pump',
    name: 'Syringe Pump',
    category: 'INFUSION & SYRINGE THERAPY',
    filterCategory: 'Infusion Therapy',
    tagline: 'Accurate and controlled medication delivery for critical care, hospitals, and clinical settings.',
    icon: Zap,
    image: syringePumpImg,
    description: 'A precision infusion device designed to deliver medications and fluids accurately and consistently through a syringe. Suitable for critical care, anesthesia, neonatal, and general clinical applications.',
    specs: [
      { label: 'Delivery', value: 'Programmable syringe-based infusion' },
      { label: 'Flow Rate', value: 'Model-dependent' },
      { label: 'Syringe Compatibility', value: 'Multiple standard syringe sizes' },
      { label: 'Operation', value: 'Continuous / programmable infusion' }
    ],
    benefits: [
      'High-precision fluid delivery',
      'Programmable infusion rates',
      'Clear and intuitive operation',
      'Suitable for critical-care applications'
    ]
  },
  {
    id: 'prod-infusion-pump',
    name: 'Infusion Pump',
    category: 'INFUSION THERAPY',
    filterCategory: 'Infusion Therapy',
    tagline: 'Reliable and precise fluid and medication infusion designed for safe and efficient patient care.',
    icon: Activity,
    image: infusionPumpImg,
    description: 'A reliable volumetric infusion system designed to deliver fluids, medications, and nutritional solutions at controlled rates. Built for consistent performance across hospital and clinical environments.',
    specs: [
      { label: 'Infusion Type', value: 'Volumetric / controlled infusion' },
      { label: 'Flow Rate', value: 'Model-dependent' },
      { label: 'Display', value: 'Digital monitoring interface' },
      { label: 'Safety', value: 'Occlusion and air-in-line detection*' }
    ],
    benefits: [
      'Controlled and consistent infusion',
      'Accurate flow-rate management',
      'Integrated safety monitoring',
      'Designed for continuous clinical use'
    ],
    footnote: '*Exact safety features vary by model.'
  },
  {
    id: 'prod-patient-monitor',
    name: 'Patient Monitor',
    category: 'PATIENT MONITORING',
    filterCategory: 'Patient Monitoring',
    tagline: 'Real-time monitoring of vital parameters to support informed clinical decisions and patient care.',
    icon: HeartPulse,
    image: patientmoniterImg,
    description: 'A comprehensive bedside monitoring system designed to provide continuous visibility of essential patient vital signs. Ideal for hospitals, ICUs, emergency departments, and critical-care environments.',
    specs: [
      { label: 'Parameters', value: 'ECG, SpO₂, NIBP, Temperature*' },
      { label: 'Display', value: 'High-resolution color display' },
      { label: 'Monitoring', value: 'Real-time vital-sign monitoring' },
      { label: 'Alarm System', value: 'Visual and audible patient alarms' }
    ],
    benefits: [
      'Continuous vital-sign monitoring',
      'Clear real-time patient data',
      'Configurable monitoring parameters',
      'Designed for critical-care environments'
    ],
    footnote: '*Additional parameters such as RESP, EtCO₂ and IBP are available depending on model.'
  },
  {
    id: 'prod-ventilator',
    name: 'Ventilator',
    category: 'CRITICAL CARE & RESPIRATORY SUPPORT',
    filterCategory: 'Respiratory Care',
    tagline: 'Reliable respiratory support with controlled ventilation for critical and intensive care environments.',
    icon: Wind,
    image: ventilatorImg,
    description: 'An advanced mechanical ventilation system designed to provide controlled respiratory support for patients requiring assisted or invasive ventilation. Suitable for ICU and critical-care applications.',
    specs: [
      { label: 'Ventilation', value: 'Invasive / assisted ventilation*' },
      { label: 'Modes', value: 'Multiple configurable ventilation modes' },
      { label: 'Monitoring', value: 'Real-time respiratory parameters' },
      { label: 'Safety', value: 'Integrated alarms and monitoring systems' }
    ],
    benefits: [
      'Precise respiratory support',
      'Multiple ventilation modes',
      'Continuous respiratory monitoring',
      'Comprehensive alarm management'
    ],
    footnote: '*Ventilation modes and capabilities vary by model.'
  },
  {
    id: 'prod-bipap',
    name: 'BiPAP Machine',
    category: 'NON-INVASIVE RESPIRATORY SUPPORT',
    filterCategory: 'Respiratory Care',
    tagline: 'Non-invasive respiratory support designed to assist breathing and deliver comfortable, controlled therapy.',
    icon: Wind,
    image: BiPAPMachineImg,
    description: 'A non-invasive respiratory support system that delivers two levels of positive airway pressure to assist breathing. Designed for patients requiring respiratory support without invasive ventilation.',
    specs: [
      { label: 'Therapy', value: 'Bi-level Positive Airway Pressure' },
      { label: 'Pressure', value: 'Independently adjustable IPAP & EPAP*' },
      { label: 'Interface', value: 'Compatible with appropriate patient masks' },
      { label: 'Monitoring', value: 'Therapy and respiratory monitoring*' }
    ],
    benefits: [
      'Non-invasive respiratory support',
      'Adjustable dual-pressure therapy',
      'Comfortable assisted breathing',
      'Suitable for clinical and home-care applications'
    ],
    footnote: '*Pressure range and monitoring features vary by model.'
  },
  {
    id: 'prod-cpap',
    name: 'CPAP Machine',
    category: 'SLEEP & RESPIRATORY THERAPY',
    filterCategory: 'Sleep Therapy',
    tagline: 'Consistent positive airway pressure support designed to help maintain clear airways during sleep.',
    icon: Wind,
    image: cpapImg,
    description: 'A continuous positive airway pressure system designed to provide a steady flow of pressurized air through a mask to help maintain airway patency during sleep. Commonly used for sleep-related breathing disorders.',
    specs: [
      { label: 'Therapy', value: 'Continuous Positive Airway Pressure' },
      { label: 'Pressure', value: 'Adjustable therapeutic pressure*' },
      { label: 'Interface', value: 'Compatible CPAP mask system' },
      { label: 'Operation', value: 'Continuous airflow delivery' }
    ],
    benefits: [
      'Consistent positive airway pressure',
      'Supports unobstructed airflow',
      'Designed for comfortable overnight use',
      'Suitable for home and clinical applications'
    ],
    footnote: '*Pressure range and comfort features vary by model.'
  }
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestName, setRequestName] = useState('');
  const [requestPhone, setRequestPhone] = useState('');
  const [requestEmail, setRequestEmail] = useState('');
  const [requestClinic, setRequestClinic] = useState('');
  const navigate = useNavigate();

  const categories = ['All', 'Infusion Therapy', 'Patient Monitoring', 'Respiratory Care', 'Sleep Therapy'];

  const filteredProducts = products.filter(
    (prod) => selectedCategory === 'All' || prod.filterCategory === selectedCategory
  );

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (requestEmail.trim() && requestName.trim()) {
      setRequestSubmitted(true);
      setTimeout(() => {
        setRequestSubmitted(false);
        setRequestName('');
        setRequestPhone('');
        setRequestEmail('');
        setRequestClinic('');
        setSelectedProduct(null);
      }, 3000);
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 sm:space-y-20">

      {/* Header Section */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          Medical Equipment & Infusion Catalog
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]"
        >
          ICU-Grade Medical Systems.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl"
        >
          Reliable infusion systems, multi-parameter vital monitors, and advanced respiratory equipment calibrated for hospitals, clinics, and home-care settings.
        </motion.p>
      </header>

      {/* Category Filter Pills Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-200/90">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1 hidden sm:inline-block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${selectedCategory === cat
                ? 'bg-slate-950 text-white shadow-sm'
                : 'bg-white/80 hover:bg-white text-slate-600 border border-slate-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="text-xs text-slate-500 font-mono">
          Showing <span className="font-bold text-slate-900">{filteredProducts.length}</span> Equipment Systems
        </div>
      </div>

      {/* 6 Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProducts.map((product, idx) => {
          const IconComponent = product.icon;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white/90 backdrop-blur-xl border border-slate-200/90 hover:border-emerald-400/80 rounded-4xl overflow-hidden group flex flex-col justify-between shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              {/* Product Visual Container */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider uppercase text-slate-800 shadow-xs border border-white/60">
                    {product.category}
                  </span>
                </div>

                {/* Device Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/90 backdrop-blur-sm flex items-center justify-center text-slate-950 shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-display font-bold tracking-tight text-white leading-tight">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body & Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">

                <div className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.tagline}
                  </p>

                  {/* 4 Key Specifications Box */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      KEY SPECIFICATIONS
                    </span>
                    <div className="space-y-1.5 text-xs">
                      {product.specs.slice(0, 3).map((spec) => (
                        <div key={spec.label} className="flex items-start justify-between gap-2">
                          <span className="text-slate-500 font-medium">{spec.label}:</span>
                          <span className="text-slate-900 font-semibold text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2 Key Benefits Highlights */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      KEY BENEFITS
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {product.benefits.slice(0, 2).map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* View Specifications Button */}
                <button
                  onClick={() => setSelectedProduct(product)}
                  type="button"
                  aria-label={`View full specifications for ${product.name}`}
                  className="w-full py-3.5 rounded-2xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Model-Neutral Technical Note Banner */}
      <div className="p-6 rounded-3xl bg-slate-900 text-slate-300 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1 max-w-2xl">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            Model-Specific Procurement Guidance
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            Need exact flow rate curves, battery backup specs, or custom brand-specific quotations (Mindray, B. Braun, ResMed, Philips)? Contact our biomedical procurement desk directly.
          </p>
        </div>
        <button
          onClick={() => navigate('/contact')}
          type="button"
          className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-all shrink-0 hover:scale-105 active:scale-95 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
        >
          Contact Biomedical Desk
        </button>
      </div>

      {/* Detailed Specifications Modal (Consistent Field Structure) */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProduct(null);
                setRequestSubmitted(false);
              }}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-product-title"
              className="relative w-full max-w-4xl bg-white rounded-4xl sm:rounded-5xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setRequestSubmitted(false);
                }}
                type="button"
                aria-label="Close product specifications modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/90 hover:bg-slate-100 text-slate-700 shadow-md border border-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">

                {/* Left Visual Banner (Col Span 5) */}
                <div className="lg:col-span-5 bg-slate-950 relative min-h-[220px] lg:min-h-full p-8 flex flex-col justify-between overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  <div className="relative z-10 space-y-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[10px] font-bold tracking-wider uppercase inline-block">
                      {selectedProduct.category}
                    </span>
                  </div>

                  <div className="relative z-10 space-y-2 text-white pt-12">
                    <h2 id="modal-product-title" className="text-2xl sm:text-3xl font-display font-bold tracking-tight">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {selectedProduct.tagline}
                    </p>
                  </div>
                </div>

                {/* Right Specification Data (Col Span 7) */}
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-7">

                  {/* Structure: CATEGORY -> PRODUCT NAME -> DESCRIPTION */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-700">
                      {selectedProduct.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-slate-900">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed pt-1">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* 4 KEY SPECIFICATIONS */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-emerald-600" />
                      KEY SPECIFICATIONS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProduct.specs.map((spec) => (
                        <div key={spec.label} className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 space-y-0.5">
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 block">
                            {spec.label}
                          </span>
                          <span className="text-xs font-bold text-slate-900 block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4 KEY BENEFITS */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      KEY BENEFITS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedProduct.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footnote if exists */}
                  {selectedProduct.footnote && (
                    <p className="text-[11px] font-mono text-slate-400 italic">
                      {selectedProduct.footnote}
                    </p>
                  )}

                  {/* CTA Section: Request Product Details */}
                  <div className="pt-2 border-t border-slate-200/80">
                    {requestSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1"
                      >
                        <div className="flex items-center justify-center gap-2 text-emerald-800 font-bold text-sm">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          Product Details & Quote Dispatched!
                        </div>
                        <p className="text-xs text-emerald-700">
                          Our clinical equipment specialist will send documentation and pricing within 2 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleRequestSubmit} className="space-y-3.5">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block">
                            Request Quotation & Specifications
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {/* Customer Name */}
                          <div className="relative">
                            <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              required
                              value={requestName}
                              onChange={(e) => setRequestName(e.target.value)}
                              placeholder="Your Full Name *"
                              aria-label="Your Full Name"
                              className="w-full bg-slate-100/90 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>

                          {/* Contact Number */}
                          <div className="relative">
                            <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="tel"
                              required
                              value={requestPhone}
                              onChange={(e) => setRequestPhone(e.target.value)}
                              placeholder="Contact Number *"
                              aria-label="Contact Number"
                              className="w-full bg-slate-100/90 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>

                          {/* Email Address */}
                          <div className="relative">
                            <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="email"
                              required
                              value={requestEmail}
                              onChange={(e) => setRequestEmail(e.target.value)}
                              placeholder="Email Address *"
                              aria-label="Email Address"
                              className="w-full bg-slate-100/90 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>

                          {/* Clinic / Hospital Name */}
                          <div className="relative">
                            <Building2 className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              required
                              value={requestClinic}
                              onChange={(e) => setRequestClinic(e.target.value)}
                              placeholder="Clinic / Hospital Name *"
                              aria-label="Clinic or Hospital Name"
                              className="w-full bg-slate-100/90 border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          aria-label={`Request product details for ${selectedProduct.name}`}
                          className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-98 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                          <Send className="w-4 h-4" />
                          <span>Request Product Details</span>
                        </button>
                      </form>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
