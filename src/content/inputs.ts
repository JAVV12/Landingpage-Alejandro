export const inputs = {
  // A) Tipo de landing
  preset: "serviceLaunch",
  copyMode: "emocional",

  // B) Marca
  brandName: "Alejandro Valencia - Coaching & Liderazgo",
  tagline: "Transforma tu Liderazgo, Transforma tu Vida.",

  // C) Oferta
  offerName: "Mentoring de Liderazgo Personalizado (1:1)",
  h1Promise: "Desbloquea tu Máximo Potencial y Lidera tu Vida con Propósito",
  subPromise: "Programa intensivo y 100% personalizado para líderes y profesionales que buscan claridad, dirección y un impacto real en 90 días.",
  timeframe: "90 días",

  // D) Público objetivo
  targetAudience: "Profesionales, emprendedores o ejecutivos ambiciosos que sienten estancamiento y buscan un salto de nivel en su carrera y bienestar personal.",
  pains: [
    "Sentimiento de estancamiento y falta de dirección clara.",
    "Dificultad para gestionar el tiempo y mantener el equilibrio vida-trabajo.",
    "Miedo o inseguridad para tomar decisiones cruciales de vida o carrera.",
    "Falta de herramientas concretas para influir y motivar a sus equipos o a sí mismos.",
  ],
  desires: [
    "Conseguir una visión clara y un plan de acción para los próximos 12 meses.",
    "Desarrollar la confianza y autoridad necesarias para liderar eficazmente.",
    "Liberar tiempo y energía al establecer límites sanos y prioridades claras.",
  ],

  // E) Prueba social
  testimonialQuote: "Gracias a este mentoring, pasé de sentirme abrumado a liderar mi equipo con una claridad y propósito que nunca antes tuve. Es un cambio de vida, no solo de carrera.",
  testimonialAuthor: "María G., Directora de Proyectos Tech",
  stats: [
    { value: "92%", label: "Mayor claridad en 30 días" },
    { value: "+300", label: "Horas de coaching entregadas" },
  ],

  // F) Contenidos del programa
  hasModules: true,
  modules: [
    "Módulo 1: La Fundación: Claridad y Propósito.",
    "Módulo 2: Liderazgo Interior: Gestión Emocional y Confianza.",
    "Módulo 3: El Plan Estratégico: Visión a 12 Meses y Ejecución.",
    "Módulo 4: Liderazgo de Impacto: Influencia y Comunicación.",
    "Módulo 5: Productividad Consciente y Equilibrio.",
    "Módulo 6: El Legado: Sostenibilidad y Crecimiento Continuo.",
  ],

  // G) Bonos
  hasBonuses: true,
  bonuses: [
    {
      title: "Acceso a la Biblioteca de Recursos de Liderazgo",
      value: "$197 USD",
      bullets: [
        "Plantillas de planificación de objetivos trimestrales.",
        "Guías de meditación para líderes (para gestionar el estrés).",
        "Frameworks de delegación efectiva para equipos.",
      ],
    },
    {
      title: "Sesión de Seguimiento Post-Programa (30 días después)",
      value: "$250 USD",
      bullets: [
        "Refuerzo de los aprendizajes clave.",
        "Ajuste del plan de acción para los siguientes 90 días.",
        "Revisión de obstáculos emergentes.",
      ],
    },
  ],

  // H) Precio y planes
  planCount: 1, // CLAVE: Hook de Pricing
  plans: [
    {
      title: "Programa Liderazgo de Impacto 1:1",
      price: "$1,497 USD",
      note: "Pago único. Posibilidad de 3 pagos de $550 USD (detalles en la llamada).",
      bullets: [
        "12 sesiones privadas de 60 minutos (durante 90 días).",
        "Acceso directo y soporte vía WhatsApp/Email durante el programa.",
        "Kit de herramientas digitales (workbooks, evaluaciones, plantillas).",
      ],
      ctaLabel: "Agendar mi Sesión de Claridad Gratuita",
      ctaHref: "https://calendly.com/alejo-valencia/descubrimiento",
    },
  ],

  // I) Garantía
  guarantee: {
    title: "Garantía de Compromiso 'Crecimiento Asegurado'",
    text: "Si completas todos los ejercicios y sesiones y sientes que no obtuviste claridad o valor, te ofrezco 30 días adicionales de acompañamiento sin costo, o la devolución proporcional de la última mensualidad.",
  },

  // J) Objeciones y FAQ
  objections: [
    { q: "¿Es esto solo coaching de negocios o también personal?", a: "Es una integración. Creemos que no se puede liderar un negocio sin liderarse a sí mismo. Trabajaremos en tu mentalidad, hábitos y la estrategia de vida y carrera." },
    { q: "No tengo tiempo para 12 sesiones, estoy muy ocupado.", a: "Precisamente por eso. Las sesiones son de 60 minutos, enfocadas en liberar el tiempo. Si estás ocupado, es una señal de que necesitas este espacio para ser más eficiente, no más ocupado. El coaching te *dará* tiempo." },
  ],
  faq: [
    { q: "¿Cómo sé si estoy listo para este programa?", a: "Estás listo si sientes una 'necesidad de más' y estás dispuesto a la introspección y la acción. Lo validaremos en la Sesión de Claridad gratuita." },
    { q: "¿Cuál es la diferencia con una mentoría grupal?", a: "Este programa es 100% personalizado a tus desafíos únicos. No hay 'talla única'. Cada sesión y ejercicio se diseña para ti y tus metas específicas." },
  ],

  // K) Contacto
  contactChannels: [
    { title: "WhatsApp Directo", value: "+57 300 123 4567", ctaLabel: "Enviar Mensaje", ctaHref: "https://wa.me/573001234567", variant: "secondary" },
    { title: "Email", value: "contacto@alejandrovalencia.com", ctaLabel: "Enviar Email", ctaHref: "mailto:contacto@alejandrovalencia.com", variant: "ghost" },
  ],

  // L) SEO
  seoTitle: "Alejandro Valencia | Coaching de Liderazgo Personalizado | Desbloquea tu Potencial",
  metaDescription: "Programa 1:1 de 90 días con Alejandro Valencia para líderes y profesionales. Consigue claridad, propósito y herramientas de liderazgo para transformar tu carrera y vida.",
};
