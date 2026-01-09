"use client";

import React, { useState } from "react";

const projects = {
  en: [
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
  ],
  es: [
    {
      title: "Proyecto de Titulación – Sistema de Gestión de Atletismo",
      description:
  "Sistema full stack desarrollado como proyecto de titulación, compuesto por una aplicación web, una API backend y una aplicación móvil Android para la gestión de información deportiva. El sistema fue desplegado mediante contenedores Docker; durante el desarrollo académico se utilizó Microsoft Azure para el despliegue del frontend y backend. Actualmente, el despliegue en producción se realiza con el frontend en Vercel, el backend en Render y la base de datos en la nube.",

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
  ],
};


export default function Projects() {
  const [lang, setLang] = useState<"en" | "es">("en");

  return (
    <section id="projects" className="py-24 border-t border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-12">
  <h2 className="text-3xl md:text-4xl font-bold">
    {lang === "en" ? "Projects" : "Proyectos"}
  </h2>

  <div className="flex border border-zinc-700 rounded-lg overflow-hidden">
    <button
      onClick={() => setLang("es")}
      className={`px-4 py-2 text-sm transition ${
        lang === "es"
          ? "bg-teal-500 text-black"
          : "text-zinc-300 hover:bg-zinc-800"
      }`}
    >
      ES
    </button>
    <button
      onClick={() => setLang("en")}
      className={`px-4 py-2 text-sm transition ${
        lang === "en"
          ? "bg-teal-500 text-black"
          : "text-zinc-300 hover:bg-zinc-800"
      }`}
    >
      EN
    </button>
  </div>
</div>


        <div className="grid md:grid-cols-2 gap-8">
        {projects[lang].map((project, index) => (

            <div
              key={index}
              className="group rounded-xl border border-zinc-800/60 bg-zinc-900/40 p-6 hover:border-teal-400/60 transition"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-zinc-400">
                {project.description}
              </p>

              {/* TECH TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300"
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
                    className="text-teal-400 hover:underline"
                  >
                    Web
                  </a>
                )}
                {project.links.backend && (
                  <a
                    href={project.links.backend}
                    target="_blank"
                    className="text-teal-400 hover:underline"
                  >
                    Backend
                  </a>
                )}
                {project.links.android && (
                  <a
                    href={project.links.android}
                    target="_blank"
                    className="text-teal-400 hover:underline"
                  >
                    Android
                  </a>
                )}
                {project.links.thesis && (
                  <a
                    href={project.links.thesis}
                    target="_blank"
                    className="text-teal-400 hover:underline"
                  >
                    
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="text-teal-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.links.projectPage && (
                  <a
                    href={project.links.projectPage}
                    target="_blank"
                    className="text-teal-400 hover:underline"
                  >
                    {lang === "en" ? "Go to Project Page" : "Dirígete a la Página Web del Proyecto"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
