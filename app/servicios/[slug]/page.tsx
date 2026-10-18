import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "../ServiceDetail";
import { serviceExtras, services, servicesBySlug, type ServiceSlug } from "../data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, buildMetadata, faqSchema, getSiteUrl, organizationId } from "@/lib/seo";

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
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesBySlug[slug as ServiceSlug];

  if (!service) {
    notFound();
  }

  const siteUrl = getSiteUrl().toString();
  const serviceUrl = new URL(`/servicios/${service.slug}`, siteUrl).toString();
  const price = serviceExtras[service.slug].price;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    serviceType: service.title,
    url: serviceUrl,
    provider: { "@id": organizationId() },
    areaServed: [
      { "@type": "City", name: "Quito" },
      { "@type": "Country", name: "Ecuador" },
    ],
    offers: {
      "@type": "Offer",
      url: serviceUrl,
      priceCurrency: "USD",
      price,
      priceSpecification: { "@type": "PriceSpecification", minPrice: price, priceCurrency: "USD" },
    },
  };

  const breadcrumbJsonLd = breadcrumbSchema([
    { name: "Inicio", path: "/" },
    { name: "Servicios", path: "/servicios" },
    { name: service.title, path: `/servicios/${service.slug}` },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {service.faq && <JsonLd data={faqSchema(service.faq)} />}
      <ServiceDetail service={service} />
    </>
  );
}
