import { ImageResponse } from "next/og";

export const alt = "Xpress Developer: sistemas empresariales y automatización de procesos en Quito y Ecuador";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen para compartir del sitio, en la paleta de la marca. Las páginas de servicio tienen la suya.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0f1923", padding: 72 }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 800, lineHeight: 0.86, letterSpacing: -6 }}>
          <span style={{ color: "#ece8e1" }}>XPRESS</span>
          <span style={{ color: "#ff4655" }}>DEVELOPER</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ color: "#ece8e1", fontSize: 44, fontWeight: 600 }}>Sistemas empresariales y automatización de procesos</span>
          <span style={{ color: "#a4adb4", fontSize: 30 }}>Quito y todo Ecuador · Cotiza gratis por WhatsApp</span>
        </div>
      </div>
    ),
    size,
  );
}
