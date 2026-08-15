import { Container } from "@/components/Container";

export function PageHero({
  label,
  title,
  body,
}: {
  label?: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-green py-16 text-cream lg:py-24">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-16 left-1/3 h-56 w-56 rounded-full bg-cream/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative max-w-3xl">
        {label ? (
          <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] text-orange uppercase">
            <span className="h-px w-8 bg-orange" aria-hidden="true" />
            {label}
          </p>
        ) : null}
        <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {body ? (
          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-cream/80">{body}</p>
        ) : null}
      </Container>
    </section>
  );
}
