import React from 'react';
import { motion } from 'motion/react';
import { Beaker, FlaskConical, Microscope, TestTube2, ArrowRight } from 'lucide-react';
import { SEO } from '../components/SEO';

export const Research = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <SEO
        title="Our Research"
        description="Decoding the future of biology. Explore PharmaNext's innovative research in cellular analysis and targeted therapies."
      />
      <header className="max-w-3xl space-y-6 text-center md:text-left">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-black/40"
        >
          Our Research
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-none"
        >
          Decoding the <br className="hidden sm:block" /> Future of Biology.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-black/60 leading-relaxed"
        >
          Our labs are dedicated to understanding the most complex biological systems to create therapies that were once thought impossible.
        </motion.p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative h-[300px] md:h-[400px] rounded-5xl overflow-hidden glass"
      >
        <img
          src="https://images.pexels.com/photos/35967917/pexels-photo-35967917.png"
          alt="Molecular Research Innovation"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent flex items-center p-8 md:p-16">
          <div className="max-w-md text-white space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter">Innovation at the Molecular Level</h2>
            <p className="text-white/80 text-sm md:text-base">Our research teams are pushing the boundaries of what's possible in biotechnology and therapeutic development.</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Microscope, title: 'Cellular Analysis', desc: 'Deep dive into cellular behavior and mutation patterns.', image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?auto=format&fit=crop&q=80&w=800' },
          { icon: FlaskConical, title: 'Bio-Synthesis', desc: 'Creating sustainable biological compounds for treatment.', image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800' },
          { icon: TestTube2, title: 'Rapid Prototyping', desc: 'Accelerating the path from lab to clinical application.', image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800' },
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-4xl space-y-6 group cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-8 md:p-10 pt-0 space-y-6">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-black text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform -mt-16 relative z-10 border-4 border-white/50">
                <item.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold">{item.title}</h3>
              <p className="text-sm md:text-base text-black/60">{item.desc}</p>
              <button
                onClick={() => alert(`Learning more about ${item.title}...`)}
                className="flex items-center gap-2 text-xs md:text-sm font-bold group-hover:translate-x-2 transition-transform"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="glass rounded-5xl p-8 md:p-20 overflow-hidden relative">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">Clinical Trial <br className="hidden sm:block" /> Participation</h2>
            <p className="text-black/60 text-sm md:text-base">
              Join our mission to advance medical science. We are currently looking for volunteers for our latest respiratory health study.
            </p>
            <button
              onClick={() => alert('Trial application form will be available soon!')}
              className="w-full sm:w-auto bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Apply for Trials
            </button>
          </div>
          <div className="aspect-video rounded-4xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/8531342/pexels-photo-8531342.jpeg"
              alt="Clinical Research Participation"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-3xl rounded-full -mr-48 -mt-48" />
      </section>
    </div>
  );
};
