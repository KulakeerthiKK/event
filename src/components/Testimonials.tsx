import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/content';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const next = useCallback(() => { setDirection(1); setCurrent((i) => (i + 1) % testimonials.length); }, []);
  const prev = useCallback(() => { setDirection(-1); setCurrent((i) => (i - 1 + testimonials.length) % testimonials.length); }, []);

  useEffect(() => { const timer = setInterval(next, 7000); return () => clearInterval(timer); }, [next]);

  const t = testimonials[current];
  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-navy-800">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-400 font-semibold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mt-3 mb-6">What Our Clients Say</h2>
          <p className="text-navy-300 text-lg max-w-2xl mx-auto">Hear from members who have achieved strength, confidence, and wellness with our coaching and programs.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-navy-700/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-navy-600/30">
              <Quote className="w-12 h-12 text-gold-500/30 mb-6" />
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 font-body italic">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-gold-500" />
                <div>
                  <div className="text-white font-heading font-bold text-lg">{t.name}</div>
                  <div className="text-navy-300 text-sm">{t.organization}</div>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-gold-500 fill-gold-500' : 'text-navy-500'}`} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full bg-navy-600/50 hover:bg-gold-500 text-white hover:text-navy-900 transition-all duration-300">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${i === current ? 'w-8 h-2 bg-gold-500' : 'w-2 h-2 bg-navy-500 hover:bg-navy-400'}`} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full bg-navy-600/50 hover:bg-gold-500 text-white hover:text-navy-900 transition-all duration-300">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
