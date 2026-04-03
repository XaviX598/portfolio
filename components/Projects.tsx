"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

type Language = "en" | "es";

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

const projects: Record<Language, Project[]> = {
  en: [
    {
      title: "AMZ Express - Guided Imports Platform",
      summary:
        "Full stack platform to quote and manage imports from Amazon to Ecuador with role-based dashboards and secure checkout.",
      impact:
        "Implemented business-critical flows: calculator + checkout + order tracking + admin/superadmin controls.",
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
        "Modern store prototype with product catalog, cart, checkout simulation and order history persistence.",
      impact:
        "Delivered a complete commerce flow with reusable UI patterns and local persistence strategy.",
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
        "Web application with multiple conversion tools across images, PDF, docs, audio and video.",
      impact:
        "Built an all-in-one productivity utility with a modular front-end architecture and client-side processing.",
      tech: ["React", "Vite", "TypeScript", "pdf-lib", "docx"],
      links: {
        live: "https://xpressconvert.vercel.app",
        github: "https://github.com/XaviX598/Xpressconvert",
      },
    },
    {
      title: "Athletics Management System (Degree Project)",
      summary:
        "End-to-end ecosystem composed of web app, backend API and Android app for athletics operations.",
      impact:
        "Coordinated multi-platform delivery with cloud deployment and consistent domain model across clients.",
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
      title: "AMZ Express - Plataforma de Importacion Guiada",
      summary:
        "Plataforma full stack para cotizar y gestionar importaciones desde Amazon a Ecuador con paneles por rol y checkout seguro.",
      impact:
        "Implemente flujos criticos de negocio: calculadora + checkout + tracking + controles admin/superadmin.",
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
        "Prototipo moderno con catalogo de productos, carrito, simulacion de checkout e historial de pedidos.",
      impact:
        "Entregue un flujo completo de comercio con patrones de UI reutilizables y persistencia local.",
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
        "Aplicacion web con multiples herramientas de conversion para imagenes, PDF, documentos, audio y video.",
      impact:
        "Construccion de utilitario integral con arquitectura modular de frontend y procesamiento en cliente.",
      tech: ["React", "Vite", "TypeScript", "pdf-lib", "docx"],
      links: {
        live: "https://xpressconvert.vercel.app",
        github: "https://github.com/XaviX598/Xpressconvert",
      },
    },
    {
      title: "Sistema de Gestion de Atletismo (Titulacion)",
      summary:
        "Ecosistema completo con app web, API backend y app Android para gestion operativa deportiva.",
      impact:
        "Coordine entrega multi-plataforma con despliegue cloud y modelo de dominio consistente entre clientes.",
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

export default function Projects() {
  const [lang, setLang] = useState<Language>("en");
  const selected = projects[lang];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-zinc-900/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <FadeIn>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
                {lang === "en" ? "Selected Projects" : "Proyectos Seleccionados"}
              </h2>
              <p className="mt-3 text-zinc-400 max-w-3xl">
                {lang === "en"
                  ? "A curated set of projects focused on real-world delivery, architecture and product impact."
                  : "Una seleccion de proyectos enfocados en entrega real, arquitectura e impacto de producto."}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="flex border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setLang("es")}
                className={`px-4 py-2 text-sm transition-colors ${
                  lang === "es"
                    ? "bg-teal-500 text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-teal-300 hover:bg-teal-500/10"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-2 text-sm transition-colors ${
                  lang === "en"
                    ? "bg-teal-500 text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-teal-300 hover:bg-teal-500/10"
                }`}
              >
                EN
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {selected.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.08} direction="up">
              <article
                className={`group h-full rounded-2xl border p-6 transition-all duration-300 ${
                  project.featured
                    ? "border-teal-400/45 bg-gradient-to-br from-teal-500/10 via-zinc-900/85 to-zinc-900/70 hover:border-teal-300/70"
                    : "border-white/10 bg-zinc-900/65 hover:border-teal-400/40"
                }`}
              >
                {project.featured && (
                  <span className="inline-flex px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.14em] border border-teal-300/40 bg-teal-500/15 text-teal-200 mb-4">
                    {lang === "en" ? "Featured" : "Destacado"}
                  </span>
                )}

                <h3 className="text-xl font-semibold text-zinc-100">
                  {project.title}
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">{project.summary}</p>

                <div className="mt-5 p-4 rounded-xl border border-white/10 bg-zinc-950/60">
                  <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">
                    {lang === "en" ? "Impact" : "Impacto"}
                  </p>
                  <p className="mt-2 text-zinc-300 text-sm leading-relaxed">
                    {project.impact}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((stack) => (
                    <span
                      key={stack}
                      className="text-xs px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-900 text-zinc-300"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 text-sm">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary-outline"
                    >
                      {lang === "en" ? "Live Demo" : "Demo"}
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary-outline"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary-outline"
                    >
                      Backend
                    </a>
                  )}
                  {project.links.android && (
                    <a
                      href={project.links.android}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-secondary-outline"
                    >
                      Android
                    </a>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
