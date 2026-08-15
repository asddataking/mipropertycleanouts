import { Camera, MapPin, Shield, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { ParallaxImage } from "@/components/ParallaxImage";
import { heroChecks, images, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[88vh]">
        <ParallaxImage
          src={images.hero}
          alt="Crew loading a property cleanout at a Michigan home"
          priority
          speed={0.32}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-orange/20" />
        <div
          className="pointer-events-none absolute -right-10 top-0 h-80 w-80 rounded-full bg-orange/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl items-end px-5 pb-28 pt-32 lg:items-center lg:px-8 lg:pb-36">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[12px] font-bold tracking-[0.22em] text-orange uppercase">
              <span className="h-px w-8 bg-orange" aria-hidden="true" />
              Michigan&apos;s Blue Water Area
            </p>
            <h1 className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-cream sm:text-6xl lg:text-7xl">
              Need an entire property cleaned out?
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-cream/85">
              Estates, rentals, sales, and overwhelmed homes. We clear the
              property so it is empty and ready for cleaning, repairs, listing,
              or the next tenant.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={site.estimatePath}>Get a Free Estimate</Button>
              <Button href={site.estimatePath} variant="outlineLight">
                <Camera className="h-4 w-4" />
                Upload Photos
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-cream">
              <Trust icon={<MapPin className="h-4 w-4" />} label="Local" />
              <Trust icon={<Star className="h-4 w-4" />} label="Veteran-Owned" />
              <Trust icon={<Shield className="h-4 w-4" />} label="Fully Insured" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-5 lg:px-8">
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line shadow-[0_24px_60px_-28px_rgba(27,61,77,0.35)] sm:grid-cols-2 lg:grid-cols-4">
          {heroChecks.map((item) => (
            <li
              key={item}
              className="bg-cream px-6 py-6 text-[15px] font-semibold leading-6 text-navy"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm font-semibold">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange text-navy">
        {icon}
      </span>
      {label}
    </div>
  );
}
