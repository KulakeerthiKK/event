import { motion } from 'framer-motion';
import { useFadeIn, useCountUp } from '../hooks/useAnimations';
import { stats } from '../data/content';

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center p-8 rounded-2xl bg-white shadow-lg shadow-navy-900/5 border border-navy-100/50">
      <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">{count}{suffix}</div>
      <div className="text-navy-600 font-medium text-sm">{label}</div>
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
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-800 mt-3 mb-6">Your Dedicated Fitness & Wellness Partner</h2>
          <p className="text-navy-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We help busy professionals, athletes, and wellness seekers achieve their goals with expert coaching,
            tailored programs, and a motivating gym community. With years of experience, we deliver results you can feel.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => <StatCard key={stat.label} {...stat} delay={i * 0.15} />)}
        </div>
      </div>
    </section>
  );
}
