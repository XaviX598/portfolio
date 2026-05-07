"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import type { PortfolioLang } from "./HomeClient";

type ContactProps = {
  lang: PortfolioLang;
};

const copy = {
  en: {
    title: "Let's build something valuable",
    subtitle:
      "Looking for a Full Stack Engineer for your team or project? I am open to opportunities and collaborations.",
    formTitle: "Contact Us",
    formSubtitle: "Fill the form and we'll get back to you",
    contactMethod: "How should we contact you?",
    phone: "Phone",
    email: "Email",
    phoneLabel: "Your phone number",
    emailLabel: "Your email",
    nameLabel: "Your name",
    messageLabel: "How can we help?",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent! We'll contact you soon.",
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
      "¿Buscás un Ingeniero Full Stack para tu equipo o proyecto? Estoy abierto a oportunidades y colaboraciones.",
    formTitle: "Contáctanos",
    formSubtitle: "Escribinos y te respondemos pronto",
    contactMethod: "¿Cómo querés que te contactemos?",
    phone: "Teléfono",
    email: "Correo",
    phoneLabel: "Tu número de WhatsApp",
    emailLabel: "Tu correo electrónico",
    nameLabel: "Tu nombre",
    messageLabel: "¿En qué podemos ayudarte?",
    submit: "Enviar mensaje",
    sending: "Enviando...",
    success: "¡Mensaje enviado! Te contactaremos pronto.",
    ctaEmail: "Enviar email",
    ctaWhatsApp: "WhatsApp",
    ctaLinkedIn: "LinkedIn",
    channels: [
      { title: "WhatsApp", subtitle: "Respuesta rápida", value: "+593 985295277" },
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
  const [contactMethod, setContactMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/kevinjkevps4@gmail.com", {
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
    <section id="contact" className="relative flex min-h-screen w-full h-full items-center justify-center">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
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
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.176l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.43.969.96a.976.976 0 0 1-.969.966.976.976 0 0 1-.969-.966c0-.53.434-.96.97-.96z" /></svg>
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
                    placeholder="Contanos sobre tu proyecto..."
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
            © {new Date().getFullYear()} Kevin Xavier Aguilar Velasco. All rights reserved.
          </footer>
        </FadeIn>
      </div>
    </section>
  );
}
