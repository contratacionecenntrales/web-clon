import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { servicesMeta } from "@/data/services";
import { getLocalizedService } from "@/i18n/get-services";
import { ServiceDetailContent } from "@/components/ServiceDetailContent";
import type { Locale } from "@/i18n/config";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesMeta.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const service = getLocalizedService(dict, slug);
  if (!service) return {};

  const title = `${service.title} | Labs24k`;
  return {
    title,
    description: service.tagline,
    openGraph: { title, description: service.tagline },
    twitter: { title, description: service.tagline },
  };
}

export default async function LocaleServicePage({ params }: Props) {
  const { slug, locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  const dict = await getDictionary(locale);
  const service = getLocalizedService(dict, slug);
  if (!service) notFound();

  return <ServiceDetailContent dict={dict} locale={locale} service={service} />;
}
