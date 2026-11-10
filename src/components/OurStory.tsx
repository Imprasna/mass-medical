import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    History,
    Sparkles,
    ArrowRight,
    Calendar,
    MapPin,
    Award,
    FlaskConical,
    Building2,
    Users,
    CheckCircle2,
    TrendingUp,
    Quote,
    ArrowUpRight,
    Beaker,
    ShieldCheck
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

// interface Milestone {
//     year: string;
//     badge: string;
//     title: string;
//     subtitle: string;
//     description: string;
//     image: string;
//     metric: string;
//     metricLabel: string;
//     highlights: string[];
//     location: string;
//     color: 'blue' | 'emerald' | 'purple' | 'amber' | 'teal';
// }

// const milestones: Milestone[] = [
//     {
//         year: '2018',
//         badge: 'The Catalyst & Genesis',
//         title: 'A Vision to Bridge Laboratory and Bedside',
//         subtitle: 'From Academic Frustration to Bio-Disruption',
//         description: 'Dr. Elena Vance founded MASS Medical after witnessing promising oncology molecules languish for over 8 years in bureaucratic academic pipelines. Operating from a 1,200 sq ft lab in Boston, our founding team set out to engineer an agile translational model.',
//         image: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?auto=format&fit=crop&q=80&w=1000',
//         metric: '1,200 sq ft',
//         metricLabel: 'Initial Discovery Lab',
//         highlights: [
//             'Assembled initial core of 8 molecular biologists and genomicists',
//             'Established zero-latency computational synthesis framework',
//             'Secured initial private philanthropic seed grant'
//         ],
//         location: 'Boston, MA (Innovation District)',
//         color: 'blue'
//     },
//     {
//         year: '2020',
//         badge: 'The Synthesis Leap',
//         title: 'Continuous Enzymatic Bio-Synthesis Engine',
//         subtitle: 'Eliminating the 6-Month Chemistry Bottleneck',
//         description: 'During a time of global medical urgency, MASS Medical perfected its continuous-flow bio-synthesis platform. We successfully shortened custom peptide and vector synthesis from 24 weeks to just 72 hours with 99.8% purity.',
//         image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=1000',
//         metric: '72 Hours',
//         metricLabel: 'Synthesis Turnaround Time',
//         highlights: [
//             'Automated high-throughput molecular screening pipelines',
//             'Filed first 5 foundational bio-process patent applications',
//             'Partnered with 12 premier academic teaching hospitals'
//         ],
//         location: 'Cambridge & San Francisco BioHubs',
//         color: 'emerald'
//     },
//     {
//         year: '2022',
//         badge: 'Decentralized Grid',
//         title: 'Democratizing Clinical Trial Access',
//         subtitle: 'Bringing Advanced Research to Home Doorsteps',
//         description: 'Recognizing that 70% of eligible clinical trial candidates lived more than 2 hours away from trial centers, we pioneered the MASS Medical Remote Telemetry Protocol. Using wearable biosensors and visiting nurse networks, trial retention hit an unprecedented 96%.',
//         image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
//         metric: '96%',
//         metricLabel: 'Patient Retention Rate',
//         highlights: [
//             'Expanded clinical cohort enrollment into 14 countries',
//             'Launched 24/7 patient biometric anomaly monitoring',
//             'Eliminated geographical barriers for rare disease patients'
//         ],
//         location: 'North America & European Trial Network',
//         color: 'purple'
//     },
//     {
//         year: '2024',
//         badge: 'Cellular Breakthrough',
//         title: 'First-in-Class Targeted Epigenetic Demethylase',
//         subtitle: 'FDA & EMA Multicenter Clearance',
//         description: 'The Onco-Shield and Neuro-Regen molecules completed initial human phase safety evaluations, proving extraordinary target affinity with near-zero off-target cytotoxicity. Regulatory clearance initiated multi-cohort global Phase II & III programs.',
//         image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=1000',
//         metric: '18 Sites',
//         metricLabel: 'Active Global Trial Centers',
//         highlights: [
//             'Achieved primary safety endpoints across 450 trial participants',
//             'Received Fast-Track and Breakthrough Therapy designations',
//             'Expanded advanced GMP manufacturing capacity by 400%'
//         ],
//         location: 'Global Consortium (USA, EU, APAC)',
//         color: 'amber'
//     },
//     {
//         year: '2026',
//         badge: 'The Precision Era',
//         title: 'A Global Ecosystem for Personalized Health',
//         subtitle: 'Serving 40+ Countries with Targeted Biologics',
//         description: 'Today, MASS Medical stands at the vanguard of precision molecular therapeutics. With over 250 researchers, 60+ hospital partnerships, and our AI-guided synthesis foundry, we are proving that patient-first science creates enduring cures.',
//         image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
//         metric: '40+ Nations',
//         metricLabel: 'Patients & Research Reach',
//         highlights: [
//             'Over 15 active therapeutic product candidates in pipeline',
//             '100% renewable-powered green manufacturing facilities',
//             'Enduring commitment to ethical, affordable medicine'
//         ],
//         location: 'MASS Medical Global Research Campuses',
//         color: 'teal'
//     }
// ];

export const OurStory = () => {
    const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

    // const current = milestones[selectedMilestone];

    return (
        <section id="our-story" className="space-y-16 sm:space-y-20">
            {/* Editorial Story Header & Narrative Canvas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Narrative Headline & Context */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-6 space-y-6 sm:space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-[0.25em]">
                        <History className="w-3.5 h-3.5 text-blue-600" />
                        Our Story
                    </div>

                    <h1 className="font-display text-5xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 leading-[0.92]">
                        Equipping the <br /> Future of Healthcare.
                    </h1>

                    <p className="text-base sm:text-lg text-black/70 leading-relaxed font-normal">
                        MASS Medical provides medical equipment and healthcare support services for hospitals, healthcare centres, and patients at home. <span className="text-slate-950 font-semibold">We offer medical equipment for rent, including ventilators, BiPAP machines, syringe pumps, infusion pumps, patient monitors, oxygen concentrators, and other healthcare equipment.</span>
                    </p>

                    <p className="text-sm sm:text-base text-black/60 leading-relaxed">
                        We understand that good medical equipment and quick support are important during patient care. That is why we focus on providing reliable equipment, flexible rental options, timely service, and proper support. We also provide home healthcare services to help patients receive the care and support they need from the comfort of their homes.
                    </p>

                    <p className="text-sm sm:text-base text-black/60 leading-relaxed">
                        We aim to make medical equipment and healthcare support easily available, reliable, and affordable. At MASS Medical, we are committed to providing quality service with care and reliability.
                    </p>

                    {/* Quick Stats Pill Strip */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-black/5">
                        <div className="p-3.5 rounded-2xl bg-white border-2 border-slate-200/80 shadow-xs">
                            <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900">2025</div>
                            <div className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Founded</div>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white border-2 border-slate-200/80 shadow-xs">
                            <div className="font-display text-2xl sm:text-3xl font-bold text-blue-600">6+</div>
                            <div className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Hospital Partners</div>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-white border-2 border-slate-200/80 shadow-xs">
                            <div className="font-display text-2xl sm:text-3xl font-bold text-emerald-600">5+</div>
                            <div className="text-[11px] font-bold text-black/40 uppercase tracking-wider">Locations</div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Hero Collage Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="lg:col-span-6 relative"
                >
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-5xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100">
                        <img
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
                            alt="MASS Medical State of the Art Laboratory Hub"
                            className="w-full h-full object-cover"
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                        {/* Floating Info Overlay */}
                        <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                            <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                                MASS Medical Global Discovery Center
                            </div>
                            <p className="text-base sm:text-lg font-display font-bold">
                                Where molecular precision meets patient-first bioethics.
                            </p>
                        </div>
                    </div>

                    {/* Floating Pill Accent 1 */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-4 -right-2 sm:-top-6 sm:-right-4 bg-white/90 backdrop-blur-xl border-2 border-blue-300/90 rounded-3xl p-4 sm:p-5 shadow-xl shadow-blue-500/10 space-y-1 z-10"
                    >
                        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs">
                            <FlaskConical className="w-4 h-4" />
                            <span>Bio-Synthesis Hub</span>
                        </div>
                        <div className="font-mono text-xs text-slate-800 font-semibold">72-Hour Rapid Cycle</div>
                    </motion.div>

                    {/* Floating Pill Accent 2 */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                        className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 bg-white/90 backdrop-blur-xl border-2 border-emerald-300/90 rounded-3xl p-4 sm:p-5 shadow-xl shadow-emerald-500/10 space-y-1 z-10"
                    >
                        <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                            <ShieldCheck className="w-4 h-4" />
                            <span>100% Patient Advocacy</span>
                        </div>
                        <div className="font-mono text-xs text-slate-800 font-semibold">Zero Protocol Compromise</div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Interactive Milestone Journey / Timeline Bar */}
            {/* <div className="space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-black/5 pb-4">
                    <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">Chronological Evolution</span>
                        <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                            Breakthrough Timeline (2018–2026)
                        </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-black/50">
                        Click any milestone year to explore that chapter in our journey.
                    </p>
                </div> */}

            {/* Timeline Navigation Strip */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                    {milestones.map((m, idx) => {
                        const isSelected = selectedMilestone === idx;
                        return (
                            <button
                                key={m.year}
                                onClick={() => setSelectedMilestone(idx)}
                                className={cn(
                                    "p-4 sm:p-5 rounded-3xl text-left transition-all duration-300 border-2 flex flex-col justify-between gap-3 group relative overflow-hidden",
                                    isSelected
                                        ? "bg-black text-white border-black shadow-xl scale-[1.02]"
                                        : "bg-white/80 border-slate-200 hover:border-slate-400 hover:bg-white text-slate-900"
                                )}
                            >
                                <div className="flex items-center justify-between w-full">
                                    <span className={cn(
                                        "font-display text-2xl sm:text-3xl font-black tracking-tight",
                                        isSelected ? "text-white" : "text-slate-900 group-hover:text-black"
                                    )}>
                                        {m.year}
                                    </span>
                                    <div className={cn(
                                        "w-2.5 h-2.5 rounded-full",
                                        isSelected
                                            ? m.color === 'blue' ? "bg-blue-400" :
                                                m.color === 'emerald' ? "bg-emerald-400" :
                                                    m.color === 'purple' ? "bg-purple-400" :
                                                        m.color === 'amber' ? "bg-amber-400" : "bg-teal-400"
                                            : "bg-slate-300"
                                    )} />
                                </div>

                                <div className={cn(
                                    "text-[11px] font-bold uppercase tracking-wider line-clamp-1",
                                    isSelected ? "text-slate-300" : "text-black/50"
                                )}>
                                    {m.badge}
                                </div>

                                {isSelected && (
                                    <motion.div
                                        layoutId="activeMilestoneIndicator"
                                        className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400"
                                    />
                                )}
                            </button>
                        );
                    })}
                </div> */}

            {/* Selected Milestone Interactive Showcase Card */}
            {/* <AnimatePresence mode="wait">
                <motion.div
                    key={current.year}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className={cn(
                        "bg-white/95 backdrop-blur-xl border-2 rounded-5xl overflow-hidden shadow-xl grid lg:grid-cols-12 gap-0",
                        current.color === 'blue' ? "border-blue-300/90" :
                            current.color === 'emerald' ? "border-emerald-300/90" :
                                current.color === 'purple' ? "border-purple-300/90" :
                                    current.color === 'amber' ? "border-amber-300/90" : "border-teal-300/90"
                    )}
                > */}
            {/* Image & Key Metric Column */}
            {/* <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                        <img
                            src={current.image}
                            alt={current.title}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" /> */}

            {/* Floating Top Badge */}
            {/* <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-black/70 text-white backdrop-blur-md border border-white/20">
                                Year {current.year}
                            </span>
                            <span className={cn(
                                "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md",
                                current.color === 'blue' ? "bg-blue-600" :
                                    current.color === 'emerald' ? "bg-emerald-600" :
                                        current.color === 'purple' ? "bg-purple-600" :
                                            current.color === 'amber' ? "bg-amber-600" : "bg-teal-600"
                            )}>
                                {current.badge}
                            </span>
                        </div> */}

            {/* Bottom Metric Overlay */}
            {/* <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                            <div className="text-3xl sm:text-4xl font-display font-black tracking-tight text-white">
                                {current.metric}
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest text-slate-300">
                                {current.metricLabel}
                            </div>
                            <div className="text-[11px] text-white/60 flex items-center gap-1.5 pt-1">
                                <MapPin className="w-3.5 h-3.5 text-white/70" />
                                <span>{current.location}</span>
                            </div>
                        </div>
                    </div> */}

            {/* Narrative Content Column */}
            {/* <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <div className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                                    {current.subtitle}
                                </div>
                                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                                    {current.title}
                                </h3>
                            </div>

                            <p className="text-sm sm:text-base text-black/70 leading-relaxed font-normal">
                                {current.description}
                            </p> */}

            {/* Key Chapter Milestones Checklist */}
            {/* <div className="space-y-2.5 pt-3 border-t border-slate-100">
                                <div className="text-[11px] font-bold uppercase tracking-widest text-black/40">
                                    Chapter Breakthroughs
                                </div>
                                {current.highlights.map((hl, hIdx) => (
                                    <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                                        <CheckCircle2 className={cn(
                                            "w-4 h-4 shrink-0 mt-0.5",
                                            current.color === 'blue' ? "text-blue-600" :
                                                current.color === 'emerald' ? "text-emerald-600" :
                                                    current.color === 'purple' ? "text-purple-600" :
                                                        current.color === 'amber' ? "text-amber-600" : "text-teal-600"
                                        )} />
                                        <span>{hl}</span>
                                    </div>
                                ))}
                            </div>
                        </div> */}

            {/* Navigation Footer */}
            {/* <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="text-xs text-black/50 font-medium">
                                Milestone {selectedMilestone + 1} of {milestones.length}
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    disabled={selectedMilestone === 0}
                                    onClick={() => setSelectedMilestone(prev => Math.max(0, prev - 1))}
                                    className="px-4 py-2 rounded-full border border-slate-300 text-xs font-bold text-slate-700 hover:border-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                >
                                    Previous Era
                                </button>
                                <button
                                    disabled={selectedMilestone === milestones.length - 1}
                                    onClick={() => setSelectedMilestone(prev => Math.min(milestones.length - 1, prev + 1))}
                                    className="px-5 py-2 rounded-full bg-black text-white text-xs font-bold hover:scale-105 disabled:opacity-30 disabled:hover:scale-100 transition-all flex items-center gap-1.5"
                                >
                                    <span>Next Chapter</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div> */}
            {/* </div> */}
            {/* </motion.div> */}
            {/* </AnimatePresence> */}
            {/* </div> */}
        </section >
    );
};
