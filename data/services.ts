import {
  ClipboardCheck,
  Compass,
  GraduationCap,
  MessageSquare,
  Code2,
  UserSearch,
  Building2,
  Scale,
  type LucideIcon,
} from "lucide-react";

export interface ServiceExample {
  sector: string;
  situation: string;
  result: string;
}

export interface ServiceReview {
  quote: string;
  role: string;
}

export interface Service {
  slug: string;
  momento: "01" | "02" | "03";
  momentoLabel: string;
  category: string;
  categoryColor: string;
  accentColor: string;
  badge?: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  intro: string;
  description: string[];
  includes: string[];
  examples: ServiceExample[];
  reviews: ServiceReview[];
}

export const services: Service[] = [
  {
    slug: "ai-audit",
    momento: "01",
    momentoLabel: "Arrancas o exploras",
    category: "Estrategia",
    categoryColor: "#3b6dff",
    accentColor: "#123a52",
    icon: ClipboardCheck,
    title: "AI Audit",
    tagline: "Radiografía completa de madurez IA, riesgos y oportunidades en tu organización.",
    intro:
      "Antes de invertir en IA, necesitas saber exactamente dónde estás. El AI Audit es un diagnóstico de dos semanas que mapea tus procesos, datos, herramientas y equipo para darte una fotografía honesta de tu madurez en IA.",
    description: [
      "Entrevistamos a los responsables de cada área, revisamos tus sistemas y flujos de trabajo actuales y analizamos qué procesos son candidatos reales a automatización o asistencia con IA — y cuáles no lo son todavía.",
      "El resultado no es un informe genérico de 80 páginas que nadie lee. Es un documento accionable con un ranking de oportunidades por impacto y esfuerzo, los riesgos regulatorios que debes vigilar y una hoja de ruta priorizada para los próximos 12 meses.",
    ],
    includes: [
      "Entrevistas con responsables de cada departamento",
      "Mapeo de procesos, datos y herramientas actuales",
      "Ranking de oportunidades de IA por impacto y esfuerzo",
      "Identificación de riesgos y obligaciones AI Act",
      "Hoja de ruta priorizada a 12 meses",
      "Sesión de presentación de resultados con el comité",
    ],
    examples: [
      {
        sector: "Industria y manufactura",
        situation: "Una planta de producción media no sabía si sus datos de sensores eran suficientes para predecir averías.",
        result: "El audit identificó 3 líneas con datos ya explotables y descartó 2 iniciativas que habrían costado 6 meses sin retorno.",
      },
      {
        sector: "Servicios profesionales",
        situation: "Una firma de servicios profesionales quería “meter IA” sin saber por dónde empezar.",
        result: "Se priorizaron 4 casos de uso en atención al cliente y generación de propuestas, con ROI estimado en menos de 90 días.",
      },
      {
        sector: "Retail",
        situation: "Una cadena de retail medio tenía datos de venta dispersos en 5 sistemas distintos.",
        result: "El diagnóstico destapó que el verdadero cuello de botella era de datos, no de IA, y redirigió el presupuesto a integrarlos primero.",
      },
    ],
    reviews: [
      {
        quote: "Por fin alguien nos dijo con números dónde merecía la pena invertir y dónde no. Nos ahorramos dos proyectos que no iban a funcionar.",
        role: "Directora de Operaciones, industria y manufactura",
      },
      {
        quote: "Esperaba un informe más de consultora tradicional. Nos dieron un plan que pudimos empezar a ejecutar la semana siguiente.",
        role: "CEO, firma de servicios profesionales",
      },
      {
        quote: "El diagnóstico de riesgos AI Act nos ahorró tener que contratar a otra asesoría aparte.",
        role: "Responsable de Compliance, servicios financieros",
      },
    ],
  },
  {
    slug: "consultoria-ia",
    momento: "01",
    momentoLabel: "Arrancas o exploras",
    category: "Estrategia",
    categoryColor: "#3b6dff",
    accentColor: "#123a52",
    icon: Compass,
    title: "Consultoría en IA",
    tagline: "Define dónde aplicar IA, qué priorizar y cómo convertirlo en un plan accionable.",
    intro:
      "Tener claro qué hacer con la IA es más difícil que ejecutarla. Te ayudamos a traducir la estrategia de negocio en un plan de IA concreto, con prioridades claras y sin depender de un único proveedor de tecnología.",
    description: [
      "Trabajamos con el equipo directivo para entender los objetivos reales del negocio — crecer, reducir costes, mejorar el servicio — y a partir de ahí identificamos qué aplicaciones de IA tienen sentido, en qué orden y con qué recursos.",
      "No vendemos una tecnología concreta. Nuestro trabajo es ser el criterio independiente que evalúa opciones, negocia con proveedores si hace falta y evita que la empresa invierta en herramientas que no encajan con su realidad operativa.",
    ],
    includes: [
      "Talleres de alineación con el equipo directivo",
      "Priorización de casos de uso por valor de negocio",
      "Evaluación independiente de proveedores y herramientas",
      "Plan de implementación con hitos y responsables",
      "Acompañamiento en la toma de decisiones clave",
    ],
    examples: [
      {
        sector: "Logística",
        situation: "Una empresa de logística dudaba entre 3 plataformas de IA distintas ofrecidas por proveedores.",
        result: "La consultoría demostró que ninguna resolvía el problema real de planificación de rutas y se diseñó una solución a medida más barata.",
      },
      {
        sector: "Educación",
        situation: "Un centro educativo quería “no quedarse atrás” con la IA sin un objetivo claro.",
        result: "Se definieron 2 focos concretos — atención a familias y apoyo docente — descartando el resto por ahora.",
      },
      {
        sector: "Servicios financieros",
        situation: "Una entidad financiera de tamaño medio necesitaba un plan de IA a 3 años para su consejo.",
        result: "Se entregó una hoja de ruta con 6 iniciativas escalonadas, aprobada en la primera presentación al consejo.",
      },
    ],
    reviews: [
      {
        quote: "Nos ayudaron a decir que no a dos proyectos que sonaban bien pero no tenían sentido para nosotros. Eso vale más que cualquier informe.",
        role: "Director General, logística",
      },
      {
        quote: "La primera consultora que no intentó vendernos su propia herramienta.",
        role: "Directora de Innovación, educación",
      },
    ],
  },
  {
    slug: "formacion-a-medida",
    momento: "01",
    momentoLabel: "Arrancas o exploras",
    category: "Capacitación",
    categoryColor: "#0d9488",
    accentColor: "#14b8be",
    icon: GraduationCap,
    title: "Formación a Medida",
    tagline: "Tu equipo, preparado para usar IA con criterio desde el primer día.",
    intro:
      "La IA solo genera valor si las personas saben usarla bien. Diseñamos programas de formación adaptados al nivel y al rol de cada equipo — de directivos a operativos — con casos prácticos de tu propio sector.",
    description: [
      "Nada de cursos genéricos de “introducción a la IA”. Cada programa se construye con ejercicios y herramientas relevantes para el día a día de los asistentes: comité de dirección, comercial, atención al cliente, operaciones.",
      "Combinamos formación presencial u online con material de consulta permanente, para que el aprendizaje no se quede en la sesión sino que se traduzca en un uso real y con criterio en el trabajo diario.",
    ],
    includes: [
      "Diagnóstico previo del nivel de partida de cada equipo",
      "Contenido adaptado por rol: dirección, mandos intermedios, operativo",
      "Casos prácticos con herramientas reales de tu sector",
      "Materiales de consulta permanente post-formación",
      "Medición de adopción tras la formación",
    ],
    examples: [
      {
        sector: "Retail",
        situation: "Una cadena de retail formó a 40 responsables de tienda que nunca habían usado herramientas de IA.",
        result: "El 92% empezó a usar el asistente de recomendación de producto en las dos semanas siguientes.",
      },
      {
        sector: "Industria",
        situation: "El comité de dirección de una industrial necesitaba entender qué preguntar a los proveedores de IA.",
        result: "Sesión de medio día que evitó la compra de una herramienta que no encajaba con sus sistemas.",
      },
      {
        sector: "Servicios profesionales",
        situation: "Un despacho profesional quería que su equipo junior usara IA sin perder rigor en el trabajo.",
        result: "Se definieron protocolos de uso y revisión que ahora forman parte del onboarding de nuevas incorporaciones.",
      },
    ],
    reviews: [
      {
        quote: "Formación de verdad, no una charla motivacional sobre IA. Salimos con cosas concretas que aplicar al día siguiente.",
        role: "Responsable de Formación, retail",
      },
      {
        quote: "Adaptaron los ejemplos a nuestro sector, no era la típica formación enlatada.",
        role: "Socio Director, servicios profesionales",
      },
    ],
  },
  {
    slug: "chatbots-inteligentes",
    momento: "02",
    momentoLabel: "Implementas o despliegas",
    category: "Implementación",
    categoryColor: "#0d9488",
    accentColor: "#14b8be",
    icon: MessageSquare,
    title: "Chatbots Inteligentes",
    tagline: "Asistentes con IA para atención, ventas y operaciones conectados a tu negocio.",
    intro:
      "Diseñamos e implementamos asistentes conversacionales conectados a tus sistemas reales — CRM, catálogo, base de conocimiento — no un chatbot de preguntas frecuentes desconectado del negocio.",
    description: [
      "Cada chatbot se construye sobre tus datos y procesos: responde con la información real de tu catálogo o tu base de conocimiento, escala a una persona cuando corresponde y queda integrado con las herramientas que ya usas (CRM, WhatsApp Business, helpdesk).",
      "El objetivo no es sustituir personas sino absorber el volumen repetitivo para que tu equipo se centre en lo que de verdad requiere criterio humano.",
    ],
    includes: [
      "Diseño de conversación adaptado a tu marca y tono",
      "Integración con CRM, catálogo o base de conocimiento",
      "Escalado a persona humana cuando corresponde",
      "Conexión con WhatsApp Business, web o app",
      "Panel de métricas de conversaciones y resolución",
    ],
    examples: [
      {
        sector: "Retail y e-commerce",
        situation: "Una marca de retail recibía cientos de consultas repetidas sobre stock y tallas por WhatsApp.",
        result: "Automatizó el 65% de esas consultas y redujo el tiempo de respuesta de horas a segundos.",
      },
      {
        sector: "Servicios profesionales",
        situation: "Un despacho quería filtrar y cualificar leads antes de que llegaran a un comercial.",
        result: "El asistente cualifica automáticamente y solo pasa a comercial los leads con encaje real, un 40% menos de reuniones sin valor.",
      },
      {
        sector: "Logística",
        situation: "Una empresa de logística recibía muchas llamadas para conocer el estado de un envío.",
        result: "Un asistente conectado al sistema de tracking resolvió el 70% de esas consultas sin intervención humana.",
      },
    ],
    reviews: [
      {
        quote: "No es un chatbot de manual, responde con datos reales de nuestro catálogo. Los clientes ni notan que hablan con un asistente.",
        role: "Directora de Marca, retail y e-commerce",
      },
      {
        quote: "Se integró con nuestro CRM sin dramas y en menos tiempo del que esperábamos.",
        role: "Responsable de Atención al Cliente, logística",
      },
    ],
  },
  {
    slug: "desarrollos-a-medida",
    momento: "02",
    momentoLabel: "Implementas o despliegas",
    category: "Implementación",
    categoryColor: "#0d9488",
    accentColor: "#14b8be",
    icon: Code2,
    title: "Desarrollos a Medida",
    tagline: "IA, automatización y datos cuando ninguna solución estándar es suficiente.",
    intro:
      "Cuando el problema es específico de tu negocio, una herramienta genérica no basta. Construimos soluciones a medida — desde modelos de predicción hasta integraciones complejas de datos — con tu equipo técnico o como equipo externo.",
    description: [
      "Trabajamos como una extensión de tu equipo técnico, con las mismas prácticas de ingeniería que exigirías internamente: control de versiones, pruebas, documentación y despliegue supervisado.",
      "No creamos dependencia de una caja negra. Documentamos y transferimos el conocimiento para que, si en el futuro quieres internalizar el mantenimiento, puedas hacerlo sin fricción.",
    ],
    includes: [
      "Análisis técnico de viabilidad antes de comprometer presupuesto",
      "Desarrollo con prácticas de ingeniería estándar (control de versiones, pruebas)",
      "Integración con tus sistemas y fuentes de datos existentes",
      "Documentación completa y transferencia de conocimiento",
      "Soporte y mantenimiento tras el despliegue",
    ],
    examples: [
      {
        sector: "Industria y manufactura",
        situation: "Una planta necesitaba predecir averías de maquinaria con datos de sensores propios.",
        result: "Modelo de mantenimiento predictivo que redujo las paradas no planificadas en un 30%.",
      },
      {
        sector: "Retail",
        situation: "Una cadena necesitaba un motor de recomendación de producto propio, no genérico.",
        result: "Sistema integrado en su e-commerce que contribuyó a un +22% de conversión en producto recomendado.",
      },
      {
        sector: "Servicios financieros",
        situation: "Una entidad necesitaba cruzar datos de 4 sistemas legacy sin sustituirlos.",
        result: "Capa de integración a medida que unificó los datos sin tocar los sistemas core.",
      },
    ],
    reviews: [
      {
        quote: "Nos entregaron algo que nuestro propio equipo técnico pudo entender y mantener, no una caja negra.",
        role: "CTO, industria y manufactura",
      },
      {
        quote: "El único proveedor que nos avisó de que una parte del proyecto no tenía sentido, en vez de facturarla igualmente.",
        role: "Director de Tecnología, servicios financieros",
      },
    ],
  },
  {
    slug: "apoyo-en-contratacion",
    momento: "02",
    momentoLabel: "Implementas o despliegas",
    category: "Asesoramiento",
    categoryColor: "#0d9488",
    accentColor: "#14b8be",
    icon: UserSearch,
    title: "Apoyo en Contratación",
    tagline: "Encuentra al perfil de IA o datos que necesitas, evaluado por especialistas.",
    intro:
      "Contratar perfiles de IA y datos es difícil cuando quien entrevista no domina la materia. Evaluamos técnicamente a los candidatos que llegan a la fase final para que la decisión de contratación no dependa solo de una buena entrevista.",
    description: [
      "No somos una agencia de selección al uso. Entramos en el proceso que ya tienes, con tu propio equipo de RRHH o agencia, en el momento de la evaluación técnica: pruebas prácticas, entrevistas técnicas y validación de experiencia real en proyectos de IA.",
      "También ayudamos a definir el perfil correcto antes de publicar la oferta, evitando el error habitual de pedir un “unicornio” que combina cinco especialidades distintas en una sola persona.",
    ],
    includes: [
      "Definición del perfil técnico real que necesitas",
      "Diseño de pruebas técnicas específicas para el puesto",
      "Entrevistas técnicas con especialistas en IA y datos",
      "Informe objetivo de fortalezas y riesgos por candidato",
      "Apoyo en la negociación de condiciones técnicas",
    ],
    examples: [
      {
        sector: "Industria",
        situation: "Una industrial llevaba 4 meses buscando un “perfil IA” sin saber si los candidatos eran realmente sólidos.",
        result: "Se cerró la contratación en 3 semanas tras redefinir el perfil real que necesitaban.",
      },
      {
        sector: "Servicios financieros",
        situation: "Un equipo de RRHH no técnico tenía que decidir entre 3 finalistas para un puesto de Data Scientist.",
        result: "La evaluación técnica descartó al candidato con mejor entrevista pero experiencia inflada en el CV.",
      },
    ],
    reviews: [
      {
        quote: "Nos evitaron contratar a un candidato que en la entrevista sonaba perfecto pero no aguantó la prueba técnica.",
        role: "Directora de RRHH, industria",
      },
      {
        quote: "Por fin alguien que sabe qué preguntar en una entrevista técnica de IA de verdad.",
        role: "Responsable de Talento, servicios financieros",
      },
    ],
  },
  {
    slug: "departamento-ia-externo",
    momento: "03",
    momentoLabel: "Escalas u operas",
    category: "Estrategia",
    categoryColor: "#7c5cea",
    accentColor: "#137988",
    icon: Building2,
    title: "Departamento IA Externo",
    tagline: "Tu capacidad de IA sin necesidad de contratar un equipo interno.",
    intro:
      "Para muchas empresas, montar un equipo de IA interno no es viable ni necesario todavía. Actuamos como tu departamento de IA externalizado: estrategia, implementación y mantenimiento, con la misma cercanía que un equipo propio.",
    description: [
      "Un único punto de contacto que conoce tu negocio, tus sistemas y tus prioridades, en lugar de tener que coordinar a varios proveedores puntuales para cada proyecto nuevo.",
      "Trabajamos con reuniones periódicas de seguimiento, roadmap compartido y la flexibilidad de escalar el nivel de dedicación según lo que necesite cada fase del negocio.",
    ],
    includes: [
      "Roadmap de IA compartido y revisado periódicamente",
      "Ejecución continua de proyectos, no solo consultoría puntual",
      "Mantenimiento y evolución de las soluciones ya desplegadas",
      "Un único interlocutor que conoce tu negocio en profundidad",
      "Dedicación flexible según la fase y necesidad del negocio",
    ],
    examples: [
      {
        sector: "Retail",
        situation: "Una cadena de retail medio no tenía volumen para justificar un equipo de IA interno de 5 personas.",
        result: "Con dedicación externa de 2 días por semana mantienen 4 soluciones de IA en producción y siguen incorporando nuevos casos.",
      },
      {
        sector: "Servicios profesionales",
        situation: "Una firma en expansión necesitaba capacidad de IA que creciera con ella sin contrataciones anticipadas.",
        result: "Escaló la dedicación de 1 a 3 días por semana en 8 meses, alineado con el crecimiento real del negocio.",
      },
    ],
    reviews: [
      {
        quote: "Es como tener un departamento de IA propio, pero sin la incertidumbre de contratar antes de tiempo.",
        role: "Directora General, retail",
      },
      {
        quote: "Conocen nuestro negocio mejor que muchos empleados internos a estas alturas.",
        role: "Socio, servicios profesionales",
      },
    ],
  },
  {
    slug: "asesoramiento-legal-regulatorio",
    momento: "03",
    momentoLabel: "Escalas u operas",
    category: "Asesoramiento",
    categoryColor: "#7c5cea",
    accentColor: "#137988",
    badge: "Único en España",
    icon: Scale,
    title: "Asesoramiento Legal y Regulatorio",
    tagline: "Cumplimiento normativo para tus sistemas de IA sin frenar la innovación.",
    intro:
      "Somos de los pocos equipos en España que integran asesoramiento legal AI Act y RGPD junto con la implementación técnica de IA, bajo un mismo contrato y un mismo interlocutor.",
    description: [
      "El AI Act clasifica tus sistemas de IA por nivel de riesgo y exige obligaciones distintas según esa clasificación. La mayoría de empresas no sabe todavía en qué categoría están ni qué deben hacer al respecto.",
      "Trabajamos codo con codo con tu equipo legal — o hacemos de equipo legal si no lo tienes — para que el cumplimiento no sea un obstáculo que frena proyectos, sino un criterio que se integra desde el diseño de cada solución.",
    ],
    includes: [
      "Clasificación de tus sistemas de IA por nivel de riesgo (AI Act)",
      "Identificación de las obligaciones legales que te corresponden",
      "Memorándum de cumplimiento accionable",
      "Revisión de contratos con proveedores de IA",
      "Coordinación entre el equipo legal y el equipo técnico",
    ],
    examples: [
      {
        sector: "Servicios financieros",
        situation: "Una entidad financiera no sabía si su sistema de scoring de riesgo era “alto riesgo” según el AI Act.",
        result: "Se clasificó correctamente y se definió un plan de adecuación con plazos concretos antes de la entrada en vigor.",
      },
      {
        sector: "Recursos Humanos",
        situation: "Una empresa usaba una herramienta de IA para preseleccionar candidatos sin haber evaluado las implicaciones legales.",
        result: "Se ajustó el proceso y se documentó el cumplimiento antes de que se convirtiera en un riesgo.",
      },
      {
        sector: "Industria",
        situation: "Un proveedor de IA industrial no quería asumir responsabilidad contractual sobre el cumplimiento normativo.",
        result: "Se renegoció el contrato para repartir correctamente las obligaciones legales entre las partes.",
      },
    ],
    reviews: [
      {
        quote: "Teníamos dos asesorías distintas para lo técnico y lo legal que ni se hablaban entre ellas. Aquí es un único equipo.",
        role: "Directora Legal, servicios financieros",
      },
      {
        quote: "Nos explicaron el AI Act en términos que entendía el comité, no en jerga jurídica.",
        role: "Directora de RRHH, recursos humanos",
      },
      {
        quote: "El único proveedor que nos hizo replantear un contrato con un tercero para protegernos legalmente.",
        role: "Director de Compras, industria",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
