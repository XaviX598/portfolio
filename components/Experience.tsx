"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type ExperienceProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Experience & Delivery Approach",
    subtitle:
      "How I typically execute projects from discovery to production deployment.",
    steps: [
      {
        phase: "01. Discovery",
        text: "Define scope, goals, and success metrics with stakeholders before implementation.",
      },
      {
        phase: "02. Architecture",
        text: "Design scalable modules, API contracts and data models aligned with growth needs.",
      },
      {
        phase: "03. Build",
        text: "Implement frontend and backend with clean code, strong structure and iterative validation.",
      },
      {
        phase: "04. Release",
        text: "Deploy to cloud, monitor behavior and continuously refine the product based on feedback.",
      },
    ],
  },
  es: {
    title: "Experiencia y Metodo de Entrega",
    subtitle:
      "Como ejecuto proyectos desde discovery hasta despliegue en produccion.",
    steps: [
      {
        phase: "01. Discovery",
        text: "Definir alcance, objetivos y metricas de exito con stakeholders antes de implementar.",
      },
      {
        phase: "02. Arquitectura",
        text: "Disenar modulos escalables, contratos API y modelos de datos alineados al crecimiento.",
      },
      {
        phase: "03. Construccion",
        text: "Implementar frontend y backend con codigo limpio, estructura solida y validacion iterativa.",
      },
      {
        phase: "04. Release",
        text: "Desplegar en cloud, monitorear comportamiento y mejorar continuamente con feedback real.",
      },
    ],
  },
};

export default function Experience({ lang }: ExperienceProps) {
  const t = copy[lang];

  return (
    <section id="experience" className="w-full h-full min-h-screen relative flex items-center">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">{t.title}</h2>
          <p className="mt-3 text-zinc-400 max-w-3xl">{t.subtitle}</p>
        </FadeIn>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {t.steps.map((step, index) => (
            <FadeIn key={step.phase} delay={index * 0.08}>
              <article
                data-inview
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6"
              >
                <p className="text-teal-300 text-xs uppercase tracking-[0.14em]">
                  {step.phase}
                </p>
                <p className="mt-3 text-zinc-300 leading-relaxed">{step.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
