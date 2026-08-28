import type { Dictionary } from "@/i18n/dictionaries/es";

export function WhyUs({ dict }: { dict: Dictionary["whyus"] }) {
  return (
    <section className="why section-ink-deep">
        <div className="container">
          <div className="section-head-split reveal">
            <div>
              <span className="label">{dict.label}</span>
              <h2 className="section-heading">{dict.headingPre}<span className="text-gradient-blue">{dict.headingHighlight}</span></h2>
            </div>
            <p className="section-subtext">{dict.subtext}</p>
          </div>

          <div className="why-grid">
            {dict.cards.map((card, i) => (
              <div className="why-card reveal" data-reveal-delay={i * 80} key={card.number}>
                <span className="why-card__number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
