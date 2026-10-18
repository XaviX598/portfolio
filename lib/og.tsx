import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Imagen para compartir de cualquier página interna, en la paleta de la marca: qué es y, si aplica, desde cuánto.
export function renderOg({ title, subtitle, price, footer = "Quito y todo Ecuador" }: { title: string; subtitle?: string; price?: number; footer?: string }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0f1923", padding: 72 }}>
        <span style={{ color: "#ff4655", fontSize: 34, fontWeight: 800, letterSpacing: -1 }}>XPRESS DEVELOPER</span>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ color: "#ece8e1", fontSize: title.length > 34 ? 70 : 92, fontWeight: 800, lineHeight: 0.98, letterSpacing: -3 }}>{title}</span>
          {subtitle && <span style={{ color: "#a4adb4", fontSize: 34 }}>{subtitle}</span>}
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          {price !== undefined ? (
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <span style={{ color: "#a4adb4", fontSize: 32 }}>desde</span>
              <span style={{ color: "#ff4655", fontSize: 96, fontWeight: 800, letterSpacing: -3 }}>{`$${price.toLocaleString("es-EC")}`}</span>
            </div>
          ) : (
            <span />
          )}
          <span style={{ color: "#ece8e1", fontSize: 28 }}>{footer}</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
