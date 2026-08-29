import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { localeHref, type Locale } from "@/i18n/config";

export function SiteChrome({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { nav, banner } = dict;
  const href = (path: string) => localeHref(locale, path);
  return (
    <>
      <a className="skip-link" href="#main">{nav.skipLink}</a>

      {/* SCROLL PROGRESS */}
      <div className="scroll-progress" id="scrollProgress"></div>

      {/* AI ACT ALERT BANNER */}
      <div className="alert-banner" id="alertBanner" role="region" aria-label={banner.tag}>
        <div className="container alert-banner__inner">
          <Link className="alert-banner__link" href={href("/#legal")}>
            <span className="alert-banner__ping" aria-hidden="true"></span>
            <span className="alert-banner__tag">{banner.tag}</span>
            <span className="alert-banner__text">{banner.textPre}<strong>{banner.textStrong}</strong>{banner.textPost}</span>
          </Link>
          <div className="alert-banner__actions">
            <Link href={href("/#legal")} className="alert-banner__cta">{banner.cta}
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <button type="button" className="alert-banner__close" id="alertClose" aria-label={banner.cerrar}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="header" id="header">
        <div className="container header__inner">
          <Link href={href("/#top")} className="logo" aria-label={nav.inicio}>
            <Image src="/labs24k-icon.svg" alt="" aria-hidden="true" width={36} height={36} className="logo__icon" priority />
            <span className="logo__wordmark">Labs24k</span>
          </Link>

          <nav className="nav" id="nav" role="navigation">
            <Link href={href("/#servicios")}>{nav.servicios}</Link>
            <Link href={href("/#sectores")}>{nav.sectores}</Link>
            <Link href={href("/#metodologia")}>{nav.metodologia}</Link>
            <Link href={href("/#clientes")}>{nav.clientes}</Link>
            <Link href={href("/#libro")}>{nav.libro}<span className="badge-free">{nav.libroGratis}</span></Link>
            <Link href={href("/#legal")} className="nav__ai-act">
              <span className="ping-dot" aria-hidden="true"></span>{nav.aiAct}
            </Link>
            <Link href={href("/#nosotros")}>{nav.nosotros}</Link>
            <Link href="/blog">{nav.blog}</Link>
          </nav>

          <div className="header__cta">
            <Link href={href("/#contacto")} className="header__contact-link">{nav.contacto}</Link>
            <Link href={href("/#contacto")} className="btn btn--primary btn--sm">{nav.llamadaGratuita}</Link>
          </div>

          <button className="nav-toggle" id="navToggle" aria-label={nav.abrirMenu} aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}
