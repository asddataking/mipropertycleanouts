export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] text-orange uppercase">
      <span className="h-px w-8 bg-orange" aria-hidden="true" />
      {children}
    </p>
  );
}
