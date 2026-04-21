"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";
import { motion } from "framer-motion";

type HeroProps = {
  lang: PortfolioLang;
};

const aiLogos = [
  { src: "/opencode.svg", name: "OpenCode" },
  { src: "/cursor.svg", name: "Cursor" },
  { src: "/cline.svg", name: "Cline" },
  { src: "/claudecode.svg", name: "Claude Code" },
  { src: "/githubcopilot.svg", name: "GitHub Copilot" },
  { src: "/windsurf.svg", name: "Windsurf" },
  { src: "/geminicli.svg", name: "Gemini CLI" },
  { src: "/codex.svg", name: "Codex" },
];

const heroCopy = {
  en: {
    badge: "Software Development Agency",
    badgeCert: "First software agency in Ecuador certified in AI",
    titleA: "We build",
    titleB: "professional digital products",
    subtitle:
      "Your partner for scalable platforms, AI integration and team transformation from 0 to production.",
    ctaPrimary: "View Projects",
    ctaSecondary: "Contact Us",
  },
  es: {
    badge: "Agencia de Desarrollo de Software",
    badgeCert: "Primera agencia en Ecuador certificada en IA",
    titleA: "Construimos",
    titleB: "productos digitales profesionales",
    subtitle:
      "Tu socio para plataformas escalables, integración de IA y transformación de equipos de 0 a producción.",
    ctaPrimary: "Ver Proyectos",
    ctaSecondary: "Contáctanos",
  },
};

// Animación flotante para los logos
const floatAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Hero({ lang }: HeroProps) {
  const copy = heroCopy[lang];

  return (
    <section id="home" className="relative w-full h-full flex items-center px-6 overflow-hidden">
      {/* Fondo minimalista - solo negro/blanco */}
      <div className="absolute inset-0 bg-zinc-950">
        <div className="subtle-grid" />
        
        {/* Líneas decorativas minimalistas */}
        <div className="absolute top-1/4 left-0 w-96 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-96 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <FadeIn>
          {/* Badge principal - turquesa sutil */}
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm uppercase tracking-[0.12em]">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              {copy.badge}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          {/* Certificación IA - destaque especial */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-teal-500/30 bg-teal-500/10">
            <span className="text-2xl">🏆</span>
            <span className="text-teal-400 font-semibold text-lg">
              {copy.badgeCert}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.16}>
          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight font-bold text-white">
            {copy.titleA}{" "}
            <span className="text-teal-400">
              {copy.titleB}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.24}>
          <p className="mt-6 text-xl sm:text-2xl text-zinc-400 max-w-3xl leading-relaxed">
            {copy.subtitle}
          </p>
        </FadeIn>

        {/* Logos de IA con animación flotante */}
        <FadeIn delay={0.32}>
          <div className="mt-10">
            <p className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
              Powered by
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {aiLogos.map((logo, idx) => (
                <motion.div
                  key={logo.name}
                  className="relative group"
                  animate={floatAnimation}
                  transition={{
                    ...floatAnimation.transition,
                    delay: idx * 0.15,
                  }}
                  whileHover={{ scale: 1.15, y: 0 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-teal-400/50 group-hover:bg-teal-500/10 transition-all duration-300">
                    <img 
                      src={logo.src} 
                      alt={logo.name} 
                      className="w-7 h-7 md:w-8 md:h-8 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>
                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-zinc-400 bg-zinc-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {logo.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 flex flex-wrap gap-4">
            <MotionButton href="#projects" label={copy.ctaPrimary} variant="primary" />
            <MotionButton href="#contact" label={copy.ctaSecondary} variant="secondary" />
          </div>
        </FadeIn>
      </div>

      {/* Elementos decorativos minimalistas */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-white/5 rounded-full" />
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-teal-500/10 rounded-full" />
    </section>
  );
}