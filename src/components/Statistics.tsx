import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useAnimations';
import { counterStats } from '../data/content';

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2500);
  const display = value >= 1000
    ? `${Math.floor(count / 1000)},${String(count % 1000).padStart(3, '0')}`
    : String(count);

  return (
    <div ref={ref} className="text-center group">
      <div className="font-heading text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
        {display}{suffix}
      </div>
      <div className="text-brand-300 font-medium text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3950311/pexels-photo-3950311.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Event statistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-950/88" />
        {/* Brand colour tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/60 via-transparent to-brand-950/60" />
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-brand-500/10" />
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-brand-500/10" />
      </div>

      <div className="relative container-custom px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-brand-400 font-semibold text-xs tracking-[0.18em] uppercase">Our Impact</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
            Numbers That Speak for Themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {counterStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Counter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
