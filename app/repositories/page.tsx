import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { RepositoriesBrowser } from "@/components/curated-list-pages";
import { repositories } from "@/lib/curated-content";

const url = getSiteUrl();

export const metadata: Metadata = {
  title: "Repositories",
  description:
    "Production-minded open source repositories to study—frameworks, runtimes, and systems with real-world rigor.",
  alternates: { canonical: "/repositories" },
  openGraph: {
    url: `${url}/repositories`,
    title: "Repositories | Rector",
    description:
      "Curated GitHub projects filtered by topic: learn from codebases that ship and endure.",
  },
};

export default function RepositoriesPage() {
  return (
    <div className="border-b border-border bg-surface/35 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav className="font-mono text-[11px] text-text-muted" aria-label="Breadcrumb">
          <Link href="/" className="text-accent transition-colors hover:text-accent-hover">
            Home
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-text-secondary">Repositories</span>
        </nav>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Repositories
        </h1>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Use topics as a compass. Stars and forks are rough signals—read issues and changelogs
          for how teams evolve serious software.
        </p>

        <div className="mt-10 border-t border-border pt-10">
          <RepositoriesBrowser items={repositories} />
        </div>
      </div>
    </div>
  );
}
