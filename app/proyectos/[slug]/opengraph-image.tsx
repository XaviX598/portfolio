import { projectsBySlug } from "@/lib/projects";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Proyecto de Xpress Developer en producción";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsBySlug[slug];
  return renderOg({ title: project ? project.kind.es : "Proyectos", subtitle: project ? `${project.name} · en producción` : undefined });
}
