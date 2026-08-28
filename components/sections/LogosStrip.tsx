import type { Dictionary } from "@/i18n/dictionaries/es";

export function LogosStrip({ dict }: { dict: Dictionary["logosStrip"] }) {
  return (
    <section className="logos-strip" aria-label={dict.ariaLabel}>
        <div className="container">
          <p className="logos-strip__label reveal">{dict.label}</p>
          <div className="logos-strip__row reveal" data-reveal-delay="100">
            {dict.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>
  );
}
