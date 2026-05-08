export type SiteTool = {
  id: string;
  name: string;
  description: string;
  url: string;
  keywords: string[];
  featured?: boolean;
};

export type CuratedRepository = {
  id: string;
  fullName: string;
  description: string;
  url: string;
  stars: string;
  forks: string;
  topics: string[];
  featured?: boolean;
};

export type FreeCollection = {
  id: string;
  title: string;
  description: string;
  format: "Video" | "Document" | "Course" | "Mixed" | "Toolkit";
  url: string;
  keywords: string[];
  featured?: boolean;
};

export const sectionThoughts = [
  "Ship in small loops. Read one great codebase, then change one real thing in yours.",
  "Depth beats hype. The boring skills—tests, logging, rollbacks—compound for years.",
  "Curiosity is a skill. Feed it with sources that respect your time.",
  "Learning in public is optional; learning with intent is not.",
] as const;

export const siteTools: SiteTool[] = [
  {
    id: "perplexity",
    name: "Perplexity",
    description: "Answer-first research with citations—fast context for unknown domains.",
    url: "https://www.perplexity.ai",
    keywords: ["AI tool", "Research", "Productivity"],
    featured: true,
  },
  {
    id: "leetcode",
    name: "LeetCode",
    description: "Interview-style problems with editorials; use sparingly alongside real projects.",
    url: "https://leetcode.com",
    keywords: ["Programming practice", "Algorithms", "Career"],
    featured: true,
  },
  {
    id: "exercism",
    name: "Exercism",
    description: "Mentored tracks across languages—great for habits and readable solutions.",
    url: "https://exercism.org",
    keywords: ["Programming practice", "Languages", "Mentorship"],
    featured: true,
  },
  {
    id: "regex101",
    name: "regex101",
    description: "Explain and debug regular expressions with step-by-step matchers.",
    url: "https://regex101.com",
    keywords: ["Productivity", "Debugging", "Text"],
    featured: true,
  },
  {
    id: "explain.shell",
    name: "ExplainShell",
    description: "Unpack cryptic shell commands flag-by-flag before you paste them.",
    url: "https://explainshell.com",
    keywords: ["Productivity", "CLI", "Security"],
    featured: true,
  },
  {
    id: "mozilla-dev",
    name: "MDN Web Docs",
    description: "Authoritative web platform documentation—start here for frontend facts.",
    url: "https://developer.mozilla.org",
    keywords: ["Reference", "Web platform", "Frontend"],
    featured: false,
  },
  {
    id: "roadmap",
    name: "Developer Roadmaps",
    description: "Orienting maps for roles and stacks—use as a compass, not a checklist.",
    url: "https://roadmap.sh",
    keywords: ["Roadmap", "Career", "Learning path"],
    featured: false,
  },
  {
    id: "obsidian",
    name: "Obsidian",
    description: "Local-first notes with graphs; good for personal knowledge bases.",
    url: "https://obsidian.md",
    keywords: ["Productivity", "Notes", "PKM"],
    featured: false,
  },
];

export const repositories: CuratedRepository[] = [
  {
    id: "vercel-next",
    fullName: "vercel/next.js",
    description:
      "The React framework—study routing, caching, and how a large OSS project evolves.",
    url: "https://github.com/vercel/next.js",
    stars: "132k+",
    forks: "28k+",
    topics: ["React", "Framework", "TypeScript"],
    featured: true,
  },
  {
    id: "rust-lang-rust",
    fullName: "rust-lang/rust",
    description:
      "A disciplined compiler project: tests, RFCs, and long-horizon maintenance.",
    url: "https://github.com/rust-lang/rust",
    stars: "104k+",
    forks: "14k+",
    topics: ["Systems", "Compiler", "Language"],
    featured: true,
  },
  {
    id: "kubernetes",
    fullName: "kubernetes/kubernetes",
    description:
      "Production orchestration at scale—API design, controllers, and reliability patterns.",
    url: "https://github.com/kubernetes/kubernetes",
    stars: "114k+",
    forks: "39k+",
    topics: ["Infra", "Distributed systems", "Go"],
    featured: true,
  },
  {
    id: "nodejs-node",
    fullName: "nodejs/node",
    description: "Core runtime and lib—see how a platform balances stability and velocity.",
    url: "https://github.com/nodejs/node",
    stars: "109k+",
    forks: "30k+",
    topics: ["Runtime", "JavaScript", "Platform"],
    featured: true,
  },
  {
    id: "typescript",
    fullName: "microsoft/TypeScript",
    description: "Language tooling done seriously: parsers, language service, and semver.",
    url: "https://github.com/microsoft/TypeScript",
    stars: "104k+",
    forks: "13k+",
    topics: ["TypeScript", "Compiler", "Tooling"],
    featured: false,
  },
  {
    id: "apache-kafka",
    fullName: "apache/kafka",
    description: "Distributed log and stream processing—operational lessons in the issues.",
    url: "https://github.com/apache/kafka",
    stars: "29k+",
    forks: "14k+",
    topics: ["Streaming", "Java", "Data"],
    featured: false,
  },
];

export const freeCollections: FreeCollection[] = [
  {
    id: "systems-casestudies",
    title: "Distributed systems case studies",
    description: "Articles and talks unpacking real outages, tail latency, and backoff.",
    format: "Mixed",
    url: "https://github.com/donnemartin/system-design-primer",
    keywords: ["Videos", "Articles", "Architecture"],
    featured: true,
  },
  {
    id: "oss-guides",
    title: "Contributing to open source (practical)",
    description: "Short reads on triage, PR hygiene, and navigating maintainer feedback.",
    format: "Document",
    url: "https://opensource.guide",
    keywords: ["Guide", "OSS", "Community"],
    featured: true,
  },
  {
    id: "frontend-hp",
    title: "high-performance browser fundamentals",
    description: "Primers on rendering, scheduling, and measuring what users feel.",
    format: "Course",
    url: "https://web.dev/learn",
    keywords: ["Performance", "Frontend", "Chrome"],
    featured: true,
  },
  {
    id: "security-basics",
    title: "Security engineering reading list",
    description: "Threat modeling, auth pitfalls, and pragmatic hardening checklists.",
    format: "Mixed",
    url: "https://owasp.org/www-project-top-ten",
    keywords: ["Security", "Checklist", "Web"],
    featured: true,
  },
  {
    id: "cs61a",
    title: "Structure and interpretation (lectures)",
    description: "Classic intro that builds mental models, not just syntax.",
    format: "Video",
    url: "https://cs61a.org",
    keywords: ["Computer science", "Course", "Python"],
    featured: false,
  },
  {
    id: "e-books",
    title: "Architecture & ADR examples",
    description: "Collections of ADRs and diagrams from teams shipping under constraints.",
    format: "Document",
    url: "https://adr.github.io",
    keywords: ["Architecture", "ADR", "Documentation"],
    featured: false,
  },
];

export function featuredSites(limit = 6): SiteTool[] {
  const stars = siteTools.filter((s) => s.featured);
  return stars.slice(0, Math.min(limit, stars.length));
}

export function featuredRepos(limit = 4): CuratedRepository[] {
  const stars = repositories.filter((r) => r.featured);
  return stars.slice(0, Math.min(limit, stars.length));
}

export function featuredCollections(limit = 4): FreeCollection[] {
  const stars = freeCollections.filter((c) => c.featured);
  return stars.slice(0, Math.min(limit, stars.length));
}
