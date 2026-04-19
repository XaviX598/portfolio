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
    titleA: "We build",
    titleB: "professional digital products",
    subtitle:
      "Xpress Developer - Your partner for scalable platforms, AI integration and team transformation from 0 to production.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Us",
    highlights: [
      "AI Integration",
      "React / Vue + TypeScript",
      "Team Training",
      "Cloud Deployments",
    ],
    metricsTitle: "Company Snapshot",
    motionTitle: "Motion System",
    motionDesc:
      "Scroll-driven sections, premium hover states and polished CTA transitions.",
    metrics: [
      { label: "Projects Delivered", value: "15+" },
      { label: "Core Focus", value: "AI + Development" },
      { label: "Priority", value: "Quality + Business" },
    ],
  },
  es: {
    badge: "Agencia de Desarrollo de Software",
    titleA: "Construimos",
    titleB: "productos digitales profesionales",
    subtitle:
      "Xpress Developer - Tu socio para plataformas escalables, integracion de IA y transformacion de equipos de 0 a produccion.",
    ctaPrimary: "Ver Proyectos",
    ctaSecondary: "Contactanos",
    highlights: [
      "Integracion de IA",
      "React / Vue + TypeScript",
      "Capacitacion de Equipos",
      "Despliegues Cloud",
    ],
    metricsTitle: "Resumen de la Empresa",
    motionTitle: "Sistema de Motion",
    motionDesc:
      "Secciones guiadas por scroll, hovers premium y transiciones de CTA mas pulidas.",
    metrics: [
      { label: "Proyectos Entregados", value: "15+" },
      { label: "Enfoque Principal", value: "IA + Desarrollo" },
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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 text-white text-xs sm:text-sm uppercase tracking-[0.12em]">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                {copy.badge}
              </span>
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
            <aside
              data-inview
              className="rounded-2xl border border-white/20 bg-zinc-950 p-6 sm:p-7"
            >
              <p className="text-zinc-400 text-xs uppercase tracking-[0.16em]">
                {copy.metricsTitle}
              </p>

              <div className="mt-4 rounded-xl border border-white/10 bg-zinc-900 p-3">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/70">
                  {copy.motionTitle}
                </p>
                <p className="mt-1 text-sm text-zinc-300">
                  {copy.motionDesc}
                </p>
              </div>

              <div className="mt-5 space-y-4">
                {copy.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-zinc-900 p-4"
                  >
                    <p className="text-2xl font-semibold text-white">
                      {metric.value}
                    </p>
                    <p className="text-sm text-zinc-400 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.16em] text-zinc-500 mb-3">
                  AI Agents We Work With
                </p>
                <div className="flex flex-wrap gap-3">
                  <img src="/claudecode.svg" alt="Claude Code" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/opencode.svg" alt="OpenCode" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/cursor.svg" alt="Cursor" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/windsurf.svg" alt="Windsurf" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/codex.svg" alt="Codex" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/geminicli.svg" alt="Gemini CLI" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/cline.svg" alt="Cline" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/github-copilot.svg" alt="GitHub Copilot" className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
