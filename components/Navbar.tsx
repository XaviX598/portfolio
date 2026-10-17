"use client";

import Link from "next/link";
import type { PortfolioLang } from "./HomeClient";
import { navigateToSection } from "@/lib/navigation";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";

type NavbarProps = {
  lang: PortfolioLang;
  onLangChange: (lang: PortfolioLang) => void;
};

const links = [
  { id: "projects", es: "Proyectos", en: "Work" },
  { id: "pricing", es: "Precios", en: "Pricing" },
  { id: "process", es: "Proceso", en: "Process" },
];

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  return (
    <header className="page-x absolute inset-x-0 top-0 z-50 flex items-center justify-between py-6 text-[15px]">
      <Link href="/" className="text-lg font-extrabold tracking-[-0.03em]" aria-label="Xpress Developer">
        X
      </Link>
      <nav className="flex items-center gap-5 md:gap-7" aria-label={lang === "en" ? "Main" : "Principal"}>
        {links.map((l) => (
          <button key={l.id} type="button" onClick={() => navigateToSection(l.id)} className="link hidden no-underline hover:underline md:inline">
            {l[lang]}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onLangChange(lang === "es" ? "en" : "es")}
          className="link no-underline hover:underline"
          aria-label={lang === "es" ? "Switch to English" : "Cambiar a español"}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
        <a className="link" href={whatsappUrl(QUOTE_MESSAGE[lang])} target="_blank" rel="noreferrer">
          {lang === "en" ? "Get a quote" : "Cotizar"}
        </a>
      </nav>
    </header>
  );
}
