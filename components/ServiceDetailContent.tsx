import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { LocalizedService } from "@/i18n/get-services";
import { localeHref, type Locale } from "@/i18n/config";
import { SiteChrome } from "@/components/sections/SiteChrome";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";
import { getLocalizedServices } from "@/i18n/get-services";

export function ServiceDetailContent({ dict, locale, service }: { dict: Dictionary; locale: Locale; service: LocalizedService }) {
  const Icon = service.icon;
  const tagStyle = { "--tag-color": service.accentColor } as CSSProperties;
  const hub = dict.serviceHub;
  const momentIndex = Number(service.momento) - 1;
  const momentLabel = dict.services.moments[momentIndex]?.title ?? "";
  const services = getLocalizedServices(dict);
  const href = (path: string) => localeHref(locale, path);

  return (
    <>
      <SiteInteractions emailDict={dict.contact.form} />
      <SiteChrome dict={dict} locale={locale} />
      <main id="main">
        <section className="service-hero">
          <div className="container">
            <Link href={href("/#servicios")} className="service-hero__back">
              <ArrowLeft aria-hidden="true" size={15} />
              {hub.backLink}
            </Link>

            <div className="service-hero__tags" style={tagStyle}>
              <span className="service-hero__tag">{dict.services.momentoLabel} {service.momento} · {momentLabel}</span>
              <span className="service-hero__tag" style={{ "--tag-color": service.categoryColor } as CSSProperties}>{service.category}</span>
              {service.badge ? <span className="service-hero__tag service-hero__badge">{service.badge}</span> : null}
            </div>

            <div className="service-hero__top" style={tagStyle}>
              <span className="service-hero__icon" aria-hidden="true">
                <Icon size={26} />
              </span>
              <h1 className="service-hero__title">{service.title}</h1>
            </div>

            <p className="service-hero__tagline">{service.intro}</p>

            <div className="service-hero__actions">
              <Link href={href("/#contacto")} className="btn btn--primary btn--lg">
                {hub.ctaPrimary}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link href={href("/#servicios")} className="btn btn--outline btn--lg">{hub.ctaSecondary}</Link>
            </div>
          </div>
        </section>

        <section className="service-detail section-light">
          <div className="container service-detail__grid">
            <div className="service-detail__copy">
              <span className="label-light">{hub.whatWeSolve}</span>
              <h2 className="display-title-dark">{service.tagline}</h2>
              {service.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="service-includes">
              <h3>{hub.whatIncludes}</h3>
              <ul className="check-list">
                {service.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="service-examples">
          <div className="container">
            <div className="service-examples__head">
              <span className="label">{hub.useCasesLabel}</span>
              <h2 className="section-heading">{hub.useCasesHeading}</h2>
              <p className="section-subtext">{hub.useCasesSubtext}</p>
            </div>
            <div className="service-examples__grid">
              {service.examples.map((example) => (
                <article className="service-example" key={example.sector}>
                  <span className="service-example__sector">{example.sector}</span>
                  <span className="service-example__label">{hub.situationLabel}</span>
                  <p>{example.situation}</p>
                  <span className="service-example__label">{hub.resultLabel}</span>
                  <p className="service-example__result">{example.result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-reviews section-light">
          <div className="container">
            <div className="service-reviews__head">
              <span className="label-light">{hub.reviewsLabel}</span>
              <h2 className="display-title-dark">{hub.reviewsHeading}</h2>
            </div>
            <div className="service-reviews__grid">
              {service.reviews.map((review) => (
                <article className="service-review" key={review.role}>
                  <div className="service-review__stars" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="service-review__quote">&ldquo;{review.quote}&rdquo;</p>
                  <p className="service-review__role">{review.role}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <h2 className="section-heading">{hub.ctaHeading}</h2>
            <p>{hub.ctaText.replace("{service}", service.title.toLowerCase())}</p>
            <Link href={href("/#contacto")} className="btn btn--primary btn--lg">
              {hub.ctaPrimary}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer dict={dict.footer} services={services} locale={locale} />
    </>
  );
}
