import type { MetadataRoute } from "next";
import { services, serviceUpdated } from "./servicios/data";
import { solutions } from "@/lib/solutions";
import { projects } from "@/lib/projects";
import { guides } from "@/lib/guides";
import { getSiteUrl } from "@/lib/seo";

// Fechas reales de la última edición: si todas dicen "hoy", Google deja de creerles.
const HOME_UPDATED = "2026-10-18";
const INDEX_UPDATED = "2026-10-18";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const entry = (path: string, updated: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: new Date(updated),
    changeFrequency,
    priority,
  });

  return [
    entry("/", HOME_UPDATED, 1, "weekly"),
    entry("/servicios", INDEX_UPDATED, 0.9, "weekly"),
    ...services.map((s) =>
      entry(`/servicios/${s.slug}`, serviceUpdated[s.slug], s.slug === "sistemas-empresariales" || s.slug === "automatizacion-de-procesos" ? 0.9 : 0.7),
    ),
    entry("/soluciones", INDEX_UPDATED, 0.8),
    ...solutions.map((s) => entry(`/soluciones/${s.slug}`, s.updated, 0.8)),
    entry("/proyectos", INDEX_UPDATED, 0.7),
    ...projects.map((p) => entry(`/proyectos/${p.slug}`, p.updated, 0.6)),
    entry("/guias", INDEX_UPDATED, 0.6),
    ...guides.map((g) => entry(`/guias/${g.slug}`, g.updated, 0.7)),
  ];
}
