import type { Metadata } from "next";

const fallbackUrl = "https://portfolio-xavier-aguilar.vercel.app";
const defaultTitle = "Xpress Developer | Agencia de Desarrollo de Software y Apps";
const defaultDescription =
  "Agencia de desarrollo de software profesional. Creamos páginas web, landing pages, apps Android y iOS, e integramos inteligencia artificial en tu negocio.";
const defaultOgImage = "/logo-image.png";

export function getSiteUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

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

