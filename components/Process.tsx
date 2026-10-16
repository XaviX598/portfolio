"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type ProcessProps = {
  lang: PortfolioLang;
};

const processData = {
  es: {
    eyebrow: "Proceso",
    title: "Cómo trabajamos",
    subtitle: "Un proceso claro, de la primera conversación al lanzamiento.",
    steps: [
      { title: "Conversamos", details: "Nos cuentas tu idea por WhatsApp o videollamada y entendemos tu negocio y tus objetivos." },
      { title: "Propuesta clara", details: "Te enviamos alcance, tiempos y precio cerrado por escrito. Sin sorpresas." },
      { title: "Diseño y desarrollo", details: "Construimos por etapas y te mostramos avances para que opines en cada paso." },
      { title: "Lanzamiento y soporte", details: "Publicamos con dominio, SEO y analítica, y te acompañamos después del lanzamiento." },
    ],
  },
  en: {
    eyebrow: "Process",
    title: "How we work",
    subtitle: "A clear process, from the first conversation to launch.",
    steps: [
      { title: "We talk", details: "You tell us your idea over WhatsApp or a video call and we get to know your business and goals." },
      { title: "Clear proposal", details: "We send you scope, timeline and a fixed price in writing. No surprises." },
      { title: "Design & development", details: "We build in stages and show you progress so you can give feedback at every step." },
      { title: "Launch & support", details: "We go live with domain, SEO and analytics, and stay with you after launch." },
    ],
  },
};

export default function Process({ lang }: ProcessProps) {
  const t = processData[lang];
  const stepsRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 80%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section className="relative bg-zinc-950 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn repeat={false} className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-400">{t.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-400">{t.subtitle}</p>
        </FadeIn>

        <ol ref={stepsRef} className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Línea de progreso: vertical en móvil, horizontal en desktop */}
          <div className="absolute bottom-0 left-[1.4rem] top-0 w-px bg-white/10 md:left-0 md:right-[calc(25%-2.75rem)] md:top-[1.4rem] md:h-px md:w-auto" aria-hidden="true">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-teal-400 md:hidden" />
            <motion.div style={{ scaleX: progress }} className="hidden h-full w-full origin-left bg-teal-400 md:block" />
          </div>

          {t.steps.map((step, idx) => (
            <li key={step.title} className="relative pl-16 md:pl-0">
              <FadeIn delay={idx * 0.12} repeat={false} distance={24}>
                <div className="absolute left-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-teal-400/40 bg-zinc-950 font-mono text-sm text-teal-300 md:relative">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold text-white md:mt-6">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.details}</p>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
