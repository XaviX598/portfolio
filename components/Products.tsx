"use client";

import Image from "next/image";
import Link from "next/link";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import ScrollMotion from "./ScrollMotion";
import PhoneMockup from "./PhoneMockup";
import AutomationFlow from "./AutomationFlow";
import { whatsappUrl } from "@/lib/contact";

const copy = {
  es: {
    title: "Dos productos, un solo objetivo",
    lead: "Que tu negocio funcione ordenado, con datos reales y sin tareas repetitivas.",
    from: "desde",
    detail: "Ver en detalle",
    systems: {
      name: "Sistemas empresariales",
      text: "Todo tu negocio en un solo sistema, hecho a la medida de cómo trabajas. Adiós a los Excel sueltos.",
      items: [
        "Inventario y bodegas en tiempo real",
        "Ventas, cotizaciones y punto de venta",
        "Facturación electrónica con un proveedor autorizado por el SRI",
        "Clientes, cuentas por cobrar y seguimiento",
        "Reportes y paneles para decidir con datos",
        "Usuarios y permisos por rol",
      ],
      price: "$1.500",
      cta: "Cotizar un sistema",
      message: "Hola, quiero cotizar un sistema empresarial para mi negocio.",
      slug: "sistemas-empresariales",
      alt: "Panel de AMZ Express, sistema empresarial desarrollado por Xpress Developer",
    },
    automation: {
      name: "Automatización de procesos",
      text: "Conectamos tus herramientas para que las tareas repetitivas se hagan solas, sin errores y a cualquier hora.",
      items: [
        "Pedidos y consultas por WhatsApp que se registran solos",
        "Facturas y recordatorios de pago automáticos",
        "Reportes diarios en tu correo o WhatsApp",
        "Datos sincronizados entre Excel, tu sistema y tu tienda",
        "Seguimiento automático de clientes potenciales",
        "Alertas de stock bajo y vencimientos",
      ],
      price: "$500",
      cta: "Cotizar una automatización",
      message: "Hola, quiero automatizar procesos de mi negocio.",
      slug: "automatizacion-de-procesos",
      flow: ["Llega un pedido por WhatsApp", "Se registra en tu sistema", "Se emite la factura", "El cliente la recibe al instante"],
      done: "Listo, sin que nadie lo hiciera a mano.",
    },
  },
  en: {
    title: "Two products, one goal",
    lead: "A business that runs organized, with real data and no repetitive tasks.",
    from: "from",
    detail: "See details",
    systems: {
      name: "Business systems",
      text: "Your whole business in one system, built around how you work. No more scattered spreadsheets.",
      items: [
        "Real-time inventory and warehouses",
        "Sales, quotes and point of sale",
        "E-invoicing through an SRI-authorized provider",
        "Clients, receivables and follow-up",
        "Reports and dashboards to decide with data",
        "Users and role permissions",
      ],
      price: "$1,500",
      cta: "Quote a system",
      message: "Hi, I'd like a quote for a business system.",
      slug: "sistemas-empresariales",
      alt: "AMZ Express dashboard, a business system built by Xpress Developer",
    },
    automation: {
      name: "Process automation",
      text: "We connect your tools so repetitive tasks run on their own, error-free, at any hour.",
      items: [
        "WhatsApp orders and questions logged automatically",
        "Automatic invoices and payment reminders",
        "Daily reports in your email or WhatsApp",
        "Data synced between Excel, your system and your store",
        "Automatic follow-up with leads",
        "Low-stock and due-date alerts",
      ],
      price: "$500",
      cta: "Quote an automation",
      message: "Hi, I'd like to automate processes in my business.",
      slug: "automatizacion-de-procesos",
      flow: ["An order arrives on WhatsApp", "It's logged in your system", "The invoice is issued", "The client gets it instantly"],
      done: "Done, without anyone doing it by hand.",
    },
  },
};

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-[0.55em] h-1.5 w-3 shrink-0 bg-accent" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Products({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const products = [
    { ...t.systems, visual: "systems" as const },
    { ...t.automation, visual: "automation" as const },
  ];

  return (
    <section className="page-x bg-ground py-24 md:py-36">
      <div className="mb-14 flex flex-col gap-4 md:mb-20 md:flex-row md:items-end md:justify-between">
        <h2 data-reveal="words" className="max-w-[14ch] text-[11vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[5.4vw]">
          <SplitWords text={t.title} />
        </h2>
        <p data-reveal className="max-w-[34ch] text-lg">{t.lead}</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {products.map((p, i) => (
          <article key={p.slug} data-reveal data-tilt style={{ ["--tilt" as string]: i ? "3deg" : "-3deg", ["--d" as string]: `${i * 120}ms` }} className="flex flex-col bg-surface p-6 md:p-10">
            {p.visual === "systems" ? (
              <div className="relative mb-10">
                <ScrollMotion className="relative aspect-[1843/910] overflow-hidden" y={[30, -20]} scale={[0.92, 1]}>
                  <Image src="/proyectos/amz-express-panel.png" alt={t.systems.alt} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover object-top" />
                </ScrollMotion>
                <ScrollMotion className="absolute -bottom-8 right-4 w-[24%]" y={[80, -10]} rotate={[10, 0]}>
                  <PhoneMockup src="/proyectos/movil/amz-express.jpg" alt="" sizes="12vw" />
                </ScrollMotion>
              </div>
            ) : (
              <div className="mb-10">
                <AutomationFlow steps={t.automation.flow} done={t.automation.done} />
              </div>
            )}

            <h3 className="text-[32px] font-extrabold leading-none tracking-[-0.03em] md:text-[40px]">{p.name}</h3>
            <p className="mt-4 max-w-[46ch] text-lg">{p.text}</p>
            <ItemList items={p.items} />

            <div className="mt-auto flex flex-col gap-5 pt-24 sm:flex-row sm:items-end sm:justify-between">
              <p className="font-extrabold leading-none tracking-[-0.04em]">
                <span className="text-[22px] font-medium tracking-normal text-muted">{t.from} </span>
                <span className="text-[56px] md:text-[64px]">{p.price}</span>
              </p>
              <div className="flex flex-col gap-3 sm:items-end">
                <a className="btn" href={whatsappUrl(p.message)} target="_blank" rel="noreferrer">
                  {p.cta}
                </a>
                <Link href={`/servicios/${p.slug}`} className="link text-[15px]">
                  {t.detail}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
