import Link from "next/link";
import { getContactEmail } from "@/lib/site";

function IconMail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function ContactSection() {
  const contactEmail = getContactEmail();

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-border bg-surface/40 py-16 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              Contact us
            </p>
            <h2
              id="contact-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl"
            >
              Suggest a link, flag a broken entry, or say hello
            </h2>
            <p className="mt-4 max-w-xl text-text-secondary">
              This hub stays useful when the community nudges it—send tooling you trust, repos with
              teachable structure, or collections other learners should not miss.
            </p>
            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}?subject=Rector%20feedback`}
                className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-md border border-accent bg-accent/10 px-6 text-sm font-semibold text-accent transition-colors hover:bg-accent/15"
              >
                <IconMail />
                {contactEmail}
              </a>
            ) : (
              <p className="mt-8 text-sm text-text-muted">
                Configure{" "}
                <span className="font-mono text-text-secondary">
                  NEXT_PUBLIC_CONTACT_EMAIL
                </span>{" "}
                to show a mail link here.
              </p>
            )}
          </div>
          <div className="rounded-lg border border-border bg-surface-elevated p-6 sm:p-8">
            <p className="text-sm font-medium text-text-primary">What to include</p>
            <ul className="mt-4 space-y-3 text-sm text-text-secondary">
              <li>One-line why it helped you in real work or study.</li>
              <li>Keywords (AI tool, practice, productivity, security, etc.).</li>
              <li>License or access notes if it is not obviously free.</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-6 text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:bg-accent-hover"
            >
              Open contact page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
