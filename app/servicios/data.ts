export type ServiceSlug =
  | "sistemas-empresariales"
  | "automatizacion-de-procesos"
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
  features: string[];
  process: ServiceProcessStep[];
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  /** Qué problema resuelve, en párrafos. */
  problem?: string[];
  /** Un caso real o, si se aclara en la etiqueta, un ejemplo de flujo. */
  caseStudy?: { label: string; name: string; text: string[]; href?: string };
  faq?: { q: string; a: string }[];
};

export const services: ServiceEntry[] = [
  {
    slug: "sistemas-empresariales",
    title: "Sistemas Empresariales",
    subtitle: "Inventario, ventas y facturación en un solo sistema",
    shortDescription:
      "Desarrollamos sistemas empresariales a medida para que tu negocio deje los Excel sueltos: inventario, ventas, facturación electrónica, clientes y reportes en un solo lugar.",
    seoTitle: "Sistemas Empresariales a Medida en Quito y Ecuador | Xpress Developer",
    seoDescription:
      "Sistemas empresariales a medida para negocios en Ecuador: inventario, ventas, punto de venta, facturación electrónica con un proveedor autorizado por el SRI, clientes y reportes. Desde $1.500.",
    features: [
      "Inventario y bodegas en tiempo real",
      "Ventas, cotizaciones y punto de venta",
      "Facturación electrónica con un proveedor autorizado por el SRI",
      "Clientes, cuentas por cobrar y seguimiento",
      "Reportes y paneles para decidir con datos",
      "Usuarios y permisos por rol",
      "Acceso desde computadora y celular",
      "Respaldos automáticos y datos a tu nombre",
    ],
    process: [
      { step: "1", title: "Diagnóstico", desc: "Revisamos cómo trabaja tu negocio hoy y qué procesos te cuestan más tiempo y errores." },
      { step: "2", title: "Diseño del sistema", desc: "Definimos módulos, pantallas y permisos con tu equipo antes de programar." },
      { step: "3", title: "Desarrollo por etapas", desc: "Entregamos módulo por módulo para que empieces a usarlo cuanto antes." },
      { step: "4", title: "Capacitación y soporte", desc: "Capacitamos a tu equipo y te acompañamos después del lanzamiento." },
    ],
    cta: {
      title: "¿Listo para dejar los Excel sueltos?",
      subtitle: "Cuéntanos cómo trabajas y te proponemos un sistema por etapas.",
      button: "Cotizar sistema",
    },
    problem: [
      "La mayoría de negocios en Ecuador empieza con Excel, WhatsApp y un cuaderno. Funciona mientras son pocos pedidos, pero llega un punto en que el inventario no cuadra, nadie sabe cuánto se vendió ayer y cada factura se digita dos veces.",
      "Un sistema empresarial a medida junta todo eso en un solo lugar: lo que entra a bodega, lo que se vende, lo que se factura y lo que te deben. Cada persona de tu equipo ve lo que necesita según su rol, y tú ves el negocio completo en un panel, desde la computadora o el celular.",
      "A diferencia de un software genérico, lo construimos sobre cómo trabajas tú: tus productos, tus precios, tus bodegas y tus reportes. No pagas licencias por usuario y el código y los datos quedan a tu nombre.",
    ],
    caseStudy: {
      label: "Caso real",
      name: "AMZ Express, cotizador de importaciones",
      text: [
        "El reto: cotizar compras de Amazon hacia Ecuador tomaba tiempo, y cada cliente preguntaba lo mismo por WhatsApp: peso, categoría, aranceles y fecha de llegada.",
        "Lo que construimos: una plataforma donde el cliente pega el enlace del producto y obtiene la cotización al instante, con un panel para seguir cada pedido y otro para que el equipo administre compras, estados y clientes.",
        "El resultado: las cotizaciones dejaron de hacerse a mano y el cliente sabe en todo momento en qué etapa está su compra.",
      ],
      href: "https://amz-express.vercel.app",
    },
    faq: [
      { q: "¿Cuánto cuesta un sistema empresarial a medida?", a: "Desde $1.500 por una primera etapa con los módulos esenciales, por ejemplo inventario y ventas. El precio final depende de cuántos módulos, usuarios e integraciones necesites; te damos una propuesta por escrito con precio cerrado antes de empezar." },
      { q: "¿Cuánto tiempo toma?", a: "Trabajamos por etapas. La primera suele estar lista en 4 a 8 semanas y desde ahí agregamos módulos mientras tu equipo ya usa el sistema." },
      { q: "¿Incluye facturación electrónica del SRI?", a: "Sí. El sistema emite facturas electrónicas a través de un proveedor autorizado por el SRI, conectado a tus ventas, para que no tengas que digitar nada dos veces." },
      { q: "¿Puedo pasar mis datos de Excel al sistema?", a: "Sí. Importamos tus productos, clientes y saldos desde Excel u otro sistema para que arranques con tu información real." },
      { q: "¿Qué pasa después de la entrega?", a: "Capacitamos a tu equipo y te acompañamos con soporte. Los datos y el código quedan a tu nombre, así que no dependes de nosotros para seguir usándolo." },
    ],
  },
  {
    slug: "automatizacion-de-procesos",
    title: "Automatización de Procesos",
    subtitle: "Tareas repetitivas que se hacen solas",
    shortDescription:
      "Conectamos WhatsApp, Excel, tu sistema y tu tienda para que pedidos, facturas, recordatorios y reportes se hagan solos, sin errores y a cualquier hora.",
    seoTitle: "Automatización de Procesos para Negocios en Quito y Ecuador | Xpress Developer",
    seoDescription:
      "Automatizamos procesos de negocios en Ecuador: pedidos por WhatsApp, facturas y recordatorios de pago, reportes automáticos e integración entre Excel, sistemas y tiendas online. Desde $500.",
    features: [
      "Pedidos y consultas por WhatsApp que se registran solos",
      "Facturas y recordatorios de pago automáticos",
      "Reportes diarios en tu correo o WhatsApp",
      "Datos sincronizados entre Excel, tu sistema y tu tienda",
      "Seguimiento automático de clientes potenciales",
      "Alertas de stock bajo y vencimientos",
      "Integración con las herramientas que ya usas",
      "Monitoreo para que nada se detenga",
    ],
    process: [
      { step: "1", title: "Mapeo", desc: "Identificamos las tareas repetitivas que más horas le quitan a tu equipo." },
      { step: "2", title: "Diseño del flujo", desc: "Definimos qué pasa, cuándo y con qué herramientas, paso a paso." },
      { step: "3", title: "Implementación", desc: "Conectamos tus herramientas y probamos con casos reales antes de activarlo." },
      { step: "4", title: "Monitoreo", desc: "Vigilamos que todo corra bien y lo ajustamos cuando tu negocio cambia." },
    ],
    cta: {
      title: "¿Qué tarea no quieres volver a hacer a mano?",
      subtitle: "Cuéntanosla y te mostramos cómo automatizarla.",
      button: "Cotizar automatización",
    },
    problem: [
      "En casi todos los negocios hay tareas que se repiten todos los días: copiar pedidos de WhatsApp a un Excel, enviar la misma factura, recordar pagos pendientes, armar el reporte del día. Son tareas pequeñas, pero juntas se comen horas de tu equipo y es ahí donde aparecen los errores.",
      "Automatizar es conectar las herramientas que ya usas para que esas tareas se hagan solas: llega un pedido por WhatsApp y se registra en tu sistema, se emite la factura, el cliente la recibe y tú tienes el reporte en tu celular. Sin que nadie lo haga a mano y a cualquier hora.",
      "No necesitas cambiar todo tu negocio para empezar. Elegimos la tarea que más tiempo te quita, la automatizamos primero y medimos cuántas horas te ahorra antes de seguir con la siguiente.",
    ],
    caseStudy: {
      label: "Ejemplo de flujo",
      name: "Un pedido por WhatsApp, de principio a fin",
      text: [
        "Un cliente escribe a las 11 de la noche pidiendo tres productos. El asistente responde al instante, confirma disponibilidad y precio, y registra el pedido.",
        "El inventario se descuenta solo, se emite la factura electrónica y le llega al cliente por correo y WhatsApp.",
        "A la mañana siguiente recibes el resumen del día: ventas, pedidos y productos por reponer. Nadie tuvo que copiar nada.",
      ],
    },
    faq: [
      { q: "¿Cuánto cuesta automatizar un proceso?", a: "Desde $500 por automatización. Depende de cuántas herramientas hay que conectar y de cuántos pasos tiene el proceso; te damos el precio cerrado después de revisarlo contigo." },
      { q: "¿Qué herramientas se pueden conectar?", a: "WhatsApp Business, Gmail, Excel y Google Sheets, Google Calendar, tiendas como Shopify o WooCommerce, pasarelas como PayPal o Stripe, tu facturación electrónica y casi cualquier sistema que tenga API." },
      { q: "¿Necesito tener un sistema para automatizar?", a: "No. Podemos automatizar con lo que ya usas, como WhatsApp y Excel. Si más adelante necesitas un sistema completo, la automatización se conecta a él." },
      { q: "¿Qué pasa si algo falla?", a: "Monitoreamos los flujos y recibimos una alerta si un paso no se completa, para corregirlo antes de que afecte a tus clientes." },
      { q: "¿El WhatsApp automático responde como una persona?", a: "Responde las preguntas frecuentes, toma pedidos y agenda citas con el tono de tu negocio. Cuando el caso lo necesita, pasa la conversación a una persona de tu equipo." },
    ],
  },
  {
    slug: "pagina-web",
    title: "Desarrollo de Página Web",
    subtitle: "Sitios web profesionales y personalizados",
    shortDescription:
      "Creamos páginas web profesionales y sitios web personalizados con diseño único, optimización SEO y foco en conversión.",
    seoTitle: "Desarrollo de Páginas Web en Ecuador | Xpress Developer",
    seoDescription:
      "Creamos páginas web profesionales y sitios web personalizados. Diseño único, optimización SEO, velocidad de carga rápida y enfoque comercial. Trabajamos con empresas y emprendedores en Quito y todo Ecuador.",
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
        desc: "Entendemos tu negocio, tus objetivos y el tipo de cliente que quieres atraer.",
      },
      {
        step: "2",
        title: "Diseño UI/UX",
        desc: "Creamos una experiencia clara, moderna y pensada para convertir visitas en oportunidades.",
      },
      {
        step: "3",
        title: "Desarrollo",
        desc: "Construimos tu página priorizando velocidad, seguridad y que sea fácil de mantener.",
      },
      {
        step: "4",
        title: "Lanzamiento",
        desc: "Publicamos el sitio con SEO base, analítica y una configuración lista para crecer.",
      },
    ],
    cta: {
      title: "¿Listo para lanzar una página web seria?",
      subtitle: "Cotiza tu proyecto y te respondemos con un plan claro.",
      button: "Cotizar página web",
    },
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    subtitle: "Páginas de alto impacto que convierten",
    shortDescription:
      "Landing pages orientadas a conversión con diseño profesional, carga rápida y estructura preparada para campañas y SEO.",
    seoTitle: "Landing Pages que Convierten en Ecuador | Xpress Developer",
    seoDescription:
      "Creamos landing pages enfocadas en conversión. Diseño profesional, copy claro, animaciones cuidadas y optimización SEO desde el arranque. Ideal para negocios en Ecuador que necesitan captar clientes.",
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
      title: "¿Necesitas una landing page que venda de verdad?",
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
    seoTitle: "Desarrollo de Apps Android en Ecuador | Xpress Developer",
    seoDescription:
      "Desarrollamos apps Android nativas y multiplataforma con Kotlin o React Native. Publicación en Google Play y arquitectura lista para crecer. Desarrollo de apps para empresas en Ecuador.",
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
      title: "¿Tienes una idea para Android?",
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
    seoTitle: "Desarrollo de Apps iOS en Ecuador | Xpress Developer",
    seoDescription:
      "Creamos apps iOS para iPhone y iPad con Swift o React Native. Diseño cuidado, rendimiento sólido y preparación para App Store. Apps para empresas y emprendedores en Ecuador.",
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
      title: "¿Necesitas una app para iPhone o iPad?",
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
    seoTitle: "Chatbots con IA para Empresas en Ecuador | Xpress Developer",
    seoDescription:
      "Implementamos chatbots con inteligencia artificial para soporte, ventas y automatización. Integración con web, WhatsApp y procesos internos. Automatización con IA para negocios en Ecuador.",
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
      title: "¿Quieres automatizar atención o ventas con IA?",
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
    seoTitle: "Inteligencia Artificial para Empresas en Ecuador | Xpress Developer",
    seoDescription:
      "Aplicamos inteligencia artificial en procesos de negocio: automatización, análisis de datos, asistentes y soluciones personalizadas para empresas en Ecuador.",
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
      title: "¿Quieres aplicar IA con sentido de negocio?",
      subtitle: "Te ayudamos a usarla donde suma, no donde solo impresiona.",
      button: "Consultar sobre IA",
    },
  },
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    subtitle: "Frontend, backend y arquitectura para productos digitales",
    shortDescription:
      "Desarrollo web a medida con React, Next.js, Node.js y APIs sólidas para proyectos que necesitan crecer con orden.",
    seoTitle: "Desarrollo Web a Medida en Ecuador | Xpress Developer",
    seoDescription:
      "Desarrollo web frontend y backend con React, Next.js, Node.js y arquitectura mantenible. Creamos productos digitales pensados para escalar, para empresas en Quito y todo Ecuador.",
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
      title: "¿Necesitas construir un producto web serio?",
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
    seoTitle: "Tiendas Online y Ecommerce en Ecuador | Xpress Developer",
    seoDescription:
      "Creamos ecommerce y tiendas online con carrito, pagos, gestión de productos y enfoque en conversión y escalabilidad. Tiendas online para vender en Ecuador.",
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
        desc: "Entendemos cómo vendes hoy y qué necesitas automatizar en la tienda.",
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
      title: "¿Quieres vender online con una tienda en serio?",
      subtitle: "Te ayudamos a lanzar un ecommerce claro, rápido y mantenible.",
      button: "Cotizar ecommerce",
    },
  },
];

export const servicesBySlug = Object.fromEntries(
  services.map((service) => [service.slug, service]),
) as Record<ServiceSlug, ServiceEntry>;


// Precio de referencia, plazo e imagen de un proyecto real parecido, para las páginas de servicio.
// Última edición de cada página de servicio. Actualízala cuando cambies su contenido.
export const serviceUpdated: Record<ServiceSlug, string> = {
  "sistemas-empresariales": "2026-10-18",
  "automatizacion-de-procesos": "2026-10-18",
  "pagina-web": "2026-10-17",
  "landing-page": "2026-10-17",
  "desarrollo-android": "2026-10-17",
  "desarrollo-ios": "2026-10-17",
  "chat-ia": "2026-10-17",
  "inteligencia-artificial": "2026-10-17",
  "desarrollo-web": "2026-10-17",
  ecommerce: "2026-10-17",
};

export const serviceGallery: Record<ServiceSlug, string[]> = {
  "sistemas-empresariales": ["/proyectos/amz-express-cotizador.png", "/proyectos/aname-registro-atletas.png", "/proyectos/universal-skills-busqueda.png"],
  "automatizacion-de-procesos": ["/proyectos/amz-express-pedidos.png", "/proyectos/xpress-ecommerce-catalogo.png", "/proyectos/xpressconvert-herramientas.png"],
  "pagina-web": ["/proyectos/universal-skills-busqueda.png", "/proyectos/universal-skills-detalle.png", "/proyectos/xpressconvert-inicio.png"],
  "landing-page": ["/proyectos/restaurante-trattoria-menu.png", "/proyectos/restaurante-trattoria-detalle.png", "/proyectos/xpress-ecommerce-catalogo.png"],
  "desarrollo-android": ["/proyectos/aname-registro-atletas.png", "/proyectos/aname-contacto.png", "/proyectos/amz-express-panel.png"],
  "desarrollo-ios": ["/proyectos/aname-inicio.png", "/proyectos/aname-contacto.png", "/proyectos/xpressconvert-detalle.png"],
  "chat-ia": ["/proyectos/amz-express-cotizador.png", "/proyectos/amz-express-pedidos.png", "/proyectos/universal-skills-detalle.png"],
  "inteligencia-artificial": ["/proyectos/universal-skills-catalogo.png", "/proyectos/universal-skills-detalle.png", "/proyectos/xpressconvert-herramientas.png"],
  "desarrollo-web": ["/proyectos/amz-express-cotizador.png", "/proyectos/amz-express-panel.png", "/proyectos/xpress-ecommerce-catalogo.png"],
  ecommerce: ["/proyectos/xpress-ecommerce-catalogo.png", "/proyectos/xpress-ecommerce-producto.png", "/proyectos/amz-express-cotizador.png"],
};

export const serviceMobile: Record<ServiceSlug, string> = {
  "sistemas-empresariales": "/proyectos/movil/amz-express.jpg",
  "automatizacion-de-procesos": "/proyectos/movil/xpressconvert.jpg",
  "pagina-web": "/proyectos/movil/universal-skills.jpg",
  "landing-page": "/proyectos/movil/restaurant.jpg",
  "desarrollo-android": "/proyectos/movil/atletismo.jpg",
  "desarrollo-ios": "/proyectos/movil/xpressconvert.jpg",
  "chat-ia": "/proyectos/movil/amz-express.jpg",
  "inteligencia-artificial": "/proyectos/movil/universal-skills.jpg",
  "desarrollo-web": "/proyectos/movil/amz-express.jpg",
  ecommerce: "/proyectos/movil/xpress-ecommerce.jpg",
};

export const serviceExtras: Record<ServiceSlug, { price: number; time: string; image: string; imageAlt: string }> = {
  "sistemas-empresariales": { price: 1500, time: "Se entrega por etapas", image: "/proyectos/amz-express-panel.png", imageAlt: "Panel de AMZ Express, sistema empresarial desarrollado por Xpress Developer" },
  "automatizacion-de-procesos": { price: 500, time: "Plazo según el proceso", image: "/proyectos/xpress-ecommerce-catalogo.png", imageAlt: "Pedidos automatizados en Xpress Ecommerce desarrollado por Xpress Developer" },
  "pagina-web": { price: 450, time: "Lista en 3 a 6 semanas", image: "/proyectos/universal-skills-catalogo.png", imageAlt: "Universal Skills Hub, plataforma web desarrollada por Xpress Developer" },
  "landing-page": { price: 250, time: "Lista en 1 a 2 semanas", image: "/proyectos/restaurante-trattoria-inicio.png", imageAlt: "Landing page de restaurante desarrollada por Xpress Developer" },
  "desarrollo-android": { price: 2500, time: "Se planifica por etapas", image: "/proyectos/aname-inicio.png", imageAlt: "Sistema de atletismo con app Android desarrollado por Xpress Developer" },
  "desarrollo-ios": { price: 2500, time: "Se planifica por etapas", image: "/proyectos/aname-registro-atletas.png", imageAlt: "Sistema de atletismo multiplataforma desarrollado por Xpress Developer" },
  "chat-ia": { price: 400, time: "Plazo según tus procesos", image: "/proyectos/amz-express-panel.png", imageAlt: "Plataforma AMZ Express con atención automatizada desarrollada por Xpress Developer" },
  "inteligencia-artificial": { price: 500, time: "Plazo según tus procesos", image: "/proyectos/universal-skills-busqueda.png", imageAlt: "Catálogo de herramientas de IA desarrollado por Xpress Developer" },
  "desarrollo-web": { price: 1500, time: "Se planifica por etapas", image: "/proyectos/amz-express-pedidos.png", imageAlt: "Panel de AMZ Express desarrollado por Xpress Developer" },
  ecommerce: { price: 900, time: "Plazo según el catálogo", image: "/proyectos/xpress-ecommerce-inicio.png", imageAlt: "Tienda online Xpress Ecommerce desarrollada por Xpress Developer" },
};
