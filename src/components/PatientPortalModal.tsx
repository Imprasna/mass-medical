import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, User, Calendar, Mail, Phone, FileText, ChevronRight } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Access request submitted successfully! Our team will review your details.');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <div className="p-8 md:p-10 space-y-8">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-3xl font-display font-bold tracking-tighter">Patient Portal</h2>
                  <p className="text-black/40 text-sm">Enter your details to access your records</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-black/5 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                      <User className="w-3 h-3" /> Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-black/5 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-black/10 transition-all"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                      <Calendar className="w-3 h-3" /> Date of Birth
                    </label>
                    <input
                      required
                      type="date"
                      className="w-full bg-black/5 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-black/10 transition-all"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                    <FileText className="w-3 h-3" /> Patient ID (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="PN-12345"
                    className="w-full bg-black/5 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-black/10 transition-all"
                    value={formData.patientId}
                    onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                      <Mail className="w-3 h-3" /> Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-black/5 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-black/10 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                      <Phone className="w-3 h-3" /> Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-black/5 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-black/10 transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40 flex items-center gap-2">
                    Reason for Access
                  </label>
                  <select
                    className="w-full bg-black/5 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-black/10 transition-all appearance-none"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  >
                    <option value="medical-records">Medical Records</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="prescription">Prescription Refill</option>
                    <option value="billing">Billing Inquiry</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform active:scale-95"
                >
                  Submit <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
