"use client";

import { useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion, useMotionValueEvent, useScroll } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";

const copy = {
  es: {
    title: "De una búsqueda en Google a tu WhatsApp",
    steps: [
      { title: "Te buscan", text: "Un cliente busca lo que vendes en Google." },
      { title: "Te encuentran", text: "Tu negocio aparece gracias al SEO técnico." },
      { title: "Confían en ti", text: "Tu página carga rápido y deja claro por qué elegirte." },
      { title: "Te escriben", text: "Un clic y el cliente ya está en tu WhatsApp." },
    ],
    query: "páginas web en Ecuador",
    business: "Tu Negocio",
    businessDesc: "Páginas web y apps que traen clientes. Cotiza gratis por WhatsApp.",
    competitor: "Otro resultado",
    siteTitle: "Bienvenido a tu negocio",
    cta: "Cotizar por WhatsApp",
    chatName: "Cliente nuevo",
    online: "en línea",
    message: "¡Hola! Vi tu página y quiero cotizar.",
    badge: "Nuevo cliente",
  },
  en: {
    title: "From a Google search to your WhatsApp",
    steps: [
      { title: "They search", text: "A client looks for what you sell on Google." },
      { title: "They find you", text: "Your business shows up thanks to technical SEO." },
      { title: "They trust you", text: "Your page loads fast and makes it clear why to choose you." },
      { title: "They message you", text: "One click and the client is on your WhatsApp." },
    ],
    query: "websites in Ecuador",
    business: "Your Business",
    businessDesc: "Websites and apps that bring clients. Free quote on WhatsApp.",
    competitor: "Another result",
    siteTitle: "Welcome to your business",
    cta: "Quote on WhatsApp",
    chatName: "New client",
    online: "online",
    message: "Hi! I saw your website and I'd like a quote.",
    badge: "New client",
  },
};

type Copy = (typeof copy)["es"];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function Cursor({ from, to, delay = 0 }: { from: [number, number]; to: [number, number]; delay?: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute left-0 top-0 z-20"
      initial={{ x: `${from[0]}%`, y: `${from[1]}%`, opacity: 0 }}
      animate={{ x: `${to[0]}%`, y: `${to[1]}%`, opacity: 1 }}
      transition={{ duration: 0.9, delay, ease }}
      style={{ width: "100%", height: "100%" }}
    >
      <motion.svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        className="drop-shadow-lg" /* taste-skill-ignore: el cursor flota sobre la escena */
        animate={{ scale: [1, 1, 0.8, 1] }}
        transition={{ duration: 0.4, delay: delay + 0.95, times: [0, 0.2, 0.6, 1] }}
      >
        <path d="M4 2l16 9.5-7 1.5-3.5 6.5z" fill="white" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round" />
      </motion.svg>
    </motion.div>
  );
}

function Ripple({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.span
      className="pointer-events-none absolute z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-teal-300"
      style={{ left: x, top: y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.6], opacity: [0.9, 0] }}
      transition={{ duration: 0.6, delay }}
    />
  );
}

function SearchFrame({ t }: { t: Copy }) {
  return (
    <div className="flex h-full flex-col justify-center px-6 sm:px-10">
      <div className="mb-6 text-center text-3xl font-semibold tracking-tight text-white/90">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </div>
      <div className="flex items-center gap-3 rounded-full bg-zinc-800 px-5 py-3">
        <svg className="h-4 w-4 shrink-0 text-zinc-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
        </svg>
        <span className="text-sm text-white sm:text-base">
          {Array.from(t.query).map((char, i) => (
            <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 + i * 0.05, duration: 0.01 }}>
              {char}
            </motion.span>
          ))}
          <motion.span
            className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-teal-300"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.9 }}
          />
        </span>
      </div>
      <div className="mt-6 space-y-3">
        {[0.85, 0.65, 0.75].map((w, i) => (
          <motion.div
            key={i}
            className="h-2.5 rounded-full bg-white/10"
            style={{ width: `${w * 100}%` }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5 + i * 0.12, duration: 0.5, ease }}
          />
        ))}
      </div>
    </div>
  );
}

function ResultsFrame({ t }: { t: Copy }) {
  return (
    <div className="relative flex h-full flex-col justify-center gap-2 px-4 sm:gap-3 sm:px-10">
      {[0, 1, 2].map((i) => {
        const isOurs = i === 1;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={isOurs ? { opacity: 1, y: 0, scale: [1, 1, 1.04] } : { opacity: 0.45, y: 0 }}
            transition={{ delay: i * 0.12, duration: isOurs ? 1.2 : 0.5, ease }}
            className={`rounded-xl p-3 sm:p-4 ${i === 2 ? "hidden sm:block" : ""} ${isOurs ? "bg-teal-400/15 ring-1 ring-teal-400/60" : "bg-zinc-900/70"}`}
          >
            <p className="text-xs text-zinc-500">{isOurs ? "www.tunegocio.com" : "www.ejemplo.com"}</p>
            <p className={`mt-0.5 text-sm font-semibold sm:mt-1 sm:text-base ${isOurs ? "text-teal-300" : "text-zinc-400"}`}>{isOurs ? t.business : t.competitor}</p>
            {isOurs ? (
              <p className="mt-1 text-xs text-zinc-300">{t.businessDesc}</p>
            ) : (
              <div className="mt-2 h-2 w-3/4 rounded-full bg-white/10" />
            )}
          </motion.div>
        );
      })}
      <Cursor from={[85, 95]} to={[45, 55]} delay={0.6} />
      <Ripple x="47%" y="57%" delay={1.55} />
    </div>
  );
}

function WebsiteFrame({ t }: { t: Copy }) {
  const block = (delay: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.45, ease },
  });

  return (
    <div className="relative flex h-full flex-col p-4 sm:p-6">
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-zinc-900">
        <div className="flex items-center gap-1.5 bg-zinc-950/60 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
          <span className="ml-2 h-3 flex-1 rounded bg-white/5" />
        </div>
        <motion.div className="h-0.5 bg-teal-400" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.6, ease }} />
        <div className="flex flex-1 flex-col justify-center gap-3 p-5">
          <motion.div {...block(0.5)} className="h-2 w-16 rounded-full bg-teal-400/60" />
          <motion.p {...block(0.65)} className="text-lg font-bold text-white sm:text-xl">{t.siteTitle}</motion.p>
          <motion.div {...block(0.8)} className="h-2 w-5/6 rounded-full bg-white/10" />
          <motion.div {...block(0.9)} className="h-2 w-2/3 rounded-full bg-white/10" />
          <motion.div
            {...block(1.05)}
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-xs font-semibold text-white sm:text-sm"
          >
            {t.cta}
          </motion.div>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div key={i} {...block(1.2 + i * 0.1)} className="h-10 rounded-lg border border-white/10 bg-white/5" />
            ))}
          </div>
        </div>
      </div>
      <Cursor from={[80, 90]} to={[17, 62]} delay={1.5} />
      <Ripple x="19%" y="64%" delay={2.45} />
    </div>
  );
}

function ChatFrame({ t }: { t: Copy }) {
  return (
    <div className="relative flex h-full flex-col p-4 sm:p-6">
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl bg-[#0b141a]">
        <div className="flex items-center gap-3 bg-[#202c33] px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600 text-xs font-medium text-white">CN</span>
          <div>
            <p className="text-sm font-semibold text-white">{t.chatName}</p>
            <p className="text-[11px] text-teal-300">{t.online}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2 p-4">
          <motion.div
            className="flex w-fit gap-1 rounded-lg bg-[#202c33] px-3 py-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 1.3, times: [0, 0.15, 0.85, 1] }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-zinc-400"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
              />
            ))}
          </motion.div>
          <motion.div
            className="w-fit max-w-[85%] rounded-lg rounded-tl-none bg-[#202c33] px-3 py-2 text-sm text-white"
            initial={{ opacity: 0, scale: 0.8, originX: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, type: "spring", stiffness: 260, damping: 18 }}
          >
            {t.message}
            <span className="ml-2 align-bottom text-[10px] text-zinc-400">10:24</span>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute right-6 top-20 flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ground sm:right-10"
        initial={{ opacity: 0, scale: 0.5, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2, type: "spring", stiffness: 300, damping: 15 }}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        {t.badge}
      </motion.div>
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute right-24 top-24 h-1.5 w-1.5 rounded-full bg-teal-300"
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], x: Math.cos((i / 8) * Math.PI * 2) * 60, y: Math.sin((i / 8) * Math.PI * 2) * 45 }}
          transition={{ delay: 2.1, duration: 0.8, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

const frames = [SearchFrame, ResultsFrame, WebsiteFrame, ChatFrame];

// Motion graphic narrativo: la sección queda fija (sticky) y el scroll avanza
// las 4 escenas del recorrido búsqueda → resultado → web → WhatsApp.
export default function JourneyMotion({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setStep(Math.min(frames.length - 1, Math.max(0, Math.floor(value * frames.length))));
  });

  const Frame = frames[step];

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative h-[250vh] bg-ground">
        <div className="page-x sticky top-0 flex h-svh items-center overflow-hidden">
          <div className="grid w-full items-center gap-8 pt-14 lg:grid-cols-12 lg:gap-10 lg:pt-0">
            <div className="lg:col-span-5">
              <h2 data-reveal="words" className="text-[28px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[40px]"><SplitWords text={t.title} /></h2>
              <ol className="mt-6 space-y-3 lg:mt-10 lg:space-y-5">
                {t.steps.map((item, idx) => {
                  const active = idx === step;
                  return (
                    <li key={item.title}>
                      <p className={`text-lg font-medium transition-colors duration-300 md:text-xl ${active ? "text-ink" : "text-muted"}`}>
                        {item.title}
                      </p>
                      <p className={`max-w-[40ch] text-base text-muted transition-opacity duration-300 ${active ? "block" : "hidden lg:block lg:opacity-60"}`}>
                        {item.text}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div data-ui className="relative mx-auto aspect-[4/3] w-full max-w-[60svh] overflow-hidden bg-surface lg:col-span-7 lg:max-w-none" aria-hidden="true">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <Frame t={t} />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-ground/60">
                <motion.div className="h-full origin-left bg-accent" style={{ scaleX: scrollYProgress }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
