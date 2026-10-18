"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, animate, motion, useMotionValueEvent, useScroll } from "framer-motion";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";

const copy = {
  es: {
    title: "Un pedido, cero trabajo manual",
    steps: [
      { title: "Llega el pedido", text: "Un cliente escribe por WhatsApp a las 11 de la noche." },
      { title: "Se registra solo", text: "El pedido entra a tu sistema y el inventario se descuenta." },
      { title: "Se factura", text: "La factura electrónica se emite y le llega al cliente." },
      { title: "Tú ves el resultado", text: "En la mañana tienes el reporte del día en tu celular." },
    ],
    chatName: "Cliente nuevo",
    chatStatus: "respuesta automática",
    order: "Hola, quiero 3 cajas de café molido para mañana",
    reply: "¡Listo! Pedido #1042 registrado. Total: $54,00. Te llega mañana antes de las 10:00.",
    stock: "Inventario",
    product: "Café molido 500 g",
    others: ["Azúcar 1 kg", "Té verde 25 u"],
    orders: "Pedidos de hoy",
    newOrder: "Pedido #1042 · $54,00",
    newTag: "Nuevo",
    oldOrders: ["#1041 · $32,50", "#1040 · $18,00", "#1039 · $76,20"],
    invoice: "Factura 001-001-000001042",
    lines: ["3 × Café molido 500 g", "Subtotal", "IVA 15%", "Total"],
    amounts: ["$46,96", "$46,96", "$7,04", "$54,00"],
    stamp: "Autorizada",
    sent: "Enviada al cliente por correo y WhatsApp",
    report: "Reporte de ayer",
    sales: "en ventas",
    ordersCount: "pedidos",
    errors: "errores de digitación",
    sep: ".",
  },
  en: {
    title: "One order, zero manual work",
    steps: [
      { title: "The order arrives", text: "A customer messages on WhatsApp at 11 pm." },
      { title: "It logs itself", text: "The order enters your system and stock is updated." },
      { title: "It gets invoiced", text: "The e-invoice is issued and sent to the customer." },
      { title: "You see the result", text: "In the morning the daily report is on your phone." },
    ],
    chatName: "New customer",
    chatStatus: "automatic reply",
    order: "Hi, I would like 3 boxes of ground coffee for tomorrow",
    reply: "Done! Order #1042 logged. Total: $54.00. It arrives tomorrow before 10:00.",
    stock: "Inventory",
    product: "Ground coffee 500 g",
    others: ["Sugar 1 kg", "Green tea 25 ct"],
    orders: "Today's orders",
    newOrder: "Order #1042 · $54.00",
    newTag: "New",
    oldOrders: ["#1041 · $32.50", "#1040 · $18.00", "#1039 · $76.20"],
    invoice: "Invoice 001-001-000001042",
    lines: ["3 × Ground coffee 500 g", "Subtotal", "VAT 15%", "Total"],
    amounts: ["$46.96", "$46.96", "$7.04", "$54.00"],
    stamp: "Authorized",
    sent: "Sent to the customer by email and WhatsApp",
    report: "Yesterday's report",
    sales: "in sales",
    ordersCount: "orders",
    errors: "typing errors",
    sep: ",",
  },
};

type Copy = (typeof copy)["es"];

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease },
});

const plain = (n: number) => String(Math.round(n));

// Un número que cuenta desde `from` hasta `to` cuando aparece la escena.
function Ticker({ from, to, delay = 0, prefix = "", sep = "" }: { from: number; to: number; delay?: number; prefix?: string; sep?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const format = (n: number) => prefix + plain(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const show = (n: number) => prefix + plain(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);
    const controls = animate(from, to, {
      delay,
      duration: 1.2,
      ease,
      onUpdate: (v) => {
        el.textContent = show(v);
      },
    });
    return () => controls.stop();
  }, [from, to, delay, prefix, sep]);

  return (
    <span ref={ref} className="tabular-nums">
      {format(from)}
    </span>
  );
}

function Bubble({ me = false, delay, children }: { me?: boolean; delay: number; children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, scale: 0.85, originX: me ? 1 : 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
      className={`max-w-[85%] px-3 py-2 text-sm lg:text-base leading-snug ${me ? "self-end bg-accent text-accent-ink" : "self-start bg-surface text-ink"}`}
    >
      {children}
    </motion.p>
  );
}

function OrderFrame({ t }: { t: Copy }) {
  return (
    <div className="flex h-full flex-col p-4 sm:p-6">
      <div className="flex flex-1 flex-col overflow-hidden bg-ground">
        <div className="flex items-center gap-3 bg-surface px-4 py-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs lg:text-sm font-bold text-accent-ink">CN</span>
          <div className="leading-tight">
            <p className="text-sm lg:text-base font-medium text-ink">{t.chatName}</p>
            <p className="text-[11px] text-muted lg:text-xs">{t.chatStatus} · 23:12</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-end gap-2 p-4">
          <Bubble delay={0.3}>{t.order}</Bubble>
          <motion.p
            className="flex gap-1 self-end bg-accent px-3 py-2.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ delay: 0.9, duration: 1, times: [0, 0.15, 0.85, 1] }}
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-accent-ink"
                animate={{ y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
              />
            ))}
          </motion.p>
          <Bubble me delay={1.9}>
            {t.reply}
          </Bubble>
        </div>
      </div>
    </div>
  );
}

function SystemFrame({ t }: { t: Copy }) {
  return (
    <div className="grid h-full grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:p-6">
      <motion.div {...rise(0.1)} className="flex flex-col bg-ground p-4">
        <p className="text-xs lg:text-sm font-medium text-muted">{t.stock}</p>
        <div className="mt-3 space-y-2 text-sm lg:text-base">
          <div className="flex items-center justify-between bg-accent/15 px-3 py-2 ring-1 ring-accent/60">
            <span className="text-ink">{t.product}</span>
            <span className="font-bold text-accent">
              <Ticker from={48} to={45} delay={0.8} />
            </span>
          </div>
          {t.others.map((name, i) => (
            <div key={name} className="flex items-center justify-between px-3 py-2 text-muted">
              <span>{name}</span>
              <span className="tabular-nums">{[120, 36][i]}</span>
            </div>
          ))}
        </div>
        <div className="mt-auto flex h-16 items-end gap-1.5 pt-4">
          {[40, 65, 50, 80, 58, 92, 70].map((h, i) => (
            <motion.span
              key={i}
              className={`flex-1 ${i === 5 ? "bg-accent" : "bg-surface"}`}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5, ease }}
            />
          ))}
        </div>
      </motion.div>
      <motion.div {...rise(0.25)} className="hidden flex-col bg-ground p-4 sm:flex">
        <p className="text-xs lg:text-sm font-medium text-muted">{t.orders}</p>
        <div className="mt-3 space-y-2 text-sm lg:text-base">
          <motion.div
            className="flex items-center justify-between bg-surface px-3 py-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 240, damping: 20 }}
          >
            <span className="text-ink">{t.newOrder}</span>
            <span className="bg-accent px-2 py-0.5 text-[11px] font-bold text-accent-ink">{t.newTag}</span>
          </motion.div>
          {t.oldOrders.map((row) => (
            <div key={row} className="px-3 py-2 text-muted">
              {row}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function InvoiceFrame({ t }: { t: Copy }) {
  return (
    <div className="relative flex h-full flex-col items-center justify-center p-4 sm:p-6">
      <motion.div {...rise(0.1)} className="relative w-full max-w-sm lg:max-w-md bg-ink p-5 text-ground">
        <p className="text-xs lg:text-sm font-bold">{t.invoice}</p>
        <div className="mt-4 space-y-2 text-sm lg:text-base">
          {t.lines.map((line, i) => (
            <motion.div key={line} {...rise(0.3 + i * 0.12)} className={`flex justify-between ${i === 3 ? "pt-2 font-bold" : ""}`}>
              <span>{line}</span>
              <span className="tabular-nums">{t.amounts[i]}</span>
            </motion.div>
          ))}
        </div>
        <motion.span
          className="absolute -right-2 -top-4 rotate-[-12deg] border-[3px] border-accent bg-ink px-3 py-1 text-sm lg:text-base font-extrabold uppercase text-accent sm:-right-6"
          initial={{ opacity: 0, scale: 2.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 380, damping: 16 }}
        >
          {t.stamp}
        </motion.span>
      </motion.div>
      <motion.p
        className="mt-5 flex items-center gap-2 bg-accent px-4 py-2 text-sm lg:text-base font-medium text-accent-ink"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.45, ease }}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12l16-8-6 16-3-7-7-1z" />
        </svg>
        {t.sent}
      </motion.p>
    </div>
  );
}

function ReportFrame({ t }: { t: Copy }) {
  return (
    <div className="grid h-full grid-cols-1 gap-3 p-4 sm:grid-cols-[1.2fr_1fr] sm:p-6">
      <motion.div {...rise(0.1)} className="flex flex-col justify-between bg-ground p-5">
        <p className="text-xs lg:text-sm font-medium text-muted">{t.report}</p>
        <div>
          <p className="text-4xl font-extrabold tracking-[-0.03em] text-ink sm:text-5xl lg:text-6xl">
            <Ticker from={0} to={1284} delay={0.3} prefix="$" sep={t.sep} />
          </p>
          <p className="text-sm lg:text-base text-muted">{t.sales}</p>
        </div>
        <svg viewBox="0 0 200 60" className="mt-3 h-16 w-full" aria-hidden="true">
          <motion.path
            d="M0 52 L30 44 L60 47 L90 30 L120 34 L150 18 L200 8"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 1.3, ease }}
          />
        </svg>
      </motion.div>
      <div className="hidden grid-rows-2 gap-3 sm:grid">
        <motion.div {...rise(0.3)} className="flex flex-col justify-end bg-ground p-5">
          <p className="text-3xl font-extrabold lg:text-5xl text-ink">
            <Ticker from={0} to={38} delay={0.5} />
          </p>
          <p className="text-sm lg:text-base text-muted">{t.ordersCount}</p>
        </motion.div>
        <motion.div {...rise(0.45)} className="flex flex-col justify-end bg-accent p-5 text-accent-ink">
          <p className="text-3xl font-extrabold lg:text-5xl">0</p>
          <p className="text-sm lg:text-base">{t.errors}</p>
        </motion.div>
      </div>
    </div>
  );
}

const frames = [OrderFrame, SystemFrame, InvoiceFrame, ReportFrame];

// Motion graphic narrativo: la sección queda fija (sticky) y el scroll avanza
// las 4 escenas de un pedido automatizado: WhatsApp → sistema → factura → reporte.
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
