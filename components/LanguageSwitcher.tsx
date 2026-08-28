'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, localeMeta, localeHref, type Locale } from '@/i18n/config';

export function LanguageSwitcher({ currentLocale, label }: { currentLocale: Locale; label: string }) {
  const router = useRouter();
  const pathname = usePathname() || '/';

  const basePath = currentLocale === 'es' ? pathname : pathname.replace(new RegExp(`^/${currentLocale}`), '') || '/';

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const target = e.target.value as Locale;
    if (target === currentLocale) return;
    router.push(localeHref(target, basePath));
  };

  return (
    <div className="lang-switch">
      <svg aria-hidden="true" className="lang-switch__icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      <select
        className="lang-switch__select"
        value={currentLocale}
        onChange={onChange}
        aria-label={label}
      >
        {locales.map((l) => (
          <option key={l} value={l}>{localeMeta[l].label}</option>
        ))}
      </select>
    </div>
  );
}
