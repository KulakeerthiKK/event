import { motion } from 'framer-motion';
import { useFadeIn, useCountUp } from '../hooks/useAnimations';
import { stats } from '../data/content';

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 rounded-2xl bg-white shadow-lg shadow-black-900/5 border border-black-100/50">
      <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">{count}{suffix}</div>
      <div className="text-black-600 font-medium text-sm">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const { ref } = useFadeIn();
  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-black-800 mt-3 mb-6">Crafting Memorable Events Since 2015</h2>
          <p className="text-black-600 text-lg max-w-3xl mx-auto leading-relaxed">
            WOW Fitness specializes in creating unforgettable experiences for weddings, corporate events, celebrations, and entertainment gatherings. 
            With our expert team, creative vision, and attention to detail, we turn your dreams into reality with professionalism and passion.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => <StatCard key={stat.label} {...stat} delay={i * 0.15} />)}
        </div>
      </div>
    </section>
  );
}

