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
      "Software development agency focused on scalable solutions, AI integration and team transformation.",
    intro:
      "Xpress Developer is a software development agency specialized in building professional platforms and integrating AI into your team's workflow. We help companies transform from 0 to production with modern tools and practices.",
    details:
      "Our stack includes TypeScript, React, Vue, AI Agents, and cloud deployments. We work with clean architecture, clear communication and iterative delivery.",
    cards: [
      {
        title: "What We Deliver",
        points: [
          "End-to-end platforms from design to production",
          "AI integration and automation",
          "Team training and onboarding",
        ],
      },
      {
        title: "How We Work",
        points: [
          "Business-oriented prioritization",
          "Close collaboration with teams",
          "Quality-first in every delivery",
        ],
      },
      {
        title: "AI Services",
        points: [
          "AI integration from 0 to production",
          "Team training and workshops",
          "Workflow automation",
        ],
      },
    ],
  },
  es: {
    heading: "Sobre Nosotros",
    subtitle:
      "Agencia de desarrollo de software enfocada en soluciones escalables, integracion de IA y transformacion de equipos.",
    intro:
      "Xpress Developer es una agencia de desarrollo de software especializada en construir plataformas profesionales e integrar IA en el flujo de trabajo de tu equipo. Ayudamos a empresas a transformarse de 0 a produccion con herramientas y practicas modernas.",
    details:
      "Nuestro stack incluye TypeScript, React, Vue, Agentes de IA y despliegues en la nube. Trabajamos con arquitectura limpia, comunicacion clara y entrega iterativa.",
    cards: [
      {
        title: "Lo que Entregamos",
        points: [
          "Plataformas end-to-end desde diseno hasta produccion",
          "Integracion de IA y automatizacion",
          "Capacitacion y onboarding de equipos",
        ],
      },
      {
        title: "Como Trabajamos",
        points: [
          "Priorizacion orientada al negocio",
          "Colaboracion cercana con equipos",
          "Calidad en cada entrega",
        ],
      },
      {
        title: "Servicios de IA",
        points: [
          "Integracion de IA de 0 a produccion",
          "Capacitacion y talleres para equipos",
          "Automatizacion de flujos de trabajo",
        ],
      },
    ],
  },
};

export default function About({ lang }: AboutProps) {
  const t = copy[lang];

  return (
    <section id="about" className="w-full h-full min-h-screen relative flex items-center">
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
          <article
            data-inview
            className="rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur p-7 md:p-8 mt-8"
          >
            <p className="text-zinc-200 leading-relaxed text-lg">{t.intro}</p>
            <p className="mt-4 text-zinc-400 leading-relaxed">{t.details}</p>
          </article>
        </FadeIn>

        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {t.cards.map((card, index) => (
            <FadeIn key={card.title} delay={0.14 + index * 0.06}>
              <article
                data-inview
                className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
              >
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
