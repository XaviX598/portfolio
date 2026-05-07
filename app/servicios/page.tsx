import ServicesIndex from "./ServicesIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios de Desarrollo Web, Apps e IA | Xpress Developer",
  description:
    "Desarrollo de páginas web, landing pages, apps Android y iOS, ecommerce e inteligencia artificial. Soluciones digitales con foco técnico y comercial.",
  path: "/servicios",
  keywords: [
    "servicios desarrollo web",
    "servicios desarrollo apps",
    "desarrollo página web",
    "landing page profesional",
    "app Android desarrollo",
    "app iOS desarrollo",
    "inteligencia artificial",
    "chat IA",
    "agencia desarrollo software",
    "desarrollador web",
    "ecommerce",
  ],
});

export default function ServiciosPage() {
  return <ServicesIndex />;
}
