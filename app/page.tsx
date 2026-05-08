import { ContactSection } from "@/components/contact-section";
import { FreeCollectionsSection } from "@/components/free-collections-section";
import { Hero } from "@/components/hero";
import { RepositoriesSection } from "@/components/repositories-section";
import { SectionThought } from "@/components/section-thought";
import { SitesToolsSection } from "@/components/sites-tools-section";
import { sectionThoughts } from "@/lib/curated-content";
import { getSiteUrl } from "@/lib/site";

function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: "Rector",
        url,
        description:
          "Curated resource hub for IT professionals and learners—websites, free materials, and production-grade repositories.",
        sameAs: [] as string[],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: "Rector",
        description:
          "Curated sites, learning resources, and Git repositories for production-minded builders.",
        publisher: { "@id": `${url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  const [t0, t1, t2, t3] = sectionThoughts;

  return (
    <>
      <JsonLd />
      <Hero />
      <SectionThought>{t0}</SectionThought>
      <SitesToolsSection />
      <SectionThought>{t1}</SectionThought>
      <RepositoriesSection />
      <SectionThought>{t2}</SectionThought>
      <FreeCollectionsSection />
      <SectionThought>{t3}</SectionThought>
      <ContactSection />
    </>
  );
}
