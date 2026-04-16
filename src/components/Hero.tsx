import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flower2, Sparkles, Star, Shield, Clock, ChevronRight, Award, Heart } from 'lucide-react';

const stats = [
  { value: '15k+', label: 'Delivered Orders', description: 'This year alone', icon: Award },
  { value: '4.9/5', label: 'Customer Rating', description: 'Based on 2,500+ reviews', icon: Star },
  { value: '12', label: 'Fresh Collections', description: 'Updated weekly', icon: Flower2 },
];


export const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:pb-28"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 via-white to-amber-50/30" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="luxury-orb left-0 top-16 h-96 w-96 bg-rose-200/30 blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut", delay: 2 }}
        className="luxury-orb right-0 top-28 h-96 w-96 bg-amber-200/25 blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
        className="luxury-orb bottom-20 left-1/4 h-80 w-80 bg-emerald-100/20 blur-3xl"
      />
      
      <div className="grid-fade absolute inset-x-0 top-0 h-[32rem] opacity-40" />

      <div className="container-shell max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 shadow-2xl shadow-rose-100/30 backdrop-blur-xl md:rounded-4xl">
          {/* Decorative Border Gradient */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-200/20 via-transparent to-amber-200/20 pointer-events-none" />
          
          {/* Inner Content */}
          <div className="relative px-6 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
            {/* Subtle Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-rose-200 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-rose-200 rounded-bl-3xl" />
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left Column - Content */}
              <div className="relative">

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-amber-50 px-4 py-2 shadow-sm border border-rose-100 mb-6"
                >
                  <Sparkles size={14} className="text-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text">
                    Artisan Floral Studio
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.1, ease: 'easeOut' }}
                  className="text-balance max-w-3xl text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Elegant blooms for{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                      life's finest
                    </span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="absolute bottom-2 left-0 h-3 bg-rose-200/50 -z-0 rounded-full"
                    />
                  </span>{' '}
                  moments.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg"
                >
                  Experience the art of luxury floristry. Each bouquet is thoughtfully curated by our master florists, 
                  delivering unforgettable beauty and lasting freshness right to your doorstep.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="#collections"
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-rose-600 to-rose-500 px-8 py-4 text-sm font-bold tracking-wider text-white shadow-lg shadow-rose-200 transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span className="relative z-10">Explore Collection</span>
                    <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-rose-600 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white/80 px-8 py-4 text-sm font-bold tracking-wider text-gray-700 transition-all hover:border-rose-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
                  >
                    Contact Us
                  </a>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-12 grid gap-5 sm:grid-cols-3"
                >
                  {stats.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-2xl bg-white/60 p-5 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-xl border border-rose-100/50"
                    >
                      <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br from-rose-100 to-amber-100 opacity-0 transition-opacity group-hover:opacity-100" />
                      <div className="relative z-10">
                        <item.icon size={20} className="text-rose-400 mb-3" />
                        <p
                          className="text-3xl font-bold text-gray-900 md:text-4xl"
                          style={{ fontFamily: 'var(--font-serif)' }}
                        >
                          {item.value}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-gray-800">{item.label}</p>
                        <p className="mt-0.5 text-xs text-gray-500">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Column - Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
                className="relative"
              >
                {/* Decorative Background Elements */}
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border-2 border-rose-200/30 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border-2 border-amber-200/30 animate-pulse delay-1000" />
                
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-rose-200/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-amber-500/10 z-10 rounded-3xl" />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1400"
                    alt="Luxury floral bouquet arrangement"
                    className="h-full w-full object-cover rounded-3xl"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl" />
                </div>

                {/* Floating Card - Top Right */}
                <motion.div
                  initial={{ opacity: 0, x: 30, y: -30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute -top-6 -right-6 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur-md border border-rose-100 md:-top-10 md:-right-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md">
                      <Flower2 size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
                        Handcrafted
                      </p>
                      <p className="mt-1 text-sm font-semibold text-gray-800">Artisan Quality</p>
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Card - Featured Collection */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur-md border border-rose-100 md:-bottom-10 md:left-6 md:right-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
                        Featured Collection
                      </p>
                      <h3
                        className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        Rosalie Muse
                      </h3>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">(2,845 reviews)</span>
                      </div>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2 shadow-md">
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Best Seller
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Trust Badge - Bottom Right */}
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 rounded-xl bg-white/95 p-3 shadow-lg backdrop-blur-sm border border-rose-100 md:-bottom-6 md:-right-6"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100">
                      <Shield size={14} className="text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-800">Freshness</p>
                      <p className="text-[10px] text-gray-500">7-Day Guarantee</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronRight size={16} className="rotate-90 text-gray-400" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};