import { motion } from 'framer-motion';
import { ArrowRight, Dumbbell, Users, Leaf, Clock, HeartPulse, Star } from 'lucide-react';
import { services } from '../data/content';

const iconMap: Record<string, React.ElementType> = { Dumbbell, Users, Leaf, Clock, HeartPulse, Star };

export default function Services() {
  return (
    <section id="services" className="section-padding bg-navy-50/50">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-800 mt-3 mb-6">Gym & Wellness Services</h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Personalized fitness, nutrition, and wellness solutions designed to help you build strength, improve health, and stay consistent.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-navy-100/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gold-50 flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-gold-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">{service.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />{item}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-gold-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
