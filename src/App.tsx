import { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Droplets, 
  Hammer, 
  ShieldCheck, 
  HardHat, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  Construction,
  Wrench,
  Zap,
  Star,
  ChevronDown,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  {
    title: "Residential Plumbing",
    description: "From leaky faucets to full bathroom remodels, we handle all your home plumbing needs with precision.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Commercial Piping",
    description: "Specialized high-capacity piping solutions for industrial and commercial facilities in the Ohio Valley.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Emergency Repairs",
    description: "Available 24/7 for those unexpected plumbing disasters. We're on our way when you need us most.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "General Construction",
    description: "Expert building and renovation services. We bring your vision to life with quality craftsmanship.",
    icon: Construction,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800"
  }
];

const stats = [
  { label: "Years Experience", value: "15+" },
  { label: "Projects Completed", value: "2,500+" },
  { label: "Satisfied Clients", value: "100%" },
  { label: "Local Experts", value: "Ohio Valley" }
];

const gallery = [
  { title: "Modern Kitchen Remodel", category: "Construction", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800" },
  { title: "Industrial Pipe Installation", category: "Plumbing", image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800" },
  { title: "Luxury Bathroom Suite", category: "Plumbing", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800" },
  { title: "Emergency Main Break Fix", category: "Plumbing", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800" },
  { title: "Retail Space Fit-out", category: "Construction", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" }
];

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Homeowner in Wheeling",
    content: "Ohio Valley C&P saved us during a major pipe burst at 3 AM. They were professional, fast, and the pricing was very fair for an emergency call.",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Property Manager",
    content: "We've used them for several commercial renovations. Their attention to detail in both the plumbing and general construction is unmatched in the valley.",
    rating: 5
  },
  {
    name: "David Miller",
    role: "Local Business Owner",
    content: "Reliable, honest, and hardworking. They finished our storefront renovation ahead of schedule and under budget. Highly recommended!",
    rating: 5
  }
];

const faqs = [
  {
    question: "Do you offer 24/7 emergency services?",
    answer: "Yes! We have a dedicated emergency team available 24 hours a day, 7 days a week for urgent plumbing and structural issues."
  },
  {
    question: "Are you licensed and insured in Ohio and West Virginia?",
    answer: "Absolutely. We are fully licensed, bonded, and insured to operate across the entire Ohio Valley region, including both OH and WV."
  },
  {
    question: "How do I get an estimate for my project?",
    answer: "You can request a quote through our website form or call us directly. We typically provide initial consultations and estimates within 24-48 hours."
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, we have specialized teams for both residential home services and large-scale commercial construction and piping."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-navy selection:bg-safety-orange selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-safety-orange p-1.5 rounded">
              <HardHat className="text-white w-6 h-6" />
            </div>
            <span className={`text-xl font-display font-bold tracking-tight ${scrolled ? 'text-navy' : 'text-white'}`}>
              OHIO VALLEY <span className="text-safety-orange">C&P</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Gallery', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`text-sm font-medium hover:text-safety-orange transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
              >
                {item}
              </a>
            ))}
            <button className="bg-safety-orange text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
              REQUEST QUOTE
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-safety-orange" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu className={scrolled ? 'text-navy' : 'text-white'} />}
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
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Services', 'About', 'Gallery', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-2xl font-display font-bold text-navy"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="bg-safety-orange text-white py-4 rounded-md font-bold text-lg">
                REQUEST QUOTE
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="h-24 md:h-32 flex-shrink-0"></div>
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            alt="Construction background" 
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex-grow flex items-center relative z-10">
          <div className="container mx-auto px-6 pb-20">
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-safety-orange font-bold tracking-widest text-sm mb-4">
              <span className="w-12 h-[2px] bg-safety-orange"></span>
              ESTABLISHED IN THE OHIO VALLEY
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-tight mb-6">
              Reliable Plumbing & <br />
              <span className="text-safety-orange">Construction</span> Services
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              From emergency repairs to large-scale commercial construction, we provide the expertise and reliability your project deserves. 24/7 availability for the Ohio Valley area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-safety-orange text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center gap-2 group shadow-xl">
                REQUEST A QUOTE <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-navy transition-all flex items-center justify-center gap-2">
                OUR SERVICES
              </button>
            </div>
          </motion.div>
        </div>
      </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-display font-black text-safety-orange mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Expert Solutions</h2>
            <p className="text-gray-600">We offer a comprehensive range of plumbing and construction services tailored to meet the unique needs of our residential and commercial clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 left-4 bg-safety-orange p-2 rounded shadow-lg">
                    <service.icon className="text-white w-6 h-6" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                  <a href="#contact" className="text-safety-orange font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    LEARN MORE <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80&w=1000" 
                  alt="Team working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-safety-orange p-10 rounded-2xl hidden md:block z-20 shadow-xl">
                <ShieldCheck className="text-white w-16 h-16 mb-4" />
                <div className="text-white font-display font-bold text-2xl">Fully Licensed <br />& Insured</div>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-gray-100 rounded-full -z-0"></div>
            </div>

            <div className="lg:w-1/2">
              <div className="text-safety-orange font-bold tracking-widest text-sm mb-4">WHY CHOOSE US</div>
              <h2 className="text-4xl md:text-5xl font-display font-black mb-8 leading-tight">The Ohio Valley's Most Trusted Professionals</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With over 15 years of dedicated service, Ohio Valley Construction & Plumbing LLC has built a reputation for excellence. We combine traditional craftsmanship with modern technology to deliver results that last.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "24/7 Emergency Support", desc: "Plumbing disasters don't wait. Neither do we." },
                  { title: "Local Expertise", desc: "We know the Ohio Valley's infrastructure inside and out." },
                  { title: "Transparent Pricing", desc: "No hidden fees. Just honest, upfront estimates." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-safety-orange rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Recent Projects</h2>
              <p className="text-gray-400">Take a look at some of our completed work across the Ohio Valley. Quality is our signature.</p>
            </div>
            <button className="text-safety-orange font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              VIEW ALL PROJECTS <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-safety-orange text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                  <h4 className="text-xl font-display font-bold">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">What Our Clients Say</h2>
            <p className="text-gray-600">Don't just take our word for it. We've built our reputation on quality work and satisfied customers across the Ohio Valley.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
              >
                <Quote className="absolute top-6 right-8 text-orange-100 w-12 h-12" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-safety-orange text-safety-orange" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6 relative z-10">"{testimonial.content}"</p>
                <div>
                  <div className="font-display font-bold text-navy">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-display font-black mb-6">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out to us directly.</p>
              <button className="bg-navy text-white px-8 py-3 rounded-md font-bold text-sm hover:bg-slate-800 transition-all">
                ASK A QUESTION
              </button>
            </div>
            <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden transition-all">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-display font-bold text-lg pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-safety-orange transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 bg-navy p-12 text-white">
                <h2 className="text-3xl font-display font-bold mb-8">Contact Information</h2>
                <p className="text-gray-400 mb-12">Ready to start your next project? Get in touch with our team today for a free consultation.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Phone className="text-safety-orange w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Call Us Anytime</div>
                      <div className="font-bold text-lg">(740) 555-0123</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Mail className="text-safety-orange w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Email Us</div>
                      <div className="font-bold text-lg">info@ohiovalleycp.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <MapPin className="text-safety-orange w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Our Location</div>
                      <div className="font-bold text-lg">Wheeling, WV 26003</div>
                    </div>
                  </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-orange transition-colors cursor-pointer">
                      <span className="font-bold">f</span>
                    </div>
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-orange transition-colors cursor-pointer">
                      <span className="font-bold">in</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 p-12">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-safety-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-safety-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-safety-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="(740) 555-0123" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700">Service Needed</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-safety-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all bg-white">
                      <option>Residential Plumbing</option>
                      <option>Commercial Piping</option>
                      <option>General Construction</option>
                      <option>Emergency Repair</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-gray-700">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-safety-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <button className="w-full bg-safety-orange text-white py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-safety-orange p-1.5 rounded">
                  <HardHat className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-display font-bold tracking-tight text-navy">
                  OHIO VALLEY <span className="text-safety-orange">C&P</span>
                </span>
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                Providing professional plumbing and construction services across the Ohio Valley. Quality craftsmanship you can trust.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <Clock className="w-5 h-5 text-safety-orange" />
                <span className="text-sm font-medium">Mon - Fri: 8:00 AM - 6:00 PM (24/7 Emergency)</span>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-navy mb-6">Quick Links</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-medium">
                <li><a href="#services" className="hover:text-safety-orange transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-safety-orange transition-colors">About Us</a></li>
                <li><a href="#gallery" className="hover:text-safety-orange transition-colors">Project Gallery</a></li>
                <li><a href="#contact" className="hover:text-safety-orange transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-navy mb-6">Legal</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-medium">
                <li><a href="#" className="hover:text-safety-orange transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-safety-orange transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-safety-orange transition-colors">Licensing Info</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Ohio Valley Construction & Plumbing LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>Built with</span>
              <div className="w-2 h-2 bg-safety-orange rounded-full animate-pulse"></div>
              <span>for the Ohio Valley</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
