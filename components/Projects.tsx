"use client";

import { motion } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type ProjectsProps = {
  lang: PortfolioLang;
};

const projectsList = {
  en: [
    {
      title: "Universal Skills Hub",
      summary: "Universal hub with 85,000+ AI skills for agents like OpenCode, Claude Code, Cursor, Windsurf, Codex, Gemini CLI, Cline, Continue and GitHub Copilot.",
      tech: ["Next.js", "TypeScript", "Prisma"],
      links: { live: "https://universal-skills-hub.vercel.app" },
    },
    {
      title: "AMZ Express",
      summary: "Full stack platform to quote Amazon imports to Ecuador with role-based panels and secure checkout.",
      tech: ["Vue 3", "Spring Boot", "PostgreSQL"],
      links: { live: "https://amz-express.vercel.app", github: "https://github.com/XaviX598/amz_express" },
    },
    {
      title: "Xpress Ecommerce",
      summary: "Online store with catalog, cart, checkout simulation and order history.",
      tech: ["Next.js", "React", "Tailwind"],
      links: { live: "https://xpress-ecommerce.vercel.app", github: "https://github.com/XaviX598/xpress-ecommerce" },
    },
    {
      title: "XpressConvert",
      summary: "Conversion suite for images, PDF, documents, audio and video.",
      tech: ["React", "Vite", "TypeScript"],
      links: { live: "https://xpressconvert.vercel.app", github: "https://github.com/XaviX598/Xpressconvert" },
    },
    {
      title: "Restaurant Landing",
      summary: "High-impact landing page for restaurant with interaction animations.",
      tech: ["React", "Framer Motion"],
      links: { live: "https://project-restaurante-delta.vercel.app", github: "https://github.com/XaviX598/project-restaurant" },
    },
    {
      title: "Athletics System",
      summary: "Complete ecosystem: web app, backend API and Android app for sports management.",
      tech: ["Java", "Spring Boot", "Android"],
      links: { live: "https://frontend-atletismo.vercel.app" },
    },
  ],
  es: [
    {
      title: "Universal Skills Hub",
      summary: "Hub universal con 85,000+ skills de IA para agentes como OpenCode, Claude Code, Cursor, Windsurf, Codex, Gemini CLI, Cline, Continue y GitHub Copilot.",
      tech: ["Next.js", "TypeScript", "Prisma"],
      links: { live: "https://universal-skills-hub.vercel.app" },
    },
    {
      title: "AMZ Express",
      summary: "Plataforma full stack para cotizar importaciones desde Amazon a Ecuador con paneles por rol y checkout seguro.",
      tech: ["Vue 3", "Spring Boot", "PostgreSQL"],
      links: { live: "https://amz-express.vercel.app", github: "https://github.com/XaviX598/amz_express" },
    },
    {
      title: "Xpress Ecommerce",
      summary: "Tienda online con catálogo, carrito, simulación de checkout e historial de pedidos.",
      tech: ["Next.js", "React", "Tailwind"],
      links: { live: "https://xpress-ecommerce.vercel.app", github: "https://github.com/XaviX598/xpress-ecommerce" },
    },
    {
      title: "XpressConvert",
      summary: "Suite de conversión para imágenes, PDF, documentos, audio y video.",
      tech: ["React", "Vite", "TypeScript"],
      links: { live: "https://xpressconvert.vercel.app", github: "https://github.com/XaviX598/Xpressconvert" },
    },
    {
      title: "Restaurant Landing",
      summary: "Landing page de alto impacto para restaurante con animaciones interacción.",
      tech: ["React", "Framer Motion"],
      links: { live: "https://project-restaurante-delta.vercel.app", github: "https://github.com/XaviX598/project-restaurant" },
    },
    {
      title: "Athletics System",
      summary: "Ecosistema completo: app web, API backend y app Android para gestión deportiva.",
      tech: ["Java", "Spring Boot", "Android"],
      links: { live: "https://frontend-atletismo.vercel.app" },
    },
  ],
};

export default function Projects({ lang }: ProjectsProps) {
  const projects = projectsList[lang];
  const t = {
    en: { title: "Projects", visit: "Visit", code: "Code", hoverTip: "Hover over each project for details" },
    es: { title: "Proyectos", visit: "Visitar", code: "Código", hoverTip: "Pasa el mouse sobre cada proyecto para ver detalles" },
  }[lang];

  return (
    <section id="projects" className="w-full py-12 px-4 md:px-6 relative overflow-hidden">
      {/* Fondo minimalista */}
      <div className="absolute inset-0 bg-zinc-950" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t.title}
          </h2>
          <p className="mt-1 text-zinc-500 text-sm">
            {t.hoverTip}
          </p>
        </div>

        {/* Grid de proyectos - más compactos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="group relative h-56 rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder de imagen */}
              <div className="absolute inset-0 bg-zinc-900 border border-white/10 group-hover:border-teal-400/30 transition-colors duration-300">
                {/* Grid decorativo interno */}
                <div className="w-full h-full grid grid-cols-2 grid-rows-2 opacity-20">
                  <div className="border border-white/5" />
                  <div className="border border-white/5" />
                  <div className="border border-white/5" />
                  <div className="border border-white/5" />
                </div>
                
                {/* Icono placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center">
                    <svg className="w-7 h-7 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Texto siempre visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overlay con descripción - aparece en hover */}
                <div className="absolute inset-0 bg-zinc-950/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4">
                  <p className="text-zinc-300 text-xs leading-relaxed">
                    {project.summary}
                  </p>
                  
                  <div className="mt-4 flex gap-2">
                    {project.links.live && (
                      <MotionButton 
                        href={project.links.live} 
                        target="_blank" 
                        label={t.visit} 
                        variant="primary" 
                      />
                    )}
                    {project.links.github && (
                      <MotionButton 
                        href={project.links.github} 
                        target="_blank" 
                        label={t.code} 
                        variant="secondary" 
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}