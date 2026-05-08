"use client";

import { cn } from "@/lib/cn";

export function KeywordFilterToolbar({
  keywords,
  active,
  onChange,
}: {
  keywords: string[];
  active: string | null;
  onChange: (keyword: string | null) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter by keyword">
      <button
        type="button"
        role="tab"
        aria-selected={active === null}
        onClick={() => onChange(null)}
        className={cn(
          "min-h-9 rounded-md border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors",
          active === null
            ? "border-accent bg-accent/15 text-accent"
            : "border-border bg-surface-elevated text-text-secondary hover:border-border-strong hover:text-text-primary",
        )}
      >
        All
      </button>
      {keywords.map((k) => (
        <button
          key={k}
          type="button"
          role="tab"
          aria-selected={active === k}
          onClick={() => onChange(k)}
          className={cn(
            "min-h-9 rounded-md border px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-wide transition-colors",
            active === k
              ? "border-accent bg-accent/15 text-accent"
              : "border-border bg-surface-elevated text-text-secondary hover:border-border-strong hover:text-text-primary",
          )}
        >
          {k}
        </button>
      ))}
    </div>
  );
}

export function collectTags<T>(items: T[], getTags: (item: T) => string[]): string[] {
  const set = new Set<string>();
  for (const item of items) {
    for (const t of getTags(item)) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function KeywordFilterIntro({ count }: { count: number }) {
  const label = count === 1 ? "1 match" : `${count} matches`;
  return (
    <p className="font-mono text-[11px] text-text-muted" aria-live="polite">
      {label}
    </p>
  );
}
