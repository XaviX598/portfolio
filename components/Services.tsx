"use client";

import Link from "next/link";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type ServicesProps = {
  lang: PortfolioLang;
};

type ServiceItem = {
  title: string;
  desc: string;
  icon: string;
  price: string;
  slug?: string;
};

const servicePages = [
  { slug: "pagina-web", label: "Desarrollo de Página Web" },
  { slug: "landing-page", label: "Landing Page" },
  { slug: "desarrollo-web", label: "Desarrollo Web" },
  { slug: "ecommerce", label: "Tienda Online" },
  { slug: "desarrollo-android", label: "Desarrollo Android" },
  { slug: "desarrollo-ios", label: "Desarrollo iOS" },
  { slug: "chat-ia", label: "Chat IA" },
  { slug: "inteligencia-artificial", label: "Inteligencia Artificial" },
];

const servicesData: Record<PortfolioLang, ServiceItem[]> = {
  es: [
    { title: "Páginas Web", desc: "Una web profesional que transmite confianza, aparece en Google y convierte visitas en mensajes.", icon: "🌐", price: "Desde $450", slug: "pagina-web" },
    { title: "Landing Pages", desc: "Páginas de una sola misión: que tu anuncio o campaña se convierta en clientes.", icon: "🎯", price: "Desde $250", slug: "landing-page" },
    { title: "Tiendas Online", desc: "Vende las 24 horas con catálogo, carrito, pagos y gestión de pedidos sin complicaciones.", icon: "🛒", price: "Desde $900", slug: "ecommerce" },
    { title: "Apps Móviles", desc: "Apps para Android e iOS que tus clientes usan a diario, listas para publicar en las tiendas.", icon: "📱", price: "Desde $2.500", slug: "desarrollo-android" },
    { title: "Chatbots con IA", desc: "Responde precios, horarios y dudas por WhatsApp o tu web de forma automática, todo el día.", icon: "🤖", price: "Desde $400", slug: "chat-ia" },
    { title: "Automatización con IA", desc: "Ahorra horas de trabajo manual automatizando reportes, procesos y atención.", icon: "⚡", price: "Desde $500", slug: "inteligencia-artificial" },
    { title: "Sistemas a Medida", desc: "Software de gestión, paneles y plataformas hechas exactamente para cómo opera tu empresa.", icon: "🧩", price: "Desde $1.500", slug: "desarrollo-web" },
    { title: "Mantenimiento", desc: "Actualizaciones, seguridad, respaldos y mejoras continuas para que nada se caiga.", icon: "🛠️", price: "Desde $40/mes" },
  ],
  en: [
    { title: "Websites", desc: "A professional site that builds trust, shows up on Google and turns visits into messages.", icon: "🌐", price: "From $450", slug: "pagina-web" },
    { title: "Landing Pages", desc: "Single-mission pages that turn your ads and campaigns into clients.", icon: "🎯", price: "From $250", slug: "landing-page" },
    { title: "Online Stores", desc: "Sell 24/7 with catalog, cart, payments and hassle-free order management.", icon: "🛒", price: "From $900", slug: "ecommerce" },
    { title: "Mobile Apps", desc: "Android and iOS apps your clients use every day, ready to publish on the stores.", icon: "📱", price: "From $2,500", slug: "desarrollo-android" },
    { title: "AI Chatbots", desc: "Answer prices, hours and questions on WhatsApp or your site automatically, all day long.", icon: "🤖", price: "From $400", slug: "chat-ia" },
    { title: "AI Automation", desc: "Save hours of manual work by automating reports, processes and customer service.", icon: "⚡", price: "From $500", slug: "inteligencia-artificial" },
    { title: "Custom Systems", desc: "Management software, dashboards and platforms built exactly for how your company operates.", icon: "🧩", price: "From $1,500", slug: "desarrollo-web" },
    { title: "Maintenance", desc: "Updates, security, backups and continuous improvements so nothing breaks.", icon: "🛠️", price: "From $40/mo" },
  ],
};

function ServiceCard({ service, lang }: { service: ServiceItem; lang: PortfolioLang }) {
  const body = (
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/40 hover:bg-zinc-900">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl transition-transform duration-300 group-hover:scale-110">
        <span className="grayscale transition-[filter] duration-300 group-hover:grayscale-0">{service.icon}</span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-white">{service.title}</h3>
      <p className="mt-1 text-sm font-semibold text-teal-400">{service.price}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{service.desc}</p>
      {service.slug && (
        <span className="mt-5 text-sm font-medium text-teal-400 transition-transform duration-300 group-hover:translate-x-1">
          {lang === "en" ? "Learn more →" : "Ver más →"}
        </span>
      )}
    </div>
  );

  return service.slug ? (
    <Link href={`/servicios/${service.slug}`} className="block h-full">
      {body}
    </Link>
  ) : (
    body
  );
}

export default function Services({ lang }: ServicesProps) {
  const t = servicesData[lang];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 px-6 py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn repeat={false} className="mb-12 md:mb-14">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] text-teal-400">
              {lang === "en" ? "Services" : "Servicios"}
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            {lang === "en" ? "What we build for your business" : "Qué construimos para tu negocio"}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-zinc-400">
            {lang === "en"
              ? "Digital solutions designed to attract clients, sell more and save you time. Starting prices in USD; we confirm the final price in writing."
              : "Soluciones digitales pensadas para atraer clientes, vender más y ahorrarte tiempo. Precios de referencia en USD; el precio final te lo confirmamos por escrito."}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.map((service, idx) => (
            <FadeIn key={service.title} delay={(idx % 4) * 0.08} repeat={false} distance={24} className="h-full">
              <ServiceCard service={service} lang={lang} />
            </FadeIn>
          ))}
        </div>

        <FadeIn repeat={false} delay={0.2} className="mt-12 text-center">
          <p className="text-sm text-zinc-500">
            {lang === "en" ? "Explore each service in detail" : "Conoce cada servicio en detalle"}
          </p>
          <nav aria-label={lang === "en" ? "Services" : "Servicios"} className="mt-4 flex flex-wrap justify-center gap-2">
            {servicePages.map((page) => (
              <Link
                key={page.slug}
                href={`/servicios/${page.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-teal-400/50 hover:text-white"
              >
                {page.label}
              </Link>
            ))}
          </nav>
        </FadeIn>
      </div>
    </section>
  );
}
