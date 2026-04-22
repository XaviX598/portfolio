"use client";

import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";
import MotionButton from "./MotionButton";

type ContactProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Let's build something valuable",
    subtitle:
      "Looking for a Full Stack Engineer for your team or project? I am open to opportunities and collaborations.",
    ctaEmail: "Send Email",
    ctaWhatsApp: "WhatsApp",
    ctaLinkedIn: "LinkedIn",
    channels: [
      { title: "WhatsApp", subtitle: "Fast response", value: "+593 985295277" },
      {
        title: "Email",
        subtitle: "Professional contact",
        value: "kevinjkevps4@gmail.com",
      },
      {
        title: "LinkedIn",
        subtitle: "Professional profile",
        value: "xavier-aguilar-93759b2bb",
      },
    ],
  },
  es: {
    title: "Construyamos algo de valor",
    subtitle:
      "Buscas un Ingeniero Full Stack para tu equipo o proyecto? Estoy abierto a oportunidades y colaboraciones.",
    ctaEmail: "Enviar Email",
    ctaWhatsApp: "WhatsApp",
    ctaLinkedIn: "LinkedIn",
    channels: [
      { title: "WhatsApp", subtitle: "Respuesta rapida", value: "+593 985295277" },
      {
        title: "Email",
        subtitle: "Contacto profesional",
        value: "kevinjkevps4@gmail.com",
      },
      {
        title: "LinkedIn",
        subtitle: "Perfil profesional",
        value: "xavier-aguilar-93759b2bb",
      },
    ],
  },
};

export default function Contact({ lang }: ContactProps) {
  const t = copy[lang];

  return (
    <section id="contact" className="w-full h-full min-h-screen relative flex items-center">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <div
            data-inview
            className="rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur p-7 sm:p-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
              {t.title}
            </h2>
            <p className="mt-4 text-zinc-400 max-w-3xl leading-relaxed">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MotionButton
                href="mailto:kevinjkevps4@gmail.com"
                label={t.ctaEmail}
                variant="secondary"
              />
              <MotionButton
                href="https://wa.me/593985295277"
                target="_blank"
                rel="noreferrer"
                label={t.ctaWhatsApp}
                variant="secondary"
              />
              <MotionButton
                href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
                target="_blank"
                rel="noreferrer"
                label={t.ctaLinkedIn}
                variant="secondary"
              />
            </div>
          </div>
        </FadeIn>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {t.channels.map((channel, index) => (
            <FadeIn key={channel.title} delay={0.1 + index * 0.06}>
              <div
                data-inview
                className="rounded-xl border border-white/10 bg-zinc-900/60 p-5 hover:border-teal-400/40 transition-colors"
              >
                <p className="text-zinc-200 font-semibold">{channel.title}</p>
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-500 mt-1">
                  {channel.subtitle}
                </p>
                <p className="text-teal-300 text-sm mt-4 break-all">{channel.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.26}>
          <footer className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Kevin Xavier Aguilar Velasco. All rights
            reserved.
          </footer>
        </FadeIn>
      </div>
    </section>
  );
}

