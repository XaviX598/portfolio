"use client";

import Image from "next/image";
import type { PortfolioLang } from "./HomeClient";

const copy = {
  es: {
    title: "¿Cómo sería trabajar juntos?",
    stages: [
      { lead: "Para empezar,", text: "nos cuentas tu idea por WhatsApp o videollamada y entendemos tu negocio, tus clientes y lo que necesitas lograr." },
      { lead: "En menos de 24 horas,", text: "te enviamos alcance, tiempos y precio cerrado por escrito. Si no te convence, no pasa nada." },
      { lead: "Durante el desarrollo,", text: "construimos por etapas y cada semana te mostramos avances para que opines antes de seguir." },
      { lead: "Desde el lanzamiento,", text: "tu página queda publicada con dominio, SEO y analítica, y te acompañamos con soporte para lo que venga." },
    ],
  },
  en: {
    title: "What would working together look like?",
    stages: [
      { lead: "To begin,", text: "you tell us your idea over WhatsApp or a video call and we get to know your business, your clients and what you need to achieve." },
      { lead: "Within 24 hours,", text: "we send you scope, timeline and a fixed price in writing. If it doesn't convince you, no problem." },
      { lead: "During development,", text: "we build in stages and show you progress every week so you can give feedback before we move on." },
      { lead: "From launch on,", text: "your site goes live with domain, SEO and analytics, and we stay with you with support for whatever comes next." },
    ],
  },
};

const evidence = [
  ["/proyectos/restaurant.png", "/proyectos/restaurante 2.png", "/proyectos/restaurant 3.png"],
  ["/proyectos/amz express 2.png"],
  ["/proyectos/xpress ecommerce.png", "/proyectos/xpress ecommerce 2.png", "/proyectos/xpress ecommer 3.png"],
  ["/proyectos/universal skills 3.png"],
];

export default function Process({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];

  return (
    <section className="page-x bg-surface py-28 md:py-40">
      <div className="max-w-[580px] md:ml-[30%]">
        <h2 data-reveal className="mb-12 text-[28px] font-medium tracking-[-0.02em]">{t.title}</h2>
        <div className="space-y-14 md:space-y-[72px]">
          {t.stages.map((stage, i) => (
            <div key={stage.lead} data-reveal>
              <p className="text-[17px] leading-[1.6] text-muted md:text-lg">
                <strong className="font-medium text-ink">{stage.lead}</strong> {stage.text}
              </p>
              {evidence[i].length > 1 ? (
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {evidence[i].map((src) => (
                    <div key={src} className="relative aspect-[2/1] overflow-hidden">
                      <Image src={encodeURI(src)} alt="" fill sizes="190px" className="object-cover object-top" />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="relative mt-5 aspect-[2/1] overflow-hidden">
                  <Image src={encodeURI(evidence[i][0])} alt="" fill sizes="580px" className="object-cover object-top" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
