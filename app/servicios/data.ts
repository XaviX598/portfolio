export type ServiceSlug =
  | "pagina-web"
  | "landing-page"
  | "desarrollo-android"
  | "desarrollo-ios"
  | "chat-ia"
  | "inteligencia-artificial"
  | "desarrollo-web"
  | "ecommerce";

type ServiceProcessStep = {
  step: string;
  title: string;
  desc: string;
};

export type ServiceEntry = {
  slug: ServiceSlug;
  title: string;
  subtitle: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  icon: string;
  features: string[];
  process: ServiceProcessStep[];
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
};

export const services: ServiceEntry[] = [
  {
    slug: "pagina-web",
    title: "Desarrollo de Página Web",
    subtitle: "Sitios web profesionales y personalizados",
    shortDescription:
      "Creamos páginas web profesionales y sitios web personalizados con diseño único, optimización SEO y foco en conversión.",
    seoTitle: "Desarrollo de Páginas Web Profesionales | Xpress Developer",
    seoDescription:
      "Creamos páginas web profesionales y sitios web personalizados. Diseño único, optimización SEO, velocidad de carga rápida y enfoque comercial.",
    keywords: [
      "desarrollo página web",
      "crear página web",
      "sitio web profesional",
      "diseño web",
      "desarrollador web",
      "página web para empresa",
      "sitio web Ecuador",
    ],
    icon: "??",
    features: [
      "Diseño personalizado y alineado a tu marca",
      "Optimización SEO técnica y on-page",
      "Velocidad de carga optimizada",
      "Diseño responsive para móvil y desktop",
      "Formularios y funcionalidades personalizadas",
      "Integración con redes sociales y herramientas externas",
      "Panel de administración si el proyecto lo requiere",
      "SSL y buenas prácticas de despliegue",
    ],
    process: [
      {
        step: "1",
        title: "Análisis y planificación",
        desc: "Entendemos tu negocio, tus objetivos y el tipo de cliente que querés atraer.",
      },
      {
        step: "2",
        title: "Diseño UI/UX",
        desc: "Creamos una experiencia clara, moderna y pensada para convertir visitas en oportunidades.",
      },
      {
        step: "3",
        title: "Desarrollo",
        desc: "Implementamos con Next.js, React y TypeScript, priorizando rendimiento y mantenibilidad.",
      },
      {
        step: "4",
        title: "Lanzamiento",
        desc: "Publicamos el sitio con SEO base, analítica y una configuración lista para crecer.",
      },
    ],
    cta: {
      title: "¿Listo para lanzar una página web seria?",
      subtitle: "Cotizá tu proyecto y te respondemos con un plan claro.",
      button: "Cotizar página web",
    },
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    subtitle: "Páginas de alto impacto que convierten",
    shortDescription:
      "Landing pages orientadas a conversión con diseño profesional, carga rápida y estructura preparada para campañas y SEO.",
    seoTitle: "Landing Pages de Alto Impacto | Xpress Developer",
    seoDescription:
      "Creamos landing pages enfocadas en conversión. Diseño profesional, copy claro, animaciones cuidadas y optimización SEO desde el arranque.",
    keywords: [
      "landing page",
      "página de aterrizaje",
      "landing page de conversión",
      "diseño landing page",
      "landing page profesional",
      "página de ventas",
    ],
    icon: "??",
    features: [
      "Diseño orientado a conversión",
      "Jerarquía visual clara",
      "Optimización SEO integrada",
      "Velocidad de carga rápida",
      "Formularios de captura optimizados",
      "Diseño mobile-first",
      "Preparación para campañas de pauta",
      "Integración con CRM y email marketing",
    ],
    process: [
      {
        step: "1",
        title: "Estrategia",
        desc: "Definimos el objetivo, la oferta y el mensaje principal de la landing.",
      },
      {
        step: "2",
        title: "Copy y estructura",
        desc: "Ordenamos la información para reducir objeciones y guiar a la acción.",
      },
      {
        step: "3",
        title: "Diseño visual",
        desc: "Diseñamos una página que capta atención sin sacrificar claridad.",
      },
      {
        step: "4",
        title: "Desarrollo y medición",
        desc: "Publicamos con analítica, rendimiento optimizado y seguimiento de conversiones.",
      },
    ],
    cta: {
      title: "¿Necesitás una landing page que venda de verdad?",
      subtitle: "Te ayudamos a transformar tráfico en contactos y ventas.",
      button: "Cotizar landing page",
    },
  },
  {
    slug: "desarrollo-android",
    title: "Desarrollo Android",
    subtitle: "Apps nativas y cross-platform para Android",
    shortDescription:
      "Desarrollo profesional de apps Android con Kotlin o React Native, listas para Play Store y pensadas para escalar.",
    seoTitle: "Desarrollo de Apps Android | Xpress Developer",
    seoDescription:
      "Desarrollamos apps Android nativas y multiplataforma con Kotlin o React Native. Publicación en Google Play y arquitectura lista para crecer.",
    keywords: [
      "desarrollo android",
      "app android",
      "crear app android",
      "apps android profesionales",
      "kotlin android",
      "react native android",
      "google play store",
    ],
    icon: "??",
    features: [
      "Apps nativas con Kotlin",
      "Apps cross-platform con React Native",
      "Integración con cámara, GPS y notificaciones",
      "Diseño alineado a Material Design",
      "Backend y APIs si el proyecto lo requiere",
      "Publicación en Google Play",
      "Escalabilidad y mantenibilidad",
      "Soporte posterior al lanzamiento",
    ],
    process: [
      {
        step: "1",
        title: "Requerimientos",
        desc: "Definimos funcionalidades, alcance y prioridades del producto.",
      },
      {
        step: "2",
        title: "Diseño UX/UI",
        desc: "Prototipamos la experiencia para asegurar claridad antes de programar.",
      },
      {
        step: "3",
        title: "Desarrollo",
        desc: "Implementamos con la tecnología adecuada según tiempos, presupuesto y objetivos.",
      },
      {
        step: "4",
        title: "Publicación",
        desc: "Preparamos la salida a Play Store y dejamos la base lista para iterar.",
      },
    ],
    cta: {
      title: "¿Tenés una idea para Android?",
      subtitle: "La bajamos a producto con una arquitectura que no te explote después.",
      button: "Cotizar app Android",
    },
  },
  {
    slug: "desarrollo-ios",
    title: "Desarrollo iOS",
    subtitle: "Apps profesionales para iPhone y iPad",
    shortDescription:
      "Apps iOS con Swift o React Native, publicables en App Store y alineadas a buenas prácticas de Apple.",
    seoTitle: "Desarrollo de Apps iOS | Xpress Developer",
    seoDescription:
      "Creamos apps iOS para iPhone y iPad con Swift o React Native. Diseño cuidado, rendimiento sólido y preparación para App Store.",
    keywords: [
      "desarrollo iOS",
      "app iOS",
      "crear app iPhone",
      "apps iPhone profesionales",
      "Swift iOS",
      "React Native iOS",
      "App Store",
    ],
    icon: "??",
    features: [
      "Apps nativas con Swift",
      "Apps cross-platform con React Native",
      "Diseño alineado a Human Interface Guidelines",
      "Integración con servicios del ecosistema Apple",
      "Notificaciones push",
      "Preparación para App Store",
      "Arquitectura mantenible",
      "Soporte técnico post-lanzamiento",
    ],
    process: [
      {
        step: "1",
        title: "Planificación",
        desc: "Definimos objetivos, funcionalidades clave y alcance de la app.",
      },
      {
        step: "2",
        title: "Diseño",
        desc: "Diseñamos interfaces claras y consistentes con los estándares de Apple.",
      },
      {
        step: "3",
        title: "Desarrollo",
        desc: "Construimos la app priorizando estabilidad, rendimiento y escalabilidad.",
      },
      {
        step: "4",
        title: "Publicación",
        desc: "Te acompañamos en la preparación y salida a App Store.",
      },
    ],
    cta: {
      title: "¿Necesitás una app para iPhone o iPad?",
      subtitle: "La hacemos bien desde el principio, sin atajos peligrosos.",
      button: "Cotizar app iOS",
    },
  },
  {
    slug: "chat-ia",
    title: "Chat IA",
    subtitle: "Chatbots con inteligencia artificial para tu negocio",
    shortDescription:
      "Implementamos chatbots con IA para web y WhatsApp, orientados a soporte, ventas y automatización operativa.",
    seoTitle: "Chat IA y Chatbots para Empresas | Xpress Developer",
    seoDescription:
      "Implementamos chatbots con inteligencia artificial para soporte, ventas y automatización. Integración con web, WhatsApp y procesos internos.",
    keywords: [
      "chat IA",
      "chatbot IA",
      "chat GPT para empresas",
      "chatbot WhatsApp",
      "automatización de soporte",
      "bot conversacional",
    ],
    icon: "??",
    features: [
      "Chatbots con modelos de IA modernos",
      "Integración con WhatsApp Business",
      "Chat embebido en tu sitio web",
      "Atención 24/7 automatizada",
      "Derivación a humanos cuando hace falta",
      "Entrenamiento con tu documentación",
      "Métricas y análisis de conversaciones",
      "Automatización de tareas repetitivas",
    ],
    process: [
      {
        step: "1",
        title: "Diagnóstico",
        desc: "Detectamos qué interacciones o procesos conviene automatizar primero.",
      },
      {
        step: "2",
        title: "Diseño conversacional",
        desc: "Estructuramos flujos, objetivos y criterios de derivación.",
      },
      {
        step: "3",
        title: "Integración",
        desc: "Conectamos el bot con tus canales y fuentes de información.",
      },
      {
        step: "4",
        title: "Ajuste continuo",
        desc: "Medimos resultados y refinamos respuestas para mejorar desempeño.",
      },
    ],
    cta: {
      title: "¿Querés automatizar atención o ventas con IA?",
      subtitle: "Hagámoslo con criterio de negocio, no por moda.",
      button: "Cotizar chat IA",
    },
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligencia Artificial",
    subtitle: "Soluciones de IA para hacer crecer tu negocio",
    shortDescription:
      "Aplicamos inteligencia artificial a procesos reales: automatización, análisis, asistentes y sistemas de apoyo a decisión.",
    seoTitle: "Inteligencia Artificial para Empresas | Xpress Developer",
    seoDescription:
      "Aplicamos inteligencia artificial en procesos de negocio: automatización, análisis de datos, asistentes y soluciones personalizadas para empresas.",
    keywords: [
      "inteligencia artificial para empresas",
      "IA empresarial",
      "automatización con IA",
      "machine learning",
      "análisis de datos con IA",
      "integración de IA",
    ],
    icon: "??",
    features: [
      "Automatización de procesos con IA",
      "Clasificación y análisis de documentos",
      "Asistentes internos y externos",
      "Análisis predictivo y reporting",
      "Procesamiento de lenguaje natural",
      "Integración con sistemas existentes",
      "Validación técnica del caso de uso",
      "Acompañamiento para adopción real",
    ],
    process: [
      {
        step: "1",
        title: "Diagnóstico",
        desc: "Evaluamos dónde la IA genera retorno real y dónde solo mete ruido.",
      },
      {
        step: "2",
        title: "Diseño de solución",
        desc: "Definimos arquitectura, flujos y nivel de automatización adecuado.",
      },
      {
        step: "3",
        title: "Implementación",
        desc: "Integramos modelos, datos y procesos con foco en confiabilidad.",
      },
      {
        step: "4",
        title: "Iteración",
        desc: "Medimos resultados y refinamos para mejorar impacto en negocio.",
      },
    ],
    cta: {
      title: "¿Querés aplicar IA con sentido de negocio?",
      subtitle: "Te ayudamos a usarla donde suma, no donde impresiona nomás.",
      button: "Consultar sobre IA",
    },
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    subtitle: "Frontend, backend y arquitectura para productos digitales",
    shortDescription:
      "Desarrollo web a medida con React, Next.js, Node.js y APIs sólidas para proyectos que necesitan crecer con orden.",
    seoTitle: "Desarrollo Web a Medida | Xpress Developer",
    seoDescription:
      "Desarrollo web frontend y backend con React, Next.js, Node.js y arquitectura mantenible. Creamos productos digitales pensados para escalar.",
    keywords: [
      "desarrollo web",
      "desarrollo frontend",
      "desarrollo backend",
      "React Next.js",
      "Node.js API",
      "programador web",
    ],
    icon: "?",
    features: [
      "Frontend con React y Next.js",
      "Backend con Node.js y APIs robustas",
      "Arquitectura mantenible y escalable",
      "Autenticación, dashboards y flujos de negocio",
      "Integración con bases de datos",
      "Optimización de rendimiento",
      "Buenas prácticas de SEO técnico",
      "Despliegue y observabilidad básica",
    ],
    process: [
      {
        step: "1",
        title: "Arquitectura",
        desc: "Definimos stack, responsabilidades y límites del sistema antes de picar código.",
      },
      {
        step: "2",
        title: "Diseño funcional",
        desc: "Aterrizamos pantallas, flujos y reglas de negocio más importantes.",
      },
      {
        step: "3",
        title: "Implementación",
        desc: "Construimos frontend y backend con foco en claridad, performance y evolución futura.",
      },
      {
        step: "4",
        title: "Entrega",
        desc: "Publicamos con documentación operativa y una base sólida para iterar.",
      },
    ],
    cta: {
      title: "¿Necesitás construir un producto web serio?",
      subtitle: "Lo hacemos con fundamentos, no con parches lindos.",
      button: "Cotizar desarrollo web",
    },
  },
  {
    slug: "ecommerce",
    title: "Tienda Online",
    subtitle: "Ecommerce pensado para vender y operar sin caos",
    shortDescription:
      "Diseñamos y desarrollamos tiendas online con catálogo, pagos, carrito y flujos pensados para conversión y operación diaria.",
    seoTitle: "Desarrollo de Tiendas Online y Ecommerce | Xpress Developer",
    seoDescription:
      "Creamos ecommerce y tiendas online con carrito, pagos, gestión de productos y enfoque en conversión, rendimiento y escalabilidad.",
    keywords: [
      "tienda online",
      "ecommerce",
      "tienda virtual",
      "crear tienda online",
      "desarrollo ecommerce",
      "pasarela de pagos",
    ],
    icon: "??",
    features: [
      "Catálogo y fichas de producto optimizadas",
      "Carrito de compras y checkout claro",
      "Integración con pasarelas de pago",
      "Gestión de inventario y pedidos",
      "SEO técnico para categorías y productos",
      "Diseño responsive",
      "Analítica y eventos de conversión",
      "Base lista para campañas y crecimiento",
    ],
    process: [
      {
        step: "1",
        title: "Modelo comercial",
        desc: "Entendemos cómo vendés hoy y qué necesitás automatizar en la tienda.",
      },
      {
        step: "2",
        title: "Estructura y UX",
        desc: "Diseñamos categorías, navegación y checkout pensando en conversión.",
      },
      {
        step: "3",
        title: "Desarrollo",
        desc: "Implementamos catálogo, pagos, pedidos y reglas operativas principales.",
      },
      {
        step: "4",
        title: "Lanzamiento",
        desc: "Publicamos con analítica, SEO base y una estructura lista para escalar.",
      },
    ],
    cta: {
      title: "¿Querés vender online con una tienda en serio?",
      subtitle: "Te ayudamos a lanzar un ecommerce claro, rápido y mantenible.",
      button: "Cotizar ecommerce",
    },
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceEntry>;
