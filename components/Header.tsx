"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { navLinks, services, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="mx-auto flex h-[88px] max-w-6xl items-center justify-between gap-4 px-5 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) =>
            "children" in link && link.children ? (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`inline-flex items-center gap-1 text-[13px] font-semibold tracking-wide ${
                    pathname.startsWith("/services")
                      ? "text-green"
                      : "text-navy hover:text-green"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-1/2 top-full z-20 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-sm border border-line bg-white py-2 shadow-lg">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-2 text-[13px] font-medium text-navy hover:bg-band hover:text-green"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold tracking-wide ${
                  isActive(link.href)
                    ? "text-green"
                    : "text-navy hover:text-green"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href={site.estimatePath}>Get a Free Estimate</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-navy lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold text-navy"
                    onClick={() => setServicesOpen((value) => !value)}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen ? (
                    <div className="mb-2 ml-3 flex flex-col border-l border-line pl-3">
                      <Link
                        href="/services"
                        className="py-1.5 text-sm text-muted"
                        onClick={() => setOpen(false)}
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="py-1.5 text-sm text-muted"
                          onClick={() => setOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-sm font-semibold text-navy"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <Button href={site.estimatePath} className="mt-3 w-full">
              Get a Free Estimate
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
