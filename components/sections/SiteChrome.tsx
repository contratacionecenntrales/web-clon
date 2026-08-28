import Image from "next/image";
import Link from "next/link";

export function SiteChrome() {
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" id="scrollProgress"></div>

      {/* AI ACT ALERT BANNER */}
      <div className="alert-banner" id="alertBanner" role="region" aria-label="Aviso de cumplimiento AI Act">
        <div className="container alert-banner__inner">
          <Link className="alert-banner__link" href="/#legal">
            <span className="alert-banner__ping" aria-hidden="true"></span>
            <span className="alert-banner__tag">AI Act</span>
            <span className="alert-banner__text">El AI Act <strong>ya está en vigor</strong>. ¿Tu empresa cumple?</span>
          </Link>
          <div className="alert-banner__actions">
            <Link href="/#legal" className="alert-banner__cta">Calcular exposición
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <button type="button" className="alert-banner__close" id="alertClose" aria-label="Cerrar aviso">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header" id="header">
        <div className="container header__inner">
          <Link href="/#top" className="logo" aria-label="Labs24k - Inicio">
            <Image src="/labs24k-icon.svg" alt="" aria-hidden="true" width={36} height={36} className="logo__icon" priority />
            <span className="logo__wordmark">Labs24k</span>
          </Link>

          <nav className="nav" id="nav" role="navigation">
            <Link href="/#servicios">Servicios</Link>
            <Link href="/#sectores">Sectores</Link>
            <Link href="/#metodologia">Metodología</Link>
            <Link href="/#clientes">Clientes</Link>
            <Link href="/#libro">El libro<span className="badge-free">Gratis</span></Link>
            <Link href="/#legal" className="nav__ai-act">
              <span className="ping-dot" aria-hidden="true"></span>AI Act
            </Link>
            <Link href="/#nosotros">Nosotros</Link>
          </nav>

          <div className="header__cta">
            <Link href="/#contacto" className="header__contact-link">Contacto</Link>
            <Link href="/#contacto" className="btn btn--primary btn--sm">Llamada gratuita</Link>
          </div>

          <button className="nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}
