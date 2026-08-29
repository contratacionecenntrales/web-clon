import { Download } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/es";

export function Book({ dict }: { dict: Dictionary["book"] }) {
  return (
    <section className="book" id="libro">
        <div className="container book__inner">
          <div className="book__cover reveal">
            <div className="book__cover-glow"></div>
            <div className="book3d">
              <div className="book3d__spine" aria-hidden="true"></div>
              <div className="book3d__cover">
                <svg className="book3d__network" aria-hidden="true" viewBox="0 0 250 340" fill="none">
                  <g stroke="#d9b84a" strokeWidth="0.6">
                    <path d="M20 60 L90 30 L160 70 L230 40" />
                    <path d="M20 60 L60 140 L160 70" />
                    <path d="M60 140 L90 30" />
                    <path d="M40 260 L110 220 L190 270 L230 230" />
                    <path d="M110 220 L160 70" />
                  </g>
                  <g fill="#d9b84a">
                    <circle cx="20" cy="60" r="3" /><circle cx="90" cy="30" r="3" /><circle cx="160" cy="70" r="3" />
                    <circle cx="230" cy="40" r="3" /><circle cx="60" cy="140" r="3" /><circle cx="40" cy="260" r="3" />
                    <circle cx="110" cy="220" r="3" /><circle cx="190" cy="270" r="3" /><circle cx="230" cy="230" r="3" />
                  </g>
                </svg>
                <span className="book3d__eyebrow">{dict.coverEyebrow}</span>
                <h3 className="book3d__title">{dict.coverTitle}</h3>
                <p className="book3d__subtitle">{dict.coverSubtitle}</p>
                <span className="book3d__author">{dict.coverAuthor}</span>
              </div>
              <div className="book3d__pages" aria-hidden="true"></div>
            </div>
          </div>
          <div className="book__content reveal" data-reveal-delay="100">
            <span className="label">{dict.badge}</span>
            <h2 className="section-heading">{dict.heading}</h2>
            <p className="section-subtext">
              {dict.bodyPre}<strong>{dict.bodyStrong}</strong>{dict.bodyPost}
            </p>
            <ul className="check-list check-list--gold">
              {dict.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a href="#contacto" className="btn btn--gold btn--lg">
                {dict.ctaPrimary}
                <Download aria-hidden="true" size={17} />
              </a>
              <span className="btn-row__note">{dict.ctaNote}</span>
            </div>
          </div>
        </div>
      </section>
  );
}
