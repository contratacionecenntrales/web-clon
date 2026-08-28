export function Book() {
  return (
    <section className="book" id="libro">
        <div className="container book__inner">
          <div className="book__cover reveal">
            <div className="book__cover-glow"></div>
            <div className="book__cover-card">
              <div className="book__cover-band book__cover-band--top"></div>
              <h3>EL MÉTODO<br /><span className="text-gradient-yellow">IA</span></h3>
              <p className="book__cover-edition">Edición Viva</p>
              <div className="book__cover-band book__cover-band--bottom">
                <p>Cómo crear y escalar empresas<br />con inteligencia artificial</p>
              </div>
              <span className="book__cover-author">Equipo Labs24k</span>
            </div>
          </div>
          <div className="book__content reveal" data-reveal-delay="100">
            <span className="label">Libro gratuito · Edición Viva</span>
            <h2 className="section-heading">El Método IA: el sistema para que la IA dé resultados</h2>
            <p className="section-subtext">
              El 95% de los pilotos de IA no generan retorno. <strong>El Método IA</strong> es el libro, open source y vivo,
              que lleva la inteligencia artificial del piloto al P&L. Pensado para quien decide. Gratis.
            </p>
            <ul className="check-list">
              <li>14 capítulos con marcos de decisión para dirección y comité</li>
              <li>Respaldado por la evidencia de Deloitte, PwC, McKinsey y MIT</li>
              <li>Edición Viva: open source y actualizado con el Consejo Editorial</li>
            </ul>
            <div className="btn-row">
              <a href="#contacto" className="btn btn--primary">
                Descargar el libro gratis
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a href="#libro" className="btn btn--outline">Ver qué incluye</a>
            </div>
          </div>
        </div>
      </section>
  );
}
