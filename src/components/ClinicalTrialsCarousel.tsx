import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'motion/react';
import {
    ChevronLeft,
    ChevronRight,
    ArrowUpRight,
    Activity,
    Calendar,
    MapPin,
    Users,
    CheckCircle2,
    X,
    Sparkles,
    Tag,
    Layers,
    ShieldCheck,
    FileText,
    Clock,
    Beaker,
    Stethoscope,
    Pill,
    Target
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
// Images
import syringePumpImg from '../assets/images/syringe_pump.png';
import infusionPumpImg from '../assets/images/Infusion_Pump.png';
import BiPAPMachineImg from '../assets/images/BiPAP_Machine.png';
import oxygenConcentratorImg from '../assets/images/oc.png';
import ventilatorImg from '../assets/images/ventilator.png';
import bedImg from '../assets/images/beds.png';
import linenImg from '../assets/images/lenins.png';
import icuSetupImg from '../assets/images/ICU_setup.png';
import maskImg from '../assets/images/masks.png';
import hospitalsetupImg from '../assets/images/hospital_setup.png';
import nabhImg from '../assets/images/nabh.png';
import oxygenCylinderImg from '../assets/images/o2cylinders.png';

export interface ProductItem {
    id: string;
    title: string;
    type: "Product" | "Service";
    category: string;
    image?: string;
    summary: string;
    description: string;
    availability?: string;
    application?: string;
    borderColor?: string;
    tagBg?: string;
    tagText?: string;
}

const productsData: ProductItem[] = [
    {
        id: "product-01",
        title: "Syringe Pump",
        type: "Product",
        category: "Infusion Therapy",
        image: syringePumpImg,
        summary:
            "Precision-controlled medication and fluid delivery for hospitals, ICUs, and critical care environments.",
        description:
            "Reliable syringe pumps designed for accurate and controlled administration of medications and fluids.",
        availability: "Available",
        application: "ICU & Critical Care",
        borderColor: "border-blue-300/90 hover:border-blue-500",
        tagBg: "bg-blue-600 text-white",
        tagText: "text-blue-600",
    },
    {
        id: "product-02",
        title: "Infusion Pump",
        type: "Product",
        category: "Infusion Therapy",
        image: infusionPumpImg,
        summary:
            "Reliable and controlled infusion systems for medication and fluid administration.",
        description:
            "Infusion pumps suitable for hospitals, clinics, nursing facilities, and patient care environments.",
        availability: "Available",
        application: "Hospitals & Clinics",
        borderColor: "border-emerald-300/90 hover:border-emerald-500",
        tagBg: "bg-emerald-600 text-white",
        tagText: "text-emerald-600",
    },
    {
        id: "product-03",
        title: "BiPAP Machine",
        type: "Product",
        category: "Respiratory Care",
        image: BiPAPMachineImg,
        summary:
            "Non-invasive respiratory support designed for patients requiring assisted breathing.",
        description:
            "BiPAP machines designed to provide effective non-invasive ventilation support in clinical and home-care environments.",
        availability: "Available",
        application: "Respiratory Support",
        borderColor: "border-purple-300/90 hover:border-purple-500",
        tagBg: "bg-purple-600 text-white",
        tagText: "text-purple-600",
    },
    {
        id: "product-04",
        title: "Oxygen Concentrator",
        type: "Product",
        category: "Respiratory Care",
        image: oxygenConcentratorImg,
        summary:
            "Continuous oxygen therapy solutions for hospitals, clinics, and home healthcare.",
        description:
            "Oxygen concentrators designed to provide a dependable source of supplemental oxygen for patient care.",
        availability: "Available",
        application: "Oxygen Therapy",
        borderColor: "border-sky-300/90 hover:border-sky-500",
        tagBg: "bg-sky-600 text-white",
        tagText: "text-sky-600",
    },
    {
        id: "product-05",
        title: "Ventilator",
        type: "Product",
        category: "Critical Care",
        image: ventilatorImg,
        summary:
            "Advanced respiratory support equipment for intensive and critical care environments.",
        description:
            "Medical ventilators designed to provide controlled respiratory support for patients requiring assisted ventilation.",
        availability: "Available",
        application: "ICU & Critical Care",
        borderColor: "border-rose-300/90 hover:border-rose-500",
        tagBg: "bg-rose-600 text-white",
        tagText: "text-rose-600",
    },
    {
        id: "product-06",
        title: "Hospital Beds",
        type: "Product",
        category: "Hospital Furniture",
        image: bedImg,
        summary:
            "Durable and comfortable hospital beds designed for patient care and clinical environments.",
        description:
            "Hospital beds suitable for hospitals, clinics, nursing facilities, and home healthcare requirements.",
        availability: "Available",
        application: "Patient Care",
        borderColor: "border-amber-300/90 hover:border-amber-500",
        tagBg: "bg-amber-600 text-white",
        tagText: "text-amber-600",
    },
    {
        id: "product-07",
        title: "Linens",
        type: "Product",
        category: "Hospital Essentials",
        image: linenImg,
        summary:
            "Essential hospital linens including bedsheets, pillow covers, and blankets.",
        description:
            "Quality bedding and linen supplies designed for hospitals, clinics, healthcare facilities, and patient care.",
        availability: "Available",
        application: "Hospital Essentials",
        borderColor: "border-indigo-300/90 hover:border-indigo-500",
        tagBg: "bg-indigo-600 text-white",
        tagText: "text-indigo-600",
    },
    {
        id: "product-08",
        title: "ICU Setup at Home",
        type: "Service",
        category: "Home Healthcare",
        image: icuSetupImg,
        summary:
            "Complete home-based ICU solutions for patients requiring intensive medical care at home.",
        description:
            "Home ICU setup services including essential medical equipment and healthcare infrastructure tailored to patient requirements.",
        availability: "Available",
        application: "Home ICU Care",
        borderColor: "border-teal-300/90 hover:border-teal-500",
        tagBg: "bg-teal-600 text-white",
        tagText: "text-teal-600",
    },
    {
        id: "product-09",
        title: "Bulk Masks",
        type: "Product",
        category: "Medical Supplies",
        image: maskImg,
        summary:
            "Bulk supply of masks for hospitals, clinics, institutions, and healthcare organizations.",
        description:
            "Medical mask supply solutions for organizations requiring reliable quantities for ongoing healthcare operations.",
        availability: "Available",
        application: "Medical Protection",
        borderColor: "border-cyan-300/90 hover:border-cyan-500",
        tagBg: "bg-cyan-600 text-white",
        tagText: "text-cyan-600",
    },
    {
        id: "product-10",
        title: "Complete Hospital Setup",
        type: "Service",
        category: "Healthcare Infrastructure",
        image: hospitalsetupImg,
        summary:
            "End-to-end hospital setup solutions covering equipment, supplies, and healthcare infrastructure.",
        description:
            "Complete hospital and clinic setup support, from essential medical equipment procurement to healthcare infrastructure requirements.",
        availability: "Available",
        application: "Hospital Infrastructure",
        borderColor: "border-violet-300/90 hover:border-violet-500",
        tagBg: "bg-violet-600 text-white",
        tagText: "text-violet-600",
    },
    {
        id: "product-11",
        title: "NABH",
        type: "Service",
        category: "Healthcare Accreditation",
        image: nabhImg,
        summary:
            "Support and assistance for healthcare facilities working toward NABH accreditation.",
        description:
            "NABH-related support for hospitals and healthcare facilities working to establish appropriate standards, processes, and documentation.",
        availability: "Available",
        application: "Healthcare Accreditation",
        borderColor: "border-orange-300/90 hover:border-orange-500",
        tagBg: "bg-orange-600 text-white",
        tagText: "text-orange-600",
    },
    {
        id: "product-12",
        title: "Oxygen Cylinders",
        type: "Product",
        category: "Respiratory Care",
        image: oxygenCylinderImg,
        summary:
            "Oxygen cylinder solutions for hospitals, clinics, emergency care, and home healthcare.",
        description:
            "Medical oxygen cylinders supplied for healthcare facilities and patient-care requirements.",
        availability: "Available",
        application: "Oxygen Therapy",
        borderColor: "border-red-300/90 hover:border-red-500",
        tagBg: "bg-red-600 text-white",
        tagText: "text-red-600",
    },
];

export const ClinicalTrialsCarousel = () => {
    const [activeFilter, setActiveFilter] = useState<'All' | 'Product' | 'Service'>('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    const navigate = useNavigate();

    // Filtered items
    const filteredProducts = productsData?.filter(trial => {
        if (activeFilter === 'All') return true;
        return trial.type === activeFilter;
    });

    // Reset index when filter changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [activeFilter]);

    // Determine items per view based on window size
    const [itemsPerView, setItemsPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, filteredProducts?.length - itemsPerView);

    const nextSlide = () => {
        setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    };

    // Autoplay functionality
    useEffect(() => {
        if (!isAutoPlaying || maxIndex === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, maxIndex]);

    // Touch handlers for mobile swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <section id="clinical-trials" className="space-y-10 sm:space-y-12">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-black/5 pb-6 sm:pb-8">
                <div className="space-y-4 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-black/60 text-xs font-bold uppercase tracking-[0.25em]"
                    >
                        <Activity className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                        Products and Services
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-gradient leading-[0.95]"
                    >
                        Complete Healthcare Solutions.
                    </motion.h2>
                    <p className="text-base sm:text-lg text-black/60 leading-relaxed max-w-xl">
                        From medical equipment and hospital supplies to complete hospital setups and home ICU solutions, we provide dependable healthcare solutions tailored to your needs. Equip your facility with the right products, services, and support—all from one trusted partner.
                    </p>
                </div>

                {/* Filters & Carousel Controls */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
                    {/* Type Filter Pills */}
                    <div className="inline-flex p-1 rounded-full bg-slate-100/90 border border-slate-200/90 shadow-inner">
                        {(['All', 'Product', 'Service'] as const).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-xs font-bold transition-all duration-200",
                                    activeFilter === filter
                                        ? "bg-black text-white shadow-md scale-[1.02]"
                                        : "text-black/60 hover:text-black hover:bg-black/5"
                                )}
                            >
                                {filter === 'All' ? 'All Trials' : filter === 'Product' ? 'Products' : 'Services'}
                                <span className="ml-1.5 text-[10px] opacity-70">
                                    ({filter === 'All' ? productsData.length : productsData.filter(t => t.type === filter).length})
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={prevSlide}
                            aria-label="Previous clinical trials"
                            className="w-11 h-11 rounded-full bg-white border-2 border-slate-200/90 hover:border-black flex items-center justify-center text-slate-800 hover:text-black shadow-sm transition-all hover:scale-105 active:scale-95"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            aria-label="Next clinical trials"
                            className="w-11 h-11 rounded-full bg-white border-2 border-slate-200/90 hover:border-black flex items-center justify-center text-slate-800 hover:text-black shadow-sm transition-all hover:scale-105 active:scale-95"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Carousel Track Container */}
            <div
                className="relative overflow-hidden pt-2 pb-4"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {filteredProducts.length > 0 ? (
                    <motion.div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                        }}
                    >
                        {filteredProducts.map((item, index) => (
                            <div
                                key={item.id}
                                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className={cn(
                                        "h-full min-h-[520px] bg-white/90 backdrop-blur-xl border-2 rounded-5xl overflow-hidden flex flex-col justify-between group shadow-lg shadow-black/[0.02] transition-all duration-300 hover:-translate-y-1.5",
                                        item?.borderColor || "border-slate-200 hover:border-slate-400"
                                    )}
                                >
                                    {/* Image + Tags */}
                                    <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
                                        {item?.image ? (
                                            <img
                                                src={item?.image}
                                                alt={item?.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                loading={index < 3 ? "eager" : "lazy"}
                                                referrerPolicy="no-referrer"
                                                onError={(event) => {
                                                    event.currentTarget.style.display = "none";
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-slate-100">
                                                <div className="text-center px-6">
                                                    <Layers className="w-10 h-10 mx-auto mb-2 text-slate-300" />
                                                    <span className="text-xs font-semibold text-slate-400">
                                                        Medical Equipment
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Dark gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 pointer-events-none" />

                                        {/* Top Tags */}
                                        <div className="absolute top-3.5 inset-x-3.5 flex flex-wrap items-center justify-between gap-2 z-10">
                                            <div className="flex items-center gap-1.5 flex-wrap">
                                                {/* Product / Service */}
                                                <span
                                                    className={cn(
                                                        "px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md backdrop-blur-md flex items-center gap-1.5",
                                                        item.type === "Service"
                                                            ? "bg-purple-600 text-white border border-purple-400/50"
                                                            : "bg-blue-600 text-white border border-blue-400/50"
                                                    )}
                                                >
                                                    {item.type === "Service" ? (
                                                        <Layers className="w-3.5 h-3.5" />
                                                    ) : (
                                                        <Pill className="w-3.5 h-3.5" />
                                                    )}

                                                    {item.type || "Product"}
                                                </span>

                                                {/* Category */}
                                                {item.category && (
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20">
                                                        {item.category}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Availability */}
                                            {item.availability && (
                                                <span
                                                    className={cn(
                                                        "px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border",
                                                        item.availability === "Available"
                                                            ? "bg-emerald-500/90 text-white border-emerald-300/60 shadow-sm"
                                                            : "bg-slate-700/90 text-white border-slate-400/40"
                                                    )}
                                                >
                                                    {item.availability}
                                                </span>
                                            )}
                                        </div>

                                        {/* Product Type / Category Floating Label */}
                                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold z-10">
                                            <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                                                Healthcare
                                            </span>

                                            <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-emerald-400 font-bold">
                                                {item.type === "Service"
                                                    ? "Healthcare Service"
                                                    : "Medical Equipment"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                                        <div className="space-y-5">
                                            {/* Title + Summary */}
                                            <div className="space-y-3">
                                                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight leading-snug group-hover:text-black transition-colors line-clamp-2">
                                                    {item.title}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-black/60 leading-relaxed line-clamp-3">
                                                    {item.summary}
                                                </p>
                                            </div>

                                            {/* Key Information */}
                                            <div className="pt-4 border-t border-slate-100 space-y-2.5">
                                                {item.application && (
                                                    <div className="flex items-center gap-2 text-xs text-black/70 font-medium">
                                                        <Layers className="w-3.5 h-3.5 text-black/40 shrink-0" />
                                                        <span className="truncate">
                                                            {item.application}
                                                        </span>
                                                    </div>
                                                )}

                                                {item.category && (
                                                    <div className="flex items-center gap-2 text-xs text-black/70 font-medium">
                                                        <MapPin className="w-3.5 h-3.5 text-black/40 shrink-0" />
                                                        <span className="truncate">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* View Button */}
                                        <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                                            <div className="text-[11px] font-bold uppercase tracking-wider text-black/40">
                                                {item.type === "Service"
                                                    ? "Healthcare Service"
                                                    : "Medical Equipment"}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => navigate("/services")}
                                                className={cn(
                                                    "inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-300 shadow-sm",
                                                    item.type === "Service"
                                                        ? "bg-slate-900 text-white group-hover:bg-purple-600"
                                                        : "bg-slate-900 text-white group-hover:bg-blue-600"
                                                )}
                                            >
                                                <span>View Details</span>

                                                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <div className="w-full py-16 text-center">
                        <div className="max-w-md mx-auto px-6">
                            <Layers className="w-12 h-12 mx-auto mb-4 text-slate-300" />

                            <h3 className="text-lg font-bold text-slate-900">
                                No products found
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                We couldn't find any equipment or services matching your
                                current selection.
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Pagination Indicators & Quick Status Summary */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-black/5">
                <div className="flex items-center gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
                        <button
                            key={dotIdx}
                            onClick={() => setCurrentIndex(dotIdx)}
                            aria-label={`Jump to slide ${dotIdx + 1}`}
                            className={cn(
                                "h-2 rounded-full transition-all duration-300",
                                currentIndex === dotIdx
                                    ? "w-8 bg-black"
                                    : "w-2 bg-slate-300 hover:bg-slate-400"
                            )}
                        />
                    ))}
                    <span className="text-xs font-bold text-black/40 ml-3">
                        Showing {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, filteredProducts.length)} of {filteredProducts.length}
                    </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-bold text-black/50">
                    <span className="inline-flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        Recruiting ({productsData.filter(t => t.availability === 'Available').length})
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        Active ({productsData.filter(t => t.availability === 'Available').length})
                    </span>
                </div>
            </div>

            {/* Trial Detail Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProduct(null)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                        />

                        {/* Modal Dialog Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-3xl bg-white rounded-5xl shadow-2xl border-2 border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
                        >
                            {/* Modal Header with Image */}
                            <div className="relative h-48 sm:h-56 overflow-hidden shrink-0">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black text-white flex items-center justify-center backdrop-blur-md transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Top Badge Overlay */}
                                <div className="absolute top-4 left-4 flex items-center gap-2">
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md backdrop-blur-md flex items-center gap-1.5",
                                        selectedProduct.type === 'Product'
                                            ? "bg-blue-600 text-white"
                                            : "bg-purple-600 text-white"
                                    )}>
                                        {selectedProduct.type === 'Product' ? <Pill className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
                                        {selectedProduct.type}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md">
                                        {selectedProduct.category}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500 text-white">
                                        {selectedProduct.phase}
                                    </span>
                                </div>

                                {/* Trial Title in Image Header */}
                                <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                                    <div className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold">
                                        Protocol ID: {selectedProduct.trialCode}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-display font-bold leading-tight">
                                        {selectedProduct.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Modal Body Scrollable Content */}
                            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-14rem)]">
                                {/* Description */}
                                <div className="space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40">Study Summary</h4>
                                    <p className="text-sm sm:text-base text-black/75 leading-relaxed">
                                        {selectedProduct.description}
                                    </p>
                                </div>

                                {/* Study Parameters Bento Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 flex items-center gap-1.5">
                                            <Target className="w-3.5 h-3.5 text-blue-600" /> Target Condition
                                        </div>
                                        <p className="text-xs sm:text-sm font-bold text-slate-800">{selectedProduct.targetCondition}</p>
                                    </div>

                                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-emerald-600" /> Enrolled Cohort
                                        </div>
                                        <p className="text-xs sm:text-sm font-bold text-slate-800">{selectedProduct.participants}</p>
                                    </div>

                                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-purple-600" /> Participating Sites
                                        </div>
                                        <p className="text-xs sm:text-sm font-bold text-slate-800">{selectedProduct.locations}</p>
                                    </div>

                                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5 text-amber-600" /> Study Duration
                                        </div>
                                        <p className="text-xs sm:text-sm font-bold text-slate-800">{selectedProduct.duration}</p>
                                    </div>
                                </div>

                                {/* Primary Endpoint */}
                                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-1">
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-blue-700">
                                        Primary Clinical Endpoint
                                    </div>
                                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                                        {selectedProduct.primaryEndpoint}
                                    </p>
                                </div>

                                {/* Eligibility Criteria */}
                                <div className="space-y-3">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-black/40">Key Eligibility Criteria</h4>
                                    <div className="space-y-2">
                                        {selectedProduct.eligibility.map((crit, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-black/80 font-medium">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                                <span>{crit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Principal Investigator */}
                                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-black/60">
                                    <span className="font-bold">Principal Investigator:</span>
                                    <span className="font-semibold text-slate-900">{selectedProduct.investigator}</span>
                                </div>
                            </div>

                            {/* Modal Footer Actions */}
                            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                                <div className="text-xs text-black/50 font-medium text-center sm:text-left">
                                    Questions regarding this study? Contact our trial coordination office.
                                </div>
                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="flex-1 sm:flex-none px-5 py-3 rounded-full border border-slate-300 font-bold text-xs hover:bg-slate-200 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button
                                        onClick={() => {
                                            alert(`Inquiry initiated for protocol: ${selectedProduct.trialCode} - ${selectedProduct.title}. Our clinical team will reach out.`);
                                            setSelectedProduct(null);
                                        }}
                                        className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-black text-white font-bold text-xs hover:scale-105 transition-transform flex items-center justify-center gap-2"
                                    >
                                        Inquire / Apply for Trial <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
