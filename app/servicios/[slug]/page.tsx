import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "../ServiceDetail";
import { services, servicesBySlug, type ServiceSlug } from "../data";
import { buildMetadata, getSiteUrl } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesBySlug[slug as ServiceSlug];

  if (!service) {
    return buildMetadata({
      title: "Servicio no encontrado | Xpress Developer",
      description: "La página de servicio solicitada no existe.",
      path: "/servicios",
    });
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/servicios/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  const siteUrl = getSiteUrl();
  const serviceUrl = new URL(`/servicios/${service.slug}`, siteUrl).toString();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    serviceType: service.title,
    provider: {
      "@type": "Organization",
      name: "Xpress Developer",
      url: siteUrl.toString(),
    },
    areaServed: "Latinoamérica",
    url: serviceUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetail service={service} />
    </>
  );
}

