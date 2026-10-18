import HomeClient from "../components/HomeClient";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { faqData } from "@/lib/faq";

export const metadata = buildMetadata({
  title: "Sistemas Empresariales y Automatización | Xpress Developer",
  description:
    "Sistemas a medida y automatización de procesos para negocios en Quito y Ecuador: inventario, ventas, facturación electrónica y WhatsApp. Desde $500.",
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
