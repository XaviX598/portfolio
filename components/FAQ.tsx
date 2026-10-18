"use client";

import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import { faqData } from "@/lib/faq";

export default function FAQ({ lang }: { lang: PortfolioLang }) {
  return (
    <section className="page-x bg-surface py-28 md:py-40">
      <h2 data-reveal="words" className="text-[10vw] font-extrabold leading-[0.95] tracking-[-0.035em] md:text-[5.4vw]">
        <SplitWords text={lang === "en" ? "Before you write" : "Antes de escribirnos"} />
      </h2>
      <div className="mt-14 space-y-2 md:mt-20 md:ml-[33.333%]">
        {faqData[lang].map((item, i) => (
          <details
            key={item.q}
            data-reveal
            style={{ ["--d" as string]: `${i * 50}ms` }}
            className="group -mx-[var(--margin)] px-[var(--margin)] py-4 open:bg-ground"
            open={i === 0}
          >
            <summary className="flex cursor-pointer items-center justify-between gap-6">
              <h3 className="text-[20px] font-normal md:text-[22px]">{item.q}</h3>
              <svg className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path d="M3 6l5 5 5-5" />
              </svg>
            </summary>
            <p className="mt-4 max-w-[48ch] pb-2 text-base md:text-[17px]">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
