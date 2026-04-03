"use client";

import FadeIn from "./FadeIn";

const highlights = [
  "Java + Spring Boot",
  "Vue / React + TypeScript",
  "PostgreSQL + API Design",
  "Cloud Deployments (Vercel / Oracle)",
];

const metrics = [
  { label: "Production Projects", value: "5+" },
  { label: "Core Stack Focus", value: "Full Stack" },
  { label: "Architecture Mindset", value: "Clean" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[720px] h-[420px] bg-teal-500/10 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[340px] h-[340px] bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-24 -right-20 w-[300px] h-[300px] bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-400/30 bg-teal-500/10 text-teal-300 text-xs sm:text-sm uppercase tracking-[0.12em]">
                <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse" />
                Open to opportunities
              </span>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold text-zinc-100">
                I build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                  reliable products
                </span>{" "}
                that move from idea to production.
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-5 text-zinc-300 text-lg max-w-2xl leading-relaxed">
                I am Kevin Xavier Aguilar Velasco, Full Stack Engineer focused on
                scalable web platforms, clean architecture, and professional user
                experiences for real business operations.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-2.5">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-900/70 text-zinc-300 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.32}>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary-solid">
                  View Projects
                </a>
                <a href="#contact" className="btn-secondary-outline">
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/xavier-aguilar-93759b2bb"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary-outline"
                >
                  LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <aside className="rounded-2xl border border-white/10 bg-zinc-900/70 backdrop-blur-xl p-6 sm:p-7">
              <p className="text-zinc-400 text-xs uppercase tracking-[0.16em]">
                Professional Snapshot
              </p>
              <div className="mt-5 space-y-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border border-white/10 bg-zinc-950/70 p-4"
                  >
                    <p className="text-2xl font-semibold text-teal-300">
                      {metric.value}
                    </p>
                    <p className="text-sm text-zinc-400 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-3">
                <a
                  href="/CV Xavier Aguilar.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary-outline text-center"
                >
                  CV (ES)
                </a>
                <a
                  href="/CV Xavier Aguilar English.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary-outline text-center"
                >
                  CV (EN)
                </a>
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
