"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import TypeText from "./TypeText";
import ScrollMotion from "./ScrollMotion";
import Link from "next/link";
import { projects } from "@/lib/projects";

const copy = {
  es: {
    title: "Proyectos en producción",
    note: "Todos están en línea: elige uno, ábrelo y pruébalo.",
    live: "En línea",
    open: "Abrir proyecto",
    caseLink: "Ver el caso",
    choose: "Elige un proyecto",
  },
  en: {
    title: "Projects in production",
    note: "All of them are live: pick one, open it and try it.",
    live: "Live",
    open: "Open project",
    caseLink: "See the case",
    choose: "Choose a project",
  },
};

// Carta alta con la punta inferior en ángulo, como las del lobby de Valorant.
const CARD_SHAPE = "polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)";

export default function Projects({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section className="page-x relative overflow-hidden bg-ground py-24 md:py-32">
      {/* Franjas planas en diagonal, sin degradados */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-[10%] bottom-0 h-[60%] w-[45%] bg-[#0f1923]" style={{ clipPath: "polygon(0 35%, 100% 100%, 0 100%)" }} />
        <div className="absolute -right-[5%] top-[30%] h-[55%] w-[40%] bg-[#bd3944]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 30%)" }} />
      </div>

      <div className="relative">
        <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 data-reveal="words" className="text-[11vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[5.4vw]"><SplitWords text={t.title} /></h2>
          <p data-reveal="type" style={{ ["--d" as string]: "400ms" }} className="max-w-[32ch] text-lg"><TypeText text={t.note} speed={16} /></p>
        </div>

        {/* Escritorio: fila de cartas; la elegida se agranda */}
        <div className="hidden items-end justify-center gap-3 lg:flex" role="group" aria-label={t.choose}>
          {projects.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={p.name}
                data-reveal
                data-tilt
                className="shrink-0"
                style={{ ["--d" as string]: `${i * 90}ms`, ["--tilt" as string]: `${(i - 2.5) * 3}deg` }}
              >
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`group relative shrink-0 overflow-hidden bg-[#0f1923] text-left transition-[width,height] duration-500 [transition-timing-function:var(--ease-out)] ${
                  isActive ? "h-[580px] w-[clamp(260px,24vw,360px)]" : "h-[480px] w-[clamp(120px,12vw,190px)]"
                }`}
                style={{ clipPath: CARD_SHAPE }}
              >
                <Image
                  src={p.mobile}
                  alt={`${p.name} en celular`}
                  fill
                  sizes="22vw"
                  className={`object-cover object-top transition-[opacity,filter,transform] duration-500 ${
                    isActive ? "opacity-100" : "opacity-40 grayscale group-hover:opacity-60"
                  }`}
                />
                <span className={`absolute inset-x-0 top-0 h-1.5 ${isActive ? "bg-[#ece8e1]" : "bg-[#ff4655]"}`} />
                <span className={`absolute inset-x-0 bottom-0 flex flex-col items-center bg-[#0f1923] px-3 ${isActive ? "pb-[16%]" : "pb-[24%]"} pt-4 text-center`}>
                  {isActive && <span className="text-[15px] font-medium text-[#ff4655]">{t.live}</span>}
                  <span className={`max-w-full text-balance font-extrabold leading-tight tracking-[-0.02em] text-[#ece8e1] ${isActive ? "mt-1 text-2xl" : "text-[16px]"}`}>
                    {p.kind[lang]}
                  </span>
                  {isActive && <span className="text-[15px] text-[#a4adb4]">{p.name}</span>}
                </span>
              </button>
              </div>
            );
          })}
        </div>

        {/* Móvil: carta grande del proyecto elegido y selector debajo */}
        <div className="lg:hidden">
          <ScrollMotion y={[50, -20]} rotate={[-8, 0]} scale={[0.88, 1]}>
          <div className="relative mx-auto h-[120vw] max-h-[560px] w-[72%] max-w-[300px] overflow-hidden bg-[#0f1923]" style={{ clipPath: CARD_SHAPE }}>
            <Image key={current.mobile} src={current.mobile} alt={`${current.name} en celular`} fill sizes="72vw" className="object-cover object-top" />
            <span className="absolute inset-x-0 top-0 h-1.5 bg-[#ece8e1]" />
            <span className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-[#0f1923] px-3 pb-[16%] pt-4 text-center">
              <span className="text-[15px] font-medium text-[#ff4655]">{t.live}</span>
              <span className="mt-1 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#ece8e1]">{current.kind[lang]}</span>
              <span className="text-[15px] text-[#a4adb4]">{current.name}</span>
            </span>
          </div>
          </ScrollMotion>
          <div className="mt-8 grid grid-cols-3 gap-2" role="group" aria-label={t.choose}>
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`min-h-12 px-2 py-2 text-[15px] font-medium leading-tight transition-colors ${
                  active === i ? "bg-[#0f1923] text-[#ece8e1]" : "bg-[#ece8e1] text-[#0f1923]"
                }`}
              >
                {p.kind[lang]}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-12 flex flex-col gap-5 bg-[#0f1923] p-5 text-[#ece8e1] lg:mx-auto lg:max-w-3xl md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-[46ch] text-lg">{current.summary[lang]}</p>
          <div className="flex shrink-0 items-center gap-5">
            <Link href={`/proyectos/${current.slug}`} className="link text-[15px]">
              {t.caseLink}
            </Link>
            <a className="btn shrink-0 !bg-[#ff4655] !text-[#0f1923]" href={current.url} target="_blank" rel="noreferrer">
              {t.open} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
