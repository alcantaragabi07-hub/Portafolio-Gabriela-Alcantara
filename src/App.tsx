import React, { useState, useEffect, useRef } from 'react';
import { 
  motion, 
  AnimatePresence 
} from 'motion/react';
import { 
  Briefcase, 
  Layers, 
  Compass, 
  Eye, 
  Heart, 
  Send, 
  ArrowUpRight, 
  FileText, 
  CheckCircle, 
  Clock, 
  ArrowLeft, 
  Copy, 
  Plus, 
  Trash2, 
  ExternalLink, 
  Menu, 
  X,
  Info
} from 'lucide-react';
import { PROJECTS, SERVICES } from './data';
import { Project, Service, Inquiry } from './types';

export default function App() {
  // Navigation & Category Filters
  const [activeCategory, setActiveCategory] = useState<string>(() => {
    try {
      return localStorage.getItem('gabriela_activeCategory') || 'All';
    } catch {
      return 'All';
    }
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  
  // Custom Cursor coordinates
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State loaded from localStorage
  const [fullName, setFullName] = useState(() => {
    try {
      return localStorage.getItem('gabriela_form_fullName') || '';
    } catch {
      return '';
    }
  });
  const [email, setEmail] = useState(() => {
    try {
      return localStorage.getItem('gabriela_form_email') || '';
    } catch {
      return '';
    }
  });
  const [serviceType, setServiceType] = useState(() => {
    try {
      return localStorage.getItem('gabriela_form_serviceType') || 'Brand Identity';
    } catch {
      return 'Brand Identity';
    }
  });
  const [budget, setBudget] = useState(() => {
    try {
      return localStorage.getItem('gabriela_form_budget') || '$5,000 – $10,000';
    } catch {
      return '$5,000 – $10,000';
    }
  });
  const [timeline, setTimeline] = useState(() => {
    try {
      return localStorage.getItem('gabriela_form_timeline') || '1 – 2 Months';
    } catch {
      return '1 – 2 Months';
    }
  });
  const [message, setMessage] = useState(() => {
    try {
      return localStorage.getItem('gabriela_form_message') || '';
    } catch {
      return '';
    }
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedInquiries, setSubmittedInquiries] = useState<Inquiry[]>([]);
  const [showInquiryTracker, setShowInquiryTracker] = useState(false);

  // Clipboard copies
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  // Persist form inputs in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gabriela_form_fullName', fullName);
      localStorage.setItem('gabriela_form_email', email);
      localStorage.setItem('gabriela_form_serviceType', serviceType);
      localStorage.setItem('gabriela_form_budget', budget);
      localStorage.setItem('gabriela_form_timeline', timeline);
      localStorage.setItem('gabriela_form_message', message);
    } catch (e) {
      console.error('Error saving form to localStorage', e);
    }
  }, [fullName, email, serviceType, budget, timeline, message]);

  // Persist category filter in localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gabriela_activeCategory', activeCategory);
    } catch (e) {
      console.error('Error saving category to localStorage', e);
    }
  }, [activeCategory]);

  // Initialize mouse tracker & Load previous inquiries from LocalStorage
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Load local inquiries
    const saved = localStorage.getItem('gabriela_inquiries');
    if (saved) {
      try {
        setSubmittedInquiries(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing inquiries', e);
      }
    } else {
      // Default initial mock inquiry for engagement!
      const initialMock: Inquiry = {
        id: 'inq-initial',
        fullName: 'Alexander Vane',
        email: 'vane@aperture-atelier.com',
        serviceType: 'Brand Identity',
        budget: '$15,000 – $30,000',
        timeline: '2 – 3 Months',
        message: 'Looking to craft a timeless architectural brand concept for our European flagship locations. We felt in love with the Aura Collective execution and layout.',
        status: 'In Review',
        date: '2026-05-28',
        comment: 'Gabriela loved this pitch! Currently coordinating a video kickoff call.'
      };
      setSubmittedInquiries([initialMock]);
      localStorage.setItem('gabriela_inquiries', JSON.stringify([initialMock]));
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Filter project lists
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

  // Handle Form Submission
  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      fullName,
      email,
      message,
      serviceType,
      budget,
      timeline,
      status: 'Received',
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newInquiry, ...submittedInquiries];
    setSubmittedInquiries(updated);
    localStorage.setItem('gabriela_inquiries', JSON.stringify(updated));
    setFormSubmitted(true);

    // Dynamic state simulation: after a bit, let's auto transition status
    setTimeout(() => {
      setSubmittedInquiries(prev => {
        const next = prev.map(item => {
          if (item.id === newInquiry.id) {
            return {
              ...item,
              status: 'In Review' as const,
              comment: 'Inquiry is currently being reviewed by Gabriela. Estimated alignment response within 24 hours.'
            };
          }
          return item;
        });
        localStorage.setItem('gabriela_inquiries', JSON.stringify(next));
        return next;
      });
    }, 15000);
  };

  // Delete/Cancel an Inquiry
  const handleDeleteInquiry = (id: string) => {
    const updated = submittedInquiries.filter(item => item.id !== id);
    setSubmittedInquiries(updated);
    localStorage.setItem('gabriela_inquiries', JSON.stringify(updated));
  };

  // Reset Form
  const resetForm = () => {
    setFullName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(false);
  };

  // Helper to copy colors
  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#f2f2f2] font-sans antialiased overflow-x-hidden selection:bg-[#0f16a5] selection:text-white">
      
      {/* Custom Ethereal Cursor (Desktop only) */}
      <div 
        className="hidden md:block fixed pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2.2 : 1})`,
        }}
      >
        <div className={`w-6 h-6 rounded-full border border-[#f2f2f2] transition-colors duration-300 ${
          isHovering ? 'bg-[#0f16a5]/20 border-[#0f16a5]' : 'bg-transparent'
        }`} />
      </div>

      {/* Top Header Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#000000]/85 backdrop-blur-2xl border-b border-[#111111] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6 md:px-12 flex justify-between items-center">
          <a 
            href="#" 
            className="font-display text-xl md:text-2xl font-extrabold tracking-tighter uppercase text-[#f2f2f2] hover:text-[#0f16a5] transition-colors duration-300"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Gabriela Alcántara
          </a>

          {/* Desktop Navigation Link Block */}
          <div className="hidden md:flex items-center space-x-12">
            {[
              { label: 'Selected Work', href: '#work' },
              { label: 'Designing Stories', href: '#about' },
              { label: 'Specialties', href: '#services' },
              { label: 'Project Planner', href: '#contact' }
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="font-sans text-xs font-semibold uppercase tracking-widest text-[#999999] hover:text-[#f2f2f2] transition-colors duration-300 relative group py-1"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-[#f2f2f2] transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}

            {/* Inquiries Counter Indicator */}
            <button
              onClick={() => {
                setShowInquiryTracker(true);
                document.body.style.overflow = 'hidden';
              }}
              className="flex items-center space-x-2 bg-[#0a0a0a] hover:bg-[#111111] border border-[#1a1a1a] px-4 py-2 rounded text-xs uppercase tracking-widest font-bold transition-all duration-300"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Desk ({submittedInquiries.length})</span>
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => {
                setShowInquiryTracker(true);
                document.body.style.overflow = 'hidden';
              }}
              className="flex items-center space-x-1.5 bg-[#0a0a0a] border border-[#1a1a1a] px-3 py-1.5 rounded text-[10px] uppercase tracking-widest font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Desk ({submittedInquiries.length})</span>
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#f2f2f2] hover:text-[#0f16a5] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#000000] border-b border-[#111111] overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col space-y-6">
                {[
                  { label: 'Selected Work', href: '#work' },
                  { label: 'Designing Stories', href: '#about' },
                  { label: 'Specialties', href: '#services' },
                  { label: 'Project Planner', href: '#contact' }
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-xl font-bold uppercase tracking-wide text-[#999999] hover:text-[#f2f2f2]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-24 overflow-hidden radial-grid">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0f16a5] rounded-full blur-[140px] opacity-40 mix-blend-screen" />
        </div>

        {/* Giant running letter artwork in negative space */}
        <div className="absolute top-[42%] left-0 w-full overflow-hidden opacity-3 select-none pointer-events-none whitespace-nowrap">
          <span className="text-[18vw] font-display font-extrabold tracking-tighter uppercase leading-none text-[#f2f2f2]">
            CREATIVE VISION STRATEGY IDENTITY
          </span>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-[8.5rem] font-extrabold tracking-tighter leading-[0.9] uppercase text-[#f2f2f2]">
              GABRIELA <br /> ALCÁNTARA
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-12 font-sans text-sm md:text-lg text-[#999999] font-light max-w-xl mx-auto italic tracking-wide"
          >
            Crafting Visually Impactful Design Experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16"
          >
            <a
              href="#work"
              className="inline-flex items-center px-10 py-5 bg-[#f2f2f2] text-[#000000] font-sans text-xs uppercase tracking-[0.25em] font-bold border border-[#f2f2f2] hover:bg-transparent hover:text-[#f2f2f2] transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <span>Explore My Work</span>
            </a>
          </motion.div>
        </div>

        {/* Floating elements indicating scroll */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-semibold text-[#808080]">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-[#f2f2f2] to-transparent animate-bounce" />
        </div>
      </section>

      {/* Selected Works Gallery Section */}
      <section id="work" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
        
        {/* Header Grid */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#111111] pb-8">
          <div>
            <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f16a5] mb-2 block">
              Curated Portfolio
            </span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#f2f2f2]">
              Selected Works
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3 text-[#808080]">
            <span className="font-sans text-xs uppercase tracking-widest font-medium">(2021—2026)</span>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {['All', 'Brand Identity', 'Packaging', 'Web & Digital', 'Illustration'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#f2f2f2] text-[#000000] border-[#f2f2f2]'
                  : 'bg-transparent text-[#999999] border-[#1a1a1a] hover:border-[#808080] hover:text-[#f2f2f2]'
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Works Grid representation (Bento style based on mock specifications) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // We simulate the asymmetric sizing based on standard indexes:
              // Index 0 (Aura): 8 cols (Wide)
              // Index 1 (Vellure): 4 cols (Tall)
              // Index 2 (Architrave): 4 cols (Tall)
              // Index 3 (Ethereal): 8 cols (Wide)
              const mdColSpan = idx % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4';
              const aspectClass = idx % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[3/4]';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`${mdColSpan} group relative bg-[#0a0a0a] border border-[#111111] overflow-hidden cursor-pointer`}
                  onClick={() => {
                    setSelectedProject(project);
                    document.body.style.overflow = 'hidden';
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`relative w-full h-full ${aspectClass} overflow-hidden`}>
                    {/* Dark overlay by default for luxury feel */}
                    <div className="absolute inset-0 bg-[#000000]/10 group-hover:bg-[#000000]/30 transition-colors duration-400 z-10" />
                    
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />

                    {/* Gradient metadata banner at the root bottom of each layout */}
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-[#000000]/90 via-[#000000]/50 to-transparent z-20 flex flex-col justify-end">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#999999] mb-1 block">
                            {project.category}
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#f2f2f2] tracking-tight group-hover:text-[#ffffff]">
                            {project.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-full border border-[#f2f2f2]/25 group-hover:border-[#f2f2f2] group-hover:bg-[#f2f2f2] group-hover:text-[#000000] flex justify-center items-center text-[#f2f2f2] transition-all duration-400">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    </div>

                    {/* Left vertical Year Tag */}
                    <div className="absolute top-6 left-6 z-20 bg-black/80 backdrop-blur-md px-3 py-1 border border-[#1a1a1a]">
                      <span className="font-sans text-[9px] font-bold tracking-widest text-[#f2f2f2] uppercase">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Immersive Project Drawer Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedProject(null);
                document.body.style.overflow = 'auto';
              }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            {/* Content panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-[#030303] border-l border-[#111111] h-full overflow-y-auto z-10 flex flex-col"
            >
              {/* Header sticky block */}
              <div className="sticky top-0 bg-[#030303]/95 backdrop-blur-md border-b border-[#111111] p-6 z-30 flex justify-between items-center">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    document.body.style.overflow = 'auto';
                  }}
                  className="flex items-center space-x-2 text-[#999999] hover:text-[#f2f2f2] text-xs uppercase tracking-widest font-bold transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Gallery</span>
                </button>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-[#999999] tracking-widest">
                    {selectedProject.category}
                  </span>
                  <p className="text-xs text-[#808080]">{selectedProject.year} © GA</p>
                </div>
              </div>

              {/* Drawer Content Body */}
              <div className="p-8 md:p-12 space-y-12 pb-32">
                {/* Hero image in the drawer */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#0d0d0d] border border-[#111111]">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <h3 className="font-display text-3xl md:text-5xl font-extrabold uppercase text-[#f2f2f2] tracking-tighter">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-[#999999] tracking-wider mt-1 uppercase font-semibold">
                      Client: {selectedProject.details.client}
                    </p>
                  </div>
                </div>

                {/* Grid info details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-b border-[#111111] pb-8 text-left">
                  <div>
                    <span className="text-[10px] text-[#808080] uppercase tracking-wider font-semibold block mb-1">Role / Duty</span>
                    <p className="text-xs text-[#f2f2f2] font-semibold">{selectedProject.role}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#808080] uppercase tracking-wider font-semibold block mb-1">Year</span>
                    <p className="text-xs text-[#f2f2f2] font-semibold">{selectedProject.year}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#808080] uppercase tracking-wider font-semibold block mb-1">Grid Blueprint</span>
                    <p className="text-xs text-[#f2f2f2] font-semibold">{selectedProject.details.gridSystem}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#808080] uppercase tracking-wider font-semibold block mb-1">Primary Typeface</span>
                    <p className="text-xs text-[#f2f2f2] font-semibold italic">{selectedProject.details.typography}</p>
                  </div>
                </div>

                {/* Challenge & Solution Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-[#0f16a5]">
                      <Info size={16} />
                      <span className="text-[11px] uppercase tracking-widest font-bold">The Challenge</span>
                    </div>
                    <p className="text-sm text-[#999999] leading-relaxed font-light">
                      {selectedProject.details.challenge}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2 text-emerald-500">
                      <CheckCircle size={16} />
                      <span className="text-[11px] uppercase tracking-widest font-bold">The Architectural Solution</span>
                    </div>
                    <p className="text-sm text-[#999999] leading-relaxed font-light">
                      {selectedProject.details.solution}
                    </p>
                  </div>
                </div>

                {/* Fine Swatch Custom Color Palette Box */}
                <div className="bg-[#0a0a0a] border border-[#111111] p-6 text-left">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#808080] block mb-4">
                    Obsidian Noir Palette &amp; Colors (Tap Swatch to Copy)
                  </span>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    {selectedProject.details.colorPalette.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleCopyColor(color)}
                        className="flex flex-col items-center group/swatch"
                      >
                        <div 
                          className="w-14 h-14 border border-[#1a1a1a] transition-all duration-300 group-hover/swatch:scale-105 group-hover/swatch:border-white"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] font-mono text-[#808080] mt-2 tracking-tighter uppercase font-medium">
                          {color}
                        </span>
                        {copiedColor === color ? (
                          <span className="text-[9px] text-emerald-500 font-bold block">Copied!</span>
                        ) : (
                          <span className="text-[8px] text-[#444] opacity-0 group-hover/swatch:opacity-100 transition-opacity">Copy</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scope list */}
                <div className="text-left space-y-4">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#808080] block">
                    Execution Scope &amp; Output Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.details.scope.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-[#0a0a0a] px-4 py-3 border border-[#111111]">
                        <span className="text-xs text-[#0f16a5] font-bold">0{idx + 1}.</span>
                        <span className="text-xs text-[#f2f2f2] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA in drawer */}
                <div className="pt-8 border-t border-[#111111] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-[#808080]">Like this minimal approach? Start a conversation for a similar study.</p>
                  <a
                    href="#contact"
                    onClick={() => {
                      setSelectedProject(null);
                      document.body.style.overflow = 'auto';
                      setServiceType(selectedProject.category);
                    }}
                    className="px-6 py-3 bg-[#f2f2f2] text-black text-xs uppercase tracking-widest font-bold border border-[#f2f2f2] hover:bg-transparent hover:text-white transition-all duration-300"
                  >
                    Discuss this Project
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* About Section */}
      <section id="about" className="relative py-32 bg-[#050505] overflow-hidden z-10 border-t border-b border-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Gabriela High Contrast Portrait (User Image 5) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group overflow-hidden border border-[#111111] w-full max-w-md">
              <div className="absolute inset-0 bg-[#0f16a5]/10 group-hover:bg-transparent transition-all duration-700 z-10" />
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHPIcgaOcF3hJ5k1IJZS2KIFVS26ES-UNV0SxZyLtHwYBcb153MiIm7o2VF0lbVU_DhqqL4hIyW3VRClbAf7x9_CNJ0As99FIj8zIWYZ2vNkc2zJwVYE_fZkUM-JxC64Z_-dv3wOgfoBr2J1kcNvjF4vaqqoBaXIvUns8P6Fyco1UWVXQC21YIlm2Cm_ZjsMS_9Sasq2s3o-QnRx1mutzfyW0ifhXi59F3pJJGbjriGkh9Q4EbJ9GCWfdkLJnCL8Yhs0UFacE0i6I" 
                alt="Gabriela Alcántara Profile" 
                referrerPolicy="no-referrer"
                className="w-full object-cover grayscale brightness-95 group-hover:scale-102 transition-transform duration-700 h-[500px]"
              />
              <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 border border-[#111111] z-20">
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-[#f2f2f2]">Artisanal Director</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-2">
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f16a5]">
                Aesthetic Manifesto
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#f2f2f2]">
                Designing Stories
              </h2>
            </div>

            <p className="font-sans text-lg md:text-xl text-[#999999] leading-relaxed font-light">
              I am Gabriela Alcántara, a graphic designer based in the beautiful intersection of art and marketing strategy. With over 8 years of international experience, I specialize in creating visual languages that speak louder than conventional words. My creative approach is rooted in clean editorial minimalism—discovering the ideal equilibrium between pristine function and avant-garde layout beauty.
            </p>

            <p className="font-sans text-sm text-[#808080] leading-relaxed font-light max-w-2xl">
              I collaborate with progressive luxury and digital disruptor brands who aren’t afraid to test traditional boundaries. I assist founders in crystallizing complex ideas into tangible aesthetic assets, from tactile bio-materials and zero-ink packaging to reactive digital products.
            </p>

            {/* Quick stats with beautiful metrics bars */}
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div 
                className="border-l-2 border-[#f2f2f2] pl-6 py-2 hover:border-[#0f16a5] transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="font-display text-4xl md:text-5xl font-extrabold text-[#f2f2f2]">50+</div>
                <div className="font-sans text-[10px] font-bold text-[#808080] uppercase tracking-widest mt-1">Finished Projects</div>
              </div>

              <div 
                className="border-l-2 border-[#f2f2f2] pl-6 py-2 hover:border-[#0f16a5] transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="font-display text-4xl md:text-5xl font-extrabold text-[#f2f2f2]">12</div>
                <div className="font-sans text-[10px] font-bold text-[#808080] uppercase tracking-widest mt-1">Design Awards</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Specialties Services Section */}
      <section id="services" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f16a5] block">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-[#f2f2f2]">
            SPECIALTIES
          </h2>
          <p className="font-sans text-sm text-[#808080] font-light">
            Every task is an exercise in absolute balance, engineered to give your production items room to breathe.
          </p>
        </div>

        {/* Dynamic interactive services layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {SERVICES.map((service) => {
            const isExpanded = expandedService === service.id;
            
            return (
              <div 
                key={service.id}
                className={`p-8 bg-[#0a0a0a] border transition-all duration-300 flex flex-col justify-between ${
                  isExpanded ? 'border-[#f2f2f2] ring-1 ring-[#f2f2f2]' : 'border-[#111111] hover:border-[#222222]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    {/* Simulated elegant custom bullet icon */}
                    <div className="w-[45px] h-[45px] bg-[#000000] border border-[#111111] text-[#f2f2f2] font-semibold flex items-center justify-center font-mono text-xs rounded-sm">
                      GA.{service.id.split('-')[1]}
                    </div>
                    <button 
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="text-xs uppercase tracking-widest text-[#0f16a5] hover:text-[#f2f2f2] font-bold transition-colors"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {isExpanded ? 'Collapse' : 'Process Details'}
                    </button>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#f2f2f2] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-[#999999] leading-relaxed font-light mb-6">
                    {service.description}
                  </p>

                  {/* Expansion layout of service process deliverables */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden space-y-6 pt-4 border-t border-[#111111]"
                      >
                        {/* Key deliverables benefits list */}
                        <div>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-[#808080] block mb-3">
                            Direct Client Benefits
                          </span>
                          <ul className="space-y-2">
                            {service.benefits.map((b, bIdx) => (
                              <li key={bIdx} className="flex items-start text-xs text-[#999999] font-light">
                                <span className="text-xs text-emerald-500 mr-2">✓</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Workflow process steps */}
                        <div>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-[#808080] block mb-3">
                            Gabriela’s Phase Roadmap
                          </span>
                          <div className="grid grid-cols-2 gap-2">
                            {service.process.map((step, sIdx) => (
                              <div key={sIdx} className="p-3 bg-[#030303] border border-[#111111] rounded-[2px]">
                                <p className="text-[11px] text-[#f2f2f2] font-semibold tracking-tight">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-8 pt-4 border-t border-[#111111]/30 flex justify-between items-center">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#555]">Aesthetic Strategy Unit</span>
                  <button
                    onClick={() => {
                      setServiceType(service.title);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#999999] hover:text-[#f2f2f2] group transition-colors"
                  >
                    <span>Request Service</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Project Planner Inquiry Builder & Form */}
      <section id="contact" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10">
        
        {/* Full-width aesthetic Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#050505] border border-[#111111] p-8 md:p-16">
          
          {/* Information & Intent generator block column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-[#0f16a5] mb-2 block">
                Let’s Align Goals
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-[#f2f2f2]">
                LET’S BUILD SOMETHING MEANINGFUL.
              </h2>
            </div>

            <p className="font-sans text-sm text-[#999999] leading-relaxed font-light">
              I am currently accepting select new projects and collaborations for Summer &amp; Fall 2026. 
            </p>

            <div className="border-t border-[#111111] pt-6 space-y-4">
              <a 
                href="mailto:hello@gabrielaalcantara.com" 
                className="flex items-center space-x-3 text-xs uppercase tracking-widest font-semibold hover:text-[#0f16a5] transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="w-8 h-8 rounded bg-[#111111] flex items-center justify-center text-[#f2f2f2]">
                  <Send size={14} />
                </div>
                <span>hello@gabrielaalcantara.com</span>
              </a>

              <div className="flex space-x-6 pt-4">
                {['LinkedIn', 'Behance', 'Instagram', 'Dribbble'].map((soc) => (
                  <a
                    key={soc}
                    href="#"
                    className="text-xs text-[#808080] hover:text-[#f2f2f2] uppercase tracking-wider font-semibold transition-colors"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {soc}
                  </a>
                ))}
              </div>
            </div>

            {/* Dynamic visual preview based on form values */}
            <div className="bg-[#000000]/80 p-6 border border-[#111111] hidden md:block">
              <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest block mb-3">
                Letter of Intent Preview
              </span>
              <p className="font-mono text-[11px] text-[#808080] leading-relaxed">
                Dear Gabriela, my name is <span className="text-[#f2f2f2]">{fullName || "____"}</span>. 
                I wish to invite you to collaborate with us on a <span className="text-[#f2f2f2]">{serviceType}</span> project. 
                Our target timeline is <span className="text-[#f2f2f2]">{timeline}</span> with a designated production budget around <span className="text-[#f2f2f2] font-semibold">{budget}</span>. 
                {message ? ` Here is a summary of our goals: "${message.substring(0, 90)}${message.length > 90 ? '...' : ''}"` : " Looking forward to shaping this future vision together."}
              </p>
            </div>
          </div>

          {/* Actual Inquiry Interactive Form column */}
          <div className="lg:col-span-7 text-left">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form 
                  key="form-inquiry"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmitInquiry} 
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-mono text-[#808080] uppercase tracking-wider block mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="ALEXANDER VANE"
                        className="w-full bg-[#000000] border border-[#1a1a1a] focus:border-[#f2f2f2] rounded-sm px-4 py-3 text-sm text-[#f2f2f2] placeholder:text-[#333] transition-colors outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-mono text-[#808080] uppercase tracking-wider block mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="HELLO@APERTURE.COM"
                        className="w-full bg-[#000000] border border-[#1a1a1a] focus:border-[#f2f2f2] rounded-sm px-4 py-3 text-sm text-[#f2f2f2] placeholder:text-[#333] transition-colors outline-none"
                      />
                    </div>
                  </div>

                  {/* Service Segment Selectors (Aesthetic Pills instead of inputs) */}
                  <div>
                    <label className="text-[10px] font-mono text-[#808080] uppercase tracking-wider block mb-3">
                      Specialty Ecosystem Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {['Brand Identity', 'Packaging', 'Web & Digital', 'Illustration'].map((serv) => (
                        <button
                          key={serv}
                          type="button"
                          onClick={() => setServiceType(serv)}
                          className={`px-4 py-2 border text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                            serviceType === serv
                              ? 'bg-[#0f16a5] text-white border-[#0f16a5]'
                              : 'bg-[#000000] text-[#999999] border-[#1a1a1a] hover:border-[#808080]'
                          }`}
                        >
                          {serv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-mono text-[#808080] uppercase tracking-wider block mb-2">
                        Allocated Budget Zone
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-[#000000] border border-[#1a1a1a] focus:border-[#f2f2f2] rounded-sm px-4 py-3 text-sm text-[#f2f2f2] transition-colors outline-none cursor-pointer"
                      >
                        <option value="$2,000 – $5,000">$2,000 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000 (Standard)</option>
                        <option value="$10,000 – $25,000">$10,000 – $25,000 (Premium)</option>
                        <option value="$25,000+">$25,000+ Enterprise Scale</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono text-[#808080] uppercase tracking-wider block mb-2">
                        Desired Launch Phase
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-[#000000] border border-[#1a1a1a] focus:border-[#f2f2f2] rounded-sm px-4 py-3 text-sm text-[#f2f2f2] transition-colors outline-none cursor-pointer"
                      >
                        <option value="Under 1 Month">Under 1 Month (Fast-Track)</option>
                        <option value="1 – 2 Months">1 – 2 Months</option>
                        <option value="2 – 4 Months">2 – 4 Months</option>
                        <option value="Flexible Schedule">Flexible / Retainer basis</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="text-[10px] font-mono text-[#808080] uppercase tracking-wider block mb-2">
                      Brief Challenge Summary &amp; Goals *
                    </label>
                    <textarea 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="TELL US ABOUT THE BRAND IDENTITY AND WHAT PROBLEM WE ARE TRYING TO MITIGATE."
                      rows={4}
                      className="w-full bg-[#000000] border border-[#1a1a1a] focus:border-[#f2f2f2] rounded-sm px-4 py-3 text-sm text-[#f2f2f2] placeholder:text-[#333] transition-colors outline-none resize-none"
                    />
                  </div>

                  {/* Verification Checkmark */}
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      required
                      id="terms"
                      className="mt-1 bg-black border-[#1a1a1a] text-[#0f16a5] focus:ring-0 cursor-pointer" 
                    />
                    <label htmlFor="terms" className="text-xs text-[#808080] leading-normal cursor-pointer select-none">
                      I understand that Gabriela evaluates inquiries matching high-contrast design principles. Raw files and assets are secured securely.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-[#f2f2f2] text-black font-sans text-xs uppercase tracking-[0.25em] font-extrabold border border-[#f2f2f2] hover:bg-transparent hover:text-white transition-all duration-400"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    Submit Letter of Intent
                  </button>

                </motion.form>
              ) : (
                <motion.div 
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#0a0a0a] border border-[#111111] p-8 text-center space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle size={32} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-[#f2f2f2]">
                      Intent Dispatched Successfully
                    </h3>
                    <p className="text-xs text-[#808080] max-w-md mx-auto leading-relaxed">
                      Your project inquiry has been queued into Gabriela’s Private Client desk. It has also been stored securely in your browser cache.
                    </p>
                  </div>

                  {/* Summary receipt box */}
                  <div className="bg-[#030303] border border-[#111111] p-4 text-left font-mono text-[11px] text-[#808080] space-y-1.5 max-w-sm mx-auto">
                    <p><span className="text-[#999]">CLIENT:</span> {fullName}</p>
                    <p><span className="text-[#999]">SERVICE TYPE:</span> {serviceType}</p>
                    <p><span className="text-[#999]">BUDGET TIER:</span> {budget}</p>
                    <p><span className="text-[#999]">QUEUE POSITION:</span> #0{submittedInquiries.length + 1}</p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={() => {
                        setShowInquiryTracker(true);
                        document.body.style.overflow = 'hidden';
                      }}
                      className="px-6 py-3 bg-[#0a0a0a] text-[#f2f2f2] border border-[#1a1a1a] hover:border-white text-xs uppercase tracking-widest font-bold transition-all"
                    >
                      Track Live Status
                    </button>
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 bg-transparent text-[#808080] hover:text-[#f2f2f2] text-xs uppercase tracking-widest font-bold transition-all"
                    >
                      Submit Another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Slide-over Inquiry Desk Tracker Drawer */}
      <AnimatePresence>
        {showInquiryTracker && (
          <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowInquiryTracker(false);
                document.body.style.overflow = 'auto';
              }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            {/* Sidebar Desk Tracker */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="relative w-full max-w-md bg-[#050505] border-l border-[#111111] h-full overflow-y-auto z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-[#111111] flex justify-between items-center sticky top-0 bg-[#050505] z-20">
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-[#f2f2f2] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    Gabriela's Alignment Hub
                  </h3>
                  <p className="text-[10px] text-[#808080] uppercase tracking-widest">Active Client Desks Status</p>
                </div>
                <button
                  onClick={() => {
                    setShowInquiryTracker(false);
                    document.body.style.overflow = 'auto';
                  }}
                  className="w-8 h-8 rounded-full border border-[#1a1a1a] text-[#808080] hover:text-[#f2f2f2] flex items-center justify-center transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Inquiry list container */}
              <div className="p-6 flex-1 overflow-y-auto space-y-6">
                <div>
                  <span className="text-[10px] text-[#808080] font-mono uppercase tracking-widest block mb-1">Introduction</span>
                  <p className="text-xs text-[#999999] leading-relaxed">
                    This desk simulates real-time client intake. Inquiries are stored natively in the browser's Cache Storage. Gabriela ordinarily reviews proposals within one business cycle.
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#111111]/50">
                  <span className="text-[10px] text-[#555] font-mono uppercase tracking-widest block">
                    Queued Inquiries ({submittedInquiries.length})
                  </span>

                  {submittedInquiries.length === 0 ? (
                    <div className="text-center py-12 border border-[#1a1a1a] bg-[#020202] text-[#808080]">
                      <FileText size={24} className="mx-auto mb-2 opacity-30" />
                      <p className="text-xs uppercase font-semibold">No inquiries in queue</p>
                      <p className="text-[10px] mt-1 text-[#444]">Fill out the project planner to interact.</p>
                    </div>
                  ) : (
                    submittedInquiries.map((inquiry, idx) => {
                      // Status styling mapping
                      const statusColor = 
                        inquiry.status === 'Accepted' ? 'bg-emerald-500 text-black' :
                        inquiry.status === 'In Review' ? 'bg-[#0f16a5] text-white' :
                        inquiry.status === 'Declined' ? 'bg-red-500/20 text-red-400' :
                        'bg-[#1a1a1a] text-[#999]';

                      return (
                        <div key={inquiry.id} className="bg-[#0a0a0a] border border-[#111111] p-4 text-left space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="text-xs font-bold text-[#f2f2f2] uppercase">{inquiry.fullName}</h4>
                              <p className="text-[9px] text-[#555] font-mono">{inquiry.email}</p>
                            </div>
                            <span className={`text-[8px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-sm ${statusColor}`}>
                              {inquiry.status}
                            </span>
                          </div>

                          <div className="bg-[#050505] p-2.5 rounded-sm">
                            <p className="text-[11px] text-[#808080] italic leading-snug">
                              "{inquiry.message}"
                            </p>
                          </div>

                          {/* Render meta details */}
                          <div className="flex justify-between text-[9px] text-[#666] border-t border-[#111111]/40 pt-2 font-mono">
                            <span>Service: {inquiry.serviceType}</span>
                            <span>Budget: {inquiry.budget}</span>
                          </div>

                          {/* Simulated response description if present */}
                          {inquiry.comment && (
                            <div className="bg-[#0f16a5]/10 border-l-2 border-[#021cff] p-2 text-[10px] text-[#9cafff] leading-normal">
                              <strong>Note: </strong> {inquiry.comment}
                            </div>
                          )}

                          {/* Cancel Inq Button */}
                          <div className="flex justify-end pt-1">
                            <button
                              onClick={() => handleDeleteInquiry(inquiry.id)}
                              className="text-[9px] uppercase tracking-wide text-red-400/50 hover:text-red-400 flex items-center space-x-1 transition-colors"
                            >
                              <Trash2 size={10} />
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Bottom active block */}
              <div className="p-6 border-t border-[#111111] bg-[#020202]">
                <div className="flex justify-between text-[10px] text-[#808080]">
                  <span>Office Status</span>
                  <span className="text-emerald-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Accepting Briefings
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Elegant Editorial Footer */}
      <footer className="relative bg-[#000000] border-t border-[#111111] py-16 px-6 md:px-12 z-10 overflow-hidden">
        
        {/* Decorative background logo */}
        <div className="absolute right-0 bottom-0 select-none pointer-events-none opacity-[0.02]">
          <span className="text-[250px] font-display font-extrabold uppercase leading-none tracking-tighter">GA.</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="font-display text-2xl font-black text-[#f2f2f2]">GA.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {['Instagram', 'LinkedIn', 'Behance', 'Dribbble'].map((soc) => (
              <a
                key={soc}
                href="#"
                className="font-sans text-[11px] font-semibold text-[#808080] hover:text-[#f2f2f2] uppercase tracking-[0.2em] transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {soc}
              </a>
            ))}
          </div>

          <p className="font-sans text-[11px] text-[#666] uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Gabriela Alcántara.
          </p>
        </div>
      </footer>
    </div>
  );
}
