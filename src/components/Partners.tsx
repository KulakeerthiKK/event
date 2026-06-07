import { motion } from 'framer-motion';
import { partners } from '../data/content';

export default function Partners() {
  return (
    <section className="section-padding bg-black-50/50">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12">
          <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">Partners</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-black-800 mt-3 mb-4">Our Fitness Partners</h2>
          <p className="text-black-600 max-w-xl mx-auto">We collaborate with leading brands to bring you the best fitness gear, nutrition, and wellness support.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div key={partner} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-xl p-6 flex items-center justify-center border border-black-100/50 hover:border-orange-300 hover:shadow-md transition-all duration-300 group">
              <span className="font-heading text-lg font-bold text-black-300 group-hover:text-black-700 transition-colors text-center">{partner}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

