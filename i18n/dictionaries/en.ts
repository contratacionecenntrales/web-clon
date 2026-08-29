import type { ServiceContent } from "../service-content";
import type { Dictionary } from "./es";

const en: Dictionary = {
  meta: {
    title: "Labs24k | AI Consulting and Automation",
    description:
      "AI implementation and AI Act + GDPR legal advisory under a single partner. Get your company ready for the AI Act's August 2026 deadline. Free 30-minute call.",
  },
  nav: {
    skipLink: "Skip to content",
    servicios: "Services",
    sectores: "Industries",
    metodologia: "Methodology",
    clientes: "Clients",
    libro: "The book",
    libroGratis: "Free",
    aiAct: "AI Act",
    nosotros: "About us",
    blog: "Blog",
    contacto: "Contact",
    llamadaGratuita: "Free call",
    abrirMenu: "Open menu",
    inicio: "Labs24k - Home",
  },
  banner: {
    tag: "AI Act",
    textPre: "The AI Act ",
    textStrong: "is now in force",
    textPost: ". Is your company compliant?",
    cta: "Calculate exposure",
    cerrar: "Close notice",
  },
  hero: {
    eyebrow: "AI + Legal Consulting · AI Act 2024/1689",
    titleLine1: "We make AI work in your company.",
    titleLine2: "And keep it compliant.",
    subtitle:
      "Strategy, technical implementation and AI Act + GDPR legal advisory under a single contract. Measurable results in weeks, not years.",
    ctaPrimary: "Book a free call",
    ctaSecondary: "See all 8 services",
    meta: ["No commitment · 30 min", "Reply within 24 h", "Confidential"],
    visual: {
      panelLabel: "Labs24k · AI Panel",
      chatMessage: "I've identified 3 automations with an estimated 4x ROI in your operation.",
      metrics: [
        { label: "AI Act compliance", value: "92%" },
        { label: "Process automation", value: "78%" },
        { label: "Team adoption", value: "85%" },
      ],
      caption1: "AI Act compliance built in",
      caption2: "+200 executives already trained",
    },
    stats: [
      { number: "+200", label: "Training", desc: "executives trained · NPS 4.8 / 5" },
      { number: "−65%", label: "Industry", desc: "time spent on commercial proposals" },
      { number: "+22%", label: "Retail", desc: "conversion on recommended products" },
    ],
    scroll: "Scroll",
  },
  logosStrip: {
    ariaLabel: "Industries we work in",
    label: "Industries we've already worked with",
    items: ["Education", "Industry", "Retail", "Professional Services", "Sports", "Technology"],
  },
  book: {
    badge: "Free book · Living Edition",
    coverTitlePre: "THE AI",
    coverTitleHighlight: "METHOD",
    coverEdition: "Living Edition",
    coverSubtitle: "How to build and scale companies with artificial intelligence",
    coverAuthor: "Labs24k Team",
    heading: "The AI Method: the system to make AI deliver results",
    bodyPre: "95% of AI pilots never generate a return. ",
    bodyStrong: "The AI Method",
    bodyPost:
      " is the open-source, living book that takes artificial intelligence from pilot to P&L. Built for decision-makers. Free.",
    checklist: [
      "14 chapters with decision frameworks for leadership and the board",
      "Backed by evidence from Deloitte, PwC, McKinsey and MIT",
      "Living Edition: open source and updated with the Editorial Board",
    ],
    ctaPrimary: "Download the book for free",
    ctaSecondary: "See what's inside",
  },
  services: {
    label: "Services",
    heading: "Where are you right now? We'll take you to the next stage.",
    subtext:
      "Eight services organized by your company's AI maturity — from the first diagnosis to a fully outsourced AI department.",
    moments: [
      { title: "You're starting out or exploring", desc: "You're new to AI, or you've run pilots without a clear result." },
      { title: "You're implementing or rolling out", desc: "You know what you want to do and need to execute it." },
      { title: "You're scaling or operating", desc: "You have AI in production and need structure." },
    ],
    momentoLabel: "Stage",
    complianceBox: {
      tag: "EU Regulation 2024/1689 · in force",
      eyebrow: "Compliance · AI Act & GDPR",
      title: "AI Compliance Diagnosis",
      desc: "We classify your AI systems, identify the obligations that apply to you, and deliver an actionable compliance memorandum.",
      note: "Compliance memorandum in 2 weeks",
      cta: "Assess my exposure →",
    },
    footer: {
      text: "Don't identify with any of the three stages?",
      text2: "Tell us about your situation on a free 30-minute call and we'll point you in the right direction.",
      cta: "Talk to us →",
    },
  },
  clients: {
    label: "Success stories",
    heading: "Real cases. Concrete results.",
    subtext: "Projects that went from idea to production, with metrics clients are happy to share.",
    cards: [
      {
        logo: "Client 01",
        title: "Executive training",
        sector: "Education",
        metric: "+200 executives trained. NPS 4.8 out of 5.",
        desc: "We designed and delivered the AI program for executives in their executive education division, with real use cases applied to business decision-making.",
        tag: "Custom Training",
      },
      {
        logo: "Client 02",
        title: "Industrial manufacturer",
        sector: "Industry",
        metric: "−65% time spent generating commercial proposals.",
        desc: "We automated the generation of technical proposals from client requirements, freeing up the technical team for higher-value work.",
        tag: "Intelligent Chatbots",
      },
      {
        logo: "Client 03",
        title: "Retail brand",
        sector: "Retail & E-commerce",
        metric: "+22% conversion on recommended products.",
        desc: "We implemented a conversational assistant with a product recommender integrated into their online store and WhatsApp Business, cutting manual inquiries by 40%.",
        tag: "Intelligent Chatbots",
      },
      {
        logo: "Client 04",
        title: "Professional services firm",
        sector: "Professional Services",
        metric: "85% AI tool adoption within 60 days.",
        desc: "A 3-tier training program for 80 people with personalized follow-up over 6 weeks.",
        tag: "Custom Training",
      },
      {
        logo: "Client 05",
        title: "Sports brand",
        sector: "Sports Industry",
        metric: "+45% qualified leads. −3h/week on manual tasks.",
        desc: "An automatic project-qualification chatbot integrated into their corporate website, connected directly to the CRM.",
        tag: "Intelligent Chatbots",
      },
      {
        logo: "Client 06",
        title: "Tech company",
        sector: "Technology",
        metric: "3 automation opportunities identified. Estimated 4x ROI.",
        desc: "Phase 0 strategic consulting to identify and prioritize the highest-potential AI use cases.",
        tag: "AI Consulting",
      },
    ],
  },
  whyus: {
    label: "Why us",
    headingPre: "Why ",
    headingHighlight: "Labs24k",
    subtext: "Many companies talk about AI. Few have the technical capacity and business focus to actually deliver it.",
    cards: [
      {
        number: "01",
        title: "Strategy and execution",
        desc: "We don't stop at recommendations: we can train, implement, support and scale. One single point of contact, from start to finish.",
      },
      {
        number: "02",
        title: "Business-first approach",
        desc: "We prioritize impact, adoption and return — not technology for technology's sake. We always start with the real problem.",
      },
      {
        number: "03",
        title: "Real capability, not hype",
        desc: "From consulting to automation, AI assistants, analytics or custom builds. We have the technical team to execute what we propose.",
      },
      {
        number: "04",
        title: "Partner flexibility",
        desc: "We can work on a one-off basis or as an ongoing external team. We adapt to what you need at each stage.",
      },
      {
        number: "05",
        title: "Speed with judgment",
        desc: "We look for the shortest path between the real problem and a solution that creates value. Visible results in weeks, not months.",
      },
    ],
  },
  founder: {
    imgAlt: "Labs24k leadership team",
    captionRole: "Founding team",
    captionName: "Labs24k",
    label: "Led by",
    heading: "Behind every project, a team that puts its name on the line",
    subtext:
      "Working with Labs24k isn't hiring a brand. It's working with a team led by real people who respond, execute and put their name on the work.",
    bio: "We lead strategy, client relationships and project execution, with a focus on innovation, growth and technology applied to real business outcomes.",
    checklist: [
      "Team specialized in AI applied to business",
      "Multi-sector innovation and technology projects",
      "End-to-end support, no intermediaries",
    ],
    linkedin: "View profile on LinkedIn →",
  },
  methodology: {
    label: "Methodology",
    heading: "Four phases. One deliverable per phase. Zero projects that die in a drawer.",
    subtext: "Every phase has a concrete deliverable and a clear go/no-go criterion. No improvisation, no projects that never end.",
    activitiesLabel: "Key activities",
    deliverableLabel: "Deliverable",
    phases: [
      {
        tag: "Phase 01",
        title: "Diagnosis",
        desc: "We analyze your processes, data and current context to identify where AI can generate real impact, not theoretical impact.",
        activities: ["Process and data audit", "Interviews with key stakeholders", "Prioritized opportunity map"],
        deliverable: "AI maturity report + roadmap",
      },
      {
        tag: "Phase 02",
        title: "Strategic prioritization",
        desc: "We select the use cases with the highest return, the lowest risk and the strongest alignment with your goals.",
        activities: ["Technical feasibility assessment", "Return estimation per case", "Selection with leadership"],
        deliverable: "Prioritized plan with KPIs and timeline",
      },
      {
        tag: "Phase 03",
        title: "Implementation",
        desc: "We execute: team training, chatbot deployment, automations or custom builds. With defined deliverables and deadlines.",
        activities: ["Technical development and deployment", "Client team training", "Integration with internal systems"],
        deliverable: "Solution in production + trained team",
      },
      {
        tag: "Phase 04",
        title: "Scale and evolve",
        desc: "We measure results, iterate and expand what works. The goal is to build a capability that grows with your company.",
        activities: ["Real-time impact metrics", "Iteration on what works", "Extension to new processes"],
        deliverable: "Results dashboard + continuous improvement",
      },
    ],
    footerText: "We always start with a free call to understand your situation before proposing any service.",
    footerCta: "Talk to an expert",
  },
  sectors: {
    label: "Industries",
    heading: "Every industry has its own challenges. We know which ones AI solves — and which it doesn't.",
    subtext: "We know the real problems these industries face, and the solutions that actually move the needle.",
    cards: [
      {
        title: "Retail & E-commerce",
        desc: "Sales assistants, product recommenders and customer service automation to sell more with less manual effort.",
        link: "See solutions for retail & e-commerce",
      },
      {
        title: "Industry & Manufacturing",
        desc: "Automation of technical proposals, production process optimization and analytics to make decisions with real data.",
        link: "See solutions for industry & manufacturing",
      },
      {
        title: "Education & Training",
        desc: "AI programs adapted by level and role so teams adopt AI tools from day one, not as theory.",
        link: "See solutions for education & training",
      },
      {
        title: "Logistics & Distribution",
        desc: "Elimination of manual reporting, real-time dashboards and systems integration for faster, more reliable operations.",
        link: "See solutions for logistics & distribution",
      },
      {
        title: "Professional Services",
        desc: "Automation of administrative tasks, document generation and AI adoption to do more with the same team.",
        link: "See solutions for professional services",
      },
      {
        title: "Financial Sector",
        desc: "Document automation with traceability, regulatory compliance (AI Act, DORA) and specialized training for banking, insurance and fintech.",
        link: "See solutions for the financial sector",
      },
    ],
  },
  faq: {
    label: "FAQ",
    title: "Questions we often get asked",
    categories: { general: "General", proceso: "Process & guarantees" },
    general: [
      {
        question: "What is Labs24k?",
        answer:
          "We're a consulting firm specialized in artificial intelligence for businesses: technical AI implementation and AI Act + GDPR legal advisory, integrated under a single contract.",
      },
      {
        question: "Do I need technical knowledge to hire your services?",
        answer: "No. We translate technology into business decisions and handle the technical execution end to end.",
      },
      {
        question: "Which AI tools do you work with?",
        answer:
          "We're vendor-agnostic: we choose the model and infrastructure (OpenAI, Anthropic, Google, open source) based on the use case, cost and compliance requirements.",
      },
      {
        question: "Do you work with companies outside Spain?",
        answer: "Yes, we have active projects in Spain, Andorra, Europe and Latin America, both remote and on-site.",
      },
    ],
    proceso: [
      {
        question: "How long before I see a return?",
        answer: "Most of our projects show measurable results within weeks, thanks to a tightly scoped approach and phase-by-phase deliverables.",
      },
      {
        question: "What guarantees do you offer?",
        answer: "Every phase has a deliverable and a clear go/no-go criterion defined before we start, so you know exactly what you'll get and when.",
      },
      {
        question: "How do I take the first step?",
        answer: "Book a free 30-minute call. We'll tell you honestly whether we can help and where to start.",
      },
    ],
    footerText: "Still have questions? Talk to us directly.",
  },
  contact: {
    label: "Contact",
    heading: "A 30-minute call can give you more clarity than months of aimless trial and error",
    subtext:
      "Tell us about your situation and we'll tell you honestly whether we can help, where it would make sense to start, and what type of project fits you best.",
    meta: ["Free · No commitment", "Reply within 24 h", "100% confidential"],
    bookingTitle: "Book your free call",
    dividerText: "Prefer to write to us first?",
    form: {
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone",
      message: "What's your situation?",
      submit: "Send message",
      success: "Thank you! We've received your request and will get back to you within 24h.",
      emailSubjectPrefix: "New website inquiry -",
      emailNoName: "No name",
      emailFields: { name: "Name", company: "Company", email: "Email", phone: "Phone", situation: "Situation:" },
    },
  },
  footer: {
    tagline: "Innovation, growth and technology: results, not presentations.",
    servicesHeading: "Services",
    companyHeading: "Company",
    companyLinks: [
      { label: "Services", href: "/#servicios" },
      { label: "Methodology", href: "/#metodologia" },
      { label: "Clients", href: "/#clientes" },
      { label: "About us", href: "/#nosotros" },
      { label: "The book", href: "/#libro" },
      { label: "AI Act", href: "/#legal" },
      { label: "Free call", href: "/#contacto" },
      { label: "Contact", href: "/#contacto" },
    ],
    contactHeading: "Contact",
    note: "Innovation, growth and technology",
    rights: "All rights reserved.",
    legalLinks: [
      { label: "Legal notice", href: "/aviso-legal" },
      { label: "Privacy policy", href: "/privacidad" },
      { label: "Cookies", href: "/cookies" },
    ],
    scrollTop: "Back to top",
    language: "Language",
  },
  serviceContent: [
    {
      category: "Strategy",
      title: "AI Audit",
      tagline: "A complete X-ray of your organization's AI maturity, risks and opportunities.",
      intro:
        "Before investing in AI, you need to know exactly where you stand. The AI Audit is a two-week diagnosis that maps your processes, data, tools and team to give you an honest picture of your AI maturity.",
      description: [
        "We interview the people responsible for each area, review your current systems and workflows, and analyze which processes are genuine candidates for automation or AI assistance — and which aren't yet.",
        "The result isn't a generic 80-page report nobody reads. It's an actionable document with opportunities ranked by impact and effort, the regulatory risks you need to watch, and a prioritized roadmap for the next 12 months.",
      ],
      includes: [
        "Interviews with department leads",
        "Mapping of current processes, data and tools",
        "Ranking of AI opportunities by impact and effort",
        "Identification of AI Act risks and obligations",
        "Prioritized 12-month roadmap",
        "Results presentation session with the committee",
      ],
      examples: [
        {
          sector: "Industry & manufacturing",
          situation: "A mid-size production plant didn't know if its sensor data was good enough to predict equipment failures.",
          result: "The audit identified 3 lines with data already usable, and ruled out 2 initiatives that would have cost 6 months with no return.",
        },
        {
          sector: "Professional services",
          situation: "A professional services firm wanted to “add AI” without knowing where to start.",
          result: "4 use cases were prioritized in customer service and proposal generation, with an estimated ROI in under 90 days.",
        },
        {
          sector: "Retail",
          situation: "A mid-size retail chain had sales data scattered across 5 different systems.",
          result: "The diagnosis revealed the real bottleneck was data, not AI, and redirected the budget toward integrating it first.",
        },
      ],
      reviews: [
        { quote: "Finally someone gave us numbers on where it was worth investing and where it wasn't. We avoided two projects that were never going to work.", role: "Head of Operations, industry & manufacturing" },
        { quote: "I expected a more traditional consulting report. They gave us a plan we could start executing the following week.", role: "CEO, professional services firm" },
        { quote: "The AI Act risk diagnosis saved us from hiring a separate compliance firm.", role: "Head of Compliance, financial services" },
      ],
    },
    {
      category: "Strategy",
      title: "AI Consulting",
      tagline: "Define where to apply AI, what to prioritize, and how to turn it into an actionable plan.",
      intro:
        "Knowing what to do with AI is harder than executing it. We help translate business strategy into a concrete AI plan, with clear priorities and without locking you into a single technology vendor.",
      description: [
        "We work with leadership to understand the real business goals — growth, cost reduction, better service — and from there identify which AI applications make sense, in what order, and with what resources.",
        "We don't sell a specific technology. Our job is to be the independent judgment that evaluates options, negotiates with vendors when needed, and stops the company from investing in tools that don't fit its operational reality.",
      ],
      includes: [
        "Alignment workshops with leadership",
        "Use-case prioritization by business value",
        "Independent evaluation of vendors and tools",
        "Implementation plan with milestones and owners",
        "Support in key decision-making",
      ],
      examples: [
        {
          sector: "Logistics",
          situation: "A logistics company was torn between 3 different AI platforms offered by vendors.",
          result: "The consulting engagement showed none of them solved the real route-planning problem, and a cheaper custom solution was designed instead.",
        },
        {
          sector: "Education",
          situation: "An educational center wanted to “not fall behind” on AI without a clear objective.",
          result: "2 concrete focus areas were defined — family communication and teacher support — deferring everything else for now.",
        },
        {
          sector: "Financial services",
          situation: "A mid-size financial institution needed a 3-year AI plan for its board.",
          result: "A roadmap with 6 staged initiatives was delivered and approved on its first presentation to the board.",
        },
      ],
      reviews: [
        { quote: "They helped us say no to two projects that sounded good but didn't make sense for us. That's worth more than any report.", role: "General Manager, logistics" },
        { quote: "The first consultancy that didn't try to sell us their own tool.", role: "Head of Innovation, education" },
      ],
    },
    {
      category: "Training",
      title: "Custom Training",
      tagline: "Your team, ready to use AI with good judgment from day one.",
      intro:
        "AI only creates value if people know how to use it well. We design training programs tailored to each team's level and role — from executives to frontline staff — with practical cases from your own industry.",
      description: [
        "No generic “intro to AI” courses. Every program is built with exercises and tools relevant to attendees' day-to-day work: leadership committee, sales, customer service, operations.",
        "We combine in-person or online training with permanent reference materials, so learning doesn't stay in the session but turns into real, judgment-driven use in daily work.",
      ],
      includes: [
        "Prior assessment of each team's starting level",
        "Content adapted by role: leadership, middle management, frontline",
        "Practical cases with real tools from your industry",
        "Permanent reference materials after training",
        "Adoption measurement after training",
      ],
      examples: [
        {
          sector: "Retail",
          situation: "A retail chain trained 40 store managers who had never used AI tools before.",
          result: "92% started using the product recommendation assistant within the following two weeks.",
        },
        {
          sector: "Industry",
          situation: "An industrial company's leadership committee needed to know what to ask AI vendors.",
          result: "A half-day session prevented the purchase of a tool that didn't fit their systems.",
        },
        {
          sector: "Professional services",
          situation: "A professional firm wanted its junior staff to use AI without losing rigor in their work.",
          result: "Usage and review protocols were defined that are now part of the onboarding for new hires.",
        },
      ],
      reviews: [
        { quote: "Real training, not a motivational talk about AI. We walked out with concrete things to apply the next day.", role: "Head of Training, retail" },
        { quote: "They adapted the examples to our industry — it wasn't the typical canned training.", role: "Managing Partner, professional services" },
      ],
    },
    {
      category: "Implementation",
      title: "Intelligent Chatbots",
      tagline: "AI assistants for customer service, sales and operations, connected to your business.",
      intro:
        "We design and implement conversational assistants connected to your real systems — CRM, catalog, knowledge base — not an FAQ chatbot disconnected from the business.",
      description: [
        "Every chatbot is built on your own data and processes: it answers with real information from your catalog or knowledge base, escalates to a person when appropriate, and integrates with the tools you already use (CRM, WhatsApp Business, helpdesk).",
        "The goal isn't to replace people but to absorb repetitive volume so your team can focus on what genuinely requires human judgment.",
      ],
      includes: [
        "Conversation design adapted to your brand and tone",
        "Integration with CRM, catalog or knowledge base",
        "Escalation to a human when appropriate",
        "Connection to WhatsApp Business, web or app",
        "Dashboard for conversation and resolution metrics",
      ],
      examples: [
        {
          sector: "Retail & e-commerce",
          situation: "A retail brand received hundreds of repeated stock and size questions via WhatsApp.",
          result: "Automated 65% of those inquiries and cut response time from hours to seconds.",
        },
        {
          sector: "Professional services",
          situation: "A firm wanted to filter and qualify leads before they reached a salesperson.",
          result: "The assistant now qualifies automatically and only forwards genuinely good-fit leads, cutting low-value meetings by 40%.",
        },
        {
          sector: "Logistics",
          situation: "A logistics company received many calls just to check shipment status.",
          result: "An assistant connected to the tracking system resolved 70% of those inquiries with no human involved.",
        },
      ],
      reviews: [
        { quote: "It's not a boilerplate chatbot — it answers with real data from our catalog. Customers don't even notice they're talking to an assistant.", role: "Head of Brand, retail & e-commerce" },
        { quote: "It integrated with our CRM without any drama, faster than we expected.", role: "Head of Customer Service, logistics" },
      ],
    },
    {
      category: "Implementation",
      title: "Custom Builds",
      tagline: "AI, automation and data when no off-the-shelf solution is enough.",
      intro:
        "When the problem is specific to your business, a generic tool isn't enough. We build custom solutions — from prediction models to complex data integrations — working alongside your technical team or as an external one.",
      description: [
        "We work as an extension of your technical team, with the same engineering practices you'd expect internally: version control, testing, documentation and supervised deployment.",
        "We don't create dependency on a black box. We document and transfer knowledge, so if you want to bring maintenance in-house later, you can do it without friction.",
      ],
      includes: [
        "Technical feasibility analysis before committing budget",
        "Development with standard engineering practices (version control, testing)",
        "Integration with your existing systems and data sources",
        "Complete documentation and knowledge transfer",
        "Support and maintenance after deployment",
      ],
      examples: [
        {
          sector: "Industry & manufacturing",
          situation: "A plant needed to predict machinery failures using its own sensor data.",
          result: "A predictive maintenance model that cut unplanned downtime by 30%.",
        },
        {
          sector: "Retail",
          situation: "A chain needed its own product recommendation engine, not a generic one.",
          result: "A system integrated into their e-commerce that contributed to a +22% conversion on recommended products.",
        },
        {
          sector: "Financial services",
          situation: "An institution needed to cross-reference data from 4 legacy systems without replacing them.",
          result: "A custom integration layer unified the data without touching the core systems.",
        },
      ],
      reviews: [
        { quote: "They delivered something our own technical team could understand and maintain, not a black box.", role: "CTO, industry & manufacturing" },
        { quote: "The only vendor that told us part of the project didn't make sense, instead of billing for it anyway.", role: "Head of Technology, financial services" },
      ],
    },
    {
      category: "Advisory",
      title: "Hiring Support",
      tagline: "Find the AI or data talent you need, evaluated by specialists.",
      intro:
        "Hiring AI and data talent is hard when the interviewer doesn't know the field. We technically evaluate final-round candidates so the hiring decision doesn't rest on a good interview alone.",
      description: [
        "We're not a typical staffing agency. We plug into the process you already have — with your own HR team or agency — at the technical evaluation stage: practical tests, technical interviews and validation of real AI project experience.",
        "We also help define the right profile before the role is posted, avoiding the common mistake of asking for a “unicorn” who combines five distinct specialties in one person.",
      ],
      includes: [
        "Definition of the real technical profile you need",
        "Design of role-specific technical tests",
        "Technical interviews with AI and data specialists",
        "Objective report of each candidate's strengths and risks",
        "Support negotiating technical terms",
      ],
      examples: [
        {
          sector: "Industry",
          situation: "An industrial company had been searching for an “AI profile” for 4 months without knowing if candidates were actually solid.",
          result: "The hire closed in 3 weeks after redefining the real profile they needed.",
        },
        {
          sector: "Financial services",
          situation: "A non-technical HR team had to choose between 3 finalists for a Data Scientist role.",
          result: "The technical evaluation ruled out the candidate who interviewed best but had inflated experience on their CV.",
        },
      ],
      reviews: [
        { quote: "They stopped us from hiring a candidate who sounded perfect in the interview but couldn't pass the technical test.", role: "Head of HR, industry" },
        { quote: "Finally someone who knows what to actually ask in a technical AI interview.", role: "Head of Talent, financial services" },
      ],
    },
    {
      category: "Strategy",
      title: "External AI Department",
      tagline: "Your AI capability without hiring an in-house team.",
      intro:
        "For many companies, building an in-house AI team isn't viable or necessary yet. We act as your outsourced AI department: strategy, implementation and maintenance, with the same closeness as an in-house team.",
      description: [
        "A single point of contact who knows your business, your systems and your priorities, instead of having to coordinate several one-off vendors for every new project.",
        "We work through regular check-ins, a shared roadmap, and the flexibility to scale the level of dedication up or down depending on what each stage of the business needs.",
      ],
      includes: [
        "Shared AI roadmap, reviewed periodically",
        "Ongoing project execution, not just one-off consulting",
        "Maintenance and evolution of already-deployed solutions",
        "A single point of contact who deeply knows your business",
        "Flexible dedication based on business stage and need",
      ],
      examples: [
        {
          sector: "Retail",
          situation: "A mid-size retail chain didn't have the volume to justify a 5-person in-house AI team.",
          result: "With 2 days a week of external dedication, they maintain 4 AI solutions in production and keep adding new use cases.",
        },
        {
          sector: "Professional services",
          situation: "A growing firm needed AI capacity that could scale with it without hiring ahead of demand.",
          result: "Dedication scaled from 1 to 3 days a week over 8 months, matching the business's actual growth.",
        },
      ],
      reviews: [
        { quote: "It's like having our own AI department, without the uncertainty of hiring too early.", role: "General Manager, retail" },
        { quote: "They know our business better than many internal employees at this point.", role: "Partner, professional services" },
      ],
    },
    {
      category: "Advisory",
      badge: "Unique in Spain",
      title: "Legal & Regulatory Advisory",
      tagline: "Regulatory compliance for your AI systems, without slowing down innovation.",
      intro:
        "We're one of the few teams in Spain that combine AI Act and GDPR legal advisory with technical AI implementation, under a single contract and a single point of contact.",
      description: [
        "The AI Act classifies your AI systems by risk level and requires different obligations depending on that classification. Most companies still don't know which category they fall into or what they need to do about it.",
        "We work hand in hand with your legal team — or act as your legal team if you don't have one — so compliance isn't an obstacle that slows projects down, but a criterion built into the design of every solution.",
      ],
      includes: [
        "Classification of your AI systems by risk level (AI Act)",
        "Identification of the legal obligations that apply to you",
        "Actionable compliance memorandum",
        "Review of contracts with AI vendors",
        "Coordination between your legal and technical teams",
      ],
      examples: [
        {
          sector: "Financial services",
          situation: "A financial institution didn't know if its risk-scoring system counted as “high-risk” under the AI Act.",
          result: "It was correctly classified and an adequacy plan with concrete deadlines was set before the deadline took effect.",
        },
        {
          sector: "Human Resources",
          situation: "A company used an AI tool to pre-screen candidates without having assessed the legal implications.",
          result: "The process was adjusted and compliance documented before it became a risk.",
        },
        {
          sector: "Industry",
          situation: "An industrial AI vendor didn't want to take on contractual responsibility for regulatory compliance.",
          result: "The contract was renegotiated to correctly split legal obligations between the parties.",
        },
      ],
      reviews: [
        { quote: "We had two separate advisors for the technical and legal side who didn't even talk to each other. Here it's a single team.", role: "Legal Director, financial services" },
        { quote: "They explained the AI Act in terms the committee actually understood, not legal jargon.", role: "Head of HR, human resources" },
        { quote: "The only vendor that made us rethink a contract with a third party to protect ourselves legally.", role: "Head of Procurement, industry" },
      ],
    },
  ] as ServiceContent[],
  serviceHub: {
    backLink: "All services",
    ctaPrimary: "Book a free call",
    ctaSecondary: "See all 8 services",
    whatWeSolve: "What we solve",
    whatIncludes: "What's included",
    useCasesLabel: "Use cases",
    useCasesHeading: "Real-world application examples",
    useCasesSubtext: "Representative situations from companies we've worked with on this service. Names are kept anonymous for confidentiality.",
    situationLabel: "Situation",
    resultLabel: "Result",
    reviewsLabel: "Reviews",
    reviewsHeading: "What people who've already worked this way say",
    ctaHeading: "Want to talk about your specific case?",
    ctaText: "A free, no-commitment 30-minute call to see if {service} fits what you need right now.",
  },
};

export default en;
