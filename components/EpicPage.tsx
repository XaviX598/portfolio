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
import type { PortfolioLang } from "./HomeClient";

// Orden del argumento de venta: nombre → por qué importa → cómo llega el cliente → prueba →
// precio → cómo trabajamos → oferta gratis → dudas → cierre → contacto.
const sections = [
  { id: "hero", component: Hero },
  { id: "intro", component: Problem },
  { id: "journey", component: JourneyMotion },
  { id: "projects", component: Projects },
  { id: "pricing", component: Pricing },
  { id: "why-us", component: WhyUs },
  { id: "process", component: Process },
  { id: "free-review", component: ClarityAudit },
  { id: "faq", component: FAQ },
  { id: "cta", component: ClosingCta },
  { id: "contact", component: Contact },
];

export default function EpicPage({ lang }: { lang: PortfolioLang }) {
  return (
    <>
      {sections.map(({ id, component: Component }) => (
        <div key={id} id={id} className="relative">
          <Component lang={lang} />
        </div>
      ))}
    </>
  );
}
