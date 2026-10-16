"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";

type Project = {
  title: string;
  summary: string;
  tech: string[];
  links: { live?: string; github?: string };
  images?: string[];
};

const projectsData = {
  en: [
    {
      title: "Universal Skills Hub",
      summary: "A hub with 85,000+ AI skills organized in a fast catalog that's easy to explore.",
      tech: ["Next.js", "TypeScript", "Prisma"],
      links: { live: "https://universal-skills-hub.vercel.app" },
      images: ["/proyectos/universal skills.png", "/proyectos/universal skills 2.png", "/proyectos/universal skills 3.png"],
    },
    {
      title: "AMZ Express",
      summary: "Lets importers quote Amazon purchases to Ecuador in seconds, with separate panels for clients and admins.",
      tech: ["Vue 3", "Spring Boot", "PostgreSQL"],
      links: { live: "https://amz-express.vercel.app" },
      images: ["/proyectos/amz express.png", "/proyectos/amz express 2.png", "/proyectos/amz express 3.png"],
    },
    {
      title: "Xpress Ecommerce",
      summary: "A complete online store: catalog, cart, checkout and order history, ready to sell.",
      tech: ["Next.js", "React", "Tailwind"],
      links: { live: "https://xpress-ecommerce.vercel.app" },
      images: ["/proyectos/xpress ecommerce.png", "/proyectos/xpress ecommerce 2.png", "/proyectos/xpress ecommer 3.png"],
    },
    {
      title: "XpressConvert",
      summary: "Web tool to convert images, PDFs, documents, audio and video without installing anything.",
      tech: ["React", "Vite", "TypeScript"],
      links: { live: "https://xpressconvert.vercel.app" },
      images: ["/proyectos/xpress convert .png", "/proyectos/xpress convert 2.png", "/proyectos/xpressconvert 3.png"],
    },
    {
      title: "Restaurant Landing",
      summary: "Restaurant landing page with a visual menu and animations designed to attract diners.",
      tech: ["React", "Framer Motion"],
      links: { live: "https://project-restaurante-delta.vercel.app" },
      images: ["/proyectos/restaurant.png", "/proyectos/restaurante 2.png", "/proyectos/restaurant 3.png"],
    },
    {
      title: "Athletics System",
      summary: "A complete system to manage athletes: web app, API and Android app working together.",
      tech: ["Java", "Spring Boot", "Android"],
      links: { live: "https://frontend-atletismo.vercel.app" },
      images: ["/proyectos/pagina de atleta .png", "/proyectos/pagina de atleta 2.png"],
    },
  ],
  es: [
    {
      title: "Universal Skills Hub",
      summary: "Hub con más de 85.000 skills de IA organizadas en un catálogo rápido y fácil de explorar.",
      tech: ["Next.js", "TypeScript", "Prisma"],
      links: { live: "https://universal-skills-hub.vercel.app" },
      images: ["/proyectos/universal skills.png", "/proyectos/universal skills 2.png", "/proyectos/universal skills 3.png"],
    },
    {
      title: "AMZ Express",
      summary: "Permite cotizar compras de Amazon hacia Ecuador en segundos, con paneles para clientes y administradores.",
      tech: ["Vue 3", "Spring Boot", "PostgreSQL"],
      links: { live: "https://amz-express.vercel.app" },
      images: ["/proyectos/amz express.png", "/proyectos/amz express 2.png", "/proyectos/amz express 3.png"],
    },
    {
      title: "Xpress Ecommerce",
      summary: "Tienda online completa: catálogo, carrito, checkout e historial de pedidos, lista para vender.",
      tech: ["Next.js", "React", "Tailwind"],
      links: { live: "https://xpress-ecommerce.vercel.app" },
      images: ["/proyectos/xpress ecommerce.png", "/proyectos/xpress ecommerce 2.png", "/proyectos/xpress ecommer 3.png"],
    },
    {
      title: "XpressConvert",
      summary: "Herramienta web para convertir imágenes, PDF, documentos, audio y video sin instalar nada.",
      tech: ["React", "Vite", "TypeScript"],
      links: { live: "https://xpressconvert.vercel.app" },
      images: ["/proyectos/xpress convert .png", "/proyectos/xpress convert 2.png", "/proyectos/xpressconvert 3.png"],
    },
    {
      title: "Restaurant Landing",
      summary: "Landing page para restaurante con menú visual y animaciones pensadas para atraer comensales.",
      tech: ["React", "Framer Motion"],
      links: { live: "https://project-restaurante-delta.vercel.app" },
      images: ["/proyectos/restaurant.png", "/proyectos/restaurante 2.png", "/proyectos/restaurant 3.png"],
    },
    {
      title: "Athletics System",
      summary: "Sistema completo para gestionar atletas: aplicación web, API y app Android conectadas.",
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

function ProjectCard({
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
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: (idx % 3) * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60"
    >
      <button type="button" onClick={onOpen} className="relative aspect-video w-full overflow-hidden bg-zinc-800" aria-label={`${t.visit}: ${project.title}`}>
        {hasImages && (
          <img
            src={project.images![0]}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </button>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          {lang === "en" ? "Project" : "Proyecto"} {String(idx + 1).padStart(2, "0")}
        </span>
        <h3 className="mb-2 mt-2 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mb-5 text-sm text-zinc-400">{project.summary}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-400">{tech}</span>
          ))}
        </div>
        <button type="button" onClick={onOpen} className="mt-auto rounded-xl bg-teal-500 px-6 py-3 font-semibold text-zinc-900 hover:bg-teal-400">
          {t.visit}
        </button>
      </div>
    </motion.article>
  );
}

export default function Projects({ lang }: { lang: PortfolioLang }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = projectsData[lang];
  const t = lang === "en" ? { visit: "View Project" } : { visit: "Ver Proyecto" };

  return (
    <section className="relative w-full bg-zinc-950 px-6 py-24 md:px-12 md:py-32">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12">
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
              ? "Real projects in production that you can visit and try right now."
              : "Proyectos reales en producción que puedes visitar y probar ahora mismo."}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} onOpen={() => setSelectedProject(project)} t={t} lang={lang} />
          ))}
        </div>
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
