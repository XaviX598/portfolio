import HomeClient from "../components/HomeClient";
import { buildMetadata, getSiteUrl } from "@/lib/seo";
import { faqData } from "@/lib/faq";

export const metadata = buildMetadata({
  title: "Sistemas Empresariales y Automatización de Procesos en Ecuador | Xpress Developer",
  description:
    "Desarrollamos sistemas empresariales a medida y automatizamos procesos para negocios en Ecuador: inventario, ventas, facturación electrónica, WhatsApp y reportes. También páginas web y apps.",
  path: "/",
  keywords: [
    "sistemas empresariales Ecuador",
    "automatización de procesos Ecuador",
    "sistema de inventario",
    "automatización para negocios",
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
      "Sistemas empresariales",
      "Automatización de procesos",
      "Facturación electrónica",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.es.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}

