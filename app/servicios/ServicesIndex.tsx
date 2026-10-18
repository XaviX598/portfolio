"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { services, serviceExtras } from "./data";
import { QUOTE_MESSAGE, whatsappUrl } from "@/lib/contact";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import RevealObserver from "@/components/RevealObserver";

export default function ServicesIndex() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <>
      <RevealObserver />
      <SiteHeader />

      <main>
        <section className="page-x bg-ground pb-20 pt-10 md:pb-28 md:pt-16">
          <h1 className="lines text-[17vw] font-extrabold leading-[0.85] tracking-[-0.04em] md:text-[11vw]">
            <span className="line">
              <span data-line>Servicios</span>
            </span>
          </h1>
          <p data-fade className="mt-8 max-w-[46ch] text-[22px] leading-snug" style={{ ["--d" as string]: "400ms" }}>
            Páginas web, tiendas online, apps e inteligencia artificial para negocios en Ecuador. Precio cerrado por escrito antes de empezar.
          </p>
          <a data-fade style={{ ["--d" as string]: "500ms" }} className="btn mt-8" href={whatsappUrl(QUOTE_MESSAGE.es)} target="_blank" rel="noreferrer">
            Cotiza gratis por WhatsApp
          </a>
        </section>

        <section className="page-x bg-surface py-20 md:py-32">
          <div className="grid gap-10 md:grid-cols-12">
            <ul className="md:col-span-8">
              {services.map((s, i) => {
                const extra = serviceExtras[s.slug];
                return (
                  <li key={s.slug} className="mb-12 md:mb-0" data-reveal style={{ ["--d" as string]: `${i * 50}ms` }}>
                    <div className="relative mb-4 aspect-[2/1] overflow-hidden md:hidden">
                      <Image src={encodeURI(extra.image)} alt={extra.imageAlt} fill sizes="100vw" className="object-cover object-top" />
                    </div>
                    <Link
                      href={`/servicios/${s.slug}`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="flex flex-col py-2.5 md:flex-row md:items-baseline md:justify-between md:gap-6"
                    >
                      <span
                        className={`text-[9.5vw] font-extrabold leading-none tracking-[-0.035em] transition-colors duration-200 md:text-[4.6vw] ${
                          active === i ? "md:text-ink" : "md:text-muted"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-1 text-[15px] text-muted md:mt-0 md:shrink-0">desde ${extra.price.toLocaleString("es-EC")}</span>
                    </Link>
                    <p className="max-w-[46ch] md:hidden">{s.shortDescription}</p>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:col-span-4 md:block">
              <div className="sticky top-[12vh]">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-ground">
                  {services.map((s, i) => (
                    <Image
                      key={s.slug}
                      src={encodeURI(serviceExtras[s.slug].image)}
                      alt={serviceExtras[s.slug].imageAlt}
                      fill
                      sizes="30vw"
                      className={`object-cover object-top transition-[opacity,transform] duration-500 ${
                        active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                      }`}
                    />
                  ))}
                </div>
                <p className="mt-4 text-[15px] text-muted">{serviceExtras[current.slug].time}</p>
                <p className="mt-1">{current.shortDescription}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="page-x flex min-h-[60svh] flex-col justify-between bg-ink py-16 text-ground md:py-20">
          <h2 data-reveal className="text-[12vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[8vw]">
            <span className="block">¿No sabes</span>
            <span className="block">cuál elegir?</span>
          </h2>
          <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p data-reveal className="max-w-[34ch] text-[17px] md:text-xl">
              Cuéntanos qué quieres lograr y te recomendamos la opción con el mejor resultado para tu presupuesto.
            </p>
            <a
              data-reveal
              className="inline-flex min-h-14 w-full items-center justify-center bg-ground px-8 font-medium text-ink transition-transform duration-150 active:scale-[0.97] md:w-auto"
              href={whatsappUrl(QUOTE_MESSAGE.es)}
              target="_blank"
              rel="noreferrer"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer lang="es" />
      <FloatingButtons lang="es" />
    </>
  );
}
