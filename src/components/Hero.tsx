import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { heroSlides } from '../data/content';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img src={heroSlides[current].image} alt="Event" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 via-navy-900/60 to-navy-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center">
        <div className="container-custom w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-gold-500" />
                <span className="text-gold-400 font-body text-sm font-semibold tracking-widest uppercase">Premium Event Management</span>
              </motion.div>

              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
                {heroSlides[current].title}
              </h1>

              <p className="font-body text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                {heroSlides[current].subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo('#contact')} className="btn-primary text-base">
                  Plan Your Event <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollTo('#portfolio')} className="btn-secondary text-base">View Our Work</button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-gold-500' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`} />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
