/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import { ArrowUpRight, ArrowRight, Star, Menu, Check, Plus, Minus, X, ArrowLeft, ArrowUp, ArrowDown, Mail, MapPin, Phone, Instagram, Twitter,  Linkedin,
  Search,
  Sun,
  Battery,
  Zap,
  Globe,
  Cpu,
  Layers,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import FlowingMenu from './components/FlowingMenu';
import StarBorder from './components/StarBorder';

import rostraImg from './assets/work/rostra.png';
import orvionImg from './assets/work/orvion.png';
import nexisImg from './assets/work/nexis.png';
import toolinoImg from './assets/work/toolino.png';
import aboutStudioImg from './assets/about_studio.png';
import logoImg from './assets/logo.jpg';
import uiUxImg from './assets/services/ui_ux.png';
import webDevImg from './assets/services/web_dev.png';
import brandingImg from './assets/services/branding.png';
import strategyImg from './assets/services/strategy.png';
import heroBgImg from './assets/hero-bg.png';
import heroOwlBgImg from './assets/hero_owl_mountains_backwards.png';
import mountainValleyBgImg from './assets/mountain_valley_hero_bg_misty.png';
import travelerOwlLeftBgImg from './assets/owl_red_hero.png';
import heroChatGptImg from './assets/hero-chatgpt.png';
import heroChatGpt2Img from './assets/hero-chatgpt-2.png';
import solutionCreativeImg from './assets/redesign/solution_creative.png';
import solutionTechImg from './assets/redesign/solution_tech.png';
import solutionGrowthImg from './assets/redesign/solution_growth.png';
import statsFeatureImg from './assets/redesign/stats_feature.png';
import aboutUsFeatureImg from './assets/redesign/about_us_feature.png';
import serviceWebDesignImg from './assets/redesign/service_web_design.png';
import serviceWebDevImg from './assets/redesign/service_web_dev.png';
import serviceEcommerceImg from './assets/redesign/service_ecommerce.png';
import serviceSeoImg from './assets/redesign/service_seo.png';
import serviceMarketingImg from './assets/redesign/service_digital_marketing.png';
import team1Img from './assets/redesign/team_1.png';
import team2Img from './assets/redesign/team_2.png';
import team3Img from './assets/redesign/team_3.png';
import team4Img from './assets/redesign/team_4.png';




const Asterisk = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className={className}>
    <line x1="12" y1="4" x2="12" y2="20" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="6.34" y1="6.34" x2="17.66" y2="17.66" />
    <line x1="6.34" y1="17.66" x2="17.66" y2="6.34" />
  </svg>
);

const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  return (
    <span className={className}>
      {text.split(" ").map((word, wordIdx) => (
        <span 
          key={wordIdx} 
          className="inline-block mr-[0.25em] last:mr-0 align-bottom"
        >
          {word.split("").map((char, charIdx) => (
             <motion.span
               key={charIdx}
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, margin: "0px 0px -50px 0px" }}
               transition={{
                 duration: 0.8,
                 ease: [0.16, 1, 0.3, 1],
                 delay: delay + (wordIdx * 0.1) + (charIdx * 0.02)
               }}
               className="inline-block"
             >
               {char === " " ? "\u00A0" : char}
             </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

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

const HERO_BRANDS = [
  { name: "Orvion", image: orvionImg },
  { name: "Nexis", image: nexisImg },
  { name: "Toolino", image: toolinoImg }
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

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE");

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
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-[#FF0000]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[#FF0000]/50">
          <Check size={40} className="text-[#FF0000]" />
        </div>
        <h3 className="text-3xl font-medium uppercase tracking-tight mb-4">Message Sent!</h3>
        <p className="text-white/40 font-light max-w-sm mx-auto">We've received your inquiry and will get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/30 px-1">Your Name</label>
        <input required type="text" name="name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#FF0000]/30 outline-none transition-colors text-sm" placeholder="John Doe" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/30 px-1">Email Address</label>
        <input required type="email" name="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#FF0000]/30 outline-none transition-colors text-sm" placeholder="email@example.com" />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-white/30 px-1">Project Details</label>
        <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:border-[#FF0000]/30 outline-none transition-colors text-sm resize-none" placeholder="Tell us about your project..." />
      </div>
      {status === 'error' && (
        <p className="text-red-400 text-xs font-medium">Something went wrong. Please try again.</p>
      )}
      <button
        disabled={status === 'submitting'}
        type="submit"
        className="w-full py-4 bg-[#FF0000] text-black rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 mt-4 hover:bg-white transition-all disabled:opacity-50"
      >
        {status === 'submitting' ? "Sending..." : <>Send Message <ArrowRight size={16} /></>}
      </button>
    </form>
  );
};

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-neutral-900 border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-[#FF0000] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF0000]">AVAILABLE FOR PROJECTS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tighter uppercase leading-none">Let's build<br />something great.</h2>
              <p className="text-sm text-white/40 mt-4 leading-relaxed">Fill out the form below and we'll get back to you within 24 hours to schedule a free strategy session.</p>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Navbar = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 transition-all duration-500 z-9999 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-md shadow-sm' : 'py-8 bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left - See Projects */}
      <div 
        className={`hidden md:flex flex-col items-start cursor-pointer transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}
        onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm font-semibold tracking-tight uppercase">See projects</span>
        <span className={`text-[10px] uppercase tracking-widest font-bold opacity-50 ${scrolled ? 'text-black/60' : 'text-white/60'}`}>Portfolio</span>
      </div>

      {/* Center - PIXELOWL */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 font-medium tracking-[0.6em] text-sm md:text-lg select-none cursor-pointer transition-colors duration-500 ${scrolled ? 'text-black' : 'text-white'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        PIXELOWL
      </div>

      {/* Right - Get in touch */}
      <div className="hidden md:flex items-center">
        <button
          onClick={onOpenContact}
          className={`flex items-center gap-3 pl-6 pr-2 py-2 rounded-xl font-bold transition-all group overflow-hidden ${scrolled ? 'bg-black text-white hover:bg-neutral-800' : 'bg-[#FF0000] text-black hover:bg-white'}`}
        >
          <span className="text-[13px] uppercase tracking-widest">Get in touch</span>
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center relative overflow-hidden transition-colors ${scrolled ? 'bg-white text-black' : 'bg-black text-[#FF0000]'}`}>
            <ArrowUpRight size={16} className="absolute transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8" />
            <ArrowUpRight size={16} className="absolute -translate-x-8 translate-y-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </button>
      </div>
    </motion.nav>
  );
};

const Hero = ({ onOpenContact }: { onOpenContact: () => void }) => (
  <section
    className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-center bg-cover bg-no-repeat w-full"
    style={{ backgroundImage: `url(${travelerOwlLeftBgImg})` }}
  >
    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/30 z-0 pointer-events-none"></div>
    
    {/* Top Navigation Overlay */}
    <div className="absolute top-8 left-0 w-full px-6 md:px-16 flex justify-between items-center z-20 pointer-events-none opacity-0">
      {/* Hidden legacy overlay to prevent layout shifts */}
    </div>

    {/* Center Content */}
    <div className="relative z-10 flex flex-col items-center max-w-6xl px-6 pointer-events-none">
      {/* Badges removed per request */}


      {/* Bottom Logos removed per request */}
    </div>

    {/* Big Bottom Phrase & Mobile Button */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="absolute bottom-10 md:bottom-12 left-0 w-full px-6 flex flex-col items-center justify-center z-20 pointer-events-none"
    >
      <div 
        className="text-white font-bold uppercase tracking-tighter leading-none select-none text-center"
        style={{ 
          fontFamily: 'var(--font-geist)',
          fontSize: 'clamp(40px, 12vw, 140px)',
          letterSpacing: '-0.06em',
          textShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}
      >
        DESIGN THAT MATTERS
      </div>

      {/* Mobile-only Get In Touch Button */}
      <div className="mt-8 md:hidden flex justify-center w-full pointer-events-auto shrink-0">
        <button
          onClick={onOpenContact}
          className="flex items-center gap-3 pl-8 pr-2 py-3 rounded-2xl font-bold transition-all group overflow-hidden bg-[#FF0000] text-black hover:bg-white shadow-[0_0_20px_rgba(255,0,0,0.3)]"
        >
          <span className="text-sm uppercase tracking-widest font-black">Get in touch</span>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden transition-colors bg-black text-[#FF0000]">
            <ArrowUpRight size={20} className="absolute transition-transform duration-300 group-hover:translate-x-10 group-hover:-translate-y-10" />
            <ArrowUpRight size={20} className="absolute -translate-x-10 translate-y-10 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </button>
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
    <div ref={ref} className="py-8 bg-neutral-900 overflow-hidden border-y border-white/5 w-full">
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
            <Asterisk className="w-4 h-4 text-[#FF0000]" />
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
    <div ref={ref} className="py-6 bg-neutral-900 overflow-hidden border-y border-white/5 w-full">
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

const SolutionsSection = () => {
  const solutions = [
    { title: "Creative Design", desc: "Crafting visually stunning experiences that captivate.", img: solutionCreativeImg },
    { title: "Tech Excellence", desc: "Building robust, scalable digital infrastructures.", img: solutionTechImg },
    { title: "Growth Strategy", desc: "Driving measurable results through data-led insights.", img: solutionGrowthImg }
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black font-bold">Our Services</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-black mt-4 leading-tight">
          <RevealText text="Customized digital strategies " delay={0.1} />
          <RevealText text="that fit your needs" delay={0.2} />
        </h2>
        <p className="text-black mt-6 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          We don't believe in one-size-fits-all. Every project is a unique opportunity to innovate.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {solutions.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl mb-6 shadow-2xl">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-linear-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-medium text-white mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm line-clamp-2">{s.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};const AgencyStatsSection = () => {
  const bulletPoints = [
    "Custom Web Design & UI/UX",
    "High-Performance Development",
    "E-commerce Strategy & Builds",
    "Technical SEO Optimization",
    "Conversion Rate Optimization",
    "Ongoing Website Maintenance"
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Stats */}
        <div className="md:col-span-3 flex flex-col justify-between self-stretch">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black font-medium text-base leading-relaxed"
          >
            At PixelOwl, we help brands and businesses switch to high-performance digital experiences—reducing complexity and increasing efficiency.
          </motion.p>
          
          <div className="mt-16 lg:mt-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-[100px] md:text-[140px] font-medium leading-none tracking-tighter text-black"
            >
              3
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-black font-bold text-base mt-2"
            >
              Years of delivering<br />high-end digital solutions
            </motion.p>
          </div>
        </div>

        {/* Center Column: Image & Badge */}
        <div className="md:col-span-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-xl relative aspect-4/5 bg-neutral-100"
          >
            <img src={aboutUsFeatureImg} alt="PixelOwl Team" className="w-full h-full object-cover" />
          </motion.div>
          
          {/* Rotating Badge */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-6 -left-6 w-32 h-32 z-20 drop-shadow-xl"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="38" fill="#FF0000" />
                  <path
                    id="circlePath"
                    d="M 50, 50 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                    fill="none"
                  />
                  <text className="text-[10px] font-bold tracking-widest fill-black uppercase">
                    <textPath xlinkHref="#circlePath">
                      About us ✦ About us ✦ About us ✦ About us ✦
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Content */}
        <div className="md:col-span-5 flex flex-col items-start lg:pl-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-10 leading-tight"
          >
            Comprehensive digital agency solutions
          </motion.h2>
          
          <div className="space-y-4 mb-10">
            {bulletPoints.map((point, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                  <Check size={12} className="stroke-2" />
                </div>
                <span className="text-lg text-black font-medium tracking-tight">{point}</span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center gap-4 bg-[#FF0000] rounded-2xl p-1.5 group transition-all shadow-lg shadow-[#FF0000]/10 hover:bg-[#CC0000]"
            >
              <span className="text-black font-semibold text-base px-6 py-1.5">About us</span>
              <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-[#FF0000] relative overflow-hidden">
                <ArrowUpRight size={18} className="absolute transition-transform duration-300 group-hover:translate-x-10 group-hover:-translate-y-10" />
                <ArrowUpRight size={18} className="absolute -translate-x-10 translate-y-10 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CapabilitiesGrid = () => {
  const capabilities = [
    { title: "Deep Analysis", desc: "Understanding your market and identifying gaps others miss.", icon: <Search size={24} /> },
    { title: "Core Strategy", desc: "Mapping out every interaction for maximum ROI.", icon: <Globe size={24} /> },
    { title: "UI/UX Design", desc: "Pixel-perfect interfaces that feel completely natural.", icon: <Layers size={24} /> },
    { title: "Development", desc: "Clean, performant code built for long-term scalability.", icon: <Cpu size={24} /> },
    { title: "Launch Ready", desc: "Smooth go-lives with zero downtime and full support.", icon: <Zap size={24} /> },
    { title: "Maintenance", desc: "Always on, always optimized, forever evolving.", icon: <ExternalLink size={24} /> }
  ];

  return (
    <section className="bg-neutral-50 py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-black">Our Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mt-4">
            <RevealText text="Built for performance" delay={0.1} />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {capabilities.map((c, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-black border border-neutral-100">
                {c.icon}
              </div>
              <div>
                <h3 className="text-xl font-medium text-black mb-3">{c.title}</h3>
                <p className="text-black font-medium leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const serviceItems = [
    { link: '/services', text: 'Web Design', image: serviceWebDesignImg },
    { link: '/services', text: 'Web Development', image: serviceWebDevImg },
    { link: '/services', text: 'E-commerce', image: serviceEcommerceImg },
    { link: '/services', text: 'SEO Optimization', image: serviceSeoImg },
    { link: '/services', text: 'Digital Marketing', image: serviceMarketingImg }
  ];

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[#FF0000] font-bold uppercase tracking-[0.3em] text-sm block mb-4"
        >
          Our Expertise
        </motion.span>
        <h2
          className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight flex flex-col items-center"
        >
          <RevealText text="Services we offer" delay={0.1} />
        </h2>
      </div>

      <div className="border-t border-white/10" style={{ position: 'relative' }}>
        <FlowingMenu
          items={serviceItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#000000"
          marqueeBgColor="#FF0000"
          marqueeTextColor="#000000"
          borderColor="rgba(255,255,255,0.1)"
        />
      </div>
    </section>
  );
};
const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <section id="work" className="bg-[#FF0000] py-16 md:py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap size={18} className="text-black fill-black" />
              <span className="text-sm font-bold uppercase text-black/90 tracking-[0.35em]">CASE STUDIES</span>
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-7xl font-medium tracking-tight text-black leading-[0.95] flex flex-col items-start" style={{ fontFamily: 'var(--font-geist)' }}>
              <RevealText text="STRATEGIC DESIGN & DIGITAL" delay={0.1} />
              <RevealText text="GROWTH FOR MODERN BRANDS" delay={0.2} />
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <p className="text-black font-semibold text-xl mb-10 leading-snug opacity-80">
              We translate complex business challenges into intuitive digital products that resonate with global audiences and drive measurable scaling.
            </p>
          </motion.div>
        </div>

        {/* Square Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-24 md:gap-y-20">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col group"
            >
              <div className="relative aspect-square overflow-hidden mb-10 shadow-2xl bg-black border border-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-linear-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 bg-[#FF0000] text-black rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tighter uppercase leading-none" style={{ fontFamily: 'var(--font-geist)' }}>
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                />
              </div>

              <div className="flex justify-between items-start px-4">
                <div className="max-w-xs">
                  <p className="text-black/60 font-medium text-sm leading-relaxed">
                    A comprehensive digital transformation focused on high-conversion UI and seamless backend integration.
                  </p>
                </div>
                <div className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-[#FF0000] transition-colors">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Toggle View All Button */}
          {!showAll && PROJECTS.length > 2 && (
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="md:col-span-2 flex justify-center mt-12"
            >
               <button 
                  onClick={() => setShowAll(true)}
                  className="group flex flex-col items-center gap-6"
               >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-[#FF0000]">
                    <Plus size={32} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.4em] text-black/40 group-hover:text-black transition-colors">VIEW ALL PROJECTS</span>
               </button>
            </motion.div>
          )}

          {showAll && (
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="md:col-span-2 flex justify-center mt-12"
            >
               <button 
                  onClick={() => {
                    setShowAll(false);
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group flex flex-col items-center gap-6"
               >
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/10 flex items-center justify-center transition-all group-hover:bg-black group-hover:text-[#FF0000]">
                    <Minus size={32} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.4em] text-black/40 group-hover:text-black transition-colors">SHOW LESS</span>
               </button>
            </motion.div>
          )}
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
                <span className="text-xl font-mono text-[#FF0000] font-medium">{step.id}</span>
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

const PricingSection = ({ onOpenContact }: { onOpenContact: () => void }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftColRef.current,
        pinSpacing: false,
        scrub: false,
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const plans = [
    {
      id: 'basic',
      title: "Basic Plan",
      price: "$150.00",
      desc: "Essential web presence and reliable performance for small businesses starting out.",
      theme: 'light',
      features: [
        { name: "Custom Web Design", included: true },
        { name: "Responsive Development", included: true },
        { name: "Basic SEO Setup", included: true },
        { name: "Monthly Maintenance", included: false },
        { name: "Priority Support", included: false }
      ]
    },
    {
      id: 'professional',
      title: "Professional Plan",
      price: "$250.00",
      desc: "Best suited for scaling businesses requiring advanced functionality and ongoing optimization.",
      theme: 'dark',
      features: [
        { name: "Complex Web Applications", included: true },
        { name: "Advanced SEO & Analytics", included: true },
        { name: "Performance Tuning", included: true },
        { name: "Priority Support", included: true },
        { name: "Custom Animations", included: true }
      ]
    },
    {
      id: 'premium',
      title: "Premium Plan",
      price: "$500.00",
      desc: "A full-scale digital ecosystem tailored for high-growth and established organizations.",
      theme: 'light',
      features: [
        { name: "Enterprise-Grade Solutions", included: true },
        { name: "Custom Software Architecture", included: true },
        { name: "Continuous CRO & Testing", included: true },
        { name: "Dedicated Account Manager", included: true },
        { name: "24/7 Premium Support", included: true }
      ]
    }
  ];

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="flex flex-col lg:flex-row items-start min-h-screen bg-white"
    >
      {/* GSAP Pinned Left Column */}
      <div 
        ref={leftColRef} 
        className="w-full lg:w-[35%] flex flex-col justify-center lg:h-screen px-6 lg:pl-16 lg:pr-8 py-24 lg:py-0"
      >
        <div className="flex items-center gap-2 mb-6">
          <Zap size={16} className="text-black" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">BEST PRICING PLANS</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-black leading-tight mb-8">
          <RevealText text="Flexible " className="block" />
          <RevealText text="best pricing " delay={0.2} className="block" />
          <RevealText text="plans for you" delay={0.4} className="block" />
        </h2>
        
        <p className="text-base text-black font-medium leading-relaxed mb-10 max-w-sm">
          Choose a plan that fits your needs today and scales effortlessly as your business grows. No hidden fees or complexity.
        </p>

        <button 
          onClick={onOpenContact}
          className="flex items-center justify-center gap-3 bg-[#FF0000] rounded-xl p-1 group transition-all shadow-md shadow-[#FF0000]/10 w-max hover:bg-[#CC0000]"
        >
          <span className="text-black font-semibold text-sm px-5 py-1.5">Get in touch</span>
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-[#FF0000] relative overflow-hidden">
            <ArrowUpRight size={14} className="absolute transition-transform duration-300 group-hover:translate-x-8 group-hover:-translate-y-8" />
            <ArrowUpRight size={14} className="absolute -translate-x-8 translate-y-8 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
          </div>
        </button>
      </div>

      {/* Scrollable Right Column */}
      <div className="w-full lg:w-[65%] flex flex-col gap-8 px-6 lg:pl-12 lg:pr-16 py-12 lg:py-32">
        {plans.map((plan, i) => (
          <div 
            key={i}
            className={`rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-start gap-10 border transition-all duration-500 min-h-[450px] ${
              plan.theme === 'dark' 
              ? 'bg-black text-white border-black shadow-xl' 
              : 'bg-[#F9F4FF]/50 backdrop-blur-sm text-black border-neutral-100 shadow-lg'
            }`}
          >
            {/* Card Left: Plan Details */}
            <div className="flex-1 flex flex-col w-full">
              <h3 className={`text-xl font-semibold mb-6 ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {plan.title}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-semibold tracking-tighter">{plan.price}</span>
                <span className={`text-xs opacity-60 font-medium ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                  Per Month
                </span>
              </div>

              <p className={`text-sm font-medium leading-relaxed mb-8 flex-grow ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {plan.desc}
              </p>

              <button 
                onClick={onOpenContact}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-500 transform hover:scale-[1.01] ${
                  plan.theme === 'dark'
                  ? 'bg-[#FF0000] text-black hover:bg-white'
                  : 'bg-black text-white hover:bg-[#FF0000] hover:text-black'
                }`}
              >
                Inquire now
              </button>
            </div>

            {/* Card Right: Features */}
            <div className="w-full md:w-5/12 md:border-l border-black/5 md:pl-8 mt-8 md:mt-0">
              <h4 className={`text-sm font-semibold mb-6 ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`}>
                Whats included ?
              </h4>
              <div className="space-y-4">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                      feature.included 
                      ? 'bg-[#FF0000] border-[#FF0000] text-black' 
                      : 'bg-transparent border-neutral-300 text-black'
                    }`}>
                      {feature.included ? (
                        <Check size={12} className="stroke-3" />
                      ) : (
                        <X size={12} className={`stroke-3 ${plan.theme === 'dark' ? 'text-white' : 'text-black'}`} />
                      )}
                    </div>
                    <span className={`text-sm font-bold ${
                      plan.theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
                  <div className="text-xs font-mono text-[#FF0000] uppercase tracking-widest mb-4">{t.result}</div>
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
                  <div className="text-xs font-mono text-[#FF0000] uppercase tracking-widest mb-4">{t.result}</div>
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
      <Link to="/contact" className="px-12 pr-4 py-4 bg-white rounded-full inline-flex items-center gap-6 group transition-colors hover:bg-neutral-200 text-black mx-auto">
        <span className="font-bold text-2xl">Start a project</span>
        <div className="w-14 h-14 rounded-full flex items-center justify-center text-black relative overflow-hidden" style={{ backgroundColor: 'var(--accent)' }}>
          <ArrowUpRight size={28} className="absolute transition-transform duration-300 group-hover:translate-x-10 group-hover:-translate-y-10" />
          <ArrowUpRight size={28} className="absolute -translate-x-10 translate-y-10 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
        </div>
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


const HomePage = ({ onOpenContact }: { onOpenContact: () => void }) => (
   <>
    <Hero onOpenContact={onOpenContact} />
    <MarqueeStrip />
    <SolutionsSection />
    <AgencyStatsSection />
    <DeliveryMarquee />
    <PricingSection onOpenContact={onOpenContact} />
    <Footer />
  </>
);

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
      className="fixed bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-[400px] z-99999 bg-neutral-900 border border-white/10 p-8 rounded-3xl shadow-2xl backdrop-blur-xl"
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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (isContactModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isContactModalOpen]);

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
        <ScrollToTop />
        <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
        <CookieConsent />
        <HomePage onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
    </Router>
  );
}
