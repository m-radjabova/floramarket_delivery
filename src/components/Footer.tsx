import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Dribbble, 
  Flower2, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  Twitter,
  Facebook,
  Heart,
  ChevronRight,
  Clock,
  Shield,
  Truck,
  Sparkles
} from 'lucide-react';

const quickLinks = [
  { name: 'Fresh Arrivals', href: '#collections' },
  { name: 'Wedding Collection', href: '#collections' },
  { name: 'Gift Bouquets', href: '#collections' },
  { name: 'Best Sellers', href: '#collections' },
  { name: 'Gift Certificates', href: '#contact' }
];

const supportLinks = [
  { name: 'Delivery Information', href: '#contact' },
  { name: 'Return Policy', href: '#contact' },
  { name: 'Flower Care Tips', href: '#contact' },
  { name: 'FAQs', href: '#contact' },
  { name: 'Privacy Policy', href: '#contact' }
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' },
  { icon: Dribbble, href: '#', label: 'Dribbble', color: 'hover:text-pink-400' },
  { icon: Send, href: '#', label: 'Telegram', color: 'hover:text-blue-500' }
];

const trustBadges = [
  { icon: Truck, text: 'Express Delivery', subtext: 'Same-day available' },
  { icon: Shield, text: 'Freshness Guarantee', subtext: '7-day promise' },
  { icon: Clock, text: '24/7 Support', subtext: 'Always here to help' }
];

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer id="contact" className="relative mt-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-rose-100/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-100/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-50/10 blur-3xl" />
      </div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #c2410c 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 pb-8 pt-16">
        {/* Main Footer Content */}
        <div className="grid gap-10 rounded-3xl bg-white/80 p-8 shadow-xl shadow-rose-100/20 backdrop-blur-sm border border-rose-100/50 md:p-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr] lg:gap-8">
          
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-lg"
              >
                <Flower2 size={22} />
              </motion.div>
              <div>
                <p
                  className="text-2xl font-bold text-gray-900 md:text-3xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  FloraMarket
                </p>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-400">
                  Premium Floristry
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-gray-600">
              We deliver joy through thoughtfully crafted floral arrangements. 
              Each bouquet is handmade with love and care, ensuring lasting beauty 
              for your special moments.
            </p>

            {/* Trust Badges */}
            <div className="mt-6 space-y-3">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 rounded-xl bg-rose-50/50 p-2"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-rose-500">
                    <badge.icon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{badge.text}</p>
                    <p className="text-[10px] text-gray-500">{badge.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white text-gray-500 shadow-sm transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
              Collections
            </p>
            <div className="mt-5 space-y-3">
              {quickLinks.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-all hover:text-rose-500"
                >
                  <ChevronRight size={12} className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
                  <span className="transition-transform group-hover:translate-x-1">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
              Support
            </p>
            <div className="mt-5 space-y-3">
              {supportLinks.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-all hover:text-rose-500"
                >
                  <ChevronRight size={12} className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2" />
                  <span className="transition-transform group-hover:translate-x-1">{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
              Connect With Us
            </p>
            
            {/* Contact Info */}
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <Phone size={16} className="mt-0.5 text-rose-400 shrink-0" />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <Mail size={16} className="mt-0.5 text-rose-400 shrink-0" />
                <span>hello@floramarket.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin size={16} className="mt-0.5 text-rose-400 shrink-0" />
                <span>Tashkent, Uzbekistan <br />Express delivery zone</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-gray-700 mb-2">Get 10% off your first order</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 rounded-full border border-rose-200 bg-white px-4 py-2 text-sm text-gray-700 placeholder:text-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 text-xs font-bold text-white shadow-md transition-all hover:shadow-lg"
                >
                  {isSubscribed ? '✓' : 'Subscribe'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-white/50 px-6 py-4 backdrop-blur-sm border border-rose-100/50 md:flex-row"
        >
          <p className="text-center text-xs font-medium text-gray-500 md:text-left">
            © 2026 FloraMarket. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Made with</span>
            <Heart size={12} className="text-rose-400 animate-pulse" />
            <span>for flower lovers</span>
          </div>
          
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="transition-colors hover:text-rose-500">Terms</a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-rose-500">Privacy</a>
            <span>•</span>
            <a href="#" className="transition-colors hover:text-rose-500">Cookies</a>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-300/30 to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-20 left-4 hidden lg:block"
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rose-100/50 text-rose-400 backdrop-blur-sm">
          <Sparkles size={14} />
        </div>
      </motion.div>
    </footer>
  );
};