/** Public inbox for suggestions (optional — set NEXT_PUBLIC_CONTACT_EMAIL). */
export function getContactEmail(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return raw || undefined;
}

/** Canonical site origin for metadata, sitemap, and JSON-LD. */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}
