"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import PhoneMockup from "./PhoneMockup";
import { whatsappUrl } from "@/lib/contact";

type Message = { me: boolean; text: string };

const copy = {
  es: {
    title: "Tu WhatsApp atiende solo",
    text: "Automatizamos tu WhatsApp para que tus clientes siempre sean atendidos: responde, agenda y registra pedidos a cualquier hora, aunque tu equipo esté ocupado o descansando.",
    points: ["Respuesta en segundos, las 24 horas", "Reservas y pedidos directo a tu sistema", "Pasa a una persona cuando hace falta"],
    cta: "Quiero mi WhatsApp automático",
    message: "Hola, quiero automatizar el WhatsApp de mi negocio.",
    example: "Ejemplo: Trattoria Roma, restaurante",
    status: "respuesta automática",
    typing: "escribiendo…",
    done: "Reserva registrada en tu sistema",
    chat: [
      { me: false, text: "Hola, ¿tienen mesa para 4 hoy en la noche?" },
      { me: true, text: "¡Hola! Sí, tenemos a las 19:30 y a las 21:00. ¿Cuál te reservo?" },
      { me: false, text: "A las 21:00, por favor" },
      { me: true, text: "Listo: mesa para 4 a las 21:00. Te enviamos un recordatorio una hora antes." },
    ] as Message[],
  },
  en: {
    title: "Your WhatsApp answers itself",
    text: "We automate your WhatsApp so your customers are always looked after: it replies, books and logs orders at any hour, even when your team is busy or off.",
    points: ["Replies in seconds, 24/7", "Bookings and orders straight into your system", "Hands over to a person when needed"],
    cta: "I want an automated WhatsApp",
    message: "Hi, I'd like to automate my business WhatsApp.",
    example: "Example: Trattoria Roma, restaurant",
    status: "automatic reply",
    typing: "typing…",
    done: "Booking logged in your system",
    chat: [
      { me: false, text: "Hi, do you have a table for 4 tonight?" },
      { me: true, text: "Hi! Yes, we have 7:30 pm and 9:00 pm. Which one should I book?" },
      { me: false, text: "9:00 pm, please" },
      { me: true, text: "Done: table for 4 at 9:00 pm. We'll send you a reminder an hour before." },
    ] as Message[],
  },
};

// Pasos de la conversación: antes de cada respuesta del negocio aparece "escribiendo…".
function buildSteps(chat: Message[]) {
  const steps: { shown: number; typing: boolean }[] = [];
  chat.forEach((m, i) => {
    if (m.me) steps.push({ shown: i, typing: true });
    steps.push({ shown: i + 1, typing: false });
  });
  return steps;
}

const HOLD = 4;

export default function WhatsAppAuto({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const steps = buildSteps(t.chat);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setTick((n) => (n + 1) % (steps.length + HOLD)), 1000);
    return () => clearInterval(id);
  }, [inView, reduce, steps.length]);

  const step = reduce ? steps[steps.length - 1] : steps[Math.min(tick, steps.length - 1)];
  const finished = reduce || tick >= steps.length - 1;

  return (
    <section className="page-x grid items-center gap-10 bg-ground py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-5">
        <h2 data-reveal="words" className="max-w-[12ch] text-[11vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[4.6vw]">
          <SplitWords text={t.title} />
        </h2>
        <p data-reveal className="mt-5 max-w-[44ch] md:mt-6 md:text-lg">{t.text}</p>
        <ul className="mt-6 hidden space-y-2.5 md:block">
          {t.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-[0.55em] h-1.5 w-3 shrink-0 bg-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a data-reveal className="btn mt-8" href={whatsappUrl(t.message)} target="_blank" rel="noreferrer">
          {t.cta}
        </a>
      </div>

      <div ref={ref} className="relative lg:col-span-7">
        <div data-ui className="relative mr-[22%] flex h-[280px] flex-col bg-[#0f1923] text-[#ece8e1] md:mr-[30%] md:h-[460px]" aria-hidden="true">
          <div className="flex items-center gap-3 bg-[#16222e] px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-[13px] font-bold text-accent-ink">TR</span>
            <span className="leading-tight">
              <span className="block text-[15px] font-medium">Trattoria Roma</span>
              <span className="block text-[12px] text-[#a4adb4]">{step.typing ? t.typing : t.status}</span>
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-end gap-2 overflow-hidden p-3 md:p-4">
            {t.chat.slice(0, step.shown).map((m) => (
              <p
                key={m.text}
                className={`chat-in max-w-[82%] px-3 py-2 text-[14px] leading-snug md:text-[15px] ${
                  m.me ? "self-end bg-[#ff4655] text-[#0f1923]" : "self-start bg-[#16222e]"
                }`}
              >
                {m.text}
              </p>
            ))}
            {step.typing && <p className="chat-in self-end bg-[#ff4655] px-3 py-2 text-[14px] text-[#0f1923]/70">{t.typing}</p>}
          </div>
          <p className={`flex items-center gap-2 bg-[#ece8e1] px-4 py-2.5 text-[14px] font-medium text-[#0f1923] transition-opacity duration-500 ${finished ? "opacity-100" : "opacity-0"}`}>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {t.done}
          </p>
        </div>
        <div className="absolute bottom-8 right-0 w-[34%] max-w-[250px] md:bottom-4 md:w-[30%]">
          <PhoneMockup src="/proyectos/movil/restaurant.jpg" alt={t.example} sizes="20vw" />
        </div>
        <p className="mt-6 text-[15px] text-muted md:mt-8">{t.example}</p>
      </div>
    </section>
  );
}
