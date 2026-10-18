export type FaqItem = { q: string; a: string };

// Vive fuera de los componentes cliente para que app/page.tsx (servidor)
// pueda generar el JSON-LD de FAQPage con el mismo contenido visible.
export const faqData: Record<"es" | "en", FaqItem[]> = {
  es: [
    {
      q: "¿Cuánto cuesta un sistema o una automatización?",
      a: "Una automatización parte desde $500 y un sistema empresarial a medida desde $1.500. También hacemos landing pages desde $250, páginas web desde $450, tiendas online desde $900 y apps móviles desde $2.500. El precio final depende del alcance: después de una conversación corta te enviamos una propuesta por escrito con precio cerrado, sin costos ocultos.",
    },
    {
      q: "¿El dominio y el hosting están incluidos?",
      a: "El dominio (unos $15 al año) y el hosting se contratan a tu nombre y se pagan aparte. Te ayudamos a elegir la opción más económica para tu proyecto y lo configuramos por ti; muchas páginas pueden alojarse gratis.",
    },
    {
      q: "¿Cuánto tiempo tarda el proyecto?",
      a: "Una landing page suele estar lista en 1 a 2 semanas y una página web completa en 3 a 6 semanas. Las apps y sistemas a medida se planifican por etapas para que puedas usar resultados desde el inicio.",
    },
    {
      q: "¿El código, el dominio y el hosting quedan a mi nombre?",
      a: "Sí. Todo lo que construimos es tuyo: código, dominio, cuentas y accesos. No dependes de nosotros para seguir operando.",
    },
    {
      q: "No tengo textos ni imágenes, ¿es un problema?",
      a: "No. Te ayudamos con la estructura, los textos orientados a ventas y las imágenes para que tu página comunique bien desde el primer día.",
    },
    {
      q: "¿Mi página va a aparecer en Google?",
      a: "Toda página que entregamos incluye SEO técnico: velocidad, estructura, metadatos, sitemap y registro en Google Search Console. El posicionamiento crece con el tiempo y te orientamos sobre cómo acelerarlo.",
    },
    {
      q: "¿Qué pasa después del lanzamiento?",
      a: "Te acompañamos con soporte para resolver dudas y ajustes, y ofrecemos planes de mantenimiento si quieres que nos encarguemos de actualizaciones y mejoras continuas.",
    },
    {
      q: "¿Trabajan solo en Ecuador?",
      a: "Estamos en Ecuador y trabajamos de forma remota con negocios de todo el país y de Latinoamérica.",
    },
  ],
  en: [
    {
      q: "How much does a system or an automation cost?",
      a: "An automation starts at $500 and a custom business system at $1,500. We also build landing pages from $250, websites from $450, online stores from $900 and mobile apps from $2,500. The final price depends on the scope: after a short conversation we send you a written proposal with a fixed price, with no hidden costs.",
    },
    {
      q: "Are the domain and hosting included?",
      a: "The domain (about $15 per year) and hosting are registered in your name and paid separately. We help you choose the most affordable option for your project and set it up for you; many sites can be hosted for free.",
    },
    {
      q: "How long does a project take?",
      a: "A landing page is usually ready in 1 to 2 weeks and a full website in 3 to 6 weeks. Apps and custom systems are planned in stages so you can use results from the start.",
    },
    {
      q: "Will the code, domain and hosting be in my name?",
      a: "Yes. Everything we build is yours: code, domain, accounts and access. You don't depend on us to keep operating.",
    },
    {
      q: "I don't have copy or images. Is that a problem?",
      a: "Not at all. We help you with the structure, sales-oriented copy and images so your page communicates well from day one.",
    },
    {
      q: "Will my site show up on Google?",
      a: "Every site we deliver includes technical SEO: speed, structure, metadata, sitemap and Google Search Console setup. Rankings grow over time and we guide you on how to speed them up.",
    },
    {
      q: "What happens after launch?",
      a: "We stay with you to answer questions and make adjustments, and we offer maintenance plans if you want us to handle updates and continuous improvements.",
    },
    {
      q: "Do you only work in Ecuador?",
      a: "We're based in Ecuador and work remotely with businesses across the country and Latin America.",
    },
  ],
};
