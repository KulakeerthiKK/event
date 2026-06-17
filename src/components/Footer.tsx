import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home',         href: '#hero' },
  { label: 'About Us',     href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Portfolio',    href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact',      href: '#contact' },
];

const serviceLinks = [
  { label: 'Event Planning',        path: '/services/event-planning' },
  { label: 'Corporate Events',      path: '/services/corporate-events' },
  { label: 'Weddings',             path: '/services/weddings' },
  { label: 'Décor & Styling',       path: '/services/decor' },
  { label: 'Entertainment',         path: '/services/entertainment' },
  { label: 'Venue Management',      path: '/services/venue-management' },
];

const socials = [
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Facebook,  label: 'Facebook',  href: '#' },
  { Icon: Twitter,   label: 'Twitter',   href: '#' },
  { Icon: Linkedin,  label: 'LinkedIn',  href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="bg-dark-950 text-white">
      {/* Top bar */}
      <div className="border-b border-dark-800/60">
        <div className="container-custom px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm">
            Bangalore's trusted event management & décor company
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center
                  text-dark-400 hover:bg-brand-600 hover:text-white transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main grid */}
      <div className="container-custom px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-base font-bold text-white">rk_events</span>
                <span className="font-body text-[10px] font-semibold tracking-[0.12em] uppercase text-brand-400">n_decors</span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed mb-6">
              Premium event management and décor company based in Bangalore — weddings, corporate events, celebrations, and beyond.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center
                    text-dark-400 hover:bg-brand-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-dark-400 text-sm hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-dark-400 text-sm hover:text-brand-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-bold mb-5 text-white">Contact</h4>
            <ul className="space-y-4">
              {[
                { Icon: Phone,  value: '+91 98765 43210' },
                { Icon: Mail,   value: 'hello@rkeventsndecors.com' },
                { Icon: MapPin, value: 'Prestige Altanta 1 A Koramangla, Bangalore 560034' },
              ].map(({ Icon, value }) => (
                <li key={value} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                  <span className="text-dark-400 text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-800/60">
        <div className="container-custom px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-dark-500 text-sm">
            &copy; {new Date().getFullYear()} rk_events_n_decors. All rights reserved.
          </p>
          <div className="flex gap-6 text-dark-500 text-sm">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
