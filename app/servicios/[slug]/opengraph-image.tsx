import { ImageResponse } from "next/og";
import { serviceExtras, servicesBySlug, type ServiceSlug } from "../data";

export const alt = "Servicio de Xpress Developer en Quito y Ecuador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen para compartir de cada servicio: qué es y desde cuánto, para que el enlace se venda solo en WhatsApp o LinkedIn.
export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesBySlug[slug as ServiceSlug];
  const price = service ? serviceExtras[service.slug].price.toLocaleString("es-EC") : "";

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0f1923", padding: 72 }}>
        <span style={{ color: "#ff4655", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>XPRESS DEVELOPER</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ color: "#ece8e1", fontSize: 92, fontWeight: 800, lineHeight: 0.95, letterSpacing: -3 }}>{service?.title ?? "Servicios"}</span>
          <span style={{ color: "#a4adb4", fontSize: 36 }}>{service?.subtitle ?? ""}</span>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
            <span style={{ color: "#a4adb4", fontSize: 32 }}>desde</span>
            <span style={{ color: "#ff4655", fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>{price ? `$${price}` : ""}</span>
          </div>
          <span style={{ color: "#ece8e1", fontSize: 28 }}>Quito y todo Ecuador</span>
        </div>
      </div>
    ),
    size,
  );
}
