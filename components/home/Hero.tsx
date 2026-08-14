import Image from "next/image";
import { Camera, MapPin, Shield, Star } from "lucide-react";
import { Button } from "@/components/Button";
import { CheckItem } from "@/components/Icons";
import { heroChecks, images, site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-band">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Crew loading a property cleanout at a Michigan home"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/20 md:bg-transparent md:bg-gradient-to-r md:from-white md:via-white/90 md:to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center px-5 py-14 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="max-w-xl rounded-sm bg-white/95 p-6 shadow-sm sm:p-10">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
            Need an Entire Property Cleaned Out?
          </h1>
          <p className="mt-4 text-lg font-semibold text-navy">
            {site.shortTagline}
          </p>
          <p className="mt-4 text-[15px] leading-7 text-muted">
            Estates, rentals, sales, and overwhelmed homes. We clear the
            property so it is empty and ready for cleaning, repairs, listing,
            or the next tenant.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={site.estimatePath}>Get a Free Estimate</Button>
            <Button href={site.estimatePath} variant="outline">
              <Camera className="h-4 w-4" />
              Upload Photos
            </Button>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroChecks.map((item) => (
              <CheckItem key={item}>{item}</CheckItem>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-6 border-t border-line pt-6">
            <Trust icon={<MapPin className="h-5 w-5" />} label="Local" />
            <Trust icon={<Star className="h-5 w-5" />} label="Veteran-Owned" />
            <Trust icon={<Shield className="h-5 w-5" />} label="Fully Insured" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-semibold text-navy">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green text-white">
        {icon}
      </span>
      {label}
    </div>
  );
}
