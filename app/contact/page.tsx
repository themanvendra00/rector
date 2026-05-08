import Link from "next/link";
import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { getSiteUrl } from "@/lib/site";

const url = getSiteUrl();

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Suggest resources, report broken links, or reach the Rector maintainers.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: `${url}/contact`,
    title: "Contact | Rector",
    description: "Get in touch about the curated resource hub.",
  },
};

export default function ContactPage() {
  return (
    <div className="border-b border-border bg-surface/25 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <nav className="font-mono text-[11px] text-text-muted" aria-label="Breadcrumb">
          <Link href="/" className="text-accent transition-colors hover:text-accent-hover">
            Home
          </Link>
          <span aria-hidden className="mx-2">
            /
          </span>
          <span className="text-text-secondary">Contact</span>
        </nav>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Contact us
        </h1>
        <p className="mt-4 max-w-2xl text-text-secondary">
          Tell us what to add, what moved, or what confused you. Short messages with a link and
          a reason beat long wishlists.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-lg border border-border bg-surface-elevated p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-text-primary">Send a note</h2>
            <p className="mt-2 text-sm text-text-secondary">
              The form opens your mail client with the subject and body prefilled when an address
              is configured.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-text-primary">Browse the hub</h2>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>
                <Link className="text-accent hover:text-accent-hover" href="/sites-tools">
                  Sites & tools directory
                </Link>
              </li>
              <li>
                <Link className="text-accent hover:text-accent-hover" href="/repositories">
                  Repository picks
                </Link>
              </li>
              <li>
                <Link className="text-accent hover:text-accent-hover" href="/free-collections">
                  Free collections
                </Link>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-text-muted">
              Prefer staying on this page? Copy your message into whichever channel your team uses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
