export function Clients() {
  return (
    <section className="clients section-light" id="clientes">
        <div className="container">
          <div className="section-head-split reveal">
            <div>
              <span className="label-light">Casos de éxito</span>
              <h2 className="display-title-dark">Casos reales. Resultados concretos.</h2>
            </div>
            <p className="section-subtext-dark">Proyectos que han pasado de la idea a la producción, con métricas que el cliente comparte sin vergüenza.</p>
          </div>

          <div className="client-grid">
            <article className="client-card reveal">
              <div className="client-card__logo" style={{background: '#123a52'}}><span style={{color: '#fff', fontWeight: 800, letterSpacing: '0.06em'}}>Cliente 01</span></div>
              <div className="client-card__top">
                <h3>Formación ejecutiva</h3>
                <span>Educación</span>
              </div>
              <p className="client-card__metric">+200 directivos formados. NPS 4,8 sobre 5.</p>
              <p className="client-card__desc">Diseñamos e impartimos el programa de IA para directivos de su área de executive education, con casos de uso reales aplicados a la toma de decisiones empresarial.</p>
              <span className="client-card__tag">Formación a Medida</span>
            </article>

            <article className="client-card reveal" data-reveal-delay="80">
              <div className="client-card__logo" style={{background: '#1c6e82'}}><span style={{color: '#fff', fontWeight: 800, letterSpacing: '0.06em'}}>Cliente 02</span></div>
              <div className="client-card__top">
                <h3>Fabricante industrial</h3>
                <span>Industria</span>
              </div>
              <p className="client-card__metric">−65% tiempo en generación de propuestas comerciales.</p>
              <p className="client-card__desc">Automatizamos la generación de propuestas técnicas a partir de los requerimientos del cliente, liberando al equipo técnico para trabajo de mayor valor.</p>
              <span className="client-card__tag">Chatbots Inteligentes</span>
            </article>

            <article className="client-card reveal" data-reveal-delay="160">
              <div className="client-card__logo" style={{background: '#14b8be'}}><span style={{color: '#fff', fontWeight: 800, letterSpacing: '0.06em'}}>Cliente 03</span></div>
              <div className="client-card__top">
                <h3>Marca de retail</h3>
                <span>Retail &amp; E-commerce</span>
              </div>
              <p className="client-card__metric">+22% conversión en producto recomendado.</p>
              <p className="client-card__desc">Implementamos un asistente conversacional con recomendador de productos integrado en su tienda online y WhatsApp Business, reduciendo un 40% las consultas manuales.</p>
              <span className="client-card__tag">Chatbots Inteligentes</span>
            </article>

            <article className="client-card reveal">
              <div className="client-card__logo" style={{background: '#0e5f70'}}><span style={{color: '#fff', fontWeight: 800, letterSpacing: '0.06em'}}>Cliente 04</span></div>
              <div className="client-card__top">
                <h3>Firma de servicios</h3>
                <span>Servicios Profesionales</span>
              </div>
              <p className="client-card__metric">85% de adopción de herramientas de IA en 60 días.</p>
              <p className="client-card__desc">Programa de formación en 3 niveles para 80 personas con seguimiento personalizado durante 6 semanas.</p>
              <span className="client-card__tag">Formación a Medida</span>
            </article>

            <article className="client-card reveal" data-reveal-delay="80">
              <div className="client-card__logo" style={{background: '#1a8f96'}}><span style={{color: '#fff', fontWeight: 800, letterSpacing: '0.06em'}}>Cliente 05</span></div>
              <div className="client-card__top">
                <h3>Marca deportiva</h3>
                <span>Industria Deportiva</span>
              </div>
              <p className="client-card__metric">+45% leads cualificados. −3h/semana en tareas manuales.</p>
              <p className="client-card__desc">Chatbot de cualificación automática de proyectos integrado en su web corporativa, con conexión directa al CRM.</p>
              <span className="client-card__tag">Chatbots Inteligentes</span>
            </article>

            <article className="client-card reveal" data-reveal-delay="160">
              <div className="client-card__logo" style={{background: '#0a2530'}}><span style={{color: '#fff', fontWeight: 800, letterSpacing: '0.06em'}}>Cliente 06</span></div>
              <div className="client-card__top">
                <h3>Empresa tecnológica</h3>
                <span>Tecnología</span>
              </div>
              <p className="client-card__metric">3 líneas de automatización identificadas. ROI estimado 4x.</p>
              <p className="client-card__desc">Consultoría estratégica Fase 0 para identificar y priorizar los casos de uso de IA con mayor potencial.</p>
              <span className="client-card__tag">Consultoría en IA</span>
            </article>
          </div>
        </div>
      </section>
  );
}
