import { FAQ } from "@/components/ui/faq-tabs";

const categories = {
  general: "General",
  proceso: "Proceso y garantías",
};

const faqData = {
  general: [
    {
      question: "¿Qué es Labs24k?",
      answer:
        "Somos una firma de consultoría especializada en inteligencia artificial para empresas: implementación técnica de IA y asesoramiento legal AI Act + GDPR integrados bajo un mismo contrato.",
    },
    {
      question: "¿Necesito conocimientos técnicos para contratar vuestros servicios?",
      answer:
        "No. Traducimos la tecnología a decisiones de negocio y nos encargamos de la ejecución técnica de principio a fin.",
    },
    {
      question: "¿Con qué herramientas de IA trabajáis?",
      answer:
        "Somos agnósticos de proveedor: elegimos el modelo y la infraestructura (OpenAI, Anthropic, Google, open source) según el caso de uso, coste y requisitos de cumplimiento.",
    },
    {
      question: "¿Trabajáis con empresas fuera de España?",
      answer:
        "Sí, tenemos proyectos activos en España, Andorra, Europa y Latinoamérica, en remoto y presencial.",
    },
  ],
  proceso: [
    {
      question: "¿Cuánto tiempo tarda en verse el retorno?",
      answer:
        "La mayoría de nuestros proyectos muestran resultados medibles en semanas, gracias a un alcance acotado y entregables por fase.",
    },
    {
      question: "¿Qué garantías ofrecéis?",
      answer:
        "Cada fase tiene un entregable y un criterio de avance claro definido antes de empezar, para que sepas exactamente qué recibes y cuándo.",
    },
    {
      question: "¿Cómo doy el primer paso?",
      answer:
        "Agenda una llamada gratuita de 30 minutos. Te diremos con honestidad si podemos ayudarte y por dónde empezar.",
    },
  ],
};

export function Faq() {
  return (
    <section className="faq" id="faq">
      <FAQ
        title="Lo que suelen preguntarnos"
        subtitle="Preguntas frecuentes"
        categories={categories}
        faqData={faqData}
        className="mx-auto max-w-5xl bg-transparent px-5 py-0"
      />
      <div className="container">
        <div className="faq__footer">
          <p>¿Tienes más preguntas? Habla con nosotros directamente.</p>
        </div>
      </div>
    </section>
  );
}
