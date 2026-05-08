import Link from "next/link";
import type { SiteTool } from "@/lib/curated-content";
import { featuredSites } from "@/lib/curated-content";

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function SiteCard({ site }: { site: SiteTool }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-surface-elevated p-4 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[0_0_28px_-14px_var(--lime-glow)]"
    >
      <h3 className="font-semibold text-text-primary group-hover:text-accent">
        {site.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {site.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {site.keywords.slice(0, 3).map((kw) => (
          <span
            key={kw}
            className="rounded border border-border bg-surface-muted/60 px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wide text-text-muted"
          >
            {kw}
          </span>
        ))}
      </div>
    </a>
  );
}

export function SitesToolsSection() {
  const items = featuredSites(6);

  return (
    <section
      id="sites-tools"
      className="scroll-mt-20 border-b border-border py-16 sm:py-20"
      aria-labelledby="sites-tools-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Sites & tools
            </p>
            <h2
              id="sites-tools-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
            >
              Pick up speed with sites you will reopen
            </h2>
            <p className="mt-2 max-w-2xl text-text-secondary">
              Everyday utilities, AI-assisted research, and deliberate practice—tagged so you
              can browse the full directory by keyword.
            </p>
          </div>
          <Link
            href="/sites-tools"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-accent-hover"
          >
            Browse all sites & tools
            <IconArrowRight />
          </Link>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((site) => (
            <li key={site.id}>
              <SiteCard site={site} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
