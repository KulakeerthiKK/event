import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Star } from 'lucide-react';
import { heroSlides } from '../data/content';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const next = useCallback(() => setCurrent((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(() => setCurrent((i) => (i - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6500);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Background slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={heroSlides[current].image}
            alt="Event backdrop"
            className="w-full h-full object-cover"
          />
          {/* Multi-layer overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/60 to-dark-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative blobs */}
      <div className="absolute top-24 right-12 w-64 h-64 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 left-8 w-48 h-48 bg-gold-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container-custom w-full px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <span className="text-gold-300 font-body text-sm font-semibold tracking-[0.16em] uppercase">
                  Premium Event Management
                </span>
              </motion.div>

              {/* Heading */}
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.08] mb-6">
                {heroSlides[current].title}
              </h1>

              {/* Subtitle */}
              <p className="font-body text-lg md:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
                {heroSlides[current].subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button type="button" onClick={() => scrollTo('#contact')} className="btn-primary text-base">
                  Book Your Event <ArrowRight className="w-5 h-5" />
                </button>
                <button type="button" onClick={() => scrollTo('#portfolio')} className="btn-ghost text-base">
                  View Our Work
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-6 lg:px-10">
        <div className="flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-400 rounded-full ${
                i === current
                  ? 'w-10 h-2.5 bg-brand-400'
                  : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="p-2.5 rounded-full bg-white/10 hover:bg-brand-500 backdrop-blur-sm text-white transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="p-2.5 rounded-full bg-white/10 hover:bg-brand-500 backdrop-blur-sm text-white transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
