import { servicesMeta } from "@/data/services";
import type { Dictionary } from "./dictionaries/es";

export type LocalizedService = (typeof servicesMeta)[number] & Dictionary["serviceContent"][number];

export function getLocalizedServices(dict: Dictionary): LocalizedService[] {
  return servicesMeta.map((meta, i) => ({ ...meta, ...dict.serviceContent[i] }));
}

export function getLocalizedService(dict: Dictionary, slug: string): LocalizedService | undefined {
  return getLocalizedServices(dict).find((s) => s.slug === slug);
}
