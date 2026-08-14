import { ArrowRight, Camera, FileText, Home, Truck } from "lucide-react";
import { Button } from "@/components/Button";
import { CircleIcon } from "@/components/Icons";
import { Container, SectionLabel } from "@/components/Container";
import { howItWorks, site } from "@/lib/site";

const icons = {
  camera: Camera,
  file: FileText,
  truck: Truck,
  home: Home,
};

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
            Property Cleanouts Without the Headache.
          </h2>
        </div>

        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li key={step.title} className="relative text-center">
                {index < howItWorks.length - 1 ? (
                  <span
                    className="pointer-events-none absolute top-6 left-[58%] hidden h-px w-[84%] bg-line lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <CircleIcon className="relative mx-auto h-14 w-14">
                  <Icon className="h-6 w-6" />
                </CircleIcon>
                <h3 className="mt-5 text-lg font-extrabold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.body}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 text-center">
          <Button href={site.estimatePath}>
            Request Your Estimate
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
