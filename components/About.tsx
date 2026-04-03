"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";

type Language = "en" | "es";

const content = {
  en: {
    heading: "About",
    subtitle:
      "Engineer with strong execution and architecture fundamentals. I focus on building maintainable software that can evolve with business needs.",
    intro:
      "I am Kevin Xavier Aguilar Velasco, Computer Science Engineer from Universidad Central del Ecuador. My core strength is connecting product thinking with technical implementation, from backend design to frontend delivery.",
    details:
      "I work with Java, Spring Boot, Vue, React, TypeScript and PostgreSQL. I care deeply about clean code, consistent UX and production reliability.",
    cards: [
      {
        title: "What I deliver",
        points: [
          "Full stack delivery from API to UI",
          "Role-based systems with secure auth flows",
          "Clear architecture and maintainable modules",
        ],
      },
      {
        title: "How I work",
        points: [
          "Strong communication with stakeholders",
          "Business-oriented prioritization",
          "Quality mindset with iterative improvements",
        ],
      },
      {
        title: "Current focus",
        points: [
          "Scalable backend services",
          "High-converting frontend experiences",
          "Professional deployment workflows",
        ],
      },
    ],
  },
  es: {
    heading: "Sobre mi",
    subtitle:
      "Ingeniero con foco en ejecucion y fundamentos de arquitectura. Construyo software mantenible que crece junto al negocio.",
    intro:
      "Soy Kevin Xavier Aguilar Velasco, Ingeniero en Ciencias de la Computacion de la Universidad Central del Ecuador. Mi fortaleza principal es unir estrategia de producto con implementacion tecnica, desde backend hasta frontend.",
    details:
      "Trabajo con Java, Spring Boot, Vue, React, TypeScript y PostgreSQL. Priorizo codigo limpio, UX consistente y confiabilidad en produccion.",
    cards: [
      {
        title: "Lo que entrego",
        points: [
          "Entrega full stack de API a interfaz",
          "Sistemas por roles con flujos seguros de auth",
          "Arquitectura clara y modulos mantenibles",
        ],
      },
      {
        title: "Como trabajo",
        points: [
          "Comunicacion fuerte con stakeholders",
          "Priorizacion orientada al negocio",
          "Mentalidad de calidad con mejora iterativa",
        ],
      },
      {
        title: "Enfoque actual",
        points: [
          "Servicios backend escalables",
          "Experiencias frontend que convierten",
          "Flujos de despliegue profesionales",
        ],
      },
    ],
  },
};

export default function About() {
  const [language, setLanguage] = useState<Language>("en");
  const selected = content[language];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">
          <FadeIn>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
                {selected.heading}
              </h2>
              <p className="mt-3 text-zinc-400 max-w-3xl">{selected.subtitle}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="flex border border-white/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setLanguage("es")}
                className={`px-4 py-2 text-sm transition-colors ${
                  language === "es"
                    ? "bg-teal-500 text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-teal-300 hover:bg-teal-500/10"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-4 py-2 text-sm transition-colors ${
                  language === "en"
                    ? "bg-teal-500 text-zinc-950 font-semibold"
                    : "text-zinc-400 hover:text-teal-300 hover:bg-teal-500/10"
                }`}
              >
                EN
              </button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.1}>
          <article className="rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur p-7 md:p-8">
            <p className="text-zinc-200 leading-relaxed text-lg">{selected.intro}</p>
            <p className="mt-4 text-zinc-400 leading-relaxed">{selected.details}</p>
          </article>
        </FadeIn>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {selected.cards.map((card, index) => (
            <FadeIn key={card.title} delay={0.14 + index * 0.06}>
              <article className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                <h3 className="text-zinc-100 font-semibold text-lg">{card.title}</h3>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="text-zinc-400 text-sm leading-relaxed">
                      <span className="text-teal-300 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
