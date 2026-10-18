"use client";

import Image from "next/image";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import TypeText from "./TypeText";
import ScrollMotion from "./ScrollMotion";
import PhoneMockup from "./PhoneMockup";

const copy = {
  es: {
    title: "Menos Excel, más negocio",
    note: "Inventario en hojas sueltas, facturas a mano y pedidos de WhatsApp que se pierden. Lo convertimos en un sistema y en procesos que trabajan solos.",
    facts: [
      { value: "$1.500", label: "desde, por un sistema a medida" },
      { value: "$500", label: "desde, por una automatización" },
      { value: "24 h", label: "para responderte con un plan" },
      { value: "100%", label: "código y datos a tu nombre" },
    ],
    alt: "Panel de AMZ Express, sistema empresarial desarrollado por Xpress Developer",
  },
  en: {
    title: "Less Excel, more business",
    note: "Inventory in scattered sheets, invoices by hand and WhatsApp orders that get lost. We turn it into one system and processes that run on their own.",
    facts: [
      { value: "$1,500", label: "and up, for a custom system" },
      { value: "$500", label: "and up, for an automation" },
      { value: "24 h", label: "to reply with a plan" },
      { value: "100%", label: "code and data in your name" },
    ],
    alt: "AMZ Express dashboard, a business system built by Xpress Developer",
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
        <PhoneMockup src="/proyectos/movil/amz-express.jpg" alt={t.alt} sizes="60vw" className="mx-auto w-[58%] max-w-[260px]" />
      </ScrollMotion>

      <div className="mt-24 hidden items-end gap-8 md:grid md:grid-cols-12">
        <ScrollMotion className="relative col-span-9 aspect-[1843/910] overflow-hidden bg-ground" y={[50, -30]} scale={[0.9, 1]}>
          <Image src="/proyectos/amz%20express%202.png" alt={t.alt} fill sizes="75vw" className="object-cover object-top" />
        </ScrollMotion>
        <ScrollMotion className="col-span-3 w-full max-w-[300px] justify-self-end" y={[160, -60]} rotate={[12, 0]}>
          <PhoneMockup src="/proyectos/movil/amz-express.jpg" alt="" sizes="20vw" />
        </ScrollMotion>
      </div>
    </section>
  );
}
