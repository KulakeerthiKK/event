import { motion } from 'framer-motion';
import { planningSteps } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">How We Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-800 mt-3 mb-6">Fitness Onboarding Process</h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">A proven process that helps you start strong, stay consistent, and build lasting wellness habits.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {planningSteps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100/50 hover:shadow-lg hover:border-gold-200 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-500/20">
                  <span className="font-heading text-xl font-bold text-navy-900">{step.number}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">{step.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
