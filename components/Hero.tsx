"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navigateToSection } from "@/lib/navigation";
import type { PortfolioLang } from "./HomeClient";
import FadeIn from "./FadeIn";
import MotionButton from "./MotionButton";
import Spotlight from "./Spotlight";

type HeroProps = {
  lang: PortfolioLang;
};

const heroCopy = {
  en: {
    badge: "Software Development Agency",
    badgeCert: "First certified AI agency in Ecuador",
    headline: "Solve your problems with",
    headlineKeywords: ["Landing Pages", "Websites", "Apps", "Automation"],
    subtitle:
      "Your partner for landing pages, websites, Android & iOS apps, and AI automation. From concept to production.",
    ctaPrimary: "Quote Your Project",
    ctaSecondary: "See Services",
    supportingCopy:
      "We build SEO-ready websites, mobile apps and AI automations for companies that need a solid technical foundation.",
  },
  es: {
    badge: "Agencia de Desarrollo de Software",
    badgeCert: "Primera agencia en Ecuador certificada en IA",
    headline: "Resuelve tus problemas con",
    headlineKeywords: ["Landing Pages", "Páginas Web", "Apps", "Automatización"],
    subtitle:
      "Tu socio para landing pages, páginas web, apps Android e iOS e inteligencia artificial. De la idea a producción.",
    ctaPrimary: "Cotiza tu Proyecto",
    ctaSecondary: "Ver Servicios",
    supportingCopy:
      "Desarrollamos software, ecommerce, páginas web y automatizaciones con IA para empresas que necesitan una base técnica seria.",
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
      <div className="text-4xl font-bold text-white md:text-5xl">
        {count}
        <span className="text-teal-400">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-zinc-500">{label}</div>
    </div>
  );
}

export default function Hero({ lang }: HeroProps) {
  const copy = heroCopy[lang];
  const marqueeText = heroCopyMarquee[lang];

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <Spotlight className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-zinc-950">
          <div className="subtle-grid opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-zinc-900 opacity-90 blur-[100px]" />
          <div className="absolute left-0 top-1/3 h-px w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute bottom-1/3 right-0 h-px w-1/3 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
        </div>
      </Spotlight>

      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.12em] text-white">
              <span className="h-2 w-2 rounded-full bg-teal-400" />
              {copy.badge}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-4 inline-flex items-center gap-3 rounded-lg border border-teal-500/30 bg-teal-500/10 px-5 py-2.5">
              <span className="text-lg">??</span>
              <span className="font-semibold text-teal-400">{copy.badgeCert}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <h1 className="mt-8 text-4xl font-normal leading-[1.1] tracking-[-0.024em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="mb-2 block">{copy.headline}</span>
              <span className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {copy.headlineKeywords.map((keyword, idx) => (
                  <span
                    key={idx}
                    className="inline-block rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-2xl font-semibold text-teal-400 sm:px-6 sm:text-3xl md:text-4xl"
                  >
                    {keyword}
                  </span>
                ))}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.24}>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-zinc-400 opacity-80 sm:text-xl">
              {copy.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.32}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MotionButton
                label={copy.ctaPrimary}
                variant="primary"
                onClick={() => navigateToSection("process")}
              />
              <MotionButton href="/servicios" label={copy.ctaSecondary} variant="secondary" />
            </div>
          </FadeIn>

          <FadeIn delay={0.36}>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-500 sm:text-base">
              {copy.supportingCopy}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-16 flex items-center justify-center gap-16">
              <AnimatedStat value={50} suffix="+" label="AI Integrations" />
              <div className="h-12 w-px bg-white/10" />
              <AnimatedStat value={100} suffix="%" label="Client Satisfaction" />
              <div className="h-12 w-px bg-white/10" />
              <AnimatedStat value={24} suffix="h" label="Response Time" />
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="relative z-10 px-8 pb-10">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-12">
          <p className="whitespace-nowrap text-sm text-zinc-500">{marqueeText}</p>

          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex items-center gap-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className="liquid-glass flex shrink-0 items-center gap-3 rounded-lg px-4 py-2"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`h-6 w-6 object-contain ${
                      logo.name === "Copilot" ? "brightness-0 invert" : ""
                    }`}
                  />
                  <span className="whitespace-nowrap text-base font-semibold text-white">
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
