import type { Dictionary } from "@/i18n/dictionaries/es";

const LOGO_COLORS = ["#123a52", "#1c6e82", "#14b8be", "#0e5f70", "#1a8f96", "#0a2530"];

export function Clients({ dict }: { dict: Dictionary["clients"] }) {
  return (
    <section className="clients section-light" id="clientes">
        <div className="container">
          <div className="section-head-split reveal">
            <div>
              <span className="label-light">{dict.label}</span>
              <h2 className="display-title-dark">{dict.heading}</h2>
            </div>
            <p className="section-subtext-dark">{dict.subtext}</p>
          </div>

          <div className="client-grid">
            {dict.cards.map((card, i) => (
              <article className="client-card reveal" data-reveal-delay={(i % 3) * 80} key={card.logo}>
                <div className="client-card__logo" style={{ background: LOGO_COLORS[i] }}>
                  <span style={{ color: "#fff", fontWeight: 800, letterSpacing: "0.06em" }}>{card.logo}</span>
                </div>
                <div className="client-card__top">
                  <h3>{card.title}</h3>
                  <span>{card.sector}</span>
                </div>
                <p className="client-card__metric">{card.metric}</p>
                <p className="client-card__desc">{card.desc}</p>
                <span className="client-card__tag">{card.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
  );
}
