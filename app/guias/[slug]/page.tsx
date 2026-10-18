import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, guidesBySlug } from "@/lib/guides";
import { AUTHOR, breadcrumbSchema, buildMetadata, faqSchema, getSiteUrl, organizationId } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { ContentShell, CtaBand, FaqSection, ProjectStrip, RelatedLinks } from "@/components/content/Blocks";
import { whatsappUrl } from "@/lib/contact";
import SectionReveal from "@/components/SectionReveal";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  if (!guide) return buildMetadata({ title: "Guía no encontrada | Xpress Developer", path: "/guias" });
  return buildMetadata({ title: guide.seoTitle, description: guide.seoDescription, path: `/guias/${guide.slug}` });
}

const dateLabel = (iso: string) => new Date(`${iso}T12:00:00`).toLocaleDateString("es-EC", { day: "numeric", month: "long", year: "numeric" });

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  if (!guide) notFound();

  const url = new URL(`/guias/${guide.slug}`, getSiteUrl()).toString();
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.seoDescription,
    url,
    mainEntityOfPage: url,
    inLanguage: "es-EC",
    datePublished: guide.published,
    dateModified: guide.updated,
    author: { "@type": "Person", name: AUTHOR.name, url: AUTHOR.url, jobTitle: AUTHOR.jobTitle, worksFor: { "@id": organizationId() } },
    publisher: { "@id": organizationId() },
    image: `${url}/opengraph-image`,
  };

  return (
    <ContentShell>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Guías", path: "/guias" }, { name: guide.title, path: `/guias/${guide.slug}` }])} />
      <JsonLd data={faqSchema(guide.faq)} />

      <section className="page-x bg-ground pb-16 pt-10 md:pb-24 md:pt-16">
        <h1 className="lines max-w-[28ch] text-[7vw] font-extrabold leading-[0.98] tracking-[-0.04em] md:text-[6vw] lg:text-[5.4vw]">
          <span className="line">
            <span data-line>{guide.title}</span>
          </span>
        </h1>
        <p data-fade className="mt-8 max-w-[52ch] text-[20px] leading-snug md:text-[22px]" style={{ ["--d" as string]: "450ms" }}>
          {guide.lead}
        </p>
        <p data-fade className="mt-6 text-[15px] text-muted" style={{ ["--d" as string]: "550ms" }}>
          Por{" "}
          <a className="link" href={AUTHOR.url} target="_blank" rel="noreferrer author">
            {AUTHOR.name}
          </a>
          , {AUTHOR.jobTitle.toLowerCase()} · Publicada el {dateLabel(guide.published)}
          {guide.updated !== guide.published && <> · Actualizada el {dateLabel(guide.updated)}</>}
        </p>
        <a data-fade className="btn mt-8" style={{ ["--d" as string]: "600ms" }} href={whatsappUrl(`Hola, leí la guía "${guide.title}" y quiero una cotización.`)} target="_blank" rel="noreferrer">
          Cotizar por WhatsApp
        </a>
      </section>

      <SectionReveal id="guia" className="theme-light">
        <article className="page-x bg-ground py-20 md:py-28">
          <div className="mx-auto max-w-[720px] space-y-16">
            {guide.sections.map((section) => (
              <section key={section.title}>
                <h2 data-reveal className="text-[28px] font-extrabold leading-tight tracking-[-0.02em] md:text-[34px]">
                  {section.title}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} data-reveal className="mt-5 text-[17px] leading-[1.7] md:text-lg">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} data-reveal className="flex gap-3 text-[17px] leading-[1.6] md:text-lg">
                        <span className="mt-[0.6em] h-1.5 w-3 shrink-0 bg-accent" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.prices && (
                  <div className="mt-6 space-y-1">
                    {section.prices.map((row) => (
                      <Link key={row.href} href={row.href} data-reveal className="group flex flex-col gap-1 bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <span>
                          <span className="block text-[18px] font-medium group-hover:underline">{row.label}</span>
                          <span className="block text-[15px] text-muted">{row.note}</span>
                        </span>
                        <span className="shrink-0 text-[22px] font-extrabold tracking-[-0.02em]">
                          <span className="text-[15px] font-normal text-muted">desde </span>${row.price.toLocaleString("es-EC")}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </article>
      </SectionReveal>

      <FaqSection items={guide.faq} />
      <RelatedLinks title="Sigue leyendo" links={guide.related} />
      <ProjectStrip theme="theme-dark" />
      <CtaBand title="¿Quieres el precio exacto?" text="Cuéntanos qué necesitas y en menos de 24 horas tienes una propuesta con precio cerrado." message={`Hola, leí la guía "${guide.title}" y quiero una cotización.`} button="Cotizar por WhatsApp" />
    </ContentShell>
  );
}
