"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import { whatsappUrl } from "@/lib/contact";
import StoreBadges from "./StoreBadges";

type Service = {
  slug?: string;
  price: number;
  period?: Record<PortfolioLang, string>;
  name: Record<PortfolioLang, string>;
  time: Record<PortfolioLang, string>;
  includes: Record<PortfolioLang, string[]>;
  image: string;
};

const services: Service[] = [
  {
    slug: "sistemas-empresariales",
    price: 1500,
    name: { es: "Sistema empresarial", en: "Business system" },
    time: { es: "Se entrega por etapas", en: "Delivered in stages" },
    includes: {
      es: ["Inventario, ventas y punto de venta", "Facturación electrónica con proveedor autorizado por el SRI", "Clientes, cobros y reportes", "Usuarios y permisos por rol"],
      en: ["Inventory, sales and point of sale", "E-invoicing through an SRI-authorized provider", "Clients, collections and reports", "Users and role permissions"],
    },
    image: "/proyectos/amz-express-panel.png",
  },
  {
    slug: "automatizacion-de-procesos",
    price: 500,
    name: { es: "Automatización", en: "Automation" },
    time: { es: "Plazo según el proceso", en: "Timeline depends on the process" },
    includes: {
      es: ["Pedidos de WhatsApp que se registran solos", "Facturas y recordatorios de pago automáticos", "Reportes diarios automáticos", "Conexión con las herramientas que ya usas"],
      en: ["WhatsApp orders logged automatically", "Automatic invoices and payment reminders", "Automatic daily reports", "Connected to the tools you already use"],
    },
    image: "/proyectos/xpress-ecommerce-catalogo.png",
  },
  {
    slug: "landing-page",
    price: 250,
    name: { es: "Landing page", en: "Landing page" },
    time: { es: "Lista en 1 a 2 semanas", en: "Ready in 1 to 2 weeks" },
    includes: {
      es: ["Una página enfocada en una sola acción", "Textos orientados a ventas", "Botón de WhatsApp y formulario", "SEO técnico y analítica"],
      en: ["One page focused on a single action", "Sales-oriented copy", "WhatsApp button and form", "Technical SEO and analytics"],
    },
    image: "/proyectos/restaurante-trattoria-inicio.png",
  },
  {
    slug: "pagina-web",
    price: 450,
    name: { es: "Página web", en: "Website" },
    time: { es: "Lista en 3 a 6 semanas", en: "Ready in 3 to 6 weeks" },
    includes: {
      es: ["Hasta 5 secciones a medida", "Diseño para celular y escritorio", "SEO técnico y Google Search Console", "Dominio y hosting configurados"],
      en: ["Up to 5 custom sections", "Mobile and desktop design", "Technical SEO and Google Search Console", "Domain and hosting set up"],
    },
    image: "/proyectos/universal-skills-catalogo.png",
  },
  {
    slug: "ecommerce",
    price: 900,
    name: { es: "Tienda online", en: "Online store" },
    time: { es: "Plazo según el catálogo", en: "Timeline depends on the catalog" },
    includes: {
      es: ["Catálogo, carrito y checkout", "Pagos y gestión de pedidos", "Panel para administrar productos", "SEO para cada producto"],
      en: ["Catalog, cart and checkout", "Payments and order management", "Panel to manage products", "SEO for every product"],
    },
    image: "/proyectos/xpress-ecommerce-inicio.png",
  },
  {
    slug: "chat-ia",
    price: 400,
    name: { es: "Chatbot de WhatsApp", en: "WhatsApp chatbot" },
    time: { es: "Plazo según tus procesos", en: "Timeline depends on your processes" },
    includes: {
      es: ["Responde precios, horarios y dudas", "Conectado a WhatsApp o a tu web", "Entrenado con la información de tu negocio", "Ajustes durante el primer mes"],
      en: ["Answers prices, hours and questions", "Connected to WhatsApp or your site", "Trained on your business information", "Adjustments during the first month"],
    },
    image: "/proyectos/amz-express-panel.png",
  },
  {
    slug: "desarrollo-android",
    price: 2500,
    name: { es: "App móvil", en: "Mobile app" },
    time: { es: "Se planifica por etapas", en: "Planned in stages" },
    includes: {
      es: ["Android e iOS", "Diseño de pantallas a medida", "Panel y API para administrarla", "Publicación en las tiendas"],
      en: ["Android and iOS", "Custom screen design", "Panel and API to manage it", "Publishing on the stores"],
    },
    image: "/proyectos/aname-inicio.png",
  },
  {
    price: 40,
    period: { es: "/mes", en: "/mo" },
    name: { es: "Mantenimiento", en: "Maintenance" },
    time: { es: "Mes a mes, sin permanencia", en: "Month to month, no lock-in" },
    includes: {
      es: ["Actualizaciones y seguridad", "Respaldos", "Cambios pequeños de contenido", "Respuesta en menos de 24 horas"],
      en: ["Updates and security", "Backups", "Small content changes", "Reply in under 24 hours"],
    },
    image: "/proyectos/xpressconvert-inicio.png",
  },
];

const allPages = [
  { slug: "sistemas-empresariales", label: "Sistemas Empresariales" },
  { slug: "automatizacion-de-procesos", label: "Automatización de Procesos" },
  { slug: "pagina-web", label: "Desarrollo de Página Web" },
  { slug: "landing-page", label: "Landing Page" },
  { slug: "desarrollo-web", label: "Desarrollo Web" },
  { slug: "ecommerce", label: "Tienda Online" },
  { slug: "desarrollo-android", label: "Desarrollo Android" },
  { slug: "desarrollo-ios", label: "Desarrollo iOS" },
  { slug: "chat-ia", label: "Chat IA" },
  { slug: "inteligencia-artificial", label: "Inteligencia Artificial" },
];

const copy = {
  es: {
    title: "Cotiza en segundos",
    text: "Elige qué necesitas y mira desde cuánto cuesta. El precio final te lo confirmamos por escrito antes de empezar, sin costos ocultos.",
    from: "desde",
    cta: "Pedir esta cotización",
    detail: "Ver el servicio en detalle",
    all: "Todos los servicios",
    choose: "Elige un servicio",
    message: (s: Service) => `Hola, quiero cotizar: ${s.name.es} (desde $${s.price.toLocaleString("es-EC")}${s.period ? s.period.es : ""}).`,
  },
  en: {
    title: "Get a price in seconds",
    text: "Pick what you need and see the starting price. We confirm the final price in writing before we start, with no hidden costs.",
    from: "from",
    cta: "Request this quote",
    detail: "See the service in detail",
    all: "All services",
    choose: "Choose a service",
    message: (s: Service) => `Hi, I'd like a quote: ${s.name.en} (from $${s.price.toLocaleString("en-US")}${s.period ? s.period.en : ""}).`,
  },
};

export default function Pricing({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const [index, setIndex] = useState(0);
  const s = services[index];
  const figure = s.price.toLocaleString(lang === "es" ? "es-EC" : "en-US");

  return (
    <section className="page-x flex min-h-[80svh] flex-col justify-center bg-surface py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 data-reveal="words" className="text-[28px] font-medium tracking-[-0.02em]"><SplitWords text={t.title} /></h2>
          <p data-reveal style={{ ["--d" as string]: "80ms" }} className="mt-4">{t.text}</p>

          <fieldset data-reveal style={{ ["--d" as string]: "160ms" }} className="mt-8">
            <legend className="mb-3 text-[15px] text-muted">{t.choose}</legend>
            <div className="flex flex-wrap gap-2">
              {services.map((item, i) => (
                <button
                  key={item.price}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-pressed={index === i}
                  className={`min-h-11 px-4 text-[15px] transition-colors duration-200 active:scale-[0.97] ${
                    index === i ? "bg-ink text-ground" : "bg-ground text-ink hover:bg-ground/60"
                  }`}
                >
                  {item.name[lang]}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className="md:col-span-7 md:col-start-6" aria-live="polite">
          <div className="relative inline-block max-w-full pt-[20vw] md:pr-[6vw] md:pt-[7vw]">
            <p className="flex items-start font-extrabold leading-[0.85] tracking-[-0.04em]">
              <span className="sr-only">{t.from} </span>
              <span className="mt-[0.08em] text-[11vw] md:text-[clamp(60px,8vw,120px)]">$</span>
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={figure}
                  initial={{ y: "40%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-40%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[22vw] md:text-[clamp(120px,16vw,240px)]"
                >
                  {figure}
                </motion.span>
              </AnimatePresence>
              {s.period && <span className="self-end pb-[0.6em] text-lg font-medium">{s.period[lang]}</span>}
            </p>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={s.image}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute right-0 top-0 aspect-[2/1] w-[34vw] overflow-hidden md:w-[15vw]"
              >
                <Image src={encodeURI(s.image)} alt="" fill sizes="(min-width: 768px) 14vw, 33vw" className="object-cover object-top" />
              </motion.div>
            </AnimatePresence>
          </div>

          <p className="mt-6 text-lg text-muted">{t.from} · {s.time[lang]}</p>
          <ul className="mt-6 space-y-1.5 text-lg">
            {s.includes[lang].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          {s.slug === "desarrollo-android" && (
            <div className="mt-6">
              <p className="mb-3 text-muted">{lang === "en" ? "We leave your app published on the stores." : "Te dejamos tu app publicada en las tiendas."}</p>
              <StoreBadges lang={lang} />
            </div>
          )}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a className="btn w-full sm:w-auto" href={whatsappUrl(t.message(s))} target="_blank" rel="noreferrer">
              {t.cta}
            </a>
            {s.slug && (
              <Link href={`/servicios/${s.slug}`} className="link">
                {t.detail}
              </Link>
            )}
          </div>
        </div>
      </div>

      <nav aria-label={t.all} className="mt-20 flex flex-wrap gap-x-6 gap-y-2 text-[15px] text-muted">
        <span className="text-ink">{t.all}:</span>
        {allPages.map((page) => (
          <Link key={page.slug} href={`/servicios/${page.slug}`} className="link">
            {page.label}
          </Link>
        ))}
      </nav>
    </section>
  );
}
