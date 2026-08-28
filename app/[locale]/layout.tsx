import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import { prefixedLocales, localeMeta, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export function generateStaticParams() {
  return prefixedLocales.map((locale) => ({ locale }));
}

const ogLocaleMap: Record<Locale, string> = { es: "es_ES", en: "en_US", fr: "fr_FR", de: "de_DE", ca: "ca_ES", ar: "ar_SA" };

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = (await params).locale as Locale;
  const dict = await getDictionary(locale);
  return {
    metadataBase: new URL("https://www.labs24k.com"),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        es: "https://www.labs24k.com/",
        en: "https://www.labs24k.com/en",
        fr: "https://www.labs24k.com/fr",
        de: "https://www.labs24k.com/de",
        ca: "https://www.labs24k.com/ca",
        ar: "https://www.labs24k.com/ar",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      siteName: "Labs24k",
      locale: ogLocaleMap[locale],
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Labs24k" }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/og-image.png"],
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Params }) {
  const locale = (await params).locale as Locale;
  const meta = localeMeta[locale];
  return (
    <html lang={locale} dir={meta.dir} className={`dark ${inter.variable} antialiased`}>
      <body className="bg-canvas">{children}</body>
    </html>
  );
}
