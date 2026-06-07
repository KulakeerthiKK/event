import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#hero' }, { label: 'About Us', href: '#about' }, { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' }, { label: 'Testimonials', href: '#testimonials' }, { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Personal Training', path: '/services/personal-training' }, { label: 'Group Classes', path: '/services/group-classes' },
  { label: 'Nutrition Coaching', path: '/services/nutrition-coaching' }, { label: 'Wellness Retreats', path: '/services/wellness-retreats' },
  { label: 'Gym Design', path: '/services/gym-design' }, { label: 'Youth Fitness', path: '/services/youth-fitness' },
];

export default function Footer() {
  const scrollTo = (href: string) => { document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer className="bg-black-900 text-white">
      <div className="container-custom section-padding !pb-0">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Sparkles className="w-7 h-7 text-orange-500" />
              <span className="font-heading text-2xl font-bold">Wow Fitness KA 42</span>
            </Link>
            <p className="text-black-400 text-sm leading-relaxed mb-6">Premium gym services, expert trainers, and wellness programs designed to help you thrive.</p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-black-800 flex items-center justify-center text-black-400 hover:bg-orange-500 hover:text-black-900 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}><button onClick={() => scrollTo(link.href)} className="text-black-400 text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> {link.label}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}><Link to={link.path} className="text-black-400 text-sm hover:text-orange-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> {link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3"><Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" /><span className="text-black-400 text-sm">+91 98765 43210</span></div>
              <div className="flex items-start gap-3"><Mail className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" /><span className="text-black-400 text-sm">hello@wowfitnesska42.com</span></div>
              <div className="flex items-start gap-3"><MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" /><span className="text-black-400 text-sm">42 Fitness Plaza, MG Road, Mumbai 400001</span></div>
            </div>
          </div>
        </div>
        <div className="border-t border-black-800 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black-500 text-sm">&copy; {new Date().getFullYear()} Wow Fitness KA 42. All rights reserved.</p>
          <div className="flex gap-6 text-black-500 text-sm">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

