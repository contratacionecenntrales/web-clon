export const locales = ["es", "en", "fr", "de", "ca", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

// Locales that live under a URL prefix (/en, /fr...). Spanish stays
// unprefixed at the root for backward compatibility with existing links.
export const prefixedLocales = locales.filter((l) => l !== defaultLocale) as Exclude<Locale, "es">[];

export const localeMeta: Record<Locale, { label: string; short: string; dir: "ltr" | "rtl" }> = {
  es: { label: "Español", short: "ES", dir: "ltr" },
  en: { label: "English", short: "EN", dir: "ltr" },
  fr: { label: "Français", short: "FR", dir: "ltr" },
  de: { label: "Deutsch", short: "DE", dir: "ltr" },
  ca: { label: "Català", short: "CA", dir: "ltr" },
  ar: { label: "العربية", short: "AR", dir: "rtl" },
};

export function localeHome(locale: Locale): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}

export function localeHref(locale: Locale, path: string): string {
  // path starts with "/", e.g. "/servicios/ai-audit" or "/#contacto"
  if (locale === defaultLocale) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}
