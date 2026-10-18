import { serviceExtras, servicesBySlug, type ServiceSlug } from "../data";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Servicio de Xpress Developer en Quito y Ecuador";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesBySlug[slug as ServiceSlug];
  return renderOg({ title: service?.title ?? "Servicios", subtitle: service?.subtitle, price: service ? serviceExtras[service.slug].price : undefined });
}
