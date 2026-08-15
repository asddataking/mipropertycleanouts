import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const word = variant === "light" ? "text-cream" : "text-navy";
  const sub = variant === "light" ? "text-cream/70" : "text-muted";
  const mark = (
    <Image
      src="/logo-nav.png"
      alt=""
      width={574}
      height={184}
      className="h-11 w-auto sm:h-12"
      priority
    />
  );

  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-2.5 sm:gap-3 ${className}`}
      aria-label={site.name}
    >
      {variant === "light" ? (
        <span className="shrink-0 rounded-xl bg-cream px-2 py-1">{mark}</span>
      ) : (
        mark
      )}
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={`text-[13px] font-extrabold tracking-wide sm:text-[15px] ${word}`}>
          {site.name.toUpperCase()}
        </span>
        <span
          className={`hidden text-[9px] font-semibold tracking-[0.12em] uppercase sm:block ${sub}`}
        >
          {site.brandTagline}
        </span>
      </span>
    </Link>
  );
}
