import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { SitesToolsBrowser } from "@/components/curated-list-pages";
import { siteTools } from "@/lib/curated-content";

const url = getSiteUrl();

export const metadata: Metadata = {
  title: "Sites & tools",
  description:
    "Curated websites and utilities for learning and building—filter by AI tools, practice, productivity, and more.",
  alternates: { canonical: "/sites-tools" },
  openGraph: {
    url: `${url}/sites-tools`,
    title: "Sites & tools | Rector",
    description:
      "Hand-picked sites tagged by use case: AI helpers, deliberate practice, productivity, and references.",
  },
};

export default function SitesToolsPage() {
  return (
    <div className="border-b border-border py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav className="font-mono text-[11px] text-text-muted" aria-label="Breadcrumb">
          <Link href="/" className="text-accent transition-colors hover:text-accent-hover">
            Home
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-text-secondary">Sites & tools</span>
        </nav>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Sites & tools
        </h1>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Filter by keyword to narrow the list—everything here is meant to reward repeat visits,
          not one-off hoarding.
        </p>

        <div className="mt-10 border-t border-border pt-10">
          <SitesToolsBrowser items={siteTools} />
        </div>
      </div>
    </div>
  );
}
