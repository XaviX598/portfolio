"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type CertificatesProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Certificates",
    subtitle:
      "Professional credentials that support my continuous learning and specialization.",
    source: "Big School (Academia de España)",
    certTitle: "Certificate in AI Development (2026)",
    action: "Download Certificate",
  },
  es: {
    title: "Certificados",
    subtitle:
      "Credenciales profesionales que respaldan mi aprendizaje continuo y especializacion.",
    source: "Big School (Academia de España)",
    certTitle: "Certificado en Desarrollo con Inteligencia Artificial (2026)",
    action: "Descargar Certificado",
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
          <article className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/65 p-7 md:p-8">
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t.source}</p>
            <h3 className="mt-3 text-xl md:text-2xl text-zinc-100 font-semibold">
              {t.certTitle}
            </h3>

            <div className="mt-6">
              <a
                href="/Certificado-Kevin-Xavier-Aguilar-Velasco-2f7xw999.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary-outline"
              >
                <span className="btn-anim-label">{t.action}</span>
              </a>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  );
}
