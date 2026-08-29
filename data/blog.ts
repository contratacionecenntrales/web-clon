export interface BlogPost {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readTime: string;
  author: string;
  content: { heading?: string; paragraphs: string[]; list?: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-act-que-hacer-antes-de-agosto-2026",
    category: "Regulación",
    categoryColor: "#7c5cea",
    title: "AI Act: qué debe hacer tu empresa antes de agosto de 2026",
    excerpt:
      "El Reglamento europeo de IA ya está en vigor y algunas de sus obligaciones se activan por fases. Esto es lo que de verdad tienes que revisar, en qué orden y qué pasa si no lo haces.",
    date: "2026-06-15",
    dateLabel: "15 de junio de 2026",
    readTime: "7 min",
    author: "Equipo Labs24k",
    content: [
      {
        paragraphs: [
          "La mayoría de empresas con las que hablamos tiene la misma pregunta: “¿esto nos afecta a nosotros?”. La respuesta casi siempre es sí, aunque no vendas ni desarrolles software de IA. El AI Act no solo regula a quien construye sistemas de inteligencia artificial, también a quien los usa (lo que la norma llama “responsable del despliegue”).",
          "Esto es lo que hemos visto que de verdad importa cuando ayudamos a una empresa a prepararse, sin el ruido de los titulares.",
        ],
      },
      {
        heading: "1. Clasifica tus sistemas de IA por nivel de riesgo",
        paragraphs: [
          "El AI Act divide los sistemas de IA en cuatro niveles: riesgo inaceptable (prohibidos), alto riesgo, riesgo limitado y riesgo mínimo. La mayoría de herramientas que usan las empresas —chatbots de atención al cliente, generadores de texto, asistentes internos— caen en riesgo limitado o mínimo. Pero hay excepciones importantes: sistemas usados en selección de personal, evaluación crediticia, o ciertos usos en sanidad o educación, que se consideran de alto riesgo casi siempre.",
          "Este primer paso —clasificar, no adivinar— es el que más empresas se saltan, y es exactamente donde empieza nuestro Diagnóstico de Cumplimiento en IA.",
        ],
      },
      {
        heading: "2. Revisa las obligaciones de transparencia",
        paragraphs: [
          "Si tu empresa usa un chatbot, un asistente de voz o cualquier sistema que interactúe con personas, existe una obligación de transparencia: la persona debe poder saber que está hablando con una IA, salvo que sea evidente por el contexto. Es una obligación sencilla de cumplir, pero fácil de olvidar cuando el chatbot se lanzó hace tiempo y nadie ha vuelto a revisarlo.",
        ],
      },
      {
        heading: "3. No dejes la formación para el final",
        paragraphs: [
          "El AI Act exige que las personas que usan sistemas de IA en tu empresa tengan un nivel adecuado de “alfabetización en IA” — entender qué hace la herramienta, sus límites y los riesgos de un uso incorrecto. No es un requisito burocrático: es, en la práctica, la mejor defensa frente a errores costosos.",
        ],
      },
      {
        heading: "4. Revisa los contratos con tus proveedores de IA",
        paragraphs: [
          "Si compras o contratas una herramienta de IA a un tercero, el contrato debería dejar claro quién asume qué responsabilidad si el sistema falla o incumple la norma. Muchos contratos estándar de proveedores de IA no cubren esto de forma clara — y no descubrirlo a tiempo puede salir caro.",
        ],
      },
      {
        heading: "¿Por dónde empezar?",
        paragraphs: [
          "No hace falta resolverlo todo a la vez. El orden que recomendamos es: primero clasificar tus sistemas, después revisar transparencia y contratos, y por último planificar la formación. Si quieres saber exactamente dónde está tu empresa en este momento, nuestro Diagnóstico de Cumplimiento en IA te da una clasificación completa y un plan de acción en dos semanas.",
        ],
      },
    ],
  },
  {
    slug: "por-que-95-por-ciento-pilotos-ia-no-generan-retorno",
    category: "Estrategia",
    categoryColor: "#3b6dff",
    title: "Por qué el 95% de los pilotos de IA no generan retorno (y cómo evitarlo)",
    excerpt:
      "No es un problema de tecnología. Es un problema de cómo se eligen los proyectos. Estas son las tres causas que vemos una y otra vez, y qué hacer en su lugar.",
    date: "2026-05-20",
    dateLabel: "20 de mayo de 2026",
    readTime: "6 min",
    author: "Equipo Labs24k",
    content: [
      {
        paragraphs: [
          "Es la estadística que más citamos, y con razón: según distintos estudios de consultoras como McKinsey y BCG, la inmensa mayoría de los pilotos de inteligencia artificial en empresas nunca llegan a producción, o si lo hacen, no generan un retorno medible. No es un problema de la tecnología — los modelos de hoy son más que capaces. Es un problema de cómo se eligen y se ejecutan los proyectos.",
        ],
      },
      {
        heading: "Causa 1: se empieza por la tecnología, no por el problema",
        paragraphs: [
          "El patrón más habitual: alguien en el comité de dirección lee sobre una tecnología nueva y pregunta “¿cómo la usamos nosotros?”. Es la pregunta al revés. La pregunta correcta es “¿cuál es el problema que más nos cuesta resolver, y puede ayudar la IA con esto?”. Cuando el punto de partida es la tecnología, el resultado casi siempre es una solución elegante buscando un problema.",
        ],
      },
      {
        heading: "Causa 2: nadie define qué significa “funcionar”",
        paragraphs: [
          "Muchos pilotos arrancan sin una métrica de éxito clara. Sin ese criterio, es imposible saber si el piloto salió bien o mal, y el proyecto simplemente se diluye. Antes de empezar cualquier iniciativa de IA, deberías poder responder: “si esto funciona, ¿qué número concreto habrá cambiado, y cuánto?”.",
        ],
      },
      {
        heading: "Causa 3: el piloto nunca tuvo un plan para llegar a producción",
        paragraphs: [
          "Un piloto que “funciona” en una demo con datos limpios y cinco usuarios internos es un experimento, no un producto. El salto a producción — integración con sistemas reales, gestión de casos límite, adopción del equipo — es donde la mayoría de proyectos mueren, precisamente porque nadie lo planificó desde el principio.",
        ],
      },
      {
        heading: "Qué hacemos diferente",
        paragraphs: [
          "En Labs24k empezamos casi todos los proyectos con un AI Audit: dos semanas para identificar qué procesos son candidatos reales, con qué impacto y esfuerzo, antes de construir nada. Es la diferencia entre apostar y decidir con datos. Y es exactamente el sistema que documentamos en El Método IA, nuestro libro gratuito y de código abierto.",
        ],
      },
    ],
  },
  {
    slug: "5-errores-que-hacen-fracasar-chatbots",
    category: "Implementación",
    categoryColor: "#0d9488",
    title: "5 errores que hacen fracasar los proyectos de chatbots (y cómo evitarlos)",
    excerpt:
      "Un chatbot mal planteado genera más frustración que ahorro. Estos son los errores más comunes que vemos al auditar implementaciones que no funcionaron.",
    date: "2026-04-10",
    dateLabel: "10 de abril de 2026",
    readTime: "6 min",
    author: "Equipo Labs24k",
    content: [
      {
        paragraphs: [
          "Cuando una empresa nos llama para “arreglar” un chatbot que no funciona, casi siempre encontramos la misma combinación de errores. Ninguno tiene que ver con que la IA “no sea lo bastante buena” — tiene que ver con cómo se diseñó el proyecto.",
        ],
      },
      {
        heading: "1. Conectarlo a un PDF de preguntas frecuentes, no a los datos reales",
        paragraphs: [
          "Un chatbot que solo conoce lo que hay en un documento estático no puede responder sobre stock actual, el estado de un pedido o el precio real de un producto. Si no está conectado a tu catálogo, tu CRM o tu sistema de tracking, estás construyendo un buscador de preguntas frecuentes con pasos extra, no un asistente útil.",
        ],
      },
      {
        heading: "2. No definir cuándo debe escalar a una persona",
        paragraphs: [
          "Un chatbot que intenta responder a todo, incluso cuando no tiene la respuesta correcta, daña más la confianza del cliente que no tener chatbot. Definir con claridad en qué casos debe pasar la conversación a una persona es tan importante como diseñar lo que sí puede resolver por sí solo.",
        ],
      },
      {
        heading: "3. Medir “conversaciones” en lugar de resultados",
        paragraphs: [
          "El número de conversaciones gestionadas no dice nada sobre si el chatbot está funcionando. La métrica que importa es de negocio: tiempo de respuesta, tasa de resolución sin intervención humana, o consultas comerciales cualificadas. Sin esa medición, es imposible saber si el proyecto merece la pena.",
        ],
      },
      {
        heading: "4. Lanzarlo sin ajustar el tono a la marca",
        paragraphs: [
          "Un asistente demasiado robótico o, al contrario, demasiado informal para el sector, genera desconfianza. El diseño de la conversación —no solo la tecnología detrás— es una parte del trabajo que muchas implementaciones se saltan.",
        ],
      },
      {
        heading: "5. No revisarlo nunca más después del lanzamiento",
        paragraphs: [
          "Los productos, los precios y los procesos cambian. Un chatbot que no se revisa periódicamente empieza a dar información desactualizada sin que nadie se dé cuenta, hasta que un cliente se queja.",
        ],
      },
      {
        paragraphs: [
          "Si tienes un chatbot que no está dando los resultados esperados, antes de sustituirlo vale la pena diagnosticar cuál de estos cinco errores es el que está fallando. La mayoría de veces se puede arreglar sin volver a empezar de cero.",
        ],
      },
    ],
  },
  {
    slug: "esta-tu-empresa-lista-para-un-departamento-de-ia-externo",
    category: "Estrategia",
    categoryColor: "#3b6dff",
    title: "¿Está tu empresa lista para un departamento de IA externo?",
    excerpt:
      "No todas las empresas necesitan un equipo de IA interno de cinco personas. Estas son las señales de que un modelo externalizado encaja mejor con tu fase actual.",
    date: "2026-03-05",
    dateLabel: "5 de marzo de 2026",
    readTime: "5 min",
    author: "Equipo Labs24k",
    content: [
      {
        paragraphs: [
          "Una de las decisiones más caras que puede tomar una empresa es contratar un equipo de IA interno antes de tiempo. Los salarios de perfiles senior en IA son altos, la curva de aprendizaje es larga, y si el volumen de trabajo no lo justifica, ese equipo pasa más tiempo esperando el siguiente proyecto que ejecutando.",
        ],
      },
      {
        heading: "Señal 1: tienes proyectos de IA, pero no un flujo continuo",
        paragraphs: [
          "Si tu empresa necesita IA para 2-3 proyectos al año en lugar de un flujo constante de iniciativas, un equipo interno a tiempo completo estará infrautilizado la mayor parte del tiempo. Un modelo externo con dedicación flexible se ajusta mejor a ese ritmo real.",
        ],
      },
      {
        heading: "Señal 2: no tienes a nadie internamente que pueda evaluar candidatos técnicos",
        paragraphs: [
          "Contratar mal el primer perfil de IA es un error costoso y difícil de detectar a tiempo si nadie en la empresa puede evaluar técnicamente al candidato. Un equipo externo ya viene con ese criterio incorporado.",
        ],
      },
      {
        heading: "Señal 3: necesitas resultados en meses, no en el tiempo que tarda un proceso de selección",
        paragraphs: [
          "Contratar, incorporar y poner productivo a un equipo de IA interno lleva, en la práctica, entre 4 y 8 meses. Un departamento externo puede empezar a ejecutar en semanas.",
        ],
      },
      {
        heading: "¿Cuándo sí tiene sentido un equipo interno?",
        paragraphs: [
          "Cuando la IA se convierte en una parte central y permanente de tu producto o tu operación —no un proyecto puntual, sino la forma en que compite tu empresa— un equipo interno pasa a tener sentido. Muchas de las empresas con las que trabajamos empiezan con un departamento de IA externo y, cuando el volumen lo justifica, transicionan a un modelo mixto o completamente interno con nuestro acompañamiento.",
        ],
      },
    ],
  },
  {
    slug: "rgpd-e-ia-errores-legales-mas-comunes",
    category: "Regulación",
    categoryColor: "#7c5cea",
    title: "RGPD e IA: los errores legales más comunes al implementar IA en tu empresa",
    excerpt:
      "Cumplir el AI Act no basta si el sistema de IA también trata datos personales. Estos son los descuidos de RGPD que vemos con más frecuencia.",
    date: "2026-02-12",
    dateLabel: "12 de febrero de 2026",
    readTime: "6 min",
    author: "Equipo Labs24k",
    content: [
      {
        paragraphs: [
          "El AI Act y el RGPD se solapan en muchos proyectos de inteligencia artificial, y es habitual que las empresas se centren en uno y olviden el otro. Si tu sistema de IA trata datos personales —y la mayoría lo hace, aunque sea de forma indirecta— estos son los descuidos más frecuentes que encontramos.",
        ],
      },
      {
        heading: "Usar datos de clientes reales para “probar” una herramienta de IA",
        paragraphs: [
          "Es habitual querer probar un nuevo asistente de IA con datos reales de clientes “para ver cómo funciona”. Si esos datos personales se envían a un proveedor externo de IA sin una base legal ni un análisis previo, es un tratamiento de datos no autorizado, con independencia de que la intención fuera solo “probar”.",
        ],
      },
      {
        heading: "No hacer una evaluación de impacto (EIPD) cuando corresponde",
        paragraphs: [
          "Ciertos usos de IA que implican decisiones automatizadas o perfilado a gran escala requieren una Evaluación de Impacto relativa a la Protección de Datos antes de implementarse, no después. Saltarse este paso es uno de los riesgos legales más frecuentes que detectamos.",
        ],
      },
      {
        heading: "No revisar dónde procesa los datos el proveedor de IA",
        paragraphs: [
          "Muchas herramientas de IA populares procesan datos en servidores fuera de la Unión Europea. Sin las garantías adecuadas (cláusulas contractuales tipo, decisiones de adecuación), esa transferencia internacional de datos puede no ser conforme al RGPD, aunque la herramienta en sí sea perfectamente legal de usar.",
        ],
      },
      {
        heading: "Cómo lo abordamos",
        paragraphs: [
          "En Labs24k integramos la revisión legal en el mismo proceso que la implementación técnica, precisamente para detectar estos riesgos antes de que un sistema entre en producción, no después. Es la razón por la que nuestro servicio de Asesoramiento Legal y Regulatorio trabaja codo con codo con el equipo técnico desde el primer día del proyecto, no como una revisión final.",
        ],
      },
    ],
  },
  {
    slug: "formacion-ia-directivos-que-debe-incluir",
    category: "Capacitación",
    categoryColor: "#0d9488",
    title: "Formación en IA para directivos: qué debe incluir un buen programa",
    excerpt:
      "La mayoría de formaciones de IA para directivos son demasiado técnicas o demasiado superficiales. Esto es lo que de verdad necesita un comité de dirección.",
    date: "2026-01-22",
    dateLabel: "22 de enero de 2026",
    readTime: "5 min",
    author: "Equipo Labs24k",
    content: [
      {
        paragraphs: [
          "Hemos formado a cientos de directivos en IA, y hay un patrón claro en lo que no funciona: formaciones demasiado técnicas que pierden a la sala en la primera media hora, o formaciones tan superficiales que no cambian ninguna decisión real después. Un buen programa para dirección tiene que situarse justo en medio.",
        ],
      },
      {
        heading: "Debe enseñar a hacer las preguntas correctas, no a programar",
        paragraphs: [
          "Un directivo no necesita saber construir un modelo de IA. Necesita saber qué preguntar a un proveedor, cómo detectar cuándo una propuesta no tiene sentido, y qué riesgos vigilar antes de aprobar un proyecto. Ese es el criterio que de verdad cambia decisiones en un comité.",
        ],
      },
      {
        heading: "Debe usar ejemplos del propio sector, no genéricos",
        paragraphs: [
          "Una formación con ejemplos de otro sector se siente abstracta y no se traduce en decisiones. Cuando los casos prácticos son del mismo sector —o mejor, de la propia empresa—, la formación deja de ser teoría y empieza a ser una herramienta de trabajo.",
        ],
      },
      {
        heading: "Debe cubrir los riesgos, no solo las oportunidades",
        paragraphs: [
          "Muchas formaciones de IA son puro entusiasmo tecnológico. Un comité de dirección necesita entender también los riesgos legales (AI Act, RGPD), reputacionales y operativos, para poder tomar decisiones equilibradas, no solo entusiastas.",
        ],
      },
      {
        heading: "Debe terminar con algo accionable",
        paragraphs: [
          "Una buena formación termina con el comité identificando 2-3 focos concretos donde aplicar lo aprendido, no solo con una sensación general de “esto es interesante”. Es la diferencia entre inspiración y una hoja de ruta real.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
