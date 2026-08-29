import type { ServiceContent } from "../service-content";

const es = {
  meta: {
    title: "Labs24k | Inteligencia Artificial y Automatización",
    description:
      "Implementación de IA y asesoramiento legal AI Act + GDPR bajo un mismo partner. Prepara tu empresa para el deadline del AI Act de agosto 2026. Llamada gratuita de 30 minutos.",
  },
  nav: {
    skipLink: "Saltar al contenido",
    servicios: "Servicios",
    sectores: "Sectores",
    metodologia: "Metodología",
    clientes: "Clientes",
    libro: "El libro",
    libroGratis: "Gratis",
    aiAct: "AI Act",
    nosotros: "Nosotros",
    blog: "Blog",
    contacto: "Contacto",
    llamadaGratuita: "Llamada gratuita",
    abrirMenu: "Abrir menú",
    inicio: "Labs24k - Inicio",
  },
  banner: {
    tag: "AI Act",
    textPre: "El AI Act ",
    textStrong: "ya está en vigor",
    textPost: ". ¿Tu empresa cumple?",
    cta: "Calcular exposición",
    cerrar: "Cerrar aviso",
  },
  hero: {
    eyebrow: "Consultoría IA + Legal · AI Act 2024/1689",
    titleLine1: "Hacemos que la IA funcione en tu empresa.",
    titleLine2: "Y que cumpla.",
    subtitle:
      "Estrategia, implementación técnica y asesoramiento legal AI Act y GDPR integrados bajo un mismo contrato. Resultados medibles en semanas, no años.",
    ctaPrimary: "Agendar llamada gratuita",
    ctaSecondary: "Ver los 8 servicios",
    meta: ["Sin compromiso · 30 min", "Respuesta en 24 h", "Tratamiento confidencial"],
    visual: {
      panelLabel: "Labs24k · Panel IA",
      chatMessage: "He detectado 3 automatizaciones con ROI estimado de 4x en tu operación.",
      metrics: [
        { label: "Cumplimiento AI Act", value: "92%" },
        { label: "Automatización de procesos", value: "78%" },
        { label: "Adopción del equipo", value: "85%" },
      ],
      caption1: "Cumplimiento AI Act integrado",
      caption2: "+200 directivos ya formados",
    },
    stats: [
      { number: "+200", label: "Formación", desc: "directivos formados · NPS 4,8 / 5" },
      { number: "−65%", label: "Industria", desc: "tiempo en propuestas comerciales" },
      { number: "+22%", label: "Retail", desc: "conversión en producto recomendado" },
    ],
    scroll: "Scroll",
  },
  logosStrip: {
    ariaLabel: "Sectores en los que trabajamos",
    label: "Sectores en los que ya hemos trabajado",
    items: ["Educación", "Industria", "Retail", "Servicios Profesionales", "Deporte", "Tecnología"],
  },
  book: {
    badge: "Libro gratuito · Edición Viva",
    coverTitlePre: "EL MÉTODO",
    coverTitleHighlight: "IA",
    coverEdition: "Edición Viva",
    coverSubtitle: "Cómo crear y escalar empresas con inteligencia artificial",
    coverAuthor: "Equipo Labs24k",
    heading: "El Método IA: el sistema para que la IA dé resultados",
    bodyPre: "El 95% de los pilotos de IA no generan retorno. ",
    bodyStrong: "El Método IA",
    bodyPost:
      " es el libro, open source y vivo, que lleva la inteligencia artificial del piloto al P&L. Pensado para quien decide. Gratis.",
    checklist: [
      "14 capítulos con marcos de decisión para dirección y comité",
      "Respaldado por la evidencia de Deloitte, PwC, McKinsey y MIT",
      "Edición Viva: open source y actualizado con el Consejo Editorial",
    ],
    ctaPrimary: "Descargar el libro gratis",
    ctaSecondary: "Ver qué incluye",
  },
  services: {
    label: "Servicios",
    heading: "¿En qué momento estás? Te llevamos al siguiente.",
    subtext:
      "Ocho servicios organizados por madurez de IA en tu empresa. Desde el primer diagnóstico hasta el departamento de IA externalizado.",
    moments: [
      { title: "Arrancas o exploras", desc: "Empiezas con IA o has hecho pilotos sin resultado claro." },
      { title: "Implementas o despliegas", desc: "Ya sabes qué quieres hacer y necesitas ejecutarlo." },
      { title: "Escalas u operas", desc: "Tienes IA en producción y necesitas estructura." },
    ],
    momentoLabel: "Momento",
    complianceBox: {
      tag: "Reglamento UE 2024/1689 · en vigor",
      eyebrow: "Cumplimiento · AI Act & RGPD",
      title: "Diagnóstico de Cumplimiento en IA",
      desc: "Clasificamos tus sistemas de IA, identificamos las obligaciones que te corresponden y te entregamos un memorándum de cumplimiento accionable.",
      note: "Memorándum de cumplimiento en 2 semanas",
      cta: "Evaluar mi exposición →",
    },
    footer: {
      text: "¿No te identificas con ninguno de los tres momentos?",
      text2: "Cuéntanos tu situación en una llamada de 30 minutos y te orientamos sin coste.",
      cta: "Hablar con nosotros →",
    },
  },
  clients: {
    label: "Casos de éxito",
    heading: "Casos reales. Resultados concretos.",
    subtext: "Proyectos que han pasado de la idea a la producción, con métricas que el cliente comparte sin vergüenza.",
    cards: [
      {
        logo: "Cliente 01",
        title: "Formación ejecutiva",
        sector: "Educación",
        metric: "+200 directivos formados. NPS 4,8 sobre 5.",
        desc: "Diseñamos e impartimos el programa de IA para directivos de su área de executive education, con casos de uso reales aplicados a la toma de decisiones empresarial.",
        tag: "Formación a Medida",
      },
      {
        logo: "Cliente 02",
        title: "Fabricante industrial",
        sector: "Industria",
        metric: "−65% tiempo en generación de propuestas comerciales.",
        desc: "Automatizamos la generación de propuestas técnicas a partir de los requerimientos del cliente, liberando al equipo técnico para trabajo de mayor valor.",
        tag: "Chatbots Inteligentes",
      },
      {
        logo: "Cliente 03",
        title: "Marca de retail",
        sector: "Retail & E-commerce",
        metric: "+22% conversión en producto recomendado.",
        desc: "Implementamos un asistente conversacional con recomendador de productos integrado en su tienda online y WhatsApp Business, reduciendo un 40% las consultas manuales.",
        tag: "Chatbots Inteligentes",
      },
      {
        logo: "Cliente 04",
        title: "Firma de servicios",
        sector: "Servicios Profesionales",
        metric: "85% de adopción de herramientas de IA en 60 días.",
        desc: "Programa de formación en 3 niveles para 80 personas con seguimiento personalizado durante 6 semanas.",
        tag: "Formación a Medida",
      },
      {
        logo: "Cliente 05",
        title: "Marca deportiva",
        sector: "Industria Deportiva",
        metric: "+45% leads cualificados. −3h/semana en tareas manuales.",
        desc: "Chatbot de cualificación automática de proyectos integrado en su web corporativa, con conexión directa al CRM.",
        tag: "Chatbots Inteligentes",
      },
      {
        logo: "Cliente 06",
        title: "Empresa tecnológica",
        sector: "Tecnología",
        metric: "3 líneas de automatización identificadas. ROI estimado 4x.",
        desc: "Consultoría estratégica Fase 0 para identificar y priorizar los casos de uso de IA con mayor potencial.",
        tag: "Consultoría en IA",
      },
    ],
  },
  whyus: {
    label: "Por qué nosotros",
    headingPre: "Por qué ",
    headingHighlight: "Labs24k",
    subtext: "Muchas empresas hablan de IA. Pocas tienen la capacidad técnica y el enfoque de negocio para ejecutar.",
    cards: [
      {
        number: "01",
        title: "Estrategia y ejecución",
        desc: "No nos quedamos en la recomendación: podemos formar, implementar, acompañar y escalar. Un solo interlocutor, de principio a fin.",
      },
      {
        number: "02",
        title: "Enfoque empresarial",
        desc: "Priorizamos impacto, adopción y retorno. No tecnología por tecnología. Empezamos siempre por el problema real.",
      },
      {
        number: "03",
        title: "Capacidad real, no humo",
        desc: "Desde consultoría hasta automatización, asistentes con IA, analítica o soluciones a medida. Tenemos el equipo técnico para ejecutar lo que proponemos.",
      },
      {
        number: "04",
        title: "Flexibilidad de partner",
        desc: "Podemos actuar de forma puntual o como equipo externo continuo. Nos adaptamos a lo que necesitas en cada fase.",
      },
      {
        number: "05",
        title: "Velocidad con criterio",
        desc: "Buscamos el menor camino entre el problema real y una solución que genere valor. Resultados visibles en semanas, no en meses.",
      },
    ],
  },
  founder: {
    imgAlt: "Equipo directivo de Labs24k",
    captionRole: "Equipo fundador",
    captionName: "Labs24k",
    label: "Liderado por",
    heading: "Detrás de cada proyecto, un equipo que firma con su nombre",
    subtext:
      "Trabajar con Labs24k no es contratar una marca. Es contar con un equipo dirigido por personas concretas que responden, ejecutan y firman con su nombre.",
    bio: "Lideramos la estrategia, las relaciones con clientes y la ejecución de proyectos, con foco en innovación, crecimiento y tecnología aplicada a resultados de negocio reales.",
    checklist: [
      "Equipo especializado en IA aplicada a empresa",
      "Proyectos multisectoriales de innovación y tecnología",
      "Acompañamiento de principio a fin, sin intermediarios",
    ],
    linkedin: "Ver perfil en LinkedIn →",
  },
  methodology: {
    label: "Metodología",
    heading: "Cuatro fases. Un entregable por fase. Cero proyectos que mueren en un cajón.",
    subtext: "Cada fase tiene un entregable concreto y un criterio de avance claro. Sin improvisación, sin proyectos que nunca terminan.",
    activitiesLabel: "Actividades clave",
    deliverableLabel: "Entregable",
    phases: [
      {
        tag: "Fase 01",
        title: "Diagnóstico",
        desc: "Analizamos tus procesos, datos y contexto actual para identificar dónde la IA puede generar impacto real, no teórico.",
        activities: ["Auditoría de procesos y datos", "Entrevistas con stakeholders clave", "Mapa de oportunidades priorizadas"],
        deliverable: "Informe de madurez IA + hoja de ruta",
      },
      {
        tag: "Fase 02",
        title: "Priorización estratégica",
        desc: "Seleccionamos los casos de uso con mayor retorno, menor riesgo y más alineación con tus objetivos.",
        activities: ["Evaluación de viabilidad técnica", "Estimación de retorno por caso", "Selección con dirección"],
        deliverable: "Plan priorizado con KPIs y timeline",
      },
      {
        tag: "Fase 03",
        title: "Implementación",
        desc: "Ejecutamos: formación de equipos, despliegue de chatbots, automatizaciones o desarrollos a medida. Con entregables y plazos definidos.",
        activities: ["Desarrollo y despliegue técnico", "Formación del equipo cliente", "Integración con sistemas internos"],
        deliverable: "Solución en producción + equipo capacitado",
      },
      {
        tag: "Fase 04",
        title: "Escala y evolución",
        desc: "Medimos resultados, iteramos y ampliamos lo que funciona. El objetivo es construir una capacidad que crece con tu empresa.",
        activities: ["Métricas de impacto en tiempo real", "Iteración sobre lo que funciona", "Extensión a nuevos procesos"],
        deliverable: "Dashboard de resultados + mejora continua",
      },
    ],
    footerText: "Comenzamos siempre con una llamada gratuita para entender tu situación antes de proponer cualquier servicio.",
    footerCta: "Hablar con un experto",
  },
  sectors: {
    label: "Sectores",
    heading: "Cada sector tiene sus retos. Sabemos cuáles resuelve la IA y cuáles no.",
    subtext: "Conocemos los problemas reales de estos sectores y las soluciones que generan impacto.",
    cards: [
      {
        title: "Retail y E-commerce",
        desc: "Asistentes de venta, recomendadores de producto y automatización de atención al cliente para vender más con menos esfuerzo manual.",
        link: "Ver soluciones para retail y e-commerce",
      },
      {
        title: "Industria y Manufactura",
        desc: "Automatización de propuestas técnicas, optimización de procesos productivos y analítica para tomar decisiones con datos reales.",
        link: "Ver soluciones para industria y manufactura",
      },
      {
        title: "Educación y Formación",
        desc: "Programas de IA adaptados por nivel y rol para que los equipos adopten herramientas de IA desde el primer día, no como teoría.",
        link: "Ver soluciones para educación y formación",
      },
      {
        title: "Logística y Distribución",
        desc: "Eliminación de reporting manual, dashboards en tiempo real e integración de sistemas para operaciones más rápidas y fiables.",
        link: "Ver soluciones para logística y distribución",
      },
      {
        title: "Servicios Profesionales",
        desc: "Automatización de tareas administrativas, generación de documentos y adopción de IA para hacer más con el mismo equipo.",
        link: "Ver soluciones para servicios profesionales",
      },
      {
        title: "Sector Financiero",
        desc: "Automatización documental con trazabilidad, cumplimiento regulatorio (AI Act, DORA) y formación especializada para banca, seguros y fintech.",
        link: "Ver soluciones para sector financiero",
      },
    ],
  },
  faq: {
    label: "Preguntas frecuentes",
    title: "Lo que suelen preguntarnos",
    categories: { general: "General", proceso: "Proceso y garantías" },
    general: [
      {
        question: "¿Qué es Labs24k?",
        answer:
          "Somos una firma de consultoría especializada en inteligencia artificial para empresas: implementación técnica de IA y asesoramiento legal AI Act + GDPR integrados bajo un mismo contrato.",
      },
      {
        question: "¿Necesito conocimientos técnicos para contratar vuestros servicios?",
        answer: "No. Traducimos la tecnología a decisiones de negocio y nos encargamos de la ejecución técnica de principio a fin.",
      },
      {
        question: "¿Con qué herramientas de IA trabajáis?",
        answer:
          "Somos agnósticos de proveedor: elegimos el modelo y la infraestructura (OpenAI, Anthropic, Google, open source) según el caso de uso, coste y requisitos de cumplimiento.",
      },
      {
        question: "¿Trabajáis con empresas fuera de España?",
        answer: "Sí, tenemos proyectos activos en España, Andorra, Europa y Latinoamérica, en remoto y presencial.",
      },
    ],
    proceso: [
      {
        question: "¿Cuánto tiempo tarda en verse el retorno?",
        answer: "La mayoría de nuestros proyectos muestran resultados medibles en semanas, gracias a un alcance acotado y entregables por fase.",
      },
      {
        question: "¿Qué garantías ofrecéis?",
        answer: "Cada fase tiene un entregable y un criterio de avance claro definido antes de empezar, para que sepas exactamente qué recibes y cuándo.",
      },
      {
        question: "¿Cómo doy el primer paso?",
        answer: "Agenda una llamada gratuita de 30 minutos. Te diremos con honestidad si podemos ayudarte y por dónde empezar.",
      },
    ],
    footerText: "¿Tienes más preguntas? Habla con nosotros directamente.",
  },
  contact: {
    label: "Contacto",
    heading: "Una llamada de 30 minutos puede darte más claridad que meses de pruebas sin rumbo",
    subtext:
      "Cuéntanos tu situación y te diremos con honestidad si podemos ayudarte, por dónde tendría sentido empezar y qué tipo de proyecto encaja mejor contigo.",
    meta: ["Gratuita · Sin compromiso", "Respuesta en 24 h", "100% confidencial"],
    bookingTitle: "Agenda tu llamada gratuita",
    dividerText: "¿Prefieres escribirnos primero?",
    form: {
      name: "Nombre",
      company: "Empresa",
      email: "Email",
      phone: "Teléfono",
      message: "¿Cuál es tu situación?",
      submit: "Enviar mensaje",
      success: "¡Gracias! Hemos recibido tu solicitud, te contactaremos en menos de 24h.",
      emailSubjectPrefix: "Nuevo contacto desde la web -",
      emailNoName: "Sin nombre",
      emailFields: { name: "Nombre", company: "Empresa", email: "Email", phone: "Teléfono", situation: "Situación:" },
    },
  },
  footer: {
    tagline: "Innovación, crecimiento y tecnología: resultados, no presentaciones.",
    servicesHeading: "Servicios",
    companyHeading: "Empresa",
    companyLinks: [
      { label: "Servicios", href: "/#servicios" },
      { label: "Metodología", href: "/#metodologia" },
      { label: "Clientes", href: "/#clientes" },
      { label: "Nosotros", href: "/#nosotros" },
      { label: "El libro", href: "/#libro" },
      { label: "AI Act", href: "/#legal" },
      { label: "Llamada gratuita", href: "/#contacto" },
      { label: "Contacto", href: "/#contacto" },
    ],
    contactHeading: "Contacto",
    note: "Innovación, crecimiento y tecnología",
    rights: "Todos los derechos reservados.",
    legalLinks: [
      { label: "Aviso legal", href: "/aviso-legal" },
      { label: "Política de privacidad", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
    scrollTop: "Volver arriba",
    language: "Idioma",
  },
  serviceContent: [
    {
      category: "Estrategia",
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
        { quote: "Por fin alguien nos dijo con números dónde merecía la pena invertir y dónde no. Nos ahorramos dos proyectos que no iban a funcionar.", role: "Directora de Operaciones, industria y manufactura" },
        { quote: "Esperaba un informe más de consultora tradicional. Nos dieron un plan que pudimos empezar a ejecutar la semana siguiente.", role: "CEO, firma de servicios profesionales" },
        { quote: "El diagnóstico de riesgos AI Act nos ahorró tener que contratar a otra asesoría aparte.", role: "Responsable de Compliance, servicios financieros" },
      ],
    },
    {
      category: "Estrategia",
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
        { quote: "Nos ayudaron a decir que no a dos proyectos que sonaban bien pero no tenían sentido para nosotros. Eso vale más que cualquier informe.", role: "Director General, logística" },
        { quote: "La primera consultora que no intentó vendernos su propia herramienta.", role: "Directora de Innovación, educación" },
      ],
    },
    {
      category: "Capacitación",
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
        { quote: "Formación de verdad, no una charla motivacional sobre IA. Salimos con cosas concretas que aplicar al día siguiente.", role: "Responsable de Formación, retail" },
        { quote: "Adaptaron los ejemplos a nuestro sector, no era la típica formación enlatada.", role: "Socio Director, servicios profesionales" },
      ],
    },
    {
      category: "Implementación",
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
        { quote: "No es un chatbot de manual, responde con datos reales de nuestro catálogo. Los clientes ni notan que hablan con un asistente.", role: "Directora de Marca, retail y e-commerce" },
        { quote: "Se integró con nuestro CRM sin dramas y en menos tiempo del que esperábamos.", role: "Responsable de Atención al Cliente, logística" },
      ],
    },
    {
      category: "Implementación",
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
        { quote: "Nos entregaron algo que nuestro propio equipo técnico pudo entender y mantener, no una caja negra.", role: "CTO, industria y manufactura" },
        { quote: "El único proveedor que nos avisó de que una parte del proyecto no tenía sentido, en vez de facturarla igualmente.", role: "Director de Tecnología, servicios financieros" },
      ],
    },
    {
      category: "Asesoramiento",
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
        { quote: "Nos evitaron contratar a un candidato que en la entrevista sonaba perfecto pero no aguantó la prueba técnica.", role: "Directora de RRHH, industria" },
        { quote: "Por fin alguien que sabe qué preguntar en una entrevista técnica de IA de verdad.", role: "Responsable de Talento, servicios financieros" },
      ],
    },
    {
      category: "Estrategia",
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
        { quote: "Es como tener un departamento de IA propio, pero sin la incertidumbre de contratar antes de tiempo.", role: "Directora General, retail" },
        { quote: "Conocen nuestro negocio mejor que muchos empleados internos a estas alturas.", role: "Socio, servicios profesionales" },
      ],
    },
    {
      category: "Asesoramiento",
      badge: "Único en España",
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
        { quote: "Teníamos dos asesorías distintas para lo técnico y lo legal que ni se hablaban entre ellas. Aquí es un único equipo.", role: "Directora Legal, servicios financieros" },
        { quote: "Nos explicaron el AI Act en términos que entendía el comité, no en jerga jurídica.", role: "Directora de RRHH, recursos humanos" },
        { quote: "El único proveedor que nos hizo replantear un contrato con un tercero para protegernos legalmente.", role: "Director de Compras, industria" },
      ],
    },
  ] as ServiceContent[],
  serviceHub: {
    backLink: "Todos los servicios",
    ctaPrimary: "Agendar llamada gratuita",
    ctaSecondary: "Ver los 8 servicios",
    whatWeSolve: "Qué resolvemos",
    whatIncludes: "Qué incluye",
    useCasesLabel: "Casos de uso",
    useCasesHeading: "Ejemplos reales de aplicación",
    useCasesSubtext: "Situaciones representativas de empresas con las que hemos trabajado este servicio. Los nombres se mantienen anónimos por confidencialidad.",
    situationLabel: "Situación",
    resultLabel: "Resultado",
    reviewsLabel: "Opiniones",
    reviewsHeading: "Lo que dicen quienes ya han trabajado así",
    ctaHeading: "¿Hablamos de tu caso concreto?",
    ctaText: "Una llamada de 30 minutos, sin compromiso, para ver si {service} encaja con lo que necesitas ahora mismo.",
  },
};

export default es;
export type Dictionary = typeof es;
