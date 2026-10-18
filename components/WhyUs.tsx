"use client";

import type { ReactNode } from "react";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";

type Reason = { title: string; a: string; b: string; proof: ReactNode };

const Bubble = ({ children, own = false }: { children: ReactNode; own?: boolean }) => (
  <p className={`w-fit max-w-[85%] rounded-lg px-3 py-2 text-[14px] leading-snug ${own ? "ml-auto bg-[#ff4655] text-[#0f1923]" : "bg-[#16222e] text-[#ece8e1]"}`}>
    {children}
  </p>
);

function reasons(lang: PortfolioLang): Reason[] {
  const es = lang === "es";
  return [
    {
      title: es ? "Precio cerrado por escrito" : "Fixed price in writing",
      a: es ? "Antes de empezar sabes qué incluye y cuánto cuesta." : "Before we start you know what's included and what it costs.",
      b: es ? "Sin cobros sorpresa a mitad del proyecto." : "No surprise charges mid-project.",
      proof: (
        <div className="flex h-full flex-col justify-between bg-[#ece8e1] p-4 text-[14px] text-[#0f1923]">
          <div className="flex justify-between font-medium">
            <span>{es ? "Propuesta" : "Proposal"} · {es ? "Página web" : "Website"}</span>
            <span>#0142</span>
          </div>
          <div className="flex items-end justify-between">
            <span>{es ? "Total cerrado" : "Fixed total"}</span>
            <span className="text-2xl font-extrabold">$450</span>
          </div>
        </div>
      ),
    },
    {
      title: es ? "Hablas con quien hace tu web" : "Talk to who builds your site",
      a: es ? "Sin intermediarios: quien diseña y programa es quien te responde." : "No middlemen: the people who design and build are the ones who answer.",
      b: es ? "Por WhatsApp, cuando lo necesites." : "On WhatsApp, whenever you need it.",
      proof: (
        <div className="flex h-full flex-col justify-center gap-2 bg-[#0f1923] p-4">
          <Bubble>{es ? "¿Podemos cambiar el color del botón?" : "Can we change the button color?"}</Bubble>
          <Bubble own>{es ? "Listo, ya está publicado." : "Done, it's live."}</Bubble>
        </div>
      ),
    },
    {
      title: es ? "Avances cada semana" : "Progress every week",
      a: es ? "Trabajamos por etapas y te mostramos cada avance." : "We work in stages and show you every step.",
      b: es ? "Opinas antes de seguir, no al final." : "You give feedback before we move on, not at the end.",
      proof: (
        <ul className="flex h-full flex-col justify-center gap-2 bg-surface p-4 text-[14px]">
          {(es ? ["Semana 1 · Diseño", "Semana 2 · Desarrollo", "Semana 3 · Lanzamiento"] : ["Week 1 · Design", "Week 2 · Build", "Week 3 · Launch"]).map((w, i) => (
            <li key={w} className="flex items-center justify-between">
              <span className={i < 2 ? "text-ink" : "text-muted"}>{w}</span>
              <span className={i < 2 ? "text-accent" : "text-muted"}>{i < 2 ? (es ? "Hecho" : "Done") : es ? "En curso" : "In progress"}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: es ? "Todo queda a tu nombre" : "Everything in your name",
      a: es ? "Código, dominio, hosting y accesos son tuyos." : "Code, domain, hosting and access belong to you.",
      b: es ? "Nunca quedas atrapado con nosotros." : "You're never locked in with us.",
      proof: (
        <dl className="grid h-full grid-cols-[auto_1fr] content-center gap-x-4 gap-y-1.5 bg-[#ece8e1] p-4 text-[14px] text-[#0f1923]">
          <dt className="opacity-70">{es ? "Dominio" : "Domain"}</dt>
          <dd className="font-medium">tunegocio.com</dd>
          <dt className="opacity-70">{es ? "Titular" : "Owner"}</dt>
          <dd className="font-medium">{es ? "Tu empresa" : "Your company"}</dd>
          <dt className="opacity-70">{es ? "Código" : "Code"}</dt>
          <dd className="font-medium">{es ? "Repositorio propio" : "Your own repository"}</dd>
        </dl>
      ),
    },
    {
      title: es ? "Pensado para vender" : "Built to sell",
      a: es ? "SEO técnico, carga rápida y WhatsApp integrado." : "Technical SEO, fast loading and WhatsApp built in.",
      b: es ? "Textos escritos para que te contacten." : "Copy written so people contact you.",
      proof: (
        <div className="flex h-full flex-col justify-center bg-white p-4 text-[14px]">
          <span className="text-[12px] text-[#4b5661]">www.tunegocio.com</span>
          <span className="text-[17px] font-medium text-[#0f1923]">{es ? "Tu Negocio · Cotiza por WhatsApp" : "Your Business · Quote on WhatsApp"}</span>
          <span className="text-[#4b5661]">{es ? "Respuesta en menos de 24 horas." : "Reply in under 24 hours."}</span>
        </div>
      ),
    },
    {
      title: es ? "Te acompañamos después" : "We stay after launch",
      a: es ? "Soporte tras el lanzamiento para dudas y ajustes." : "Post-launch support for questions and adjustments.",
      b: es ? "Y planes de mantenimiento desde $40 al mes." : "And maintenance plans from $40 a month.",
      proof: (
        <div className="flex h-full flex-col justify-center gap-2 bg-[#0f1923] p-4">
          <Bubble>{es ? "Necesito agregar un producto nuevo" : "I need to add a new product"}</Bubble>
          <Bubble own>{es ? "Hecho. Ya aparece en la tienda." : "Done. It's on the store now."}</Bubble>
        </div>
      ),
    },
  ];
}

export default function WhyUs({ lang }: { lang: PortfolioLang }) {
  return (
    <section className="page-x bg-ground py-28 md:py-40">
      <div>
        <h2 data-reveal="words" className="mb-16 text-[11vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:mb-20 md:text-[5.4vw]">
          <SplitWords text={lang === "en" ? "How we work with you" : "Cómo trabajamos contigo"} />
        </h2>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {reasons(lang).map((r, i) => (
            <article key={r.title} data-reveal data-tilt style={{ ["--tilt" as string]: i % 2 ? "3deg" : "-3deg", ["--d" as string]: `${(i % 2) * 120}ms` }} className="grid gap-4 sm:grid-cols-[minmax(0,320px)_1fr] sm:gap-6">
              <div data-ui className="h-[150px] overflow-hidden transition-transform duration-300 hover:-translate-y-1" aria-hidden="true">
                {r.proof}
              </div>
              <div>
                <h3 className="text-lg font-medium leading-snug">{r.title}</h3>
                <p className="mt-2 text-base">{r.a}</p>
                <p className="mt-2 text-base text-muted">{r.b}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
