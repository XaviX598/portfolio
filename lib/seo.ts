import type { Metadata } from "next";
import { WHATSAPP_NUMBER } from "./contact";

const fallbackUrl = "https://www.xpressdeveloper.com";
const defaultTitle = "Sistemas Empresariales y Automatización | Xpress Developer";
const defaultDescription =
  "Sistemas a medida y automatización de procesos para negocios en Quito y Ecuador: inventario, ventas, facturación electrónica y WhatsApp. Desde $500.";
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
  // Google corta los títulos de más de ~60 caracteres y las descripciones de más de ~160.
  if (process.env.NODE_ENV === "development" && ([...title].length > 60 || [...description].length > 160)) {
    console.warn(`[seo] ${path}: título ${[...title].length}/60, descripción ${[...description].length}/160`);
  }
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

// El sitio como entidad, con el negocio como editor. Va junto a la organización en el layout.
export function websiteSchema() {
  const url = getSiteUrl().toString();
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#sitio`,
    name: "Xpress Developer",
    url,
    inLanguage: "es-EC",
    publisher: { "@id": organizationId() },
  };
}

// Autor de las guías: una persona real con su perfil, que es lo que Google pide para contenido de consejo.
export const AUTHOR = {
  name: "Xavier Aguilar",
  url: "https://www.linkedin.com/in/xavier-aguilar-93759b2bb/",
  jobTitle: "Fundador de Xpress Developer",
};

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

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  const siteUrl = getSiteUrl().toString();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: new URL(step.path, siteUrl).toString(),
    })),
  };
}
