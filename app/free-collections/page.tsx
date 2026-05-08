import Link from "next/link";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { FreeCollectionsBrowser } from "@/components/curated-list-pages";
import { freeCollections } from "@/lib/curated-content";

const url = getSiteUrl();

export const metadata: Metadata = {
  title: "Free collections",
  description:
    "Free videos, docs, courses, and mixed guides—organized so you can start without friction.",
  alternates: { canonical: "/free-collections" },
  openGraph: {
    url: `${url}/free-collections`,
    title: "Free collections | Rector",
    description:
      "Curated free learning bundles: security, frontend performance, distributed systems, and more.",
  },
};

export default function FreeCollectionsPage() {
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
          <span className="text-text-secondary">Free collections</span>
        </nav>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Free collections
        </h1>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Formats vary—videos, canonical docs, course-shaped sites. Keywords help you slice the
          list by interest.
        </p>

        <div className="mt-10 border-t border-border pt-10">
          <FreeCollectionsBrowser items={freeCollections} />
        </div>
      </div>
    </div>
  );
}
