"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";
import type { PortfolioLang } from "./HomeClient";
import TypeText from "./TypeText";
import FloatingObjects from "./FloatingObjects";
import Marquee from "./Marquee";

const copy = {
  es: {
    tag: "Web · apps · IA",
    sentence: "Páginas web y apps que traen clientes a tu negocio en Ecuador.",
    cta: "Cotiza gratis por WhatsApp",
    microcopy: "Respuesta en menos de 24 horas",
    from: "/ desde",
    place: "Ecuador",
    chatTitle: "Nuevo cliente por WhatsApp",
    chatText: "¡Hola! Vi tu página y quiero cotizar.",
    services: ["Páginas web", "Landing pages", "Tiendas online", "Apps Android e iOS", "Chatbots con IA", "Automatización", "Sistemas a medida", "SEO técnico"],
    servicesLabel: "Servicios",
    caption: "AMZ Express, en producción",
    captionText: "Cotiza importaciones de Amazon a Ecuador en segundos.",
    alt: "Plataforma AMZ Express desarrollada por Xpress Developer",
  },
  en: {
    tag: "Web · apps · AI",
    sentence: "Websites and apps that bring clients to your business in Ecuador.",
    cta: "Get a free quote on WhatsApp",
    microcopy: "Reply in under 24 hours",
    from: "/ from",
    place: "Ecuador",
    chatTitle: "New client on WhatsApp",
    chatText: "Hi! I saw your website and I'd like a quote.",
    services: ["Websites", "Landing pages", "Online stores", "Android & iOS apps", "AI chatbots", "Automation", "Custom systems", "Technical SEO"],
    servicesLabel: "Services",
    caption: "AMZ Express, live",
    captionText: "Quotes Amazon imports to Ecuador in seconds.",
    alt: "AMZ Express platform built by Xpress Developer",
  },
};

const SHOT = "/proyectos/amz%20express.png";

// El nombre como monumento, con piezas reales del trabajo flotando que siguen al mouse.
// Al hacer scroll, las letras se llenan con un proyecto real y el nombre hace zoom hasta mostrarlo completo.
export default function Hero({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // El color de las letras se vuelve transparente y deja ver la captura recortada dentro de ellas.
  const inkColor = useTransform(p, [0.02, 0.22], ["rgba(236,232,225,1)", "rgba(236,232,225,0)"]);
  const accentColor = useTransform(p, [0.02, 0.22], ["rgba(255,70,85,1)", "rgba(255,70,85,0)"]);
  const fillPan = useTransform(p, [0, 0.55], ["50% 0%", "50% 100%"]);
  const nameScale = useTransform(p, [0.3, 0.78], [1, 14]);
  const nameOpacity = useTransform(p, [0.56, 0.66], [1, 0]);
  const nameVisibility = useTransform(p, (v) => (v > 0.67 ? "hidden" : "visible"));
  const cornersOpacity = useTransform(p, [0, 0.12], [1, 0]);
  const cornersVisibility = useTransform(p, (v) => (v > 0.13 ? "hidden" : "visible"));
  const objectsY = useTransform(p, [0, 0.25], [0, -160]);
  const objectsOpacity = useTransform(p, [0, 0.18], [1, 0]);
  const shotOpacity = useTransform(p, [0.68, 0.8], [0, 1]);
  const shotVisibility = useTransform(p, (v) => (v < 0.67 ? "hidden" : "visible"));
  const shotScale = useTransform(p, [0.68, 1], [1.18, 1]);
  const captionOpacity = useTransform(p, [0.82, 0.92], [0, 1]);

  const fill = (color: typeof inkColor) =>
    reduce ? undefined : { color, backgroundImage: `url("${SHOT}")`, backgroundPosition: fillPan };
  const fillClass = reduce ? "" : "bg-[length:120%_auto] bg-clip-text"; // taste-skill-ignore: no es degradado, es la captura real dentro de las letras

  return (
    <section ref={ref} className={`relative bg-ground ${reduce ? "" : "h-[260svh]"}`}>
      <div className="sticky top-0 flex h-svh flex-col overflow-hidden">
        <div className="relative flex-1">
          <motion.div
            style={reduce ? undefined : { scale: nameScale, opacity: nameOpacity, visibility: nameVisibility }}
            className="absolute inset-x-0 top-[15%] z-10 origin-[10%_30%] md:top-[17%]"
          >
            <h1 className="lines page-x text-[15.5vw] font-extrabold uppercase leading-[0.84] tracking-[-0.045em] md:text-[11.4vw]">
              <span className="line">
                <motion.span data-line style={{ ["--i" as string]: 0, display: "inline-block", ...fill(inkColor) }} className={fillClass}>
                  Xpress
                </motion.span>
                <span data-fade className="ml-[0.25em] inline-block align-[0.6em] text-[max(13px,0.15em)] tracking-[-0.01em] text-accent" style={{ ["--d" as string]: "700ms" }}>
                  {t.tag}
                </span>
              </span>
              <span className="line text-accent">
                <motion.span data-line style={{ ["--i" as string]: 1, ...fill(accentColor) }} className={fillClass}>
                  Developer
                </motion.span>
              </span>
            </h1>
          </motion.div>

          <motion.div
            style={reduce ? undefined : { y: objectsY, opacity: objectsOpacity }}
            className="absolute inset-x-0 top-[33%] h-[32%] md:inset-x-auto md:right-[var(--margin)] md:top-[11%] md:h-[50%] md:w-[38%]"
          >
            <FloatingObjects chatTitle={t.chatTitle} chatText={t.chatText} className="relative mx-auto h-full w-[78%] md:w-full" />
          </motion.div>

          <motion.div
            style={reduce ? undefined : { opacity: cornersOpacity, visibility: cornersVisibility }}
            className="page-x absolute inset-x-0 bottom-5 flex items-end justify-between gap-8 md:bottom-8"
          >
            <div className="flex max-w-[34ch] flex-col gap-4">
              <p data-reveal="type" className="text-lg leading-snug" style={{ ["--d" as string]: "900ms" }}>
                <TypeText text={t.sentence} speed={22} />
              </p>
              <div data-fade className="flex flex-col gap-2" style={{ ["--d" as string]: "750ms" }}>
                <a className="btn w-full sm:w-auto" href={whatsappUrl(QUOTE_MESSAGE[lang])} target="_blank" rel="noreferrer">
                  {t.cta}
                </a>
                <span className="text-[var(--step-small)] text-muted">{t.microcopy}</span>
              </div>
            </div>
            <p data-fade className="hidden items-end gap-5 text-right font-extrabold uppercase leading-[0.86] tracking-[-0.04em] md:flex" style={{ ["--d" as string]: "850ms" }}>
              <span className="mb-[0.18em] block h-1.5 w-[10vw] bg-ink" aria-hidden="true" />
              <span className="text-[5vw]">
                <span className="block">{t.from}</span>
                <span className="block">{t.place}</span>
              </span>
            </p>
          </motion.div>
        </div>

        <motion.div style={reduce ? undefined : { opacity: cornersOpacity, visibility: cornersVisibility }}>
          <Marquee items={t.services} label={t.servicesLabel} />
        </motion.div>

        {!reduce && (
          <motion.figure style={{ opacity: shotOpacity, visibility: shotVisibility }} className="pointer-events-none absolute inset-0 z-20">
            <motion.div style={{ scale: shotScale }} className="absolute inset-0">
              <Image src={SHOT} alt={t.alt} fill sizes="100vw" className="hidden object-cover object-top md:block" />
              <Image src="/proyectos/movil/amz-express.jpg" alt={t.alt} fill sizes="100vw" className="object-cover object-top md:hidden" />
            </motion.div>
            <motion.figcaption
              style={{ opacity: captionOpacity }}
              className="page-x absolute inset-x-0 bottom-0 bg-ground/85 py-5 md:max-w-xl"
            >
              <span className="block text-xl font-medium">{t.caption}</span>
              <span className="block text-muted">{t.captionText}</span>
            </motion.figcaption>
          </motion.figure>
        )}
      </div>
    </section>
  );
}
