import { solutions } from "@/lib/solutions";
import { buildMetadata } from "@/lib/seo";
import { ContentShell, CtaBand, ProjectStrip } from "@/components/content/Blocks";
import IndexList from "@/components/content/IndexList";

export const metadata = buildMetadata({
  title: "Sistemas por Rubro en Quito y Ecuador | Xpress Developer",
  description: "Sistemas y automatizaciones a medida por rubro en Quito y Ecuador: restaurantes, importadoras, clínicas y consultorios, y tiendas.",
  path: "/soluciones",
});

export default function SolucionesPage() {
  return (
    <ContentShell>
      <IndexList
        title="Soluciones por rubro"
        lead="Cada negocio pierde tiempo en lugares distintos. Elige el tuyo y mira qué automatizamos."
        items={solutions.map((s) => ({ href: `/soluciones/${s.slug}`, title: s.title, text: s.lead, note: `desde $${s.price.toLocaleString("es-EC")}` }))}
      />
      <ProjectStrip theme="theme-dark" />
      <CtaBand title="¿Tu rubro no está aquí?" text="Trabajamos con cualquier negocio que tenga tareas repetitivas. Cuéntanos el tuyo." message="Hola, quiero automatizar procesos de mi negocio." button="Escribir por WhatsApp" />
    </ContentShell>
  );
}
