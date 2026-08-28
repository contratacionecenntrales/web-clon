import { ArrowRight, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="top">
        <canvas className="hero__canvas" id="heroCanvas" aria-hidden="true"></canvas>
        <div className="hero__glow hero__glow--1"></div>
        <div className="hero__glow hero__glow--2"></div>
        <div className="hero__grid" aria-hidden="true"></div>
        <div className="container hero__inner">
          <div className="hero__layout">
            <div className="hero__copy">
              <span className="hero__eyebrow reveal">
                <Sparkles aria-hidden="true" size={14} />
                Consultoría IA + Legal · AI Act 2024/1689
              </span>
              <h1 className="hero__title reveal" data-reveal-delay="60">
                <span className="hero__title-line">Hacemos que la IA funcione en tu empresa.</span>
                <span className="hero__title-line text-gradient-blue">Y que cumpla.</span>
              </h1>
              <p className="hero__subtitle reveal" data-reveal-delay="120">
                Estrategia, implementación técnica y asesoramiento legal AI Act y GDPR integrados bajo un mismo contrato.
                Resultados medibles en semanas, no años.
              </p>
              <div className="hero__actions reveal" data-reveal-delay="180">
                <a href="#contacto" className="btn btn--primary btn--lg">
                  Agendar llamada gratuita
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a href="#servicios" className="btn btn--outline btn--lg">Ver los 8 servicios</a>
              </div>
              <div className="hero__meta reveal" data-reveal-delay="240">
                <span>Sin compromiso · 30 min</span>
                <span>Respuesta en 24 h</span>
                <span>Tratamiento confidencial</span>
              </div>
            </div>

            <div className="hero__visual reveal" data-reveal-delay="200" aria-hidden="true">
              <div className="hero__visual-card">
                <div className="hero__visual-bar">
                  <span className="hero__visual-dot hero__visual-dot--red"></span>
                  <span className="hero__visual-dot hero__visual-dot--amber"></span>
                  <span className="hero__visual-dot hero__visual-dot--green"></span>
                  <span className="hero__visual-bar-label">Labs24k · Panel IA</span>
                </div>
                <div className="hero__visual-body">
                  <div className="hero__visual-chat">
                    <span className="hero__visual-chat-badge">IA</span>
                    <p>He detectado 3 automatizaciones con ROI estimado de 4x en tu operación.</p>
                  </div>
                  <div className="hero__visual-metric">
                    <div className="hero__visual-metric-row">
                      <span>Cumplimiento AI Act</span><strong>92%</strong>
                    </div>
                    <div className="hero__visual-progress"><span style={{ width: '92%' }}></span></div>
                  </div>
                  <div className="hero__visual-metric">
                    <div className="hero__visual-metric-row">
                      <span>Automatización de procesos</span><strong>78%</strong>
                    </div>
                    <div className="hero__visual-progress"><span style={{ width: '78%' }}></span></div>
                  </div>
                  <div className="hero__visual-metric">
                    <div className="hero__visual-metric-row">
                      <span>Adopción del equipo</span><strong>85%</strong>
                    </div>
                    <div className="hero__visual-progress"><span style={{ width: '85%' }}></span></div>
                  </div>
                </div>
              </div>

              <div className="hero__float hero__float--1">
                <ShieldCheck aria-hidden="true" size={18} />
                <div><strong>AI Act</strong><span>cumplimiento integrado</span></div>
              </div>
              <div className="hero__float hero__float--2">
                <TrendingUp aria-hidden="true" size={18} />
                <div><strong>+200</strong><span>directivos formados</span></div>
              </div>
            </div>
          </div>

          <div className="hero__stats reveal" data-reveal-delay="320">
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
