"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";

type Project = {
  title: string;
  summary: string;
  tech: string[];
  links: { live?: string; github?: string };
  images?: string[];
};

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

function ProjectModal({
  project,
  isOpen,
  onClose,
  t,
}: {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  t: { visit: string };
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const imageCount = project.images?.length ?? 0;

  const nextImage = () => {
    setCurrentImage((prev) => (prev === imageCount - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? imageCount - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, imageCount]);

  if (!isOpen) return null;

  const hasImages = imageCount > 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-zinc-950/95 backdrop-blur-md" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
          >
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="grid max-h-[80vh] md:grid-cols-2">
            <div className="relative flex h-64 items-center bg-zinc-950 md:h-96">
              {hasImages && (
                <>
                  {imageCount > 1 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-black/70"
                    >
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                  )}
                  <img src={project.images![currentImage]} alt={project.title} className="h-full w-full object-contain" />
                  {imageCount > 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-black/70"
                    >
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  )}
                </>
              )}
              {imageCount > 1 && (
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {project.images!.map((_, i) => (
                    <button key={i} onClick={() => setCurrentImage(i)} className={`h-2 w-2 rounded-full ${i === currentImage ? "bg-teal-400" : "bg-white/30"}`} />
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col p-6 md:p-8">
              <span className="mb-2 text-xs uppercase text-teal-400">Project</span>
              <h3 className="mb-4 text-2xl font-bold text-white">{project.title}</h3>
              <p className="mb-6 text-sm text-zinc-400">{project.summary}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">{tech}</span>
                ))}
              </div>
              <div className="mt-auto">
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-500 py-3 font-semibold text-zinc-900 hover:bg-teal-400">{t.visit}</a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectSlide({
  project,
  idx,
  onOpen,
  t,
  lang,
}: {
  project: Project;
  idx: number;
  onOpen: () => void;
  t: { visit: string };
  lang: PortfolioLang;
}) {
  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="relative flex h-full w-full flex-shrink-0 items-center justify-center pt-24 md:pt-32">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className={`absolute top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-teal-500/5 blur-3xl ${idx % 2 === 0 ? "-left-32" : "-right-32"}`} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6 md:px-12">
        <div className="flex-1">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">{lang === "en" ? "Project" : "Proyecto"} {String(idx + 1).padStart(2, "0")}</span>
            <h2 className="mb-4 mt-4 text-4xl font-bold text-white md:text-6xl">{project.title}</h2>
            <p className="mb-6 max-w-md text-lg text-zinc-400">{project.summary}</p>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">{tech}</span>
              ))}
            </div>
            <button onClick={onOpen} className="flex items-center gap-2 rounded-xl bg-teal-500 px-6 py-3 font-semibold text-zinc-900 hover:bg-teal-400">{t.visit}</button>
          </motion.div>
        </div>
        <div className="hidden h-[400px] w-[500px] cursor-pointer overflow-hidden rounded-3xl lg:block" onClick={onOpen}>
          {hasImages ? <img src={project.images![0]} alt={project.title} className="h-full w-full object-cover" /> : <div className="h-full w-full bg-zinc-800" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-10 right-10 select-none text-[12vw] font-bold leading-none text-white/[0.03]">{project.title.split(" ")[0]}</div>
    </div>
  );
}

export default function Projects({ lang }: { lang: PortfolioLang }) {
  const [activeIndex, setActiveIndex] = useState(lastProjectIndex);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = projectsData[lang];
  const t = lang === "en" ? { visit: "View Project" } : { visit: "Ver Proyecto" };

  useEffect(() => {
    lastProjectIndex = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    let isScrolling = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();

      if (e.deltaY > 80 && activeIndex === projects.length - 1) {
        lastProjectIndex = activeIndex;
        window.dispatchEvent(new CustomEvent("epicNavigate", { detail: { direction: "next" } }));
        return;
      }

      if (e.deltaY < -80 && activeIndex === 0) {
        lastProjectIndex = activeIndex;
        window.dispatchEvent(new CustomEvent("epicNavigate", { detail: { direction: "prev" } }));
        return;
      }

      if (Math.abs(e.deltaY) < 40) return;

      e.preventDefault();

      if (!isScrolling) {
        isScrolling = true;
        clearTimeout(scrollTimeout);

        if (e.deltaY > 10 && activeIndex < projects.length - 1) {
          setActiveIndex((prev) => prev + 1);
        } else if (e.deltaY < -10 && activeIndex > 0) {
          setActiveIndex((prev) => prev - 1);
        }

        scrollTimeout = setTimeout(() => {
          isScrolling = false;
        }, 500);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container?.removeEventListener("wheel", handleWheel);
      clearTimeout(scrollTimeout);
    };
  }, [activeIndex, projects.length]);

  return (
    <section ref={containerRef} className="relative h-full w-full overflow-hidden">
      <div className="pointer-events-none absolute left-0 right-0 top-24 z-20 px-6 md:top-28 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-teal-400">
              {lang === "en" ? "Projects" : "Proyectos"}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            {lang === "en" ? "What we've built" : "Lo que hemos construido"}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">
            {lang === "en"
              ? "A selection of the digital products we've delivered from concept to launch."
              : "Una selección de los productos digitales que hemos entregado desde el concepto hasta el lanzamiento."}
          </p>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="h-full w-full flex-shrink-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ProjectSlide project={projects[activeIndex]} idx={activeIndex} onOpen={() => setSelectedProject(projects[activeIndex])} t={t} lang={lang} />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <motion.div className="h-full bg-teal-400" initial={{ width: 0 }} animate={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }} transition={{ duration: 0.3 }} />
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs text-zinc-500">
        {activeIndex === 0 && <span>? Services</span>}
        {activeIndex > 0 && activeIndex < projects.length - 1 && <span>? ?</span>}
        {activeIndex === projects.length - 1 && <span>? Process</span>}
      </div>

      {selectedProject && (
        <ProjectModal
          key={selectedProject.title}
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          t={t}
        />
      )}
    </section>
  );
}
