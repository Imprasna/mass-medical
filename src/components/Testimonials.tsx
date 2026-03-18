import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Research Partner",
    content: "The molecular precision at this facility is unmatched. Our collaborative trials have seen a 40% increase in efficacy since we integrated their genomic sequencing data.",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=400",
    size: "large", // 2x2
    color: "blue"
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Patient",
    content: "After years of searching for answers, the personalized treatment plan here changed my life. I'm finally back to my active self.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    size: "small", // 1x1
    color: "emerald"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Healthcare Director",
    content: "Integrating their workflow has been seamless and revolutionary for patient outcomes.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
    size: "small", // 1x1
    color: "purple"
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "Clinical Trial Participant",
    content: "The level of care and transparency during the Neuro-Regen Protocol trials was exceptional. I felt like a partner, not just a subject.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    size: "wide", // 2x1
    color: "amber"
  },
  {
    id: 5,
    name: "Sophia Lee",
    role: "Biotech Investor",
    content: "A rare combination of cutting-edge science and deep human empathy. This is the future of the pharmaceutical industry.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    size: "small", // 1x1
    color: "rose"
  }
];

export const Testimonials = () => {
  return (
    <section className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-black/40">Voices of Impact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">Trusted by Pioneers</h2>
        </div>
        <p className="text-black/40 max-w-xs text-sm">
          Real stories from the patients, partners, and researchers who are shaping the future of medicine with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className={cn(
              "glass rounded-4xl p-8 md:p-10 flex flex-col justify-between group relative overflow-hidden min-h-[320px] md:min-h-0",
              testimonial.size === 'large' ? "md:col-span-2 md:row-span-2" : "",
              testimonial.size === 'wide' ? "md:col-span-2" : "",
              testimonial.size === 'small' ? "md:col-span-1" : ""
            )}
          >
            {/* Background Accent */}
            <div className={cn(
              "absolute -right-10 -top-10 w-40 h-40 blur-3xl opacity-10 group-hover:opacity-20 transition-opacity rounded-full",
              testimonial.color === 'blue' ? "bg-blue-500" :
              testimonial.color === 'emerald' ? "bg-emerald-500" :
              testimonial.color === 'purple' ? "bg-purple-500" :
              testimonial.color === 'amber' ? "bg-amber-500" : "bg-rose-500"
            )} />

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <div className="bg-black/5 p-3 rounded-2xl">
                  <Quote className={cn(
                    "w-6 h-6",
                    testimonial.color === 'blue' ? "text-blue-500" :
                    testimonial.color === 'emerald' ? "text-emerald-500" :
                    testimonial.color === 'purple' ? "text-purple-500" :
                    testimonial.color === 'amber' ? "text-amber-500" : "text-rose-500"
                  )} />
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              <p className={cn(
                "font-medium leading-relaxed text-black/80",
                testimonial.size === 'large' ? "text-2xl md:text-3xl" : "text-lg"
              )}>
                "{testimonial.content}"
              </p>
            </div>

            <div className="flex items-center gap-4 relative z-10 mt-6">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-2xl object-cover border-2 border-white/50"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold text-sm">{testimonial.name}</h4>
                <p className="text-xs text-black/40 uppercase tracking-widest font-bold">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
