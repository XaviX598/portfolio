"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type AboutProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    heading: "About",
    subtitle:
      "Engineer with strong execution and architecture fundamentals, focused on maintainable software and business impact.",
    intro:
      "I am Kevin Xavier Aguilar Velasco, Computer Science Engineer from Universidad Central del Ecuador. I enjoy translating product goals into solid technical implementations.",
    details:
      "My stack includes Java, Spring Boot, Vue, React, TypeScript and PostgreSQL. I work with clean architecture principles, clear communication and iterative delivery.",
    cards: [
      {
        title: "What I deliver",
        points: [
          "End-to-end delivery from API to user interface",
          "Secure role-based systems",
          "Maintainable architecture with clear modules",
        ],
      },
      {
        title: "How I work",
        points: [
          "Business-oriented prioritization",
          "Collaboration with stakeholders and teams",
          "Quality-first mindset in every release",
        ],
      },
      {
        title: "What I value",
        points: [
          "Clarity over complexity",
          "Performance and reliability",
          "Continuous learning and improvement",
        ],
      },
    ],
  },
  es: {
    heading: "Sobre mi",
    subtitle:
      "Ingeniero con foco en ejecucion y fundamentos de arquitectura, orientado a software mantenible e impacto de negocio.",
    intro:
      "Soy Kevin Xavier Aguilar Velasco, Ingeniero en Ciencias de la Computacion de la Universidad Central del Ecuador. Disfruto convertir objetivos de producto en implementaciones tecnicas solidas.",
    details:
      "Trabajo con Java, Spring Boot, Vue, React, TypeScript y PostgreSQL. Me guio por arquitectura limpia, comunicacion clara y entrega iterativa.",
    cards: [
      {
        title: "Lo que entrego",
        points: [
          "Entrega end-to-end desde API hasta interfaz",
          "Sistemas seguros basados en roles",
          "Arquitectura mantenible con modulos claros",
        ],
      },
      {
        title: "Como trabajo",
        points: [
          "Priorizacion orientada al negocio",
          "Colaboracion con stakeholders y equipos",
          "Mentalidad de calidad en cada release",
        ],
      },
      {
        title: "Lo que valoro",
        points: [
          "Claridad por encima de complejidad",
          "Performance y confiabilidad",
          "Aprendizaje y mejora continua",
        ],
      },
    ],
  },
};

export default function About({ lang }: AboutProps) {
  const t = copy[lang];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-72 h-72 bg-teal-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
            {t.heading}
          </h2>
          <p className="mt-3 text-zinc-400 max-w-3xl">{t.subtitle}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <article className="rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur p-7 md:p-8 mt-8">
            <p className="text-zinc-200 leading-relaxed text-lg">{t.intro}</p>
            <p className="mt-4 text-zinc-400 leading-relaxed">{t.details}</p>
          </article>
        </FadeIn>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {t.cards.map((card, index) => (
            <FadeIn key={card.title} delay={0.14 + index * 0.06}>
              <article className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                <h3 className="text-zinc-100 font-semibold text-lg">{card.title}</h3>
                <ul className="mt-4 space-y-2">
                  {card.points.map((point) => (
                    <li key={point} className="text-zinc-400 text-sm leading-relaxed">
                      <span className="text-teal-300 mr-2">-</span>
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
