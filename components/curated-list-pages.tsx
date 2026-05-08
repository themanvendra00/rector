"use client";

import { useMemo, useState } from "react";
import type { CuratedRepository, FreeCollection, SiteTool } from "@/lib/curated-content";
import {
  collectTags,
  KeywordFilterIntro,
  KeywordFilterToolbar,
} from "@/components/keyword-filter";

function SiteCard({ site }: { site: SiteTool }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-lg border border-border bg-surface-elevated p-4 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[0_0_28px_-14px_var(--lime-glow)]"
    >
      <h3 className="font-semibold text-text-primary group-hover:text-accent">{site.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {site.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {site.keywords.map((kw) => (
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

export function SitesToolsBrowser({ items }: { items: SiteTool[] }) {
  const keywords = useMemo(() => collectTags(items, (i) => i.keywords), [items]);
  const [active, setActive] = useState<string | null>(null);
  const filtered = useMemo(
    () => (active ? items.filter((i) => i.keywords.includes(active)) : items),
    [items, active],
  );

  return (
    <>
      <KeywordFilterToolbar keywords={keywords} active={active} onChange={setActive} />
      <div className="mt-4 flex items-center justify-end">
        <KeywordFilterIntro count={filtered.length} />
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((site) => (
          <li key={site.id}>
            <SiteCard site={site} />
          </li>
        ))}
      </ul>
    </>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="m12 2.5 2.8 8.6h9l-7.3 5.4 2.8 8.6-7.3-5.4-7.3 5.4 2.8-8.6-7.3-5.4h9L12 2.5z" />
    </svg>
  );
}

function IconFork({ className }: { className?: string }) {
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
      <circle cx="12" cy="18" r="2.5" />
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M6 8.5v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-1" />
      <path d="M12 12v4" />
    </svg>
  );
}

function RepoCardBrowse({ repo }: { repo: CuratedRepository }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-border bg-surface-elevated p-5 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[0_0_32px_-12px_var(--lime-glow)]"
    >
      <div className="flex flex-wrap gap-2">
        {repo.topics.map((t) => (
          <span
            key={t}
            className="rounded border border-accent/25 bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-accent"
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="mt-4 font-mono text-sm font-semibold text-text-primary group-hover:text-accent sm:text-base">
        {repo.fullName}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{repo.description}</p>
      <div className="mt-4 flex flex-wrap gap-6 text-sm text-text-muted">
        <span className="inline-flex items-center gap-1.5">
          <IconStar className="text-accent" />
          {repo.stars}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <IconFork />
          {repo.forks}
        </span>
      </div>
    </a>
  );
}

export function RepositoriesBrowser({ items }: { items: CuratedRepository[] }) {
  const keywords = useMemo(() => collectTags(items, (i) => i.topics), [items]);
  const [active, setActive] = useState<string | null>(null);
  const filtered = useMemo(
    () => (active ? items.filter((i) => i.topics.includes(active)) : items),
    [items, active],
  );

  return (
    <>
      <KeywordFilterToolbar keywords={keywords} active={active} onChange={setActive} />
      <div className="mt-4 flex items-center justify-end">
        <KeywordFilterIntro count={filtered.length} />
      </div>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {filtered.map((repo) => (
          <li key={repo.id}>
            <RepoCardBrowse repo={repo} />
          </li>
        ))}
      </ul>
    </>
  );
}

function FormatBadge({ format }: { format: FreeCollection["format"] }) {
  return (
    <span className="rounded border border-border-strong bg-surface-muted px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-secondary">
      {format}
    </span>
  );
}

function CollectionCardBrowse({ item }: { item: FreeCollection }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-border bg-surface-elevated p-5 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[0_0_28px_-14px_var(--lime-glow)]"
    >
      <FormatBadge format={item.format} />
      <h3 className="mt-4 text-lg font-semibold text-text-primary group-hover:text-accent">
        {item.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.keywords.map((kw) => (
          <span key={kw} className="rounded bg-surface-muted/80 px-2 py-0.5 text-[11px] text-text-muted">
            {kw}
          </span>
        ))}
      </div>
    </a>
  );
}

export function FreeCollectionsBrowser({ items }: { items: FreeCollection[] }) {
  const keywords = useMemo(() => collectTags(items, (i) => i.keywords), [items]);
  const [active, setActive] = useState<string | null>(null);
  const filtered = useMemo(
    () => (active ? items.filter((i) => i.keywords.includes(active)) : items),
    [items, active],
  );

  return (
    <>
      <KeywordFilterToolbar keywords={keywords} active={active} onChange={setActive} />
      <div className="mt-4 flex items-center justify-end">
        <KeywordFilterIntro count={filtered.length} />
      </div>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <li key={item.id}>
            <CollectionCardBrowse item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
