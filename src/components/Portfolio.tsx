import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar } from 'lucide-react';
import { portfolioCategories, portfolioEvents } from '../data/content';

export default function Portfolio() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'All' ? portfolioEvents : portfolioEvents.filter((e) => e.category === active);
  const selected = lightbox !== null ? portfolioEvents.find((e) => e.id === lightbox) : null;

  return (
    <section id="portfolio" className="section-padding bg-navy-50/50">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">Our Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-800 mt-3 mb-6">Featured Fitness Transformations</h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">Explore our curated fitness programs, classes, and wellness journeys that deliver real results.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolioCategories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                active === cat ? 'bg-gold-500 text-navy-900 shadow-md shadow-gold-500/25' : 'bg-white text-navy-600 hover:bg-navy-100 border border-navy-200'
              }`}>{cat}</button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((event) => (
              <motion.div key={event.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }} onClick={() => setLightbox(event.id)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-navy-100/50 transition-shadow duration-300">
                <div className="relative overflow-hidden h-56">
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-gold-500 text-navy-900 text-xs font-bold rounded-full">{event.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold text-navy-800 mb-2">{event.name}</h3>
                  <div className="flex items-center gap-2 text-navy-500 text-sm mb-1"><MapPin className="w-3.5 h-3.5" />{event.location}</div>
                  <div className="flex items-center gap-2 text-navy-400 text-sm"><Calendar className="w-3.5 h-3.5" />{event.date}</div>
                  <p className="text-navy-500 text-sm mt-3">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selected && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm" onClick={() => setLightbox(null)}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                  <img src={selected.image} alt={selected.name} className="w-full h-72 sm:h-80 object-cover" />
                  <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-navy-800 transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-gold-100 text-gold-700 text-xs font-bold rounded-full mb-4">{selected.category}</span>
                  <h3 className="font-heading text-2xl font-bold text-navy-800 mb-3">{selected.name}</h3>
                  <div className="flex flex-wrap gap-4 text-navy-500 text-sm mb-4">
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{selected.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{selected.date}</span>
                  </div>
                  <p className="text-navy-600 leading-relaxed">{selected.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
