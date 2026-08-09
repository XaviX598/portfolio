import HomeClient from "../components/HomeClient";
import { buildMetadata, getSiteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Desarrollo de Páginas Web y Software en Ecuador | Xpress Developer",
  description:
    "Agencia de desarrollo de software en Ecuador. Creamos páginas web, landing pages, apps Android y iOS, ecommerce e integraciones con IA para empresas en Guayaquil, Quito y todo el país.",
  path: "/",
  keywords: [
    "agencia de desarrollo de software Ecuador",
    "desarrollo web Ecuador",
    "páginas web Guayaquil",
    "páginas web Quito",
    "desarrollo de software Ecuador",
    "landing pages Ecuador",
    "apps Android Ecuador",
    "apps iOS Ecuador",
    "ecommerce Ecuador",
    "inteligencia artificial para empresas",
    "chatbots con IA",
    "programador páginas web Ecuador",
  ],
});

export default function Home() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Xpress Developer",
    description:
      "Agencia de desarrollo de software en Ecuador especializada en páginas web, landing pages, apps móviles, ecommerce e inteligencia artificial.",
    url: siteUrl.toString(),
    email: "contacto@xpressdeveloper.com",
    telephone: "+593985295277",
    inLanguage: "es-EC",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EC",
    },
    areaServed: [
      { "@type": "Country", name: "Ecuador" },
      { "@type": "City", name: "Guayaquil" },
      { "@type": "City", name: "Quito" },
      { "@type": "City", name: "Cuenca" },
    ],
    knowsAbout: [
      "Desarrollo web",
      "Desarrollo de páginas web",
      "Landing pages",
      "Apps Android",
      "Apps iOS",
      "Ecommerce",
      "Inteligencia artificial",
      "Chatbots",
    ],
    sameAs: ["https://www.linkedin.com/in/xavier-aguilar-93759b2bb/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}

