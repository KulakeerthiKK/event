import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { whyChooseUs } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-900/10">
              <img src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Gym training session" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gold-500 rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="font-heading text-3xl font-bold text-navy-900">12+</div>
              <div className="text-navy-800 font-medium text-sm">Years of<br />Excellence</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 mt-3 mb-6">Fitness Support You Can Trust</h2>
            <p className="text-navy-600 leading-relaxed mb-8">
              With expert trainers, evidence-based programs, and a supportive community, we help you make steady progress and feel stronger every day.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseUs.map((feature, i) => (
                <motion.div key={feature} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-navy-50/50 transition-colors">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <span className="text-navy-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
