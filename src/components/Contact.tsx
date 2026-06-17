import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const eventTypes = [
  'Wedding', 'Sangeet / Mehendi', 'Corporate Event', 'Birthday Celebration',
  'Anniversary', 'Product Launch', 'Festival / Entertainment', 'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', eventType: '', eventDate: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', eventType: '', eventDate: '', budget: '', message: '' });
    }, 4500);
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl border border-dark-200 bg-white text-dark-800 text-sm placeholder:text-dark-300 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all';

  return (
    <section id="contact" className="section-light section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">Contact Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-dark-900 mt-3 mb-6">
            Let's Plan Your{' '}
            <span className="gradient-text">Perfect Event</span>
          </h2>
          <p className="text-dark-500 text-lg max-w-2xl mx-auto">
            Get in touch with rk_events_n_decors for a free consultation and let us bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-3xl p-8 text-white h-full flex flex-col justify-between shadow-brand-lg">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-2">Get In Touch</h3>
                <p className="text-brand-200 text-sm mb-8">We'd love to hear about your event. Reach out and we'll respond within 24 hours.</p>

                <div className="space-y-6">
                  {[
                    { icon: Phone,  label: 'Phone',        value: '+91 98765 43210' },
                    { icon: Mail,   label: 'Email',         value: 'hello@rkeventsndecors.com' },
                    { icon: MapPin, label: 'Address',        value: 'Prestige Altanta 1 A Koramangla, Bangalore, India 560034' },
                    { icon: Clock,  label: 'Working Hours', value: 'Mon – Sat: 9 AM – 7 PM' },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-600/50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-200" />
                      </div>
                      <div>
                        <div className="text-brand-300 text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</div>
                        <div className="text-white text-sm font-medium">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-brand-600/40">
                <p className="text-brand-300 text-xs mb-4 uppercase tracking-wider font-semibold">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Facebook,  label: 'Facebook' },
                    { Icon: Twitter,   label: 'Twitter' },
                    { Icon: Linkedin,  label: 'LinkedIn' },
                  ].map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl bg-brand-600/40 flex items-center justify-center
                        hover:bg-white hover:text-brand-700 text-white transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl p-8 shadow-card-lg border border-dark-100/60">
              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-dark-900 mb-2">Thank You!</h3>
                  <p className="text-dark-500">We've received your request and will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-1.5">Full Name</label>
                      <input id="name" required type="text" value={formData.name}
                        onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                        className={inputCls} placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-dark-700 mb-1.5">Phone</label>
                      <input id="phone" required type="tel" value={formData.phone}
                        onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                        className={inputCls} placeholder="+91 00000 00000" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-1.5">Email</label>
                    <input id="email" required type="email" value={formData.email}
                      onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                      className={inputCls} placeholder="you@email.com" />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-5">
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-semibold text-dark-700 mb-1.5">Event Type</label>
                      <select id="eventType" required value={formData.eventType}
                        onChange={(e) => setFormData((f) => ({ ...f, eventType: e.target.value }))}
                        className={inputCls}>
                        <option value="">Select type</option>
                        {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-semibold text-dark-700 mb-1.5">Event Date</label>
                      <input id="eventDate" type="date" value={formData.eventDate}
                        onChange={(e) => setFormData((f) => ({ ...f, eventDate: e.target.value }))}
                        className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-dark-700 mb-1.5">Budget Range</label>
                      <select id="budget" value={formData.budget}
                        onChange={(e) => setFormData((f) => ({ ...f, budget: e.target.value }))}
                        className={inputCls}>
                        <option value="">Select range</option>
                        <option value="Under ₹50k">Under ₹50k</option>
                        <option value="₹50k – ₹1L">₹50k – ₹1 Lakh</option>
                        <option value="₹1L – ₹5L">₹1 – ₹5 Lakh</option>
                        <option value="₹5L – ₹10L">₹5 – ₹10 Lakh</option>
                        <option value="Above ₹10L">Above ₹10 Lakh</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-1.5">Message</label>
                    <textarea id="message" required rows={4} value={formData.message}
                      onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                      className={inputCls + ' resize-none'}
                      placeholder="Tell us about your event — guest count, venue ideas, special requests..." />
                  </div>

                  <button type="submit" className="btn-primary w-full text-base">
                    Request a Free Consultation <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
