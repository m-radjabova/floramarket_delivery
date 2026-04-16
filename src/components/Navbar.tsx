import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Flower2, Menu, Moon, ShoppingBag, Sun, X, ChevronRight, Heart, Truck, Clock, User } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Collections', href: '#collections' },
  { name: 'Our Story', href: '#story' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      
      // Update active link based on scroll position
      const sections = navLinks.map(link => link.href);
      for (const section of sections.reverse()) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Theme initialization
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    localStorage.theme = nextDark ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', nextDark);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);
  
  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 pt-5 md:px-8">
        <div className="container-shell max-w-7xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative rounded-2xl transition-all duration-500 ${
              isScrolled
                ? 'bg-white/90 shadow-xl shadow-rose-100/30 backdrop-blur-xl border border-rose-100/50 py-3'
                : 'bg-white/70 backdrop-blur-md border border-rose-100/30 py-4'
            }`}
          >
            {/* Animated gradient border */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-200/20 via-transparent to-amber-200/20 pointer-events-none transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className="relative flex items-center justify-between gap-4 px-5 md:px-7">
              {/* Logo Section */}
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#home');
                }}
                className="group flex items-center gap-3"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-lg shadow-rose-200 transition-all duration-300 group-hover:shadow-xl"
                >
                  <Flower2 size={20} />
                </motion.div>
                <div className="hidden sm:block">
                  <motion.p
                    className="text-2xl font-bold leading-none bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--font-serif)' }}
                    whileHover={{ x: 2 }}
                  >
                    FloraMarket
                  </motion.p>
                  <p className="mt-0.5 text-[9px] font-bold uppercase tracking-wider text-rose-400">
                    Premium Floristry
                  </p>
                </div>
              </a>

              {/* Desktop Navigation Links */}
              <div className="hidden items-center gap-1 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full ${
                      activeLink === link.href
                        ? 'text-rose-600 bg-rose-50'
                        : 'text-gray-600 hover:text-rose-500 hover:bg-rose-50/50'
                    }`}
                  >
                    {link.name}
                    {activeLink === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-rose-50 -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                ))}
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center gap-2">

                {/* Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onCartOpen}
                  className="relative hidden h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-5 text-sm font-bold tracking-wider text-white shadow-md shadow-rose-200 transition-all hover:shadow-lg hover:shadow-rose-300 md:inline-flex"
                >
                  <ShoppingBag size={16} />
                  <span>Cart</span>
                  <AnimatePresence>
                    {cartCount > 0 && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-white shadow-sm"
                      >
                        {cartCount}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white/80 text-gray-600 transition-all hover:border-rose-300 hover:bg-rose-50 hover:text-rose-500 lg:hidden"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open menu"
                >
                  <Menu size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="border-b border-rose-100 bg-gradient-to-r from-rose-50 to-white px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md">
                        <Flower2 size={18} />
                      </div>
                      <div>
                        <p
                          className="text-2xl font-bold text-gray-900"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          FloraMarket
                        </p>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-rose-100 bg-white text-gray-500 transition-all hover:border-rose-300 hover:text-rose-500"
                    onClick={closeMenu}
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Mobile Menu Navigation Links */}
              <div className="flex-1 overflow-y-auto px-5 py-8">
                <div className="space-y-3">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(link.href);
                      }}
                      className="group flex items-center justify-between rounded-xl border border-rose-100 bg-white px-5 py-4 transition-all hover:border-rose-300 hover:bg-rose-50 hover:shadow-md"
                    >
                      <span className="text-base font-semibold text-gray-800 group-hover:text-rose-600">
                        {link.name}
                      </span>
                      <ChevronRight size={16} className="text-gray-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                  
                  {/* Mobile Cart Button */}
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    onClick={() => {
                      closeMenu();
                      onCartOpen();
                    }}
                    className="group flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-5 py-4 text-white shadow-md transition-all hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <ShoppingBag size={18} />
                      <span className="text-base font-semibold">Your Cart</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {cartCount > 0 && (
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold">
                          {cartCount}
                        </span>
                      )}
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </motion.button>
                </div>

                {/* Mobile Menu Info Cards */}
                <div className="mt-8 space-y-3">
                  <div className="rounded-xl bg-rose-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                        <Truck size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-rose-600">
                          Express Delivery
                        </p>
                        <p className="text-sm font-medium text-gray-700">Order before 8 PM for same-day delivery</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-xl bg-amber-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                        <Heart size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-amber-600">
                          Freshness Promise
                        </p>
                        <p className="text-sm font-medium text-gray-700">7-day freshness guarantee on all orders</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Footer */}
              <div className="border-t border-rose-100 bg-gray-50/50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Need help?</p>
                    <p className="text-sm font-semibold text-gray-800">+1 (555) 123-4567</p>
                  </div>
                  <div className="flex gap-2">
                    {['IG', 'FB', 'TW'].map((social) => (
                      <button
                        key={social}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-rose-100 bg-white text-xs font-bold text-gray-600 transition-all hover:border-rose-300 hover:text-rose-500"
                      >
                        {social}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};