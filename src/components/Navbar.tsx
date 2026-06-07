import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Classes', href: '#upcoming' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-navy-900/5' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <Sparkles className={`w-7 h-7 transition-colors ${scrolled ? 'text-gold-500' : 'text-gold-400'}`} />
            <span className={`font-heading text-2xl font-bold transition-colors ${scrolled ? 'text-navy-800' : 'text-white'}`}>
              Petal Fitness
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleClick(link.href)}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${scrolled ? 'text-navy-700' : 'text-white/90'}`}>
                {link.label}
              </button>
            ))}
            <button onClick={() => handleClick('#contact')} className="btn-primary text-sm !px-6 !py-2.5">
              Get Quote
            </button>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-navy-800 hover:bg-navy-50' : 'text-white hover:bg-white/10'}`}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-navy-100 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-gold-600 rounded-lg transition-colors text-sm font-medium">
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-3">
                <button onClick={() => handleClick('#contact')} className="btn-primary w-full text-sm">Get Quote</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
