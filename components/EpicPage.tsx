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
import Contact from "./Contact";
import SectionReveal from "./SectionReveal";
import type { PortfolioLang } from "./HomeClient";

// Orden del argumento de venta y tema de color de cada sección. Los fondos se alternan
// (azul noche, crema, rojo) para que el contraste aparezca desde el principio.
const sections = [
  { id: "intro", component: Problem, theme: "theme-light" },
  { id: "journey", component: JourneyMotion, theme: "theme-dark" },
  { id: "projects", component: Projects, theme: "theme-red" },
  { id: "pricing", component: Pricing, theme: "theme-light" },
  { id: "why-us", component: WhyUs, theme: "theme-dark" },
  { id: "process", component: Process, theme: "theme-light" },
  { id: "free-review", component: ClarityAudit, theme: "theme-dark" },
  { id: "faq", component: FAQ, theme: "theme-light" },
  { id: "cta", component: ClosingCta, theme: "theme-red" },
  { id: "contact", component: Contact, theme: "theme-dark" },
];

export default function EpicPage({ lang }: { lang: PortfolioLang }) {
  return (
    <>
      <div id="hero" className="relative">
        <Hero lang={lang} />
      </div>
      {sections.map(({ id, component: Component, theme }) => (
        <SectionReveal key={id} id={id} className={theme}>
          <Component lang={lang} />
        </SectionReveal>
      ))}
    </>
  );
}
