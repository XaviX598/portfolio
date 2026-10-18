"use client";

import Image from "next/image";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";

const logos = [
  { src: "/clientes/titania.png", name: "Titania Tracking Solutions", w: 1180, h: 740 },
  { src: "/clientes/concentracion-deportiva-pichincha.png", name: "Concentración Deportiva de Pichincha", w: 1560, h: 733 },
];

export default function Clients({ lang }: { lang: PortfolioLang }) {
  return (
    <section className="page-x bg-ground py-20 md:py-28">
      <h2 data-reveal="words" className="mx-auto max-w-[32ch] text-center text-[24px] font-medium leading-tight tracking-[-0.02em] md:text-[40px]">
        <SplitWords text={lang === "en" ? "Our developers work for the best companies" : "Nuestros desarrolladores trabajan para las mejores empresas"} />
      </h2>
      <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:mt-20 md:gap-x-28">
        {logos.map((logo, i) => (
          <li key={logo.name} data-reveal data-tilt style={{ ["--tilt" as string]: i ? "4deg" : "-4deg", ["--d" as string]: `${i * 120}ms` }}>
            <Image
              src={logo.src}
              alt={logo.name}
              width={logo.w}
              height={logo.h}
              sizes="320px"
              className="h-20 w-auto opacity-90 transition-opacity duration-300 hover:opacity-100 md:h-28"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
