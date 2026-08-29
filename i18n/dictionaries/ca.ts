import type { ServiceContent } from "../service-content";
import type { Dictionary } from "./es";

const ca: Dictionary = {
  meta: {
    title: "Labs24k | Intel·ligència Artificial i Automatització",
    description:
      "Implementació d'IA i assessorament legal AI Act + RGPD amb un sol soci. Prepara la teva empresa per al termini del AI Act d'agost del 2026. Trucada gratuïta de 30 minuts.",
  },
  nav: {
    skipLink: "Anar al contingut",
    servicios: "Serveis",
    sectores: "Sectors",
    metodologia: "Metodologia",
    clientes: "Clients",
    libro: "El llibre",
    libroGratis: "Gratis",
    aiAct: "AI Act",
    nosotros: "Nosaltres",
    contacto: "Contacte",
    llamadaGratuita: "Trucada gratuïta",
    abrirMenu: "Obrir menú",
    inicio: "Labs24k - Inici",
  },
  banner: {
    tag: "AI Act",
    textPre: "El AI Act ",
    textStrong: "ja està en vigor",
    textPost: ". La teva empresa hi compleix?",
    cta: "Calcular exposició",
    cerrar: "Tancar avís",
  },
  hero: {
    eyebrow: "Consultoria IA + Legal · AI Act 2024/1689",
    titleLine1: "Fem que la IA funcioni a la teva empresa.",
    titleLine2: "I que compleixi.",
    subtitle:
      "Estratègia, implementació tècnica i assessorament legal AI Act i RGPD integrats en un mateix contracte. Resultats mesurables en setmanes, no en anys.",
    ctaPrimary: "Reservar trucada gratuïta",
    ctaSecondary: "Veure els 8 serveis",
    meta: ["Sense compromís · 30 min", "Resposta en 24 h", "Tracte confidencial"],
    visual: {
      panelLabel: "Labs24k · Panell IA",
      chatMessage: "He detectat 3 automatitzacions amb ROI estimat de 4x en la teva operació.",
      metrics: [
        { label: "Compliment AI Act", value: "92%" },
        { label: "Automatització de processos", value: "78%" },
        { label: "Adopció de l'equip", value: "85%" },
      ],
      caption1: "Compliment AI Act integrat",
      caption2: "+200 directius ja formats",
    },
    stats: [
      { number: "+200", label: "Formació", desc: "directius formats · NPS 4,8 / 5" },
      { number: "−65%", label: "Indústria", desc: "temps en propostes comercials" },
      { number: "+22%", label: "Retail", desc: "conversió en producte recomanat" },
    ],
    scroll: "Desplaça't",
  },
  logosStrip: {
    ariaLabel: "Sectors en què treballem",
    label: "Sectors amb els quals ja hem treballat",
    items: ["Educació", "Indústria", "Retail", "Serveis Professionals", "Esport", "Tecnologia"],
  },
  book: {
    badge: "Llibre gratuït · Edició Viva",
    coverTitlePre: "EL MÈTODE",
    coverTitleHighlight: "IA",
    coverEdition: "Edició Viva",
    coverSubtitle: "Com crear i escalar empreses amb intel·ligència artificial",
    coverAuthor: "Equip Labs24k",
    heading: "El Mètode IA: el sistema perquè la IA doni resultats",
    bodyPre: "El 95% dels pilots d'IA no generen retorn. ",
    bodyStrong: "El Mètode IA",
    bodyPost:
      " és el llibre, open source i viu, que porta la intel·ligència artificial del pilot al P&L. Pensat per a qui decideix. Gratis.",
    checklist: [
      "14 capítols amb marcs de decisió per a direcció i comitè",
      "Recolzat per l'evidència de Deloitte, PwC, McKinsey i el MIT",
      "Edició Viva: open source i actualitzat amb el Consell Editorial",
    ],
    ctaPrimary: "Descarregar el llibre gratis",
    ctaSecondary: "Veure què inclou",
  },
  services: {
    label: "Serveis",
    heading: "En quin moment estàs? Et portem al següent.",
    subtext:
      "Vuit serveis organitzats segons la maduresa d'IA de la teva empresa. Des del primer diagnòstic fins al departament d'IA externalitzat.",
    moments: [
      { title: "Comences o explores", desc: "Comences amb la IA o has fet pilots sense resultat clar." },
      { title: "Implementes o despleguis", desc: "Ja saps què vols fer i necessites executar-ho." },
      { title: "Escales o operes", desc: "Tens IA en producció i necessites estructura." },
    ],
    momentoLabel: "Moment",
    complianceBox: {
      tag: "Reglament UE 2024/1689 · en vigor",
      eyebrow: "Compliment · AI Act & RGPD",
      title: "Diagnòstic de Compliment en IA",
      desc: "Classifiquem els teus sistemes d'IA, identifiquem les obligacions que et corresponen i et lliurem un memoràndum de compliment accionable.",
      note: "Memoràndum de compliment en 2 setmanes",
      cta: "Avaluar la meva exposició →",
    },
    footer: {
      text: "No t'identifiques amb cap dels tres moments?",
      text2: "Explica'ns la teva situació en una trucada gratuïta de 30 minuts i t'orientem sense cost.",
      cta: "Parlar amb nosaltres →",
    },
  },
  clients: {
    label: "Casos d'èxit",
    heading: "Casos reals. Resultats concrets.",
    subtext: "Projectes que han passat de la idea a la producció, amb mètriques que el client comparteix sense vergonya.",
    cards: [
      {
        logo: "Client 01",
        title: "Formació executiva",
        sector: "Educació",
        metric: "+200 directius formats. NPS 4,8 sobre 5.",
        desc: "Vam dissenyar i impartir el programa d'IA per a directius de la seva àrea d'executive education, amb casos d'ús reals aplicats a la presa de decisions empresarial.",
        tag: "Formació a Mida",
      },
      {
        logo: "Client 02",
        title: "Fabricant industrial",
        sector: "Indústria",
        metric: "−65% de temps en la generació de propostes comercials.",
        desc: "Vam automatitzar la generació de propostes tècniques a partir dels requeriments del client, alliberant l'equip tècnic per a treball de més valor.",
        tag: "Chatbots Intel·ligents",
      },
      {
        logo: "Client 03",
        title: "Marca de retail",
        sector: "Retail i E-commerce",
        metric: "+22% de conversió en producte recomanat.",
        desc: "Vam implementar un assistent conversacional amb recomanador de productes integrat a la seva botiga en línia i WhatsApp Business, reduint un 40% les consultes manuals.",
        tag: "Chatbots Intel·ligents",
      },
      {
        logo: "Client 04",
        title: "Firma de serveis",
        sector: "Serveis Professionals",
        metric: "85% d'adopció d'eines d'IA en 60 dies.",
        desc: "Programa de formació en 3 nivells per a 80 persones amb seguiment personalitzat durant 6 setmanes.",
        tag: "Formació a Mida",
      },
      {
        logo: "Client 05",
        title: "Marca esportiva",
        sector: "Indústria Esportiva",
        metric: "+45% leads qualificats. −3h/setmana en tasques manuals.",
        desc: "Chatbot de qualificació automàtica de projectes integrat al seu web corporatiu, amb connexió directa al CRM.",
        tag: "Chatbots Intel·ligents",
      },
      {
        logo: "Client 06",
        title: "Empresa tecnològica",
        sector: "Tecnologia",
        metric: "3 línies d'automatització identificades. ROI estimat 4x.",
        desc: "Consultoria estratègica Fase 0 per identificar i prioritzar els casos d'ús d'IA amb més potencial.",
        tag: "Consultoria en IA",
      },
    ],
  },
  whyus: {
    label: "Per què nosaltres",
    headingPre: "Per què ",
    headingHighlight: "Labs24k",
    subtext: "Moltes empreses parlen d'IA. Poques tenen la capacitat tècnica i l'enfocament de negoci per executar-la.",
    cards: [
      {
        number: "01",
        title: "Estratègia i execució",
        desc: "No ens quedem en la recomanació: podem formar, implementar, acompanyar i escalar. Un sol interlocutor, de principi a fi.",
      },
      {
        number: "02",
        title: "Enfocament empresarial",
        desc: "Prioritzem impacte, adopció i retorn. No tecnologia per tecnologia. Comencem sempre pel problema real.",
      },
      {
        number: "03",
        title: "Capacitat real, no fum",
        desc: "Des de consultoria fins a automatització, assistents amb IA, analítica o solucions a mida. Tenim l'equip tècnic per executar el que proposem.",
      },
      {
        number: "04",
        title: "Flexibilitat de soci",
        desc: "Podem actuar de forma puntual o com a equip extern continu. Ens adaptem al que necessites en cada fase.",
      },
      {
        number: "05",
        title: "Velocitat amb criteri",
        desc: "Busquem el camí més curt entre el problema real i una solució que generi valor. Resultats visibles en setmanes, no en mesos.",
      },
    ],
  },
  founder: {
    imgAlt: "Equip directiu de Labs24k",
    captionRole: "Equip fundador",
    captionName: "Labs24k",
    label: "Liderat per",
    heading: "Darrere de cada projecte, un equip que hi posa el seu nom",
    subtext:
      "Treballar amb Labs24k no és contractar una marca. És comptar amb un equip dirigit per persones concretes que responen, executen i hi posen el seu nom.",
    bio: "Liderem l'estratègia, les relacions amb clients i l'execució de projectes, amb focus en innovació, creixement i tecnologia aplicada a resultats de negoci reals.",
    checklist: [
      "Equip especialitzat en IA aplicada a l'empresa",
      "Projectes multisectorials d'innovació i tecnologia",
      "Acompanyament de principi a fi, sense intermediaris",
    ],
    linkedin: "Veure perfil a LinkedIn →",
  },
  methodology: {
    label: "Metodologia",
    heading: "Quatre fases. Un lliurable per fase. Zero projectes que moren en un calaix.",
    subtext: "Cada fase té un lliurable concret i un criteri d'avanç clar. Sense improvisació, sense projectes que no acaben mai.",
    activitiesLabel: "Activitats clau",
    deliverableLabel: "Lliurable",
    phases: [
      {
        tag: "Fase 01",
        title: "Diagnòstic",
        desc: "Analitzem els teus processos, dades i context actual per identificar on la IA pot generar impacte real, no teòric.",
        activities: ["Auditoria de processos i dades", "Entrevistes amb stakeholders clau", "Mapa d'oportunitats prioritzades"],
        deliverable: "Informe de maduresa IA + full de ruta",
      },
      {
        tag: "Fase 02",
        title: "Priorització estratègica",
        desc: "Seleccionem els casos d'ús amb més retorn, menys risc i més alineació amb els teus objectius.",
        activities: ["Avaluació de viabilitat tècnica", "Estimació de retorn per cas", "Selecció amb direcció"],
        deliverable: "Pla prioritzat amb KPIs i calendari",
      },
      {
        tag: "Fase 03",
        title: "Implementació",
        desc: "Executem: formació d'equips, desplegament de chatbots, automatitzacions o desenvolupaments a mida. Amb lliurables i terminis definits.",
        activities: ["Desenvolupament i desplegament tècnic", "Formació de l'equip client", "Integració amb sistemes interns"],
        deliverable: "Solució en producció + equip capacitat",
      },
      {
        tag: "Fase 04",
        title: "Escala i evolució",
        desc: "Mesurem resultats, iterem i ampliem el que funciona. L'objectiu és construir una capacitat que creix amb la teva empresa.",
        activities: ["Mètriques d'impacte en temps real", "Iteració sobre el que funciona", "Extensió a nous processos"],
        deliverable: "Panell de resultats + millora contínua",
      },
    ],
    footerText: "Sempre comencem amb una trucada gratuïta per entendre la teva situació abans de proposar cap servei.",
    footerCta: "Parlar amb un expert",
  },
  sectors: {
    label: "Sectors",
    heading: "Cada sector té els seus reptes. Sabem quins resol la IA i quins no.",
    subtext: "Coneixem els problemes reals d'aquests sectors i les solucions que generen impacte.",
    cards: [
      {
        title: "Retail i E-commerce",
        desc: "Assistents de venda, recomanadors de producte i automatització de l'atenció al client per vendre més amb menys esforç manual.",
        link: "Veure solucions per a retail i e-commerce",
      },
      {
        title: "Indústria i Manufactura",
        desc: "Automatització de propostes tècniques, optimització de processos productius i analítica per prendre decisions amb dades reals.",
        link: "Veure solucions per a indústria i manufactura",
      },
      {
        title: "Educació i Formació",
        desc: "Programes d'IA adaptats per nivell i rol perquè els equips adoptin eines d'IA des del primer dia, no com a teoria.",
        link: "Veure solucions per a educació i formació",
      },
      {
        title: "Logística i Distribució",
        desc: "Eliminació de reporting manual, panells en temps real i integració de sistemes per a operacions més ràpides i fiables.",
        link: "Veure solucions per a logística i distribució",
      },
      {
        title: "Serveis Professionals",
        desc: "Automatització de tasques administratives, generació de documents i adopció d'IA per fer més amb el mateix equip.",
        link: "Veure solucions per a serveis professionals",
      },
      {
        title: "Sector Financer",
        desc: "Automatització documental amb traçabilitat, compliment regulatori (AI Act, DORA) i formació especialitzada per a banca, assegurances i fintech.",
        link: "Veure solucions per al sector financer",
      },
    ],
  },
  faq: {
    label: "Preguntes freqüents",
    title: "El que solen preguntar-nos",
    categories: { general: "General", proceso: "Procés i garanties" },
    general: [
      {
        question: "Què és Labs24k?",
        answer:
          "Som una firma de consultoria especialitzada en intel·ligència artificial per a empreses: implementació tècnica d'IA i assessorament legal AI Act + RGPD integrats en un mateix contracte.",
      },
      {
        question: "Necessito coneixements tècnics per contractar els vostres serveis?",
        answer: "No. Traduïm la tecnologia a decisions de negoci i ens encarreguem de l'execució tècnica de principi a fi.",
      },
      {
        question: "Amb quines eines d'IA treballeu?",
        answer:
          "Som agnòstics de proveïdor: triem el model i la infraestructura (OpenAI, Anthropic, Google, open source) segons el cas d'ús, el cost i els requisits de compliment.",
      },
      {
        question: "Treballeu amb empreses fora d'Espanya?",
        answer: "Sí, tenim projectes actius a Espanya, Andorra, Europa i Amèrica Llatina, en remot i presencial.",
      },
    ],
    proceso: [
      {
        question: "Quant triga a veure's el retorn?",
        answer: "La majoria dels nostres projectes mostren resultats mesurables en setmanes, gràcies a un abast acotat i lliurables per fase.",
      },
      {
        question: "Quines garanties oferiu?",
        answer: "Cada fase té un lliurable i un criteri d'avanç clar definit abans de començar, perquè sàpigues exactament què reps i quan.",
      },
      {
        question: "Com faig el primer pas?",
        answer: "Reserva una trucada gratuïta de 30 minuts. Et direm amb honestedat si et podem ajudar i per on començar.",
      },
    ],
    footerText: "Tens més preguntes? Parla amb nosaltres directament.",
  },
  contact: {
    label: "Contacte",
    heading: "Una trucada de 30 minuts et pot donar més claredat que mesos de proves sense rumb",
    subtext:
      "Explica'ns la teva situació i et direm amb honestedat si et podem ajudar, per on tindria sentit començar i quin tipus de projecte encaixa millor amb tu.",
    meta: ["Gratuïta · Sense compromís", "Resposta en 24 h", "100% confidencial"],
    bookingTitle: "Reserva la teva trucada gratuïta",
    dividerText: "Prefereixes escriure'ns primer?",
    form: {
      name: "Nom",
      company: "Empresa",
      email: "Email",
      phone: "Telèfon",
      message: "Quina és la teva situació?",
      submit: "Enviar missatge",
      success: "Gràcies! Hem rebut la teva sol·licitud, et contactarem en menys de 24h.",
      emailSubjectPrefix: "Nou contacte des de la web -",
      emailNoName: "Sense nom",
      emailFields: { name: "Nom", company: "Empresa", email: "Email", phone: "Telèfon", situation: "Situació:" },
    },
  },
  footer: {
    tagline: "Innovació, creixement i tecnologia: resultats, no presentacions.",
    servicesHeading: "Serveis",
    companyHeading: "Empresa",
    companyLinks: [
      { label: "Serveis", href: "/#servicios" },
      { label: "Metodologia", href: "/#metodologia" },
      { label: "Clients", href: "/#clientes" },
      { label: "Nosaltres", href: "/#nosotros" },
      { label: "El llibre", href: "/#libro" },
      { label: "AI Act", href: "/#legal" },
      { label: "Trucada gratuïta", href: "/#contacto" },
      { label: "Contacte", href: "/#contacto" },
    ],
    contactHeading: "Contacte",
    note: "Innovació, creixement i tecnologia",
    rights: "Tots els drets reservats.",
    legalLinks: [
      { label: "Avís legal", href: "/aviso-legal" },
      { label: "Política de privacitat", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
    scrollTop: "Tornar amunt",
    language: "Idioma",
  },
  serviceContent: [
    {
      category: "Estratègia",
      title: "AI Audit",
      tagline: "Radiografia completa de maduresa IA, riscos i oportunitats en la teva organització.",
      intro:
        "Abans d'invertir en IA, necessites saber exactament on ets. L'AI Audit és un diagnòstic de dues setmanes que mapeja els teus processos, dades, eines i equip per donar-te una fotografia honesta de la teva maduresa en IA.",
      description: [
        "Entrevistem els responsables de cada àrea, revisem els teus sistemes i fluxos de treball actuals i analitzem quins processos són candidats reals a automatització o assistència amb IA — i quins encara no ho són.",
        "El resultat no és un informe genèric de 80 pàgines que ningú llegeix. És un document accionable amb un rànquing d'oportunitats per impacte i esforç, els riscos regulatoris que has de vigilar i un full de ruta prioritzat per als propers 12 mesos.",
      ],
      includes: [
        "Entrevistes amb responsables de cada departament",
        "Mapeig de processos, dades i eines actuals",
        "Rànquing d'oportunitats d'IA per impacte i esforç",
        "Identificació de riscos i obligacions AI Act",
        "Full de ruta prioritzat a 12 mesos",
        "Sessió de presentació de resultats amb el comitè",
      ],
      examples: [
        {
          sector: "Indústria i manufactura",
          situation: "Una planta de producció mitjana no sabia si les seves dades de sensors eren suficients per predir avaries.",
          result: "L'audit va identificar 3 línies amb dades ja explotables i va descartar 2 iniciatives que haurien costat 6 mesos sense retorn.",
        },
        {
          sector: "Serveis professionals",
          situation: "Una firma de serveis professionals volia “posar-hi IA” sense saber per on començar.",
          result: "Es van prioritzar 4 casos d'ús en atenció al client i generació de propostes, amb ROI estimat en menys de 90 dies.",
        },
        {
          sector: "Retail",
          situation: "Una cadena de retail mitjana tenia dades de venda disperses en 5 sistemes diferents.",
          result: "El diagnòstic va destapar que el veritable coll d'ampolla era de dades, no d'IA, i va redirigir el pressupost a integrar-les primer.",
        },
      ],
      reviews: [
        { quote: "Per fi algú ens va dir amb números on valia la pena invertir i on no. Ens vam estalviar dos projectes que no anaven a funcionar.", role: "Directora d'Operacions, indústria i manufactura" },
        { quote: "Esperava un informe més de consultora tradicional. Ens van donar un pla que vam poder començar a executar la setmana següent.", role: "CEO, firma de serveis professionals" },
        { quote: "El diagnòstic de riscos AI Act ens va estalviar haver de contractar una altra assessoria a part.", role: "Responsable de Compliance, serveis financers" },
      ],
    },
    {
      category: "Estratègia",
      title: "Consultoria en IA",
      tagline: "Defineix on aplicar IA, què prioritzar i com convertir-ho en un pla accionable.",
      intro:
        "Tenir clar què fer amb la IA és més difícil que executar-la. T'ajudem a traduir l'estratègia de negoci en un pla d'IA concret, amb prioritats clares i sense dependre d'un únic proveïdor de tecnologia.",
      description: [
        "Treballem amb l'equip directiu per entendre els objectius reals del negoci — créixer, reduir costos, millorar el servei — i a partir d'aquí identifiquem quines aplicacions d'IA tenen sentit, en quin ordre i amb quins recursos.",
        "No venem una tecnologia concreta. La nostra feina és ser el criteri independent que avalua opcions, negocia amb proveïdors si cal i evita que l'empresa inverteixi en eines que no encaixen amb la seva realitat operativa.",
      ],
      includes: [
        "Tallers d'alineació amb l'equip directiu",
        "Prioritització de casos d'ús per valor de negoci",
        "Avaluació independent de proveïdors i eines",
        "Pla d'implementació amb fites i responsables",
        "Acompanyament en la presa de decisions clau",
      ],
      examples: [
        {
          sector: "Logística",
          situation: "Una empresa de logística dubtava entre 3 plataformes d'IA diferents ofertes per proveïdors.",
          result: "La consultoria va demostrar que cap resolia el problema real de planificació de rutes i es va dissenyar una solució a mida més barata.",
        },
        {
          sector: "Educació",
          situation: "Un centre educatiu volia “no quedar-se enrere” amb la IA sense un objectiu clar.",
          result: "Es van definir 2 focus concrets — atenció a famílies i suport docent — descartant la resta per ara.",
        },
        {
          sector: "Serveis financers",
          situation: "Una entitat financera de mida mitjana necessitava un pla d'IA a 3 anys per al seu consell.",
          result: "Es va lliurar un full de ruta amb 6 iniciatives esglaonades, aprovada en la primera presentació al consell.",
        },
      ],
      reviews: [
        { quote: "Ens van ajudar a dir que no a dos projectes que sonaven bé però no tenien sentit per a nosaltres. Això val més que qualsevol informe.", role: "Director General, logística" },
        { quote: "La primera consultora que no ens va intentar vendre la seva pròpia eina.", role: "Directora d'Innovació, educació" },
      ],
    },
    {
      category: "Capacitació",
      title: "Formació a Mida",
      tagline: "El teu equip, preparat per usar IA amb criteri des del primer dia.",
      intro:
        "La IA només genera valor si les persones saben utilitzar-la bé. Dissenyem programes de formació adaptats al nivell i al rol de cada equip — de directius a operatius — amb casos pràctics del teu propi sector.",
      description: [
        "Res de cursos genèrics d'“introducció a la IA”. Cada programa es construeix amb exercicis i eines rellevants per al dia a dia dels assistents: comitè de direcció, comercial, atenció al client, operacions.",
        "Combinem formació presencial o en línia amb material de consulta permanent, perquè l'aprenentatge no es quedi a la sessió sinó que es tradueixi en un ús real i amb criteri en el treball diari.",
      ],
      includes: [
        "Diagnòstic previ del nivell de partida de cada equip",
        "Contingut adaptat per rol: direcció, comandaments intermedis, operatiu",
        "Casos pràctics amb eines reals del teu sector",
        "Materials de consulta permanent post-formació",
        "Mesura d'adopció després de la formació",
      ],
      examples: [
        {
          sector: "Retail",
          situation: "Una cadena de retail va formar 40 responsables de botiga que mai havien fet servir eines d'IA.",
          result: "El 92% va començar a utilitzar l'assistent de recomanació de producte en les dues setmanes següents.",
        },
        {
          sector: "Indústria",
          situation: "El comitè de direcció d'una industrial necessitava entendre què preguntar als proveïdors d'IA.",
          result: "Sessió de mig dia que va evitar la compra d'una eina que no encaixava amb els seus sistemes.",
        },
        {
          sector: "Serveis professionals",
          situation: "Un despatx professional volia que el seu equip júnior utilitzés IA sense perdre rigor en el treball.",
          result: "Es van definir protocols d'ús i revisió que ara formen part de l'onboarding de noves incorporacions.",
        },
      ],
      reviews: [
        { quote: "Formació de veritat, no una xerrada motivacional sobre IA. Vam sortir amb coses concretes per aplicar l'endemà.", role: "Responsable de Formació, retail" },
        { quote: "Van adaptar els exemples al nostre sector, no era la típica formació enllaunada.", role: "Soci Director, serveis professionals" },
      ],
    },
    {
      category: "Implementació",
      title: "Chatbots Intel·ligents",
      tagline: "Assistents amb IA per a atenció, vendes i operacions connectats al teu negoci.",
      intro:
        "Dissenyem i implementem assistents conversacionals connectats als teus sistemes reals — CRM, catàleg, base de coneixement — no un chatbot de preguntes freqüents desconnectat del negoci.",
      description: [
        "Cada chatbot es construeix sobre les teves dades i processos: respon amb la informació real del teu catàleg o la teva base de coneixement, escala a una persona quan correspon i queda integrat amb les eines que ja fas servir (CRM, WhatsApp Business, helpdesk).",
        "L'objectiu no és substituir persones sinó absorbir el volum repetitiu perquè el teu equip se centri en allò que de veritat requereix criteri humà.",
      ],
      includes: [
        "Disseny de conversa adaptat a la teva marca i to",
        "Integració amb CRM, catàleg o base de coneixement",
        "Escalat a persona humana quan correspon",
        "Connexió amb WhatsApp Business, web o app",
        "Panell de mètriques de converses i resolució",
      ],
      examples: [
        {
          sector: "Retail i e-commerce",
          situation: "Una marca de retail rebia centenars de consultes repetides sobre estoc i talles per WhatsApp.",
          result: "Va automatitzar el 65% d'aquestes consultes i va reduir el temps de resposta d'hores a segons.",
        },
        {
          sector: "Serveis professionals",
          situation: "Un despatx volia filtrar i qualificar leads abans que arribessin a un comercial.",
          result: "L'assistent qualifica automàticament i només passa a comercial els leads amb encaix real, un 40% menys de reunions sense valor.",
        },
        {
          sector: "Logística",
          situation: "Una empresa de logística rebia moltes trucades per conèixer l'estat d'un enviament.",
          result: "Un assistent connectat al sistema de seguiment va resoldre el 70% d'aquestes consultes sense intervenció humana.",
        },
      ],
      reviews: [
        { quote: "No és un chatbot de manual, respon amb dades reals del nostre catàleg. Els clients ni s'adonen que parlen amb un assistent.", role: "Directora de Marca, retail i e-commerce" },
        { quote: "Es va integrar amb el nostre CRM sense drames i en menys temps del que esperàvem.", role: "Responsable d'Atenció al Client, logística" },
      ],
    },
    {
      category: "Implementació",
      title: "Desenvolupaments a Mida",
      tagline: "IA, automatització i dades quan cap solució estàndard és suficient.",
      intro:
        "Quan el problema és específic del teu negoci, una eina genèrica no n'hi ha prou. Construïm solucions a mida — des de models de predicció fins a integracions complexes de dades — amb el teu equip tècnic o com a equip extern.",
      description: [
        "Treballem com una extensió del teu equip tècnic, amb les mateixes pràctiques d'enginyeria que exigiries internament: control de versions, proves, documentació i desplegament supervisat.",
        "No creem dependència d'una caixa negra. Documentem i transferim el coneixement perquè, si en el futur vols internalitzar el manteniment, ho puguis fer sense fricció.",
      ],
      includes: [
        "Anàlisi tècnica de viabilitat abans de comprometre pressupost",
        "Desenvolupament amb pràctiques d'enginyeria estàndard (control de versions, proves)",
        "Integració amb els teus sistemes i fonts de dades existents",
        "Documentació completa i transferència de coneixement",
        "Suport i manteniment després del desplegament",
      ],
      examples: [
        {
          sector: "Indústria i manufactura",
          situation: "Una planta necessitava predir avaries de maquinària amb dades de sensors propis.",
          result: "Model de manteniment predictiu que va reduir les aturades no planificades en un 30%.",
        },
        {
          sector: "Retail",
          situation: "Una cadena necessitava un motor de recomanació de producte propi, no genèric.",
          result: "Sistema integrat al seu e-commerce que va contribuir a un +22% de conversió en producte recomanat.",
        },
        {
          sector: "Serveis financers",
          situation: "Una entitat necessitava creuar dades de 4 sistemes legacy sense substituir-los.",
          result: "Una capa d'integració a mida va unificar les dades sense tocar els sistemes core.",
        },
      ],
      reviews: [
        { quote: "Ens van lliurar quelcom que el nostre propi equip tècnic podia entendre i mantenir, no una caixa negra.", role: "CTO, indústria i manufactura" },
        { quote: "L'únic proveïdor que ens va avisar que una part del projecte no tenia sentit, en lloc de facturar-la igualment.", role: "Director de Tecnologia, serveis financers" },
      ],
    },
    {
      category: "Assessorament",
      title: "Suport en Contractació",
      tagline: "Troba el perfil d'IA o dades que necessites, avaluat per especialistes.",
      intro:
        "Contractar perfils d'IA i dades és difícil quan qui entrevista no domina la matèria. Avaluem tècnicament els candidats que arriben a la fase final perquè la decisió de contractació no depengui només d'una bona entrevista.",
      description: [
        "No som una agència de selecció convencional. Entrem en el procés que ja tens, amb el teu propi equip de RRHH o agència, en el moment de l'avaluació tècnica: proves pràctiques, entrevistes tècniques i validació d'experiència real en projectes d'IA.",
        "També ajudem a definir el perfil correcte abans de publicar l'oferta, evitant l'error habitual de demanar un “unicorn” que combina cinc especialitats diferents en una sola persona.",
      ],
      includes: [
        "Definició del perfil tècnic real que necessites",
        "Disseny de proves tècniques específiques per al lloc",
        "Entrevistes tècniques amb especialistes en IA i dades",
        "Informe objectiu de fortaleses i riscos per candidat",
        "Suport en la negociació de condicions tècniques",
      ],
      examples: [
        {
          sector: "Indústria",
          situation: "Una industrial portava 4 mesos buscant un “perfil IA” sense saber si els candidats eren realment sòlids.",
          result: "Es va tancar la contractació en 3 setmanes després de redefinir el perfil real que necessitaven.",
        },
        {
          sector: "Serveis financers",
          situation: "Un equip de RRHH no tècnic havia de decidir entre 3 finalistes per a un lloc de Data Scientist.",
          result: "L'avaluació tècnica va descartar el candidat amb millor entrevista però experiència inflada al currículum.",
        },
      ],
      reviews: [
        { quote: "Ens van evitar contractar un candidat que a l'entrevista sonava perfecte però no va superar la prova tècnica.", role: "Directora de RRHH, indústria" },
        { quote: "Per fi algú que sap què preguntar en una entrevista tècnica d'IA de veritat.", role: "Responsable de Talent, serveis financers" },
      ],
    },
    {
      category: "Estratègia",
      title: "Departament IA Extern",
      tagline: "La teva capacitat d'IA sense necessitat de contractar un equip intern.",
      intro:
        "Per a moltes empreses, muntar un equip d'IA intern encara no és viable ni necessari. Actuem com el teu departament d'IA externalitzat: estratègia, implementació i manteniment, amb la mateixa proximitat que un equip propi.",
      description: [
        "Un únic punt de contacte que coneix el teu negoci, els teus sistemes i les teves prioritats, en lloc d'haver de coordinar diversos proveïdors puntuals per a cada projecte nou.",
        "Treballem amb reunions periòdiques de seguiment, full de ruta compartit i la flexibilitat d'escalar el nivell de dedicació segons el que necessiti cada fase del negoci.",
      ],
      includes: [
        "Full de ruta d'IA compartit i revisat periòdicament",
        "Execució contínua de projectes, no només consultoria puntual",
        "Manteniment i evolució de les solucions ja desplegades",
        "Un únic interlocutor que coneix el teu negoci en profunditat",
        "Dedicació flexible segons la fase i necessitat del negoci",
      ],
      examples: [
        {
          sector: "Retail",
          situation: "Una cadena de retail mitjana no tenia volum per justificar un equip d'IA intern de 5 persones.",
          result: "Amb dedicació externa de 2 dies per setmana mantenen 4 solucions d'IA en producció i continuen incorporant nous casos.",
        },
        {
          sector: "Serveis professionals",
          situation: "Una firma en expansió necessitava capacitat d'IA que creixés amb ella sense contractacions anticipades.",
          result: "Va escalar la dedicació d'1 a 3 dies per setmana en 8 mesos, alineat amb el creixement real del negoci.",
        },
      ],
      reviews: [
        { quote: "És com tenir un departament d'IA propi, però sense la incertesa de contractar abans d'hora.", role: "Directora General, retail" },
        { quote: "Coneixen el nostre negoci millor que molts empleats interns a aquestes alçades.", role: "Soci, serveis professionals" },
      ],
    },
    {
      category: "Assessorament",
      badge: "Únic a Espanya",
      title: "Assessorament Legal i Regulatori",
      tagline: "Compliment normatiu per als teus sistemes d'IA sense frenar la innovació.",
      intro:
        "Som dels pocs equips a Espanya que integren assessorament legal AI Act i RGPD juntament amb la implementació tècnica d'IA, sota un mateix contracte i un mateix interlocutor.",
      description: [
        "El AI Act classifica els teus sistemes d'IA per nivell de risc i exigeix obligacions diferents segons aquesta classificació. La majoria d'empreses encara no sap en quina categoria estan ni què han de fer al respecte.",
        "Treballem colze a colze amb el teu equip legal — o fem d'equip legal si no en tens — perquè el compliment no sigui un obstacle que frena projectes, sinó un criteri que s'integra des del disseny de cada solució.",
      ],
      includes: [
        "Classificació dels teus sistemes d'IA per nivell de risc (AI Act)",
        "Identificació de les obligacions legals que et corresponen",
        "Memoràndum de compliment accionable",
        "Revisió de contractes amb proveïdors d'IA",
        "Coordinació entre l'equip legal i l'equip tècnic",
      ],
      examples: [
        {
          sector: "Serveis financers",
          situation: "Una entitat financera no sabia si el seu sistema de scoring de risc era “alt risc” segons el AI Act.",
          result: "Es va classificar correctament i es va definir un pla d'adequació amb terminis concrets abans de l'entrada en vigor.",
        },
        {
          sector: "Recursos Humans",
          situation: "Una empresa feia servir una eina d'IA per preseleccionar candidats sense haver avaluat les implicacions legals.",
          result: "Es va ajustar el procés i es va documentar el compliment abans que es convertís en un risc.",
        },
        {
          sector: "Indústria",
          situation: "Un proveïdor d'IA industrial no volia assumir responsabilitat contractual sobre el compliment normatiu.",
          result: "Es va renegociar el contracte per repartir correctament les obligacions legals entre les parts.",
        },
      ],
      reviews: [
        { quote: "Teníem dues assessories diferents per al tècnic i el legal que ni es parlaven entre elles. Aquí és un únic equip.", role: "Directora Legal, serveis financers" },
        { quote: "Ens van explicar el AI Act en termes que entenia el comitè, no en argot jurídic.", role: "Directora de RRHH, recursos humans" },
        { quote: "L'únic proveïdor que ens va fer replantejar un contracte amb un tercer per protegir-nos legalment.", role: "Director de Compres, indústria" },
      ],
    },
  ] as ServiceContent[],
  serviceHub: {
    backLink: "Tots els serveis",
    ctaPrimary: "Reservar trucada gratuïta",
    ctaSecondary: "Veure els 8 serveis",
    whatWeSolve: "Què resolem",
    whatIncludes: "Què inclou",
    useCasesLabel: "Casos d'ús",
    useCasesHeading: "Exemples reals d'aplicació",
    useCasesSubtext: "Situacions representatives d'empreses amb les quals hem treballat aquest servei. Els noms es mantenen anònims per confidencialitat.",
    situationLabel: "Situació",
    resultLabel: "Resultat",
    reviewsLabel: "Opinions",
    reviewsHeading: "El que diuen qui ja hi ha treballat així",
    ctaHeading: "Parlem del teu cas concret?",
    ctaText: "Una trucada de 30 minuts, sense compromís, per veure si {service} encaixa amb el que necessites ara mateix.",
  },
};

export default ca;
