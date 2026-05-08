"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/cn";

const ThemeToggle = dynamic(
  () =>
    import("@/components/theme-toggle").then((mod) => ({
      default: mod.ThemeToggle,
    })),
  {
    ssr: false,
    loading: () => (
      <span
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md"
        aria-hidden
      />
    ),
  },
);

const navLinks = [
  { href: "/sites-tools", label: "Sites & tools" },
  { href: "/repositories", label: "Repositories" },
  { href: "/free-collections", label: "Free collections" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link
          href="/"
          className="flex h-10 w-auto shrink-0 items-center gap-2"
        >
          <div className="relative h-8 w-8">
            <Image
              src="/logo.png"
              alt="Rector"
              fill
              className="object-contain"
              sizes="32px"
              priority
            />
          </div>
          <span className="text-lg font-semibold lowercase text-text-primary">rector</span>
        </Link>
  
  

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-surface-elevated md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="flex flex-col gap-1.5 p-1" aria-hidden>
              <span
                className={cn(
                  "block h-0.5 w-5 bg-text-primary transition",
                  open && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-text-primary transition",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-text-primary transition",
                  open && "-translate-y-2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-surface-elevated md:hidden",
          !open && "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4"
          aria-label="Mobile primary"
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="flex min-h-11 items-center rounded-lg px-3 py-3 text-base font-medium text-text-primary"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
