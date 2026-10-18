"use client";

import Image from "next/image";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import TypeText from "./TypeText";
import ScrollMotion from "./ScrollMotion";
import PhoneMockup from "./PhoneMockup";

const copy = {
  es: {
    title: "Tu web tiene que venderte",
    note: "Tus clientes te buscan en Google y encuentran primero a tu competencia. Hacemos páginas rápidas, fáciles de encontrar y que terminan en un mensaje de WhatsApp.",
    facts: [
      { value: "$250", label: "desde, por una landing page" },
      { value: "24 h", label: "para responderte con un plan" },
      { value: "1–2 sem.", label: "para lanzar tu landing" },
      { value: "100%", label: "código y dominio a tu nombre" },
    ],
    alt: "Tienda online Xpress Ecommerce desarrollada por Xpress Developer",
  },
  en: {
    title: "Your site has to sell for you",
    note: "Your clients search on Google and find your competitors first. We build fast pages that are easy to find and end in a WhatsApp message.",
    facts: [
      { value: "$250", label: "and up, for a landing page" },
      { value: "24 h", label: "to reply with a plan" },
      { value: "1–2 wk", label: "to launch your landing" },
      { value: "100%", label: "code and domain in your name" },
    ],
    alt: "Xpress Ecommerce online store built by Xpress Developer",
  },
};

export default function Problem({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];

  return (
    <section className="page-x bg-surface pb-28 pt-28 md:pb-32 md:pt-36">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <h2 data-reveal="words" className="text-[11vw] font-normal leading-[0.95] tracking-[-0.035em] md:col-span-7 md:text-[5.4vw]">
          <SplitWords text={t.title} />
        </h2>
        <p data-reveal="type" style={{ ["--d" as string]: "300ms" }} className="md:col-span-4 md:col-start-9">
          <TypeText text={t.note} speed={14} />
        </p>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-28 md:flex md:justify-between">
        {t.facts.map((f, i) => (
          <div key={f.value} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
            <dt className="text-[26px] font-medium leading-none tracking-[-0.02em] md:text-[clamp(28px,3vw,44px)]">{f.value}</dt>
            <dd className="mt-2 max-w-[22ch] text-[15px] text-muted">{f.label}</dd>
          </div>
        ))}
      </dl>

      <ScrollMotion className="mt-16 md:hidden" y={[60, -30]} rotate={[-10, 0]} scale={[0.85, 1]}>
        <PhoneMockup src="/proyectos/movil/xpress-ecommerce.jpg" alt={t.alt} sizes="60vw" className="mx-auto w-[58%] max-w-[260px]" />
      </ScrollMotion>

      <div className="mt-24 hidden items-end gap-8 md:grid md:grid-cols-12">
        <ScrollMotion className="relative col-span-9 aspect-[1848/909] overflow-hidden bg-ground" y={[50, -30]} scale={[0.9, 1]}>
          <Image src="/proyectos/xpress%20ecommerce.png" alt={t.alt} fill sizes="75vw" className="object-cover object-top" />
        </ScrollMotion>
        <ScrollMotion className="col-span-3 w-full max-w-[300px] justify-self-end" y={[160, -60]} rotate={[12, 0]}>
          <PhoneMockup src="/proyectos/movil/xpress-ecommerce.jpg" alt="" sizes="20vw" />
        </ScrollMotion>
      </div>
    </section>
  );
}
