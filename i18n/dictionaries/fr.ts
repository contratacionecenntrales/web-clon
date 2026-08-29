import type { ServiceContent } from "../service-content";
import type { Dictionary } from "./es";

const fr: Dictionary = {
  meta: {
    title: "Labs24k | Conseil en Intelligence Artificielle et Automatisation",
    description:
      "Mise en œuvre de l'IA et conseil juridique AI Act + RGPD avec un seul partenaire. Préparez votre entreprise à l'échéance du AI Act d'août 2026. Appel gratuit de 30 minutes.",
  },
  nav: {
    skipLink: "Aller au contenu",
    servicios: "Services",
    sectores: "Secteurs",
    metodologia: "Méthodologie",
    clientes: "Clients",
    libro: "Le livre",
    libroGratis: "Gratuit",
    aiAct: "AI Act",
    nosotros: "À propos",
    blog: "Blog",
    contacto: "Contact",
    llamadaGratuita: "Appel gratuit",
    abrirMenu: "Ouvrir le menu",
    inicio: "Labs24k - Accueil",
  },
  banner: {
    tag: "AI Act",
    textPre: "Le AI Act ",
    textStrong: "est déjà en vigueur",
    textPost: ". Votre entreprise est-elle conforme ?",
    cta: "Calculer mon exposition",
    cerrar: "Fermer l'avis",
  },
  hero: {
    eyebrow: "Conseil IA + Juridique · AI Act 2024/1689",
    titleLine1: "Nous faisons fonctionner l'IA dans votre entreprise.",
    titleLine2: "Et en conformité.",
    subtitle:
      "Stratégie, mise en œuvre technique et conseil juridique AI Act et RGPD intégrés dans un même contrat. Des résultats mesurables en semaines, pas en années.",
    ctaPrimary: "Réserver un appel gratuit",
    ctaSecondary: "Voir les 8 services",
    meta: ["Sans engagement · 30 min", "Réponse sous 24 h", "Traitement confidentiel"],
    visual: {
      panelLabel: "Labs24k · Panneau IA",
      chatMessage: "J'ai identifié 3 automatisations avec un ROI estimé de 4x dans votre activité.",
      metrics: [
        { label: "Conformité AI Act", value: "92%" },
        { label: "Automatisation des processus", value: "78%" },
        { label: "Adoption par l'équipe", value: "85%" },
      ],
      caption1: "Conformité AI Act intégrée",
      caption2: "+200 dirigeants déjà formés",
    },
    stats: [
      { number: "+200", label: "Formation", desc: "dirigeants formés · NPS 4,8 / 5" },
      { number: "−65%", label: "Industrie", desc: "temps de rédaction des propositions commerciales" },
      { number: "+22%", label: "Retail", desc: "conversion sur produit recommandé" },
    ],
    scroll: "Défiler",
  },
  logosStrip: {
    ariaLabel: "Secteurs dans lesquels nous travaillons",
    label: "Secteurs avec lesquels nous avons déjà travaillé",
    items: ["Éducation", "Industrie", "Retail", "Services Professionnels", "Sport", "Technologie"],
  },
  book: {
    badge: "Livre gratuit · Édition Vivante",
    coverEyebrow: "Intelligence Artificielle Appliquée",
    coverTitle: "Le Guide d'Excellence pour Développer votre Entreprise",
    coverSubtitle: "Stratégie, Cas de Réussite & Mise en Œuvre",
    coverAuthor: "Équipe Labs24k",
    heading: "Découvrez l'avenir de votre entreprise",
    bodyPre: "95% des dirigeants ne savent toujours pas comment intégrer l'IA efficacement. ",
    bodyStrong: "Ce livre vous donne l'avantage concurrentiel",
    bodyPost: " dont vous avez besoin pour ne pas être distancé.",
    checklist: [
      "14 chapitres de stratégie pratique et de cas réels",
      "Cadres de décision étayés par Deloitte, PwC, McKinsey et le MIT",
      "Modèles et checklists exclusifs prêts à l'emploi",
      "Édition Vivante : contenu mis à jour avec le Conseil Éditorial",
    ],
    ctaPrimary: "Télécharger gratuitement",
    ctaNote: "Accès immédiat en PDF",
  },
  services: {
    label: "Services",
    heading: "Où en êtes-vous ? Nous vous accompagnons vers l'étape suivante.",
    subtext:
      "Huit services organisés selon la maturité IA de votre entreprise. Du premier diagnostic au département IA externalisé.",
    moments: [
      { title: "Vous démarrez ou explorez", desc: "Vous débutez avec l'IA ou avez mené des pilotes sans résultat clair." },
      { title: "Vous mettez en œuvre ou déployez", desc: "Vous savez ce que vous voulez faire et devez l'exécuter." },
      { title: "Vous passez à l'échelle ou opérez", desc: "Vous avez de l'IA en production et avez besoin de structure." },
    ],
    momentoLabel: "Étape",
    complianceBox: {
      tag: "Règlement UE 2024/1689 · en vigueur",
      eyebrow: "Conformité · AI Act & RGPD",
      title: "Diagnostic de Conformité IA",
      desc: "Nous classifions vos systèmes d'IA, identifions les obligations qui vous concernent et vous remettons un mémorandum de conformité actionnable.",
      note: "Mémorandum de conformité en 2 semaines",
      cta: "Évaluer mon exposition →",
    },
    footer: {
      text: "Vous ne vous reconnaissez dans aucune des trois étapes ?",
      text2: "Racontez-nous votre situation lors d'un appel gratuit de 30 minutes et nous vous orienterons sans frais.",
      cta: "Parlez-nous →",
    },
  },
  clients: {
    label: "Cas de réussite",
    heading: "Des cas réels. Des résultats concrets.",
    subtext: "Des projets passés de l'idée à la production, avec des métriques que le client partage sans hésiter.",
    cards: [
      {
        logo: "Client 01",
        title: "Formation exécutive",
        sector: "Éducation",
        metric: "+200 dirigeants formés. NPS 4,8 sur 5.",
        desc: "Nous avons conçu et dispensé le programme IA pour les dirigeants de leur pôle executive education, avec des cas d'usage réels appliqués à la prise de décision.",
        tag: "Formation Sur Mesure",
      },
      {
        logo: "Client 02",
        title: "Fabricant industriel",
        sector: "Industrie",
        metric: "−65% de temps sur la génération de propositions commerciales.",
        desc: "Nous avons automatisé la génération de propositions techniques à partir des besoins du client, libérant l'équipe technique pour des tâches à plus forte valeur ajoutée.",
        tag: "Chatbots Intelligents",
      },
      {
        logo: "Client 03",
        title: "Marque retail",
        sector: "Retail & E-commerce",
        metric: "+22% de conversion sur produit recommandé.",
        desc: "Nous avons mis en place un assistant conversationnel avec recommandation de produits intégré à leur boutique en ligne et à WhatsApp Business, réduisant de 40% les demandes manuelles.",
        tag: "Chatbots Intelligents",
      },
      {
        logo: "Client 04",
        title: "Cabinet de services",
        sector: "Services Professionnels",
        metric: "85% d'adoption des outils IA en 60 jours.",
        desc: "Programme de formation à 3 niveaux pour 80 personnes avec un suivi personnalisé sur 6 semaines.",
        tag: "Formation Sur Mesure",
      },
      {
        logo: "Client 05",
        title: "Marque sportive",
        sector: "Industrie Sportive",
        metric: "+45% de leads qualifiés. −3h/semaine de tâches manuelles.",
        desc: "Chatbot de qualification automatique de projets intégré à leur site corporate, connecté directement au CRM.",
        tag: "Chatbots Intelligents",
      },
      {
        logo: "Client 06",
        title: "Entreprise technologique",
        sector: "Technologie",
        metric: "3 pistes d'automatisation identifiées. ROI estimé 4x.",
        desc: "Conseil stratégique Phase 0 pour identifier et prioriser les cas d'usage IA à plus fort potentiel.",
        tag: "Conseil en IA",
      },
    ],
  },
  whyus: {
    label: "Pourquoi nous",
    headingPre: "Pourquoi ",
    headingHighlight: "Labs24k",
    subtext: "Beaucoup d'entreprises parlent d'IA. Peu ont la capacité technique et l'approche business pour l'exécuter.",
    cards: [
      {
        number: "01",
        title: "Stratégie et exécution",
        desc: "Nous n'en restons pas à la recommandation : nous formons, mettons en œuvre, accompagnons et développons. Un seul interlocuteur, de bout en bout.",
      },
      {
        number: "02",
        title: "Approche business",
        desc: "Nous priorisons l'impact, l'adoption et le retour sur investissement — pas la technologie pour la technologie. Nous partons toujours du vrai problème.",
      },
      {
        number: "03",
        title: "Capacité réelle, pas du vent",
        desc: "Du conseil à l'automatisation, en passant par les assistants IA, l'analytique ou le développement sur mesure. Nous avons l'équipe technique pour exécuter ce que nous proposons.",
      },
      {
        number: "04",
        title: "Flexibilité de partenaire",
        desc: "Nous pouvons intervenir ponctuellement ou comme équipe externe continue. Nous nous adaptons à vos besoins à chaque étape.",
      },
      {
        number: "05",
        title: "Rapidité avec discernement",
        desc: "Nous cherchons le chemin le plus court entre le problème réel et une solution qui crée de la valeur. Des résultats visibles en semaines, pas en mois.",
      },
    ],
  },
  founder: {
    imgAlt: "Équipe dirigeante de Labs24k",
    captionRole: "Équipe fondatrice",
    captionName: "Labs24k",
    label: "Dirigé par",
    heading: "Derrière chaque projet, une équipe qui engage son nom",
    subtext:
      "Travailler avec Labs24k, ce n'est pas engager une marque. C'est travailler avec une équipe dirigée par des personnes concrètes qui répondent, exécutent et signent de leur nom.",
    bio: "Nous pilotons la stratégie, les relations clients et l'exécution des projets, avec un cap sur l'innovation, la croissance et la technologie appliquée à des résultats business réels.",
    checklist: [
      "Équipe spécialisée en IA appliquée à l'entreprise",
      "Projets multisectoriels d'innovation et de technologie",
      "Accompagnement de bout en bout, sans intermédiaires",
    ],
    linkedin: "Voir le profil sur LinkedIn →",
  },
  methodology: {
    label: "Méthodologie",
    heading: "Quatre phases. Un livrable par phase. Zéro projet qui meurt dans un tiroir.",
    subtext: "Chaque phase a un livrable concret et un critère d'avancement clair. Sans improvisation, sans projets qui ne se terminent jamais.",
    activitiesLabel: "Activités clés",
    deliverableLabel: "Livrable",
    phases: [
      {
        tag: "Phase 01",
        title: "Diagnostic",
        desc: "Nous analysons vos processus, vos données et votre contexte actuel pour identifier où l'IA peut avoir un impact réel, pas théorique.",
        activities: ["Audit des processus et des données", "Entretiens avec les parties prenantes clés", "Carte des opportunités priorisées"],
        deliverable: "Rapport de maturité IA + feuille de route",
      },
      {
        tag: "Phase 02",
        title: "Priorisation stratégique",
        desc: "Nous sélectionnons les cas d'usage offrant le meilleur retour, le moindre risque et le meilleur alignement avec vos objectifs.",
        activities: ["Évaluation de la faisabilité technique", "Estimation du retour par cas", "Sélection avec la direction"],
        deliverable: "Plan priorisé avec KPI et calendrier",
      },
      {
        tag: "Phase 03",
        title: "Mise en œuvre",
        desc: "Nous exécutons : formation des équipes, déploiement de chatbots, automatisations ou développements sur mesure. Avec livrables et délais définis.",
        activities: ["Développement et déploiement technique", "Formation de l'équipe cliente", "Intégration aux systèmes internes"],
        deliverable: "Solution en production + équipe formée",
      },
      {
        tag: "Phase 04",
        title: "Passage à l'échelle et évolution",
        desc: "Nous mesurons les résultats, itérons et développons ce qui fonctionne. L'objectif : bâtir une capacité qui grandit avec votre entreprise.",
        activities: ["Métriques d'impact en temps réel", "Itération sur ce qui fonctionne", "Extension à de nouveaux processus"],
        deliverable: "Tableau de bord des résultats + amélioration continue",
      },
    ],
    footerText: "Nous commençons toujours par un appel gratuit pour comprendre votre situation avant de proposer un service.",
    footerCta: "Parler à un expert",
  },
  sectors: {
    label: "Secteurs",
    heading: "Chaque secteur a ses défis. Nous savons lesquels l'IA résout — et lesquels non.",
    subtext: "Nous connaissons les vrais problèmes de ces secteurs et les solutions qui ont un impact réel.",
    cards: [
      {
        title: "Retail et E-commerce",
        desc: "Assistants de vente, recommandation de produits et automatisation du service client pour vendre plus avec moins d'effort manuel.",
        link: "Voir les solutions pour le retail et l'e-commerce",
      },
      {
        title: "Industrie et Manufacture",
        desc: "Automatisation des propositions techniques, optimisation des processus de production et analytique pour décider avec des données réelles.",
        link: "Voir les solutions pour l'industrie et la manufacture",
      },
      {
        title: "Éducation et Formation",
        desc: "Programmes IA adaptés par niveau et par rôle pour que les équipes adoptent les outils IA dès le premier jour, pas en théorie.",
        link: "Voir les solutions pour l'éducation et la formation",
      },
      {
        title: "Logistique et Distribution",
        desc: "Suppression du reporting manuel, tableaux de bord en temps réel et intégration des systèmes pour des opérations plus rapides et fiables.",
        link: "Voir les solutions pour la logistique et la distribution",
      },
      {
        title: "Services Professionnels",
        desc: "Automatisation des tâches administratives, génération de documents et adoption de l'IA pour faire plus avec la même équipe.",
        link: "Voir les solutions pour les services professionnels",
      },
      {
        title: "Secteur Financier",
        desc: "Automatisation documentaire avec traçabilité, conformité réglementaire (AI Act, DORA) et formation spécialisée pour la banque, l'assurance et la fintech.",
        link: "Voir les solutions pour le secteur financier",
      },
    ],
  },
  faq: {
    label: "Questions fréquentes",
    title: "Ce qu'on nous demande souvent",
    categories: { general: "Général", proceso: "Processus et garanties" },
    general: [
      {
        question: "Qu'est-ce que Labs24k ?",
        answer:
          "Nous sommes un cabinet de conseil spécialisé en intelligence artificielle pour les entreprises : mise en œuvre technique de l'IA et conseil juridique AI Act + RGPD, intégrés dans un même contrat.",
      },
      {
        question: "Ai-je besoin de connaissances techniques pour faire appel à vos services ?",
        answer: "Non. Nous traduisons la technologie en décisions business et prenons en charge l'exécution technique de bout en bout.",
      },
      {
        question: "Avec quels outils IA travaillez-vous ?",
        answer:
          "Nous sommes agnostiques vis-à-vis des fournisseurs : nous choisissons le modèle et l'infrastructure (OpenAI, Anthropic, Google, open source) selon le cas d'usage, le coût et les exigences de conformité.",
      },
      {
        question: "Travaillez-vous avec des entreprises hors d'Espagne ?",
        answer: "Oui, nous avons des projets actifs en Espagne, en Andorre, en Europe et en Amérique latine, à distance et sur site.",
      },
    ],
    proceso: [
      {
        question: "Combien de temps avant de voir un retour ?",
        answer: "La plupart de nos projets montrent des résultats mesurables en quelques semaines, grâce à un périmètre restreint et des livrables par phase.",
      },
      {
        question: "Quelles garanties offrez-vous ?",
        answer: "Chaque phase a un livrable et un critère d'avancement clair, définis avant de démarrer, pour que vous sachiez exactement ce que vous recevez et quand.",
      },
      {
        question: "Comment faire le premier pas ?",
        answer: "Réservez un appel gratuit de 30 minutes. Nous vous dirons honnêtement si nous pouvons vous aider et par où commencer.",
      },
    ],
    footerText: "Vous avez d'autres questions ? Parlez-nous directement.",
  },
  contact: {
    label: "Contact",
    heading: "Un appel de 30 minutes peut vous apporter plus de clarté que des mois d'essais sans direction",
    subtext:
      "Racontez-nous votre situation et nous vous dirons honnêtement si nous pouvons vous aider, par où il serait pertinent de commencer et quel type de projet vous correspond le mieux.",
    meta: ["Gratuit · Sans engagement", "Réponse sous 24 h", "100% confidentiel"],
    bookingTitle: "Réservez votre appel gratuit",
    dividerText: "Vous préférez nous écrire d'abord ?",
    form: {
      name: "Nom",
      company: "Entreprise",
      email: "Email",
      phone: "Téléphone",
      message: "Quelle est votre situation ?",
      submit: "Envoyer le message",
      success: "Merci ! Nous avons bien reçu votre demande, nous vous contacterons sous 24h.",
      emailSubjectPrefix: "Nouveau contact depuis le site -",
      emailNoName: "Sans nom",
      emailFields: { name: "Nom", company: "Entreprise", email: "Email", phone: "Téléphone", situation: "Situation :" },
    },
  },
  footer: {
    tagline: "Innovation, croissance et technologie : des résultats, pas des présentations.",
    servicesHeading: "Services",
    companyHeading: "Entreprise",
    companyLinks: [
      { label: "Services", href: "/#servicios" },
      { label: "Méthodologie", href: "/#metodologia" },
      { label: "Clients", href: "/#clientes" },
      { label: "À propos", href: "/#nosotros" },
      { label: "Le livre", href: "/#libro" },
      { label: "AI Act", href: "/#legal" },
      { label: "Appel gratuit", href: "/#contacto" },
      { label: "Contact", href: "/#contacto" },
    ],
    contactHeading: "Contact",
    note: "Innovation, croissance et technologie",
    rights: "Tous droits réservés.",
    legalLinks: [
      { label: "Mentions légales", href: "/aviso-legal" },
      { label: "Politique de confidentialité", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
    scrollTop: "Retour en haut",
    language: "Langue",
  },
  serviceContent: [
    {
      category: "Stratégie",
      title: "AI Audit",
      tagline: "Une radiographie complète de la maturité IA, des risques et des opportunités de votre organisation.",
      intro:
        "Avant d'investir dans l'IA, vous devez savoir exactement où vous en êtes. L'AI Audit est un diagnostic de deux semaines qui cartographie vos processus, vos données, vos outils et votre équipe pour vous donner une image honnête de votre maturité IA.",
      description: [
        "Nous interrogeons les responsables de chaque service, examinons vos systèmes et flux de travail actuels et analysons quels processus sont de réels candidats à l'automatisation ou à l'assistance par IA — et lesquels ne le sont pas encore.",
        "Le résultat n'est pas un rapport générique de 80 pages que personne ne lit. C'est un document actionnable avec un classement des opportunités par impact et effort, les risques réglementaires à surveiller et une feuille de route priorisée pour les 12 prochains mois.",
      ],
      includes: [
        "Entretiens avec les responsables de chaque service",
        "Cartographie des processus, données et outils actuels",
        "Classement des opportunités IA par impact et effort",
        "Identification des risques et obligations AI Act",
        "Feuille de route priorisée à 12 mois",
        "Session de présentation des résultats au comité",
      ],
      examples: [
        {
          sector: "Industrie et manufacture",
          situation: "Un site de production de taille moyenne ne savait pas si ses données de capteurs suffisaient pour prédire les pannes.",
          result: "L'audit a identifié 3 lignes avec des données déjà exploitables et écarté 2 initiatives qui auraient coûté 6 mois sans retour.",
        },
        {
          sector: "Services professionnels",
          situation: "Un cabinet de services professionnels voulait « ajouter de l'IA » sans savoir par où commencer.",
          result: "4 cas d'usage ont été priorisés en service client et génération de propositions, avec un ROI estimé en moins de 90 jours.",
        },
        {
          sector: "Retail",
          situation: "Une chaîne de retail moyenne avait des données de vente dispersées dans 5 systèmes différents.",
          result: "Le diagnostic a révélé que le vrai goulot d'étranglement était la donnée, pas l'IA, et a réorienté le budget vers son intégration en priorité.",
        },
      ],
      reviews: [
        { quote: "Enfin quelqu'un nous a dit avec des chiffres où investir avait du sens et où non. Nous avons évité deux projets voués à l'échec.", role: "Directrice des Opérations, industrie et manufacture" },
        { quote: "Je m'attendais à un rapport plus classique. Ils nous ont donné un plan que nous avons pu commencer à exécuter la semaine suivante.", role: "CEO, cabinet de services professionnels" },
        { quote: "Le diagnostic des risques AI Act nous a évité de faire appel à un cabinet de conformité séparé.", role: "Responsable Conformité, services financiers" },
      ],
    },
    {
      category: "Stratégie",
      title: "Conseil en IA",
      tagline: "Définissez où appliquer l'IA, quoi prioriser et comment en faire un plan actionnable.",
      intro:
        "Savoir quoi faire avec l'IA est plus difficile que de l'exécuter. Nous vous aidons à traduire la stratégie business en un plan IA concret, avec des priorités claires et sans dépendre d'un seul fournisseur technologique.",
      description: [
        "Nous travaillons avec la direction pour comprendre les vrais objectifs business — croître, réduire les coûts, améliorer le service — et identifions à partir de là quelles applications IA ont du sens, dans quel ordre et avec quelles ressources.",
        "Nous ne vendons pas une technologie précise. Notre rôle est d'être le jugement indépendant qui évalue les options, négocie avec les fournisseurs si nécessaire et évite que l'entreprise investisse dans des outils inadaptés à sa réalité opérationnelle.",
      ],
      includes: [
        "Ateliers d'alignement avec la direction",
        "Priorisation des cas d'usage par valeur business",
        "Évaluation indépendante des fournisseurs et outils",
        "Plan de mise en œuvre avec jalons et responsables",
        "Accompagnement dans les décisions clés",
      ],
      examples: [
        {
          sector: "Logistique",
          situation: "Une entreprise de logistique hésitait entre 3 plateformes IA différentes proposées par des fournisseurs.",
          result: "Le conseil a montré qu'aucune ne résolvait le vrai problème de planification des tournées, et une solution sur mesure moins coûteuse a été conçue.",
        },
        {
          sector: "Éducation",
          situation: "Un établissement éducatif voulait « ne pas prendre de retard » sur l'IA sans objectif clair.",
          result: "2 axes concrets ont été définis — communication avec les familles et soutien pédagogique — le reste étant reporté pour l'instant.",
        },
        {
          sector: "Services financiers",
          situation: "Un établissement financier de taille moyenne avait besoin d'un plan IA à 3 ans pour son conseil d'administration.",
          result: "Une feuille de route avec 6 initiatives échelonnées a été livrée et approuvée dès la première présentation au conseil.",
        },
      ],
      reviews: [
        { quote: "Ils nous ont aidés à dire non à deux projets séduisants sur le papier mais qui n'avaient pas de sens pour nous. Cela vaut plus que n'importe quel rapport.", role: "Directeur Général, logistique" },
        { quote: "Le premier cabinet de conseil qui n'a pas essayé de nous vendre son propre outil.", role: "Directrice de l'Innovation, éducation" },
      ],
    },
    {
      category: "Formation",
      title: "Formation Sur Mesure",
      tagline: "Votre équipe, prête à utiliser l'IA avec discernement dès le premier jour.",
      intro:
        "L'IA ne crée de la valeur que si les personnes savent bien l'utiliser. Nous concevons des programmes de formation adaptés au niveau et au rôle de chaque équipe — dirigeants comme opérationnels — avec des cas pratiques de votre propre secteur.",
      description: [
        "Fini les formations génériques d'« introduction à l'IA ». Chaque programme est construit avec des exercices et des outils pertinents pour le quotidien des participants : comité de direction, commercial, service client, opérations.",
        "Nous combinons formation en présentiel ou en ligne avec des supports de référence permanents, pour que l'apprentissage ne reste pas cantonné à la session mais se traduise par un usage réel et réfléchi au travail.",
      ],
      includes: [
        "Diagnostic préalable du niveau de départ de chaque équipe",
        "Contenu adapté par rôle : direction, encadrement intermédiaire, opérationnel",
        "Cas pratiques avec des outils réels de votre secteur",
        "Supports de référence permanents après la formation",
        "Mesure de l'adoption après la formation",
      ],
      examples: [
        {
          sector: "Retail",
          situation: "Une chaîne de retail a formé 40 responsables de magasin qui n'avaient jamais utilisé d'outils IA.",
          result: "92% ont commencé à utiliser l'assistant de recommandation de produits dans les deux semaines suivantes.",
        },
        {
          sector: "Industrie",
          situation: "Le comité de direction d'un industriel avait besoin de savoir quoi demander aux fournisseurs IA.",
          result: "Une session d'une demi-journée a évité l'achat d'un outil inadapté à leurs systèmes.",
        },
        {
          sector: "Services professionnels",
          situation: "Un cabinet voulait que ses juniors utilisent l'IA sans perdre de rigueur dans leur travail.",
          result: "Des protocoles d'utilisation et de relecture ont été définis et font désormais partie de l'intégration des nouvelles recrues.",
        },
      ],
      reviews: [
        { quote: "Une vraie formation, pas une conférence motivationnelle sur l'IA. Nous sommes repartis avec des choses concrètes à appliquer dès le lendemain.", role: "Responsable Formation, retail" },
        { quote: "Ils ont adapté les exemples à notre secteur, ce n'était pas la formation standard habituelle.", role: "Associé Gérant, services professionnels" },
      ],
    },
    {
      category: "Mise en œuvre",
      title: "Chatbots Intelligents",
      tagline: "Des assistants IA pour le service client, les ventes et les opérations, connectés à votre activité.",
      intro:
        "Nous concevons et mettons en œuvre des assistants conversationnels connectés à vos systèmes réels — CRM, catalogue, base de connaissances — pas un chatbot de FAQ déconnecté du business.",
      description: [
        "Chaque chatbot est construit sur vos propres données et processus : il répond avec les informations réelles de votre catalogue ou de votre base de connaissances, escalade vers une personne quand nécessaire et s'intègre aux outils que vous utilisez déjà (CRM, WhatsApp Business, helpdesk).",
        "L'objectif n'est pas de remplacer des personnes mais d'absorber le volume répétitif pour que votre équipe se concentre sur ce qui exige réellement du discernement humain.",
      ],
      includes: [
        "Conception de conversation adaptée à votre marque et à votre ton",
        "Intégration au CRM, au catalogue ou à la base de connaissances",
        "Escalade vers une personne humaine quand nécessaire",
        "Connexion à WhatsApp Business, au web ou à l'app",
        "Tableau de bord des métriques de conversations et de résolution",
      ],
      examples: [
        {
          sector: "Retail et e-commerce",
          situation: "Une marque retail recevait des centaines de demandes répétées sur le stock et les tailles via WhatsApp.",
          result: "Automatisation de 65% de ces demandes et réduction du temps de réponse d'heures à secondes.",
        },
        {
          sector: "Services professionnels",
          situation: "Un cabinet voulait filtrer et qualifier les leads avant qu'ils n'atteignent un commercial.",
          result: "L'assistant qualifie automatiquement et ne transmet au commercial que les leads réellement adaptés, soit 40% de réunions à faible valeur en moins.",
        },
        {
          sector: "Logistique",
          situation: "Une entreprise de logistique recevait de nombreux appels pour connaître le statut d'un envoi.",
          result: "Un assistant connecté au système de suivi a résolu 70% de ces demandes sans intervention humaine.",
        },
      ],
      reviews: [
        { quote: "Ce n'est pas un chatbot standard, il répond avec les données réelles de notre catalogue. Les clients ne remarquent même pas qu'ils parlent à un assistant.", role: "Directrice de Marque, retail et e-commerce" },
        { quote: "Il s'est intégré à notre CRM sans accroc et plus vite que prévu.", role: "Responsable Service Client, logistique" },
      ],
    },
    {
      category: "Mise en œuvre",
      title: "Développements Sur Mesure",
      tagline: "IA, automatisation et données quand aucune solution standard ne suffit.",
      intro:
        "Quand le problème est spécifique à votre entreprise, un outil générique ne suffit pas. Nous construisons des solutions sur mesure — des modèles de prédiction aux intégrations de données complexes — avec votre équipe technique ou en tant qu'équipe externe.",
      description: [
        "Nous travaillons comme une extension de votre équipe technique, avec les mêmes pratiques d'ingénierie que vous exigeriez en interne : contrôle de version, tests, documentation et déploiement supervisé.",
        "Nous ne créons pas de dépendance à une boîte noire. Nous documentons et transférons les connaissances pour que, si vous souhaitez internaliser la maintenance plus tard, vous puissiez le faire sans friction.",
      ],
      includes: [
        "Analyse technique de faisabilité avant d'engager le budget",
        "Développement selon des pratiques d'ingénierie standard (contrôle de version, tests)",
        "Intégration à vos systèmes et sources de données existants",
        "Documentation complète et transfert de connaissances",
        "Support et maintenance après le déploiement",
      ],
      examples: [
        {
          sector: "Industrie et manufacture",
          situation: "Un site avait besoin de prédire les pannes de machines à partir de ses propres données de capteurs.",
          result: "Un modèle de maintenance prédictive qui a réduit les arrêts non planifiés de 30%.",
        },
        {
          sector: "Retail",
          situation: "Une chaîne avait besoin de son propre moteur de recommandation de produits, pas d'une solution générique.",
          result: "Un système intégré à son e-commerce ayant contribué à une conversion de +22% sur les produits recommandés.",
        },
        {
          sector: "Services financiers",
          situation: "Un établissement devait croiser les données de 4 systèmes legacy sans les remplacer.",
          result: "Une couche d'intégration sur mesure a unifié les données sans toucher aux systèmes cœur.",
        },
      ],
      reviews: [
        { quote: "Ils nous ont livré quelque chose que notre propre équipe technique pouvait comprendre et maintenir, pas une boîte noire.", role: "CTO, industrie et manufacture" },
        { quote: "Le seul fournisseur qui nous a prévenus qu'une partie du projet n'avait pas de sens, plutôt que de la facturer quand même.", role: "Directeur Technologie, services financiers" },
      ],
    },
    {
      category: "Conseil",
      title: "Aide au Recrutement",
      tagline: "Trouvez le profil IA ou data dont vous avez besoin, évalué par des spécialistes.",
      intro:
        "Recruter des profils IA et data est difficile quand la personne qui mène l'entretien ne maîtrise pas le sujet. Nous évaluons techniquement les candidats en phase finale pour que la décision de recrutement ne repose pas uniquement sur un bon entretien.",
      description: [
        "Nous ne sommes pas un cabinet de recrutement classique. Nous intervenons dans le processus que vous avez déjà, avec votre propre équipe RH ou cabinet, au moment de l'évaluation technique : tests pratiques, entretiens techniques et validation d'une expérience réelle en projets IA.",
        "Nous aidons aussi à définir le bon profil avant la publication de l'offre, en évitant l'erreur classique de rechercher un « mouton à cinq pattes » combinant cinq spécialités distinctes en une seule personne.",
      ],
      includes: [
        "Définition du profil technique réel dont vous avez besoin",
        "Conception de tests techniques spécifiques au poste",
        "Entretiens techniques avec des spécialistes IA et data",
        "Rapport objectif des forces et risques par candidat",
        "Accompagnement dans la négociation des conditions techniques",
      ],
      examples: [
        {
          sector: "Industrie",
          situation: "Un industriel cherchait depuis 4 mois un « profil IA » sans savoir si les candidats étaient réellement solides.",
          result: "Le recrutement a abouti en 3 semaines après avoir redéfini le profil réellement recherché.",
        },
        {
          sector: "Services financiers",
          situation: "Une équipe RH non technique devait choisir entre 3 finalistes pour un poste de Data Scientist.",
          result: "L'évaluation technique a écarté le candidat le meilleur à l'entretien mais dont l'expérience était surestimée sur le CV.",
        },
      ],
      reviews: [
        { quote: "Ils nous ont évité de recruter un candidat parfait à l'entretien mais qui n'a pas passé le test technique.", role: "Directrice RH, industrie" },
        { quote: "Enfin quelqu'un qui sait quoi demander lors d'un vrai entretien technique IA.", role: "Responsable Talents, services financiers" },
      ],
    },
    {
      category: "Stratégie",
      title: "Département IA Externe",
      tagline: "Votre capacité IA sans avoir à recruter une équipe interne.",
      intro:
        "Pour beaucoup d'entreprises, monter une équipe IA interne n'est ni viable ni nécessaire pour l'instant. Nous agissons comme votre département IA externalisé : stratégie, mise en œuvre et maintenance, avec la même proximité qu'une équipe interne.",
      description: [
        "Un seul interlocuteur qui connaît votre entreprise, vos systèmes et vos priorités, plutôt que de devoir coordonner plusieurs fournisseurs ponctuels pour chaque nouveau projet.",
        "Nous fonctionnons avec des points d'étape réguliers, une feuille de route partagée et la flexibilité d'ajuster le niveau d'engagement selon les besoins de chaque phase de l'entreprise.",
      ],
      includes: [
        "Feuille de route IA partagée et revue périodiquement",
        "Exécution continue de projets, pas seulement du conseil ponctuel",
        "Maintenance et évolution des solutions déjà déployées",
        "Un seul interlocuteur qui connaît votre entreprise en profondeur",
        "Engagement flexible selon la phase et les besoins de l'entreprise",
      ],
      examples: [
        {
          sector: "Retail",
          situation: "Une chaîne retail moyenne n'avait pas le volume pour justifier une équipe IA interne de 5 personnes.",
          result: "Avec un engagement externe de 2 jours par semaine, ils maintiennent 4 solutions IA en production et continuent d'ajouter de nouveaux cas d'usage.",
        },
        {
          sector: "Services professionnels",
          situation: "Un cabinet en expansion avait besoin d'une capacité IA capable de croître avec lui sans recrutements anticipés.",
          result: "L'engagement est passé de 1 à 3 jours par semaine en 8 mois, aligné sur la croissance réelle de l'entreprise.",
        },
      ],
      reviews: [
        { quote: "C'est comme avoir notre propre département IA, sans l'incertitude de recruter trop tôt.", role: "Directrice Générale, retail" },
        { quote: "Ils connaissent notre entreprise mieux que beaucoup d'employés internes à ce stade.", role: "Associé, services professionnels" },
      ],
    },
    {
      category: "Conseil",
      badge: "Unique en Espagne",
      title: "Conseil Juridique et Réglementaire",
      tagline: "Conformité réglementaire pour vos systèmes IA, sans freiner l'innovation.",
      intro:
        "Nous sommes l'une des rares équipes en Espagne à combiner conseil juridique AI Act et RGPD avec la mise en œuvre technique de l'IA, dans un seul contrat et avec un seul interlocuteur.",
      description: [
        "Le AI Act classe vos systèmes IA par niveau de risque et impose des obligations différentes selon cette classification. La plupart des entreprises ne savent pas encore dans quelle catégorie elles se trouvent ni ce qu'elles doivent faire.",
        "Nous travaillons main dans la main avec votre équipe juridique — ou faisons office d'équipe juridique si vous n'en avez pas — pour que la conformité ne soit pas un frein aux projets, mais un critère intégré dès la conception de chaque solution.",
      ],
      includes: [
        "Classification de vos systèmes IA par niveau de risque (AI Act)",
        "Identification des obligations légales qui vous concernent",
        "Mémorandum de conformité actionnable",
        "Révision des contrats avec les fournisseurs IA",
        "Coordination entre l'équipe juridique et l'équipe technique",
      ],
      examples: [
        {
          sector: "Services financiers",
          situation: "Un établissement financier ne savait pas si son système de scoring de risque était « à haut risque » selon le AI Act.",
          result: "Il a été correctement classé et un plan de mise en conformité avec des délais précis a été défini avant l'entrée en vigueur.",
        },
        {
          sector: "Ressources Humaines",
          situation: "Une entreprise utilisait un outil IA pour présélectionner des candidats sans en avoir évalué les implications légales.",
          result: "Le processus a été ajusté et la conformité documentée avant que cela ne devienne un risque.",
        },
        {
          sector: "Industrie",
          situation: "Un fournisseur d'IA industrielle ne voulait pas assumer de responsabilité contractuelle sur la conformité réglementaire.",
          result: "Le contrat a été renégocié pour répartir correctement les obligations légales entre les parties.",
        },
      ],
      reviews: [
        { quote: "Nous avions deux prestataires distincts pour le technique et le juridique qui ne se parlaient même pas. Ici, c'est une seule équipe.", role: "Directrice Juridique, services financiers" },
        { quote: "Ils nous ont expliqué le AI Act avec des termes que le comité comprenait, pas du jargon juridique.", role: "Directrice RH, ressources humaines" },
        { quote: "Le seul fournisseur qui nous a fait revoir un contrat avec un tiers pour nous protéger juridiquement.", role: "Directeur des Achats, industrie" },
      ],
    },
  ] as ServiceContent[],
  serviceHub: {
    backLink: "Tous les services",
    ctaPrimary: "Réserver un appel gratuit",
    ctaSecondary: "Voir les 8 services",
    whatWeSolve: "Ce que nous résolvons",
    whatIncludes: "Ce qui est inclus",
    useCasesLabel: "Cas d'usage",
    useCasesHeading: "Exemples d'application concrets",
    useCasesSubtext: "Des situations représentatives d'entreprises avec lesquelles nous avons travaillé sur ce service. Les noms restent anonymes pour des raisons de confidentialité.",
    situationLabel: "Situation",
    resultLabel: "Résultat",
    reviewsLabel: "Avis",
    reviewsHeading: "Ce qu'en disent ceux qui ont déjà travaillé ainsi",
    ctaHeading: "On parle de votre cas concret ?",
    ctaText: "Un appel de 30 minutes, sans engagement, pour voir si {service} correspond à ce dont vous avez besoin en ce moment.",
  },
};

export default fr;
