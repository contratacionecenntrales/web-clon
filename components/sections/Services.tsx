import type { CSSProperties } from "react";

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
            <div className="timeline__moment reveal">
              <div className="timeline__dot" style={{'--dot-color': '#123a52'} as CSSProperties}></div>
              <span className="timeline__tag">Momento 01</span>
              <h3>Arrancas o exploras</h3>
              <p className="timeline__desc">Empiezas con IA o has hecho pilotos sin resultado claro.</p>
              <div className="service-cards">
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#123a52'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 14 2 2 4-4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#3b6dff'}}>Estrategia</span>
                  </div>
                  <h4>AI Audit</h4>
                  <p>Radiografía completa de madurez IA, riesgos y oportunidades en tu organización.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#123a52'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#123a52'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#3b6dff'}}>Estrategia</span>
                  </div>
                  <h4>Consultoría en IA</h4>
                  <p>Define dónde aplicar IA, qué priorizar y cómo convertirlo en un plan accionable.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#123a52'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#0d9488'}}>Capacitación</span>
                  </div>
                  <h4>Formación a Medida</h4>
                  <p>Tu equipo, preparado para usar IA con criterio desde el primer día.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
              </div>
            </div>

            <div className="timeline__moment reveal" data-reveal-delay="120">
              <div className="timeline__dot" style={{'--dot-color': '#14b8be'} as CSSProperties}></div>
              <span className="timeline__tag">Momento 02</span>
              <h3>Implementas o despliegas</h3>
              <p className="timeline__desc">Ya sabes qué quieres hacer y necesitas ejecutarlo.</p>
              <div className="service-cards">
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#0d9488'}}>Implementación</span>
                  </div>
                  <h4>Chatbots Inteligentes</h4>
                  <p>Asistentes con IA para atención, ventas y operaciones conectados a tu negocio.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#0d9488'}}>Implementación</span>
                  </div>
                  <h4>Desarrollos a Medida</h4>
                  <p>IA, automatización y datos cuando ninguna solución estándar es suficiente.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="7" r="4"/><path d="M10.3 15H7a4 4 0 0 0-4 4v2"/><circle cx="17" cy="17" r="3"/><path d="m21 21-1.9-1.9"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#0d9488'}}>Asesoramiento</span>
                  </div>
                  <h4>Apoyo en Contratación</h4>
                  <p>Encuentra al perfil de IA o datos que necesitas, evaluado por especialistas.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#14b8be'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
              </div>
            </div>

            <div className="timeline__moment reveal" data-reveal-delay="240">
              <div className="timeline__dot" style={{'--dot-color': '#137988'} as CSSProperties}></div>
              <span className="timeline__tag">Momento 03</span>
              <h3>Escalas u operas</h3>
              <p className="timeline__desc">Tienes IA en producción y necesitas estructura.</p>
              <div className="service-cards">
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#137988'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#7c5cea'}}>Estrategia</span>
                  </div>
                  <h4>Departamento IA Externo</h4>
                  <p>Tu capacidad de IA sin necesidad de contratar un equipo interno.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#137988'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
                <article className="service-card">
                  <div className="service-card__head">
                    <div className="service-card__icon" aria-hidden="true" style={{'--icon-color': '#137988'} as CSSProperties}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
                    </div>
                    <span className="service-card__category" style={{color: '#7c5cea'}}>Asesoramiento</span>
                    <span className="service-card__badge-inline">Único en España</span>
                  </div>
                  <h4>Asesoramiento Legal y Regulatorio</h4>
                  <p>Cumplimiento normativo para tus sistemas de IA sin frenar la innovación.</p>
                  <span className="service-card__arrow" aria-hidden="true" style={{'--icon-color': '#137988'} as CSSProperties}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span>
                </article>
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
              </div>
            </div>
          </div>

          <div className="services__footer reveal">
            <p>¿No te identificas con ninguno de los tres momentos?<br />Cuéntanos tu situación en una llamada de 30 minutos y te orientamos sin coste.</p>
            <a href="#contacto" className="link-arrow">Hablar con nosotros →</a>
          </div>
        </div>
      </section>
  );
}
