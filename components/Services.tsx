"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type ServicesProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Services",
    subtitle:
      "I help teams transform product ideas into production-ready solutions with speed and quality.",
    cards: [
      {
        title: "Full Stack Development",
        desc: "Web platforms with secure backends, clean APIs, and modern frontends.",
      },
      {
        title: "Architecture & Refactoring",
        desc: "Codebase organization, modular design, and maintainability upgrades.",
      },
      {
        title: "UI Engineering",
        desc: "Professional interfaces focused on clarity, conversion and usability.",
      },
      {
        title: "Deployment & Operations",
        desc: "From local setup to cloud rollout with stable and repeatable workflows.",
      },
    ],
  },
  es: {
    title: "Servicios",
    subtitle:
      "Ayudo a equipos a convertir ideas de producto en soluciones listas para produccion con velocidad y calidad.",
    cards: [
      {
        title: "Desarrollo Full Stack",
        desc: "Plataformas web con backend seguro, APIs limpias y frontend moderno.",
      },
      {
        title: "Arquitectura y Refactor",
        desc: "Organizacion de codebase, diseno modular y mejoras de mantenibilidad.",
      },
      {
        title: "Ingenieria UI",
        desc: "Interfaces profesionales enfocadas en claridad, conversion y usabilidad.",
      },
      {
        title: "Despliegue y Operacion",
        desc: "Desde setup local hasta cloud rollout con flujos estables y repetibles.",
      },
    ],
  },
};

export default function Services({ lang }: ServicesProps) {
  const t = copy[lang];

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/8 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">{t.title}</h2>
          <p className="mt-3 text-zinc-400 max-w-3xl">{t.subtitle}</p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {t.cards.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.07}>
              <article
                data-inview
                className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-6 hover:border-teal-400/40 transition-colors"
              >
                <h3 className="text-zinc-100 font-semibold text-lg leading-snug">
                  {service.title}
                </h3>
                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
