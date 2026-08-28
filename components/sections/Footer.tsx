import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Image src="/labs24k-logo-on-dark.png" alt="Labs24k" width={148} height={106} className="logo__image" />
            <p>Innovación, crecimiento y tecnología: resultados, no presentaciones.</p>
            <div className="footer__social">
              <a href="https://www.linkedin.com/company/labs24k" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="mailto:admin@labs24k.com" aria-label="Email">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Servicios</h4>
            <a href="#servicios">Consultoría en IA</a>
            <a href="#servicios">AI Audit</a>
            <a href="#servicios">Chatbots Inteligentes</a>
            <a href="#servicios">Formación a Medida</a>
            <a href="#servicios">Departamento IA Externo</a>
            <a href="#legal">Asesoramiento Legal y Regulatorio</a>
            <a href="#servicios">Apoyo en Contratación</a>
            <a href="#servicios">Desarrollos a Medida</a>
          </div>
          <div className="footer__col">
            <h4>Empresa</h4>
            <a href="#servicios">Servicios</a>
            <a href="#metodologia">Metodología</a>
            <a href="#clientes">Clientes</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#libro">El libro</a>
            <a href="#legal">AI Act</a>
            <a href="#contacto">Llamada gratuita</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div className="footer__col">
            <h4>Contacto</h4>
            <a href="mailto:admin@labs24k.com">admin@labs24k.com</a>
            <p className="footer__note">Innovación, crecimiento<br />y tecnología</p>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>© <span>{year}</span> Labs24k. Todos los derechos reservados.</p>
          <div className="footer__legal">
            <a href="#">Aviso legal</a>
            <a href="#">Política de privacidad</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>

      <button className="scroll-top" id="scrollTop" aria-label="Volver arriba">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </>
  );
}
