import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outlineLight" | "outlineDark";
  className?: string;
};

const variants = {
  primary:
    "bg-orange text-cream hover:bg-orange-dark border border-orange",
  outline:
    "bg-transparent text-green border border-green hover:bg-green hover:text-cream",
  outlineLight:
    "bg-transparent text-cream border border-cream/70 hover:bg-cream hover:text-navy",
  outlineDark:
    "bg-transparent text-navy border border-navy/25 hover:border-navy hover:bg-navy hover:text-cream",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center text-[13px] font-bold tracking-[0.08em] uppercase transition-colors ${variants[variant]} ${className}`;
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
