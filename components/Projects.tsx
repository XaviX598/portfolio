"use client";

import Image from "next/image";
import { useState } from "react";
import type { PortfolioLang } from "./HomeClient";

type Project = {
  name: string;
  url: string;
  image: string;
  mobile: string;
  discipline: Record<PortfolioLang, string>;
  summary: Record<PortfolioLang, string>;
};

const projects: Project[] = [
  {
    name: "AMZ Express",
    mobile: "/proyectos/movil/amz-express.jpg",
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
    mobile: "/proyectos/movil/xpress-ecommerce.jpg",
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
    mobile: "/proyectos/movil/restaurant.jpg",
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
    mobile: "/proyectos/movil/universal-skills.jpg",
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
    mobile: "/proyectos/movil/xpressconvert.jpg",
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
    mobile: "/proyectos/movil/atletismo.jpg",
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
  es: {
    title: "Proyectos en producción",
    note: "Todos están en línea: elige uno, ábrelo y pruébalo.",
    live: "En línea",
    open: "Abrir proyecto",
    choose: "Elige un proyecto",
  },
  en: {
    title: "Projects in production",
    note: "All of them are live: pick one, open it and try it.",
    live: "Live",
    open: "Open project",
    choose: "Choose a project",
  },
};

// Carta alta con la punta inferior en ángulo, como las del lobby de Valorant.
const CARD_SHAPE = "polygon(0 0, 100% 0, 100% 88%, 50% 100%, 0 88%)";

export default function Projects({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section className="page-x relative overflow-hidden bg-ground py-24 md:py-32">
      {/* Franjas planas en diagonal, sin degradados */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-[10%] bottom-0 h-[60%] w-[45%] bg-[#0f1923]" style={{ clipPath: "polygon(0 35%, 100% 100%, 0 100%)" }} />
        <div className="absolute -right-[5%] top-[30%] h-[55%] w-[40%] bg-[#bd3944]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 30%)" }} />
      </div>

      <div className="relative">
        <div className="mb-12 flex flex-col gap-3 md:mb-16 md:flex-row md:items-end md:justify-between">
          <h2 data-reveal className="text-[11vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[5.4vw]">{t.title}</h2>
          <p data-reveal className="max-w-[32ch] text-lg">{t.note}</p>
        </div>

        {/* Escritorio: fila de cartas; la elegida se agranda */}
        <div className="hidden items-end justify-center gap-3 md:flex" role="group" aria-label={t.choose}>
          {projects.map((p, i) => {
            const isActive = active === i;
            return (
              <button
                key={p.name}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`group relative shrink-0 overflow-hidden bg-[#0f1923] text-left transition-[width,height] duration-500 [transition-timing-function:var(--ease-out)] ${
                  isActive ? "h-[560px] w-[clamp(240px,21vw,310px)]" : "h-[460px] w-[clamp(110px,9.5vw,150px)]"
                }`}
                style={{ clipPath: CARD_SHAPE }}
              >
                <Image
                  src={p.mobile}
                  alt={`${p.name} en celular`}
                  fill
                  sizes="22vw"
                  className={`object-cover object-top transition-[opacity,filter,transform] duration-500 ${
                    isActive ? "opacity-100" : "opacity-40 grayscale group-hover:opacity-60"
                  }`}
                />
                <span className={`absolute inset-x-0 top-0 h-1.5 ${isActive ? "bg-[#ece8e1]" : "bg-[#ff4655]"}`} />
                <span className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-[#0f1923] px-3 pb-[16%] pt-4 text-center">
                  {isActive && <span className="text-[15px] font-medium text-[#ff4655]">{t.live}</span>}
                  <span className={`font-extrabold leading-tight tracking-[-0.02em] text-[#ece8e1] ${isActive ? "mt-1 text-2xl" : "text-[15px]"}`}>
                    {p.name}
                  </span>
                  {isActive && <span className="text-[15px] text-[#a4adb4]">{p.discipline[lang]}</span>}
                </span>
              </button>
            );
          })}
        </div>

        {/* Móvil: carta grande del proyecto elegido y selector debajo */}
        <div className="md:hidden">
          <div className="relative mx-auto h-[120vw] max-h-[560px] w-[72%] max-w-[300px] overflow-hidden bg-[#0f1923]" style={{ clipPath: CARD_SHAPE }}>
            <Image key={current.mobile} src={current.mobile} alt={`${current.name} en celular`} fill sizes="72vw" className="object-cover object-top" />
            <span className="absolute inset-x-0 top-0 h-1.5 bg-[#ece8e1]" />
            <span className="absolute inset-x-0 bottom-0 flex flex-col items-center bg-[#0f1923] px-3 pb-[16%] pt-4 text-center">
              <span className="text-[15px] font-medium text-[#ff4655]">{t.live}</span>
              <span className="mt-1 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-[#ece8e1]">{current.name}</span>
              <span className="text-[15px] text-[#a4adb4]">{current.discipline[lang]}</span>
            </span>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2" role="group" aria-label={t.choose}>
            {projects.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={`min-h-12 px-2 py-2 text-[15px] font-medium leading-tight transition-colors ${
                  active === i ? "bg-[#0f1923] text-[#ece8e1]" : "bg-[#0f1923]/15 text-[#0f1923]"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="relative mt-12 flex flex-col gap-5 bg-[#0f1923] p-5 text-[#ece8e1] md:mx-auto md:max-w-3xl md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-[46ch] text-lg">{current.summary[lang]}</p>
          <a className="btn shrink-0 !bg-[#ff4655] !text-[#0f1923]" href={current.url} target="_blank" rel="noreferrer">
            {t.open} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
