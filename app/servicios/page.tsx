import ServicesIndex from "./ServicesIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios de Desarrollo y Automatización | Xpress Developer",
  description:
    "Sistemas a medida, automatización, páginas web, tiendas online y apps móviles para negocios en Quito y Ecuador. Precios desde $250.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return <ServicesIndex />;
}
