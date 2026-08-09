import ServicesIndex from "./ServicesIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios de Desarrollo Web, Apps e IA en Ecuador | Xpress Developer",
  description:
    "Desarrollo de páginas web, landing pages, apps Android y iOS, ecommerce e inteligencia artificial para empresas en Guayaquil, Quito y todo Ecuador.",
  path: "/servicios",
  keywords: [
    "servicios desarrollo web Ecuador",
    "servicios desarrollo apps Ecuador",
    "desarrollo página web Guayaquil",
    "landing page profesional Ecuador",
    "app Android desarrollo Ecuador",
    "app iOS desarrollo Ecuador",
    "inteligencia artificial para empresas",
    "chat IA",
    "agencia desarrollo software Ecuador",
    "desarrollador web Ecuador",
    "ecommerce Ecuador",
  ],
});

export default function ServiciosPage() {
  return <ServicesIndex />;
}

