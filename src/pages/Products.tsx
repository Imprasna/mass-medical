import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';
import { Pill, Activity, Brain, Heart, Shield, Info, X, CheckCircle2 } from 'lucide-react';
import { PatientPortalModal } from '../components/PatientPortalModal';

const products = [
  {
    id: 'prod-01',
    name: 'Neuro-Regen V3',
    category: 'Neurology',
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000',
    description: 'A breakthrough cognitive support therapy designed to enhance neural plasticity and memory retention in early-stage degenerative conditions.',
    specs: {
      dosage: '10mg / Daily',
      form: 'Oral Capsule',
      storage: '15-25°C',
      halfLife: '12 Hours'
    },
    benefits: [
      'Enhanced synaptic connectivity',
      'Reduced neuro-inflammation',
      'Improved cognitive focus',
      'Long-term safety profile'
    ]
  },
  {
    id: 'prod-02',
    name: 'Onco-Shield Plus',
    category: 'Oncology',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=1000',
    description: 'Targeted immunotherapy that assists the body\'s natural defenses in identifying and neutralizing malignant cellular growths.',
    specs: {
      dosage: 'IV Infusion',
      form: 'Liquid Concentrate',
      storage: '2-8°C (Refrigerated)',
      halfLife: '14 Days'
    },
    benefits: [
      'High target specificity',
      'Minimal systemic toxicity',
      'Synergistic with chemo',
      'Adaptive immune response'
    ]
  },
  {
    id: 'prod-03',
    name: 'Cardio-Sync Pro',
    category: 'Cardiology',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1000',
    description: 'Advanced molecular stabilizer for cardiac rhythm management and arterial health optimization.',
    specs: {
      dosage: '5mg / Twice Daily',
      form: 'Film-coated Tablet',
      storage: 'Room Temp',
      halfLife: '8 Hours'
    },
    benefits: [
      'Rhythm stabilization',
      'Arterial wall support',
      'Reduced oxidative stress',
      'Rapid absorption'
    ]
  }
];

export const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">
      <SEO 
        title="Products" 
        description="Discover our range of advanced therapeutic solutions and precision therapeutics backed by rigorous scientific research." 
      />
      <header className="max-w-3xl space-y-6 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-black/40"
        >
          Product Catalog
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none"
        >
          Precision <br className="hidden sm:block" /> Therapeutics.
        </motion.h1>
      </header>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative h-[300px] md:h-[400px] rounded-5xl overflow-hidden glass"
      >
        <img 
          src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1600" 
          alt="Our Products" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center p-8 md:p-16">
          <div className="max-w-md text-white space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter">Science-Backed Care</h2>
            <p className="text-white/80 text-sm md:text-base">Discover our range of advanced therapeutic solutions designed to improve outcomes and quality of life.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-5xl overflow-hidden group cursor-pointer flex flex-col"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="h-48 sm:h-64 overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                {product.category}
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shrink-0">
                    <product.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight">{product.name}</h3>
                </div>
                <p className="text-black/60 line-clamp-2 text-sm">{product.description}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProduct(product);
                }}
                className="w-full mt-4 py-3 sm:py-4 rounded-2xl border border-black/5 font-bold text-xs sm:text-sm group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center gap-2"
              >
                View Specifications <Info className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass rounded-5xl overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 glass p-2 sm:p-3 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 h-6" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="h-[300px] sm:h-[400px] lg:h-auto">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 sm:p-12 space-y-6 sm:space-y-8">
                  <div className="space-y-2">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/40">{selectedProduct.category}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tighter">{selectedProduct.name}</h2>
                  </div>
                  
                  <p className="text-black/60 text-sm sm:text-base leading-relaxed">{selectedProduct.description}</p>

                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-black/40">{key}</p>
                        <p className="font-bold text-xs sm:text-sm">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold text-xs sm:text-sm uppercase tracking-widest">Key Benefits</h4>
                    <div className="grid gap-2 sm:gap-3">
                      {selectedProduct.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3 text-xs sm:text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsPortalOpen(true)}
                    className="w-full bg-black text-white py-4 sm:py-5 rounded-2xl font-bold text-sm sm:text-base"
                  >
                    Request Product Monograph
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <PatientPortalModal 
        isOpen={isPortalOpen} 
        onClose={() => setIsPortalOpen(false)} 
      />
    </div>
  );
};
