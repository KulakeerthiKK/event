import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Phone } from 'lucide-react';

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  process: { title: string; desc: string }[];
  cta: string;
}

export default function ServicePage({ title, subtitle, description, image, features, process, cta }: ServicePageProps) {
  return (
    <div className="min-h-screen">
      <div className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black-900/80 via-black-900/60 to-black-900/40" />
        <div className="relative container-custom">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-orange-400 transition-colors mb-6 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl">{subtitle}</p>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-heading text-3xl font-bold text-black-800 mb-6">{cta}</h2>
              <p className="text-black-600 leading-relaxed mb-8">{description}</p>
              <div className="space-y-3">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-black-50/50">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <span className="text-black-700 font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="bg-black-50/50 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-black-800 mb-6">Our Process</h3>
                <div className="space-y-6">
                  {process.map((step, i) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0 font-heading font-bold text-black-900 text-sm">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-black-800 mb-1">{step.title}</h4>
                        <p className="text-black-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black-800 text-white text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Start Your {title}?</h2>
          <p className="text-black-300 mb-8">Get a free consultation and let us help you reach your fitness goals.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn-primary text-base" onClick={() => setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
              Request Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-black-900 transition-all duration-300">
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

