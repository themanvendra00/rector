import Link from "next/link";
import type { FreeCollection } from "@/lib/curated-content";
import { featuredCollections } from "@/lib/curated-content";

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

function FormatBadge({ format }: { format: FreeCollection["format"] }) {
  return (
    <span className="rounded border border-border-strong bg-surface-muted px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
      {format}
    </span>
  );
}

function CollectionCard({ item }: { item: FreeCollection }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-border bg-surface-elevated p-5 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[0_0_28px_-14px_var(--lime-glow)]"
    >
      <div className="flex items-center gap-2">
        <FormatBadge format={item.format} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-text-primary group-hover:text-accent">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {item.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.keywords.slice(0, 4).map((kw) => (
          <span
            key={kw}
            className="rounded bg-surface-muted/80 px-2 py-0.5 text-[11px] text-text-muted"
          >
            {kw}
          </span>
        ))}
      </div>
    </a>
  );
}

export function FreeCollectionsSection() {
  const items = featuredCollections(4);

  return (
    <section
      id="free-collections"
      className="scroll-mt-20 border-b border-border py-16 sm:py-20"
      aria-labelledby="free-collections-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Free collections
            </p>
            <h2
              id="free-collections-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
            >
              Videos, docs, and mixed bags—no gate on the essentials
            </h2>
            <p className="mt-2 max-w-2xl text-text-secondary">
              Curated playlists, canonical references, and practical lists you can work
              through at your pace.
            </p>
          </div>
          <Link
            href="/free-collections"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-accent-hover"
          >
            See all collections
            <IconArrowRight />
          </Link>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li key={item.id}>
              <CollectionCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
