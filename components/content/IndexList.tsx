import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { whatsappUrl } from "@/lib/contact";

// Índice de una sección de contenido: título, frase y una lista de páginas con imagen opcional.
export default function IndexList({
  title,
  lead,
  items,
  message = "Hola, quiero cotizar un proyecto para mi negocio.",
}: {
  title: string;
  lead: string;
  message?: string;
  items: { href: string; title: string; text: string; note?: string; image?: string }[];
}) {
  return (
    <>
      <section className="page-x bg-ground pb-16 pt-10 md:pb-20 md:pt-16">
        <h1 className="lines text-[13vw] font-extrabold leading-[0.9] tracking-[-0.04em] md:text-[8vw]">
          <span className="line">
            <span data-line>{title}</span>
          </span>
        </h1>
        <p data-fade className="mt-6 max-w-[48ch] text-[20px] leading-snug md:text-[22px]" style={{ ["--d" as string]: "450ms" }}>
          {lead}
        </p>
        <a data-fade className="btn mt-8" style={{ ["--d" as string]: "550ms" }} href={whatsappUrl(message)} target="_blank" rel="noreferrer">
          Cotizar por WhatsApp
        </a>
      </section>
      <SectionReveal id="lista" className="theme-light">
        <section className="page-x bg-ground py-20 md:py-28">
          <ul className="grid gap-4 md:grid-cols-2">
            {items.map((item, i) => (
              <li key={item.href} data-reveal style={{ ["--d" as string]: `${(i % 2) * 80}ms` }}>
                <Link href={item.href} className="group flex h-full flex-col bg-surface">
                  {item.image && (
                    <span className="relative block aspect-[2/1] overflow-hidden">
                      <Image src={item.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                    </span>
                  )}
                  <span className="flex flex-1 flex-col p-6 md:p-8">
                    <span className="text-[24px] font-extrabold leading-tight tracking-[-0.02em] group-hover:underline md:text-[28px]">{item.title}</span>
                    <span className="mt-3 text-[17px] leading-[1.55]">{item.text}</span>
                    {item.note && <span className="mt-auto pt-5 text-[15px] text-muted">{item.note}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </SectionReveal>
    </>
  );
}
