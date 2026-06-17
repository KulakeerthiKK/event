import { motion } from 'framer-motion';
import { planningSteps } from '../data/content';

export default function Process() {
  return (
    <section id="process" className="section-soft section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">How We Work</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark-900 mt-3 mb-6">
            Our Event Planning{' '}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="text-dark-500 text-lg max-w-2xl mx-auto">
            A proven six-step process that turns your ideas into a flawlessly executed event — every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planningSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative bg-white rounded-2xl p-8 shadow-card border border-dark-100/60
                hover:shadow-brand hover:border-brand-200 transition-all duration-300 h-full">

                {/* Step number chip */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700
                  flex items-center justify-center mb-6 shadow-brand
                  group-hover:scale-110 transition-transform duration-300">
                  <span className="font-heading text-xl font-bold text-white">{step.number}</span>
                </div>

                {/* Connector line (decorative, desktop) */}
                {i < planningSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[3.5rem] -right-3 w-6 h-[2px] bg-brand-200 z-10" />
                )}

                <h3 className="font-heading text-xl font-bold text-dark-900 mb-3">{step.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
