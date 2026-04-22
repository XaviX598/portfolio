"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import FadeIn from "./FadeIn";
import Spotlight from "./Spotlight";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type HeroProps = {
  lang: PortfolioLang;
};

const heroCopy = {
  en: {
    badge: "Software Development Agency",
    badgeCert: "Primera agencia en Ecuador certificada en IA",
    titleA: "We build",
    titleB: "professional digital products",
    subtitle:
      "Your partner for scalable platforms, AI integration and team transformation from 0 to production.",
    ctaPrimary: "Quote Your Project",
    ctaSecondary: "Contact Us",
  },
  es: {
    badge: "Agencia de Desarrollo de Software",
    badgeCert: "Primera agencia en Ecuador certificada en IA",
    titleA: "Construimos",
    titleB: "productos digitales profesionales",
    subtitle:
      "Tu socio para plataformas escalables, integración de IA y transformación de equipos de 0 a producción.",
    ctaPrimary: "Cotiza tu Proyecto",
    ctaSecondary: "Contáctanos",
  },
};

const logos = [
  { name: "OpenCode", src: "/opencode.svg" },
  { name: "Cursor", src: "/cursor.svg" },
  { name: "Cline", src: "/cline.svg" },
  { name: "Claude", src: "/claudecode.svg" },
  { name: "Copilot", src: "/githubcopilot.svg" },
  { name: "Windsurf", src: "/windsurf.svg" },
  { name: "Gemini", src: "/geminicli.svg" },
  { name: "Codex", src: "/codex.svg" },
];

const heroCopyMarquee = {
  en: "Relied on by brands across the globe",
  es: "Empresas de todo el mundo confían en nosotros",
};

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white">
        {count}<span className="text-teal-400">{suffix}</span>
      </div>
      <div className="text-zinc-500 text-sm mt-1">{label}</div>
    </div>
  );
}

export default function Hero({ lang }: HeroProps) {
  const copy = heroCopy[lang];
  const marqueeText = heroCopyMarquee[lang];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Spotlight className="absolute inset-0 pointer-events-none z-0">
        {/* Background */}
        <div className="absolute inset-0 bg-zinc-950">
          {/* Subtle grid */}
          <div className="subtle-grid opacity-30" />
          
          {/* Blurred overlay shape - centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-90 bg-zinc-900 blur-[100px] pointer-events-none" />
          
          {/* Gradient lines */}
          <div className="absolute top-1/3 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
        </div>
      </Spotlight>

      {/* Hero content - centered */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          {/* Badge */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm uppercase tracking-[0.12em]">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              {copy.badge}
            </div>
          </FadeIn>

          {/* Certification badge */}
          <FadeIn delay={0.08}>
            <div className="mt-4 inline-flex items-center gap-3 px-5 py-2.5 rounded-lg border border-teal-500/30 bg-teal-500/10">
              <span className="text-lg">🏆</span>
              <span className="text-teal-400 font-semibold">
                {copy.badgeCert}
              </span>
            </div>
          </FadeIn>

          {/* Headline */}
          <FadeIn delay={0.16}>
            <h1 className="mt-8 text-[80px] sm:text-[120px] lg:text-[160px] font-normal leading-[1.02] tracking-[-0.024em] text-white">
              <span className="text-white">X</span>
              <span className="text-teal-400">press</span>
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={0.24}>
            <p className="mt-4 text-lg sm:text-xl text-zinc-400 leading-8 max-w-xl mx-auto opacity-80">
              The most powerful AI ever deployed <br className="hidden sm:block" />
              in software development
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.32}>
            <div className="mt-8">
              <MotionButton href="#process" label={copy.ctaPrimary} variant="primary" />
            </div>
          </FadeIn>

          {/* Stats - integrated in hero */}
          <FadeIn delay={0.4}>
            <div className="mt-16 flex items-center justify-center gap-16">
              <AnimatedStat value={50} suffix="+" label="AI Integrations" />
              <div className="w-px h-12 bg-white/10" />
              <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
              <div className="w-px h-12 bg-white/10" />
              <AnimatedStat value={24} suffix="h" label="Response Time" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Logo marquee - pinned to bottom */}
      <div className="relative z-10 pb-10 px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-12">
          {/* Left text */}
          <p className="text-zinc-500 text-sm whitespace-nowrap">
            {marqueeText}
          </p>

          {/* Marquee */}
          <div className="overflow-hidden flex-1">
            <motion.div
              className="flex gap-16 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="liquid-glass flex items-center gap-3 px-4 py-2 rounded-lg shrink-0"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className={`w-6 h-6 object-contain ${logo.name === 'Copilot' ? 'invert brightness-0' : ''}`}
                  />
                  <span className="text-base font-semibold text-white whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}