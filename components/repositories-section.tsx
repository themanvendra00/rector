import Link from "next/link";
import type { CuratedRepository } from "@/lib/curated-content";
import { featuredRepos } from "@/lib/curated-content";

function IconStar({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
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

function RepoCard({ repo }: { repo: CuratedRepository }) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-lg border border-border bg-surface-elevated p-5 transition-[border-color,box-shadow] hover:border-border-strong hover:shadow-[0_0_32px_-12px_var(--lime-glow)]"
    >
      <div className="flex flex-wrap gap-2">
        {repo.topics.slice(0, 3).map((t) => (
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
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
        {repo.description}
      </p>
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

export function RepositoriesSection() {
  const items = featuredRepos(4);

  return (
    <section
      id="repositories"
      className="scroll-mt-20 border-b border-border bg-surface/50 py-16 sm:py-20"
      aria-labelledby="repositories-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Repositories
            </p>
            <h2
              id="repositories-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
            >
              Study codebases that ship and stay maintainable
            </h2>
            <p className="mt-2 max-w-2xl text-text-secondary">
              Start with large, well-run projects—see how APIs evolve, releases are guarded,
              and docs meet operators where they are.
            </p>
          </div>
          <Link
            href="/repositories"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-accent-hover"
          >
            Browse all repositories
            <IconArrowRight />
          </Link>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {items.map((repo) => (
            <li key={repo.id}>
              <RepoCard repo={repo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
