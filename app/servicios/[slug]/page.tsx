import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { services, getService } from "@/data/services";
import { SiteChrome } from "@/components/sections/SiteChrome";
import { Footer } from "@/components/sections/Footer";
import { SiteInteractions } from "@/components/SiteInteractions";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} | Labs24k`;
  return {
    title,
    description: service.tagline,
    openGraph: { title, description: service.tagline },
    twitter: { title, description: service.tagline },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const tagStyle = { "--tag-color": service.accentColor } as CSSProperties;

  return (
    <>
      <SiteInteractions />
      <SiteChrome />
      <main id="main">
        <section className="service-hero">
          <div className="container">
            <Link href="/#servicios" className="service-hero__back">
              <ArrowLeft aria-hidden="true" size={15} />
              Todos los servicios
            </Link>

            <div className="service-hero__tags" style={tagStyle}>
              <span className="service-hero__tag">Momento {service.momento} · {service.momentoLabel}</span>
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
              <Link href="/#contacto" className="btn btn--primary btn--lg">
                Agendar llamada gratuita
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link href="/#servicios" className="btn btn--outline btn--lg">Ver los 8 servicios</Link>
            </div>
          </div>
        </section>

        <section className="service-detail section-light">
          <div className="container service-detail__grid">
            <div className="service-detail__copy">
              <span className="label-light">Qué resolvemos</span>
              <h2 className="display-title-dark">{service.tagline}</h2>
              {service.description.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <div className="service-includes">
              <h3>Qué incluye</h3>
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
              <span className="label">Casos de uso</span>
              <h2 className="section-heading">Ejemplos reales de aplicación</h2>
              <p className="section-subtext">Situaciones representativas de empresas con las que hemos trabajado este servicio. Los nombres se mantienen anónimos por confidencialidad.</p>
            </div>
            <div className="service-examples__grid">
              {service.examples.map((example) => (
                <article className="service-example" key={example.sector}>
                  <span className="service-example__sector">{example.sector}</span>
                  <span className="service-example__label">Situación</span>
                  <p>{example.situation}</p>
                  <span className="service-example__label">Resultado</span>
                  <p className="service-example__result">{example.result}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-reviews section-light">
          <div className="container">
            <div className="service-reviews__head">
              <span className="label-light">Opiniones</span>
              <h2 className="display-title-dark">Lo que dicen quienes ya han trabajado así</h2>
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
            <h2 className="section-heading">¿Hablamos de tu caso concreto?</h2>
            <p>Una llamada de 30 minutos, sin compromiso, para ver si {service.title.toLowerCase()} encaja con lo que necesitas ahora mismo.</p>
            <Link href="/#contacto" className="btn btn--primary btn--lg">
              Agendar llamada gratuita
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
