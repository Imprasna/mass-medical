import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          // phone is intentionally omitted from ui but could be added
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMsg('Network error. Please try again later.');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16 md:space-y-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with PharmaNext. Let's start a conversation about redefining healthcare." 
      />
      <header className="max-w-3xl space-y-6 text-center md:text-left">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-black/40"
        >
          Contact Us
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none"
        >
          Let's Start a <br className="hidden sm:block" /> Conversation.
        </motion.h1>
      </header>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 md:w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Email Us</p>
                <p className="text-lg md:text-xl font-bold break-all">hello@pharmanext.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 md:w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Call Us</p>
                <p className="text-lg md:text-xl font-bold">+1 (555) 000-1234</p>
              </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 md:w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Visit Us</p>
                <p className="text-lg md:text-xl font-bold">Innovation Way, San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-5xl h-64 md:h-80 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="PharmaNext Global HQ" 
              className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full animate-ping" />
              <div className="w-4 h-4 bg-black rounded-full absolute" />
            </div>
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 glass px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] font-bold">
              HQ: SAN FRANCISCO
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="glass rounded-5xl p-8 md:p-12 space-y-6 md:space-y-8"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tighter">Send a Message</h3>
          
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-bold">Message sent successfully!</p>
              <p className="text-sm opacity-80">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-4 text-xs font-bold uppercase tracking-widest text-green-700 hover:text-green-900"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              {status === 'error' && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm font-medium">
                  {errorMsg}
                </div>
              )}
              
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black/5 border-none rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-black transition-all text-sm outline-none" 
                    placeholder="John" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black/5 border-none rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-black transition-all text-sm outline-none" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-black/5 border-none rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-black transition-all text-sm outline-none" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Subject</label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  disabled={status === 'loading'}
                  className="w-full bg-black/5 border-none rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-black transition-all appearance-none text-sm outline-none"
                >
                  <option>General Inquiry</option>
                  <option>Clinical Trials</option>
                  <option>Patient Support</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-black/40">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  disabled={status === 'loading'}
                  className="w-full bg-black/5 border-none rounded-2xl px-4 md:px-6 py-3 md:py-4 focus:ring-2 focus:ring-black transition-all text-sm outline-none" 
                  placeholder="How can we help you?" 
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-black text-white py-4 md:py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform text-sm md:text-base disabled:opacity-50 disabled:hover:scale-100"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};
