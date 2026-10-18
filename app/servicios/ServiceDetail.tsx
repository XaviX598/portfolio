import Image from "next/image";
import Link from "next/link";
import { services, serviceExtras, serviceGallery, type ServiceEntry } from "./data";
import { whatsappUrl } from "@/lib/contact";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import RevealObserver from "@/components/RevealObserver";

export default function ServiceDetail({ service }: { service: ServiceEntry }) {
  const extra = serviceExtras[service.slug];
  const price = extra.price.toLocaleString("es-EC");
  const quote = whatsappUrl(`Hola, quiero cotizar: ${service.title} (desde $${price}).`);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <RevealObserver />
      <SiteHeader />

      <main>
        <section className="page-x bg-ground pb-16 pt-10 md:pb-24 md:pt-16">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="lines text-[13vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[7vw]">
                <span className="line">
                  <span data-line>{service.title}</span>
                </span>
              </h1>
              <p data-fade className="mt-6 max-w-[40ch] text-[22px] leading-snug" style={{ ["--d" as string]: "450ms" }}>
                {service.subtitle}
              </p>
            </div>
            <div data-fade className="md:col-span-4 md:text-right" style={{ ["--d" as string]: "550ms" }}>
              <p className="text-[18vw] font-extrabold leading-[0.85] tracking-[-0.04em] md:text-[7vw]">
                <span className="text-[22px] font-medium tracking-normal text-muted">desde </span>${price}
              </p>
              <p className="mt-2 text-muted">{extra.time}</p>
              <a className="btn mt-6 w-full md:w-auto" href={quote} target="_blank" rel="noreferrer">
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <figure data-reveal className="relative aspect-[2/1] w-full overflow-hidden bg-surface md:aspect-[21/9]">
          <Image src={encodeURI(extra.image)} alt={extra.imageAlt} fill priority sizes="100vw" className="object-cover object-top" />
        </figure>

        <section className="page-x bg-surface py-24 md:py-36">
          <div className="grid gap-12 md:grid-cols-12">
            <p data-reveal className="text-[22px] leading-[1.35] md:col-span-6 md:text-[24px]">
              {service.shortDescription}
            </p>
            <div className="md:col-span-5 md:col-start-8">
              <h2 data-reveal className="text-[28px] font-medium tracking-[-0.02em]">Qué incluye</h2>
              <ul className="mt-8 grid gap-x-8 gap-y-4 text-lg sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <li key={feature} data-reveal style={{ ["--d" as string]: `${(i % 4) * 60}ms` }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-surface pb-24 md:pb-36">
          <div className="flex flex-col md:h-[56svh] md:flex-row">
            {serviceGallery[service.slug].map((src, i) => (
              <div key={src} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className={`group relative aspect-[2/1] overflow-hidden md:aspect-auto ${["md:flex-[5]", "md:flex-[3]", "md:flex-[2]"][i]}`}>
                <Image src={encodeURI(src)} alt={`Proyecto relacionado con ${service.title}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              </div>
            ))}
          </div>
          <p className="page-x mt-4 text-[15px] text-muted">Proyectos reales de Xpress Developer, en producción.</p>
        </section>

        <section className="page-x bg-ground py-24 md:py-36">
          <div className="max-w-[580px] md:ml-[30%]">
            <h2 data-reveal className="mb-12 text-[28px] font-medium tracking-[-0.02em]">Cómo lo hacemos</h2>
            <div className="space-y-10">
              {service.process.map((step) => (
                <p key={step.title} data-reveal className="text-[17px] leading-[1.6] text-muted md:text-lg">
                  <strong className="font-medium text-ink">{step.title}.</strong> {step.desc}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="page-x bg-surface py-24 md:py-32">
          <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <h2 data-reveal className="text-[28px] font-medium tracking-[-0.02em]">Otros servicios</h2>
            <Link href="/servicios" className="link text-[15px] text-muted">
              Ver todos los servicios
            </Link>
          </div>
          <ul>
            {others.map((s, i) => (
              <li key={s.slug} data-reveal style={{ ["--d" as string]: `${i * 50}ms` }}>
                <Link href={`/servicios/${s.slug}`} className="group flex flex-col py-2 md:flex-row md:items-baseline md:justify-between">
                  <span className="text-[9vw] font-extrabold leading-none tracking-[-0.035em] text-muted transition-colors duration-200 group-hover:text-ink md:text-[4vw]">
                    {s.title}
                  </span>
                  <span className="text-[15px] text-muted">desde ${serviceExtras[s.slug].price.toLocaleString("es-EC")}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="page-x flex min-h-[70svh] flex-col justify-between bg-ink py-16 text-ground md:py-20">
          <h2 data-reveal className="max-w-[16ch] text-[9vw] font-extrabold leading-[0.95] tracking-[-0.04em] md:text-[6vw]">
            {service.cta.title}
          </h2>
          <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p data-reveal className="max-w-[34ch] text-[17px] md:text-xl">{service.cta.subtitle}</p>
            <a
              data-reveal
              className="inline-flex min-h-14 w-full items-center justify-center bg-ground px-8 font-medium text-ink transition-transform duration-150 active:scale-[0.97] md:w-auto"
              href={quote}
              target="_blank"
              rel="noreferrer"
            >
              {service.cta.button}
            </a>
          </div>
        </section>
      </main>

      <Footer lang="es" />
      <FloatingButtons lang="es" />
    </>
  );
}
