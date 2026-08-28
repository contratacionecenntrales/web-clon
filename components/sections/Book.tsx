import type { Dictionary } from "@/i18n/dictionaries/es";

export function Book({ dict }: { dict: Dictionary["book"] }) {
  return (
    <section className="book" id="libro">
        <div className="container book__inner">
          <div className="book__cover reveal">
            <div className="book__cover-glow"></div>
            <div className="book__cover-card">
              <div className="book__cover-band book__cover-band--top"></div>
              <h3>{dict.coverTitlePre}<br /><span className="text-gradient-yellow">{dict.coverTitleHighlight}</span></h3>
              <p className="book__cover-edition">{dict.coverEdition}</p>
              <div className="book__cover-band book__cover-band--bottom">
                <p>{dict.coverSubtitle}</p>
              </div>
              <span className="book__cover-author">{dict.coverAuthor}</span>
            </div>
          </div>
          <div className="book__content reveal" data-reveal-delay="100">
            <span className="label">{dict.badge}</span>
            <h2 className="section-heading">{dict.heading}</h2>
            <p className="section-subtext">
              {dict.bodyPre}<strong>{dict.bodyStrong}</strong>{dict.bodyPost}
            </p>
            <ul className="check-list">
              {dict.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a href="#contacto" className="btn btn--primary">
                {dict.ctaPrimary}
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#libro" className="btn btn--outline">{dict.ctaSecondary}</a>
            </div>
          </div>
        </div>
      </section>
  );
}
