"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

const copy = {
  es: {
    eyebrow: "¿Te pasa esto?",
    title: "Tu negocio merece más que una web bonita",
    pains: [
      {
        title: "No apareces en Google",
        text: "Tus clientes te buscan, pero encuentran primero a tu competencia.",
      },
      {
        title: "Tu web no genera mensajes",
        text: "Tienes visitas, pero nadie te escribe ni te compra.",
      },
      {
        title: "Respondes lo mismo todo el día",
        text: "Precios, horarios y disponibilidad por WhatsApp, una y otra vez.",
      },
      {
        title: "Dependes de quien te hizo la web",
        text: "No tienes accesos, no puedes actualizarla y cada cambio cuesta.",
      },
    ],
    solution: "Lo resolvemos con una página, tienda o app pensada para vender, rápida, fácil de encontrar y 100% tuya.",
  },
  en: {
    eyebrow: "Sound familiar?",
    title: "Your business deserves more than a pretty website",
    pains: [
      {
        title: "You don't show up on Google",
        text: "Your clients are searching, but they find your competitors first.",
      },
      {
        title: "Your site doesn't generate leads",
        text: "You get visits, but nobody messages you or buys.",
      },
      {
        title: "You answer the same thing all day",
        text: "Prices, hours and availability over WhatsApp, again and again.",
      },
      {
        title: "You depend on whoever built your site",
        text: "No access, no way to update it, and every change costs money.",
      },
    ],
    solution: "We fix it with a page, store or app built to sell: fast, easy to find and 100% yours.",
  },
};

const icons = [
  "M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z",
  "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.83L3 20l1.4-3.72A7.6 7.6 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  "M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z",
];

export default function Problem({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];

  return (
    <section className="relative bg-zinc-950 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn repeat={false}>
          <p className="text-xs uppercase tracking-[0.3em] text-teal-400">{t.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-5xl">{t.title}</h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.pains.map((pain, idx) => (
            <FadeIn key={pain.title} delay={idx * 0.1} repeat={false} distance={30}>
              <div className="h-full rounded-2xl border border-white/10 bg-zinc-900/60 p-6">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-red-400/20 bg-red-400/10 text-red-300">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icons[idx]} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">{pain.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{pain.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} repeat={false}>
          <p className="mt-12 border-l-2 border-teal-400 pl-5 text-lg text-zinc-200 md:text-xl">{t.solution}</p>
        </FadeIn>
      </div>
    </section>
  );
}
