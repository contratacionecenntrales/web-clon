import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const description =
  "Implementación de IA y asesoramiento legal AI Act + GDPR bajo un mismo partner. Prepara tu empresa para el deadline del AI Act de agosto 2026. Llamada gratuita de 30 minutos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.labs24k.com"),
  title: "Labs24k | Inteligencia Artificial y Automatización",
  description,
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
    title: "Labs24k | Inteligencia Artificial y Automatización",
    description,
    siteName: "Labs24k",
    locale: "es_ES",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Labs24k" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labs24k | Inteligencia Artificial y Automatización",
    description,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`dark ${inter.variable} antialiased`}>
      <body className="bg-canvas">{children}</body>
    </html>
  );
}
