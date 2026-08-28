import { HomeContent } from "@/components/HomeContent";
import { getDictionary } from "@/i18n/get-dictionary";
import { prefixedLocales, type Locale } from "@/i18n/config";

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  return <HomeContent dict={dict} locale={locale} />;
}
