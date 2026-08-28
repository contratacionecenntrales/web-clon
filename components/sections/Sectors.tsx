export function Sectors() {
  return (
    <section className="sectors section-ink" id="sectores">
        <div className="container">
          <div className="section-head-split reveal">
            <div>
              <span className="label">Sectores</span>
              <h2 className="section-heading">Cada sector tiene sus retos. Sabemos cuáles resuelve la IA y cuáles no.</h2>
            </div>
            <p className="section-subtext">Conocemos los problemas reales de estos sectores y las soluciones que generan impacto.</p>
          </div>

          <div className="sector-grid">
            <a href="#contacto" className="sector-card reveal">
              <div className="sector-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              </div>
              <h3>Retail y E-commerce</h3>
              <p>Asistentes de venta, recomendadores de producto y automatización de atención al cliente para vender más con menos esfuerzo manual.</p>
              <span className="sector-card__link">Ver soluciones para retail y e-commerce <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>

            <a href="#contacto" className="sector-card reveal" data-reveal-delay="80">
              <div className="sector-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
              </div>
              <h3>Industria y Manufactura</h3>
              <p>Automatización de propuestas técnicas, optimización de procesos productivos y analítica para tomar decisiones con datos reales.</p>
              <span className="sector-card__link">Ver soluciones para industria y manufactura <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>

            <a href="#contacto" className="sector-card reveal" data-reveal-delay="160">
              <div className="sector-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              </div>
              <h3>Educación y Formación</h3>
              <p>Programas de IA adaptados por nivel y rol para que los equipos adopten herramientas de IA desde el primer día, no como teoría.</p>
              <span className="sector-card__link">Ver soluciones para educación y formación <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>

            <a href="#contacto" className="sector-card reveal">
              <div className="sector-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
              </div>
              <h3>Logística y Distribución</h3>
              <p>Eliminación de reporting manual, dashboards en tiempo real e integración de sistemas para operaciones más rápidas y fiables.</p>
              <span className="sector-card__link">Ver soluciones para logística y distribución <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>

            <a href="#contacto" className="sector-card reveal" data-reveal-delay="80">
              <div className="sector-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 7h-9m0 5h9m-9 5h9M5 7h.01M5 12h.01M5 17h.01"/></svg>
              </div>
              <h3>Servicios Profesionales</h3>
              <p>Automatización de tareas administrativas, generación de documentos y adopción de IA para hacer más con el mismo equipo.</p>
              <span className="sector-card__link">Ver soluciones para servicios profesionales <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>

            <a href="#contacto" className="sector-card reveal" data-reveal-delay="160">
              <div className="sector-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M12 8v8M8 12h8"/></svg>
              </div>
              <h3>Sector Financiero</h3>
              <p>Automatización documental con trazabilidad, cumplimiento regulatorio (AI Act, DORA) y formación especializada para banca, seguros y fintech.</p>
              <span className="sector-card__link">Ver soluciones para sector financiero <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
            </a>
          </div>
        </div>
      </section>
  );
}
