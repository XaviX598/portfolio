import HomeClient from "../components/HomeClient";
import { buildMetadata, getSiteUrl } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Agencia de Desarrollo de Software, Apps e IA | Xpress Developer",
  description:
    "Creamos páginas web, landing pages, apps Android y iOS, ecommerce e integraciones con inteligencia artificial para empresas que quieren crecer con una base técnica sólida.",
  path: "/",
  keywords: [
    "agencia de desarrollo de software",
    "desarrollo web",
    "landing pages",
    "apps Android",
    "apps iOS",
    "ecommerce",
    "inteligencia artificial para empresas",
    "chatbots con IA",
  ],
});

export default function Home() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Xpress Developer",
    description:
      "Agencia de desarrollo de software especializada en páginas web, landing pages, apps móviles, ecommerce e inteligencia artificial.",
    url: siteUrl.toString(),
    areaServed: "Latinoamérica",
    knowsAbout: [
      "Desarrollo web",
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

