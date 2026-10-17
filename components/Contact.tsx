"use client";

import type { PortfolioLang } from "./HomeClient";

const EMAIL = "contacto@xpressdeveloper.com";

// El email como tipografía de exhibición: es el único llamado de la sección.
export default function Contact({ lang }: { lang: PortfolioLang }) {
  const [user, domain] = EMAIL.split("@");

  return (
    <section className="page-x relative flex min-h-[86svh] flex-col justify-between bg-ground py-16 md:min-h-svh md:py-10">
      <p data-reveal className="max-w-[28ch] text-lg md:text-[22px]">
        {lang === "en"
          ? "Write to us about your business and what you want to achieve."
          : "Escríbenos sobre tu negocio y lo que quieres lograr."}
      </p>

      <a
        href={`mailto:${EMAIL}?subject=${encodeURIComponent(lang === "en" ? "Quote for my business" : "Cotización para mi negocio")}`}
        data-reveal
        className="my-16 block font-normal leading-[0.95] tracking-[-0.04em] transition-colors duration-200 hover:text-accent md:mb-[12vh]"
      >
        <span className="block text-[11.5vw] md:text-[6.6vw]">{user}@</span>
        <span className="block text-[11.5vw] md:text-[6.6vw]">{domain}</span>
      </a>

      <div className="flex flex-col gap-3 text-[15px] md:flex-row md:justify-between">
        <p>
          <a className="link" href="tel:+593985295277">+593 98 529 5277</a> · Ecuador
        </p>
        <p className="flex gap-5">
          <a className="link" href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="link" href="https://wa.me/593985295277" target="_blank" rel="noreferrer">WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
