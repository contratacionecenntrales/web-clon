import Image from "next/image";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/es";
import type { LocalizedService } from "@/i18n/get-services";
import { localeHref, type Locale } from "@/i18n/config";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Footer({ dict, services, locale }: { dict: Dictionary["footer"]; services: LocalizedService[]; locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <>
      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <span className="logo footer__logo">
              <Image src="/labs24k-icon.svg" alt="" aria-hidden="true" width={40} height={40} className="logo__icon" />
              <span className="logo__wordmark">Labs24k</span>
            </span>
            <p>{dict.tagline}</p>
            <div className="footer__social">
              <a href="https://www.facebook.com/share/1GKPPqFQL1/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/labs24k" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="mailto:info@labs24k.com" aria-label="Email">
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
          <div className="footer__col">
            <h4>{dict.servicesHeading}</h4>
            {services.map((service) => (
              <Link href={localeHref(locale, `/servicios/${service.slug}`)} key={service.slug}>{service.title}</Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>{dict.companyHeading}</h4>
            {dict.companyLinks.map((link) => (
              <Link href={localeHref(locale, link.href)} key={link.label + link.href}>{link.label}</Link>
            ))}
          </div>
          <div className="footer__col">
            <h4>{dict.contactHeading}</h4>
            <a href="mailto:info@labs24k.com">info@labs24k.com</a>
            <p className="footer__note">{dict.note}</p>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>© <span>{year}</span> Labs24k. {dict.rights}</p>
          <LanguageSwitcher currentLocale={locale} label={dict.language} />
          <div className="footer__legal">
            {dict.legalLinks.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </div>
        </div>
      </footer>

      <button className="scroll-top" id="scrollTop" aria-label={dict.scrollTop}>
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </>
  );
}
