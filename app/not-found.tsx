import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="flex items-center justify-center gap-3 text-[12px] font-bold tracking-[0.22em] text-orange uppercase">
          <span className="h-px w-8 bg-orange" aria-hidden="true" />
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight text-navy sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-muted">
          That page does not exist. Head home or send photos for an estimate.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Go Home</Button>
          <Button href="/estimate" variant="outline">
            Get an Estimate
          </Button>
        </div>
      </Container>
    </section>
  );
}
