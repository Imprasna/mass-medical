import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
    ShieldCheck,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    Activity,
    Building2,
    Award,
    Globe
} from 'lucide-react';
import fullLogo from '../assets/images/mass_medical_agency_centered.svg';
import compactLogo from '../assets/images/massmedical_logo.svg';

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [subscriptionMessage, setSubscriptionMessage] = useState('');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || subscriptionStatus === 'loading') return;

        setSubscriptionStatus('loading');
        setSubscriptionMessage('');

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email.trim() }),
            });
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Unable to subscribe right now.');
            }

            setEmail('');
            setSubscriptionStatus('success');
            setSubscriptionMessage('Subscription confirmed. Welcome aboard!');
        } catch (error) {
            setSubscriptionStatus('error');
            setSubscriptionMessage(error instanceof Error ? error.message : 'Network error. Please try again.');
        }
    };

    return (
        <footer
            className="relative mt-24 overflow-hidden bg-slate-950 text-slate-300 select-none"
            role="contentinfo"
            aria-label="Site Footer"
        >
            {/* Luminous Top Gradient Border Accent */}
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 via-teal-400 via-emerald-400 to-transparent opacity-90 shadow-sm shadow-emerald-500/20" />

            {/* Subtle Background Glows and Atmospheric Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,179,0.08),transparent_45%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,200,216,0.07),transparent_45%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

            {/* Main Footer Container */}
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 pt-16 sm:pt-20 pb-12">

                {/* Top Feature Bar / Institutional Trust Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-14 border-b border-slate-800/80">
                    <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-bold">ISO 9001 & NABH-Ready</h4>
                            <p className="text-xs text-slate-400">Standardized medical calibration</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                            <Activity className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-bold">Rapid ICU Dispatch</h4>
                            <p className="text-xs text-slate-400">Emergency oxygen & equipment fulfillment</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                        <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-white text-sm font-bold">24/7 Clinical Helpdesk</h4>
                            <p className="text-xs text-slate-400">+1 (800) 555-PHARMA</p>
                        </div>
                    </div>
                </div>

                {/* 4-Column Navigation Architecture */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-14 border-b border-slate-800/80">

                    {/* Brand Column (Col Span 4) */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="space-y-3">
                            <Link
                                to="/"
                                className="inline-flex min-h-11 items-center transition-transform duration-300 hover:scale-[1.02]"
                                aria-label="MASS Medical home"
                            >
                                <span className="flex h-11 w-14 items-center justify-center lg:hidden">
                                    <img src={compactLogo} alt="" className="h-9 w-12 object-contain" />
                                </span>
                                <span className="hidden h-11 items-center rounded-xl bg-white px-2.5 py-1 lg:flex">
                                    <img src={fullLogo} alt="" className="h-full w-60 object-contain" />
                                </span>
                            </Link>
                            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                                Merging advanced molecular therapeutics and ICU-grade medical hardware to deliver end-to-end healthcare infrastructure for modern hospitals and home patient care.
                            </p>
                        </div>

                        {/* Direct Contact Metadata */}
                        <div className="space-y-2.5 text-xs text-slate-400 font-mono">
                            <div className="flex items-center gap-2.5">
                                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Chennai, Tamil Nadu</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                                <span>massmedcare@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Solutions Column (Col Span 3) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/90">
                            Healthcare & Equipment
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li>
                                <Link to="/products" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Critical Care & Ventilators
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Syringe & Infusion Pumps
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Oxygen Solutions & Cylinders
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Turnkey Hospital Setups
                                </Link>
                            </li>
                            <li>
                                <Link to="/care" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Home ICU Bed Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company & Science Column (Col Span 2) */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/90">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            <li>
                                <Link to="/about" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/research" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Clinical Research
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/care" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Patient Care
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-emerald-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-emerald-400 rounded">
                                    Partner With Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter & Subscriptions Column (Col Span 3) */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/90">
                            Clinical Bulletin
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Subscribe for updates on medical hardware availability, FDA approvals, and research releases.
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-2.5">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={subscriptionStatus === 'loading'}
                                    placeholder="Enter hospital or clinic email"
                                    required
                                    aria-label="Email address for clinical bulletin"
                                    className="w-full bg-slate-900 border border-slate-700/80 rounded-full px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 pr-12 transition-all"
                                />
                                <button
                                    type="submit"
                                    aria-label="Submit newsletter subscription"
                                    disabled={subscriptionStatus === 'loading'}
                                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 disabled:opacity-50"
                                >
                                    {subscriptionStatus === 'loading' ? '...' : <ArrowRight className="w-3.5 h-3.5" />}
                                </button>
                            </div>

                            {subscriptionStatus !== 'idle' && subscriptionStatus !== 'loading' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    role="status"
                                    aria-live="polite"
                                    className={`flex items-center gap-1.5 text-xs font-medium ${subscriptionStatus === 'success' ? 'text-emerald-400' : 'text-red-300'}`}
                                >
                                    {subscriptionStatus === 'success' && <CheckCircle2 className="w-3.5 h-3.5" />}
                                    <span>{subscriptionMessage}</span>
                                </motion.div>
                            )}
                        </form>
                    </div>

                </div>

                {/* Bottom Legal & Meta Bar */}
                <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
                    <div className="flex items-center gap-6">
                        <span>© {new Date().getFullYear()} MASS MEDICAL</span>
                        <span className="hidden md:inline-block">•</span>
                        <span className="hidden md:inline-block">ALL RIGHTS RESERVED</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link to="/about" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 rounded">
                            Privacy Policy
                        </Link>
                        <Link to="/about" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 rounded">
                            Terms of Supply
                        </Link>
                        <Link to="/about" className="hover:text-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 rounded">
                            HIPAA & Compliance
                        </Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};
