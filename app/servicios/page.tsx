import ServicesIndex from "./ServicesIndex";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios: Sistemas Empresariales, Automatización y Desarrollo Web en Quito | Xpress Developer",
  description:
    "Sistemas empresariales a medida, automatización de procesos, páginas web, tiendas online y apps móviles para negocios en Quito y todo Ecuador, con precios desde $250.",
  path: "/servicios",
});

export default function ServiciosPage() {
  return <ServicesIndex />;
}
