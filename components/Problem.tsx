"use client";

import Image from "next/image";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import TypeText from "./TypeText";
import ScrollMotion from "./ScrollMotion";
import PhoneMockup from "./PhoneMockup";
import CountUp from "./CountUp";

const works = [
  { image: "/proyectos/amz-express-panel.png", mobile: "/proyectos/movil/amz-express.jpg", name: "AMZ Express" },
  { image: "/proyectos/xpress-ecommerce-catalogo.png", mobile: "/proyectos/movil/xpress-ecommerce.jpg", name: "Xpress Ecommerce" },
  { image: "/proyectos/restaurante-trattoria-menu.png", mobile: "/proyectos/movil/restaurant.jpg", name: "Trattoria Roma" },
  { image: "/proyectos/aname-inicio.png", mobile: "/proyectos/movil/atletismo.jpg", name: "ANAME" },
];

const copy = {
  es: {
    title: "Menos Excel, más negocio",
    note: "Inventario en hojas sueltas, facturas a mano y pedidos de WhatsApp que se pierden. Lo convertimos en un sistema y en procesos que trabajan solos.",
    from: "desde",
    facts: [
      { from: true, value: "$1.500", label: "Sistemas a medida para tu negocio" },
      { from: true, value: "$500", label: "Automatizaciones para tu negocio" },
      { from: false, value: "24 h", label: "Para responderte con un plan" },
      { from: false, value: "100%", label: "Del código y los datos, a tu nombre" },
    ],
    works: [
      "Software para una empresa de importaciones",
      "Tienda en línea para un comercio",
      "Software para un restaurante",
      "Sistema para una asociación deportiva",
    ],
  },
  en: {
    title: "Less Excel, more business",
    note: "Inventory in scattered sheets, invoices by hand and WhatsApp orders that get lost. We turn it into one system and processes that run on their own.",
    from: "from",
    facts: [
      { from: true, value: "$1,500", label: "Custom systems for your business" },
      { from: true, value: "$500", label: "Automations for your business" },
      { from: false, value: "24 h", label: "To reply with a plan" },
      { from: false, value: "100%", label: "Of the code and data, in your name" },
    ],
    works: [
      "Software for an import company",
      "Online store for a retailer",
      "Software for a restaurant",
      "System for a sports association",
    ],
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
            <dt className="text-[26px] font-medium leading-none tracking-[-0.02em] md:text-[clamp(28px,3vw,44px)]">
              {f.from && <span className="mr-1.5 text-[15px] font-normal tracking-normal text-muted">{t.from}</span>}
              <CountUp value={f.value} />
            </dt>
            <dd className="mt-2 max-w-[22ch] text-[15px] text-muted">{f.label}</dd>
          </div>
        ))}
      </dl>

      {/* Varios trabajos reales, presentados por el tipo de negocio para el que se hicieron. */}
      <ul className="mt-24 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-32 md:gap-x-8 md:gap-y-16">
        {works.map((w, i) => (
          <li key={w.name}>
            <ScrollMotion className="relative hidden aspect-[2/1] overflow-hidden bg-ground md:block" y={[i % 2 ? 110 : 50, -30]} scale={[0.92, 1]}>
              <Image src={w.image} alt={`${t.works[i]} · ${w.name}`} fill sizes="45vw" className="object-cover object-top" />
            </ScrollMotion>
            <ScrollMotion className="md:hidden" y={[30, 0]} rotate={[i % 2 ? 8 : -8, 0]}>
              <PhoneMockup src={w.mobile} alt={`${t.works[i]} · ${w.name}`} sizes="35vw" className="mx-auto w-[82%]" />
            </ScrollMotion>
            <p data-reveal className="mt-5 text-[16px] font-medium leading-snug md:mt-6 md:text-[22px]">{t.works[i]}</p>
            <p className="mt-1 text-[14px] text-muted md:text-[15px]">{w.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
