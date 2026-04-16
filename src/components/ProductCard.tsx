import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Heart, ShoppingBag, Eye, Star, Truck, Sparkles } from 'lucide-react';
import { Flower } from '../data/flowers';

interface ProductCardProps {
  flower: Flower;
  index: number;
  onAddToCart: (flower: Flower) => void;
  onToggleWishlist?: (id: string) => void;
  isWishlisted?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  flower, 
  index, 
  onAddToCart,
  onToggleWishlist,
  isWishlisted = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(flower.price);

  const formattedOldPrice = flower.oldPrice
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(flower.oldPrice)
    : null;

  const discount = flower.oldPrice 
    ? Math.round(((flower.oldPrice - flower.price) / flower.oldPrice) * 100)
    : null;

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    onAddToCart(flower);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleWishlist = () => {
    if (onToggleWishlist) {
      onToggleWishlist(flower.id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-rose-100/20 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-200/40 hover:-translate-y-2"
    >
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-rose-200/0 via-rose-200/0 to-amber-200/0 transition-all duration-500 group-hover:from-rose-200/30 group-hover:via-rose-200/20 group-hover:to-amber-200/30 pointer-events-none" />
      
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-amber-50">
        {/* Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-rose-100 to-amber-100" />
        )}
        
        <motion.img 
          src={flower.image} 
          alt={flower.name}
          className={`w-full aspect-[4/5] object-cover transition-all duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${isHovered ? 'scale-110' : 'scale-100'}`}
          onLoad={() => setImageLoaded(true)}
          referrerPolicy="no-referrer"
        />
        
        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Badges */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {flower.tag && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-rose-600 shadow-lg backdrop-blur-sm"
            >
              <Sparkles size={12} />
              {flower.tag}
            </motion.div>
          )}
          {discount && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.12 }}
              className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
            >
              -{discount}% OFF
            </motion.div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlist}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
          >
            <motion.div
              animate={isWishlisted ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart 
                size={18} 
                className={`transition-colors ${
                  isWishlisted ? 'fill-rose-500 text-rose-500' : 'text-gray-600 hover:text-rose-500'
                }`}
              />
            </motion.div>
          </motion.button>
          
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
          >
            <Eye size={18} className="text-gray-600 hover:text-rose-500 transition-colors" />
          </motion.button>
        </div>

        {/* Quick Add Button - Appears on Hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/95 py-3 font-semibold text-gray-800 shadow-xl backdrop-blur-md transition-all hover:bg-rose-500 hover:text-white"
              >
                <ShoppingBag size={18} />
                Quick Add
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 backdrop-blur-sm">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          <span className="text-xs font-semibold text-gray-700">4.9</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-white p-5">
        {/* Category and Arrow */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <p className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                {flower.palette}
              </p>
            </div>
            <motion.h3
              className="text-xl font-bold leading-tight text-gray-900 transition-colors group-hover:text-rose-600"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {flower.name}
            </motion.h3>
          </div>
          <motion.div
            whileHover={{ x: 3, y: -3 }}
            className="rounded-full bg-rose-50 p-2 text-rose-500 transition-all group-hover:bg-rose-500 group-hover:text-white"
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>

        {/* Price and Size */}
        <div className="mt-4 flex items-end justify-between gap-3 border-t border-rose-100 pt-4">
          <div>
            <div className="flex items-center gap-2">
              <motion.span 
                key={formattedPrice}
                className="text-xl font-extrabold text-gray-900"
              >
                {formattedPrice}
              </motion.span>
              {formattedOldPrice && (
                <span className="text-sm text-gray-400 line-through">{formattedOldPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                {flower.size}
              </p>
            </div>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
            Fresh Today
          </p>
        </div>

        {/* Add to Cart Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCart}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:shadow-lg"
        >
          <AnimatePresence mode="wait">
            {isAddedToCart ? (
              <motion.div
                key="check"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                className="flex items-center gap-2"
              >
                <span>Added!</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>
            ) : (
              <motion.div
                key="cart"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="flex items-center gap-2"
              >
                <ShoppingBag size={16} />
                Add to Cart
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Corner Decoration */}
      <div className="absolute bottom-0 right-0 h-16 w-16 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-8 -right-8 h-16 w-16 rotate-45 bg-gradient-to-br from-rose-100 to-amber-100 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.div>
  );
};