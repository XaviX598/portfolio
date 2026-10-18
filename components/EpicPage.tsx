"use client";

import Hero from "./Hero";
import Problem from "./Problem";
import JourneyMotion from "./JourneyMotion";
import Projects from "./Projects";
import Pricing from "./Pricing";
import WhyUs from "./WhyUs";
import Process from "./Process";
import ClarityAudit from "./ClarityAudit";
import FAQ from "./FAQ";
import ClosingCta from "./ClosingCta";
import Products from "./Products";
import Clients from "./Clients";
import WhatsAppAuto from "./WhatsAppAuto";
import SceneStage from "./SceneStage";
import Contact from "./Contact";
import SectionReveal from "./SectionReveal";
import type { ReactNode } from "react";
import type { PortfolioLang } from "./HomeClient";

type Entry = { id: string; component: (props: { lang: PortfolioLang }) => ReactNode; theme: string };

// Orden del argumento de venta y tema de color de cada sección. Los fondos se alternan
// (azul noche, crema, rojo). Un grupo entre corchetes es un escenario fijo: la pantalla
// se queda quieta y las secciones se reemplazan con un barrido mientras se hace scroll.
const sections: (Entry | Entry[])[] = [
  { id: "intro", component: Problem, theme: "theme-light" },
  { id: "products", component: Products, theme: "theme-dark" },
  [
    { id: "whatsapp", component: WhatsAppAuto, theme: "theme-light" },
    { id: "clients", component: Clients, theme: "theme-dark" },
  ],
  { id: "projects", component: Projects, theme: "theme-red" },
  { id: "pricing", component: Pricing, theme: "theme-light" },
  { id: "why-us", component: WhyUs, theme: "theme-dark" },
  { id: "process", component: Process, theme: "theme-light" },
  { id: "journey", component: JourneyMotion, theme: "theme-dark" },
  { id: "faq", component: FAQ, theme: "theme-light" },
  { id: "free-review", component: ClarityAudit, theme: "theme-dark" },
  [
    { id: "cta", component: ClosingCta, theme: "theme-red" },
    { id: "contact", component: Contact, theme: "theme-dark" },
  ],
];

export default function EpicPage({ lang }: { lang: PortfolioLang }) {
  return (
    <>
      <div id="hero" className="relative">
        <Hero lang={lang} />
      </div>
      {sections.map((entry) =>
        Array.isArray(entry) ? (
          <SceneStage
            key={entry[0].id}
            scenes={entry.map(({ id, component: Component, theme }) => ({ id, theme, node: <Component lang={lang} /> }))}
          />
        ) : (
          <SectionReveal key={entry.id} id={entry.id} className={entry.theme}>
            <entry.component lang={lang} />
          </SectionReveal>
        ),
      )}
    </>
  );
}
