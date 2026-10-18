"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Un proceso automático en vivo: cada paso se enciende cuando el anterior termina, en bucle,
// solo mientras está en pantalla.
export default function AutomationFlow({ steps, done }: { steps: string[]; done: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? steps.length : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setActive((a) => (a >= steps.length ? 0 : a + 1)), 1100);
    return () => clearInterval(id);
  }, [inView, reduce, steps.length]);

  return (
    <div ref={ref} data-ui className="bg-ground p-5 md:p-6" aria-hidden="true">
      <ol className="relative space-y-4">
        <span className="absolute bottom-4 left-[15px] top-4 w-0.5 bg-white/10">
          <span
            className="block w-full bg-accent transition-[height] duration-700"
            style={{ height: `${(Math.max(0, Math.min(active, steps.length) - 1) / (steps.length - 1)) * 100}%` }}
          />
        </span>
        {steps.map((step, i) => {
          const on = i < active;
          return (
            <li key={step} className="relative flex items-center gap-4">
              <span
                className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-colors duration-300 ${
                  on ? "bg-accent text-accent-ink" : "bg-surface text-muted"
                }`}
              >
                {on ? (
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="h-2 w-2 rounded-full bg-current" />
                )}
              </span>
              <span className={`text-base transition-colors duration-300 ${on ? "text-ink" : "text-muted"}`}>{step}</span>
            </li>
          );
        })}
      </ol>
      <p className={`mt-5 text-[15px] font-medium transition-opacity duration-500 ${active >= steps.length ? "text-accent opacity-100" : "opacity-0"}`}>{done}</p>
    </div>
  );
}
