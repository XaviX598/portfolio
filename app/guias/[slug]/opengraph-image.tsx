import { guidesBySlug } from "@/lib/guides";
import { ogSize, renderOg } from "@/lib/og";

export const alt = "Guía de Xpress Developer para pymes";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guidesBySlug[slug];
  return renderOg({ title: guide?.title ?? "Guías", footer: "Guía para pymes · Xpress Developer" });
}
