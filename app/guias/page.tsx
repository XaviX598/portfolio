import { guides } from "@/lib/guides";
import { buildMetadata } from "@/lib/seo";
import { ContentShell, CtaBand, ProjectStrip } from "@/components/content/Blocks";
import IndexList from "@/components/content/IndexList";

export const metadata = buildMetadata({
  title: "Guías para Pymes en Ecuador | Xpress Developer",
  description: "Guías claras para negocios en Ecuador: cuánto cuesta una página web, cómo automatizar pedidos por WhatsApp y más.",
  path: "/guias",
});

export default function GuiasPage() {
  return (
    <ContentShell>
      <IndexList
        title="Guías para pymes"
        lead="Respuestas claras a lo que más nos preguntan antes de empezar un proyecto."
        items={guides.map((g) => ({ href: `/guias/${g.slug}`, title: g.title, text: g.lead }))}
      />
      <ProjectStrip theme="theme-dark" />
      <CtaBand title="¿Tienes otra pregunta?" text="Escríbenos y te respondemos en menos de 24 horas." message="Hola, tengo una pregunta sobre mi proyecto." button="Escribir por WhatsApp" />
    </ContentShell>
  );
}
