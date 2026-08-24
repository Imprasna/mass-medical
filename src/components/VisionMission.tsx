import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Eye,
    Compass,
    Target,
    Sparkles,
    HeartHandshake,
    ShieldCheck,
    Zap,
    Globe2,
    CheckCircle2,
    ArrowRight,
    Lightbulb,
    Dna,
    Microscope
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export const VisionMission = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'vision' | 'mission'>('all');
    const [selectedPillar, setSelectedPillar] = useState<number>(0);

    const pillars = [
        {
            id: 0,
            title: 'CARE',
            category: '',
            icon: ShieldCheck,
            color: 'blue',
            summary: 'Championing patient dignity, full genomic privacy, and voluntary transparency in every protocol.',
            points: []
        },
        {
            id: 1,
            title: 'TRUST',
            category: '',
            icon: Globe2,
            color: 'emerald',
            summary: 'Breaking geographic boundaries so life-altering therapies reach underserved regions in real-time.',
            points: []
        },
        {
            id: 2,
            title: 'QUALITY',
            category: '',
            icon: Zap,
            color: 'amber',
            summary: 'Compressing standard 10-year drug development pipelines into agile, hyper-targeted sprint cycles.',
            points: []
        },
        {
            id: 3,
            title: 'RELIABILITY',
            category: '',
            icon: Dna,
            color: 'purple',
            summary: 'Engineering therapies calibrated to the individual mutation rather than broad disease categories.',
            points: []
        },
        {
            id: 4,
            title: 'EXCELLENCE',
            category: '',
            icon: Dna,
            color: 'green',
            summary: 'Engineering therapies calibrated to the individual mutation rather than broad disease categories.',
            points: []
        }
    ];

    return (
        <section id="vision-mission" className="space-y-12 sm:space-y-16">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-black/5 pb-8">
                <div className="space-y-4 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-[0.25em]"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-spin" style={{ animationDuration: '6s' }} />
                        Guiding Philosophy
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-[0.95]"
                    >
                        Our Vision & <br className="hidden sm:block" /> Unyielding Mission.
                    </motion.h2>
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed max-w-xl">
                        We are driven by the conviction that human suffering is not an inevitable condition, but a biological challenge waiting for relentless ingenuity.
                    </p>
                </div>

                {/* View Filter Switcher */}
                <div className="inline-flex p-1 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-inner">
                    {[
                        { key: 'all', label: 'Complete Framework' },
                        { key: 'vision', label: 'Our Vision' },
                        { key: 'mission', label: 'Our Mission' }
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key as any)}
                            className={cn(
                                "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200",
                                activeTab === tab.key
                                    ? "bg-black text-white shadow-md scale-[1.02]"
                                    : "text-black/60 hover:text-black hover:bg-black/5"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dual Vision & Mission Showcase Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                {/* VISION CARD */}
                {(activeTab === 'all' || activeTab === 'vision') && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={cn(
                            "relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white rounded-5xl p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-2xl border-2 border-blue-400/30 group",
                            activeTab === 'vision' ? "lg:col-span-2" : ""
                        )}
                    >
                        {/* Background Glows & Accent Watermark */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />
                        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                            <Eye className="w-80 h-80 text-white" />
                        </div>

                        <div className="space-y-8 relative z-10">
                            {/* Header Badge */}
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase">
                                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                                    Vision
                                </div>
                                <span className="text-xs font-mono text-white/40 tracking-wider">EST. 2025</span>
                            </div>

                            {/* Big Statement */}
                            <div className="space-y-4">
                                <p className="font-display text-xl sm:text-3xl lg:text-1xl font-bold tracking-tight text-white leading-tight">
                                    To become a trusted healthcare partner by making quality medical equipment and healthcare services easily accessible to everyone.
                                    MASS MedCare — Reliable Medical Support, When You Need It Most.
                                </p>
                                {/* <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                                    We envision a medical ecosystem where therapeutics are engineered at single-cell precision—tailored dynamically to an individual's genetic footprint rather than broad statistical averages.
                                </p> */}
                            </div>

                            {/* Core Vision Targets */}
                            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1.5">
                                    <div className="text-blue-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                                        <Target className="w-3.5 h-3.5" /> 100% Patient-Specific
                                    </div>
                                    <p className="text-xs text-slate-300">Formulating medications designed exclusively for individual mutation sequences.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-1.5">
                                    <div className="text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                                        <Globe2 className="w-3.5 h-3.5" /> Zero Border Disparity
                                    </div>
                                    <p className="text-xs text-slate-300">Eradicating the lag between high-income trial centers and global patient access.</p>
                                </div>
                            </div> */}
                        </div>

                        {/* Vision Footer Quote */}
                        {/* <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400 relative z-10">
                            <span className="italic">"We measure scientific success not in journal citations, but in healthy years returned to families."</span>
                            <span className="font-mono text-white/60 font-semibold shrink-0">— MASS MedCare Charter</span>
                        </div> */}
                    </motion.div>
                )}

                {/* MISSION CARD */}
                {(activeTab === 'all' || activeTab === 'mission') && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={cn(
                            "relative bg-white/90 backdrop-blur-xl rounded-5xl p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-xl border-2 border-emerald-300/90 hover:border-emerald-500 group transition-all duration-300",
                            activeTab === 'mission' ? "lg:col-span-2" : ""
                        )}
                    >
                        {/* Background Glows & Accent Watermark */}
                        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
                        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
                            <Compass className="w-80 h-80 text-black" />
                        </div>

                        <div className="space-y-8 relative z-10">
                            {/* Header Badge */}
                            <div className="flex items-center justify-between">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-300/80 text-emerald-700 text-xs font-mono font-bold tracking-widest uppercase">
                                    <Compass className="w-3.5 h-3.5 text-emerald-600" />
                                    Mission
                                </div>
                                {/* <span className="text-xs font-mono text-black/40 tracking-wider">OPERATIONAL CHARTER</span> */}
                            </div>

                            {/* Big Statement */}
                            <div className="space-y-4">
                                <h3 className="font-display text-xl sm:text-3xl lg:text-1xl font-bold tracking-tight text-slate-900 leading-tight">
                                    To make quality healthcare accessible and affordable by delivering reliable medical equipment and compassionate support to providers, patients, and families—exactly when they need it.
                                </h3>
                                {/* <p className="text-black/65 text-base sm:text-lg leading-relaxed">
                                    Our operational mission is to radically compress the clinical discovery lifecycle through rigorous synthetic biology, ethical trial acceleration, and compassionate patient partnership.
                                </p> */}
                            </div>

                            {/* Core Operational Promises */}
                            {/* <div className="space-y-3 pt-2">
                                {[
                                    { title: 'Continuous High-Throughput Synthesis', desc: 'Synthesizing novel compounds in under 72 hours from genomic upload.' },
                                    { title: 'Empathetic Clinical Cohorts', desc: 'Treating trial participants as collaborative scientific partners, not subjects.' },
                                    { title: 'Open-Access Data Publishing', desc: 'Sharing peer-reviewed negative and positive trial data to elevate global science.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-xs text-black/60 leading-normal">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div> */}
                        </div>

                        {/* Mission Metric Footer */}
                        {/* <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-black/60 relative z-10">
                            <span className="font-semibold text-emerald-700">Committed to 100% Zero-Compromise Safety Standards</span>
                            <span className="font-mono font-bold text-slate-900">GMP • FDA • EMA Certified</span>
                        </div> */}
                    </motion.div>
                )}
            </div>

            {/* Interactive Core Pillars Deep Dive */}
            <div className="bg-slate-50/80 border-2 border-slate-200/80 rounded-5xl p-6 sm:p-10 lg:p-12 space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">Guiding Pillars</span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                            Five Pillars of Our Scientific Philosophy
                        </h3>
                    </div>
                    {/* <p className="text-xs sm:text-sm text-black/50 max-w-sm">
                        Select each pillar to explore how our vision and mission manifest in day-to-day laboratory and clinical practice.
                    </p> */}
                </div>

                {/* Pillar Switcher Buttons */}
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                    {pillars.map((pillar, idx) => {
                        const Icon = pillar.icon;
                        const isSelected = selectedPillar === idx;
                        return (
                            <button
                                key={pillar.id}
                                onClick={() => setSelectedPillar(idx)}
                                className={cn(
                                    "p-5 rounded-3xl text-left transition-all duration-300 border-2 flex flex-col justify-between gap-4 group",
                                    isSelected
                                        ? pillar.color === 'blue' ? "bg-white border-blue-500 shadow-lg shadow-blue-500/10" :
                                            pillar.color === 'emerald' ? "bg-white border-emerald-500 shadow-lg shadow-emerald-500/10" :
                                                pillar.color === 'amber' ? "bg-white border-amber-500 shadow-lg shadow-amber-500/10" :
                                                    pillar.color === 'green' ? "bg-white border-green-500 shadow-lg shadow-green-500/10" :
                                                        "bg-white border-purple-500 shadow-lg shadow-purple-500/10"
                                        : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                                )}
                            >
                                <div className={cn(
                                    "w-10 h-10 rounded-2xl flex items-center justify-center transition-colors",
                                    isSelected
                                        ? pillar.color === 'blue' ? "bg-blue-600 text-white" :
                                            pillar.color === 'emerald' ? "bg-emerald-600 text-white" :
                                                pillar.color === 'amber' ? "bg-amber-600 text-white" :
                                                    pillar.color === 'green' ? "bg-green-600 text-white" :
                                                        "bg-purple-600 text-white"
                                        : "bg-slate-100 text-slate-700 group-hover:bg-slate-200"
                                )}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-black/40">
                                        {pillar.category}
                                    </div>
                                    <div className="font-display font-bold text-sm sm:text-base text-slate-900">
                                        {pillar.title}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Selected Pillar Detailed Showcase */}
                {/* <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedPillar}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-4xl p-6 sm:p-8 border-2 border-slate-200 shadow-sm grid md:grid-cols-3 gap-6 items-center"
                    >
                        <div className="md:col-span-1 space-y-2 border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600">
                                Pillar {selectedPillar + 1} of 4
                            </span>
                            <h4 className="font-display text-2xl font-bold text-slate-900">
                                {pillars[selectedPillar].title}
                            </h4>
                            <p className="text-xs sm:text-sm text-black/60 leading-relaxed">
                                {pillars[selectedPillar].summary}
                            </p>
                        </div>

                        <div className="md:col-span-2 space-y-3">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-black/40">
                                Operational Commitments & Safeguards
                            </span>
                            <div className="grid sm:grid-cols-1 gap-2.5">
                                {pillars[selectedPillar].points.map((pt, pIdx) => (
                                    <div key={pIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm font-medium text-slate-800">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>{pt}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence> */}
            </div>
        </section>
    );
};
