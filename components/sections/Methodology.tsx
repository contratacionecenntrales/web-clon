import type { CSSProperties } from "react";
import type { Dictionary } from "@/i18n/dictionaries/es";

const NODE_COLORS = ["#123a52", "#137988", "#14b8be", "#FBBF24"];
const NODE_ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
];

export function Methodology({ dict }: { dict: Dictionary["methodology"] }) {
  return (
    <section className="method" id="metodologia">
        <div className="container">
          <div className="section-head reveal">
            <span className="label">{dict.label}</span>
            <h2 className="section-heading">{dict.heading}</h2>
            <p className="section-subtext">{dict.subtext}</p>
          </div>

          <div className="phases">
            {dict.phases.map((phase, i) => (
              <div className="phase-row reveal" data-reveal-delay={i * 100} key={phase.tag}>
                <div className="phase-row__rail">
                  <div className={`phase-row__node${i === 3 ? " phase-row__node--last" : ""}`} aria-hidden="true" style={{ "--node-color": NODE_COLORS[i] } as CSSProperties}>
                    {NODE_ICONS[i]}
                  </div>
                </div>
                <div className="phase">
                  <span className="phase__tag">{phase.tag}</span>
                  <h3>{phase.title}</h3>
                  <p className="phase__desc">{phase.desc}</p>
                  <div className="phase__grid">
                    <div>
                      <p className="phase__label">{dict.activitiesLabel}</p>
                      <ul className="phase__list">
                        {phase.activities.map((activity) => (
                          <li key={activity}>{activity}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="phase__deliverable">
                      <span>{dict.deliverableLabel}</span>
                      <p>{phase.deliverable}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="method__footer reveal">
            <p>{dict.footerText}</p>
            <a href="#contacto" className="btn btn--primary">{dict.footerCta}</a>
          </div>
        </div>
      </section>
  );
}
