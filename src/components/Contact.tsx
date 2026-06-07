import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const eventTypes = ['Personal Training', 'Group Classes', 'Nutrition Coaching', 'Wellness Retreat', 'Youth Fitness', 'Corporate Wellness', 'Other'];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', eventType: '', eventDate: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', eventType: '', eventDate: '', budget: '', message: '' });
    }, 4000);
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white';

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">Contact Us</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-800 mt-3 mb-6">Let's Start Your Fitness Journey</h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">Contact us for a free consultation and discover the right training path for your goals.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6">
            <div className="bg-navy-800 rounded-2xl p-8 text-white">
              <h3 className="font-heading text-xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                  { icon: Mail, label: 'Email', value: 'hello@petalfitness.com' },
                  { icon: MapPin, label: 'Address', value: '42 Fitness Plaza, MG Road, Mumbai 400001' },
                  { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9 AM - 7 PM' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div><div className="text-navy-300 text-sm">{label}</div><div className="font-medium">{value}</div></div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-navy-700">
                <div className="text-navy-300 text-sm mb-3">Follow Us</div>
                <div className="flex gap-3">
                  {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-lg bg-navy-700 flex items-center justify-center text-navy-300 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100/50">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-navy-800 mb-2">Thank You!</h3>
                  <p className="text-navy-600">We've received your request and will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className="block text-sm font-medium text-navy-700 mb-1">Full Name</label>
                      <input required type="text" value={formData.name} onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))} className={inputClass} placeholder="Your name" /></div>
                    <div><label className="block text-sm font-medium text-navy-700 mb-1">Phone</label>
                      <input required type="tel" value={formData.phone} onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))} className={inputClass} placeholder="Your phone number" /></div>
                  </div>
                  <div><label className="block text-sm font-medium text-navy-700 mb-1">Email</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))} className={inputClass} placeholder="your@email.com" /></div>
                  <div className="grid sm:grid-cols-3 gap-5">
                    <div><label className="block text-sm font-medium text-navy-700 mb-1">Program Type</label>
                      <select required value={formData.eventType} onChange={(e) => setFormData((f) => ({ ...f, eventType: e.target.value }))} className={inputClass}>
                        <option value="">Select type</option>{eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select></div>
                    <div><label className="block text-sm font-medium text-navy-700 mb-1">Preferred Start Date</label>
                      <input type="date" value={formData.eventDate} onChange={(e) => setFormData((f) => ({ ...f, eventDate: e.target.value }))} className={inputClass} /></div>
                    <div><label className="block text-sm font-medium text-navy-700 mb-1">Program Range</label>
                      <select value={formData.budget} onChange={(e) => setFormData((f) => ({ ...f, budget: e.target.value }))} className={inputClass}>
                        <option value="">Select range</option>
                        <option value="Trial Session">Trial Session</option>
                        <option value="Monthly Membership">Monthly Membership</option>
                        <option value="Quarterly Membership">Quarterly Membership</option>
                        <option value="Annual Membership">Annual Membership</option>
                        <option value="Corporate Program">Corporate Program</option>
                      </select></div>
                  </div>
                  <div><label className="block text-sm font-medium text-navy-700 mb-1">Message</label>
                    <textarea required rows={4} value={formData.message} onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                      className={inputClass + ' resize-none'} placeholder="Tell us about your goals and fitness preferences..." /></div>
                  <button type="submit" className="btn-primary w-full text-base">Request a Free Consultation <Send className="w-5 h-5" /></button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
