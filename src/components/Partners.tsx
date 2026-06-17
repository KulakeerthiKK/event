import { motion } from 'framer-motion';
import { partners } from '../data/content';

export default function Partners() {
  return (
    <section className="section-soft section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">Trusted Partners</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark-900 mt-3 mb-4">
            Our Vendor Network
          </h2>
          <p className="text-dark-500 max-w-xl mx-auto">
            We collaborate with Bangalore's finest vendors and service providers to ensure every aspect of your event is exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group bg-white rounded-2xl p-5 flex items-center justify-center
                border border-dark-100/60 shadow-card
                hover:border-brand-300 hover:shadow-brand transition-all duration-300 cursor-default"
            >
              <span className="font-heading text-sm font-bold text-dark-300 group-hover:text-dark-700 transition-colors text-center leading-snug">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
