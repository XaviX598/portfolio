"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioLang } from "./HomeClient";

type Project = {
  name: string;
  url: string;
  image: string;
  discipline: Record<PortfolioLang, string>;
  summary: Record<PortfolioLang, string>;
};

const projects: Project[] = [
  {
    name: "AMZ Express",
    url: "https://amz-express.vercel.app",
    image: "/proyectos/amz express.png",
    discipline: { es: "Plataforma web", en: "Web platform" },
    summary: {
      es: "Cotiza compras de Amazon hacia Ecuador en segundos, con paneles para clientes y administradores.",
      en: "Quotes Amazon purchases to Ecuador in seconds, with panels for clients and admins.",
    },
  },
  {
    name: "Xpress Ecommerce",
    url: "https://xpress-ecommerce.vercel.app",
    image: "/proyectos/xpress ecommerce.png",
    discipline: { es: "Tienda online", en: "Online store" },
    summary: {
      es: "Catálogo, carrito, checkout e historial de pedidos, lista para vender.",
      en: "Catalog, cart, checkout and order history, ready to sell.",
    },
  },
  {
    name: "Restaurant Landing",
    url: "https://project-restaurante-delta.vercel.app",
    image: "/proyectos/restaurant.png",
    discipline: { es: "Landing page", en: "Landing page" },
    summary: {
      es: "Menú visual y animaciones pensadas para atraer comensales.",
      en: "Visual menu and animations designed to attract diners.",
    },
  },
  {
    name: "Universal Skills Hub",
    url: "https://universal-skills-hub.vercel.app",
    image: "/proyectos/universal skills.png",
    discipline: { es: "Plataforma web", en: "Web platform" },
    summary: {
      es: "Más de 85.000 skills de IA en un catálogo rápido y fácil de explorar.",
      en: "85,000+ AI skills in a fast catalog that's easy to explore.",
    },
  },
  {
    name: "XpressConvert",
    url: "https://xpressconvert.vercel.app",
    image: "/proyectos/xpress convert .png",
    discipline: { es: "Herramienta web", en: "Web tool" },
    summary: {
      es: "Convierte imágenes, PDF, documentos, audio y video sin instalar nada.",
      en: "Converts images, PDFs, documents, audio and video without installing anything.",
    },
  },
  {
    name: "Athletics System",
    url: "https://frontend-atletismo.vercel.app",
    image: "/proyectos/pagina de atleta .png",
    discipline: { es: "Web, API y Android", en: "Web, API and Android" },
    summary: {
      es: "Sistema para gestionar atletas: aplicación web, API y app Android conectadas.",
      en: "A system to manage athletes: web app, API and Android app working together.",
    },
  },
];

const copy = {
  es: { title: "Proyectos en producción", note: "Todos están en línea: ábrelos y pruébalos." },
  en: { title: "Projects in production", note: "All of them are live: open them and try them." },
};

export default function Projects({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const [active, setActive] = useState(0);

  return (
    <section className="page-x bg-ground py-28 md:py-40">
      <h2 data-reveal className="mb-12 text-[28px] font-medium tracking-[-0.02em]">{t.title}</h2>

      <div className="grid gap-10 md:grid-cols-12">
        <ul className="md:col-span-8">
          {projects.map((p, i) => (
            <li key={p.name} className="mb-10 md:mb-0" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
              <div className="relative mb-4 aspect-[16/10] overflow-hidden md:hidden">
                <Image src={encodeURI(p.image)} alt={p.name} fill sizes="100vw" className="object-cover object-left-top" />
              </div>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex flex-col py-2.5 md:flex-row md:items-baseline md:gap-5"
              >
                <span
                  className={`text-[9.5vw] font-extrabold leading-none tracking-[-0.035em] transition-colors duration-200 md:text-[5.4vw] ${
                    active === i ? "md:text-ink" : "md:text-muted"
                  }`}
                >
                  {p.name}
                </span>
                <span className="mt-1 text-[15px] text-muted md:hidden">{p.discipline[lang]}</span>
              </a>
              <p className="max-w-[46ch] text-muted md:hidden">{p.summary[lang]}</p>
            </li>
          ))}
          <li className="mt-6 text-muted">{t.note}</li>
        </ul>

        <div className="hidden md:col-span-4 md:block">
          <div className="sticky top-[15vh]">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
              {projects.map((p, i) => (
                <Image
                  key={p.name}
                  src={encodeURI(p.image)}
                  alt={p.name}
                  fill
                  sizes="26vw"
                  className={`object-cover object-left-top transition-[opacity,transform] duration-500 ${
                    active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 text-[15px] text-muted">{projects[active].discipline[lang]}</p>
            <p className="mt-1">{projects[active].summary[lang]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
