"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useInView } from "framer-motion";
import FadeIn from "./FadeIn";
import MotionButton from "./MotionButton";
import type { PortfolioLang } from "./HomeClient";
import { whatsappUrl } from "@/lib/contact";

const copy = {
  es: {
    eyebrow: "Revisión gratis",
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
    proof: "★★★★★ Fotos reales del lugar",
    action: "Agendar por WhatsApp",
    noise: ["¡Bienvenidos!", "Promos", "Novedades", "Blog", "Síguenos", "¡Suscríbete!", "Ver más", "Click aquí", "Info"],
  },
  en: {
    eyebrow: "Free review",
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
    proof: "★★★★★ Real photos of the place",
    action: "Book on WhatsApp",
    noise: ["Welcome!", "Promos", "News", "Blog", "Follow us", "Subscribe!", "See more", "Click here", "Info"],
  },
};

type Copy = (typeof copy)["es"];

function MessyPage({ t }: { t: Copy }) {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <div className="flex flex-wrap gap-1 rounded bg-fuchsia-500/70 px-2 py-1 text-[10px] font-bold text-white">
        {t.noise.slice(0, 4).map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
      <div className="grid flex-1 grid-cols-[2fr_1fr] gap-2">
        <div className="relative overflow-hidden rounded bg-gradient-to-br from-orange-300 to-violet-400">
          <span className="absolute left-3 top-4 h-16 w-16 rounded-full bg-orange-200/80" />
          <span className="absolute left-10 top-8 h-14 w-14 rotate-12 rounded-lg bg-violet-200/70" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex-1 rounded bg-yellow-300 p-2 text-[10px] font-bold text-zinc-800">{t.noise[4]} ●●●</div>
          <div className="rounded bg-zinc-800 py-1 text-center text-[10px] text-white">{t.noise[6]}</div>
        </div>
      </div>
      <div className="space-y-1">
        <div className="h-1.5 w-full rounded bg-zinc-400/50" />
        <div className="h-1.5 w-4/5 rounded bg-zinc-400/50" />
      </div>
      <div className="flex gap-1.5">
        {t.noise.slice(6).map((n, i) => (
          <span key={n} className={`rounded px-2 py-1 text-[10px] ${i === 1 ? "bg-red-400 text-white" : "bg-zinc-700 text-zinc-200"}`}>
            {n}
          </span>
        ))}
      </div>
      <motion.div
        className="absolute right-6 top-16 rounded-md border border-red-300 bg-white px-3 py-2 text-[11px] font-bold text-zinc-800 shadow-xl"
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

function ClearPage({ t }: { t: Copy }) {
  const item = (delay: number) => ({
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.4 },
  });

  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <motion.div {...item(0.1)} className="relative rounded-lg bg-violet-900/80 p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-violet-300">Spa · Guayaquil</p>
        <p className="mt-1 text-lg font-bold leading-tight text-white">{t.service}</p>
        <Chip label={t.chips[0]} className="-top-3 left-3" delay={0.9} />
      </motion.div>
      <motion.p {...item(0.25)} className="relative rounded-lg bg-white/5 p-3 text-xs text-zinc-300">
        {t.audience}
        <Chip label={t.chips[1]} className="-bottom-3 right-3" delay={1.2} />
      </motion.p>
      <motion.p {...item(0.4)} className="px-1 text-xs text-amber-300">
        {t.proof}
      </motion.p>
      <div className="grid grid-cols-3 gap-2">
        {["from-rose-300/70 to-amber-200/60", "from-violet-300/60 to-sky-200/50", "from-emerald-200/60 to-teal-300/50"].map((g, i) => (
          <motion.div key={g} {...item(0.45 + i * 0.08)} className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${g}`} />
        ))}
      </div>
      <motion.div {...item(0.55)} className="relative mt-auto">
        <motion.div
          className="rounded-full bg-violet-500 py-2.5 text-center text-sm font-semibold text-white"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ delay: 1.6, duration: 0.8, repeat: 2 }}
        >
          {t.action} →
        </motion.div>
        <Chip label={t.chips[2]} className="-top-3 right-6" delay={1.5} />
      </motion.div>
    </div>
  );
}

function Chip({ label, className, delay }: { label: string; className: string; delay: number }) {
  return (
    <motion.span
      className={`absolute z-10 flex items-center gap-1 rounded-full bg-zinc-950 px-2.5 py-1 text-[10px] font-semibold text-teal-300 ring-1 ring-teal-400/50 ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 300, damping: 18 }}
    >
      ✓ {label}
    </motion.span>
  );
}

// Motion graphic "antes/después": una página confusa se transforma en una clara.
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
      <section className="relative overflow-hidden bg-zinc-950 px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <FadeIn repeat={false}>
            <p className="text-xs uppercase tracking-[0.3em] text-teal-400">{t.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-5xl">{t.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">{t.text}</p>
            <ol className="mt-7 space-y-3">
              {t.questions.map((q, idx) => (
                <li key={q} className="flex items-center gap-3 text-zinc-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-500/15 font-mono text-xs text-violet-300 ring-1 ring-violet-400/40">
                    {idx + 1}
                  </span>
                  {q}
                </li>
              ))}
            </ol>
            <div className="mt-9">
              <MotionButton label={t.cta} variant="primary" size="lg" href={whatsappUrl(t.message)} target="_blank" rel="noreferrer" />
            </div>
          </FadeIn>

          <div ref={stageRef} className="mx-auto w-full max-w-md" aria-hidden="true">
            <div className="mb-3 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={clear ? "after" : "before"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold ${clear ? "bg-teal-400/15 text-teal-300" : "bg-red-400/15 text-red-300"}`}
                >
                  {clear ? t.after : t.before}
                </motion.span>
              </AnimatePresence>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />
                <span className="ml-2 h-3 flex-1 rounded bg-white/5" />
              </div>
              <div className="relative aspect-[4/3.6]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={clear ? "clear" : "messy"}
                    className="absolute inset-0"
                    initial={{ opacity: 0, filter: "blur(6px)", scale: 0.98 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(6px)", scale: 1.02 }}
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
