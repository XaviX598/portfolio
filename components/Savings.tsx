"use client";

import { useState } from "react";
import type { PortfolioLang } from "./HomeClient";
import SplitWords from "./SplitWords";
import { whatsappUrl } from "@/lib/contact";

// Parte de las tareas repetitivas que se asume automatizable, y el precio de entrada de una automatización.
const SHARE = 0.7;
const ENTRY_PRICE = 500;
const WORKDAYS = 22;

const copy = {
  es: {
    title: "¿Cuánto te cuesta hacerlo a mano?",
    lead: "Mueve los valores con los datos de tu negocio y compara.",
    people: "Personas que hacen tareas repetitivas",
    hours: "Horas al día en esas tareas",
    salary: "Sueldo mensual por persona",
    today: "Hoy, a mano",
    todayLabel: "Lo que pagas al mes en tareas repetitivas.",
    after: "Automatizado",
    afterLabel: "Lo que ahorras cada mes.",
    hoursLabel: "horas al mes libres para tu equipo",
    payback: (weeks: number) => (weeks <= 1 ? "Una automatización desde $500 se paga en menos de una semana." : `Una automatización desde $500 se paga en unas ${weeks} semanas.`),
    note: "Estimación referencial: supone que automatizamos el 70% de esas tareas. El número exacto te lo damos en la cotización.",
    cta: "Quiero recuperar ese dinero",
    message: (cost: string) => `Hola, calculé que gasto ${cost} al mes en tareas repetitivas y quiero automatizarlas.`,
    sep: ".",
  },
  en: {
    title: "What does doing it by hand cost?",
    lead: "Set the values to match your business and compare.",
    people: "People doing repetitive tasks",
    hours: "Hours a day on those tasks",
    salary: "Monthly salary per person",
    today: "Today, by hand",
    todayLabel: "What you pay each month for repetitive tasks.",
    after: "Automated",
    afterLabel: "What you save every month.",
    hoursLabel: "hours a month freed for your team",
    payback: (weeks: number) => (weeks <= 1 ? "An automation from $500 pays for itself in under a week." : `An automation from $500 pays for itself in about ${weeks} weeks.`),
    note: "A rough estimate: it assumes we automate 70% of those tasks. You get the exact figure in your quote.",
    cta: "I want that money back",
    message: (cost: string) => `Hi, I worked out I spend ${cost} a month on repetitive tasks and I'd like to automate them.`,
    sep: ",",
  },
};

function Slider({ label, value, min, max, step, display, onChange }: { label: string; value: number; min: number; max: number; step: number; display: string; onChange: (v: number) => void }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4 text-[16px] md:text-[17px]">
        {label}
        <span className="text-[22px] font-medium tabular-nums">{display}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="range mt-3 w-full" />
    </label>
  );
}

// Calculadora de ahorro: el costo de las tareas repetitivas hoy frente a tenerlas automatizadas.
export default function Savings({ lang }: { lang: PortfolioLang }) {
  const t = copy[lang];
  const [people, setPeople] = useState(2);
  const [hours, setHours] = useState(3);
  const [salary, setSalary] = useState(600);

  const money = (n: number) => "$" + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, t.sep);
  const cost = people * salary * (hours / 8);
  const saved = cost * SHARE;
  const freeHours = Math.round(people * hours * WORKDAYS * SHARE);
  const weeks = saved > 0 ? Math.ceil(ENTRY_PRICE / (saved / 4.33)) : 0;

  return (
    <section className="page-x bg-ground py-24 md:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 data-reveal="words" className="max-w-[16ch] text-[10vw] font-extrabold leading-[0.92] tracking-[-0.04em] md:text-[4.6vw]">
          <SplitWords text={t.title} />
        </h2>
        <p data-reveal className="max-w-[34ch] text-lg">{t.lead}</p>
      </div>

      <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-9 lg:col-span-5">
          <Slider label={t.people} value={people} min={1} max={10} step={1} display={String(people)} onChange={setPeople} />
          <Slider label={t.hours} value={hours} min={1} max={8} step={1} display={`${hours} h`} onChange={setHours} />
          <Slider label={t.salary} value={salary} min={400} max={2000} step={50} display={money(salary)} onChange={setSalary} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7" aria-live="polite">
          <div className="bg-surface p-6 md:p-8">
            <p className="text-[48px] font-extrabold leading-none tracking-[-0.04em] tabular-nums md:text-[64px]">{money(cost)}</p>
            <p className="mt-3 text-[15px] text-muted">
              <span className="font-medium text-ink">{t.today}.</span> {t.todayLabel}
            </p>
          </div>
          <div className="bg-accent p-6 text-accent-ink md:p-8">
            <p className="text-[48px] font-extrabold leading-none tracking-[-0.04em] tabular-nums md:text-[64px]">{money(saved)}</p>
            <p className="mt-3 text-[15px]">
              <span className="font-medium">{t.after}.</span> {t.afterLabel}
            </p>
            <p className="mt-6 text-[28px] font-extrabold leading-none tabular-nums">{freeHours} h</p>
            <p className="mt-2 text-[15px]">{t.hoursLabel}</p>
          </div>
          <div className="flex flex-col gap-5 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[40ch] text-lg font-medium">{t.payback(weeks)}</p>
            <a className="btn shrink-0" href={whatsappUrl(t.message(money(cost)))} target="_blank" rel="noreferrer">
              {t.cta}
            </a>
          </div>
          <p className="text-[14px] text-muted sm:col-span-2">{t.note}</p>
        </div>
      </div>
    </section>
  );
}
