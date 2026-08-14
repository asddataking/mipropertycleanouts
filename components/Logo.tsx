import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  const word = variant === "light" ? "text-white" : "text-navy";
  const sub = variant === "light" ? "text-white/70" : "text-muted";

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <span className="relative flex h-11 w-11 shrink-0 items-end justify-center">
        <svg
          viewBox="0 0 48 48"
          className="h-11 w-11"
          aria-hidden="true"
        >
          <path
            d="M4 22 L24 6 L44 22"
            fill="none"
            stroke="#2d4628"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path d="M10 22 h28 v18 H10 z" fill="#2d4628" />
          <text
            x="24"
            y="36"
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="800"
            fontFamily="Montserrat, sans-serif"
          >
            MI
          </text>
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={`text-[15px] font-extrabold tracking-wide ${word}`}>
          {site.name.toUpperCase()}
        </span>
        <span
          className={`hidden text-[9px] font-semibold tracking-[0.12em] uppercase sm:block ${sub}`}
        >
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}
