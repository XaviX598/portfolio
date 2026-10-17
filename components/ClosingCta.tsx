"use client";

import type { PortfolioLang } from "./HomeClient";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";

const copy = {
  es: { l1: "Tu web lista,", l2: "exprés.", sentence: "Escríbenos hoy y en menos de 24 horas tienes un plan con precio cerrado.", cta: "Cotizar por WhatsApp" },
  en: { l1: "Your site ready,", l2: "express.", sentence: "Message us today and within 24 hours you'll have a plan with a fixed price.", cta: "Get a quote on WhatsApp" },
};

// El cierre invierte la página: el tinte se vuelve fondo. Repite la idea del nombre.
export default function ClosingCta({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];

  return (
    <section className="page-x flex min-h-[80svh] flex-col justify-between bg-ink py-16 text-ground md:min-h-[90svh] md:py-20">
      <h2 data-reveal className="text-[15vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[10vw]">
        <span className="block">{t.l1}</span>
        <span className="block">{t.l2}</span>
      </h2>
      <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p data-reveal className="max-w-[34ch] text-[17px] md:text-xl">{t.sentence}</p>
        <a
          data-reveal
          className="inline-flex min-h-14 w-full items-center justify-center bg-ground px-8 font-medium text-ink transition-transform duration-150 active:scale-[0.97] md:w-auto"
          href={whatsappUrl(QUOTE_MESSAGE[lang])}
          target="_blank"
          rel="noreferrer"
        >
          {t.cta}
        </a>
      </div>
    </section>
  );
}
