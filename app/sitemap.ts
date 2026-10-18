import type { MetadataRoute } from "next";
import { services, serviceUpdated } from "./servicios/data";
import { getSiteUrl } from "@/lib/seo";

// Fechas reales de la última edición: si todas dicen "hoy", Google deja de creerles.
const HOME_UPDATED = "2026-10-18";
const SERVICES_INDEX_UPDATED = "2026-10-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    { url: new URL("/", siteUrl).toString(), lastModified: new Date(HOME_UPDATED), changeFrequency: "weekly", priority: 1 },
    { url: new URL("/servicios", siteUrl).toString(), lastModified: new Date(SERVICES_INDEX_UPDATED), changeFrequency: "weekly", priority: 0.9 },
    ...services.map((service) => ({
      url: new URL(`/servicios/${service.slug}`, siteUrl).toString(),
      lastModified: new Date(serviceUpdated[service.slug]),
      changeFrequency: "monthly" as const,
      priority: service.slug === "sistemas-empresariales" || service.slug === "automatizacion-de-procesos" ? 0.9 : 0.7,
    })),
  ];
}
