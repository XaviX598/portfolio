import HomeClient from "../components/HomeClient";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { faqData } from "@/lib/faq";

export const metadata = buildMetadata({
  title: "Sistemas Empresariales y Automatización de Procesos en Quito y Ecuador | Xpress Developer",
  description:
    "Desarrollamos sistemas empresariales a medida y automatizamos procesos para negocios en Quito y todo Ecuador: inventario, ventas, facturación electrónica, WhatsApp y reportes. Desde $500.",
  path: "/",
});

// La identidad del negocio va en el layout; aquí solo las preguntas que se ven en "Antes de escribirnos".
export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(faqData.es)} />
      <HomeClient />
    </>
  );
}
