"use client";

import React, { useState } from "react";
import FadeIn from "./FadeIn";

const projects = {
  en: [
    {
      title: "Xpress Ecommerce - E-commerce Store Prototype",
      description:
        "Modern e-commerce prototype with shopping cart, checkout with payment simulation, and purchase history. Features product catalog, cart management, credit card payment form, and order history with localStorage persistence.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "localStorage",
      ],
      links: {
        web: "https://xpress-ecommerce.vercel.app",
        github: "https://github.com/XaviX598/xpress-ecommerce",
      },
    },
    {
      title: "XpressConvert - File Conversion Tools",
      description:
        "A comprehensive file conversion web application with 10 tools: image conversion, compression, resizing, editing, image to PDF, PDF merging, document conversion, audio conversion, video conversion, and audio extraction. Built with React and Vite.",
      tech: [
        "React",
        "Vite",
        "TypeScript",
        "pdf-lib",
        "docx",
        "Web Audio API",
      ],
      links: {
        web: "https://xpressconvert.vercel.app",
        github: "https://github.com/XaviX598/Xpressconvert",
      },
    },
    {
      title: "Full Stack Degree Project – Athletics Management System",
      description:
        "End-to-end full stack system developed as a degree project, consisting of a web application, backend REST API and Android mobile app for athletics information management. The system was deployed using Docker containers; during the academic phase, Microsoft Azure was used to deploy both the frontend and backend. The current production deployment runs with the frontend on Vercel, the backend on Render, and the database hosted in the cloud.",

      tech: [
        "Full Stack",
        "Java",
        "Spring Boot",
        "REST API",
        "PostgreSQL",
        "Vue",
        "Android",
        "Azure",
        "Firebase",
      ],
      links: {
        web: "https://github.com/itsmikenakanodev/frontend_atletismo",
        backend: "https://github.com/itsmikenakanodev/backend_atletismo",
        android: "https://github.com/itsmikenakanodev/android_atletismo",
        thesis: "/docs/thesis.pdf",
        projectPage: "https://frontend-atletismo.vercel.app",
      },
    },
    {
      title: "Personal Portfolio Website",
      description:
        "Modern and responsive personal portfolio built with React and Next.js to showcase projects, repositories and professional profile.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        github: "https://github.com/XaviX598",
      },
    },
    {
      title: "Restaurant Landing Page",
      description:
        "Elaborate landing page for a restaurant showcasing various component and scroll animations. Built with React.",
      tech: ["React", "Framer Motion", "Animations", "CSS"],
      links: {
        web: "https://project-restaurante-delta.vercel.app",
        github: "https://github.com/XaviX598/project-restaurant",
      },
    },
  ],
  es: [
    {
      title: "Xpress Ecommerce - Prototipo de Tienda Online",
      description:
        "Prototipo moderno de comercio electrónico con carrito de compras, checkout con simulación de pago e historial de compras. Incluye catálogo de productos, gestión del carrito, formulario de pago con tarjeta de crédito y historial de pedidos con persistencia en localStorage.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "localStorage",
      ],
      links: {
        web: "https://xpress-ecommerce.vercel.app",
        github: "https://github.com/XaviX598/xpress-ecommerce",
      },
    },
    {
      title: "XpressConvert - Herramientas de Conversión de Archivos",
      description:
        "Aplicación web completa de conversión de archivos con 10 herramientas: conversión de imágenes, compresión, redimensionamiento, edición, imagen a PDF, fusión de PDFs, conversión de documentos, conversión de audio, conversión de video y extracción de audio. Desarrollado con React y Vite.",
      tech: [
        "React",
        "Vite",
        "TypeScript",
        "pdf-lib",
        "docx",
        "Web Audio API",
      ],
      links: {
        web: "https://xpressconvert.vercel.app",
        github: "https://github.com/XaviX598/Xpressconvert",
      },
    },
    {
      title: "Sistema de Gestión de Atletismo",
      description:
        "Sistema full stack, compuesto por una aplicación web, una API backend y una aplicación móvil Android para la gestión de información deportiva. El sistema fue desplegado mediante contenedores Docker; durante el desarrollo se utilizó Microsoft Azure para el despliegue del frontend y backend. Actualmente, el despliegue en producción se realiza con el frontend en Vercel, el backend en Render y la base de datos en la nube.",

      tech: [
        "Full Stack",
        "Java",
        "Spring Boot",
        "API REST",
        "PostgreSQL",
        "Vue",
        "Android",
        "Azure",
        "Firebase",
      ],
      links: {
        web: "https://github.com/itsmikenakanodev/frontend_atletismo",
        backend: "https://github.com/itsmikenakanodev/backend_atletismo",
        android: "https://github.com/itsmikenakanodev/android_atletismo",
        thesis: "/docs/thesis.pdf",
        projectPage: "https://frontend-atletismo.vercel.app",
      },
    },
    {
      title: "Sitio Web de Portafolio Personal",
      description:
        "Portafolio personal moderno y responsivo desarrollado con React y Next.js para mostrar proyectos, repositorios y perfil profesional.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        github: "https://github.com/XaviX598",
      },
    },
    {
      title: "Landing Page de Restaurante",
      description:
        "Landing page elaborada para un restaurante donde se pueden ver distintos estilos de animaciones tanto de componentes como de scroll. Desarrollado con React.",
      tech: ["React", "Framer Motion", "Animaciones", "CSS"],
      links: {
        web: "https://project-restaurante-delta.vercel.app",
        github: "https://github.com/XaviX598/project-restaurant",
      },
    },
  ],
};

export default function Projects() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <section id="projects" className="py-24 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold">
              {lang === "en" ? "Projects" : "Proyectos"}
            </h2>
          </FadeIn>

          <div className="flex border border-zinc-700 rounded-xl overflow-hidden">
            <button
              onClick={() => setLang("es")}
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                lang === "es"
                  ? "bg-teal-500 text-black"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                lang === "en"
                  ? "bg-teal-500 text-black"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects[lang].map((project, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group relative bg-zinc-900/60 border border-zinc-800/60 rounded-2xl p-6 hover:border-teal-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
                {/* Hover gradient effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-teal-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* TECH TAGS */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LINKS */}
                  <div className="mt-6 flex flex-wrap gap-4 text-sm">
                    {project.links.web && (
                      <a
                        href={project.links.web}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group/link"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Web
                        <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group/link"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                        <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.links.backend && (
                      <a
                        href={project.links.backend}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group/link"
                      >
                        Backend
                        <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.links.android && (
                      <a
                        href={project.links.android}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group/link"
                      >
                        Android
                        <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                    {project.links.projectPage && (
                      <a
                        href={project.links.projectPage}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group/link"
                      >
                        {lang === "en" ? "Go to Project" : "Ver Proyecto"}
                        <span className="transform translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
