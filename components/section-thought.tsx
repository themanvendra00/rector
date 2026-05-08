import type { ReactNode } from "react";

export function SectionThought({ children }: { children: ReactNode }) {
  return (
    <aside
      className="border-y border-border/70 bg-surface/40 py-12 sm:py-14"
      aria-label="Moment of reflection"
    >
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.26em] text-accent/90">
          A thought
        </p>
        <p className="mt-4 text-lg font-medium leading-relaxed text-text-primary sm:text-xl">
          {children}
        </p>
      </div>
    </aside>
  );
}
