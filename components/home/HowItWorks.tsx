import { ArrowRight, Camera, FileText, Home, Truck } from "lucide-react";
import { Button } from "@/components/Button";
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
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl font-medium leading-tight tracking-tight text-navy sm:text-5xl">
            Property cleanouts without the headache.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <li key={step.title} className="relative">
                <p className="font-serif text-6xl font-medium leading-none text-green/20">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <span className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-green text-cream">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-medium text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">{step.body}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-14">
          <Button href={site.estimatePath}>
            Request Your Estimate
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
