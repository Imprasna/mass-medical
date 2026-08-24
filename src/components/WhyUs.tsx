import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    ShieldCheck,
    Zap,
    Target,
    Sparkles,
    Users,
    Award,
    Leaf,
    ArrowUpRight,
    CheckCircle2,
    Activity,
    Globe2,
    Layers,
    Microscope,
    TrendingUp,
    Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface WhyUsPillar {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    metric: string;
    metricLabel: string;
    icon: React.ElementType;
    borderColor: string;
    accentBg: string;
    accentText: string;
    badge: string;
    bullets: string[];
}

const pillars: WhyUsPillar[] = [
    {
        id: 'precision',
        title: 'Precision Molecular Modeling',
        subtitle: 'AI-grounded genomic target discovery',
        category: 'Innovation',
        description: 'We leverage proprietary machine-learning neural networks to simulate molecular docking at atomic resolution, drastically cutting discovery cycles.',
        metric: '4.8x',
        metricLabel: 'Faster Target Discovery',
        icon: Target,
        borderColor: 'border-blue-300/80 hover:border-blue-500',
        accentBg: 'bg-blue-500/10',
        accentText: 'text-blue-600',
        badge: 'AI Molecular Engine',
        bullets: [
            'Atomic-level conformation simulation',
            'Sub-nanomolar affinity profiling',
            'Minimization of off-target toxicity'
        ]
    },
    {
        id: 'safety',
        title: 'Uncompromised Clinical Rigor',
        subtitle: 'Exceeding FDA & EMA global standards',
        category: 'Safety & Trust',
        description: 'Our multi-tier verification and real-time biometric telemetry ensure every clinical phase operates with pristine safety protocols.',
        metric: '99.4%',
        metricLabel: 'Trial Safety Compliance',
        icon: ShieldCheck,
        borderColor: 'border-emerald-300/80 hover:border-emerald-500',
        accentBg: 'bg-emerald-500/10',
        accentText: 'text-emerald-600',
        badge: 'Gold Standard Audit',
        bullets: [
            'Real-time adverse event telemetry',
            'Triple-blind randomized cohorts',
            'Automated regulatory compliance'
        ]
    },
    {
        id: 'bedside',
        title: 'Zero-Latency Bedside Delivery',
        subtitle: 'Connecting lab discoveries to treatment wings',
        category: 'Speed & Access',
        description: 'By co-locating discovery labs with specialized clinical centers, we eliminate traditional commercial latency, getting therapies to patients faster.',
        metric: '< 90d',
        metricLabel: 'Lab-to-Clinic Turnaround',
        icon: Zap,
        borderColor: 'border-amber-300/80 hover:border-amber-500',
        accentBg: 'bg-amber-500/10',
        accentText: 'text-amber-600',
        badge: 'Fast-Track Protocol',
        bullets: [
            'Direct decentralized clinical network',
            'Cold-chain logistical precision',
            'Patient-first compassionate access'
        ]
    },
    {
        id: 'advocacy',
        title: 'Human-First Patient Advocacy',
        subtitle: 'Independent patient oversight on all trials',
        category: 'Ethics & Care',
        description: 'Every clinical protocol is co-designed and monitored alongside patient advocacy groups, prioritizing dignity, equity, and holistic well-being.',
        metric: '100%',
        metricLabel: 'Independent Ethics Review',
        icon: Users,
        borderColor: 'border-purple-300/80 hover:border-purple-500',
        accentBg: 'bg-purple-500/10',
        accentText: 'text-purple-600',
        badge: 'Compassionate Care',
        bullets: [
            'Comprehensive caregiver support grants',
            'Transparent milestone reporting',
            'Lifetime post-trial follow-up'
        ]
    },
    {
        id: 'sustainability',
        title: 'Sustainable Green Chemistry',
        subtitle: 'Zero hazardous solvent footprint',
        category: 'Responsibility',
        description: 'Our closed-loop synthesis protocols utilize bio-catalytic enzymatic pathways, reducing hazardous waste output by over 85% compared to legacy pharma.',
        metric: '85%',
        metricLabel: 'Waste Reduction vs Industry',
        icon: Leaf,
        borderColor: 'border-teal-300/80 hover:border-teal-500',
        accentBg: 'bg-teal-500/10',
        accentText: 'text-teal-600',
        badge: 'Carbon Neutral R&D',
        bullets: [
            '100% bio-derived enzymatic syntheses',
            'Recyclable cold-storage packaging',
            'Solar-powered cleanroom labs'
        ]
    },
    {
        id: 'network',
        title: 'Global Research Collaborative',
        subtitle: '120+ partnered institutions in 42 countries',
        category: 'Global Network',
        description: 'A borderless scientific alliance spanning leading universities, oncological institutes, and genomic sequencing centers worldwide.',
        metric: '120+',
        metricLabel: 'Partner Academic Centers',
        icon: Globe2,
        borderColor: 'border-indigo-300/80 hover:border-indigo-500',
        accentBg: 'bg-indigo-500/10',
        accentText: 'text-indigo-600',
        badge: 'Worldwide Alliance',
        bullets: [
            'Harmonized cross-border trial data',
            'Shared computational molecular clusters',
            'Diverse multi-ethnic genomic datasets'
        ]
    }
];

const categoryFilters = ['All Pillars', 'Innovation', 'Safety & Trust', 'Speed & Access', 'Ethics & Care', 'Responsibility'];

export const WhyUs = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All Pillars');
    const [expandedPillar, setExpandedPillar] = useState<string | null>(null);

    const filteredPillars = activeCategory === 'All Pillars'
        ? pillars
        : pillars.filter(p => p.category === activeCategory);

    return (
        <section id="why-us" className="space-y-12 sm:space-y-16">
            {/* Section Header */}
            {/* <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-black/5 pb-8">
                <div className="space-y-4 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/60 text-xs font-bold uppercase tracking-[0.25em]"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        Why Choose MASS MedCare
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gradient leading-[0.95]"
                    >
                        Redefining Care <br className="hidden sm:block" /> Through Precision.
                    </motion.h2>
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed max-w-xl">
                        We eliminate the traditional compromises between scientific velocity and patient safety. Here is why the world's premier clinicians, research hospitals, and patients place their trust in our therapies.
                    </p>
                </div>

                
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-auto bg-white/90 backdrop-blur-xl border border-slate-200/90 hover:border-slate-300 p-6 sm:p-7 rounded-4xl shadow-lg shadow-black/[0.03] space-y-4"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold font-display text-sm">
                            PN
                        </div>
                        <div>
                            <h4 className="font-bold text-sm">The MASS MedCare Standard</h4>
                            <p className="text-xs text-black/40">Verified by 3rd-party clinical audits</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t border-black/5">
                        <div>
                            <div className="text-2xl sm:text-3xl font-display font-bold text-blue-600">3.2x</div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-black/50">Response Rate</div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-display font-bold text-emerald-600">0</div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-black/50">Recalls in History</div>
                        </div>
                    </div>
                </motion.div>
            </div> */}

            {/* Category Pills Filter */}
            {/* <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
                {categoryFilters.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            "px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 border",
                            activeCategory === cat
                                ? "bg-black text-white border-black shadow-md"
                                : "bg-white/80 text-black/60 border-slate-200/90 hover:border-slate-400 hover:text-black"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div> */}

            {/* Bento Grid Layout for Why Us */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {activeCategory === 'All Pillars' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white/95 via-white/85 to-blue-50/40 backdrop-blur-xl border-2 border-blue-200/90 hover:border-blue-400 rounded-5xl p-8 sm:p-10 md:p-12 relative overflow-hidden shadow-xl shadow-blue-500/5 group flex flex-col justify-between"
                    >
                       
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none group-hover:scale-125 transition-transform duration-700" />

                        <div className="space-y-6 relative z-10">
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <span className="px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-[11px] font-bold uppercase tracking-widest">
                                    Core Differentiator
                                </span>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                    <Activity className="w-3.5 h-3.5 animate-pulse" /> Live in 40+ Medical Centers
                                </div>
                            </div>

                            <div className="space-y-3 max-w-xl">
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 leading-tight">
                                    Integrated Multi-Omics & Next-Gen Synthesis
                                </h3>
                                <p className="text-base sm:text-lg text-black/70 leading-relaxed">
                                    Unlike traditional pharmaceutical pipelines that isolate biology, chemistry, and clinical validation into silos, MASS MedCare combines genomic sequencing, computational chemistry, and real-world clinical telemetry under one unified framework.
                                </p>
                            </div>

                            
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                <div className="bg-white/90 border border-slate-200/90 p-4 rounded-3xl space-y-1 shadow-sm">
                                    <div className="flex items-center gap-1.5 text-blue-600 text-xs font-bold">
                                        <Microscope className="w-4 h-4" /> Synthesis Speed
                                    </div>
                                    <div className="text-2xl font-display font-bold text-slate-900">4.8x</div>
                                    <div className="text-[11px] text-black/50">Faster candidate discovery</div>
                                </div>

                                <div className="bg-white/90 border border-slate-200/90 p-4 rounded-3xl space-y-1 shadow-sm">
                                    <div className="flex items-center gap-1.5 text-emerald-600 text-xs font-bold">
                                        <ShieldCheck className="w-4 h-4" /> Safety Benchmark
                                    </div>
                                    <div className="text-2xl font-display font-bold text-slate-900">99.4%</div>
                                    <div className="text-[11px] text-black/50">Phase I & II safety index</div>
                                </div>

                                <div className="bg-white/90 border border-slate-200/90 p-4 rounded-3xl space-y-1 shadow-sm">
                                    <div className="flex items-center gap-1.5 text-purple-600 text-xs font-bold">
                                        <Globe2 className="w-4 h-4" /> Global Reach
                                    </div>
                                    <div className="text-2xl font-display font-bold text-slate-900">120+</div>
                                    <div className="text-[11px] text-black/50">Hospital partners worldwide</div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/5 mt-6">
                            <div className="flex items-center gap-3 text-xs font-bold text-black/60">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
                                Continuous AI-Assisted Patient Telemetry
                            </div>
                            <button
                                onClick={() => navigate('/research')}
                                className="w-full sm:w-auto bg-black text-white px-6 py-3 rounded-full font-bold text-xs flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                            >
                                Explore Research Pipeline <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}

                
                {filteredPillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    const isExpanded = expandedPillar === pillar.id;

                    return (
                        <motion.div
                            key={pillar.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            onClick={() => setExpandedPillar(isExpanded ? null : pillar.id)}
                            className={cn(
                                "bg-white/85 backdrop-blur-xl border-2 rounded-5xl p-7 sm:p-8 flex flex-col justify-between group cursor-pointer transition-all duration-300 shadow-md shadow-black/[0.02] relative overflow-hidden",
                                pillar.borderColor,
                                isExpanded ? "ring-2 ring-black/10 scale-[1.01]" : "hover:-translate-y-1"
                            )}
                        >
                            
                            <div className="space-y-6">
                                <div className="flex items-center justify-between gap-3">
                                    <div className={cn(
                                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm border border-black/5",
                                        pillar.accentBg,
                                        pillar.accentText
                                    )}>
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-black/5 text-black/60 border border-black/5">
                                        {pillar.badge}
                                    </span>
                                </div>

                                
                                <div className="space-y-2">
                                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight leading-snug">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs font-bold uppercase tracking-wider text-black/40">
                                        {pillar.subtitle}
                                    </p>
                                    <p className="text-sm text-black/70 leading-relaxed pt-1">
                                        {pillar.description}
                                    </p>
                                </div>

                                
                                <div className="space-y-2 pt-2 border-t border-slate-100">
                                    {pillar.bullets.map((bullet, bIdx) => (
                                        <div key={bIdx} className="flex items-center gap-2.5 text-xs text-black/75 font-medium">
                                            <CheckCircle2 className={cn("w-3.5 h-3.5 shrink-0", pillar.accentText)} />
                                            <span>{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                         
                            <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                                <div>
                                    <div className={cn("text-2xl sm:text-3xl font-display font-bold leading-none", pillar.accentText)}>
                                        {pillar.metric}
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-wider text-black/40 mt-1">
                                        {pillar.metricLabel}
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        alert(`Exploring details for ${pillar.title}...`);
                                    }}
                                    className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-black group-hover:text-white flex items-center justify-center transition-all"
                                    aria-label={`Learn more about ${pillar.title}`}
                                >
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </div> */}

            {/* Bottom Trust & Comparison Strip */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-xl border-2 border-slate-400 hover:border-slate-300 rounded-5xl p-8 sm:p-10 shadow-lg shadow-black/[0.03]"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="space-y-2 md:col-span-1 border-b md:border-b-0 md:border-r border-slate-200/80 pb-6 md:pb-0 md:pr-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/40">Our Commitment</span>
                        <h4 className="text-2xl font-display font-bold">Built on Quality. Driven by Care.</h4>
                        <p className="text-xs text-black/60 leading-relaxed">
                            Every product and solution we provide is selected with quality, reliability, and patient care in mind—so hospitals, clinics, and families can count on the right equipment when it matters most.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:col-span-2 gap-4 sm:gap-6">
                        <div className="space-y-1">
                            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Speed</div>
                            <div className="text-xl sm:text-2xl font-display font-bold">4.8x</div>
                            <p className="text-[11px] text-black/50">Pipeline velocity</p>
                        </div>

                        <div className="space-y-1">
                            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Quality</div>
                            <div className="text-xl sm:text-2xl font-display font-bold">100%</div>
                            <p className="text-[11px] text-black/50">Batch consistency</p>
                        </div>

                        <div className="space-y-1 col-span-2 sm:col-span-1">
                            <div className="text-xs font-bold text-purple-600 uppercase tracking-wider">Access</div>
                            <div className="text-xl sm:text-2xl font-display font-bold">24/7</div>
                            <p className="text-[11px] text-black/50">Patient care hotline</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
