import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, X } from 'lucide-react';
import { upcomingEvents } from '../data/content';

export default function UpcomingEvents() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', event: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setShowForm(false); setFormData({ name: '', email: '', phone: '', event: '' }); }, 3000);
  };

  return (
    <section id="upcoming" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-gold-500 font-semibold text-sm tracking-widest uppercase">Upcoming</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-800 mt-3 mb-6">Upcoming Fitness Sessions</h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">Join our next classes and workshops to stay motivated, strong, and energized.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {upcomingEvents.map((event, i) => (
            <motion.div key={event.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-navy-100/50 transition-all duration-300">
              <div className="relative overflow-hidden h-56">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-gold-500 text-navy-900 px-4 py-2 rounded-lg font-bold text-sm">
                  <Calendar className="w-4 h-4 inline mr-1.5" />{event.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy-800 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-navy-500 text-sm mb-3"><MapPin className="w-4 h-4" />{event.location}</div>
                <p className="text-navy-600 text-sm leading-relaxed mb-5">{event.description}</p>
                <button onClick={() => { setFormData((f) => ({ ...f, event: event.title })); setShowForm(true); }}
                  className="btn-outline !px-6 !py-2.5 text-sm">Register Now <ArrowRight className="w-4 h-4" /></button>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/70 backdrop-blur-sm" onClick={() => setShowForm(false)}>
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-xl font-bold text-navy-800">Register for Session</h3>
                <button onClick={() => setShowForm(false)} className="p-1 text-navy-400 hover:text-navy-600"><X className="w-5 h-5" /></button>
              </div>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h4 className="font-heading text-lg font-bold text-navy-800 mb-2">Registration Successful!</h4>
                  <p className="text-navy-600 text-sm">We'll send your session details shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div><label className="block text-sm font-medium text-navy-700 mb-1">Full Name</label>
                    <input required type="text" value={formData.name} onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm" placeholder="Your full name" /></div>
                  <div><label className="block text-sm font-medium text-navy-700 mb-1">Email</label>
                    <input required type="email" value={formData.email} onChange={(e) => setFormData((f) => ({ ...f, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm" placeholder="your@email.com" /></div>
                  <div><label className="block text-sm font-medium text-navy-700 mb-1">Phone</label>
                    <input required type="tel" value={formData.phone} onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm" placeholder="Your phone number" /></div>
                  <div><label className="block text-sm font-medium text-navy-700 mb-1">Session</label>
                    <input readOnly value={formData.event} className="w-full px-4 py-3 rounded-xl border border-navy-200 bg-navy-50 text-sm text-navy-600" /></div>
                  <button type="submit" className="btn-primary w-full text-sm mt-2">Complete Registration</button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}
