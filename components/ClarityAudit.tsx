"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useInView } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import { whatsappUrl } from "@/lib/contact";

const copy = {
  es: {
    title: "Bonita no basta: tu página tiene que guiar al cliente",
    text: "Si en 5 segundos no entienden qué ofreces, se van. ¿Ya tienes página? Te enviamos gratis un análisis con lo que debes cambiar para recibir más mensajes.",
    questions: ["¿Qué ofreces?", "¿Para quién es?", "¿Qué hago ahora?"],
    cta: "Quiero mi revisión gratis",
    message: "Hola, quiero la revisión gratis de mi página: ",
    before: "Antes: no se entiende",
    after: "Después: clara y con una acción",
    chips: ["Propuesta clara", "Confianza", "Una sola acción"],
    service: "Limpieza facial profunda",
    audience: "Para piel grasa o con brotes que quiere un plan claro.",
    proof: "Reseñas 5,0 · Fotos reales del lugar",
    action: "Agendar por WhatsApp",
    noise: ["¡Bienvenidos!", "Promos", "Novedades", "Blog", "Síguenos", "¡Suscríbete!", "Ver más", "Click aquí", "Info"],
  },
  en: {
    title: "Pretty isn't enough: your page has to guide the client",
    text: "If they don't get what you offer in 5 seconds, they leave. Already have a website? We'll send you a free analysis of what to change to get more messages.",
    questions: ["What do you offer?", "Who is it for?", "What do I do next?"],
    cta: "Get my free review",
    message: "Hi, I'd like the free review of my website: ",
    before: "Before: confusing",
    after: "After: clear, with one action",
    chips: ["Clear offer", "Trust", "One single action"],
    service: "Deep facial cleansing",
    audience: "For oily or breakout-prone skin that wants a clear plan.",
    proof: "5.0 reviews · Real photos of the place",
    action: "Book on WhatsApp",
    noise: ["Welcome!", "Promos", "News", "Blog", "Follow us", "Subscribe!", "See more", "Click here", "Info"],
  },
};

type Copy = (typeof copy)["es"];

function MessyPage({ t }: { t: Copy }) {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex flex-wrap gap-1 bg-orange-500 px-2 py-1 text-[11px] font-bold text-white">
        {t.noise.slice(0, 4).map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-[2fr_1fr] gap-2">
        <div className="relative overflow-hidden bg-orange-300">
          <span className="absolute left-3 top-4 h-16 w-16 rounded-full bg-orange-200/80" />
          <span className="absolute left-10 top-8 h-14 w-14 rotate-12 bg-sky-300/70" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex-1 bg-yellow-300 p-2 text-[11px] font-bold text-zinc-800">{t.noise[4]} ●●●</div>
          <div className="bg-zinc-700 py-1 text-center text-[11px] text-white">{t.noise[6]}</div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="h-1.5 w-full bg-zinc-500/50" />
        <div className="h-1.5 w-4/5 bg-zinc-500/50" />
      </div>
      <div className="flex gap-1.5">
        {t.noise.slice(6).map((n, i) => (
          <span key={n} className={`px-2 py-1 text-[11px] ${i === 1 ? "bg-red-400 text-white" : "bg-zinc-700 text-zinc-200"}`}>
            {n}
          </span>
        ))}
      </div>
      <motion.div
        className="absolute right-6 top-16 bg-white px-3 py-2 text-[12px] font-bold text-zinc-800 shadow-xl" /* taste-skill-ignore: es un popup dentro del ejemplo */
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, rotate: [0, -2, 2, 0] }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {t.noise[5]}
      </motion.div>
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="absolute flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white"
          style={{ left: `${35 + i * 30}%`, top: `${48 + i * 12}%` }}
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 1 + i * 0.25, duration: 0.4 }}
        >
          ?
        </motion.span>
      ))}
    </div>
  );
}

function Chip({ label, className, delay }: { label: string; className: string; delay: number }) {
  return (
    <motion.span
      className={`absolute z-10 bg-ink px-2.5 py-1 text-[12px] font-medium text-ground ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 18 }}
    >
      {label}
    </motion.span>
  );
}

function ClearPage({ t }: { t: Copy }) {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.4 },
  });

  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <motion.div {...item(0.1)} className="relative bg-[#2c4a40] p-4">
        <p className="text-[12px] font-medium text-accent">Spa · Guayaquil</p>
        <p className="mt-1 text-lg font-extrabold leading-tight text-ink">{t.service}</p>
        <Chip label={t.chips[0]} className="-top-3 left-3" delay={0.9} />
      </motion.div>
      <motion.p {...item(0.25)} className="relative bg-ground/60 p-3 text-[13px] text-ink">
        {t.audience}
        <Chip label={t.chips[1]} className="-bottom-3 right-3" delay={1.2} />
      </motion.p>
      <motion.p {...item(0.4)} className="px-1 text-[13px] text-amber-300">
        {t.proof}
      </motion.p>
      <div className="grid grid-cols-3 gap-2">
        {["bg-[#c9b8a6]", "bg-[#8fa59b]", "bg-[#b9c4bd]"].map((c, i) => (
          <motion.div key={c} {...item(0.45 + i * 0.08)} className={`aspect-[4/3] ${c}`} />
        ))}
      </div>
      <motion.div {...item(0.55)} className="relative mt-auto">
        <motion.div
          className="bg-accent py-2.5 text-center text-sm font-medium text-accent-ink"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ delay: 1.6, duration: 0.8, repeat: 2 }}
        >
          {t.action} →
        </motion.div>
        <Chip label={t.chips[2]} className="-top-3 right-6" delay={1.5} />
      </motion.div>
    </div>
  );
}

// Antes/después: una página confusa se transforma en una clara.
// Se repite en bucle solo mientras la sección está visible.
export default function ClarityAudit({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { margin: "-20% 0px" });
  const [clear, setClear] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setClear((value) => !value), clear ? 5200 : 3200);
    return () => clearInterval(id);
  }, [inView, clear]);

  return (
    <MotionConfig reducedMotion="user">
      <section className="page-x bg-ground py-28 md:py-40">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 data-reveal="words" className="text-[28px] font-medium leading-[1.05] tracking-[-0.025em] md:text-[40px]"><SplitWords text={t.title} /></h2>
            <p data-reveal style={{ ["--d" as string]: "80ms" }} className="mt-6 max-w-[48ch]">{t.text}</p>
            <ul data-reveal style={{ ["--d" as string]: "160ms" }} className="mt-8 space-y-1 text-xl font-medium">
              {t.questions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
            <div data-reveal style={{ ["--d" as string]: "240ms" }} className="mt-10">
              <a className="btn" href={whatsappUrl(t.message)} target="_blank" rel="noreferrer">
                {t.cta}
              </a>
            </div>
          </div>

          <div ref={stageRef} data-ui className="mx-auto w-full max-w-md lg:col-span-5 lg:col-start-8" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.p
                key={clear ? "after" : "before"}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`mb-3 text-lg font-medium ${clear ? "text-accent" : "text-[#e8a39a]"}`}
              >
                {clear ? t.after : t.before}
              </motion.p>
            </AnimatePresence>

            <div className="relative overflow-hidden bg-surface">
              <div className="flex items-center gap-1.5 bg-ground/40 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-[#ff4655]" />
                <span className="ml-2 h-3 flex-1 bg-white/5" />
              </div>
              <div className="relative aspect-[4/3.6]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={clear ? "clear" : "messy"}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.45 }}
                  >
                    {clear ? <ClearPage t={t} /> : <MessyPage t={t} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
