"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";
import type { PortfolioLang } from "./HomeClient";

const copy = {
  es: {
    sentence: "Páginas web y apps que traen clientes a tu negocio en Ecuador.",
    cta: "Cotiza gratis por WhatsApp",
    microcopy: "Respuesta en menos de 24 horas",
    caption: "AMZ Express, en producción",
    captionText: "Cotiza importaciones de Amazon a Ecuador en segundos.",
    alt: "Plataforma AMZ Express desarrollada por Xpress Developer",
  },
  en: {
    sentence: "Websites and apps that bring clients to your business in Ecuador.",
    cta: "Get a free quote on WhatsApp",
    microcopy: "Reply in under 24 hours",
    caption: "AMZ Express, live",
    captionText: "Quotes Amazon imports to Ecuador in seconds.",
    alt: "AMZ Express platform built by Xpress Developer",
  },
};

const SHOT = "/proyectos/amz%20express.png";

// El nombre como monumento. Al hacer scroll, las letras se llenan con un proyecto real
// que se desplaza dentro de ellas, y el nombre hace zoom hasta mostrar el proyecto completo.
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
  const shotOpacity = useTransform(p, [0.68, 0.8], [0, 1]);
  const shotVisibility = useTransform(p, (v) => (v < 0.67 ? "hidden" : "visible"));
  const shotScale = useTransform(p, [0.68, 1], [1.18, 1]);
  const captionOpacity = useTransform(p, [0.82, 0.92], [0, 1]);

  const fill = (color: typeof inkColor) =>
    reduce ? undefined : { color, backgroundImage: `url("${SHOT}")`, backgroundPosition: fillPan };
  const fillClass = reduce ? "" : "bg-[length:120%_auto] bg-clip-text"; // taste-skill-ignore: no es degradado, es la captura real dentro de las letras

  const name = (
    <>
      <span className="line">
        <motion.span data-line style={{ ["--i" as string]: 0, ...fill(inkColor) }} className={fillClass}>
          Xpress
        </motion.span>
      </span>
      <span className="line text-accent">
        <motion.span data-line style={{ ["--i" as string]: 1, ...fill(accentColor) }} className={fillClass}>
          developer
        </motion.span>
      </span>
    </>
  );

  return (
    <section ref={ref} className={`relative bg-ground ${reduce ? "" : "h-[260svh]"}`}>
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div
          style={reduce ? undefined : { scale: nameScale, opacity: nameOpacity, visibility: nameVisibility }}
          className="absolute inset-x-0 top-[18%] origin-[12%_30%] md:top-[14%]"
        >
          <h1 className="lines page-x text-[21vw] font-extrabold leading-[0.82] tracking-[-0.04em] md:text-[clamp(110px,15vw,230px)]">
            {name}
          </h1>
        </motion.div>

        <motion.div
          style={reduce ? undefined : { opacity: cornersOpacity }}
          className="page-x absolute inset-x-0 bottom-6 flex flex-col gap-5 md:bottom-10 md:items-end md:text-right"
        >
          <p data-fade className="max-w-[30ch] text-lg leading-snug" style={{ ["--d" as string]: "650ms" }}>
            {t.sentence}
          </p>
          <div data-fade className="flex flex-col gap-2 md:items-end" style={{ ["--d" as string]: "750ms" }}>
            <a className="btn" href={whatsappUrl(QUOTE_MESSAGE[lang])} target="_blank" rel="noreferrer">
              {t.cta}
            </a>
            <span className="text-[var(--step-small)] text-muted">{t.microcopy}</span>
          </div>
        </motion.div>

        {!reduce && (
          <motion.figure style={{ opacity: shotOpacity, visibility: shotVisibility }} className="pointer-events-none absolute inset-0">
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
