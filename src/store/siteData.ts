export const ME = {
  name: "Pattanasak Atakul",
  role: "Software Developer",
  location: "Bangkok, Thailand",
  email: "pattanasak.at@gmail.com",
  github: "https://github.com/PattanasakGit",
  linkedin: "https://www.linkedin.com/in/pattanasak-atakul-353025287/",
  cvUrl: "https://drive.google.com/file/d/1vt-qGz3Nw48rAJUsQzzf5_qewuTKoTBP/view?usp=sharing",
};

export const STATS = [
  { n: "70", sfx: "+", l: "Retail stores in production" },
  { n: "0",  sfx: "",  l: "Warehouse mismatches since launch" },
  { n: "2",  sfx: "+", l: "Years shipping production code" },
  { n: "9",  sfx: "",  l: "Projects shipped end-to-end" },
];

export const EXP = [
  {
    company: "Zetta Soft",
    sub: "DPLUS Intertrade",
    period: "Nov 2024 — Present",
    pos: "Full-stack Developer",
    cur: true,
    bullets: [
      "Designed and shipped the Match Barcode System end-to-end — Go, SQL, REST, React — reducing warehouse mismatches to zero.",
      "Maintained the enterprise Inventory POS used across 70 retail branches with PostgreSQL-backed workflows.",
      "Implemented SCM and Production Order features for factory supply-chain workflows.",
    ],
    stack: "Go · React · Node.js · PostgreSQL",
  },
  {
    company: "Chomchob Group",
    period: "Jul — Oct 2024",
    pos: "Frontend Developer",
    bullets: [
      "Built production frontend screens for a back-office partner system with Next.js and TypeScript.",
      "Translated Figma designs into maintainable, API-integrated interfaces.",
    ],
    stack: "Next.js · React · TypeScript · Tailwind",
  },
  {
    company: "NIPA Technology",
    period: "Nov 2023 — Feb 2024",
    pos: "Software Engineer Intern",
    bullets: [
      "Supported SCB QR Code Payment API integration.",
      "Built frontend and backend components for the NIPA Cloud management app.",
    ],
    stack: "Next.js · Node.js · React",
  },
];

const gi = (folder: string, n: number, logo = false): string[] => {
  const base = `/project_img/${folder}/`;
  const a = logo ? [`${base}logo.webp`] : [];
  for (let i = 0; i < n; i++) a.push(`${base}${i}.webp`);
  return a;
};

export const CASES = [
  {
    id: "inventory-pos",
    no: "01",
    name: "Inventory POS",
    kind: "Production system",
    year: "2024 — Present",
    company: "Zetta Soft × DPLUS",
    headline: "Maintained and shipped production POS workflows used across 70 retail branches.",
    stack: ["React", "TypeScript", "PostgreSQL", "REST", "Retail ops"],
    images: [] as string[],
  },
  {
    id: "match-barcode",
    no: "02",
    name: "Match Barcode System",
    kind: "Internal product",
    year: "2024",
    company: "Zetta Soft × DPLUS",
    headline: "A scan-first warehouse verification system that reduced receiving mismatches to zero.",
    stack: ["Go", "React", "TypeScript", "MS SQL Server", "REST"],
    images: [] as string[],
  },
  {
    id: "paenia",
    no: "03",
    name: "Paenia",
    kind: "Open source · macOS app",
    year: "2026",
    company: "Personal project",
    headline: "An AI-assisted theme editor for Cursor and VS Code, native to macOS.",
    stack: ["SwiftUI", "macOS", "Next.js", "TypeScript", "LLM"],
    link: "https://github.com/PattanasakGit",
    images: [] as string[],
  },
];

export const PROJ = [
  {
    name: "Paenia Web", year: "2026", tag: "Side · Next.js",
    images: [
      "/project_img/PaeniaWeb/0.png",
      "/project_img/PaeniaWeb/1.png",
      "/project_img/PaeniaWeb/2.png",
      "/project_img/PaeniaWeb/3.png",
      "/project_img/PaeniaWeb/4.png",
      "/project_img/PaeniaWeb/5.png",
      "/project_img/PaeniaWeb/6.png",
    ],
    desc: "Landing page and download hub for the Paenia macOS app — built with Next.js App Router.",
    stack: ["Next.js", "TypeScript", "React"],
    link: "https://github.com/PattanasakGit/PaeniaWeb",
  },
  {
    name: "Paenia", year: "2026", tag: "macOS App · Swift",
    images: [
      "/project_img/Paenia/6.png",
      ...gi("Paenia", 6),
    ],
    desc: "Native macOS app with 78 presets for editing VS Code / Cursor theme colors — live preview, brace-safe patcher, auto-backup.",
    stack: ["Swift", "SwiftUI", "macOS"],
    link: "https://github.com/PattanasakGit/Paenia",
  },
  {
    name: "Yakkai Online", year: "2023", tag: "Final project · Full-stack",
    images: gi("Yakkai", 13, true),
    desc: "SUT community marketplace — sellers list, buyers contact directly. No transactions, no commission.",
    stack: ["React", "Express", "MongoDB", "TypeScript", "Firebase"],
    link: "https://github.com/PattanasakGit/Final_Project",
  },
  {
    name: "Bexo", year: "2026", tag: "Side · Full-stack",
    images: [
      "/project_img/Bexo/01-short-link-home.avif",
      "/project_img/Bexo/02-short-link-result.avif",
      "/project_img/Bexo/04-password-short-link.avif",
      "/project_img/Bexo/05-safe-preview.avif",
      "/project_img/Bexo/06-create-bio-page.avif",
      "/project_img/Bexo/07-bio-page-created.avif",
      "/project_img/Bexo/08-display-bio-page.avif",
      "/project_img/Bexo/09-multi-language-thai.avif",
      "/project_img/Bexo/10-multi-language-japanese.avif",
      "/project_img/Bexo/11-account-login.avif",
      "/project_img/Bexo/12-about-product.avif",
    ],
    desc: "Privacy-first short link and bio page builder — password-protected links, safe redirect preview, local history, and multi-language support.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind", "Vercel"],
    link: "https://bexo-project.vercel.app",
  },
  {
    name: "AiGenImages", year: "2023", tag: "Side · AI",
    images: gi("AigenImages", 6),
    desc: "AI image generation — import image, provide prompt, generate variations.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Next UI"],
    link: "https://frontend-experta-ai.vercel.app/",
  },
  {
    name: "OX Game", year: "2023", tag: "Learning",
    images: gi("OXGAME", 9),
    desc: "Tic Tac Toe vs bot — score tracking, win detection, smooth animations.",
    stack: ["Next.js", "TypeScript", "Redux", "Framer Motion"],
    link: "https://github.com/PattanasakGit/OX-Projects",
  },
  {
    name: "JustBookmarks", year: "2023", tag: "Tool",
    images: gi("JustBookmarks", 6),
    desc: "Configurable browser-homepage bookmark manager — cross-device, replaces default new-tab.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://github.com/PattanasakGit/just-bookmark",
  },
  {
    name: "PokeDex", year: "2023", tag: "Learning · Redux",
    images: gi("PokeDex", 4),
    desc: "Pokémon browser with search, detail pages, and DEX cart. Built to learn Redux.",
    stack: ["Next.js", "TypeScript", "Redux", "Tailwind"],
    link: "https://pokedex-pattanasak.netlify.app/",
  },
  {
    name: "Ainbox", year: "2023", tag: "Client · Production",
    images: gi("Ainbox", 4),
    desc: "Platform for creating custom AI chatbots. Built landing page and full platform frontend.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    link: "https://ainbox.netlify.app/",
  },
  {
    name: "CatChat", year: "2023", tag: "Side · AI",
    images: gi("CATCHAT", 6),
    desc: "Chat with 5 cats of distinct personalities — powered by the Gemini API.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Gemini API"],
    link: "https://github.com/PattanasakGit/CatChat",
  },
  {
    name: "Helpdesk Ticket", year: "2023", tag: "Full-stack",
    images: gi("Ticket", 5),
    desc: "Full-stack ticket management for support and repair requests.",
    stack: ["React", "TypeScript", "Express"],
    link: "https://github.com/PattanasakGit/helpdesk_support_ticket_management_application",
  },
];

export const FEATURED_STACK_TAGS = [
  "Go", "React", "TypeScript", "PostgreSQL", "REST APIs", "Product thinking", "End-to-end ownership",
];

export const STACK_CATEGORIES = [
  {
    index: "01", title: "Frontend", role: "Interface layer",
    desc: "Product surfaces, design-system components, and state that stays understandable.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Zustand"],
  },
  {
    index: "02", title: "Backend", role: "Service layer",
    desc: "Service boundaries, REST APIs, and server logic built for predictable handoff.",
    tags: ["Node.js", "Express.js", "Go", "REST APIs", "Postman"],
  },
  {
    index: "03", title: "Data", role: "Persistence layer",
    desc: "Relational schemas, business workflows, and the occasional document store.",
    tags: ["PostgreSQL", "MS SQL", "MySQL", "Supabase", "MongoDB"],
  },
  {
    index: "04", title: "Delivery", role: "Shipping layer",
    desc: "Git workflows, CI/CD, containers, and production deploy surfaces.",
    tags: ["Git", "GitLab CI/CD", "Docker", "Vercel"],
  },
  {
    index: "05", title: "AI workflow", role: "Acceleration layer",
    desc: "Editor-native AI for faster iteration, review, and interface exploration.",
    tags: ["Claude Code", "Cursor IDE", "Gemini API", "MCP", "Figma"],
  },
];

export const CORE_STACK = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"];
