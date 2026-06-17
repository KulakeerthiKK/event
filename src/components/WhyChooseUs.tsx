import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { whyChooseUs } from '../data/content';

export default function WhyChooseUs() {
  return (
    <section className="section-light section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-lg">
              <img
                src="https://images.pexels.com/photos/3573287/pexels-photo-3573287.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our event team at work"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 md:right-[-2rem] bg-gradient-to-br from-brand-600 to-brand-800
                rounded-2xl px-7 py-5 shadow-brand-lg text-white hidden sm:block"
            >
              <div className="font-heading text-4xl font-bold">8+</div>
              <div className="text-brand-200 text-sm font-medium leading-tight mt-1">Years of<br />Excellence</div>
            </motion.div>

            {/* Second badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-5 -left-4 md:left-[-1.5rem] bg-white rounded-2xl px-6 py-4
                shadow-card-lg border border-dark-100 hidden sm:block"
            >
              <div className="font-heading text-3xl font-bold gradient-text">750+</div>
              <div className="text-dark-500 text-sm font-medium mt-0.5">Events Delivered</div>
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label mb-4 inline-flex">Why Choose Us</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mt-3 mb-6">
              Event Excellence<br />
              <span className="gradient-text">You Can Trust</span>
            </h2>
            <p className="text-dark-500 leading-relaxed mb-10 text-lg">
              With a dedicated team of planners, an in-house décor studio, and a network of 120+ trusted vendors,
              rk_events_n_decors delivers events that exceed expectations — every single time.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {whyChooseUs.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-50/60 hover:bg-brand-100/70 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  <span className="text-dark-700 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
