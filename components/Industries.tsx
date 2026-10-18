"use client";

import { useState } from "react";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import Link from "next/link";
import { whatsappUrl } from "@/lib/contact";

type Industry = { name: string; pain: string; items: string[]; example?: string; page?: string };

const copy: Record<PortfolioLang, { title: string; lead: string; example: string; more: string; cta: string; message: (name: string) => string; tools: string; industries: Industry[] }> = {
  es: {
    title: "¿Qué automatizamos en tu negocio?",
    lead: "Elige tu rubro y mira todo lo que dejaría de hacerse a mano.",
    example: "Ejemplo real",
    more: "Ver la solución completa",
    cta: "Quiero esto en mi negocio",
    message: (name) => `Hola, tengo un negocio de ${name.toLowerCase()} y quiero automatizar procesos.`,
    tools: "Se conecta con lo que ya usas: WhatsApp Business, Gmail, Excel y Google Sheets, Google Calendar, Shopify, WooCommerce, PayPal, Stripe y tu facturación electrónica.",
    industries: [
      {
        name: "Restaurantes",
        page: "sistema-para-restaurantes",
        pain: "Reservas y pedidos que llegan a toda hora, mientras la cocina está llena.",
        items: ["Reservas por WhatsApp las 24 horas", "Pedidos a domicilio directo a cocina", "Menú del día y promociones enviadas solas", "Alertas cuando un insumo se está acabando"],
        example: "Trattoria Roma",
      },
      {
        name: "Tiendas y e-commerce",
        page: "sistema-para-tiendas",
        pain: "Clientes que preguntan precio, stock y envío una y otra vez.",
        items: ["Catálogo y precios respondidos al instante", "Link de pago y confirmación automática", "Stock sincronizado entre local y tienda en línea", "Aviso de envío y seguimiento al cliente"],
        example: "Xpress Ecommerce",
      },
      {
        name: "Importadoras",
        page: "software-para-importadoras",
        pain: "Cotizaciones a mano y clientes preguntando dónde está su pedido.",
        items: ["Cotizaciones calculadas en segundos", "Avisos automáticos en cada etapa del envío", "Inventario por bodega en tiempo real", "Factura electrónica al despachar"],
        example: "AMZ Express",
      },
      {
        name: "Clínicas y consultorios",
        page: "sistema-para-clinicas",
        pain: "La recepción se satura agendando, confirmando y reprogramando.",
        items: ["Citas y recordatorios por WhatsApp", "Confirmar o reprogramar sin llamar", "Historial del paciente en un solo lugar", "Cobros y facturas sin digitar"],
      },
      {
        name: "Educación",
        pain: "Padres con dudas a cualquier hora y pensiones que cobrar cada mes.",
        items: ["Inscripciones y matrículas en línea", "Recordatorios de pago de pensiones", "Respuestas a padres las 24 horas", "Reportes de asistencia y notas"],
      },
      {
        name: "Inmobiliarias",
        pain: "Muchos curiosos y poco tiempo para los compradores reales.",
        items: ["Respuesta inmediata a cada interesado", "Filtro de compradores reales", "Agenda de visitas sin ida y vuelta", "Fichas, fotos y planos enviados solos"],
      },
      {
        name: "Servicios profesionales",
        pain: "Consultas, reuniones y vencimientos repartidos en mil lugares.",
        items: ["Captación y filtro de consultas", "Agenda de reuniones con recordatorio", "Avisos de vencimientos y renovaciones", "Contratos y documentos generados solos"],
      },
    ],
  },
  en: {
    title: "What can we automate for you?",
    lead: "Pick your industry and see everything that would stop being done by hand.",
    example: "Real example",
    more: "See the full solution",
    cta: "I want this for my business",
    message: (name) => `Hi, I run a ${name.toLowerCase()} business and I'd like to automate processes.`,
    tools: "Works with what you already use: WhatsApp Business, Gmail, Excel and Google Sheets, Google Calendar, Shopify, WooCommerce, PayPal, Stripe and your e-invoicing.",
    industries: [
      {
        name: "Restaurants",
        page: "sistema-para-restaurantes",
        pain: "Bookings and orders arrive at all hours, while the kitchen is full.",
        items: ["WhatsApp bookings 24/7", "Delivery orders straight to the kitchen", "Daily menu and promos sent on their own", "Alerts when an ingredient runs low"],
        example: "Trattoria Roma",
      },
      {
        name: "Retail and e-commerce",
        page: "sistema-para-tiendas",
        pain: "Customers asking for price, stock and shipping again and again.",
        items: ["Catalog and prices answered instantly", "Payment link and automatic confirmation", "Stock synced between store and online shop", "Shipping notices and order tracking"],
        example: "Xpress Ecommerce",
      },
      {
        name: "Importers",
        page: "software-para-importadoras",
        pain: "Quotes by hand and customers asking where their order is.",
        items: ["Quotes calculated in seconds", "Automatic updates at every shipping stage", "Real-time stock per warehouse", "E-invoice issued on dispatch"],
        example: "AMZ Express",
      },
      {
        name: "Clinics",
        page: "sistema-para-clinicas",
        pain: "The front desk is swamped booking, confirming and rescheduling.",
        items: ["Appointments and reminders on WhatsApp", "Confirm or reschedule without calling", "Patient history in one place", "Payments and invoices without typing"],
      },
      {
        name: "Education",
        pain: "Parents asking at any hour and tuition to collect every month.",
        items: ["Online sign-ups and enrollment", "Tuition payment reminders", "Answers for parents 24/7", "Attendance and grade reports"],
      },
      {
        name: "Real estate",
        pain: "Lots of browsers and little time for real buyers.",
        items: ["Instant reply to every lead", "Real buyers filtered out", "Viewings booked without back and forth", "Listings, photos and floor plans sent automatically"],
      },
      {
        name: "Professional services",
        pain: "Inquiries, meetings and deadlines scattered everywhere.",
        items: ["Inquiry intake and filtering", "Meetings booked with reminders", "Deadline and renewal alerts", "Contracts and documents generated for you"],
      },
    ],
  },
};

// Selector por rubro: el visitante elige su tipo de negocio y ve lo que se automatizaría en él.
export default function Industries({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const [active, setActive] = useState(0);
  const current = t.industries[active];

  return (
    <section className="page-x bg-ground py-24 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 data-reveal="words" className="max-w-[16ch] text-[10vw] font-extrabold leading-[0.92] tracking-[-0.04em] md:text-[4.6vw]">
          <SplitWords text={t.title} />
        </h2>
        <p data-reveal className="max-w-[34ch] text-lg">{t.lead}</p>
      </div>

      <div className="mt-12 grid gap-8 md:mt-16 lg:grid-cols-12 lg:gap-12">
        <div role="tablist" aria-label={t.title} className="flex flex-wrap gap-2 lg:col-span-4 lg:flex-col lg:gap-1">
          {t.industries.map((industry, i) => (
            <button
              key={industry.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 text-left text-[15px] font-medium transition-colors duration-200 md:text-[17px] lg:px-5 lg:py-3.5 lg:text-[20px] ${
                i === active ? "bg-accent text-accent-ink" : "bg-surface hover:bg-ink/10"
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        <div key={current.name} role="tabpanel" className="industry-in bg-surface p-6 md:p-10 lg:col-span-8">
          <p className="text-[28px] font-extrabold leading-none tracking-[-0.03em] md:text-[40px]">{current.name}</p>
          <p className="mt-4 max-w-[46ch] text-lg text-muted">{current.pain}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {current.items.map((item) => (
              <li key={item} className="flex gap-3 bg-ground p-4 text-[16px] md:text-[17px]">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a className="btn" href={whatsappUrl(t.message(current.name))} target="_blank" rel="noreferrer">
              {t.cta}
            </a>
            <div className="flex flex-col gap-1 sm:items-end">
              {current.page && (
                <Link href={`/soluciones/${current.page}`} className="link text-[15px]">
                  {t.more}
                </Link>
              )}
              {current.example && (
                <p className="text-[15px] text-muted">
                  {t.example}: <span className="font-medium text-ink">{current.example}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <p data-reveal className="mt-10 max-w-[70ch] text-[15px] text-muted">{t.tools}</p>
    </section>
  );
}
