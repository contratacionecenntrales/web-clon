import type { Metadata } from "next";
import { notFound } from "next/navigation";
import es from "@/i18n/dictionaries/es";
import { servicesMeta } from "@/data/services";
import { getLocalizedService } from "@/i18n/get-services";
import { ServiceDetailContent } from "@/components/ServiceDetailContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicesMeta.map((service) => ({ slug: service.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getLocalizedService(es, slug);
  if (!service) return {};

  const title = `${service.title} | Labs24k`;
  return {
    title,
    description: service.tagline,
    openGraph: { title, description: service.tagline },
    twitter: { title, description: service.tagline },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getLocalizedService(es, slug);
  if (!service) notFound();

  return <ServiceDetailContent dict={es} locale="es" service={service} />;
}
