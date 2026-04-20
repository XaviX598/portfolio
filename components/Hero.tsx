"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type HeroProps = {
  lang: PortfolioLang;
};

const heroCopy = {
  en: {
    badge: "Software Development Agency",
    badgeCert: "AI Certified Developer",
    titleA: "We build",
    titleB: "professional digital products",
    subtitle:
      "Your partner for scalable platforms, AI integration and team transformation from 0 to production.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Us",
    highlights: [
      "AI Integration",
      "React / Vue + TypeScript",
      "Team Training",
      "Cloud Deployments",
    ],
  },
  es: {
    badge: "Agencia de Desarrollo de Software",
    badgeCert: "Desarrollador Certificado en IA",
    titleA: "Construimos",
    titleB: "productos digitales profesionales",
    subtitle:
      "Tu socio para plataformas escalables, integracion de IA y transformacion de equipos de 0 a produccion.",
    ctaPrimary: "Ver Proyectos",
    ctaSecondary: "Contactanos",
    highlights: [
      "Integracion de IA",
      "React / Vue + TypeScript",
      "Capacitacion de Equipos",
      "Despliegues Cloud",
    ],
  },
};

export default function Hero({ lang }: HeroProps) {
  const copy = heroCopy[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb floating-orb-a" />
        <div className="floating-orb floating-orb-b" />
        <div className="floating-orb floating-orb-c" />
        <div className="subtle-grid" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 text-white text-xs sm:text-sm uppercase tracking-[0.12em]">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {copy.badge}
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm uppercase tracking-[0.12em]">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {copy.badgeCert}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-white">
              {copy.titleA}{" "}
              <span className="text-white">
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
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
