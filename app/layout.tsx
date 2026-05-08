import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteUrl } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rector — Resource hub for IT professionals and learners",
    template: "%s | Rector",
  },
  description:
    "Curated websites, free learning resources, and production-grade Git repositories for IT professionals and anyone building serious software.",
  keywords: [
    "developer resources",
    "IT learning",
    "free developer tools",
    "open source best practices",
    "production engineering",
    "resource hub",
  ],
  authors: [{ name: "Rector" }],
  creator: "Rector",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rector",
    title: "Rector — Resource hub for IT professionals",
    description:
      "Curated sites, free resources, and repositories that teach production-grade engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rector — Resource hub for IT professionals",
    description:
      "Curated sites, free resources, and production-focused repositories.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-text-primary selection:bg-accent selection:text-black">
        <Script id="rector-theme-init" strategy="beforeInteractive">
          {`(function(){try{var k='rector-theme',s=localStorage.getItem(k),d=s==='dark'?!0:s==='light'?!1:window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){document.documentElement.classList.add('dark')}})();`}
        </Script>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
