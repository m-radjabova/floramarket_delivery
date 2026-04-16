import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Flower2,
  Leaf,
  Mail,
  Minus,
  Plus,
  Quote,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
  X,
  Star,
  Heart,
  Shield,
  Gift,
  Calendar,
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Section } from './components/Section';
import { Flower, flowers } from './data/flowers';

const signatureMoments = [
  {
    title: "Expertly Curated",
    description: "Each bouquet is hand-selected and arranged by our master florists for perfect harmony.",
    icon: Sparkles,
  },
  {
    title: "Express Delivery",
    description: "Same-day delivery available. Your flowers arrive fresh and beautifully presented.",
    icon: Truck,
  },
  {
    title: "Farm Fresh",
    description: "Directly sourced from sustainable farms, ensuring the longest vase life.",
    icon: Leaf,
  },
];

const testimonials = [
  {
    quote: "Absolutely stunning arrangements! The flowers lasted over two weeks and brought so much joy to our home.",
    name: "Madina K.",
    role: "Verified Buyer",
    rating: 5,
  },
  {
    quote: "The website is a dream to navigate. Ordering was seamless, and the delivery was right on time for our anniversary.",
    name: "Aziza R.",
    role: "Loyal Customer",
    rating: 5,
  },
  {
    quote: "I was blown away by the presentation and the freshness. Will definitely be ordering again for all my special occasions.",
    name: "Javohir S.",
    role: "First-time Buyer",
    rating: 5,
  },
];

const serviceSteps = [
  {
    index: "01",
    title: "Choose Your Bouquet",
    text: "Browse our curated collections and select the perfect arrangement for any occasion.",
  },
  {
    index: "02",
    title: "Artisan Crafting",
    text: "Our florists handcraft each bouquet with care, ensuring every detail is perfect.",
  },
  {
    index: "03",
    title: "Swift Delivery",
    text: "We deliver your flowers with care, ensuring they arrive fresh and on time, every time.",
  },
];

interface CartItem {
  flower: Flower;
  quantity: number;
}

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const seasonalFlowers = flowers.filter((flower) => flower.category === "seasonal");
  const hitFlowers = flowers.filter((flower) => flower.category === "hit");
  const discountFlowers = flowers.filter((flower) => flower.category === "discount");

  const addToCart = (flower: Flower) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.flower.id === flower.id);
      if (existing) {
        return current.map((item) =>
          item.flower.id === flower.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { flower, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, change: number) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.flower.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((current) => current.filter((item) => item.flower.id !== id));
  };

  const toggleWishlist = (id: string) => {
    setWishlist((current) =>
      current.includes(id) ? current.filter((itemId) => itemId !== id) : [...current, id]
    );
  };

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.flower.price * item.quantity, 0),
    [cartItems]
  );

  const formattedCartTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(cartTotal);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-rose-50/40 via-white to-amber-50/30">
      <Navbar cartCount={cartCount} onCartOpen={() => setIsCartOpen(true)} />

      <main className="w-full">
        <Hero />

        {/* Signature Collection Section - Enhanced */}
        <Section
          title="Where Nature Meets Elegance"
          subtitle="Signature Collection"
          description="Discover our curated selection of premium blooms, each arrangement tells a unique story of beauty and sophistication."
          className="pt-8"
        >
          <div id="collections" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] scroll-mt-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-rose-50/30 p-8 shadow-xl shadow-rose-100/20 transition-all duration-500 hover:shadow-2xl md:p-10"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-200/20 blur-3xl transition-all duration-700 group-hover:scale-150" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl transition-all duration-700 group-hover:scale-150" />
              
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 shadow-sm backdrop-blur-sm">
                  Artisan Collection
                </span>
                <h3
                  className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Each petal, a promise of lasting beauty.
                </h3>
                <p className="mt-5 text-base leading-relaxed text-gray-600">
                  Experience the difference of hand-crafted floral artistry. Our master florists
                  combine color, texture, and form to create unforgettable moments.
                </p>
              </div>

              <div className="relative z-10 mt-10 grid gap-5 md:grid-cols-3">
                {signatureMoments.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-2xl bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-md">
                      <item.icon size={22} />
                    </div>
                    <h4 className="mt-4 text-lg font-bold text-gray-900">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl shadow-rose-100/20 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-[0.9] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&q=80&w=1200"
                  alt="Floral styling studio"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              <div className="space-y-4 p-7">
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600">
                    Behind the Scenes
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Our Studio
                  </span>
                </div>
                <h3
                  className="text-3xl font-bold leading-tight tracking-tight text-gray-900"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Where floral dreams come to life.
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Every arrangement is crafted with intention and love in our light-filled studio,
                  ensuring each creation is a masterpiece of nature.
                </p>
                <button className="group inline-flex items-center gap-2 text-sm font-semibold text-rose-600 transition-all hover:gap-3">
                  Discover our process <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Seasonal Collection - Enhanced */}
        <Section
          title="Fresh from the fields, straight to your door."
          subtitle="Seasonal Highlights"
          description="Explore our latest arrivals, hand-selected for their exceptional beauty and freshness. These limited-edition bouquets capture the essence of the season."
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {seasonalFlowers.map((flower, index) => (
              <ProductCard
                key={flower.id}
                flower={flower}
                index={index}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isWishlisted={wishlist.includes(flower.id)}
              />
            ))}
          </div>
        </Section>

        {/* Best Sellers - Enhanced */}
        <Section
          title="Loved by thousands, chosen for every occasion."
          subtitle="Best Sellers"
          description="Our most beloved arrangements, celebrated for their timeless beauty and exceptional quality. These favorites never go out of style."
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {hitFlowers.map((flower, index) => (
              <ProductCard
                key={flower.id}
                flower={flower}
                index={index}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isWishlisted={wishlist.includes(flower.id)}
              />
            ))}
          </div>
        </Section>

        {/* How It Works - Enhanced */}
        <section className="container-shell py-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 to-rose-700 p-8 shadow-xl md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
              
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-rose-300/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  Simple Process
                </span>
                <h2
                  className="mt-6 max-w-lg text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  From our heart to your home in three easy steps.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-rose-100">
                  We've made sending flowers effortless. Choose, we craft, we deliver—it's that simple.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-5">
              {serviceSteps.map((step, index) => (
                <motion.div
                  key={step.index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col gap-5 rounded-2xl bg-white p-6 shadow-md shadow-rose-100/20 transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/30 md:flex-row md:items-center md:justify-between md:p-7"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="text-5xl font-bold leading-none text-rose-400/50 transition-all duration-300 group-hover:text-rose-500"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {step.index}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full bg-rose-50 px-5 py-2 text-xs font-bold uppercase tracking-wider text-rose-600 transition-all group-hover:bg-rose-100">
                    Step {step.index}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section - Enhanced */}
        <section id="story" className="container-shell scroll-mt-32 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-xl md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-600/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-600/20 blur-3xl" />
              
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  Our Story
                </span>
                <h2
                  className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  More than a flower shop—a passion for beauty.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-300">
                  Founded with a love for nature's artistry, we're dedicated to providing
                  exceptional flowers and unforgettable experiences. Every order is a reflection of
                  our commitment to quality and care.
                </p>

                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  {[
                    { icon: Gift, label: "Handcrafted", value: "Each bouquet is uniquely arranged" },
                    { icon: Calendar, label: "Sustainable", value: "Eco-friendly practices and sourcing" },
                    { icon: Shield, label: "Fresh Promise", value: "7-day freshness guarantee" },
                    { icon: Heart, label: "Passion-Driven", value: "Created with love and expertise" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                    >
                      <Icon size={20} className="text-rose-400" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-gray-400">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-medium leading-tight text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl shadow-rose-100/20 transition-all duration-500 hover:shadow-2xl md:grid md:grid-cols-[0.8fr_1.2fr] md:p-0">
                <div className="overflow-hidden md:rounded-l-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&q=80&w=1200"
                    alt="Gullarni bezash jarayoni"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <span className="inline-flex w-fit rounded-full bg-rose-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-600">
                    Artisan Craftsmanship
                  </span>
                  <h3
                    className="mt-4 text-2xl font-bold leading-tight text-gray-900 md:text-3xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Ready to gift, ready to impress.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    Each arrangement arrives in our signature eco-friendly packaging, complete with
                    care instructions to ensure your flowers thrive.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { icon: Clock3, label: "Express Delivery", value: "90 min", color: "rose" },
                  { icon: BadgeCheck, label: "Freshness Guarantee", value: "7 days", color: "emerald" },
                  { icon: Flower2, label: "New Arrivals", value: "Weekly", color: "amber" },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -5 }}
                    className="group rounded-2xl bg-white p-6 text-center shadow-md shadow-rose-100/20 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-rose-100 to-amber-100 text-rose-600 transition-all duration-300 group-hover:scale-110">
                      <item.icon size={24} />
                    </div>
                    <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
                      {item.label}
                    </p>
                    <p
                      className="mt-2 text-3xl font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Discount Section - Enhanced */}
        <Section
          title="Special offers for special moments."
          subtitle="Limited Time Offers"
          description="Discover our carefully selected discounted bouquets, perfect for gifting or treating yourself. These beautiful arrangements won't last long."
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {discountFlowers.map((flower, index) => (
              <ProductCard
                key={flower.id}
                flower={flower}
                index={index + 4}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                isWishlisted={wishlist.includes(flower.id)}
              />
            ))}
          </div>
        </Section>

        {/* Testimonials - Enhanced */}
        <section id="reviews" className="container-shell scroll-mt-32 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 to-rose-50/40 p-8 shadow-lg md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-200/30 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
              
              <div className="relative z-10">
                <span className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 backdrop-blur-sm">
                  Happy Customers
                </span>
                <h2
                  className="mt-6 max-w-lg text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-5xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  What our flower lovers are saying.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-600">
                  Don't just take our word for it—hear from those who've experienced the magic of
                  our blooms.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {testimonials.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl bg-white p-7 shadow-md shadow-rose-100/20 transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/30 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <Quote size={32} className="text-rose-400 opacity-60" />
                    <div className="flex gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p
                    className="mt-5 text-2xl font-semibold leading-tight text-gray-900 md:text-3xl"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    "{item.quote}"
                  </p>
                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-rose-100 pt-5">
                    <div>
                      <p className="font-bold text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                    <div className="rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                      Verified
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section - Enhanced */}
        <section className="container-shell py-12 md:py-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-12 shadow-2xl md:px-12 md:py-16">
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-rose-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-amber-600/20 blur-3xl" />
            
            <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
              <div className="max-w-2xl text-white">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                  Stay Updated
                </span>
                <h2
                  className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Get first dibs on fresh blooms & exclusive offers.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gray-300">
                  Subscribe to our newsletter and be the first to know about new collections,
                  seasonal specials, and floral inspiration.
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-md md:p-8">
                <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300">
                      Email Address
                    </span>
                    <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-3 transition-all focus-within:border-rose-400">
                      <Mail className="text-rose-400" size={18} />
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full bg-transparent text-sm text-white placeholder:text-gray-400 focus:outline-none"
                      />
                    </div>
                  </label>

                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose-500 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-rose-600 hover:shadow-xl hover:-translate-y-0.5">
                    Subscribe Now <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Enhanced Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 260 }}
              className="ml-auto flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 bg-gradient-to-r from-rose-50 to-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
                    Your Cart
                  </p>
                  <h3
                    className="mt-1 text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Selected Blooms
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition-all hover:bg-gray-50 hover:scale-105"
                  aria-label="Close cart"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-6">
                {cartItems.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                      <ShoppingBag size={32} />
                    </div>
                    <h4
                      className="mt-6 text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      Your cart is empty
                    </h4>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
                      Looks like you haven't added any flowers to your cart yet.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-6 rounded-full bg-rose-500 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-rose-600"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.flower.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="rounded-2xl border border-gray-100 bg-gray-50/50 p-4 shadow-sm transition-all hover:shadow-md"
                      >
                        <div className="flex gap-4">
                          <img
                            src={item.flower.image}
                            alt={item.flower.name}
                            className="h-24 w-20 rounded-xl object-cover shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-wider text-rose-500">
                                  {item.flower.palette}
                                </p>
                                <h4
                                  className="mt-1 text-xl font-bold text-gray-900"
                                  style={{ fontFamily: "var(--font-serif)" }}
                                >
                                  {item.flower.name}
                                </h4>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.flower.id)}
                                className="text-gray-400 transition-all hover:text-red-500 hover:scale-110"
                                aria-label="Remove item"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                            <div className="mt-4 flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1 shadow-sm">
                                <button
                                  onClick={() => updateQuantity(item.flower.id, -1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-all hover:bg-gray-100"
                                >
                                  <Minus size={14} />
                                </button>
                                <span className="min-w-8 text-center text-sm font-bold text-gray-900">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.flower.id, 1)}
                                  className="flex h-8 w-8 items-center justify-center rounded-full text-gray-600 transition-all hover:bg-gray-100"
                                >
                                  <Plus size={14} />
                                </button>
                              </div>
                              <p className="text-xl font-extrabold text-rose-600">
                                {new Intl.NumberFormat("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                  maximumFractionDigits: 0,
                                }).format(item.flower.price * item.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="border-t border-gray-100 bg-gray-50/80 px-6 py-5 backdrop-blur-sm">
                  <div className="mb-4 flex items-center justify-between text-base">
                    <span className="font-semibold text-gray-600">Subtotal</span>
                    <span className="text-2xl font-extrabold text-gray-900">{formattedCartTotal}</span>
                  </div>
                  <p className="mb-4 text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
                  <button className="w-full rounded-full bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}