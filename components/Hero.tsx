"use client";

import { navigateToSection } from "@/lib/navigation";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";
import Spotlight from "./Spotlight";
import DeviceMockups from "./DeviceMockups";

type HeroProps = {
  lang: PortfolioLang;
};

const heroCopy = {
  en: {
    badge: "Web & app development for businesses",
    headline: "Websites and apps that",
    headlineAccent: "bring clients to your business",
    subtitle:
      "We design, build and launch your website, online store or app with SEO from day one, so people find you on Google and message you on WhatsApp.",
    ctaPrimary: "Get a free quote",
    ctaSecondary: "See projects",
    microcopy: "Reply in under 24 hours · No commitment",
    trust: [
      "Code and domain in your name",
      "Technical SEO included",
      "Designed for mobile first",
      "Support after launch",
    ],
    mockupDesktopAlt: "AMZ Express platform built by Xpress Developer",
    notificationTitle: "New client on WhatsApp",
    notificationText: "Hi! I saw your website and I'd like a quote 👋",
  },
  es: {
    badge: "Desarrollo web y apps para negocios en Ecuador",
    headline: "Páginas web y apps que",
    headlineAccent: "traen clientes a tu negocio",
    subtitle:
      "Diseñamos, desarrollamos y lanzamos tu página web, tienda online o app con SEO desde el primer día, para que te encuentren en Google y te escriban por WhatsApp.",
    ctaPrimary: "Cotiza gratis",
    ctaSecondary: "Ver proyectos",
    microcopy: "Respuesta en menos de 24 horas · Sin compromiso",
    trust: [
      "Código y dominio a tu nombre",
      "SEO técnico incluido",
      "Diseño pensado para celular",
      "Soporte después del lanzamiento",
    ],
    mockupDesktopAlt: "Plataforma AMZ Express desarrollada por Xpress Developer",
    notificationTitle: "Nuevo cliente por WhatsApp",
    notificationText: "¡Hola! Vi tu página y quiero cotizar 👋",
  },
};

const enter = (delay: number) => ({
  animation: `fadeInUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s both`,
});

export default function Hero({ lang }: HeroProps) {
  const copy = heroCopy[lang];

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      <Spotlight className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-zinc-950">
          <div className="subtle-grid opacity-30" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 bg-zinc-900 opacity-90 blur-[100px]" />
        </div>
      </Spotlight>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-6 pb-10 pt-28 lg:grid-cols-[1.1fr_1fr] lg:pt-24">
        <div className="text-center lg:text-left">
          <div
            style={enter(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.14em] text-zinc-300 sm:text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-teal-400" />
            {copy.badge}
          </div>

          <h1
            style={enter(0.08)}
            className="mt-7 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl"
          >
            {copy.headline} <span className="text-teal-400">{copy.headlineAccent}</span>
          </h1>

          <p style={enter(0.16)} className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400 lg:mx-0">
            {copy.subtitle}
          </p>

          <div style={enter(0.24)} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <MotionButton
              label={copy.ctaPrimary}
              variant="primary"
              size="lg"
              href={whatsappUrl(QUOTE_MESSAGE[lang])}
              target="_blank"
              rel="noreferrer"
            />
            <MotionButton
              label={copy.ctaSecondary}
              variant="secondary"
              size="lg"
              onClick={() => navigateToSection("projects")}
            />
          </div>

          <p style={enter(0.3)} className="mt-4 text-sm text-zinc-500">
            {copy.microcopy}
          </p>
        </div>

        <div style={enter(0.2)}>
          <DeviceMockups
            desktopSrc="/proyectos/amz express.png"
            desktopAlt={copy.mockupDesktopAlt}
            notificationTitle={copy.notificationTitle}
            notificationText={copy.notificationText}
          />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-zinc-950/60 backdrop-blur-sm">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-3 px-6 py-5 text-sm text-zinc-300 md:grid-cols-4">
          {copy.trust.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
