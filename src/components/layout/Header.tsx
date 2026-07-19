"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BrandLogo from "@/components/layout/BrandLogo";
import { navItems } from "@/lib/site";
import { ChevronDown, MenuIcon, CloseIcon } from "@/components/ui/icons";

export default function Header({ logoUrl = "" }: { logoUrl?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openItem, setOpenItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="Removals Nationwide home">
          <BrandLogo src={logoUrl} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                {item.children ? (
                  <>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-brand-navy transition hover:text-brand-red"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    <ul className="invisible absolute left-0 top-full z-50 w-60 translate-y-2 rounded-lg border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-brand-charcoal transition hover:bg-brand-grey hover:text-brand-red"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold uppercase tracking-wide text-brand-navy transition hover:text-brand-red"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/bookservice#quick-quote" variant="outline" size="sm">
            Quick Quote
          </Button>
          <Button href="/bookservice" variant="red" size="sm">
            Book a Service
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-navy lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <MenuIcon className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <nav
          aria-label="Mobile"
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
            <BrandLogo src={logoUrl} />
            <button
              type="button"
              aria-label="Close menu"
              className="rounded-md p-1 text-brand-navy"
              onClick={() => setMobileOpen(false)}
            >
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-5 py-4">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-black/5">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-3 text-left text-sm font-semibold uppercase tracking-wide text-brand-navy"
                      aria-expanded={openItem === item.label}
                      onClick={() => setOpenItem((v) => (v === item.label ? null : item.label))}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${openItem === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openItem === item.label && (
                      <ul className="pb-2 pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm font-medium text-brand-charcoal transition hover:text-brand-red"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-sm font-semibold uppercase tracking-wide text-brand-navy transition hover:text-brand-red"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 border-t border-black/5 p-5">
            <Button href="/bookservice#quick-quote" variant="outline" size="md" onClick={() => setMobileOpen(false)}>
              Quick Quote
            </Button>
            <Button href="/bookservice" variant="red" size="md" onClick={() => setMobileOpen(false)}>
              Book a Service
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
