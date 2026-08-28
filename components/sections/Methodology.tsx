import type { CSSProperties } from "react";

export function Methodology() {
  return (
    <section className="method" id="metodologia">
        <div className="container">
          <div className="section-head reveal">
            <span className="label">Metodología</span>
            <h2 className="section-heading">Cuatro fases. Un entregable por fase. Cero proyectos que mueren en un cajón.</h2>
            <p className="section-subtext">Cada fase tiene un entregable concreto y un criterio de avance claro. Sin improvisación, sin proyectos que nunca terminan.</p>
          </div>

          <div className="phases">
            <div className="phase-row reveal">
              <div className="phase-row__rail">
                <div className="phase-row__node" aria-hidden="true" style={{'--node-color': '#123a52'} as CSSProperties}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                </div>
              </div>
              <div className="phase">
                <span className="phase__tag">Fase 01</span>
                <h3>Diagnóstico</h3>
                <p className="phase__desc">Analizamos tus procesos, datos y contexto actual para identificar dónde la IA puede generar impacto real, no teórico.</p>
                <div className="phase__grid">
                  <div>
                    <p className="phase__label">Actividades clave</p>
                    <ul className="phase__list">
                      <li>Auditoría de procesos y datos</li>
                      <li>Entrevistas con stakeholders clave</li>
                      <li>Mapa de oportunidades priorizadas</li>
                    </ul>
                  </div>
                  <div className="phase__deliverable">
                    <span>Entregable</span>
                    <p>Informe de madurez IA + hoja de ruta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="phase-row reveal" data-reveal-delay="100">
              <div className="phase-row__rail">
                <div className="phase-row__node" aria-hidden="true" style={{'--node-color': '#137988'} as CSSProperties}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
              </div>
              <div className="phase">
                <span className="phase__tag">Fase 02</span>
                <h3>Priorización estratégica</h3>
                <p className="phase__desc">Seleccionamos los casos de uso con mayor retorno, menor riesgo y más alineación con tus objetivos.</p>
                <div className="phase__grid">
                  <div>
                    <p className="phase__label">Actividades clave</p>
                    <ul className="phase__list">
                      <li>Evaluación de viabilidad técnica</li>
                      <li>Estimación de retorno por caso</li>
                      <li>Selección con dirección</li>
                    </ul>
                  </div>
                  <div className="phase__deliverable">
                    <span>Entregable</span>
                    <p>Plan priorizado con KPIs y timeline</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="phase-row reveal" data-reveal-delay="200">
              <div className="phase-row__rail">
                <div className="phase-row__node" aria-hidden="true" style={{'--node-color': '#14b8be'} as CSSProperties}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                </div>
              </div>
              <div className="phase">
                <span className="phase__tag">Fase 03</span>
                <h3>Implementación</h3>
                <p className="phase__desc">Ejecutamos: formación de equipos, despliegue de chatbots, automatizaciones o desarrollos a medida. Con entregables y plazos definidos.</p>
                <div className="phase__grid">
                  <div>
                    <p className="phase__label">Actividades clave</p>
                    <ul className="phase__list">
                      <li>Desarrollo y despliegue técnico</li>
                      <li>Formación del equipo cliente</li>
                      <li>Integración con sistemas internos</li>
                    </ul>
                  </div>
                  <div className="phase__deliverable">
                    <span>Entregable</span>
                    <p>Solución en producción + equipo capacitado</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="phase-row reveal" data-reveal-delay="300">
              <div className="phase-row__rail">
                <div className="phase-row__node phase-row__node--last" aria-hidden="true" style={{'--node-color': '#FBBF24'} as CSSProperties}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                </div>
              </div>
              <div className="phase">
                <span className="phase__tag">Fase 04</span>
                <h3>Escala y evolución</h3>
                <p className="phase__desc">Medimos resultados, iteramos y ampliamos lo que funciona. El objetivo es construir una capacidad que crece con tu empresa.</p>
                <div className="phase__grid">
                  <div>
                    <p className="phase__label">Actividades clave</p>
                    <ul className="phase__list">
                      <li>Métricas de impacto en tiempo real</li>
                      <li>Iteración sobre lo que funciona</li>
                      <li>Extensión a nuevos procesos</li>
                    </ul>
                  </div>
                  <div className="phase__deliverable">
                    <span>Entregable</span>
                    <p>Dashboard de resultados + mejora continua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="method__footer reveal">
            <p>Comenzamos siempre con una llamada gratuita para entender tu situación antes de proponer cualquier servicio.</p>
            <a href="#contacto" className="btn btn--primary">Hablar con un experto</a>
          </div>
        </div>
      </section>
  );
}
