import type { ServiceContent } from "../service-content";
import type { Dictionary } from "./es";

const de: Dictionary = {
  meta: {
    title: "Labs24k | KI-Beratung und Automatisierung",
    description:
      "KI-Implementierung und AI-Act- + DSGVO-Rechtsberatung aus einer Hand. Machen Sie Ihr Unternehmen bereit für die AI-Act-Frist im August 2026. Kostenloses 30-minütiges Gespräch.",
  },
  nav: {
    skipLink: "Zum Inhalt springen",
    servicios: "Leistungen",
    sectores: "Branchen",
    metodologia: "Methodik",
    clientes: "Kunden",
    libro: "Das Buch",
    libroGratis: "Kostenlos",
    aiAct: "AI Act",
    nosotros: "Über uns",
    blog: "Blog",
    contacto: "Kontakt",
    llamadaGratuita: "Kostenloses Gespräch",
    abrirMenu: "Menü öffnen",
    inicio: "Labs24k - Startseite",
  },
  banner: {
    tag: "AI Act",
    textPre: "Der AI Act ",
    textStrong: "ist bereits in Kraft",
    textPost: ". Erfüllt Ihr Unternehmen die Vorgaben?",
    cta: "Betroffenheit prüfen",
    cerrar: "Hinweis schließen",
  },
  hero: {
    eyebrow: "KI- + Rechtsberatung · AI Act 2024/1689",
    titleLine1: "Wir sorgen dafür, dass KI in Ihrem Unternehmen funktioniert.",
    titleLine2: "Und rechtssicher bleibt.",
    subtitle:
      "Strategie, technische Umsetzung und rechtliche Beratung zu AI Act und DSGVO aus einer Hand. Messbare Ergebnisse in Wochen, nicht Jahren.",
    ctaPrimary: "Kostenloses Gespräch buchen",
    ctaSecondary: "Alle 8 Leistungen ansehen",
    meta: ["Unverbindlich · 30 Min", "Antwort innerhalb 24 Std", "Vertrauliche Behandlung"],
    visual: {
      panelLabel: "Labs24k · KI-Panel",
      chatMessage: "Ich habe 3 Automatisierungen mit geschätztem 4-fachem ROI in Ihrem Betrieb identifiziert.",
      metrics: [
        { label: "AI-Act-Konformität", value: "92%" },
        { label: "Prozessautomatisierung", value: "78%" },
        { label: "Team-Akzeptanz", value: "85%" },
      ],
      caption1: "AI-Act-Konformität integriert",
      caption2: "+200 Führungskräfte bereits geschult",
    },
    stats: [
      { number: "+200", label: "Weiterbildung", desc: "geschulte Führungskräfte · NPS 4,8 / 5" },
      { number: "−65%", label: "Industrie", desc: "Zeit für Angebotserstellung" },
      { number: "+22%", label: "Handel", desc: "Conversion bei empfohlenen Produkten" },
    ],
    scroll: "Scrollen",
  },
  logosStrip: {
    ariaLabel: "Branchen, in denen wir tätig sind",
    label: "Branchen, mit denen wir bereits gearbeitet haben",
    items: ["Bildung", "Industrie", "Handel", "Professionelle Dienstleistungen", "Sport", "Technologie"],
  },
  book: {
    badge: "Kostenloses Buch · Living Edition",
    coverTitlePre: "DIE KI-",
    coverTitleHighlight: "METHODE",
    coverEdition: "Living Edition",
    coverSubtitle: "Wie man Unternehmen mit künstlicher Intelligenz aufbaut und skaliert",
    coverAuthor: "Labs24k Team",
    heading: "Die KI-Methode: das System, damit KI Ergebnisse liefert",
    bodyPre: "95% der KI-Piloten erzielen keinen Ertrag. ",
    bodyStrong: "Die KI-Methode",
    bodyPost:
      " ist das offene, lebendige Buch, das künstliche Intelligenz vom Pilotprojekt bis zur Gewinn- und Verlustrechnung führt. Für Entscheider gemacht. Kostenlos.",
    checklist: [
      "14 Kapitel mit Entscheidungsrahmen für Geschäftsführung und Gremium",
      "Untermauert mit Belegen von Deloitte, PwC, McKinsey und MIT",
      "Living Edition: Open Source und laufend aktualisiert mit dem Redaktionsbeirat",
    ],
    ctaPrimary: "Buch kostenlos herunterladen",
    ctaSecondary: "Inhalt ansehen",
  },
  services: {
    label: "Leistungen",
    heading: "Wo stehen Sie gerade? Wir bringen Sie zur nächsten Stufe.",
    subtext:
      "Acht Leistungen, gegliedert nach dem KI-Reifegrad Ihres Unternehmens — von der ersten Diagnose bis zur ausgelagerten KI-Abteilung.",
    moments: [
      { title: "Sie starten oder erkunden", desc: "Sie fangen mit KI an oder haben Pilotprojekte ohne klares Ergebnis durchgeführt." },
      { title: "Sie implementieren oder rollen aus", desc: "Sie wissen, was Sie tun wollen, und müssen es umsetzen." },
      { title: "Sie skalieren oder betreiben", desc: "Sie haben KI im Produktivbetrieb und brauchen Struktur." },
    ],
    momentoLabel: "Phase",
    complianceBox: {
      tag: "EU-Verordnung 2024/1689 · in Kraft",
      eyebrow: "Konformität · AI Act & DSGVO",
      title: "KI-Compliance-Diagnose",
      desc: "Wir klassifizieren Ihre KI-Systeme, identifizieren die für Sie geltenden Pflichten und liefern ein umsetzbares Compliance-Memorandum.",
      note: "Compliance-Memorandum in 2 Wochen",
      cta: "Meine Betroffenheit bewerten →",
    },
    footer: {
      text: "Identifizieren Sie sich mit keiner der drei Phasen?",
      text2: "Schildern Sie uns Ihre Situation in einem kostenlosen 30-minütigen Gespräch, und wir zeigen Ihnen den Weg — unverbindlich.",
      cta: "Mit uns sprechen →",
    },
  },
  clients: {
    label: "Erfolgsgeschichten",
    heading: "Echte Fälle. Konkrete Ergebnisse.",
    subtext: "Projekte, die von der Idee bis in den Produktivbetrieb gelangt sind — mit Kennzahlen, die der Kunde gerne teilt.",
    cards: [
      {
        logo: "Kunde 01",
        title: "Führungskräfteschulung",
        sector: "Bildung",
        metric: "+200 geschulte Führungskräfte. NPS 4,8 von 5.",
        desc: "Wir haben das KI-Programm für Führungskräfte im Bereich Executive Education konzipiert und durchgeführt, mit realen Anwendungsfällen für unternehmerische Entscheidungen.",
        tag: "Maßgeschneiderte Weiterbildung",
      },
      {
        logo: "Kunde 02",
        title: "Industrieller Hersteller",
        sector: "Industrie",
        metric: "−65% Zeitaufwand bei der Angebotserstellung.",
        desc: "Wir haben die Erstellung technischer Angebote auf Basis von Kundenanforderungen automatisiert und das technische Team für höherwertige Arbeit freigesetzt.",
        tag: "Intelligente Chatbots",
      },
      {
        logo: "Kunde 03",
        title: "Handelsmarke",
        sector: "Handel & E-Commerce",
        metric: "+22% Conversion bei empfohlenen Produkten.",
        desc: "Wir haben einen Conversational-Assistenten mit Produktempfehlung in den Onlineshop und WhatsApp Business integriert und manuelle Anfragen um 40% reduziert.",
        tag: "Intelligente Chatbots",
      },
      {
        logo: "Kunde 04",
        title: "Dienstleistungsunternehmen",
        sector: "Professionelle Dienstleistungen",
        metric: "85% KI-Tool-Akzeptanz innerhalb von 60 Tagen.",
        desc: "Dreistufiges Schulungsprogramm für 80 Personen mit persönlicher Begleitung über 6 Wochen.",
        tag: "Maßgeschneiderte Weiterbildung",
      },
      {
        logo: "Kunde 05",
        title: "Sportmarke",
        sector: "Sportindustrie",
        metric: "+45% qualifizierte Leads. −3 Std/Woche manuelle Aufgaben.",
        desc: "Chatbot zur automatischen Projektqualifizierung, integriert in die Unternehmenswebsite mit direkter CRM-Anbindung.",
        tag: "Intelligente Chatbots",
      },
      {
        logo: "Kunde 06",
        title: "Technologieunternehmen",
        sector: "Technologie",
        metric: "3 Automatisierungspotenziale identifiziert. Geschätzter ROI 4x.",
        desc: "Strategische Phase-0-Beratung zur Identifikation und Priorisierung der vielversprechendsten KI-Anwendungsfälle.",
        tag: "KI-Beratung",
      },
    ],
  },
  whyus: {
    label: "Warum wir",
    headingPre: "Warum ",
    headingHighlight: "Labs24k",
    subtext: "Viele Unternehmen reden über KI. Wenige haben die technische Kompetenz und den geschäftlichen Fokus, um sie umzusetzen.",
    cards: [
      {
        number: "01",
        title: "Strategie und Umsetzung",
        desc: "Wir bleiben nicht bei der Empfehlung stehen: Wir schulen, implementieren, begleiten und skalieren. Ein einziger Ansprechpartner, von Anfang bis Ende.",
      },
      {
        number: "02",
        title: "Unternehmerischer Fokus",
        desc: "Wir priorisieren Wirkung, Akzeptanz und Ertrag — nicht Technologie um der Technologie willen. Wir starten immer beim realen Problem.",
      },
      {
        number: "03",
        title: "Echte Kompetenz, kein Blendwerk",
        desc: "Von Beratung über Automatisierung bis zu KI-Assistenten, Analytik oder Individualentwicklungen. Wir haben das technische Team, um umzusetzen, was wir vorschlagen.",
      },
      {
        number: "04",
        title: "Flexibilität als Partner",
        desc: "Wir können punktuell oder als kontinuierliches externes Team agieren. Wir passen uns an das an, was Sie in jeder Phase brauchen.",
      },
      {
        number: "05",
        title: "Geschwindigkeit mit Augenmaß",
        desc: "Wir suchen den kürzesten Weg zwischen dem realen Problem und einer wertschöpfenden Lösung. Sichtbare Ergebnisse in Wochen, nicht Monaten.",
      },
    ],
  },
  founder: {
    imgAlt: "Führungsteam von Labs24k",
    captionRole: "Gründungsteam",
    captionName: "Labs24k",
    label: "Geleitet von",
    heading: "Hinter jedem Projekt steht ein Team, das mit seinem Namen dafür einsteht",
    subtext:
      "Mit Labs24k zusammenzuarbeiten heißt nicht, eine Marke zu beauftragen. Es heißt, mit einem Team zu arbeiten, das von konkreten Personen geleitet wird, die antworten, umsetzen und mit ihrem Namen dafür einstehen.",
    bio: "Wir leiten Strategie, Kundenbeziehungen und Projektumsetzung mit Fokus auf Innovation, Wachstum und Technologie, angewendet auf echte Geschäftsergebnisse.",
    checklist: [
      "Team spezialisiert auf im Unternehmen angewandte KI",
      "Branchenübergreifende Innovations- und Technologieprojekte",
      "Begleitung von Anfang bis Ende, ohne Zwischenhändler",
    ],
    linkedin: "Profil auf LinkedIn ansehen →",
  },
  methodology: {
    label: "Methodik",
    heading: "Vier Phasen. Ein Ergebnis pro Phase. Null Projekte, die in der Schublade verschwinden.",
    subtext: "Jede Phase hat ein konkretes Ergebnis und ein klares Fortschrittskriterium. Ohne Improvisation, ohne Projekte, die nie enden.",
    activitiesLabel: "Kernaktivitäten",
    deliverableLabel: "Ergebnis",
    phases: [
      {
        tag: "Phase 01",
        title: "Diagnose",
        desc: "Wir analysieren Ihre Prozesse, Daten und den aktuellen Kontext, um zu identifizieren, wo KI echte — nicht theoretische — Wirkung entfalten kann.",
        activities: ["Prozess- und Datenaudit", "Interviews mit wichtigen Stakeholdern", "Priorisierte Chancenlandkarte"],
        deliverable: "KI-Reifegradbericht + Roadmap",
      },
      {
        tag: "Phase 02",
        title: "Strategische Priorisierung",
        desc: "Wir wählen die Anwendungsfälle mit dem höchsten Ertrag, dem geringsten Risiko und der besten Ausrichtung auf Ihre Ziele aus.",
        activities: ["Technische Machbarkeitsbewertung", "Ertragsschätzung je Fall", "Auswahl mit der Geschäftsführung"],
        deliverable: "Priorisierter Plan mit KPIs und Zeitplan",
      },
      {
        tag: "Phase 03",
        title: "Umsetzung",
        desc: "Wir setzen um: Teamschulungen, Chatbot-Einführung, Automatisierungen oder Individualentwicklungen — mit definierten Ergebnissen und Fristen.",
        activities: ["Technische Entwicklung und Einführung", "Schulung des Kundenteams", "Integration in interne Systeme"],
        deliverable: "Lösung im Produktivbetrieb + geschultes Team",
      },
      {
        tag: "Phase 04",
        title: "Skalierung und Weiterentwicklung",
        desc: "Wir messen Ergebnisse, iterieren und bauen aus, was funktioniert. Ziel ist eine Fähigkeit, die mit Ihrem Unternehmen mitwächst.",
        activities: ["Echtzeit-Wirkungskennzahlen", "Iteration auf Basis dessen, was funktioniert", "Ausweitung auf neue Prozesse"],
        deliverable: "Ergebnis-Dashboard + kontinuierliche Verbesserung",
      },
    ],
    footerText: "Wir beginnen immer mit einem kostenlosen Gespräch, um Ihre Situation zu verstehen, bevor wir eine Leistung vorschlagen.",
    footerCta: "Mit einem Experten sprechen",
  },
  sectors: {
    label: "Branchen",
    heading: "Jede Branche hat ihre eigenen Herausforderungen. Wir wissen, welche KI löst — und welche nicht.",
    subtext: "Wir kennen die realen Probleme dieser Branchen und die Lösungen, die echte Wirkung erzielen.",
    cards: [
      {
        title: "Handel und E-Commerce",
        desc: "Verkaufsassistenten, Produktempfehlungen und Automatisierung des Kundenservice, um mit weniger manuellem Aufwand mehr zu verkaufen.",
        link: "Lösungen für Handel und E-Commerce ansehen",
      },
      {
        title: "Industrie und Fertigung",
        desc: "Automatisierung technischer Angebote, Optimierung der Produktionsprozesse und Analytik für datenbasierte Entscheidungen.",
        link: "Lösungen für Industrie und Fertigung ansehen",
      },
      {
        title: "Bildung und Weiterbildung",
        desc: "KI-Programme, angepasst nach Niveau und Rolle, damit Teams KI-Tools vom ersten Tag an nutzen — nicht nur in der Theorie.",
        link: "Lösungen für Bildung und Weiterbildung ansehen",
      },
      {
        title: "Logistik und Distribution",
        desc: "Wegfall manueller Berichte, Echtzeit-Dashboards und Systemintegration für schnellere, zuverlässigere Abläufe.",
        link: "Lösungen für Logistik und Distribution ansehen",
      },
      {
        title: "Professionelle Dienstleistungen",
        desc: "Automatisierung administrativer Aufgaben, Dokumentenerstellung und KI-Einführung, um mit demselben Team mehr zu leisten.",
        link: "Lösungen für professionelle Dienstleistungen ansehen",
      },
      {
        title: "Finanzsektor",
        desc: "Dokumentenautomatisierung mit Nachvollziehbarkeit, regulatorische Konformität (AI Act, DORA) und Spezialschulungen für Banken, Versicherungen und Fintechs.",
        link: "Lösungen für den Finanzsektor ansehen",
      },
    ],
  },
  faq: {
    label: "Häufige Fragen",
    title: "Was man uns oft fragt",
    categories: { general: "Allgemein", proceso: "Prozess und Garantien" },
    general: [
      {
        question: "Was ist Labs24k?",
        answer:
          "Wir sind eine auf künstliche Intelligenz für Unternehmen spezialisierte Beratungsgesellschaft: technische KI-Umsetzung und AI-Act- + DSGVO-Rechtsberatung in einem einzigen Vertrag.",
      },
      {
        question: "Brauche ich technisches Wissen, um Ihre Leistungen zu beauftragen?",
        answer: "Nein. Wir übersetzen Technologie in Geschäftsentscheidungen und übernehmen die technische Umsetzung von Anfang bis Ende.",
      },
      {
        question: "Mit welchen KI-Tools arbeiten Sie?",
        answer:
          "Wir sind anbieterunabhängig: Wir wählen Modell und Infrastruktur (OpenAI, Anthropic, Google, Open Source) je nach Anwendungsfall, Kosten und Compliance-Anforderungen.",
      },
      {
        question: "Arbeiten Sie mit Unternehmen außerhalb Spaniens?",
        answer: "Ja, wir haben aktive Projekte in Spanien, Andorra, Europa und Lateinamerika — remote und vor Ort.",
      },
    ],
    proceso: [
      {
        question: "Wie lange dauert es, bis sich ein Ertrag zeigt?",
        answer: "Die meisten unserer Projekte zeigen dank eines eng gefassten Umfangs und phasenweiser Ergebnisse innerhalb von Wochen messbare Resultate.",
      },
      {
        question: "Welche Garantien bieten Sie?",
        answer: "Jede Phase hat ein Ergebnis und ein klares, vor Beginn definiertes Fortschrittskriterium, damit Sie genau wissen, was Sie wann erhalten.",
      },
      {
        question: "Wie mache ich den ersten Schritt?",
        answer: "Vereinbaren Sie ein kostenloses 30-minütiges Gespräch. Wir sagen Ihnen ehrlich, ob wir helfen können und womit Sie beginnen sollten.",
      },
    ],
    footerText: "Haben Sie weitere Fragen? Sprechen Sie direkt mit uns.",
  },
  contact: {
    label: "Kontakt",
    heading: "Ein 30-minütiges Gespräch kann mehr Klarheit bringen als Monate ziellosen Ausprobierens",
    subtext:
      "Schildern Sie uns Ihre Situation, und wir sagen Ihnen ehrlich, ob wir helfen können, wo ein Start sinnvoll wäre und welche Art von Projekt am besten zu Ihnen passt.",
    meta: ["Kostenlos · Unverbindlich", "Antwort innerhalb 24 Std", "100% vertraulich"],
    bookingTitle: "Kostenloses Gespräch buchen",
    dividerText: "Möchten Sie uns lieber zuerst schreiben?",
    form: {
      name: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      phone: "Telefon",
      message: "Wie ist Ihre Situation?",
      submit: "Nachricht senden",
      success: "Vielen Dank! Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden.",
      emailSubjectPrefix: "Neue Kontaktanfrage von der Website -",
      emailNoName: "Ohne Namen",
      emailFields: { name: "Name", company: "Unternehmen", email: "E-Mail", phone: "Telefon", situation: "Situation:" },
    },
  },
  footer: {
    tagline: "Innovation, Wachstum und Technologie: Ergebnisse, keine Präsentationen.",
    servicesHeading: "Leistungen",
    companyHeading: "Unternehmen",
    companyLinks: [
      { label: "Leistungen", href: "/#servicios" },
      { label: "Methodik", href: "/#metodologia" },
      { label: "Kunden", href: "/#clientes" },
      { label: "Über uns", href: "/#nosotros" },
      { label: "Das Buch", href: "/#libro" },
      { label: "AI Act", href: "/#legal" },
      { label: "Kostenloses Gespräch", href: "/#contacto" },
      { label: "Kontakt", href: "/#contacto" },
    ],
    contactHeading: "Kontakt",
    note: "Innovation, Wachstum und Technologie",
    rights: "Alle Rechte vorbehalten.",
    legalLinks: [
      { label: "Impressum", href: "/aviso-legal" },
      { label: "Datenschutz", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
    scrollTop: "Nach oben",
    language: "Sprache",
  },
  serviceContent: [
    {
      category: "Strategie",
      title: "AI Audit",
      tagline: "Ein vollständiges Röntgenbild des KI-Reifegrads, der Risiken und Chancen Ihres Unternehmens.",
      intro:
        "Bevor Sie in KI investieren, müssen Sie genau wissen, wo Sie stehen. Das AI Audit ist eine zweiwöchige Diagnose, die Ihre Prozesse, Daten, Tools und Ihr Team abbildet, um Ihnen ein ehrliches Bild Ihres KI-Reifegrads zu geben.",
      description: [
        "Wir befragen die Verantwortlichen jedes Bereichs, prüfen Ihre aktuellen Systeme und Arbeitsabläufe und analysieren, welche Prozesse echte Kandidaten für Automatisierung oder KI-Unterstützung sind — und welche noch nicht.",
        "Das Ergebnis ist kein generischer 80-seitiger Bericht, den niemand liest. Es ist ein umsetzbares Dokument mit nach Wirkung und Aufwand geordneten Chancen, den regulatorischen Risiken, die Sie im Blick behalten müssen, und einer priorisierten Roadmap für die nächsten 12 Monate.",
      ],
      includes: [
        "Interviews mit den Verantwortlichen jeder Abteilung",
        "Abbildung aktueller Prozesse, Daten und Tools",
        "Rangliste der KI-Chancen nach Wirkung und Aufwand",
        "Identifikation von AI-Act-Risiken und -Pflichten",
        "Priorisierte 12-Monats-Roadmap",
        "Ergebnispräsentation mit dem Gremium",
      ],
      examples: [
        {
          sector: "Industrie und Fertigung",
          situation: "Ein mittelgroßes Produktionswerk wusste nicht, ob seine Sensordaten ausreichten, um Ausfälle vorherzusagen.",
          result: "Das Audit identifizierte 3 Linien mit bereits nutzbaren Daten und verwarf 2 Initiativen, die 6 Monate ohne Ertrag gekostet hätten.",
        },
        {
          sector: "Professionelle Dienstleistungen",
          situation: "Ein Dienstleistungsunternehmen wollte „KI einführen“, ohne zu wissen, wo es anfangen sollte.",
          result: "4 Anwendungsfälle im Kundenservice und in der Angebotserstellung wurden priorisiert, mit geschätztem ROI in unter 90 Tagen.",
        },
        {
          sector: "Handel",
          situation: "Eine mittelgroße Handelskette hatte Verkaufsdaten verteilt auf 5 verschiedene Systeme.",
          result: "Die Diagnose zeigte, dass der eigentliche Engpass die Daten waren, nicht die KI, und lenkte das Budget zuerst auf deren Integration.",
        },
      ],
      reviews: [
        { quote: "Endlich hat uns jemand mit Zahlen gezeigt, wo sich eine Investition lohnt und wo nicht. Wir haben uns zwei Projekte erspart, die nicht funktioniert hätten.", role: "Leiterin Operations, Industrie und Fertigung" },
        { quote: "Ich hatte einen klassischeren Beratungsbericht erwartet. Wir bekamen einen Plan, den wir bereits in der folgenden Woche umsetzen konnten.", role: "CEO, Dienstleistungsunternehmen" },
        { quote: "Die AI-Act-Risikodiagnose hat uns erspart, eine separate Compliance-Kanzlei zu beauftragen.", role: "Compliance-Verantwortliche, Finanzdienstleistungen" },
      ],
    },
    {
      category: "Strategie",
      title: "KI-Beratung",
      tagline: "Definieren Sie, wo KI eingesetzt werden soll, was Priorität hat und wie daraus ein umsetzbarer Plan wird.",
      intro:
        "Zu wissen, was mit KI zu tun ist, ist schwieriger als es umzusetzen. Wir helfen, die Geschäftsstrategie in einen konkreten KI-Plan zu übersetzen — mit klaren Prioritäten und ohne Abhängigkeit von einem einzigen Technologieanbieter.",
      description: [
        "Wir arbeiten mit der Geschäftsführung, um die realen Unternehmensziele zu verstehen — Wachstum, Kostensenkung, besserer Service — und identifizieren darauf aufbauend, welche KI-Anwendungen sinnvoll sind, in welcher Reihenfolge und mit welchen Ressourcen.",
        "Wir verkaufen keine bestimmte Technologie. Unsere Aufgabe ist es, das unabhängige Urteilsvermögen zu sein, das Optionen bewertet, bei Bedarf mit Anbietern verhandelt und verhindert, dass das Unternehmen in Tools investiert, die nicht zu seiner betrieblichen Realität passen.",
      ],
      includes: [
        "Abstimmungsworkshops mit der Geschäftsführung",
        "Priorisierung von Anwendungsfällen nach Geschäftswert",
        "Unabhängige Bewertung von Anbietern und Tools",
        "Umsetzungsplan mit Meilensteinen und Verantwortlichen",
        "Begleitung bei zentralen Entscheidungen",
      ],
      examples: [
        {
          sector: "Logistik",
          situation: "Ein Logistikunternehmen schwankte zwischen 3 verschiedenen, von Anbietern vorgeschlagenen KI-Plattformen.",
          result: "Die Beratung zeigte, dass keine davon das eigentliche Problem der Routenplanung löste, und eine günstigere Individuallösung wurde entworfen.",
        },
        {
          sector: "Bildung",
          situation: "Eine Bildungseinrichtung wollte bei KI „nicht zurückbleiben“, ohne ein klares Ziel zu haben.",
          result: "2 konkrete Schwerpunkte wurden definiert — Kommunikation mit Familien und Unterstützung für Lehrkräfte — der Rest wurde vorerst zurückgestellt.",
        },
        {
          sector: "Finanzdienstleistungen",
          situation: "Ein mittelgroßes Finanzinstitut brauchte einen 3-Jahres-KI-Plan für sein Gremium.",
          result: "Eine Roadmap mit 6 gestaffelten Initiativen wurde geliefert und bereits bei der ersten Präsentation vor dem Gremium genehmigt.",
        },
      ],
      reviews: [
        { quote: "Sie haben uns geholfen, zu zwei Projekten Nein zu sagen, die gut klangen, aber für uns keinen Sinn ergaben. Das ist mehr wert als jeder Bericht.", role: "Geschäftsführer, Logistik" },
        { quote: "Die erste Beratung, die uns nicht ihr eigenes Tool verkaufen wollte.", role: "Leiterin Innovation, Bildung" },
      ],
    },
    {
      category: "Weiterbildung",
      title: "Maßgeschneiderte Weiterbildung",
      tagline: "Ihr Team, bereit, KI vom ersten Tag an mit Urteilsvermögen einzusetzen.",
      intro:
        "KI schafft nur dann Wert, wenn Menschen sie gut einzusetzen wissen. Wir konzipieren Schulungsprogramme, angepasst an Niveau und Rolle jedes Teams — von der Führungsebene bis zum operativen Bereich — mit praktischen Fällen aus Ihrer eigenen Branche.",
      description: [
        "Keine generischen „Einführung in KI“-Kurse. Jedes Programm wird mit Übungen und Tools aufgebaut, die für den Alltag der Teilnehmenden relevant sind: Geschäftsführung, Vertrieb, Kundenservice, Betrieb.",
        "Wir kombinieren Präsenz- oder Online-Schulungen mit dauerhaften Referenzmaterialien, damit das Gelernte nicht bei der Sitzung bleibt, sondern sich in echten, reflektierten Einsatz im Arbeitsalltag verwandelt.",
      ],
      includes: [
        "Vorherige Einschätzung des Ausgangsniveaus jedes Teams",
        "Inhalte angepasst nach Rolle: Geschäftsführung, mittlere Führungsebene, operativ",
        "Praktische Fälle mit echten Tools Ihrer Branche",
        "Dauerhafte Referenzmaterialien nach der Schulung",
        "Messung der Akzeptanz nach der Schulung",
      ],
      examples: [
        {
          sector: "Handel",
          situation: "Eine Handelskette schulte 40 Filialleiter, die noch nie KI-Tools genutzt hatten.",
          result: "92% begannen innerhalb der folgenden zwei Wochen, den Produktempfehlungsassistenten zu nutzen.",
        },
        {
          sector: "Industrie",
          situation: "Die Geschäftsführung eines Industrieunternehmens musste wissen, was sie KI-Anbieter fragen sollte.",
          result: "Eine halbtägige Sitzung verhinderte den Kauf eines Tools, das nicht zu ihren Systemen passte.",
        },
        {
          sector: "Professionelle Dienstleistungen",
          situation: "Eine Kanzlei wollte, dass ihre Junior-Mitarbeiter KI nutzen, ohne an Sorgfalt in der Arbeit einzubüßen.",
          result: "Nutzungs- und Prüfprotokolle wurden definiert, die heute Teil des Onboardings neuer Mitarbeiter sind.",
        },
      ],
      reviews: [
        { quote: "Echte Weiterbildung, kein motivierender Vortrag über KI. Wir gingen mit konkreten Dingen heraus, die wir am nächsten Tag anwenden konnten.", role: "Leiterin Weiterbildung, Handel" },
        { quote: "Sie haben die Beispiele an unsere Branche angepasst, es war nicht die übliche Standardschulung.", role: "Geschäftsführender Partner, professionelle Dienstleistungen" },
      ],
    },
    {
      category: "Umsetzung",
      title: "Intelligente Chatbots",
      tagline: "KI-Assistenten für Kundenservice, Vertrieb und Betrieb, verbunden mit Ihrem Unternehmen.",
      intro:
        "Wir konzipieren und implementieren Conversational-Assistenten, die mit Ihren echten Systemen verbunden sind — CRM, Katalog, Wissensdatenbank — kein FAQ-Chatbot losgelöst vom Geschäft.",
      description: [
        "Jeder Chatbot wird auf Basis Ihrer eigenen Daten und Prozesse gebaut: Er antwortet mit echten Informationen aus Ihrem Katalog oder Ihrer Wissensdatenbank, eskaliert bei Bedarf an eine Person und ist in die bereits genutzten Tools integriert (CRM, WhatsApp Business, Helpdesk).",
        "Ziel ist nicht, Menschen zu ersetzen, sondern wiederkehrendes Volumen zu absorbieren, damit sich Ihr Team auf das konzentrieren kann, was echtes menschliches Urteilsvermögen erfordert.",
      ],
      includes: [
        "Gesprächsdesign angepasst an Ihre Marke und Ihren Ton",
        "Integration mit CRM, Katalog oder Wissensdatenbank",
        "Eskalation an eine Person bei Bedarf",
        "Anbindung an WhatsApp Business, Web oder App",
        "Dashboard für Gesprächs- und Lösungskennzahlen",
      ],
      examples: [
        {
          sector: "Handel und E-Commerce",
          situation: "Eine Handelsmarke erhielt Hunderte wiederkehrender Anfragen zu Lagerbestand und Größen per WhatsApp.",
          result: "65% dieser Anfragen wurden automatisiert und die Antwortzeit von Stunden auf Sekunden verkürzt.",
        },
        {
          sector: "Professionelle Dienstleistungen",
          situation: "Eine Kanzlei wollte Leads filtern und qualifizieren, bevor sie einen Vertriebsmitarbeiter erreichten.",
          result: "Der Assistent qualifiziert automatisch und leitet nur wirklich passende Leads an den Vertrieb weiter — 40% weniger wertlose Termine.",
        },
        {
          sector: "Logistik",
          situation: "Ein Logistikunternehmen erhielt viele Anrufe, nur um den Sendungsstatus zu erfragen.",
          result: "Ein mit dem Tracking-System verbundener Assistent löste 70% dieser Anfragen ohne menschliches Zutun.",
        },
      ],
      reviews: [
        { quote: "Es ist kein Standard-Chatbot, er antwortet mit echten Daten aus unserem Katalog. Kunden merken gar nicht, dass sie mit einem Assistenten sprechen.", role: "Leiterin Marke, Handel und E-Commerce" },
        { quote: "Er wurde ohne Probleme und schneller als erwartet in unser CRM integriert.", role: "Leiter Kundenservice, Logistik" },
      ],
    },
    {
      category: "Umsetzung",
      title: "Individualentwicklungen",
      tagline: "KI, Automatisierung und Daten, wenn keine Standardlösung ausreicht.",
      intro:
        "Wenn das Problem spezifisch für Ihr Unternehmen ist, reicht ein generisches Tool nicht aus. Wir bauen maßgeschneiderte Lösungen — von Vorhersagemodellen bis zu komplexen Datenintegrationen — gemeinsam mit Ihrem technischen Team oder als externes Team.",
      description: [
        "Wir arbeiten als Erweiterung Ihres technischen Teams, mit denselben Engineering-Standards, die Sie intern erwarten würden: Versionskontrolle, Tests, Dokumentation und überwachte Bereitstellung.",
        "Wir schaffen keine Abhängigkeit von einer Black Box. Wir dokumentieren und übertragen Wissen, damit Sie die Wartung später ohne Reibungsverluste selbst übernehmen können, wenn Sie das möchten.",
      ],
      includes: [
        "Technische Machbarkeitsanalyse, bevor Budget gebunden wird",
        "Entwicklung nach Standard-Engineering-Praktiken (Versionskontrolle, Tests)",
        "Integration in Ihre bestehenden Systeme und Datenquellen",
        "Vollständige Dokumentation und Wissenstransfer",
        "Support und Wartung nach der Bereitstellung",
      ],
      examples: [
        {
          sector: "Industrie und Fertigung",
          situation: "Ein Werk musste Maschinenausfälle mit eigenen Sensordaten vorhersagen.",
          result: "Ein Modell für vorausschauende Wartung, das ungeplante Stillstände um 30% reduzierte.",
        },
        {
          sector: "Handel",
          situation: "Eine Kette brauchte eine eigene, keine generische Produktempfehlungs-Engine.",
          result: "Ein in den E-Commerce integriertes System, das zu +22% Conversion bei empfohlenen Produkten beitrug.",
        },
        {
          sector: "Finanzdienstleistungen",
          situation: "Ein Institut musste Daten aus 4 Altsystemen verknüpfen, ohne sie zu ersetzen.",
          result: "Eine maßgeschneiderte Integrationsschicht vereinheitlichte die Daten, ohne die Kernsysteme anzufassen.",
        },
      ],
      reviews: [
        { quote: "Sie haben uns etwas geliefert, das unser eigenes technisches Team verstehen und pflegen konnte — keine Black Box.", role: "CTO, Industrie und Fertigung" },
        { quote: "Der einzige Anbieter, der uns sagte, dass ein Teil des Projekts keinen Sinn ergab, statt ihn trotzdem zu berechnen.", role: "Leiter Technologie, Finanzdienstleistungen" },
      ],
    },
    {
      category: "Beratung",
      title: "Unterstützung bei der Personalgewinnung",
      tagline: "Finden Sie das KI- oder Data-Profil, das Sie brauchen — bewertet von Spezialisten.",
      intro:
        "KI- und Data-Talente einzustellen ist schwierig, wenn die interviewende Person das Fachgebiet nicht beherrscht. Wir bewerten Kandidaten in der Endrunde technisch, damit die Einstellungsentscheidung nicht allein auf einem guten Interview beruht.",
      description: [
        "Wir sind keine klassische Personalvermittlung. Wir steigen in den Prozess ein, den Sie bereits haben — mit Ihrem eigenen HR-Team oder Ihrer Agentur — an der Stelle der technischen Bewertung: praktische Tests, technische Interviews und Validierung echter Erfahrung in KI-Projekten.",
        "Wir helfen auch, das richtige Profil zu definieren, bevor die Stelle ausgeschrieben wird, und vermeiden so den häufigen Fehler, nach einem „Einhorn“ zu suchen, das fünf verschiedene Spezialgebiete in einer Person vereint.",
      ],
      includes: [
        "Definition des tatsächlich benötigten technischen Profils",
        "Konzeption stellenspezifischer technischer Tests",
        "Technische Interviews mit KI- und Data-Spezialisten",
        "Objektiver Bericht über Stärken und Risiken je Kandidat",
        "Unterstützung bei der Verhandlung technischer Konditionen",
      ],
      examples: [
        {
          sector: "Industrie",
          situation: "Ein Industrieunternehmen suchte seit 4 Monaten ein „KI-Profil“, ohne zu wissen, ob die Kandidaten wirklich fundiert waren.",
          result: "Die Einstellung wurde innerhalb von 3 Wochen abgeschlossen, nachdem das tatsächlich benötigte Profil neu definiert worden war.",
        },
        {
          sector: "Finanzdienstleistungen",
          situation: "Ein nicht-technisches HR-Team musste zwischen 3 Finalisten für eine Data-Scientist-Stelle entscheiden.",
          result: "Die technische Bewertung schloss den Kandidaten aus, der im Interview am besten wirkte, aber im Lebenslauf übertriebene Erfahrung angab.",
        },
      ],
      reviews: [
        { quote: "Sie haben uns davor bewahrt, einen Kandidaten einzustellen, der im Interview perfekt klang, aber den technischen Test nicht bestand.", role: "Leiterin HR, Industrie" },
        { quote: "Endlich jemand, der weiß, was man in einem echten technischen KI-Interview fragen muss.", role: "Leiter Talent, Finanzdienstleistungen" },
      ],
    },
    {
      category: "Strategie",
      title: "Externe KI-Abteilung",
      tagline: "Ihre KI-Kapazität, ohne ein internes Team einstellen zu müssen.",
      intro:
        "Für viele Unternehmen ist der Aufbau eines internen KI-Teams noch nicht machbar oder nötig. Wir agieren als Ihre ausgelagerte KI-Abteilung: Strategie, Umsetzung und Wartung — mit derselben Nähe wie ein internes Team.",
      description: [
        "Ein einziger Ansprechpartner, der Ihr Unternehmen, Ihre Systeme und Ihre Prioritäten kennt, statt mehrere punktuelle Anbieter für jedes neue Projekt koordinieren zu müssen.",
        "Wir arbeiten mit regelmäßigen Abstimmungen, einer gemeinsamen Roadmap und der Flexibilität, den Einsatzumfang je nach Bedarf der jeweiligen Unternehmensphase hoch- oder herunterzufahren.",
      ],
      includes: [
        "Gemeinsame KI-Roadmap, regelmäßig überprüft",
        "Kontinuierliche Projektumsetzung, nicht nur punktuelle Beratung",
        "Wartung und Weiterentwicklung bereits eingeführter Lösungen",
        "Ein einziger Ansprechpartner mit tiefem Verständnis Ihres Unternehmens",
        "Flexibler Einsatz je nach Unternehmensphase und Bedarf",
      ],
      examples: [
        {
          sector: "Handel",
          situation: "Eine mittelgroße Handelskette hatte nicht das Volumen, um ein internes 5-köpfiges KI-Team zu rechtfertigen.",
          result: "Mit 2 Tagen externem Einsatz pro Woche betreiben sie 4 KI-Lösungen im Produktivbetrieb und fügen laufend neue Anwendungsfälle hinzu.",
        },
        {
          sector: "Professionelle Dienstleistungen",
          situation: "Ein wachsendes Unternehmen brauchte KI-Kapazität, die mit ihm mitwachsen konnte, ohne im Voraus einzustellen.",
          result: "Der Einsatz wuchs innerhalb von 8 Monaten von 1 auf 3 Tage pro Woche, im Einklang mit dem tatsächlichen Unternehmenswachstum.",
        },
      ],
      reviews: [
        { quote: "Es ist, als hätten wir eine eigene KI-Abteilung, ohne die Unsicherheit, zu früh einzustellen.", role: "Geschäftsführerin, Handel" },
        { quote: "Sie kennen unser Unternehmen inzwischen besser als viele interne Mitarbeiter.", role: "Partner, professionelle Dienstleistungen" },
      ],
    },
    {
      category: "Beratung",
      badge: "Einzigartig in Spanien",
      title: "Rechts- und Regulierungsberatung",
      tagline: "Regulatorische Konformität für Ihre KI-Systeme, ohne die Innovation zu bremsen.",
      intro:
        "Wir sind eines der wenigen Teams in Spanien, das AI-Act- und DSGVO-Rechtsberatung mit der technischen KI-Umsetzung kombiniert — in einem einzigen Vertrag und mit einem einzigen Ansprechpartner.",
      description: [
        "Der AI Act klassifiziert Ihre KI-Systeme nach Risikostufe und verlangt je nach dieser Einstufung unterschiedliche Pflichten. Die meisten Unternehmen wissen noch nicht, in welche Kategorie sie fallen oder was sie tun müssen.",
        "Wir arbeiten Hand in Hand mit Ihrem Rechtsteam — oder übernehmen diese Rolle, wenn Sie keines haben — damit Compliance kein Projektbremser ist, sondern ein Kriterium, das von Anfang an in das Design jeder Lösung einfließt.",
      ],
      includes: [
        "Klassifizierung Ihrer KI-Systeme nach Risikostufe (AI Act)",
        "Identifikation der für Sie geltenden rechtlichen Pflichten",
        "Umsetzbares Compliance-Memorandum",
        "Prüfung von Verträgen mit KI-Anbietern",
        "Koordination zwischen Rechts- und technischem Team",
      ],
      examples: [
        {
          sector: "Finanzdienstleistungen",
          situation: "Ein Finanzinstitut wusste nicht, ob sein Risiko-Scoring-System nach dem AI Act als „hochriskant“ galt.",
          result: "Es wurde korrekt eingestuft, und vor Inkrafttreten wurde ein Anpassungsplan mit konkreten Fristen definiert.",
        },
        {
          sector: "Personalwesen",
          situation: "Ein Unternehmen nutzte ein KI-Tool zur Vorauswahl von Kandidaten, ohne die rechtlichen Implikationen bewertet zu haben.",
          result: "Der Prozess wurde angepasst und die Konformität dokumentiert, bevor daraus ein Risiko wurde.",
        },
        {
          sector: "Industrie",
          situation: "Ein Anbieter industrieller KI wollte keine vertragliche Verantwortung für die regulatorische Konformität übernehmen.",
          result: "Der Vertrag wurde neu verhandelt, um die rechtlichen Pflichten korrekt zwischen den Parteien aufzuteilen.",
        },
      ],
      reviews: [
        { quote: "Wir hatten zwei getrennte Berater für Technik und Recht, die nicht einmal miteinander sprachen. Hier ist es ein einziges Team.", role: "Leiterin Recht, Finanzdienstleistungen" },
        { quote: "Sie haben uns den AI Act in Begriffen erklärt, die das Gremium verstand, nicht in juristischem Fachjargon.", role: "Leiterin HR, Personalwesen" },
        { quote: "Der einzige Anbieter, der uns dazu gebracht hat, einen Vertrag mit einem Dritten zu unserem rechtlichen Schutz zu überdenken.", role: "Leiter Einkauf, Industrie" },
      ],
    },
  ] as ServiceContent[],
  serviceHub: {
    backLink: "Alle Leistungen",
    ctaPrimary: "Kostenloses Gespräch buchen",
    ctaSecondary: "Alle 8 Leistungen ansehen",
    whatWeSolve: "Was wir lösen",
    whatIncludes: "Was enthalten ist",
    useCasesLabel: "Anwendungsfälle",
    useCasesHeading: "Echte Anwendungsbeispiele",
    useCasesSubtext: "Repräsentative Situationen von Unternehmen, mit denen wir zu dieser Leistung gearbeitet haben. Namen bleiben aus Vertraulichkeitsgründen anonym.",
    situationLabel: "Situation",
    resultLabel: "Ergebnis",
    reviewsLabel: "Bewertungen",
    reviewsHeading: "Was diejenigen sagen, die bereits so gearbeitet haben",
    ctaHeading: "Sprechen wir über Ihren konkreten Fall?",
    ctaText: "Ein unverbindliches, kostenloses 30-minütiges Gespräch, um zu sehen, ob {service} zu dem passt, was Sie gerade brauchen.",
  },
};

export default de;
