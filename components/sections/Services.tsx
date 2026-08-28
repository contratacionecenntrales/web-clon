import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const moments = [
  { id: "01", title: "Arrancas o exploras", desc: "Empiezas con IA o has hecho pilotos sin resultado claro.", delay: 0 },
  { id: "02", title: "Implementas o despliegas", desc: "Ya sabes qué quieres hacer y necesitas ejecutarlo.", delay: 120 },
  { id: "03", title: "Escalas u operas", desc: "Tienes IA en producción y necesitas estructura.", delay: 240 },
] as const;

export function Services() {
  return (
    <section className="services section-light" id="servicios">
        <div className="container">
          <div className="section-head-split reveal">
            <div>
              <span className="label-light">Servicios</span>
              <h2 className="display-title-dark">¿En qué momento estás? Te llevamos al siguiente.</h2>
            </div>
            <p className="section-subtext-dark">Ocho servicios organizados por madurez de IA en tu empresa. Desde el primer diagnóstico hasta el departamento de IA externalizado.</p>
          </div>

          <div className="timeline">
            {moments.map((moment) => {
              const momentServices = services.filter((s) => s.momento === moment.id);
              return (
                <div className="timeline__moment reveal" data-reveal-delay={moment.delay} key={moment.id}>
                  <div className="timeline__dot" style={{ "--dot-color": momentServices[0]?.accentColor } as CSSProperties}></div>
                  <span className="timeline__tag">Momento {moment.id}</span>
                  <h3>{moment.title}</h3>
                  <p className="timeline__desc">{moment.desc}</p>
                  <div className="service-cards">
                    {momentServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link href={`/servicios/${service.slug}`} className="service-card" key={service.slug}>
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

                    {moment.id === "03" && (
                      <article className="service-card service-card--highlight" id="legal">
                        <div className="compliance-box">
                          <div className="compliance-box__radar" aria-hidden="true">
                            <span className="compliance-box__ring compliance-box__ring--1"></span>
                            <span className="compliance-box__ring compliance-box__ring--2"></span>
                          </div>
                          <span className="compliance-box__tag"><span className="ping-dot ping-dot--amber" aria-hidden="true"></span>Reglamento UE 2024/1689 · en vigor</span>
                          <div className="compliance-box__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                          </div>
                          <span className="compliance-box__eyebrow">Cumplimiento · AI Act & RGPD</span>
                          <h5>Diagnóstico de Cumplimiento en IA</h5>
                          <p>Clasificamos tus sistemas de IA, identificamos las obligaciones que te corresponden y te entregamos un memorándum de cumplimiento accionable.</p>
                          <p className="compliance-box__note">
                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
                            Memorándum de cumplimiento en 2 semanas
                          </p>
                          <a href="#contacto" className="link-arrow">Evaluar mi exposición →</a>
                        </div>
                      </article>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="services__footer reveal">
            <p>¿No te identificas con ninguno de los tres momentos?<br />Cuéntanos tu situación en una llamada de 30 minutos y te orientamos sin coste.</p>
            <a href="#contacto" className="link-arrow">Hablar con nosotros →</a>
          </div>
        </div>
      </section>
  );
}
