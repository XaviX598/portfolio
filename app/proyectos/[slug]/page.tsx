import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects, projectsBySlug } from "@/lib/projects";
import { solutionsBySlug } from "@/lib/solutions";
import { serviceExtras, servicesBySlug } from "@/app/servicios/data";
import { breadcrumbSchema, buildMetadata, getSiteUrl, organizationId } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import PhoneMockup from "@/components/PhoneMockup";
import SectionReveal from "@/components/SectionReveal";
import SplitWords from "@/components/SplitWords";
import { ContentShell, CtaBand, ListSection, PageHero, ProseSection, RelatedLinks } from "@/components/content/Blocks";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) return buildMetadata({ title: "Proyecto no encontrado | Xpress Developer", path: "/proyectos" });
  return buildMetadata({
    title: `${project.name}: ${project.kind.es} | Proyectos de Xpress Developer`,
    description: project.seoDescription,
    path: `/proyectos/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  if (!project) notFound();

  const url = new URL(`/proyectos/${project.slug}`, getSiteUrl()).toString();
  const service = servicesBySlug[project.service];
  const solution = project.solutionPage ? solutionsBySlug[project.solutionPage] : undefined;
  const message = `Hola, vi el proyecto ${project.name} y quiero algo así para mi negocio.`;

  const caseJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.name}: ${project.kind.es}`,
    description: project.seoDescription,
    url,
    image: new URL(project.image, getSiteUrl()).toString(),
    creator: { "@id": organizationId() },
    inLanguage: "es-EC",
    sameAs: project.url,
  };

  const links = [
    { href: `/servicios/${service.slug}`, label: service.title, note: `desde $${serviceExtras[service.slug].price.toLocaleString("es-EC")}` },
    ...(solution ? [{ href: `/soluciones/${solution.slug}`, label: solution.title, note: `desde $${solution.price.toLocaleString("es-EC")}` }] : []),
    ...projects.filter((p) => p.slug !== project.slug).slice(0, 3).map((p) => ({ href: `/proyectos/${p.slug}`, label: p.kind.es, note: p.name })),
  ];

  return (
    <ContentShell>
      <JsonLd data={caseJsonLd} />
      <JsonLd data={breadcrumbSchema([{ name: "Inicio", path: "/" }, { name: "Proyectos", path: "/proyectos" }, { name: project.name, path: `/proyectos/${project.slug}` }])} />

      <PageHero
        title={project.kind.es}
        lead={`${project.name}. ${project.summary.es}`}
        message={message}
        cta="Quiero algo así"
        aside={
          <a className="link mb-4 inline-block text-[17px]" href={project.url} target="_blank" rel="noreferrer">
            Abrir el proyecto en línea ↗
          </a>
        }
      />

      <figure className="relative hidden aspect-[21/9] w-full overflow-hidden bg-surface md:block">
        <Image src={project.image} alt={`${project.kind.es}: ${project.name}, hecho por Xpress Developer`} fill priority sizes="100vw" className="object-cover object-top" />
      </figure>
      <figure className="bg-surface py-12 md:hidden">
        <PhoneMockup src={project.mobile} alt={`${project.name} en celular`} sizes="60vw" priority className="mx-auto w-[58%] max-w-[260px]" />
      </figure>

      <ProseSection id="problema" theme="theme-light" title="El problema" paragraphs={[project.problem]} />
      <ListSection id="solucion" theme="theme-dark" title="Lo que construimos" items={project.solution} />

      <SectionReveal id="resultado" className="theme-light">
        <section className="page-x bg-ground py-24 md:py-32">
          <h2 data-reveal="words" className="text-[28px] font-medium tracking-[-0.02em] lg:text-[40px]">
            <SplitWords text="Qué cambia" />
          </h2>
          <p data-reveal className="mt-8 max-w-[36ch] text-[24px] font-medium leading-[1.3] tracking-[-0.02em] md:text-[32px]">
            {project.outcome}
          </p>
          <div className="mt-14 grid gap-3 md:grid-cols-3">
            {project.gallery.map((src, i) => (
              <div key={src} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className="relative aspect-[2/1] overflow-hidden bg-surface">
                <Image src={src} alt={`${project.name}, pantalla ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
              </div>
            ))}
          </div>
        </section>
      </SectionReveal>

      <RelatedLinks theme="theme-dark" title="Relacionado" links={links} />
      <CtaBand title="¿Quieres algo así?" text="Cuéntanos qué necesita tu negocio y te respondemos en menos de 24 horas con un plan." message={message} button="Escribir por WhatsApp" />
    </ContentShell>
  );
}
