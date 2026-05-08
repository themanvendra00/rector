import Link from "next/link";
import { HeroSearch } from "@/components/hero-search";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--lime-glow),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-16">
        <p className="inline-flex items-center justify-center border border-accent/40 bg-surface-elevated px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          Resource hub · free to explore
        </p>

        <h1
          id="hero-heading"
          className="mx-auto mt-8 max-w-4xl text-[clamp(1.875rem,5vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-text-primary"
        >
          Learn faster and stay ahead with a{" "}
          <span className="text-accent">curated hub</span>
          {" "}built for IT professionals and curious learners.
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary sm:text-lg">
          Hand-picked websites, practical references, and production-grade Git
          repositories—so you study how real systems are built, not just how
          hello-world demos compile. No paywall on the essentials.
        </p>

        <HeroSearch />

        <div className="mx-auto mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="#sites-tools"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-accent px-8 text-xs font-bold uppercase tracking-[0.15em] text-black transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Explore resources
          </Link>
          <Link
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-accent bg-transparent px-8 text-xs font-bold uppercase tracking-[0.15em] text-accent transition-colors hover:bg-accent/10 sm:w-auto"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
