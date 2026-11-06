import { site } from "@/lib/site";

/**
 * Google Business Profile / Maps embed placeholder.
 * Renders nothing until site.gbpMapEmbedUrl is set (after a GBP exists).
 */
export function MapEmbed() {
  const src: string = site.gbpMapEmbedUrl;
  if (!src) return null;
  return (
    <div className="overflow-hidden rounded-2xl border border-line">
      <iframe
        src={src}
        title={`${site.name} on Google Maps`}
        className="h-64 w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
