"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type CertificatesProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Certifications",
    subtitle:
      "Professional credentials that validate our continuous learning and specialization in AI and modern development.",
    source: "Big School (Academia de España)",
    certTitle: "AI Development Certification (2026)",
    action: "View Certificate",
  },
  es: {
    title: "Certificaciones",
    subtitle:
      "Credenciales profesionales que validan nuestro aprendizaje continuo y especializacion en IA y desarrollo moderno.",
    source: "Big School (Academia de España)",
    certTitle: "Certificacion en Desarrollo con IA (2026)",
    action: "Ver Certificado",
  },
};

export default function Certificates({ lang }: CertificatesProps) {
  const t = copy[lang];

  return (
    <section id="certificates" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-zinc-900/35 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">{t.title}</h2>
          <p className="mt-3 text-zinc-400 max-w-3xl">{t.subtitle}</p>
        </FadeIn>

<FadeIn delay={0.08}>
          <article
            data-inview
            className="mt-10 relative overflow-hidden"
          >
            {/* Certificate visual with blur effect */}
            <div className="relative rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 md:p-12 min-h-[200px] flex flex-col items-center justify-center">
              {/* Background pattern - certificate-like */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`,
              }} />
              
              {/* Blur overlay for visual effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 backdrop-blur-[2px]" />
              
              {/* Certificate content */}
              <div className="relative z-10 text-center">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500 mb-4">{t.source}</p>
                <h3 className="text-xl md:text-2xl text-zinc-100 font-semibold max-w-md">
                  {t.certTitle}
                </h3>
                <p className="mt-2 text-zinc-400 text-sm">Kevin Xavier Aguilar Velasco</p>
              </div>
            </div>

            <div className="mt-6">
              <MotionButton
                href="/Certificado-Kevin-Xavier-Aguilar-Velasco-2f7xw999.pdf"
                target="_blank"
                rel="noreferrer"
                label={t.action}
                variant="secondary"
              />
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}

