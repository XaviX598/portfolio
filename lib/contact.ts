export const WHATSAPP_NUMBER = "593985295277";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const QUOTE_MESSAGE = {
  es: "Hola, quiero cotizar un proyecto para mi negocio.",
  en: "Hi, I'd like a quote for a project for my business.",
};
