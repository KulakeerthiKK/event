import { motion } from 'framer-motion';
import { useFadeIn, useCountUp } from '../hooks/useAnimations';
import { stats } from '../data/content';
import { Award, Users, Calendar, TrendingUp } from 'lucide-react';

const icons = [Award, Users, Calendar, TrendingUp];

function StatCard({ value, suffix, label, delay, index }: { value: number; suffix: string; label: string; delay: number; index: number }) {
  const { count, ref } = useCountUp(value, 2000);
  const Icon = icons[index % icons.length];
  const display = value >= 1000
    ? `${Math.floor(count / 1000)},${String(count % 1000).padStart(3, '0')}`
    : String(count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative group text-center p-8 rounded-2xl bg-white shadow-card border border-dark-100/60
        hover:shadow-brand hover:border-brand-200 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mx-auto mb-4
        group-hover:bg-brand-600 transition-colors duration-300">
        <Icon className="w-5 h-5 text-brand-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-1">
        {display}{suffix}
      </div>
      <div className="text-dark-500 font-medium text-sm">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { ref } = useFadeIn();

  return (
    <section id="about" className="section-light section-padding" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">About Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark-900 mt-3 mb-6">
            Crafting Events That{' '}
            <span className="gradient-text">Tell Your Story</span>
          </h2>
          <p className="text-dark-500 text-lg max-w-3xl mx-auto leading-relaxed">
            <strong className="text-dark-800">rk_events_n_decors</strong> is a full-service event management and décor company based in Bangalore.
            From intimate weddings to large-scale corporate events, we bring creative vision, expert planning,
            and in-house décor production together to deliver truly unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} delay={i * 0.15} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
