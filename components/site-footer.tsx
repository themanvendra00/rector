import Link from "next/link";
import Image from "next/image";
import { getContactEmail } from "@/lib/site";

const footerColumns = [
  {
    title: "Explore",
    links: [
      { href: "/sites-tools", label: "Sites & tools" },
      { href: "/repositories", label: "Repositories" },
      { href: "/free-collections", label: "Free collections" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/", label: "Home" },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "#", label: "Terms of Service" }],
  },
];

export function SiteFooter() {
  const contactEmail = getContactEmail();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#0a0a0a]">
      <div
        className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center"
        aria-hidden
      >
        <span
          className="translate-y-4 font-sans text-[clamp(4.5rem,22vw,14rem)] font-bold lowercase leading-none tracking-tight text-[#141414]"
          style={{ WebkitTextStroke: "0 transparent" }}
        >
          rector
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="relative inline-block h-10 w-32">
              <Image
                src="/logo.png"
                alt="Rector"
                fill
                className="object-contain object-left"
                sizes="128px"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              © {new Date().getFullYear()} Rector. Curated paths for people who ship—sites,
              repositories, and free collections tagged for quick discovery.
            </p>
            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}?subject=Rector`}
                className="mt-4 inline-flex text-sm font-medium text-accent hover:text-accent-hover"
              >
                {contactEmail}
              </a>
            ) : null}
          </div>

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5 lg:gap-8">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-text-secondary transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">
              Why the watermark
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              A quiet anchor in the layout—big type, low contrast—so the links stay legible and
              the section still feels intentional.
            </p>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
              Build · learn · share
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
