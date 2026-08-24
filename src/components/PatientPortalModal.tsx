import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Calendar, Mail, Phone, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientPortalModal = ({ isOpen, onClose }: PatientPortalModalProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    patientId: '',
    email: '',
    phone: '',
    reason: 'medical-records',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portal-title"
            className="relative w-full max-w-lg bg-white/95 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200"
          >
            <div className="p-8 md:p-10 space-y-7">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 id="portal-title" className="text-3xl font-display font-bold tracking-tighter text-slate-900">
                    Patient Portal
                  </h2>
                  <p className="text-slate-500 text-sm">Enter your details to access verified medical records</p>
                </div>
                <button
                  onClick={onClose}
                  type="button"
                  aria-label="Close patient portal modal"
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <X className="w-6 h-6 text-slate-500 hover:text-slate-900" />
                </button>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900">Access Request Received</h3>
                  <p className="text-sm text-slate-500 max-w-xs mx-auto">
                    Our HIPAA-compliant clinical care desk will verify your records and email your secure one-time passcode.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <User className="w-3 h-3 text-slate-400" /> Full Name
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-slate-100/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-slate-400" /> Date of Birth
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full bg-slate-100/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                      <FileText className="w-3 h-3 text-slate-400" /> Patient ID (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="PN-12345"
                      className="w-full bg-slate-100/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      value={formData.patientId}
                      onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Mail className="w-3 h-3 text-slate-400" /> Email
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-slate-100/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Phone className="w-3 h-3 text-slate-400" /> Phone
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-slate-100/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                      Reason for Access
                    </label>
                    <select
                      className="w-full bg-slate-100/90 border border-slate-200/80 rounded-2xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    >
                      <option value="medical-records">Medical Records & Prescriptions</option>
                      <option value="appointment">Clinical Trial Appointment</option>
                      <option value="equipment-delivery">Hospital / Home ICU Equipment Status</option>
                      <option value="billing">Institutional Billing Inquiry</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all active:scale-98 shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <span>Request Secure Access</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

