import { motion, AnimatePresence } from 'motion/react';
import { 
  Cookie, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Star, 
  ChevronRight, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Our Identity', href: '#why' },
  { name: 'Products', href: '#products' },
  { name: 'Experience', href: '#experience' },
  { name: 'Location', href: '#find-us' },
];

const products = [
  { name: 'Sooper', emoji: '🍪', tag: 'Best Seller', desc: 'The classic egg & milk biscuit that defined a generation.', discount: '20% OFF' },
  { name: 'Rio', emoji: '🍫', tag: 'Cream Filled', desc: 'Double chocolate crunch with velvet vanilla cream.', discount: '15% OFF' },
  { name: 'Prince', emoji: '👑', tag: 'Chocolate', desc: 'The royal chocolate sandwich loved by the bold.', discount: '10% OFF' },
  { name: 'Picnic', emoji: '🥨', tag: 'Legacy', desc: 'Delicate crunch with the perfect hint of sweetness.', discount: '25% OFF' },
  { name: 'Party', emoji: '🥳', tag: 'Crowd Favorite', desc: 'Colorful and crispy bites for every celebration.', discount: '15% OFF' },
  { name: 'Click', emoji: '🧂', tag: 'Salty/Sweet', desc: 'The unique zeera flavored masterpiece for tea time.', discount: '10% OFF' },
];

const steps = [
  { num: '01', title: 'Noble Roots', desc: 'Sourcing the finest wheat and pure dairy from local farms.' },
  { num: '02', title: 'Crafted Dough', desc: 'Mixing secrets passed down through decades of artistry.' },
  { num: '03', title: 'Golden Bake', desc: 'Slow-baked at precise temperatures for signature crunch.' },
  { num: '04', title: 'Pure Joy', desc: 'Sealed for freshness and delivered to your doorstep.' },
];

const reviews = [
  { name: 'Sarah Ahmed', text: "The nostalgia is real! Just like the ones I had as a kid back home.", rating: 5 },
  { name: 'Haris Khan', text: "Best tea-time biscuit in the world. Sooper is unmatched.", rating: 5 },
  { name: 'Elena G.', text: "Discovered these in Toronto. The quality is incredibly consistent.", rating: 4 },
  { name: 'Zainab Q.', text: "Perfectly sweet, perfectly crunchy. My kids love the Rio sandwiches.", rating: 5 },
  { name: 'Omar S.', text: "A taste of Pakistan in every bite. Thank you for making these accessible!", rating: 5 },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white selection:bg-caramel selection:text-chocolate">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-chocolate/95 backdrop-blur-md border-b border-caramel/30 py-3' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-caramel rounded-full flex items-center justify-center shadow-lg shadow-caramel/20">
              <Cookie className="text-chocolate w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg leading-none text-cream font-bold">Peek Freans</span>
              <span className="text-[10px] uppercase tracking-widest text-biscuit font-medium mt-1">Legendary Biscuits</span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs uppercase tracking-wider text-biscuit hover:text-caramel transition-colors font-semibold">
                {link.name}
              </a>
            ))}
            <a href="#shop" className="bg-caramel text-chocolate px-6 py-2 rounded-full text-xs uppercase tracking-wider font-bold hover:bg-biscuit transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-caramel/20">
              Order Online
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-cream" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-chocolate pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif text-cream border-b border-caramel/10 pb-2"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-caramel text-chocolate py-4 rounded-xl font-bold mt-4 uppercase tracking-widest">
                Explore Shop
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-chocolate flex flex-col items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-caramel/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-deep-red/10 rounded-full blur-[120px]" />
          
          {/* Animated Cookies */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`absolute border border-caramel/10 rounded-full ${
                i === 0 ? 'w-64 h-64 top-20 right-20' : i === 1 ? 'w-40 h-40 bottom-40 left-20' : 'w-24 h-24 top-1/2 left-1/3'
              }`}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-caramel/20 border border-caramel/40 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-biscuit font-bold mb-6">
              <span className="w-1.5 h-1.5 bg-caramel rounded-full animate-pulse" />
              Celebrating 50 Years of Taste
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-none font-black mb-6">
              The Legend of <br />
              <span className="text-caramel italic">Real Crunch.</span>
            </h1>
            <p className="text-lg text-biscuit/80 font-light leading-relaxed max-w-lg mx-auto lg:mx-0 mb-10">
              From the bustling streets of Karachi to the morning tea tables of Toronto. Experience the biscuit that became the pulse of a nation.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="w-full sm:w-auto bg-caramel text-chocolate px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-biscuit transition-all group flex items-center justify-center gap-2">
                Order Delivery <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto border border-caramel/30 text-biscuit px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-caramel/10 transition-all">
                Our Story
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-caramel/20 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="font-serif text-3xl font-bold text-caramel">50+</div>
                <div className="text-[10px] uppercase tracking-widest text-biscuit/60 mt-1">Years Heritage</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-caramel">12M</div>
                <div className="text-[10px] uppercase tracking-widest text-biscuit/60 mt-1">Fans Locally</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-bold text-caramel">25+</div>
                <div className="text-[10px] uppercase tracking-widest text-biscuit/60 mt-1">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center relative"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Rotating Rings */}
              <div className="absolute inset-0 border border-caramel/20 rounded-full animate-[spin-slow_30s_linear_infinite]" />
              <div className="absolute inset-8 border border-caramel/10 rounded-full animate-[spin-slow_20s_linear_infinite_reverse]" />
              
              <div className="absolute inset-16 md:inset-24 bg-gradient-to-br from-chocolate/80 to-chocolate border-2 border-caramel/30 rounded-full shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="text-8xl md:text-[160px] filter drop-shadow-2xl mb-4"
                >
                  🍪
                </motion.div>
                <div className="text-center">
                  <span className="font-serif text-caramel tracking-[0.3em] uppercase text-xs md:text-sm font-bold">The Original</span>
                  <div className="h-px w-24 bg-caramel/30 mx-auto my-3" />
                  <span className="text-cream/50 text-[10px] uppercase tracking-widest">Est. 1966</span>
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-chocolate/90 border border-caramel/40 px-4 py-2 rounded-full text-[10px] text-biscuit font-bold whitespace-nowrap backdrop-blur-sm">
                  PEEK FREANS SOOPER
                </div>
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute bottom-10 left-0 bg-chocolate/90 border border-caramel/40 px-4 py-2 rounded-full text-[10px] text-biscuit font-bold whitespace-nowrap backdrop-blur-sm">
                  PARTY PIECES
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee Strip */}
      <div className="bg-caramel py-4 overflow-hidden border-y border-chocolate/10">
        <div className="flex animate-[scroll_40s_linear_infinite] whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="flex items-center gap-2 text-chocolate font-bold uppercase tracking-widest text-xs">
                <Star className="w-4 h-4 fill-chocolate" /> Pure Quality
              </span>
              <span className="flex items-center gap-2 text-chocolate font-bold uppercase tracking-widest text-xs">
                <ShieldCheck className="w-4 h-4" /> Trusted Ingredients
              </span>
              <span className="flex items-center gap-2 text-chocolate font-bold uppercase tracking-widest text-xs">
                <Zap className="w-4 h-4" /> Instant Energy
              </span>
              <span className="flex items-center gap-2 text-chocolate font-bold uppercase tracking-widest text-xs">
                <Heart className="w-4 h-4" /> Pakistani Pride
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Why Section */}
      <section id="why" className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-caramel mb-4 block">Craftsmanship</span>
            <h2 className="font-serif text-4xl md:text-5xl text-chocolate font-black leading-tight mb-6">
              A Symphony of Flavor <br /> in Every Single Bite
            </h2>
            <p className="text-text-mid font-light leading-relaxed mb-10 text-lg">
              We don't just bake biscuits; we engineer moments of happiness. Our process balances ancestral recipes with modern hygiene standards.
            </p>

            <div className="space-y-4">
              {[
                { icon: <ShieldCheck className="w-6 h-6" />, title: 'Premium Standards', desc: 'Sourcing only the finest ingredients that meet global safety measures.' },
                { icon: <Star className="w-6 h-6" />, title: 'Timeless Recipes', desc: 'The exact same taste you remember from decades ago, preserved for today.' },
                { icon: <Zap className="w-6 h-6" />, title: 'Nutrient Rich', desc: 'Balanced with essential vitamins to power your day-to-day routine.' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="bg-white p-6 rounded-2xl border border-caramel/10 flex gap-4 transition-all hover:border-caramel/40 group shadow-sm"
                >
                  <div className="w-12 h-12 bg-caramel rounded-xl flex items-center justify-center text-chocolate shadow-lg shadow-caramel/20 group-hover:bg-chocolate group-hover:text-caramel transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-chocolate mb-1">{item.title}</h3>
                    <p className="text-sm text-text-mid opacity-80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-chocolate rounded-[40px] p-12 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-caramel/20 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <span className="font-serif text-8xl md:text-9xl text-caramel font-black leading-none">4.9</span>
                <div className="flex justify-center gap-1 my-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-caramel text-caramel" />
                  ))}
                </div>
                <p className="text-biscuit/60 text-sm uppercase tracking-widest font-bold">Trusted by Millions Worldwide</p>
                <div className="h-px w-full bg-caramel/10 my-10" />
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-caramel/20 p-6 rounded-2xl">
                    <div className="font-serif text-3xl font-bold text-caramel">100%</div>
                    <div className="text-[10px] uppercase tracking-widest text-biscuit/60 mt-2">Natural Flour</div>
                  </div>
                  <div className="bg-white/5 border border-caramel/20 p-6 rounded-2xl">
                    <div className="font-serif text-3xl font-bold text-caramel">Zero</div>
                    <div className="text-[10px] uppercase tracking-widest text-biscuit/60 mt-2">Trans Fats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-caramel mb-4 block">The Collection</span>
              <h2 className="font-serif text-4xl md:text-5xl text-chocolate font-black leading-tight">
                Our Signature Selection
              </h2>
            </div>
            <button className="flex items-center gap-2 text-caramel font-bold group">
              View All Variants <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-cream/50 rounded-3xl p-8 border border-caramel/10 relative overflow-hidden transition-all hover:bg-cream hover:border-caramel/30 hover:shadow-xl hover:shadow-chocolate/5"
              >
                <div className="absolute top-6 right-6 bg-deep-red text-white text-[10px] font-bold px-3 py-1 rounded-full">
                  {product.discount}
                </div>
                <span className="text-5xl mb-6 block drop-shadow-md group-hover:scale-110 transition-transform">
                  {product.emoji}
                </span>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-caramel bg-caramel/10 px-3 py-1 rounded-full mb-4">
                  {product.tag}
                </span>
                <h3 className="font-serif text-2xl text-chocolate font-bold mb-3">{product.name}</h3>
                <p className="text-sm text-text-mid/70 leading-relaxed mb-6">
                  {product.desc}
                </p>
                <button className="w-full py-3 rounded-xl border border-caramel/20 text-chocolate font-bold text-xs uppercase tracking-widest hover:bg-caramel hover:text-white transition-all">
                  Shop Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="experience" className="py-24 px-6 bg-cream border-y border-chocolate/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-caramel mb-4 block">How We Do It</span>
            <h2 className="font-serif text-4xl md:text-5xl text-chocolate font-black mb-6">The Journey to Crunch</h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-caramel/30 to-transparent" />
            
            {steps.map((step, i) => (
              <div key={i} className="text-center relative group">
                <div className="w-20 h-20 bg-chocolate border-2 border-caramel rounded-full flex items-center justify-center font-serif text-2xl font-black text-caramel mx-auto mb-8 shadow-xl transition-all group-hover:bg-caramel group-hover:text-chocolate">
                  {step.num}
                </div>
                <h3 className="font-bold text-chocolate mb-3">{step.title}</h3>
                <p className="text-sm text-text-mid/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-chocolate overflow-hidden relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #C8832A 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-caramel mb-4 block">Our Community</span>
          <h2 className="font-serif text-4xl text-cream font-black">Spreading The Love</h2>
        </div>

        <div className="flex gap-6 animate-[scroll_50s_linear_infinite] px-6">
          {[...reviews, ...reviews].map((review, i) => (
            <div key={i} className="w-[350px] flex-shrink-0 bg-white/5 border border-caramel/20 p-8 rounded-[32px] backdrop-blur-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-caramel text-caramel" />
                ))}
              </div>
              <p className="text-biscuit/80 italic text-sm leading-relaxed mb-6 font-light">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-caramel to-deep-red rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-black/20">
                  {review.name[0]}
                </div>
                <div>
                  <div className="text-xs font-bold text-cream">{review.name}</div>
                  <div className="text-[10px] text-biscuit/40 uppercase tracking-widest mt-0.5">Verified Customer</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section id="find-us" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-caramel mb-4 block">Visit The Outlet</span>
            <h2 className="font-serif text-4xl text-chocolate font-black leading-tight mb-8">
              Fresh From The Oven, <br /> Direct To You.
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-cream/40 rounded-2xl border border-caramel/10">
                <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-caramel mb-1">Outlet Location</div>
                  <div className="text-chocolate font-medium">123 Bakery Lane, East York, <br /> Toronto, ON M4C 1A1</div>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-cream/40 rounded-2xl border border-caramel/10">
                <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-caramel mb-1">Call Our Outlet</div>
                  <div className="text-chocolate font-medium">+1 (416) 123-4567</div>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-cream/40 rounded-2xl border border-caramel/10">
                <div className="w-12 h-12 bg-caramel/10 rounded-xl flex items-center justify-center text-caramel">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-caramel mb-1">Wholesale Inquiries</div>
                  <div className="text-chocolate font-medium">hello@peekfreansheritage.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 rounded-[40px] border border-caramel/10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-chocolate rounded-full flex items-center justify-center text-caramel">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl text-chocolate font-bold">Outlet Hours</h3>
              </div>
              <div className="bg-green-100 text-green-700 text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Open Now
              </div>
            </div>

            <div className="space-y-4">
              {[
                { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
                { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
                { day: 'Sunday', time: 'Closed' },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-chocolate/5 last:border-0">
                  <span className="text-text-mid font-medium">{h.day}</span>
                  <span className="text-chocolate font-bold">{h.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button className="w-full bg-chocolate text-caramel py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-caramel hover:text-chocolate transition-all flex items-center justify-center gap-3">
                Get Driving Directions <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-chocolate pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-1">
              <a href="#" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-caramel rounded-full flex items-center justify-center">
                  <Cookie className="text-chocolate w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg leading-none text-cream font-bold">Peek Freans</span>
                </div>
              </a>
              <p className="text-biscuit/40 text-sm leading-relaxed mb-8">
                Official outlet and digital home for the world's most beloved Pakistani biscuits. Freshly delivered from our heritage to your hands.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 border border-caramel/20 rounded-full flex items-center justify-center text-caramel hover:bg-caramel hover:text-chocolate transition-all">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-cream font-bold uppercase tracking-widest text-xs mb-8">Collection</h4>
              <ul className="space-y-4 text-sm text-biscuit/60">
                <li><a href="#" className="hover:text-caramel transition-colors">Plain Biscuits</a></li>
                <li><a href="#" className="hover:text-caramel transition-colors">Cream Variants</a></li>
                <li><a href="#" className="hover:text-caramel transition-colors">Health Range</a></li>
                <li><a href="#" className="hover:text-caramel transition-colors">Combo Packs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-cream font-bold uppercase tracking-widest text-xs mb-8">Company</h4>
              <ul className="space-y-4 text-sm text-biscuit/60">
                <li><a href="#" className="hover:text-caramel transition-colors">Our History</a></li>
                <li><a href="#" className="hover:text-caramel transition-colors">Quality Assurance</a></li>
                <li><a href="#" className="hover:text-caramel transition-colors">Global Presence</a></li>
                <li><a href="#" className="hover:text-caramel transition-colors">Careers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-cream font-bold uppercase tracking-widest text-xs mb-8">Join the Club</h4>
              <p className="text-biscuit/40 text-xs mb-6">Receive exclusive updates on new releases and limited outlet discounts.</p>
              <div className="flex bg-white/5 border border-caramel/20 rounded-xl p-1 overflow-hidden">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-transparent border-none outline-none text-cream text-xs px-4 flex-1 placeholder:text-biscuit/20"
                />
                <button className="bg-caramel text-chocolate px-4 py-2 rounded-lg font-bold text-[10px] uppercase tracking-wider">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-caramel/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] uppercase tracking-widest text-biscuit/20">
              © 2024 Peek Freans Outlet. All Rights Reserved. Not a Representative of Mondelez International.
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-biscuit/20">
              <a href="#" className="hover:text-biscuit/40 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-biscuit/40 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-biscuit/40 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
