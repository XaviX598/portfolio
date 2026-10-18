import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions, solutionsBySlug } from "@/lib/solutions";
import { projectsBySlug } from "@/lib/projects";
import { serviceExtras, servicesBySlug } from "@/app/servicios/data";
import { breadcrumbSchema, buildMetadata, faqSchema, getSiteUrl, organizationId } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import SectionReveal from "@/components/SectionReveal";
import SplitWords from "@/components/SplitWords";
import { ContentShell, CtaBand, FaqSection, ListSection, PageHero, ProjectStrip, ProseSection, RelatedLinks } from "@/components/content/Blocks";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsBySlug[slug];
  if (!solution) return buildMetadata({ title: "Solución no encontrada | Xpress Developer", path: "/soluciones" });
  return buildMetadata({ title: solution.seoTitle, description: solution.seoDescription, path: `/soluciones/${solution.slug}` });
}

export default async function SolutionPage({ params }: PageProps) {
  const { slug } = await params;
  const solution = solutionsBySlug[slug];
  if (!solution) notFound();

  const url = new URL(`/soluciones/${solution.slug}`, getSiteUrl()).toString();
  const project = solution.example ? projectsBySlug[solution.example.project] : undefined;
  // Los temas alternan: si no hay ejemplo, las preguntas pasan a crema para no juntar dos azules.
  const hasExample = Boolean(solution.example && project);
  const message = `Hola, me interesa: ${solution.title} (desde $${solution.price.toLocaleString("es-EC")}).`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.seoDescription,
    url,
    provider: { "@id": organizationId() },
    areaServed: [
      { "@type": "City", name: "Quito" },
      { "@type": "Country", name: "Ecuador" },
    ],
    offers: { "@type": "Offer", url, priceCurrency: "USD", price: solution.price, priceSpecification: { "@type": "PriceSpecification", minPrice: solution.price, priceCurrency: "USD" } },
  };

  return (
    <ContentShell>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Soluciones", path: "/soluciones" }, { name: solution.title, path: `/soluciones/${solution.slug}` }])} />
      <JsonLd data={faqSchema(solution.faq)} />

      <PageHero title={solution.title} lead={solution.lead} price={solution.price} message={message} />
      <ProseSection id="problema" theme="theme-light" title={solution.problemTitle} paragraphs={solution.problem} />
      <ListSection id="incluye" theme="theme-dark" title={solution.featuresTitle} items={solution.features} />

      {solution.example && project && (
        <SectionReveal id="ejemplo" className="theme-light">
          <section className="page-x bg-ground py-24 md:py-32">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-5">
                <h2 data-reveal="words" className="text-[28px] font-medium leading-tight tracking-[-0.02em] lg:text-[40px]">
                  <SplitWords text={`${solution.example.label}: ${project.name}`} />
                </h2>
                <p data-reveal className="mt-6 text-[17px] leading-[1.65] md:text-lg">{solution.example.text}</p>
                <Link data-reveal href={`/proyectos/${project.slug}`} className="link mt-6 inline-block text-[17px]">
                  Ver el caso completo
                </Link>
              </div>
              <div data-reveal className="relative aspect-[2/1] overflow-hidden bg-surface lg:col-span-7">
                <Image src={project.image} alt={`${project.kind.es}: ${project.name}, hecho por Xpress Developer`} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover object-top" />
              </div>
            </div>
          </section>
        </SectionReveal>
      )}

      <FaqSection items={solution.faq} theme={hasExample ? "theme-dark" : "theme-light"} />
      <RelatedLinks
        theme={hasExample ? "theme-light" : "theme-dark"}
        title="Servicios relacionados"
        links={solution.services.map((s) => ({ href: `/servicios/${s}`, label: servicesBySlug[s].title, note: `desde $${serviceExtras[s].price.toLocaleString("es-EC")}` }))}
      />
      <ProjectStrip theme={hasExample ? "theme-dark" : "theme-light"} exclude={solution.example?.project} />
      <CtaBand title="¿Hablamos de tu negocio?" text="Cuéntanos cómo trabajas hoy y te proponemos por dónde empezar, con precio cerrado." message={message} button="Escribir por WhatsApp" />
    </ContentShell>
  );
}
