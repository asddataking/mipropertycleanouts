import { Camera } from "lucide-react";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

export function PhotoCta() {
  return (
    <section className="py-10 lg:py-12">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-sm bg-band px-6 py-8 sm:flex-row sm:px-10">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green text-white">
            <Camera className="h-6 w-6" />
          </span>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-navy">
              Don&apos;t Know Where to Start?
            </h2>
            <p className="mt-1 text-[15px] text-muted">
              That&apos;s okay. Show us what you&apos;re dealing with.
            </p>
          </div>
          <div className="text-center">
            <Button href={site.estimatePath}>
              Upload Photos & Get an Estimate
            </Button>
            <p className="mt-2 text-xs text-muted">
              No obligation. Local Michigan service.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
