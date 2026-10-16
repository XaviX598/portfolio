"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import { faqData } from "@/lib/faq";

const copy = {
  es: { eyebrow: "Preguntas frecuentes", title: "Resolvemos tus dudas" },
  en: { eyebrow: "FAQ", title: "Your questions, answered" },
};

function FAQItem({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-zinc-900"
      >
        <span className="font-medium text-white">{question}</span>
        <span className={`shrink-0 text-xl text-teal-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
          +
        </span>
      </button>
      {/* La respuesta siempre está en el DOM (Google la necesita para el schema FAQPage) */}
      <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 leading-relaxed text-zinc-400">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative bg-zinc-950 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn repeat={false} className="text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-400">{t.eyebrow}</span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">{t.title}</h2>
        </FadeIn>

        <div className="mt-12 space-y-3">
          {faqData[lang].map((item, idx) => (
            <FadeIn key={item.q} delay={idx * 0.05} repeat={false} distance={20}>
              <FAQItem
                question={item.q}
                answer={item.a}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
