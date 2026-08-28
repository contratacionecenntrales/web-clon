import { FAQ } from "@/components/ui/faq-tabs";
import type { Dictionary } from "@/i18n/dictionaries/es";

export function Faq({ dict }: { dict: Dictionary["faq"] }) {
  const faqData = { general: dict.general, proceso: dict.proceso };
  return (
    <section className="faq" id="faq">
      <FAQ
        title={dict.title}
        subtitle={dict.label}
        categories={dict.categories}
        faqData={faqData}
        className="mx-auto max-w-5xl bg-transparent px-5 py-0"
      />
      <div className="container">
        <div className="faq__footer">
          <p>{dict.footerText}</p>
        </div>
      </div>
    </section>
  );
}
