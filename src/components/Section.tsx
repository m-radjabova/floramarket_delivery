import React from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Leaf, Flower2 } from 'lucide-react';

interface SectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'centered' | 'minimal';
  decorative?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  description, 
  children, 
  className = "",
  variant = 'default',
  decorative = true 
}) => {
  const isCentered = variant === 'centered';

  return (
    <section className={`relative ${className}`}>
      {/* Background Decorative Elements */}
      {decorative && (
        <>
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-0 h-64 w-64 rounded-full bg-rose-100/30 blur-3xl" />
            <div className="absolute bottom-20 right-0 h-64 w-64 rounded-full bg-amber-100/30 blur-3xl" />
          </div>
          
          {/* Subtle Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #c2410c 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-28">
        {/* Header Section */}
        <div className={`mb-12 md:mb-16 lg:mb-20 ${isCentered ? 'text-center' : ''}`}>
          {/* Subtitle */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`mb-4 ${isCentered ? 'flex justify-center' : ''}`}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-50 to-amber-50 px-4 py-1.5 shadow-sm border border-rose-100">
                <Flower2 size={12} className="text-rose-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                  {subtitle}
                </span>
              </div>
            </motion.div>
          )}

          {/* Title with Gradient Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          >
            {variant === 'minimal' ? (
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : (
              <h2 
                className={`text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl ${
                  isCentered ? 'mx-auto' : ''
                } ${variant === 'default' ? 'bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent' : 'text-gray-900'}`}
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {title}
              </h2>
            )}
          </motion.div>

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              className={`mt-5 text-base leading-relaxed text-gray-600 max-w-2xl ${
                isCentered ? 'mx-auto' : ''
              }`}
            >
              {description}
            </motion.p>
          )}

          {/* Decorative Divider */}
          {decorative && variant !== 'minimal' && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
              className={`mt-8 h-px bg-gradient-to-r from-rose-200 via-rose-300/50 to-transparent ${
                isCentered ? 'mx-auto w-32' : 'w-24'
              }`}
            />
          )}
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>

      {/* Optional Bottom Decoration */}
      {decorative && variant !== 'minimal' && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200/50 to-transparent" />
      )}
    </section>
  );
};

// Alternative variant with floating decoration
export const SectionFloating: React.FC<SectionProps> = (props) => {
  return (
    <div className="relative">
      {/* Floating Decorative Elements */}
      <div className="absolute -left-4 top-20 hidden lg:block">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100/50 text-rose-400 backdrop-blur-sm"
        >
          <Leaf size={20} />
        </motion.div>
      </div>
      <div className="absolute -right-4 bottom-20 hidden lg:block">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
          className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100/50 text-amber-400 backdrop-blur-sm"
        >
          <Sparkles size={16} />
        </motion.div>
      </div>
      
      <Section {...props} />
    </div>
  );
};

// Compact section variant for smaller spaces
export const SectionCompact: React.FC<SectionProps> = ({ title, subtitle, description, children, className = "" }) => {
  return (
    <section className={`max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 ${className}`}>
      <div className="mb-8 text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-bold uppercase tracking-wider text-rose-500"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 md:text-4xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-sm text-gray-600"
          >
            {description}
          </motion.p>
        )}
      </div>
      {children}
    </section>
  );
};