"use client";

import { useCallback, useEffect, useRef } from "react";

function IconSearch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function shortcutModifierLabel(): string {
  if (typeof navigator === "undefined") return "Ctrl";
  return /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent ?? "")
    ? "⌘"
    : "Ctrl";
}

export function HeroSearch() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusSearch = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        focusSearch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [focusSearch]);

  return (
    <div className="mx-auto mt-10 w-full max-w-2xl">
      <label className="sr-only" htmlFor="archive-search">
        Search sites, repositories, and free resources
      </label>
      <div
        className="group flex cursor-text items-center gap-3 rounded-lg border border-border-strong bg-surface-elevated px-4 py-3 shadow-[0_0_0_1px_color-mix(in_srgb,var(--lime)_12%,transparent)] transition-[border-color,box-shadow] hover:border-accent/55 focus-within:border-accent focus-within:shadow-[0_0_24px_-4px_var(--lime-glow)]"
        role="search"
        onClick={focusSearch}
      >
        <IconSearch className="shrink-0 text-accent" aria-hidden />
        <input
          id="archive-search"
          ref={inputRef}
          type="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search sites, repos, and free resources..."
          className="min-w-0 flex-1 bg-transparent font-sans text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus-visible:!outline-none"
        />
        <kbd
          suppressHydrationWarning
          className="hidden shrink-0 items-center gap-0.5 rounded border border-border bg-surface px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-text-muted sm:inline-flex"
        >
          <span>{shortcutModifierLabel()}</span>
          K
        </kbd>
      </div>
    </div>
  );
}
