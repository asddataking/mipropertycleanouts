import { Camera } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function PhotoCta() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-green px-6 py-10 text-cream sm:flex sm:items-center sm:gap-8 sm:px-10">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange/25 blur-2xl"
            aria-hidden="true"
          />
          <span className="relative inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange text-navy">
            <Camera className="h-6 w-6" />
          </span>
          <div className="relative mt-5 flex-1 sm:mt-0">
            <h2 className="font-serif text-3xl font-medium tracking-tight">
              Don&apos;t know where to start?
            </h2>
            <p className="mt-2 text-[16px] text-cream/75">
              That&apos;s okay. Show us what you&apos;re dealing with.
            </p>
          </div>
          <div className="relative mt-6 text-center sm:mt-0">
            <Button href={site.estimatePath} variant="outlineLight">
              Upload Photos & Get an Estimate
            </Button>
            <p className="mt-3 text-xs text-cream/60">
              No obligation. Local Michigan service.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
