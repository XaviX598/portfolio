import { projects } from "@/lib/projects";
import { buildMetadata } from "@/lib/seo";
import { ContentShell, CtaBand } from "@/components/content/Blocks";
import IndexList from "@/components/content/IndexList";

export const metadata = buildMetadata({
  title: "Proyectos en Producción | Xpress Developer",
  description: "Sistemas, tiendas online, webs y apps desarrollados por Xpress Developer y en línea hoy: el problema, lo que construimos y qué cambia.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return (
    <ContentShell>
      <IndexList
        title="Proyectos en producción"
        lead="Todos están en línea. Cada uno cuenta el problema, lo que construimos y qué cambia."
        items={projects.map((p) => ({ href: `/proyectos/${p.slug}`, title: p.kind.es, text: p.summary.es, note: p.name, image: p.image }))}
      />
      <CtaBand title="¿El tuyo es el siguiente?" text="Cuéntanos qué necesita tu negocio y te respondemos en menos de 24 horas." message="Hola, vi sus proyectos y quiero cotizar el mío." button="Escribir por WhatsApp" />
    </ContentShell>
  );
}
