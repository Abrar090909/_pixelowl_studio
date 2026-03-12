/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useInView } from 'motion/react';
import Lenis from 'lenis';
import { ArrowUpRight, Star, Menu, Check, Plus, Minus, X, ArrowLeft, ArrowUp, Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import DarkVeil from './components/DarkVeil';
import StarBorder from './components/StarBorder';

import rostraImg from './assets/work/rostra.png';
import orvionImg from './assets/work/orvion.png';
import nexisImg from './assets/work/nexis.png';
import toolinoImg from './assets/work/toolino.png';
import aboutStudioImg from './assets/about_studio.png';
import logoImg from './assets/logo.jpg';




const Asterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className={className}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="6.34" y1="6.34" x2="17.66" y2="17.66" />
    <line x1="6.34" y1="17.66" x2="17.66" y2="6.34" />
  </svg>
);

const PROJECTS = [
  {
    id: 1,
    title: "Rostra",
    image: rostraImg,
    category: "Web Agency",
    year: "2024",
    link: "https://rostra.in"
  },
  {
    id: 2,
    title: "Orvion",
    image: orvionImg,
    category: "SaaS platform",
    year: "2024",
    link: "https://orvion.studio.nextgenaiinx.com/"
  },
  {
    id: 3,
    title: "Nexis",
    image: nexisImg,
    category: "Web Agency",
    year: "2024",
    link: "https://nexis-cff09.web.app/"
  },
  {
    id: 4,
    title: "Toolino",
    image: toolinoImg,
    category: "E-commerce",
    year: "2024",
    link: "https://toolino-3cf4c.web.app/"
  }
];


const TESTIMONIALS = [
  {
    name: "Emily Johnson",
    role: "CEO, Tech Innovations Ltd.",
    result: "+280% leads in 30 days",
    text: "The website PixelOwl designed for us exceeded our expectations. It's beautiful and highly functional, bringing in more clients than ever before.",
    image: "https://i.pravatar.cc/150?u=emily"
  },
  {
    name: "Michael Brown",
    role: "Marketing Director, Green Solutions Inc.",
    result: "User engagement skyrocketed",
    text: "Our new site is a masterpiece. PixelOwl understood our vision perfectly and executed it flawlessly. Our user engagement has skyrocketed.",
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    name: "Sarah Miller",
    role: "Founder, EcoFriendly Store",
    result: "Live in 7 days, zero revisions",
    text: "We needed a website that could handle high traffic and look great on all devices. PixelOwl delivered on all fronts. Highly recommended!",
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Wilson",
    role: "COO, Organic Market",
    result: "+40% online sales",
    text: "The new design has transformed our online presence. Our customers love the site, and it has significantly improved our sales.",
    image: "https://i.pravatar.cc/150?u=david"
  }
];

const FAQS = [
  {
    question: "How long does it take to build a website?",
    answer: "Typically, a landing page takes 1-2 weeks, while a more complex multi-page site can take 4-6 weeks depending on requirements."
  },
  {
    question: "Can you help with SEO?",
    answer: "Yes, all our websites are built with SEO best practices in mind, including meta tags, semantic HTML, and fast loading speeds."
  },
  {
    question: "What if I need changes after the site is launched?",
    answer: "We offer ongoing support and maintenance packages to ensure your site stays up to date and continues to perform."
  },
  {
    question: "Do you offer ongoing support after the website is launched?",
    answer: "Absolutely. We provide various support tiers to help with content updates, security patches, and performance monitoring."
  }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const navLinks = isHome ? [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", to: "/about" }
  ] : [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" }
  ];

  const handleLinkClick = (e: any, link: any) => {
    setMobileMenuOpen(false);
    if (link.href && isHome) {
      // Small delay to allow menu animation to start closing
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 transition-all duration-500 border-b ${mobileMenuOpen ? 'z-[1000] py-4 bg-black border-white/10' : 'z-50 ' + (scrolled ? 'py-4 bg-black/70 backdrop-blur-xl border-white/5' : 'py-8 bg-transparent border-transparent')
      }`}>
      <Link
        to="/"
        onClick={(e) => {
          if (isHome) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        className="flex items-center gap-3 group"
      >
        <img src={logoImg} alt="PixelOwl Logo" className="w-8 h-8 rounded-full border border-white/10 group-hover:scale-110 transition-transform" />
        <span className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>PixelOwl</span>
      </Link>
      <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest opacity-70">
        {isHome ? (
          <>
            <a href="#work" className="hover:opacity-100 transition-opacity uppercase text-xs tracking-[0.2em]">Work</a>
            <a href="#services" className="hover:opacity-100 transition-opacity uppercase text-xs tracking-[0.2em]">Services</a>
            <a href="#process" className="hover:opacity-100 transition-opacity uppercase text-xs tracking-[0.2em]">Process</a>
            <a href="#pricing" className="hover:opacity-100 transition-opacity uppercase text-xs tracking-[0.2em]">Pricing</a>
            <Link to="/about" className="hover:opacity-100 transition-opacity uppercase text-xs tracking-[0.2em]">About</Link>
          </>
        ) : (
          <>
            <Link to="/" className="hover:opacity-100 transition-opacity uppercase text-xs tracking-[0.2em]">Home</Link>
            <Link to="/about" className="hover:opacity-100 transition-opacity uppercase text-xs tracking-[0.2em]">About</Link>
          </>
        )}
      </div>
      <Link
        to="/contact"
        className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-black text-sm font-bold tracking-tight transition-all hover:bg-neutral-200"
        style={{ background: '#ffffff', fontSize: '13px' }}
      >
        Start a project →
      </Link>
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-[100] flex flex-col items-center justify-center p-6 md:px-16"
          >
            {/* Dedicated Close Button in Overlay */}
            <button
              className="absolute top-8 right-6 text-white p-2 hover:opacity-50 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>

            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-5xl font-medium tracking-tighter uppercase hover:text-white/50 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className="text-5xl font-medium tracking-tighter uppercase hover:text-white/50 transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg uppercase tracking-widest"
                >
                  Start a Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-start justify-center px-6 md:px-16 pt-24 pb-16 text-left overflow-hidden">
    <div className="absolute inset-0 -z-10 opacity-40">
      <DarkVeil hueShift={0} noiseIntensity={0.05} scanlineIntensity={0.1} speed={1} scanlineFrequency={2} warpAmount={0.1} />
    </div>

    <motion.div
      className="flex items-center gap-4 mb-10"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex -space-x-3">
        {[1, 2, 3, 4].map((i) => (
          <img
            key={i}
            src={`https://i.pravatar.cc/100?u=user${i}`}
            alt="Reviewer"
            className="w-10 h-10 rounded-full border-2 border-black"
          />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1">4.9/5 from 10+ clients</span>
      </div>
    </motion.div>

    <motion.h1
      style={{ fontSize: 'clamp(42px, 7vw, 88px)', lineHeight: 1.05, fontWeight: 800 }}
      className="tracking-tighter max-w-5xl mb-8 text-left"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
    >
      Building Digital Legacies<br />
      for Brands That Mean Business.
    </motion.h1>

    <motion.p
      className="text-xl md:text-2xl text-white/50 max-w-xl mb-12 leading-relaxed font-light text-left"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      A boutique studio. No account managers. No BS. Just work that performs.
    </motion.p>

    <motion.div
      className="flex items-center gap-4 md:gap-6 mb-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to="/contact" className="group relative px-6 py-3.5 md:px-10 md:py-5 bg-white text-black rounded-xl font-semibold flex items-center gap-2 md:gap-3 transition-all hover:bg-neutral-200">
        <span className="text-base md:text-lg whitespace-nowrap">Contact us</span>
        <ArrowUpRight size={18} className="md:w-[22px] md:h-[22px] transition-transform duration-300 group-hover:rotate-45" />
      </Link>
      <a href="#work" className="text-white/40 text-xs md:text-sm hover:text-white/70 transition-colors whitespace-nowrap">
        View our works →
      </a>
    </motion.div>

    <motion.div
      className="flex items-center gap-16 mt-20 pt-12 border-t border-white/10 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      <div>
        <div className="text-4xl md:text-5xl font-bold tracking-tighter">12+</div>
        <div className="text-xs text-white/30 uppercase tracking-[0.2em] mt-1">Projects delivered</div>
      </div>
      <div className="w-px h-12 bg-white/10" />
      <div>
        <div className="text-4xl md:text-5xl font-bold tracking-tighter">2</div>
        <div className="text-xs text-white/30 uppercase tracking-[0.2em] mt-1">Years of craft</div>
      </div>

      <div className="w-px h-12 bg-white/10" />
      <div>
        <div className="text-4xl md:text-5xl font-bold tracking-tighter">95%</div>
        <div className="text-xs text-white/30 uppercase tracking-[0.2em] mt-1">Client satisfaction</div>
      </div>
    </motion.div>
  </section>
);

const MarqueeStrip = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const points = [
    "Web Design",
    "Framer Development",
    "Webflow",
    "Brand Identity",
    "Motion Design",
    "UX Strategy",
    "Conversion Optimization",
    "Web Design",
    "Framer Development",
    "Webflow",
    "Brand Identity",
    "Motion Design",
    "UX Strategy",
    "Conversion Optimization",
  ];

  return (
    <div ref={ref} className="py-3 bg-neutral-900 overflow-hidden border-y border-white/5 w-full">
      <motion.div
        animate={isInView ? { x: ["0%", "-50%"] } : {}}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center will-change-transform"
      >
        {points.map((point, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
              {point}
            </span>
            <Asterisk className="w-4 h-4 text-purple-600" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const DeliveryMarquee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const points = [
    "FIGMA TO FRAMER",
    "PIXEL PERFECT",
    "MOBILE FIRST",
    "SEO OPTIMISED",
    "FAST DELIVERY",
    "CLEAN CODE",
    "FIGMA TO FRAMER",
    "PIXEL PERFECT",
    "MOBILE FIRST",
    "SEO OPTIMISED",
    "FAST DELIVERY",
    "CLEAN CODE",
  ];

  return (
    <div ref={ref} className="py-2 bg-neutral-900 overflow-hidden border-y border-white/5 w-full">
      <motion.div
        animate={isInView ? { x: ["-50%", "0%"] } : {}}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center will-change-transform"
      >
        {points.map((point, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-xl md:text-2xl font-medium uppercase tracking-tighter text-white/80">
              {point}
            </span>
            <Asterisk className="w-6 h-6 text-neutral-400" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ServicesSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const services = [
    {
      num: "01",
      title: "Web Design",
      tags: ["Figma", "UI/UX", "Prototyping"],
      desc: "High-fidelity design systems built in Figma. Every component documented, every state designed, every breakpoint considered before a line of code is written."
    },
    {
      num: "02",
      title: "Framer Development",
      tags: ["Framer", "CMS", "Animations"],
      desc: "Production-ready Framer sites with custom code overrides, CMS collections, and interactions that make visitors stop scrolling and start clicking."
    },
    {
      num: "03",
      title: "Webflow Development",
      tags: ["Webflow", "CMS", "E-commerce"],
      desc: "Webflow builds that your team can actually update. Clean class naming, reusable symbols, and full CMS setup so you're never dependent on us to change a headline."
    },
    {
      num: "04",
      title: "Brand Identity",
      tags: ["Logo", "Typography", "Colour Systems"],
      desc: "Visual identity from scratch — logo, type, colour, and brand guidelines delivered as a Figma library ready to use across every touchpoint."
    },
    {
      num: "05",
      title: "Conversion Optimisation",
      tags: ["CRO", "Analytics", "A/B Testing"],
      desc: "We audit your existing site and identify exactly where you're losing visitors. Heatmaps, copy rewrites, and structural changes that move the revenue needle."
    },
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30">02 — Services</span>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-4 py-2">What We Do</h2>
          </motion.div>
        </div>

        <div className="border-t border-white/10">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-8 flex items-center justify-between gap-8 text-left group"
              >
                <div className="flex items-center gap-8 flex-1 min-w-0">
                  <span className="text-xs font-mono text-purple-600 w-6 flex-shrink-0">{s.num}</span>
                  <span className="text-2xl md:text-4xl font-medium tracking-tighter uppercase group-hover:translate-x-2 transition-transform duration-300">
                    {s.title}
                  </span>
                  <div className="hidden md:flex gap-2 flex-wrap">
                    {s.tags.map((tag, ti) => (
                      <span key={ti} className="text-[10px] font-mono text-white/30 border border-white/10 rounded-full px-2.5 py-1 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? 'bg-white text-black rotate-45' : 'text-white/50'}`}>
                  <Plus size={16} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 pl-14 text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-2xl">
                      {s.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BentoProjects = () => {
  return (
    <section id="work" className="pt-16 pb-32 px-6 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30">01 — Work</span>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-4 py-2">Selected Work</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {PROJECTS.map((project, index) => {
            const spans = [
              "md:col-span-2 md:row-span-2 h-[400px] md:h-[600px]",
              "md:col-span-1 md:row-span-1 h-[400px] md:h-[285px]",
              "md:col-span-1 md:row-span-1 h-[400px] md:h-[285px]",
              "md:col-span-2 md:row-span-1 h-[400px] md:h-[285px]"
            ];

            return (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group cursor-pointer overflow-hidden bg-neutral-900 border border-white/5 ${spans[index % spans.length]}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 md:p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-white/30">{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-xs font-mono text-white/30">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2 block">{project.category}</span>
                      <h3 className="text-2xl md:text-4xl font-medium tracking-tight uppercase">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </motion.a>

            );
          })}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-1 md:row-span-1 h-[400px] md:h-[285px] relative group cursor-pointer overflow-hidden bg-neutral-900 border border-white/5 flex flex-col items-center justify-center text-center p-8"
          >
            <div className="absolute inset-0 bg-neutral-900 group-hover:bg-white transition-colors duration-500" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-black/10 transition-colors">
                <ArrowUpRight size={32} className="text-white group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-medium uppercase tracking-tighter text-white group-hover:text-black transition-colors">View All Projects</h3>
              <p className="text-white/40 mt-1 text-xs uppercase tracking-widest group-hover:text-black/40 transition-colors">Explore the full archive</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { id: "01", title: "ANALYSE", duration: "~2 days", desc: "We ask the questions most agencies skip. Business goals, competitors, target audience — we don't open Figma until we understand the problem." },
    { id: "02", title: "STRATEGIZE", duration: "~2 days", desc: "Mapping out the user journey and site architecture to ensure every interaction is purposeful. Wireframes first, always." },
    { id: "03", title: "DESIGN", duration: "~5 days", desc: "High-fidelity in Figma. You'll see every component, every hover state, every breakpoint before we write a single line of code." },
    { id: "04", title: "DEVELOP", duration: "~7 days", desc: "We build exactly what we designed. No shortcuts, no template hacks. Clean code, cross-browser tested, ready to scale." }
  ];

  return (
    <section id="process" className="py-40 px-6 md:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30">04 — Process</span>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-4 py-2">The Process</h2>
          </motion.div>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 border-t border-white/10 group"
            >
              <div className="flex items-baseline gap-6">
                <span className="text-xl font-mono text-purple-600 font-medium">{step.id}</span>
                <div>
                  <h3 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500">
                    {step.title}
                  </h3>
                  <span className="inline-block mt-3 text-xs font-mono text-white/30 border border-white/10 rounded-full px-3 py-1 tracking-widest">
                    {step.duration}
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const plans = [
    {
      id: 'starter',
      title: "Starter",
      price: "$999",
      pages: "Up to 5 pages",
      desc: "Perfect for startups needing a high-impact presence fast.",
      features: [
        { name: "Custom Design", included: true },
        { name: "Responsive Layout", included: true },
        { name: "SEO Optimized", included: true },
        { name: "CMS Integration", included: false },
        { name: "Ongoing Support", included: false }
      ]
    },
    {
      id: 'growth',
      title: "Growth",
      price: "$1,500",
      pages: "Up to 10 pages",
      desc: "The sweet spot for growing businesses that mean business.",
      features: [
        { name: "Custom Design", included: true },
        { name: "Responsive Layout", included: true },
        { name: "SEO Optimized", included: true },
        { name: "CMS Integration", included: true },
        { name: "Ongoing Support", included: true }
      ]
    },
    {
      id: 'studio',
      title: "Studio",
      price: "$2,500+",
      pages: "Custom scope",
      desc: "Full-scale solutions for brands that want everything done right.",
      features: [
        { name: "Custom Design", included: true },
        { name: "Responsive Layout", included: true },
        { name: "SEO Optimized", included: true },
        { name: "CMS Integration", included: true },
        { name: "Ongoing Support", included: true }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-40 px-6 md:px-16 bg-black/20">
      <AnimatePresence>
        {selectedPlan && (
          <OrderModal
            plan={selectedPlan}
            isOpen={!!selectedPlan}
            onClose={() => setSelectedPlan(null)}
          />
        )}
      </AnimatePresence>

      <div className="text-center mb-24">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/30">05 — Pricing</span>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase mt-4">Transparent Pricing</h2>
        <p className="text-xl text-white/50 mt-8 max-w-2xl mx-auto font-light">
          Fixed-scope projects. You know exactly what you're getting before we start. No hidden fees, no surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <div key={i} className={`p-10 md:p-12 bg-neutral-900/40 border flex flex-col relative ${i === 1 ? 'border-white/20' : 'border-white/5'}`}>
            {i === 1 && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest z-10 whitespace-nowrap">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-medium text-white/60 mb-2 uppercase tracking-widest">{plan.title}</h3>
            <div className="text-sm text-white/40 font-medium mb-8 tracking-widest">{plan.pages}</div>

            <div className="text-4xl md:text-5xl font-medium mb-8 tracking-tighter bg-gradient-to-r from-neutral-400 via-white to-neutral-400 bg-clip-text text-transparent">{plan.price}</div>
            <p className="text-base text-white/40 mb-12 font-light leading-relaxed">{plan.desc}</p>

            <div className="space-y-5 mb-16 flex-grow">
              {plan.features.map((feature, j) => (
                <div key={j} className={`flex items-center gap-4 ${feature.included ? 'text-white/80' : 'text-white/20'}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.included ? 'bg-white/10 text-white' : 'bg-white/5 text-white/20'}`}>
                    {feature.included ? <Check size={12} /> : <X size={12} />}
                  </div>
                  <span className="text-base font-light">{feature.name}</span>
                </div>
              ))}
            </div>

            {i === 1 ? (
              <StarBorder
                as="button"
                thickness={2}
                color="white"
                speed="5s"
                className="w-full rounded-xl group"
                innerClassName="bg-neutral-800 text-white py-5 rounded-[calc(0.75rem-2px)] font-bold text-lg flex items-center justify-center gap-3 hover:bg-neutral-700 transition-all"
                onClick={() => setSelectedPlan(plan)}
              >
                LET'S CREATE <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
              </StarBorder>
            ) : (
              <button
                onClick={() => setSelectedPlan(plan)}
                className="group w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all bg-neutral-800 text-white hover:bg-neutral-700"
              >
                LET'S CREATE <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};


const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });
  const column1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const column2 = [...TESTIMONIALS, ...TESTIMONIALS].reverse();

  return (
    <section ref={ref} className="py-40 px-6 md:px-16 overflow-hidden relative">
      <div className="mb-24 relative z-10">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/30">06 — Results</span>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase mt-3">Client Results</h2>
        <p className="text-xl text-white/50 mt-8 max-w-2xl font-light">
          Hearing directly from clients is the best way to understand the impact of the work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[600px] relative">
        {/* Column 1: Up to Down */}
        <div className="relative h-full overflow-hidden">
          <motion.div
            animate={isInView ? { y: ["0%", "-50%"] } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-8 will-change-transform"
          >
            {column1.map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={12} className="fill-white/80 text-white/80" />
                    ))}
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed mb-8 font-light italic">"{t.text}"</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">{t.result}</div>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-medium text-white uppercase tracking-tight">{t.name}</h4>
                      <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Column 2: Down to Up */}
        <div className="relative h-full overflow-hidden hidden md:block">
          <motion.div
            animate={isInView ? { y: ["-50%", "0%"] } : {}}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex flex-col gap-8 will-change-transform"
          >
            {column2.map((t, i) => (
              <div key={i} className="p-10 rounded-3xl bg-neutral-900/40 border border-white/5 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} size={12} className="fill-white/80 text-white/80" />
                    ))}
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed mb-8 font-light italic">"{t.text}"</p>
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-4">{t.result}</div>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-medium text-white uppercase tracking-tight">{t.name}</h4>
                      <p className="text-xs text-white/30 uppercase tracking-widest mt-1">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-40 px-6 md:px-16">
      <div className="text-center mb-24">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/30">(5) FAQ</span>
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase mt-4">Frequently Asked Questions</h2>
        <p className="text-xl text-white/50 mt-8 max-w-2xl mx-auto font-light">
          Here are some of the most common questions I get about my web design services:
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="border-b border-white/10">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full py-10 flex justify-between items-center text-left group"
            >
              <h3 className="text-2xl md:text-3xl font-medium uppercase tracking-tight group-hover:text-white/70 transition-colors">{faq.question}</h3>
              {openIndex === i ? <Minus size={32} /> : <Plus size={32} />}
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-10 text-xl text-white/40 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="pt-40 pb-20 px-6 md:px-16">
    <div className="text-center mb-40">
      <h2 className="text-[clamp(2.5rem,10vw,8rem)] font-medium tracking-tighter uppercase leading-[0.9] mb-16">
        You've scrolled this far.<br />You already know.
      </h2>
      <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-16 font-light">
        We have one spot open this month. First conversation is free.
      </p>
      <Link to="/contact" className="group inline-flex items-center gap-3 px-12 py-6 bg-white text-black rounded-2xl font-bold text-2xl transition-all hover:bg-neutral-200">
        Start a project <ArrowUpRight size={28} className="transition-transform duration-300 group-hover:rotate-45" />
      </Link>
      <p className="mt-8 text-sm text-white/30 font-mono tracking-widest">pixelowl.agency@gmail.com</p>
    </div>


    {/* Large wordmark */}
    <div className="border-t border-white/10 pt-16 mb-16 relative">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold tracking-tighter uppercase leading-none" style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}>
            PixelOwl
          </h3>
          <div className="flex items-center gap-3 mt-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono text-white/30 uppercase tracking-[0.2em]">Available for projects · Est. 2024</span>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-16 h-16 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group shrink-0"
        >
          <ArrowUp size={32} className="group-hover:-translate-y-2 transition-transform duration-300" />
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 pt-12 border-t border-white/10">
      <div className="md:col-span-1">
        <p className="text-sm text-white/20 font-mono leading-loose">
          © 2026 PixelOwl Studio.<br />
          Made in Figma. Broken in<br />Webflow. Fixed at 2am.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Contact</h4>
        <div className="flex flex-col gap-4 text-lg font-medium">
          <a href="mailto:pixelowl.agency@gmail.com" className="hover:text-white/60 transition-colors">pixelowl.agency@gmail.com</a>
        </div>

      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Socials</h4>
        <div className="flex flex-col gap-4 text-lg font-medium">
          <a href="https://www.instagram.com/pixelowl_digital?igsh=aWt2d3VmbnB0MGZt" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">Instagram</a>
        </div>

      </div>

      <div>
        <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30 mb-8">Pages</h4>
        <div className="flex flex-col gap-4 text-lg font-medium">
          <a href="#work" className="hover:text-white/60 transition-colors">Work</a>
          <Link to="/about" className="hover:text-white/60 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
          <Link to="/terms" className="hover:text-white/60 transition-colors text-white/40 text-sm">Terms</Link>
          <Link to="/privacy" className="hover:text-white/60 transition-colors text-white/40 text-sm">Privacy</Link>
        </div>
      </div>
    </div>
  </footer>
);

const PolicyPage = ({ title, content }: { title: string; content: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter uppercase mb-16 leading-[0.9]">
            {title}
          </h1>
          <div className="prose prose-invert prose-lg max-w-none text-white/60 font-light leading-relaxed space-y-8">
            {content}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const TermsPage = () => (
  <PolicyPage
    title="Terms & Conditions"
    content={
      <>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">1. Engagement</h2>
          <p>By using PixelOwl Studio's services, you enter into a binding agreement. We provide boutique web design and development services tailored to your project's unique requirements.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">2. Project Scope & Revisions</h2>
          <p>The specific deliverables and revision rounds are outlined in your project proposal. Any work outside this scope will be subject to a separate quote.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">3. Payment Terms</h2>
          <p>A non-refundable deposit is required to begin work. Final payment is due before the website's transfer or launch. Timely payments ensure the project stays on schedule.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">4. Intellectual Property</h2>
          <p>Ownership of the final design and code is transferred to the client upon full payment. PixelOwl Studio reserves the right to showcase the project in promotional materials.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">5. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be resolved in the jurisdiction of PixelOwl Studio's operating location.</p>
        </section>
      </>
    }
  />
);

const PrivacyPage = () => (
  <PolicyPage
    title="Privacy Policy"
    content={
      <>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">1. Data Collection</h2>
          <p>We collect personal information (name, email, business details) that you voluntarily provide through our contact forms and order modals. This data is used solely to facilitate project discussions and service delivery.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">2. Cookies & Tracking</h2>
          <p>We use essential cookies for site functionality and to remember your privacy preferences. We do not use third-party tracking cookies without your explicit consent via our consent banner.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">3. Third-Party Processing</h2>
          <p>Your form submissions are processed through Web3Forms. They adhere to strict privacy standards and do not sell your data. We do not share your information with any other third parties.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">4. Your Rights</h2>
          <p>Under GDPR and other privacy laws, you have the right to access, correct, or request the deletion of your personal data. Contact us at pixelowl.agency@gmail.com to exercise these rights.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">5. Security</h2>
          <p>We implement industry-standard security measures to protect your data, including HTTPS encryption and secure form handling protocols.</p>
        </section>
      </>
    }
  />
);

const RefundPage = () => (
  <PolicyPage
    title="Refund Policy"
    content={
      <>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">1. Project Deposits</h2>
          <p>A non-refundable deposit is required to secure your project slot. This deposit covers the initial research and strategy phase.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">2. Milestone Payments</h2>
          <p>Payments made upon the completion of project milestones are non-refundable as they represent work already completed and approved.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">3. Project Cancellation</h2>
          <p>If a project is cancelled by the client, no refunds will be issued for work already performed. Any outstanding balances for completed work must be paid.</p>
        </section>
        <section>
          <h2 className="text-2xl font-medium text-white uppercase tracking-tight mb-4">4. Satisfaction Guarantee</h2>
          <p>We strive for excellence. If you are not satisfied with the direction of the project, we will work with you to make it right within the scope of the original agreement.</p>
        </section>
      </>
    }
  />
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-20"
      >
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/50">
          <Check size={40} className="text-emerald-500" />
        </div>
        <h3 className="text-3xl font-medium uppercase tracking-tight mb-4">Message Sent!</h3>
        <p className="text-white/40 font-light max-w-sm mx-auto">We've received your inquiry and will get back to you within 24 hours.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 text-sm font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/30">Your Name</label>
        <input required type="text" name="name" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-colors text-xl font-light" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/30">Email Address</label>
        <input required type="email" name="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-colors text-xl font-light" placeholder="john@example.com" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-widest text-white/30">Project Details</label>
        <textarea required name="message" rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-white outline-none transition-colors text-xl font-light resize-none" placeholder="Tell me about your project..." />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
      )}

      <button
        disabled={status === 'submitting'}
        type="submit"
        className="w-full py-6 bg-white text-black rounded-2xl font-bold text-xl flex items-center justify-center gap-3 mt-12 hover:bg-neutral-200 transition-all disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>Send Message <ArrowUpRight size={24} /></>
        )}
      </button>

      {/* Honeypot field for spam protection */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
};

const OrderModal = ({ plan, isOpen, onClose }: { plan: any; isOpen: boolean; onClose: () => void }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("service_tier", plan.title);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden max-h-[95vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-white/40 hover:text-white z-10 transition-colors">
          <X size={20} />
        </button>

        <div className="p-6 md:p-8">
          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-500/50">
                <Check size={40} className="text-emerald-500" />
              </div>
              <h3 className="text-3xl font-medium uppercase tracking-tight mb-4">Request Sent!</h3>
              <p className="text-white/40 font-light">We've received your project details for the {plan.title} plan. We'll reach out shortly.</p>
              <button onClick={onClose} className="mt-8 px-8 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-widest text-xs">Close</button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-purple-500 mb-1 block">New Project</span>
                <h2 className="text-3xl font-medium tracking-tighter uppercase">{plan.title} Package</h2>
                <p className="text-sm text-white/40 mt-1">Fill in your details and let's get started.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Your Name</label>
                    <input required type="text" name="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="Full Name" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Address</label>
                    <input required type="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="email@example.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Business Name</label>
                    <input required type="text" name="business_name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="Your Company" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Business Type</label>
                    <input required type="text" name="business_type" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors text-sm" placeholder="e.g. Agency, E-commerce" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Selected Service</label>
                  <input readOnly value={plan.title} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3.5 text-white/60 outline-none cursor-not-allowed text-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30">Project Goals</label>
                  <textarea required name="message" rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-white/30 outline-none transition-colors resize-none text-sm" placeholder="What are we building?" />
                </div>

                {/* Honeypot field for spam protection */}
                <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                {status === 'error' && (
                  <p className="text-red-400 text-xs font-medium">Something went wrong. Please try again.</p>
                )}



                <button
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full py-5 bg-white text-black rounded-xl font-bold text-lg flex items-center justify-center gap-3 mt-4 hover:bg-neutral-200 transition-all disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    </span>
                  ) : (
                    <>Submit Proposal <ArrowUpRight size={20} /></>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAction = (choice: 'accept' | 'decline') => {
    localStorage.setItem('cookie-consent', choice);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-[400px] z-[99999] bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl"
    >
      <h4 className="text-lg font-medium uppercase tracking-tight mb-4 text-white">Privacy & Cookies</h4>
      <p className="text-sm text-white/40 font-light leading-relaxed mb-8">
        We use essential cookies to ensure the best experience on our site. No personal data is tracked without your consent.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => handleAction('accept')}
          className="flex-1 py-4 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors"
        >
          Accept
        </button>
        <button
          onClick={() => handleAction('decline')}
          className="flex-1 py-4 bg-transparent border border-white/10 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
        >
          Decline
        </button>
      </div>
    </motion.div>
  );
};

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white flex flex-center items-center justify-center px-6 relative overflow-hidden text-center">
      <div className="absolute inset-0 -z-10 opacity-20">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/30">404 Error</span>
        <h1 className="text-[120px] md:text-[200px] font-bold tracking-tighter leading-none my-8 opacity-10">404</h1>
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase mb-8">Page Not Found</h2>
        <p className="text-white/40 font-light max-w-sm mx-auto mb-12">
          The link you followed may be broken, or the page may have been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all"
        >
          Return Home <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </div>
  );
};

const AboutPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30">About the Studio</span>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-6 leading-[0.9]">
              Crafting Digital<br />Masterpieces.
            </h1>
            <p className="text-xl md:text-2xl text-white/50 mt-12 font-light leading-relaxed">
              A boutique design and development studio dedicated to helping ambitious businesses stand out online. Artistic vision meets technical precision — no middlemen, no handoffs.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/5"
          >
            <img
              src={aboutStudioImg}
              alt="About PixelOwl"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />

          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-40">
          {[
            { title: "Vision", desc: "To redefine the digital experience by creating websites that are not just tools, but extensions of a brand's soul." },
            { title: "Mission", desc: "Empowering startups and established brands with high-performance, aesthetically superior web solutions." },
            { title: "Values", desc: "Quality over quantity, transparency in every step, and a relentless pursuit of perfection." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            >
              <h3 className="text-2xl font-medium uppercase tracking-tight mb-6">{item.title}</h3>
              <p className="text-white/40 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white pt-40 pb-20 px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20">
        <DarkVeil speed={0.5} noiseIntensity={0.02} scanlineIntensity={0.05} />
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mb-12 flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-semibold uppercase tracking-widest">Go Back</span>
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/30">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter uppercase mt-6 leading-[0.9]">
              Let's Start<br />Something Big.
            </h1>

            <div className="mt-16 space-y-12">
              {[
                { icon: Mail, label: "Email", value: "pixelowl.agency@gmail.com" },
                { icon: MapPin, label: "Location", value: "India" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-white/30 mb-2">{item.label}</h4>
                    <p className="text-2xl font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-neutral-900/40 border border-white/5 p-10 md:p-16 rounded-3xl"
          >
            <ContactForm />
          </motion.div>
        </div>

        <div className="mt-20 flex gap-6">
          <a href="https://www.instagram.com/pixelowl_digital?igsh=aWt2d3VmbnB0MGZt" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};


const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', (e) => {
      if ((e.target as HTMLElement).closest('a, button')) setHovered(true);
      else setHovered(false);
    });

    let rx = -100, ry = -100;
    let rafId: number;
    const animate = () => {
      rx += (posRef.current.x - rx) * 0.12;
      ry += (posRef.current.y - ry) * 0.12;
      setRing({ x: rx, y: ry });
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        className="fixed pointer-events-none z-[99999] rounded-full"
        style={{
          width: 6, height: 6,
          background: 'white',
          left: pos.x - 3, top: pos.y - 3,
        }}
      />
      <div
        className="fixed pointer-events-none z-[99998] rounded-full border"
        style={{
          width: hovered ? 52 : 30,
          height: hovered ? 52 : 30,
          left: ring.x - (hovered ? 26 : 15),
          top: ring.y - (hovered ? 26 : 15),
          transition: 'width 0.25s ease, height 0.25s ease',
          borderColor: hovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
        }}
      />
    </>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <MarqueeStrip />
    <BentoProjects />
    <ServicesSection />
    <ProcessSection />
    <DeliveryMarquee />
    <PricingSection />
    <TestimonialsSection />
    <Footer />
  </>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <main className="bg-transparent text-white selection:bg-white selection:text-black">
        <CustomCursor />
        <Navbar />
        <CookieConsent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Router>
  );
}
