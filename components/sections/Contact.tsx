export function Contact() {
  return (
    <section className="contact" id="contacto">
        <div className="container">
          <div className="section-head reveal">
            <span className="label">Contacto</span>
            <h2 className="section-heading">Una llamada de 30 minutos puede darte más claridad que meses de pruebas sin rumbo</h2>
            <p className="section-subtext">Cuéntanos tu situación y te diremos con honestidad si podemos ayudarte, por dónde tendría sentido empezar y qué tipo de proyecto encaja mejor contigo.</p>
            <div className="contact__meta">
              <span>Gratuita · Sin compromiso</span>
              <span>Respuesta en 24 h</span>
              <span>100% confidencial</span>
            </div>
          </div>

          <form className="contact__form reveal" id="contactForm" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Empresa</label>
                <input type="text" id="company" name="company" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">¿Cuál es tu situación?</label>
              <textarea id="message" name="message" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn btn--primary btn--lg btn--block">
              Agendar llamada gratuita
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <p className="form-success" id="formSuccess" role="status">¡Gracias! Hemos recibido tu solicitud, te contactaremos en menos de 24h.</p>
          </form>
        </div>
      </section>
  );
}
