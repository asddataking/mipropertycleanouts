import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";
import { VeteranBadge } from "@/components/VeteranBadge";
import { footerQuickLinks, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
            {site.shortTagline}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-extrabold tracking-wide">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {footerQuickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-extrabold tracking-wide">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-extrabold tracking-wide">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>

        <div className="flex items-start lg:col-span-2 lg:justify-end">
          <VeteranBadge />
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Cleanout services performed by {site.operator}.</p>
        </Container>
      </div>
    </footer>
  );
}
