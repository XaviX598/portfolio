import { solutionsBySlug } from "@/lib/solutions";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Solución de Xpress Developer por rubro";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsBySlug[slug];
  return renderOg({ title: solution?.title ?? "Soluciones", subtitle: solution?.lead, price: solution?.price });
}
