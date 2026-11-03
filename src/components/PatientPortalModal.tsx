
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  User,
  Calendar,
  Mail,
  Phone,
  FileText,
  ChevronRight,
  CheckCircle2,
  Loader2,
  MapPin,
  Droplet,
  AlertCircle,
} from 'lucide-react';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PatientFormData {
  fullName: string;
  dob: string;
  patientId: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  bloodGroup: string;
  emergencyContact: string;
  reason: string;
}

export const PatientPortalModal = ({
  isOpen,
  onClose,
}: PatientPortalModalProps) => {
  const [formData, setFormData] = useState<PatientFormData>({
    fullName: '',
    dob: '',
    patientId: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    bloodGroup: '',
    emergencyContact: '',
    reason: 'medical-records',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/api/trigger/service`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || 'Unable to submit your access request.'
        );
      }

      setIsSubmitted(true);

    } catch (err) {
      console.error('Patient Portal Error:', err);

      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );

    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (isLoading) return;

    setIsSubmitted(false);
    setError('');

    setFormData({
      fullName: '',
      dob: '',
      patientId: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      bloodGroup: '',
      emergencyContact: '',
      reason: 'medical-records',
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">

          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
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

              {/* Header */}
              <div className="flex items-center justify-between">

                <div className="space-y-1">
                  <h2
                    id="portal-title"
                    className="text-3xl font-display font-bold tracking-tighter text-slate-900"
                  >
                    Patient Portal
                  </h2>

                  <p className="text-slate-500 text-sm">
                    Enter your details to request secure access
                  </p>
                </div>

                <button
                  onClick={handleClose}
                  type="button"
                  disabled={isLoading}
                  aria-label="Close patient portal modal"
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-50"
                >
                  <X className="w-6 h-6 text-slate-500" />
                </button>

              </div>

              {/* SUCCESS */}
              {isSubmitted ? (

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >

                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900">
                    Access Request Received
                  </h3>

                  <p className="text-sm text-slate-500 max-w-xs mx-auto">
                    Your request has been successfully submitted.
                    Our team will contact you after verification.
                  </p>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-4 px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-black"
                  >
                    Close
                  </button>

                </motion.div>

              ) : (

                /* FORM */
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Full Name + DOB */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        Full Name
                      </label>

                      <input
                        required
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        Date of Birth
                      </label>

                      <input
                        required
                        name="dob"
                        type="date"
                        max={new Date().toISOString().split('T')[0]}
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                  </div>

                  {/* Gender + Blood Group */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Gender
                      </label>

                      <select
                        required
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Droplet className="w-3 h-3" />
                        Blood Group
                      </label>

                      <select
                        required
                        name="bloodGroup"
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      >
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="unknown">Unknown</option>
                      </select>
                    </div>

                  </div>

                  {/* Patient ID */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                      <FileText className="w-3 h-3" />
                      Patient ID (Optional)
                    </label>

                    <input
                      name="patientId"
                      type="text"
                      placeholder="PN-12345"
                      value={formData.patientId}
                      onChange={handleChange}
                      className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Mail className="w-3 h-3" />
                        Email
                      </label>

                      <input
                        required
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                        <Phone className="w-3 h-3" />
                        Phone Number
                      </label>

                      <input
                        required
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                      />
                    </div>

                  </div>

                  {/* Address */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      Address
                    </label>

                    <textarea
                      required
                      name="address"
                      rows={2}
                      autoComplete="street-address"
                      placeholder="Enter your complete address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm resize-none focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                      <Phone className="w-3 h-3" />
                      Emergency Contact Number
                    </label>

                    <input
                      required
                      name="emergencyContact"
                      type="tel"
                      placeholder="Emergency contact number"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>

                  {/* Reason */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Reason for Access
                    </label>

                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="w-full bg-slate-100 border rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option value="medical-records">
                        Medical Records & Prescriptions
                      </option>
                      <option value="appointment">
                        Clinical Trial Appointment
                      </option>
                      <option value="equipment-delivery">
                        Hospital / Home ICU Equipment Status
                      </option>
                      <option value="billing">
                        Institutional Billing Inquiry
                      </option>
                    </select>
                  </div>

                  {/* ERROR */}
                  {error && (
                    <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <p>{error}</p>
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-slate-900 hover:bg-black text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Secure Access</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
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
