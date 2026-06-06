import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useAnimations';
import { counterStats } from '../data/content';

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value, 2500);
  const display = value >= 1000 ? `${Math.floor(count / 1000)},${String(count % 1000).padStart(3, '0')}` : String(count);
  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{display}{suffix}</div>
      <div className="text-navy-300 font-medium">{label}</div>
    </div>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Events" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-900/85" />
      </div>
      <div className="relative container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {counterStats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}>
              <Counter {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
