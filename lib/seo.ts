import type { Metadata } from "next";
import { WHATSAPP_NUMBER } from "./contact";

const fallbackUrl = "https://www.xpressdeveloper.com";
const defaultTitle = "Sistemas Empresariales y Automatización de Procesos en Quito y Ecuador | Xpress Developer";
const defaultDescription =
  "Desarrollamos sistemas empresariales a medida y automatizamos procesos para negocios en Quito y todo Ecuador: inventario, ventas, facturación electrónica, WhatsApp y reportes.";
const defaultOgImage = "/logo-image.png";

export function getSiteUrl() {
  // El canonical debe apuntar siempre al dominio de produccion. Derivarlo de
  // VERCEL_URL hacia que cada preview se auto-canonicalizara a su propia URL.
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!envUrl) {
    return new URL(fallbackUrl);
  }

  const normalized = envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;
  return new URL(normalized);
}

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: `/${string}` | "/";
};

// Las imágenes para compartir salen de los opengraph-image.tsx de cada ruta (tienen prioridad sobre esto).
export function buildMetadata({ title = defaultTitle, description = defaultDescription, path = "/" }: BuildMetadataInput = {}): Metadata {
  return {
    metadataBase: getSiteUrl(),
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Xpress Developer",
      locale: "es_EC",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const seoDefaults = {
  defaultTitle,
  defaultDescription,
  defaultOgImage,
};

// Identidad del negocio en datos estructurados. Va en el layout (todas las páginas) y
// los servicios la referencian por su @id, así no se repite ni se contradice.
export function organizationId() {
  return `${getSiteUrl().toString()}#organizacion`;
}

export function organizationSchema() {
  const url = getSiteUrl().toString();
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": organizationId(),
    name: "Xpress Developer",
    description:
      "Empresa de desarrollo de software en Quito, Ecuador: sistemas empresariales a medida, automatización de procesos, páginas web y apps móviles.",
    url,
    logo: new URL(defaultOgImage, url).toString(),
    image: new URL(defaultOgImage, url).toString(),
    email: "contacto@xpressdeveloper.com",
    telephone: `+${WHATSAPP_NUMBER}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Quito",
      addressRegion: "Pichincha",
      addressCountry: "EC",
    },
    areaServed: [
      { "@type": "City", name: "Quito" },
      { "@type": "Country", name: "Ecuador" },
    ],
    knowsAbout: [
      "Sistemas empresariales",
      "Automatización de procesos",
      "Facturación electrónica",
      "Sistemas de inventario",
      "Automatización de WhatsApp",
      "Desarrollo de páginas web",
      "Apps Android e iOS",
    ],
    sameAs: ["https://www.linkedin.com/in/xavier-aguilar-93759b2bb/"],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
