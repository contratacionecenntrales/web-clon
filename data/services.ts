import {
  ClipboardCheck,
  Compass,
  GraduationCap,
  MessageSquare,
  Code2,
  UserSearch,
  Building2,
  Scale,
  type LucideIcon,
} from "lucide-react";

// Locale-independent service metadata. All translatable copy (title,
// tagline, description, examples, reviews...) lives in each locale's
// dictionary under `serviceContent`, matched to this array by index —
// see i18n/get-services.ts.
export interface ServiceMeta {
  slug: string;
  momento: "01" | "02" | "03";
  categoryColor: string;
  accentColor: string;
  hasBadge?: boolean;
  icon: LucideIcon;
}

export const servicesMeta: ServiceMeta[] = [
  { slug: "ai-audit", momento: "01", categoryColor: "#3b6dff", accentColor: "#123a52", icon: ClipboardCheck },
  { slug: "consultoria-ia", momento: "01", categoryColor: "#3b6dff", accentColor: "#123a52", icon: Compass },
  { slug: "formacion-a-medida", momento: "01", categoryColor: "#0d9488", accentColor: "#14b8be", icon: GraduationCap },
  { slug: "chatbots-inteligentes", momento: "02", categoryColor: "#0d9488", accentColor: "#14b8be", icon: MessageSquare },
  { slug: "desarrollos-a-medida", momento: "02", categoryColor: "#0d9488", accentColor: "#14b8be", icon: Code2 },
  { slug: "apoyo-en-contratacion", momento: "02", categoryColor: "#0d9488", accentColor: "#14b8be", icon: UserSearch },
  { slug: "departamento-ia-externo", momento: "03", categoryColor: "#7c5cea", accentColor: "#137988", icon: Building2 },
  { slug: "asesoramiento-legal-regulatorio", momento: "03", categoryColor: "#7c5cea", accentColor: "#137988", hasBadge: true, icon: Scale },
];

export function getServiceMetaBySlug(slug: string): ServiceMeta | undefined {
  return servicesMeta.find((s) => s.slug === slug);
}
