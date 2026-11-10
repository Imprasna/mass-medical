import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import {
  FlaskConical, ClipboardList, Activity,
  Droplet,
  Wind,
  HeartPulse,
  Bed,
  Layers,
  Home,
  ShieldCheck,
  Building2,
  Award,
  Cylinder, HeartHandshake, ArrowRight
} from 'lucide-react';
import { PatientPortalModal } from '../components/PatientPortalModal';
import syringePumpImg from '../assets/images/syringe_pump.png';
import infusionPumpImg from '../assets/images/Infusion_Pump.png';
import BiPAPMachineImg from '../assets/images/BiPAP_Machine.png';
import oxygenConcentratorImg from '../assets/images/oc.png';
import ventilatorImg from '../assets/images/ventilator.png';
import bedImg from '../assets/images/beds.png';
import linenImg from '../assets/images/lenins.png';
import icuSetupImg from '../assets/images/ICU_setup.png';
import maskImg from '../assets/images/masks.png';
import hospitalSetupImg from '../assets/images/hospital_setup.png';
import nabhImg from '../assets/images/nabh.png';
import oxygenCylinderImg from '../assets/images/o2cylinders.png';
import servicesImg from '../assets/images/services.png';
import UncompromisingQualityImg from '../assets/images/uncompromisingQuality.png';

const services = [
  {
    id: '01',
    title: 'Syringe Pump',
    icon: Activity,
    image: syringePumpImg
  },
  {
    id: '02',
    title: 'Infusion Pump',
    icon: Droplet,
    image: infusionPumpImg
  },
  {
    id: '03',
    title: 'BiPAP Machine',
    icon: Wind,
    image: BiPAPMachineImg
  },
  {
    id: '04',
    title: 'Oxygen Concentrator',
    icon: Wind,
    image: oxygenConcentratorImg
  },
  {
    id: '05',
    title: 'Ventilator',
    icon: HeartPulse,
    image: ventilatorImg
  },
  {
    id: '06',
    title: 'Beds',
    icon: Bed,
    image: bedImg
  },
  {
    id: '07',
    title: 'Linens (Bedsheets, Pillow Covers, Blankets)',
    icon: Layers,
    image: linenImg
  },
  {
    id: '08',
    title: 'ICU Setup at Home',
    icon: Home,
    image: icuSetupImg
  },
  {
    id: '09',
    title: 'Bulk Masks',
    icon: ShieldCheck,
    image: maskImg
  },
  {
    id: '10',
    title: 'Complete Hospital Setup',
    icon: Building2,
    image: hospitalSetupImg
  },
  {
    id: '11',
    title: 'NABH Accreditation Consultancy',
    icon: Award,
    image: nabhImg
  },
  {
    id: '12',
    title: 'Oxygen Cylinders',
    icon: Cylinder,
    image: oxygenCylinderImg
  }
];

export const Services = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);

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
          Comprehensive <br className="hidden sm:block" /> Medical Solutions.
        </motion.h1>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative h-[400px] md:h-[500px] rounded-5xl overflow-hidden glass"
      >
        <img
          src={servicesImg}
          alt="Excellence in Every Molecule"
          className="w-full h-full object-cover opacity-70"
          loading="lazy"
          decoding="async"
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
        {services?.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-5xl overflow-hidden grid lg:grid-cols-2 group"
          >
            {/* Content Side (Drives height) */}
            <div className="p-8 md:p-12 lg:p-16 space-y-6 md:space-y-8 flex flex-col justify-between items-start">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black text-white rounded-2xl flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <span className="font-display text-3xl md:text-4xl font-bold text-black/10">{service.id}</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tighter">{service.title}</h2>

              <button
                onClick={() => setIsPortalOpen(true)}
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 group/btn hover:scale-105 transition-transform"
              >
                Consultation <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Image Side (Matches content height) */}
            <div className="relative min-h-[250px] lg:min-h-0 lg:h-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                loading="lazy"
                decoding="async"
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
              Every product and equipment solution we supply undergoes strict quality assurance to ensure flawless clinical performance. We source exclusively from certified manufacturers to deliver reliable, hospital-grade inventory that meets rigorous healthcare regulatory standards and keeps your medical operations running smoothly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">ISO 13485</div>
              <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">CE Certified</div>
              <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">CDSCO Approved</div>
              <div className="glass px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest">Quality Assured</div>
            </div>
          </div>
          <div className="aspect-video rounded-4xl overflow-hidden shadow-2xl">
            <img
              src={UncompromisingQualityImg}
              alt="Uncompromising Quality Control"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full -ml-48 -mt-48" />
      </section>

      {/* Global Impact Section */}
      {/* <section className="space-y-12">
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
      </section> */}

      <PatientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
};