export function Hero() {
  return (
    <section className="hero" id="top">
        <canvas className="hero__canvas" id="heroCanvas" aria-hidden="true"></canvas>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
        <div className="container hero__inner">
          <h1 className="hero__title reveal">
            <span className="hero__title-line">Hacemos que la IA funcione en tu empresa.</span>
            <span className="hero__title-line text-gradient-blue">Y que cumpla.</span>
          </h1>
          <p className="hero__subtitle reveal" data-reveal-delay="100">
            Estrategia, implementación técnica y asesoramiento legal AI Act y GDPR integrados bajo un mismo contrato.
            Resultados medibles en semanas, no años.
          </p>
          <div className="hero__actions reveal" data-reveal-delay="200">
            <a href="#contacto" className="btn btn--primary btn--lg">
              Agendar llamada gratuita
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#servicios" className="btn btn--outline btn--lg">Ver los 8 servicios</a>
          </div>
          <div className="hero__meta reveal" data-reveal-delay="300">
            <span>Sin compromiso · 30 min</span>
            <span>Respuesta en 24 h</span>
            <span>Tratamiento confidencial</span>
          </div>

          <div className="hero__stats reveal" data-reveal-delay="400">
            <a href="#clientes" className="hero-stat">
              <span className="hero-stat__number">+200</span>
              <span className="hero-stat__label">Formación</span>
              <span className="hero-stat__desc">directivos formados · NPS 4,8 / 5</span>
            </a>
            <a href="#clientes" className="hero-stat">
              <span className="hero-stat__number">−65%</span>
              <span className="hero-stat__label">Industria</span>
              <span className="hero-stat__desc">tiempo en propuestas comerciales</span>
            </a>
            <a href="#clientes" className="hero-stat">
              <span className="hero-stat__number">+22%</span>
              <span className="hero-stat__label">Retail</span>
              <span className="hero-stat__desc">conversión en producto recomendado</span>
            </a>
          </div>
        </div>
        <div className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>
  );
}
