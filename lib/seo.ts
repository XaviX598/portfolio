import type { Metadata } from "next";

const fallbackUrl = "https://www.xpressdeveloper.com";
const defaultTitle = "Desarrollo Web y Software en Ecuador | Xpress Developer";
const defaultDescription =
  "Agencia de desarrollo de software en Ecuador. Creamos páginas web, landing pages, apps Android y iOS, ecommerce e integraciones con IA para empresas en Guayaquil, Quito y todo el país.";
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
  keywords?: string[];
};

export function buildMetadata({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  keywords = [],
}: BuildMetadataInput = {}): Metadata {
  return {
    metadataBase: getSiteUrl(),
    title,
    description,
    keywords,
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
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Xpress Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export const seoDefaults = {
  defaultTitle,
  defaultDescription,
  defaultOgImage,
};

