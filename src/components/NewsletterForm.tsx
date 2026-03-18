import React, { useState } from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setMessage('Successfully subscribed!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="space-y-4">
      <h4 className="font-bold text-sm uppercase tracking-widest">Newsletter</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className="bg-black/5 border-none rounded-full px-4 py-2 text-sm w-full outline-black"
            required
          />
          <button 
            type="submit"
            disabled={status === 'loading'} 
            className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold disabled:opacity-50"
          >
            {status === 'loading' ? '...' : 'Join'}
          </button>
        </div>
        {status === 'success' && <p className="text-xs text-green-600 font-medium">{message}</p>}
        {status === 'error' && <p className="text-xs text-red-600 font-medium">{message}</p>}
      </form>
    </div>
  );
};
