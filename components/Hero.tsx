"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type HeroProps = {
  lang: PortfolioLang;
};

const heroCopy = {
  en: {
    badge: "Open to opportunities",
    titleA: "I design and ship",
    titleB: "professional digital products",
    subtitle:
      "Full Stack Engineer focused on business-ready platforms, clean architecture and reliable delivery from backend to frontend.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Me",
    highlights: [
      "Java + Spring Boot",
      "React / Vue + TypeScript",
      "PostgreSQL + API Design",
      "Cloud Deployments (Vercel / Oracle)",
    ],
    metricsTitle: "Professional Snapshot",
    metrics: [
      { label: "Delivered Projects", value: "8+" },
      { label: "Core Profile", value: "Full Stack" },
      { label: "Priority", value: "Quality + Business" },
    ],
  },
  es: {
    badge: "Disponible para oportunidades",
    titleA: "Diseno y entrego",
    titleB: "productos digitales profesionales",
    subtitle:
      "Ingeniero Full Stack enfocado en plataformas listas para negocio, arquitectura limpia y entrega confiable de backend a frontend.",
    ctaPrimary: "Ver Proyectos",
    ctaSecondary: "Contactarme",
    highlights: [
      "Java + Spring Boot",
      "React / Vue + TypeScript",
      "PostgreSQL + Diseno de APIs",
      "Despliegues Cloud (Vercel / Oracle)",
    ],
    metricsTitle: "Resumen Profesional",
    metrics: [
      { label: "Proyectos Entregados", value: "8+" },
      { label: "Perfil Base", value: "Full Stack" },
      { label: "Prioridad", value: "Calidad + Negocio" },
    ],
  },
};

export default function Hero({ lang }: HeroProps) {
  const copy = heroCopy[lang];

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb floating-orb-a" />
        <div className="floating-orb floating-orb-b" />
        <div className="floating-orb floating-orb-c" />
        <div className="subtle-grid" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-300 text-xs sm:text-sm uppercase tracking-[0.12em]">
                <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
                {copy.badge}
              </span>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-zinc-100">
                {copy.titleA}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  {copy.titleB}
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-5 text-zinc-300 text-lg max-w-2xl leading-relaxed">
                {copy.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {copy.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-900/70 text-zinc-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-9 flex flex-wrap gap-3">
                <MotionButton href="#projects" label={copy.ctaPrimary} variant="primary" />
                <MotionButton href="#contact" label={copy.ctaSecondary} variant="secondary" />
                <MotionButton
                  href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
                  target="_blank"
                  rel="noreferrer"
                  label="LinkedIn"
                  variant="secondary"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <aside className="rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-7 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              <p className="text-zinc-400 text-xs uppercase tracking-[0.16em]">
                {copy.metricsTitle}
              </p>
              <div className="mt-5 space-y-4">
                {copy.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-zinc-950/70 p-4"
                  >
                    <p className="text-2xl font-semibold text-teal-300">
                      {metric.value}
                    </p>
                    <p className="text-sm text-zinc-400 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-3">
                <MotionButton
                  href="/CV Xavier Aguilar.pdf"
                  target="_blank"
                  rel="noreferrer"
                  label="CV (ES)"
                  variant="secondary"
                  className="text-center"
                  block
                />
                <MotionButton
                  href="/Xavier Aguilar ECV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  label="CV (EN)"
                  variant="secondary"
                  className="text-center"
                  block
                />
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
