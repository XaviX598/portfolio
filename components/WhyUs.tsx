"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

const copy = {
  es: {
    eyebrow: "Por qué elegirnos",
    title: "Un socio técnico que se enfoca en tus resultados",
    subtitle: "Así trabajamos con cada cliente, sin letra pequeña.",
    reasons: [
      {
        title: "Precio cerrado por escrito",
        text: "Antes de empezar sabes exactamente qué incluye y cuánto cuesta. Sin cobros sorpresa.",
      },
      {
        title: "Hablas directo con el equipo técnico",
        text: "Sin intermediarios ni teléfono roto: quien diseña y programa tu proyecto es quien te responde.",
      },
      {
        title: "Avances visibles cada semana",
        text: "Trabajamos por etapas y te mostramos el progreso para que opines antes de seguir.",
      },
      {
        title: "Todo queda a tu nombre",
        text: "Código, dominio, hosting y accesos son tuyos. Nunca quedas atrapado con nosotros.",
      },
      {
        title: "Pensado para vender",
        text: "SEO, velocidad de carga, WhatsApp integrado y textos orientados a que te contacten.",
      },
      {
        title: "Te acompañamos después",
        text: "Soporte tras el lanzamiento y planes de mantenimiento para que tu web siga creciendo.",
      },
    ],
  },
  en: {
    eyebrow: "Why choose us",
    title: "A technical partner focused on your results",
    subtitle: "This is how we work with every client, no fine print.",
    reasons: [
      {
        title: "Fixed price in writing",
        text: "Before we start you know exactly what's included and what it costs. No surprise charges.",
      },
      {
        title: "Talk directly to the technical team",
        text: "No middlemen: the people who design and build your project are the ones who answer you.",
      },
      {
        title: "Visible progress every week",
        text: "We work in stages and show you progress so you can give feedback before we move on.",
      },
      {
        title: "Everything is in your name",
        text: "Code, domain, hosting and access belong to you. You're never locked in with us.",
      },
      {
        title: "Built to sell",
        text: "SEO, fast loading, WhatsApp integration and copy designed to make people contact you.",
      },
      {
        title: "We stay with you after launch",
        text: "Post-launch support and maintenance plans so your site keeps growing.",
      },
    ],
  },
};

const icons = [
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "M8 10h8M8 14h5m-9 6l2.5-3H19a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14z",
  "M3 3v18h18M7 15l4-4 3 3 5-6",
  "M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z",
  "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  "M18.364 5.636a9 9 0 010 12.728M15.536 8.464a5 5 0 010 7.072M12 12h.01M6.343 17.657a9 9 0 010-12.728M9.172 15.536a5 5 0 010-7.072",
];

export default function WhyUs({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];

  return (
    <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <FadeIn repeat={false}>
          <div className="mb-3 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-teal-400">{t.eyebrow}</span>
          </div>
          <h2 className="max-w-3xl text-3xl font-bold text-white md:text-5xl">{t.title}</h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">{t.subtitle}</p>
        </FadeIn>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.reasons.map((reason, idx) => (
            <FadeIn key={reason.title} delay={(idx % 3) * 0.1} repeat={false} distance={24} className="bg-zinc-950">
              <div className="group h-full p-7 transition-colors hover:bg-zinc-900/70">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-teal-300 transition-transform group-hover:scale-110">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icons[idx]} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{reason.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
