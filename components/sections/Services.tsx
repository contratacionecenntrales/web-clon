import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { LocalizedService } from "@/i18n/get-services";
import { localeHref } from "@/i18n/config";
import type { Locale } from "@/i18n/config";

export function Services({ dict, services, locale }: { dict: Dictionary["services"]; services: LocalizedService[]; locale: Locale }) {
  return (
    <section className="services section-light" id="servicios">
        <div className="container">
          <div className="section-head-split reveal">
            <div>
              <span className="label-light">{dict.label}</span>
              <h2 className="display-title-dark">{dict.heading}</h2>
            </div>
            <p className="section-subtext-dark">{dict.subtext}</p>
          </div>

          <div className="timeline">
            {dict.moments.map((moment, momentIndex) => {
              const momentId = String(momentIndex + 1).padStart(2, "0");
              const momentServices = services.filter((s) => s.momento === momentId);
              return (
                <div className="timeline__moment reveal" data-reveal-delay={momentIndex * 120} key={momentId}>
                  <div className="timeline__dot" style={{ "--dot-color": momentServices[0]?.accentColor } as CSSProperties}></div>
                  <span className="timeline__tag">{dict.momentoLabel} {momentId}</span>
                  <h3>{moment.title}</h3>
                  <p className="timeline__desc">{moment.desc}</p>
                  <div className="service-cards">
                    {momentServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link href={localeHref(locale, `/servicios/${service.slug}`)} className="service-card" key={service.slug}>
                          <div className="service-card__head">
                            <div className="service-card__icon" aria-hidden="true" style={{ "--icon-color": service.accentColor } as CSSProperties}>
                              <Icon size={20} />
                            </div>
                            <span className="service-card__category" style={{ color: service.categoryColor }}>{service.category}</span>
                            {service.badge ? <span className="service-card__badge-inline">{service.badge}</span> : null}
                          </div>
                          <h4>{service.title}</h4>
                          <p>{service.tagline}</p>
                          <span className="service-card__arrow" aria-hidden="true" style={{ "--icon-color": service.accentColor } as CSSProperties}>
                            <ArrowUpRight size={16} />
                          </span>
                        </Link>
                      );
                    })}

                    {momentId === "03" && (
                      <article className="service-card service-card--highlight" id="legal">
                        <div className="compliance-box">
                          <div className="compliance-box__radar" aria-hidden="true">
                            <span className="compliance-box__ring compliance-box__ring--1"></span>
                            <span className="compliance-box__ring compliance-box__ring--2"></span>
                          </div>
                          <span className="compliance-box__tag"><span className="ping-dot ping-dot--amber" aria-hidden="true"></span>{dict.complianceBox.tag}</span>
                          <div className="compliance-box__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                          </div>
                          <span className="compliance-box__eyebrow">{dict.complianceBox.eyebrow}</span>
                          <h5>{dict.complianceBox.title}</h5>
                          <p>{dict.complianceBox.desc}</p>
                          <p className="compliance-box__note">
                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                            {dict.complianceBox.note}
                          </p>
                          <a href="#contacto" className="link-arrow">{dict.complianceBox.cta}</a>
                        </div>
                      </article>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services__footer reveal">
            <p>{dict.footer.text}<br />{dict.footer.text2}</p>
            <a href="#contacto" className="link-arrow">{dict.footer.cta}</a>
          </div>
        </div>
      </section>
  );
}
