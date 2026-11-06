import Link from "next/link";
import { Camera, Phone } from "lucide-react";
import { site } from "@/lib/site";

/** Always-visible estimate + call bar on small screens. */
export function MobileEstimateBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_auto] gap-2 border-t border-line bg-cream/95 p-3 backdrop-blur lg:hidden">
      <Link
        href={site.estimatePath}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-green px-4 py-3 text-[13px] font-bold tracking-[0.06em] text-cream uppercase"
      >
        <Camera className="h-4 w-4" />
        Free Estimate · Upload Photos
      </Link>
      <a
        href={site.phoneHref}
        aria-label={`Call ${site.phone}`}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-4 py-3 text-[13px] font-bold text-navy"
      >
        <Phone className="h-4 w-4" />
        Call
      </a>
    </div>
  );
}
