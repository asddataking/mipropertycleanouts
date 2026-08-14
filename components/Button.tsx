import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outlineLight" | "outlineDark";
  className?: string;
};

const variants = {
  primary:
    "bg-green text-white hover:bg-green-dark border border-green",
  outline:
    "bg-white text-green border border-green hover:bg-green hover:text-white",
  outlineLight:
    "bg-transparent text-white border border-white hover:bg-white hover:text-navy",
  outlineDark:
    "bg-white text-navy border border-navy/20 hover:border-navy hover:bg-navy hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-center text-[13px] font-extrabold tracking-wide uppercase transition-colors ${variants[variant]} ${className}`;
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
