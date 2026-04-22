"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";

type Project = {
  title: string;
  summary: string;
  tech: string[];
  links: { live?: string; github?: string };
  images?: string[];
};

// Persiste el índice del proyecto entre navegación de secciones
let lastProjectIndex = 0;

const projectsData = {
  en: [
    {
      title: "Universal Skills Hub",
      summary: "Universal hub with 85,000+ AI skills for agents like OpenCode, Claude Code, Cursor, Windsurf.",
      tech: ["Next.js", "TypeScript", "Prisma"],
      links: { live: "https://universal-skills-hub.vercel.app" },
      images: ["/proyectos/universal skills.png", "/proyectos/universal skills 2.png", "/proyectos/universal skills 3.png"],
    },
    {
      title: "AMZ Express",
      summary: "Full stack platform to quote Amazon imports to Ecuador with role-based panels.",
      tech: ["Vue 3", "Spring Boot", "PostgreSQL"],
      links: { live: "https://amz-express.vercel.app" },
      images: ["/proyectos/amz express.png", "/proyectos/amz express 2.png", "/proyectos/amz express 3.png"],
    },
    {
      title: "Xpress Ecommerce",
      summary: "Online store with catalog, cart, checkout simulation and order history.",
      tech: ["Next.js", "React", "Tailwind"],
      links: { live: "https://xpress-ecommerce.vercel.app" },
      images: ["/proyectos/xpress ecommerce.png", "/proyectos/xpress ecommerce 2.png", "/proyectos/xpress ecommer 3.png"],
    },
    {
      title: "XpressConvert",
      summary: "Conversion suite for images, PDF, documents, audio and video.",
      tech: ["React", "Vite", "TypeScript"],
      links: { live: "https://xpressconvert.vercel.app" },
      images: ["/proyectos/xpress convert .png", "/proyectos/xpress convert 2.png", "/proyectos/xpressconvert 3.png"],
    },
    {
      title: "Restaurant Landing",
      summary: "High-impact landing page for restaurant with interaction animations.",
      tech: ["React", "Framer Motion"],
      links: { live: "https://project-restaurante-delta.vercel.app" },
      images: ["/proyectos/restaurant.png", "/proyectos/restaurante 2.png", "/proyectos/restaurant 3.png"],
    },
    {
      title: "Athletics System",
      summary: "Complete ecosystem: web app, backend API and Android app.",
      tech: ["Java", "Spring Boot", "Android"],
      links: { live: "https://frontend-atletismo.vercel.app" },
      images: ["/proyectos/pagina de atleta .png", "/proyectos/pagina de atleta 2.png"],
    },
  ],
  es: [
    {
      title: "Universal Skills Hub",
      summary: "Hub universal con 85,000+ skills de IA para agentes.",
      tech: ["Next.js", "TypeScript", "Prisma"],
      links: { live: "https://universal-skills-hub.vercel.app" },
      images: ["/proyectos/universal skills.png", "/proyectos/universal skills 2.png", "/proyectos/universal skills 3.png"],
    },
    {
      title: "AMZ Express",
      summary: "Plataforma full stack para cotizar importaciones desde Amazon.",
      tech: ["Vue 3", "Spring Boot", "PostgreSQL"],
      links: { live: "https://amz-express.vercel.app" },
      images: ["/proyectos/amz express.png", "/proyectos/amz express 2.png", "/proyectos/amz express 3.png"],
    },
    {
      title: "Xpress Ecommerce",
      summary: "Tienda online con catálogo, carrito y checkout.",
      tech: ["Next.js", "React", "Tailwind"],
      links: { live: "https://xpress-ecommerce.vercel.app" },
      images: ["/proyectos/xpress ecommerce.png", "/proyectos/xpress ecommerce 2.png", "/proyectos/xpress ecommer 3.png"],
    },
    {
      title: "XpressConvert",
      summary: "Suite de conversión para imágenes, PDF, audio y video.",
      tech: ["React", "Vite", "TypeScript"],
      links: { live: "https://xpressconvert.vercel.app" },
      images: ["/proyectos/xpress convert .png", "/proyectos/xpress convert 2.png", "/proyectos/xpressconvert 3.png"],
    },
    {
      title: "Restaurant Landing",
      summary: "Landing page de alto impacto para restaurante.",
      tech: ["React", "Framer Motion"],
      links: { live: "https://project-restaurante-delta.vercel.app" },
      images: ["/proyectos/restaurant.png", "/proyectos/restaurante 2.png", "/proyectos/restaurant 3.png"],
    },
    {
      title: "Athletics System",
      summary: "Ecosistema completo: app web, API y Android.",
      tech: ["Java", "Spring Boot", "Android"],
      links: { live: "https://frontend-atletismo.vercel.app" },
      images: ["/proyectos/pagina de atleta .png", "/proyectos/pagina de atleta 2.png"],
    },
  ],
};

// Modal
function ProjectModal({ project, isOpen, onClose, t }: { project: Project; isOpen: boolean; onClose: () => void; t: { visit: string } }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage(prev => prev === project.images!.length - 1 ? 0 : prev + 1);
  }, [project.images?.length]);

  const prevImage = useCallback(() => {
    setCurrentImage(prev => prev === 0 ? project.images!.length - 1 : prev - 1);
  }, [project.images?.length]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, nextImage, prevImage]);

  useEffect(() => {
    setCurrentImage(0);
  }, [project, isOpen]);

  if (!isOpen) return null;
  
  const hasImages = project.images && project.images.length > 0;
  
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md" />
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="grid md:grid-cols-2 max-h-[80vh]">
            <div className="relative h-64 md:h-96 bg-zinc-950 flex items-center">
              {hasImages && (
                <>
                  {/* Flecha izquierda */}
                  {project.images!.length > 1 && (
                    <button
                      onClick={() => setCurrentImage(prev => prev === 0 ? project.images!.length - 1 : prev - 1)}
                      className="absolute left-2 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                  )}
                  <img src={project.images![currentImage]} alt={project.title} className="w-full h-full object-contain" />
                  {/* Flecha derecha */}
                  {project.images!.length > 1 && (
                    <button
                      onClick={() => setCurrentImage(prev => prev === project.images!.length - 1 ? 0 : prev + 1)}
                      className="absolute right-2 z-10 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  )}
                </>
              )}
              {project.images!.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images!.map((_, i) => (<button key={i} onClick={() => setCurrentImage(i)} className={`w-2 h-2 rounded-full ${i === currentImage ? "bg-teal-400" : "bg-white/30"}`} />))}
                </div>
              )}
            </div>
            <div className="p-6 md:p-8 flex flex-col">
              <span className="text-xs text-teal-400 uppercase mb-2">Project</span>
              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-6">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (<span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">{tech}</span>))}
              </div>
              <div className="mt-auto">
                {project.links.live && (<a href={project.links.live} target="_blank" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-zinc-900 font-semibold">{t.visit}</a>)}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Single project display
function ProjectSlide({ project, idx, onOpen, t, lang }: { project: Project; idx: number; onOpen: () => void; t: { visit: string }; lang: PortfolioLang }) {
  const hasImages = project.images && project.images.length > 0;
  
  return (
    <div className="flex-shrink-0 w-full h-full flex items-center justify-center relative pt-24 md:pt-32">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className={`absolute ${idx % 2 === 0 ? '-left-32' : '-right-32'} top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl`} />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
        <div className="flex-1">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <span className="text-xs text-zinc-500 uppercase tracking-[0.3em]">{lang === "en" ? "Project" : "Proyecto"} {String(idx + 1).padStart(2, '0')}</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-4">{project.title}</h2>
            <p className="text-zinc-400 text-lg max-w-md mb-6">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (<span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-zinc-400 border border-white/10">{tech}</span>))}
            </div>
            <button onClick={onOpen} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-zinc-900 font-semibold">{t.visit}</button>
          </motion.div>
        </div>
        <div className="hidden lg:block w-[500px] h-[400px] rounded-3xl overflow-hidden cursor-pointer" onClick={onOpen}>
          {hasImages ? <img src={project.images![0]} alt={project.title} className="w-full h-full object-cover" /> : <div className="w-full h-full bg-zinc-800" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>
      
      <div className="absolute bottom-10 right-10 text-[12vw] font-bold text-white/[0.03] select-none pointer-events-none leading-none">{project.title.split(' ')[0]}</div>
    </div>
  );
}

export default function Projects({ lang }: { lang: PortfolioLang }) {
  const [activeIndex, setActiveIndex] = useState(lastProjectIndex);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  
  const projects = projectsData[lang];
  const t = lang === "en" ? { visit: "View Project" } : { visit: "Ver Proyecto" };

  // Sincronizar con lastProjectIndex al montar
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (lastProjectIndex > 0 && lastProjectIndex < projects.length) {
        setActiveIndex(lastProjectIndex);
      }
    }
  }, [projects.length]);

  // Guardar índice cuando cambia
  useEffect(() => {
    lastProjectIndex = activeIndex;
  }, [activeIndex]);

  // Horizontal scroll - scroll pequeño navega proyectos, scroll grande va a otra sección
  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
      
      // En último proyecto y scroll hacia abajo → ir a siguiente sección
      if (e.deltaY > 80 && activeIndex === projects.length - 1) {
        lastProjectIndex = activeIndex;
        window.dispatchEvent(new CustomEvent('epicNavigate', { detail: { direction: 'next' } }));
        return;
      }
      
      // En primer proyecto y scroll hacia arriba → ir a sección anterior
      if (e.deltaY < -80 && activeIndex === 0) {
        lastProjectIndex = activeIndex;
        window.dispatchEvent(new CustomEvent('epicNavigate', { detail: { direction: 'prev' } }));
        return;
      }
      
      // Scroll pequeño → navegar proyectos horizontal
      if (Math.abs(e.deltaY) < 40) return;
      
      e.preventDefault();
      
      if (!isScrolling) {
        isScrolling = true;
        clearTimeout(scrollTimeout);
        
        if (e.deltaY > 10 && activeIndex < projects.length - 1) {
          setActiveIndex(prev => prev + 1);
        } else if (e.deltaY < -10 && activeIndex > 0) {
          setActiveIndex(prev => prev - 1);
        }
        
        scrollTimeout = setTimeout(() => { isScrolling = false; }, 500);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => { container?.removeEventListener("wheel", handleWheel); clearTimeout(scrollTimeout); };
  }, [activeIndex, projects.length]);

  return (
    <section ref={containerRef} className="w-full h-full relative overflow-hidden">
      {/* Header - mismo estilo que Services */}
      <div className="absolute top-24 md:top-28 left-0 right-0 z-20 px-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-[2px] bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs text-teal-400 uppercase tracking-[0.3em]">
              {lang === "en" ? "Projects" : "Proyectos"}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            {lang === "en" ? "What we've built" : "Lo que hemos construido"}
          </h2>
          <p className="mt-4 text-zinc-400 text-lg max-w-xl">
            {lang === "en"
              ? "A selection of the digital products we've delivered from concept to launch."
              : "Una selección de los productos digitales que hemos entregado desde el concepto hasta el lanzamiento."}
          </p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="flex-shrink-0 w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ProjectSlide project={projects[activeIndex]} idx={activeIndex} onOpen={() => setSelectedProject(projects[activeIndex])} t={t} lang={lang} />
        </motion.div>
      </AnimatePresence>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <motion.div className="h-full bg-teal-400" initial={{ width: 0 }} animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }} transition={{ duration: 0.3 }} />
      </div>
      
      {/* Hint de navegación */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 text-xs flex items-center gap-2">
        {activeIndex === 0 && <span>↑ Services</span>}
        {activeIndex > 0 && activeIndex < projects.length - 1 && <span>← →</span>}
        {activeIndex === projects.length - 1 && <span>↓ Process</span>}
      </div>
      
      {/* Modal */}
      {selectedProject && <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} t={t} />}
    </section>
  );
}