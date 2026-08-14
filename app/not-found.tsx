import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <p className="text-[12px] font-extrabold tracking-[0.18em] text-olive uppercase">
          404
        </p>
        <h1 className="mt-3 text-4xl font-extrabold text-navy">
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
