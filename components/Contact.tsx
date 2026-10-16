"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import MotionButton from "./MotionButton";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";
import type { PortfolioLang } from "./HomeClient";

type ContactProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Ready for your business to sell more online?",
    subtitle:
      "Tell us about your project and within 24 hours we'll reply with next steps. The first conversation is free and with no commitment.",
    ctaWhatsApp: "Message us on WhatsApp",
    orForm: "or fill out the form",
    assurances: ["Fixed price in writing", "Everything in your name", "Weekly progress updates"],
    formTitle: "Contact Us",
    formSubtitle: "Fill the form and we'll get back to you",
    contactMethod: "How should we contact you?",
    phone: "WhatsApp",
    email: "Email",
    phoneLabel: "Your phone number",
    emailLabel: "Your email",
    nameLabel: "Your name",
    messageLabel: "How can we help?",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent! We'll contact you soon.",
    ctaEmail: "Send Email",
    ctaLinkedIn: "LinkedIn",
    channels: [
      { title: "WhatsApp", subtitle: "Fast response", value: "+593 985295277" },
      {
        title: "Email",
        subtitle: "Professional contact",
        value: "contacto@xpressdeveloper.com",
      },
      {
        title: "LinkedIn",
        subtitle: "Professional profile",
        value: "xavier-aguilar-93759b2bb",
      },
    ],
  },
  es: {
    title: "¿Listo para que tu negocio venda más en internet?",
    subtitle:
      "Cuéntanos tu proyecto y en menos de 24 horas te respondemos con los siguientes pasos. La primera conversación es gratis y sin compromiso.",
    ctaWhatsApp: "Escríbenos por WhatsApp",
    orForm: "o completa el formulario",
    assurances: ["Precio cerrado por escrito", "Todo queda a tu nombre", "Avances cada semana"],
    formTitle: "Contáctanos",
    formSubtitle: "Escríbenos y te respondemos pronto",
    contactMethod: "¿Cómo quieres que te contactemos?",
    phone: "WhatsApp",
    email: "Correo",
    phoneLabel: "Tu número de WhatsApp",
    emailLabel: "Tu correo electrónico",
    nameLabel: "Tu nombre",
    messageLabel: "¿En qué podemos ayudarte?",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado! Te contactaremos pronto.",
    ctaEmail: "Enviar email",
    ctaLinkedIn: "LinkedIn",
    channels: [
      { title: "WhatsApp", subtitle: "Respuesta rápida", value: "+593 985295277" },
      {
        title: "Email",
        subtitle: "Contacto profesional",
        value: "contacto@xpressdeveloper.com",
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
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/contacto@xpressdeveloper.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Error sending form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex w-full items-center justify-center bg-zinc-950 py-12">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        <FadeIn repeat={false} className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">{t.subtitle}</p>
          <div className="mt-8 flex justify-center">
            <MotionButton label={t.ctaWhatsApp} variant="primary" size="lg" href={whatsappUrl(QUOTE_MESSAGE[lang])} target="_blank" rel="noreferrer" />
          </div>
          <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            {t.assurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg className="h-4 w-4 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm uppercase tracking-[0.2em] text-zinc-500">{t.orForm}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            data-inview
            className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/70 p-6 backdrop-blur sm:p-8 md:p-10"
          >
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-zinc-100 md:text-3xl">
                {t.formTitle}
              </h3>
              <p className="text-zinc-400">{t.formSubtitle}</p>
            </div>

            {isSuccess ? (
              <div className="rounded-xl border border-teal-500/30 bg-teal-500/20 p-4 text-center text-teal-300">
                {t.success}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="Nuevo contacto desde web" />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label className="mb-3 block text-sm text-zinc-400">{t.contactMethod}</label>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setContactMethod("whatsapp")}
                      className={`flex-1 rounded-xl border px-4 py-3 transition-all flex items-center justify-center gap-2 ${
                        contactMethod === "whatsapp"
                          ? "border-teal-500 bg-teal-500/20 text-teal-300"
                          : "border-white/10 bg-zinc-800/50 text-zinc-400 hover:border-white/20"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88zm8.41-18.3A11.82 11.82 0 0012.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 005.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41z" /></svg>
                      <span>{t.phone}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setContactMethod("email")}
                      className={`flex-1 rounded-xl border px-4 py-3 transition-all flex items-center justify-center gap-2 ${
                        contactMethod === "email"
                          ? "border-teal-500 bg-teal-500/20 text-teal-300"
                          : "border-white/10 bg-zinc-800/50 text-zinc-400 hover:border-white/20"
                      }`}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                      <span>{t.email}</span>
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                      {contactMethod === "whatsapp" ? t.phoneLabel : t.emailLabel}
                    </label>
                    {contactMethod === "whatsapp" ? (
                      <input
                        type="tel"
                        name="whatsapp"
                        required
                        placeholder="+593 98 123 4567"
                        className="w-full rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-teal-500 focus:outline-none"
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="tu@email.com"
                        className="w-full rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-teal-500 focus:outline-none"
                      />
                    )}
                  </div>
                  <div>
                    <label className="mb-2 block text-sm text-zinc-400">{t.nameLabel}</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-teal-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-400">{t.messageLabel}</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3 text-white placeholder-zinc-500 transition-colors focus:border-teal-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-teal-500 py-4 font-semibold text-white transition-colors hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? t.sending : t.submit}
                </button>
              </form>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.26}>
          <footer className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Xpress Developer. {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
          </footer>
        </FadeIn>
      </div>
    </section>
  );
}
