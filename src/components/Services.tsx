import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Heart, Music, MapPin, Palette } from 'lucide-react';
import { services } from '../data/content';
import { Link } from 'react-router-dom';

const iconMap: Record<string, React.ElementType> = { Calendar, Users, Heart, Music, MapPin, Palette };

const serviceRoutes: Record<string, string> = {
  'Event Planning & Consultation': '/services/event-planning',
  'Corporate Events':              '/services/corporate-events',
  'Weddings & Celebrations':       '/services/weddings',
  'Décor & Styling':               '/services/decor',
  'Entertainment & Production':    '/services/entertainment',
  'Venue Management':              '/services/venue-management',
};

export default function Services() {
  return (
    <section id="services" className="section-soft section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">What We Do</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark-900 mt-3 mb-6">
            Our Event Management{' '}
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-dark-500 text-lg max-w-2xl mx-auto">
            From concept to celebration — comprehensive event solutions that transform your vision
            into extraordinary experiences with creativity and precision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Calendar;
            const route = serviceRoutes[service.title] ?? '/';
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group card p-8"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center mb-6
                  group-hover:bg-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand">
                  <Icon className="w-7 h-7 text-brand-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="font-heading text-xl font-bold text-dark-900 mb-3">{service.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2 mb-7">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-dark-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to={route}
                  className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm
                    group-hover:gap-3 transition-all duration-300 hover:text-brand-700"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
