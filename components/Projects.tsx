"use client";

import { useMemo, useState } from "react";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type Project = {
  title: string;
  summary: string;
  impact: string;
  tech: string[];
  featured?: boolean;
  links: {
    live?: string;
    github?: string;
    backend?: string;
    android?: string;
  };
};

type ProjectsProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Selected Projects",
    subtitle:
      "High-value projects focused on business outcomes, technical quality and production delivery.",
    featured: "Featured",
    impact: "Impact",
    live: "Live Demo",
    previous: "Previous",
    next: "Next",
    showing: "Showing",
  },
  es: {
    title: "Proyectos Seleccionados",
    subtitle:
      "Proyectos de alto valor enfocados en resultados de negocio, calidad tecnica y entrega en produccion.",
    featured: "Destacado",
    impact: "Impacto",
    live: "Demo",
    previous: "Anterior",
    next: "Siguiente",
    showing: "Mostrando",
  },
};

const projects: Record<PortfolioLang, Project[]> = {
  en: [
    {
      title: "OpenCode AI Skills Library",
      summary:
        "Production-grade library of 100+ specialized AI agent skills for marketing, development, and design automation.",
      impact:
        "Built scalable skill architecture with SDD workflow, skill registry, and autonomous agent orchestration.",
      featured: true,
      tech: [
        "AI Agents",
        "TypeScript",
        "OpenCode",
        "Task Orchestration",
        "Engram Memory",
        "Persistent Context",
      ],
      links: {
        github: "https://github.com/XaviX598/opencode-skills",
      },
    },
    {
      title: "AMZ Express - Guided Imports Platform",
      summary:
        "Full stack platform to quote and manage imports from Amazon to Ecuador with role-based dashboards and secure checkout.",
      impact:
        "Implemented core business flows: calculator, checkout, order tracking and admin/superadmin controls.",
      featured: true,
      tech: [
        "Vue 3",
        "TypeScript",
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "JWT",
        "Vercel",
        "Oracle Cloud",
      ],
      links: {
        live: "https://amz-express.vercel.app",
        github: "https://github.com/XaviX598/amz_express",
      },
    },
    {
      title: "Xpress Ecommerce - E-commerce Prototype",
      summary:
        "Store prototype with product catalog, cart, checkout simulation and order history persistence.",
      impact:
        "Delivered a complete commerce flow with reusable front-end patterns and maintainable structure.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: {
        live: "https://xpress-ecommerce.vercel.app",
        github: "https://github.com/XaviX598/xpress-ecommerce",
      },
    },
    {
      title: "XpressConvert - File Conversion Suite",
      summary:
        "Web application with multiple conversion tools for images, PDF, docs, audio and video.",
      impact:
        "Built an all-in-one utility with modular UI and efficient client-side processing flows.",
      tech: ["React", "Vite", "TypeScript", "pdf-lib", "docx"],
      links: {
        live: "https://xpressconvert.vercel.app",
        github: "https://github.com/XaviX598/Xpressconvert",
      },
    },
    {
      title: "Restaurant Landing Page",
      summary:
        "High-impact restaurant landing page with section-based storytelling and interaction-focused motion design.",
      impact:
        "Built a conversion-oriented single-page experience using structured sections, animation timing and clear CTA hierarchy.",
      tech: ["React", "Framer Motion", "CSS", "UI Animation"],
      links: {
        live: "https://project-restaurante-delta.vercel.app",
        github: "https://github.com/XaviX598/project-restaurant",
      },
    },
    {
      title: "Athletics Management System (Degree Project)",
      summary:
        "End-to-end ecosystem composed of web app, backend API and Android app for athletics operations.",
      impact:
        "Coordinated multi-platform delivery with cloud deployment and consistent domain model.",
      tech: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Vue",
        "Android",
        "Azure",
      ],
      links: {
        live: "https://frontend-atletismo.vercel.app",
        backend: "https://github.com/itsmikenakanodev/backend_atletismo",
        android: "https://github.com/itsmikenakanodev/android_atletismo",
        github: "https://github.com/itsmikenakanodev/frontend_atletismo",
      },
    },
  ],
  es: [
    {
      title: "OpenCode AI Skills Library",
      summary:
        "Biblioteca de produccion con mas de 100 skills especializados para automatizacion de marketing, desarrollo y diseño.",
      impact:
        "Arquitectura escalable con workflow SDD, registry de skills y orquestacion autonoma de agentes.",
      featured: true,
      tech: [
        "AI Agents",
        "TypeScript",
        "OpenCode",
        "Orquestacion de Tareas",
        "Engram Memory",
        "Contexto Persistente",
      ],
      links: {
        github: "https://github.com/XaviX598/opencode-skills",
      },
    },
    {
      title: "AMZ Express - Plataforma de Importacion Guiada",
      summary:
        "Plataforma full stack para cotizar y gestionar importaciones desde Amazon a Ecuador con paneles por rol y checkout seguro.",
      impact:
        "Implemente flujos de negocio clave: calculadora, checkout, tracking y controles admin/superadmin.",
      featured: true,
      tech: [
        "Vue 3",
        "TypeScript",
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "JWT",
        "Vercel",
        "Oracle Cloud",
      ],
      links: {
        live: "https://amz-express.vercel.app",
        github: "https://github.com/XaviX598/amz_express",
      },
    },
    {
      title: "Xpress Ecommerce - Prototipo de Tienda Online",
      summary:
        "Prototipo de tienda con catalogo, carrito, simulacion de checkout e historial de pedidos.",
      impact:
        "Entregue un flujo de comercio completo con patrones reutilizables y estructura mantenible.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      links: {
        live: "https://xpress-ecommerce.vercel.app",
        github: "https://github.com/XaviX598/xpress-ecommerce",
      },
    },
    {
      title: "XpressConvert - Suite de Conversion de Archivos",
      summary:
        "Aplicacion web con multiples herramientas para conversion de imagenes, PDF, documentos, audio y video.",
      impact:
        "Construccion de utilitario integral con UI modular y procesamiento eficiente en cliente.",
      tech: ["React", "Vite", "TypeScript", "pdf-lib", "docx"],
      links: {
        live: "https://xpressconvert.vercel.app",
        github: "https://github.com/XaviX598/Xpressconvert",
      },
    },
    {
      title: "Landing Page de Restaurante",
      summary:
        "Landing page de alto impacto para restaurante, con narrativa por secciones y animaciones orientadas a interaccion.",
      impact:
        "Construi una experiencia single-page enfocada en conversion con jerarquia visual clara, timing de animaciones y CTAs bien definidos.",
      tech: ["React", "Framer Motion", "CSS", "Animaciones UI"],
      links: {
        live: "https://project-restaurante-delta.vercel.app",
        github: "https://github.com/XaviX598/project-restaurant",
      },
    },
    {
      title: "Sistema de Gestion de Atletismo (Titulacion)",
      summary:
        "Ecosistema completo con app web, API backend y app Android para gestion deportiva.",
      impact:
        "Coordine entrega multi-plataforma con despliegue cloud y modelo de dominio consistente.",
      tech: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Vue",
        "Android",
        "Azure",
      ],
      links: {
        live: "https://frontend-atletismo.vercel.app",
        backend: "https://github.com/itsmikenakanodev/backend_atletismo",
        android: "https://github.com/itsmikenakanodev/android_atletismo",
        github: "https://github.com/itsmikenakanodev/frontend_atletismo",
      },
    },
  ],
};

export default function Projects({ lang }: ProjectsProps) {
  const t = copy[lang];
  const selected = projects[lang];
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalProjects = selected.length;
  const safeCurrentIndex =
    totalProjects === 0 ? 0 : ((currentIndex % totalProjects) + totalProjects) % totalProjects;

  const activeProject = useMemo(
    () => selected[safeCurrentIndex] ?? selected[0],
    [selected, safeCurrentIndex]
  );

  const goPrev = () => {
    if (totalProjects === 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goNext = () => {
    if (totalProjects === 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
            {t.title}
          </h2>
          <p className="mt-3 text-zinc-400 max-w-3xl">{t.subtitle}</p>
        </FadeIn>

        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <p className="text-sm text-zinc-400">
              {t.showing}{" "}
              <span className="text-zinc-200 font-semibold">{safeCurrentIndex + 1}</span>
              {" / "}
              <span className="text-zinc-200 font-semibold">{totalProjects}</span>
            </p>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                className="rounded-lg border border-white/15 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-200 hover:border-teal-300/50 hover:text-teal-200 transition-colors"
              >
                ← {t.previous}
              </button>
              <button
                type="button"
                onClick={goNext}
                className="rounded-lg border border-white/15 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-200 hover:border-teal-300/50 hover:text-teal-200 transition-colors"
              >
                {t.next} →
              </button>
            </div>
          </div>

          <FadeIn key={activeProject.title} delay={0.06} direction="up">
            <article
              data-inview
              className={`group h-full rounded-2xl border p-6 transition-all duration-300 ${
                activeProject.featured
                  ? "border-teal-400/45 bg-gradient-to-br from-teal-500/10 via-zinc-900/85 to-zinc-900/70 hover:border-teal-300/70"
                  : "border-white/10 bg-zinc-900/65 hover:border-teal-400/40"
              }`}
            >
              {activeProject.featured && (
                <span className="inline-flex px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.14em] border border-teal-300/40 bg-teal-500/15 text-teal-200 mb-4">
                  {t.featured}
                </span>
              )}

              <h3 className="text-xl font-semibold text-zinc-100">
                {activeProject.title}
              </h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">{activeProject.summary}</p>

              <div className="mt-5 p-4 rounded-xl border border-white/10 bg-zinc-950/60">
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
                  {t.impact}
                </p>
                <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                  {activeProject.impact}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {activeProject.tech.map((stack) => (
                  <span
                    key={stack}
                    className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-900 text-zinc-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {activeProject.links.live && (
                  <MotionButton
                    href={activeProject.links.live}
                    target="_blank"
                    rel="noreferrer"
                    label={t.live}
                    variant="secondary"
                  />
                )}
                {activeProject.links.github && (
                  <MotionButton
                    href={activeProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    label="GitHub"
                    variant="secondary"
                  />
                )}
                {activeProject.links.backend && (
                  <MotionButton
                    href={activeProject.links.backend}
                    target="_blank"
                    rel="noreferrer"
                    label="Backend"
                    variant="secondary"
                  />
                )}
                {activeProject.links.android && (
                  <MotionButton
                    href={activeProject.links.android}
                    target="_blank"
                    rel="noreferrer"
                    label="Android"
                    variant="secondary"
                  />
                )}
              </div>
            </article>
          </FadeIn>

          <div className="mt-5 flex items-center justify-center gap-2">
            {selected.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-250 ${
                  index === safeCurrentIndex
                    ? "w-8 bg-teal-300"
                    : "w-2.5 bg-zinc-600 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
