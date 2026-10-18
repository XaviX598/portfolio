"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import SectionReveal from "./SectionReveal";

export type StageScene = { id: string; theme: string; node: ReactNode };

// Escenario fijo: la pantalla se queda quieta y el scroll cambia de una sección a la siguiente
// con un barrido en diagonal, en vez de desplazarla hacia arriba. Solo se activa si cada
// sección cabe en una pantalla; si no (o con movimiento reducido) las secciones fluyen normal.
export default function SceneStage({ scenes }: { scenes: StageScene[] }) {
  const reduce = useReducedMotion();
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [fits, setFits] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const measure = () => setFits(contentRefs.current.every((el) => el && el.offsetHeight <= window.innerHeight));
    const observer = new ResizeObserver(measure);
    contentRefs.current.forEach((el) => el && observer.observe(el));
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [reduce, scenes.length, fits]);

  const pinned = fits && !reduce;
  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    contentRefs.current[i] = el;
  };

  if (!pinned) {
    return (
      <>
        {scenes.map((s, i) => (
          <SectionReveal key={s.id} id={s.id} className={s.theme}>
            <div ref={setRef(i)}>{s.node}</div>
          </SectionReveal>
        ))}
      </>
    );
  }

  return <PinnedStage scenes={scenes} setRef={setRef} />;
}

function PinnedStage({ scenes, setRef }: { scenes: StageScene[]; setRef: (i: number) => (el: HTMLDivElement | null) => void }) {
  const track = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: track, offset: ["start start", "end end"] });
  const n = scenes.length;

  return (
    <SectionReveal id={scenes[0].id} className={scenes[0].theme}>
      <div ref={track} className="relative" style={{ height: `${n * 100}svh` }}>
        {/* Anclas para la navegación: cada una cae donde su sección ya terminó de entrar. */}
        {scenes.slice(1).map((s, i) => (
          <span key={s.id} id={s.id} className="absolute left-0 size-0" style={{ top: `${(i + 1) * 100}svh` }} aria-hidden="true" />
        ))}
        <div className="sticky top-0 h-svh overflow-hidden">
          {scenes.map((s, i) => (
            <Scene key={s.id} index={i} count={n} progress={scrollYProgress} theme={s.theme} contentRef={setRef(i)}>
              {s.node}
            </Scene>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

function Scene({
  index,
  count,
  progress,
  theme,
  contentRef,
  children,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
  theme: string;
  contentRef: (el: HTMLDivElement | null) => void;
  children: ReactNode;
}) {
  const span = 1 / (count - 1);
  // Cada cambio ocupa el tramo central de su pantalla de scroll; antes y después la escena se queda quieta.
  const enterRange = index === 0 ? [-2, -1] : [(index - 1 + 0.15) * span, (index - 1 + 0.85) * span];
  const leaveRange = index === count - 1 ? [2, 3] : [(index + 0.15) * span, (index + 0.85) * span];

  const enter = useTransform(progress, enterRange, [0, 1]);
  const leave = useTransform(progress, leaveRange, [0, 1]);
  // Tres tiempos: el contenido que sale se desvanece, el color nuevo barre la pantalla en diagonal
  // y el contenido nuevo entra con un zoom. Así nunca hay texto tapado a medias.
  const wipe = useTransform(enter, [0.2, 0.6], [0, 1]);
  const clipPath = useTransform(wipe, (w) => {
    const right = 100 - w * 118;
    return `polygon(0 ${right + 18}%, 100% ${right}%, 100% 100%, 0 100%)`;
  });
  const opacity = useTransform([enter, leave], ([e, l]: number[]) => Math.min(1, Math.max(0, (e - 0.6) / 0.3)) * Math.max(0, 1 - l / 0.2));
  const scale = useTransform([enter, leave], ([e, l]: number[]) => (1.1 - Math.min(1, Math.max(0, (e - 0.6) / 0.4)) * 0.1) * (1 - Math.min(1, l / 0.2) * 0.04));
  const sceneVisibility = useTransform([wipe, leave], ([w, l]: number[]) => (w <= 0.001 || l >= 0.6 ? "hidden" : "visible"));
  const contentVisibility = useTransform([enter, leave], ([e, l]: number[]) => (e < 0.6 || l >= 0.2 ? "hidden" : "visible"));

  return (
    <motion.div className={`absolute inset-0 bg-ground ${theme}`} style={{ clipPath, visibility: sceneVisibility, zIndex: index }}>
      <motion.div className="flex h-full flex-col justify-center" style={{ scale, opacity, visibility: contentVisibility }}>
        <div ref={contentRef}>{children}</div>
      </motion.div>
    </motion.div>
  );
}
