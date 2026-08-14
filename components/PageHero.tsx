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
    <section className="bg-navy py-14 text-white lg:py-20">
      <Container className="max-w-3xl">
        {label ? (
          <p className="text-[12px] font-extrabold tracking-[0.18em] text-olive uppercase">
            {label}
          </p>
        ) : null}
        <h1 className="mt-2 text-3xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {body ? (
          <p className="mt-4 text-[16px] leading-7 text-white/75">{body}</p>
        ) : null}
      </Container>
    </section>
  );
}
