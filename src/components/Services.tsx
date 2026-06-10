import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Heart, Music, Utensils, MapPin } from 'lucide-react';
import { services } from '../data/content';

const iconMap: Record<string, React.ElementType> = { Calendar, Users, Heart, Music, Utensils, MapPin };

export default function Services() {
  return (
    <section id="services" className="section-padding bg-black-50/50">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">What We Do</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-black-800 mt-3 mb-6">Event Management Services</h2>
          <p className="text-black-600 text-lg max-w-2xl mx-auto">
            Comprehensive event solutions designed to transform your vision into unforgettable experiences with creativity, expertise, and precision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Briefcase;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-black-100/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-black-800 mb-3">{service.title}</h3>
                <p className="text-black-600 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-black-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />{item}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
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

