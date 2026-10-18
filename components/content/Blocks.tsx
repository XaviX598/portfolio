import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import RevealObserver from "@/components/RevealObserver";
import SectionReveal from "@/components/SectionReveal";
import SplitWords from "@/components/SplitWords";
import { whatsappUrl } from "@/lib/contact";
import { projects } from "@/lib/projects";

// Piezas compartidas de las páginas de contenido (rubros, proyectos, guías): mismo sistema
// visual que los servicios, con los temas alternando azul noche, crema y rojo.

export function ContentShell({ children }: { children: ReactNode }) {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main>{children}</main>
      <Footer lang="es" />
      <FloatingButtons lang="es" />
    </>
  );
}

// Los títulos largos (frases clave completas para SEO) bajan de tamaño para no pasar de dos líneas.
export function PageHero({
  title,
  lead,
  price,
  message,
  cta = "Cotizar por WhatsApp",
  aside,
}: {
  title: string;
  lead: string;
  price?: number;
  message: string;
  cta?: string;
  aside?: ReactNode;
}) {
  return (
    <section className="page-x bg-ground pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <h1 className={`lines font-extrabold leading-[0.95] tracking-[-0.04em] ${title.length > 28 ? "text-[7.2vw] md:text-[5.4vw] lg:text-[4.4vw]" : "text-[9.5vw] md:text-[6.4vw] lg:text-[5.6vw]"}`}>
            <span className="line">
              <span data-line>{title}</span>
            </span>
          </h1>
          <p data-fade className="mt-6 max-w-[46ch] text-[20px] leading-snug md:text-[22px]" style={{ ["--d" as string]: "450ms" }}>
            {lead}
          </p>
        </div>
        <div data-fade className="lg:col-span-4 lg:text-right" style={{ ["--d" as string]: "550ms" }}>
          {aside}
          {price !== undefined && (
            <p className="text-[16vw] font-extrabold leading-[0.85] tracking-[-0.04em] md:text-[9vw] lg:text-[5.6vw]">
              <span className="text-[22px] font-medium tracking-normal text-muted">desde </span>${price.toLocaleString("es-EC")}
            </p>
          )}
          <a className="btn mt-6 w-full lg:w-auto" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export function WideShot({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="relative aspect-[2/1] w-full overflow-hidden bg-surface md:aspect-[21/9]">
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover object-top" />
    </figure>
  );
}

export function ProseSection({ id, theme, title, paragraphs, children }: { id: string; theme: string; title: string; paragraphs: string[]; children?: ReactNode }) {
  return (
    <SectionReveal id={id} className={theme}>
      <section className="page-x bg-ground py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 data-reveal="words" className="text-[28px] font-medium leading-tight tracking-[-0.02em] lg:col-span-5 lg:text-[40px]">
            <SplitWords text={title} />
          </h2>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} data-reveal className="text-[17px] leading-[1.65] md:text-lg">
                {paragraph}
              </p>
            ))}
            {children}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

export function ListSection({ id, theme, title, items }: { id: string; theme: string; title: string; items: string[] }) {
  return (
    <SectionReveal id={id} className={theme}>
      <section className="page-x bg-ground py-24 md:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <h2 data-reveal="words" className="text-[28px] font-medium leading-tight tracking-[-0.02em] lg:col-span-5 lg:text-[40px]">
            <SplitWords text={title} />
          </h2>
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:col-span-7">
            {items.map((item, i) => (
              <li key={item} data-reveal style={{ ["--d" as string]: `${(i % 2) * 60}ms` }} className="flex gap-3 text-[17px] leading-[1.5] md:text-lg">
                <span className="mt-[0.6em] h-1.5 w-3 shrink-0 bg-accent" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </SectionReveal>
  );
}

export function FaqSection({ id = "preguntas", theme = "theme-dark", items }: { id?: string; theme?: string; items: { q: string; a: string }[] }) {
  return (
    <SectionReveal id={id} className={theme}>
      <section className="page-x bg-ground py-24 md:py-32">
        <h2 data-reveal="words" className="text-[28px] font-medium tracking-[-0.02em] md:text-[40px]">
          <SplitWords text="Preguntas frecuentes" />
        </h2>
        <div className="mt-10 space-y-2 md:mt-14 lg:ml-[33.333%]">
          {items.map((item, i) => (
            <details key={item.q} data-reveal className="group -mx-[var(--margin)] px-[var(--margin)] py-4 open:bg-surface" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-[19px] md:text-[21px]">
                {item.q}
                <svg className="h-4 w-4 shrink-0 transition-transform duration-300 group-open:rotate-180" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path d="M3 6l5 5 5-5" />
                </svg>
              </summary>
              <p className="mt-4 max-w-[56ch] pb-2 text-base md:text-[17px]">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </SectionReveal>
  );
}

export function RelatedLinks({ id = "relacionados", theme = "theme-light", title, links }: { id?: string; theme?: string; title: string; links: { href: string; label: string; note?: string }[] }) {
  return (
    <SectionReveal id={id} className={theme}>
      <section className="page-x bg-ground py-24 md:py-32">
        <h2 data-reveal="words" className="mb-10 text-[28px] font-medium tracking-[-0.02em]">
          <SplitWords text={title} />
        </h2>
        <ul>
          {links.map((link, i) => (
            <li key={link.href} data-reveal style={{ ["--d" as string]: `${i * 50}ms` }}>
              <Link href={link.href} className="group flex flex-col py-2 md:flex-row md:items-baseline md:justify-between">
                <span className="text-[8vw] font-extrabold leading-none tracking-[-0.035em] text-muted transition-colors duration-200 group-hover:text-ink md:text-[3.6vw]">
                  {link.label}
                </span>
                {link.note && <span className="text-[15px] text-muted">{link.note}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SectionReveal>
  );
}

export function CtaBand({ title, text, message, button }: { title: string; text: string; message: string; button: string }) {
  return (
    <SectionReveal id="cotizar" className="theme-red">
      <section className="page-x flex min-h-[60svh] flex-col justify-between bg-ground py-16 text-ink md:py-20">
        <h2 data-reveal="words" className="max-w-[16ch] text-[9vw] font-extrabold leading-[0.95] tracking-[-0.04em] md:text-[6vw]">
          <SplitWords text={title} />
        </h2>
        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p data-reveal className="max-w-[34ch] text-[17px] md:text-xl">{text}</p>
          <a
            data-reveal
            className="inline-flex min-h-14 w-full items-center justify-center bg-ink px-8 font-medium text-ground transition-transform duration-150 active:scale-[0.97] md:w-auto"
            href={whatsappUrl(message)}
            target="_blank"
            rel="noreferrer"
          >
            {button}
          </a>
        </div>
      </section>
    </SectionReveal>
  );
}


// Tira de proyectos reales: prueba de trabajo y enlaces internos hacia cada caso.
export function ProjectStrip({ id = "proyectos", theme = "theme-light", title = "Proyectos en producción", exclude }: { id?: string; theme?: string; title?: string; exclude?: string }) {
  const list = projects.filter((p) => p.slug !== exclude).slice(0, 4);
  return (
    <SectionReveal id={id} className={theme}>
      <section className="page-x bg-ground pb-24 pt-32 md:pb-32 md:pt-44">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <h2 data-reveal="words" className="max-w-[14ch] text-[28px] font-medium tracking-[-0.02em] md:max-w-none lg:text-[40px]">
            <SplitWords text={title} />
          </h2>
          <Link href="/proyectos" className="link text-[15px] text-muted">
            Ver todos los proyectos
          </Link>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p, i) => (
            <li key={p.slug} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
              <Link href={`/proyectos/${p.slug}`} className="group block">
                <span className="relative block aspect-[2/1] overflow-hidden bg-surface">
                  <Image src={p.image} alt={`${p.kind.es}: ${p.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                </span>
                <span className="mt-4 block text-[18px] font-medium group-hover:underline">{p.kind.es}</span>
                <span className="block text-[15px] text-muted">{p.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SectionReveal>
  );
}
