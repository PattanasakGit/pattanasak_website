import React from "react";

const techLogoTypes: Record<string, string> = {
  Go: "go", React: "react", "Next.js": "next", TypeScript: "ts",
  JavaScript: "js", Tailwind: "tailwind", "Tailwind CSS": "tailwind",
  Redux: "redux", Zustand: "state", "Ant Design": "ui", "Material UI": "ui",
  "Node.js": "node", "Express.js": "express", Express: "express",
  "REST APIs": "rest", REST: "rest", PostgreSQL: "sql", "MS SQL": "sql",
  "MS SQL Server": "sql", MySQL: "sql", Supabase: "supabase", MongoDB: "mongo",
  Git: "git", "GitLab CI/CD": "gitlab", Docker: "docker", Vercel: "vercel",
  Figma: "figma", "Claude Code": "ai", "Cursor IDE": "cursor",
  "Gemini API": "ai", MCP: "nodes", Postman: "api", Swift: "swift",
  SwiftUI: "swift", macOS: "mac", Firebase: "fire", "Framer Motion": "motion",
  "Next UI": "ui", LLM: "ai", "Product thinking": "product",
  "End-to-end ownership": "ship", "Retail ops": "ship",
};

interface StackLogoProps { type?: string; }

export const StackLogo: React.FC<StackLogoProps> = ({ type = "nodes" }) => (
  <svg className={`stack-logo stack-logo--${type}`} viewBox="0 0 24 24" aria-hidden="true">
    {type === "go" && (<><path d="M4 9.5h6.2"/><path d="M2.8 12h7.4"/><path d="M4 14.5h5.3"/><circle cx="15.4" cy="12" r="4.8"/><path d="M17.4 10.2c-.5-.5-1.2-.8-2-.8-1.5 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6c1.2 0 2.2-.7 2.5-1.8h-2.4"/></>)}
    {type === "react" && (<><ellipse cx="12" cy="12" rx="8.4" ry="3.2"/><ellipse cx="12" cy="12" rx="8.4" ry="3.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="8.4" ry="3.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="1.6"/></>)}
    {type === "ts" && (<><rect x="4.5" y="4.5" width="15" height="15" rx="3"/><path d="M8.1 9.2h7.8"/><path d="M10.6 9.2v6.2"/><path d="M14.1 14.9c.4.4 1 .6 1.7.6.9 0 1.5-.4 1.5-1.1 0-.6-.4-.9-1.4-1.2-1.1-.3-1.7-.8-1.7-1.8 0-.9.8-1.6 2-1.6.7 0 1.3.2 1.7.5"/></>)}
    {type === "sql" && (<><ellipse cx="12" cy="6.8" rx="6.3" ry="2.6"/><path d="M5.7 6.8v7.8c0 1.4 2.8 2.6 6.3 2.6s6.3-1.2 6.3-2.6V6.8"/><path d="M5.7 10.7c0 1.4 2.8 2.6 6.3 2.6s6.3-1.2 6.3-2.6"/></>)}
    {(type === "rest" || type === "api") && (<><path d="M5 8.2h9.8"/><path d="M12.7 5.8l2.4 2.4-2.4 2.4"/><path d="M19 15.8H9.2"/><path d="M11.3 13.4l-2.4 2.4 2.4 2.4"/></>)}
    {type === "product" && (<><rect x="5" y="5" width="14" height="14" rx="4"/><path d="M8.7 12h6.6"/><path d="M12 8.7v6.6"/><circle cx="12" cy="12" r="2.8"/></>)}
    {type === "ship" && (<><path d="M6.2 12.4l3.6 3.6 8-8"/><path d="M12 4.8l6.2 3.6v7.2L12 19.2l-6.2-3.6V8.4L12 4.8z"/></>)}
    {type === "next" && (<><circle cx="12" cy="12" r="8"/><path d="M8.7 15.6V8.4l6.6 7.2V8.4"/></>)}
    {type === "js" && (<><rect x="4.5" y="4.5" width="15" height="15" rx="3"/><path d="M9.2 10v4.1c0 1-.6 1.5-1.6 1.5-.5 0-.9-.1-1.2-.4"/><path d="M13.1 15c.5.4 1.1.6 1.8.6.9 0 1.5-.4 1.5-1.1 0-.6-.4-.9-1.4-1.2-1.1-.3-1.7-.8-1.7-1.8 0-.9.8-1.6 2-1.6.7 0 1.3.2 1.7.5"/></>)}
    {type === "tailwind" && (<><path d="M4.8 13.2c1.6-3.1 3.7-4.2 6.2-3.1 1.4.6 2.4 1.8 4 1.4 1-.2 1.9-1 2.8-2.3-1.6 3.1-3.7 4.2-6.2 3.1-1.4-.6-2.4-1.8-4-1.4-1 .2-1.9 1-2.8 2.3z"/><path d="M6.2 17.2c1.2-2.2 2.8-3 4.7-2.2 1.1.4 1.8 1.3 3 1 .8-.2 1.4-.7 2.1-1.7"/></>)}
    {type === "docker" && (<><path d="M5 13.2h13.5c-.3 3.4-2.6 5.2-6.7 5.2-3.5 0-5.8-1.7-6.8-5.2z"/><path d="M7.1 9.2h2.4v2.4H7.1zM10.2 9.2h2.4v2.4h-2.4zM10.2 6.2h2.4v2.4h-2.4zM13.3 9.2h2.4v2.4h-2.4z"/></>)}
    {(type === "git" || type === "gitlab") && (<><path d="M12 4.6l7.4 7.4-7.4 7.4L4.6 12 12 4.6z"/><circle cx="9.3" cy="9.3" r="1.2"/><circle cx="14.7" cy="14.7" r="1.2"/><path d="M10.2 10.2l3.6 3.6"/></>)}
    {type === "figma" && (<><path d="M10 4.8h4a2.2 2.2 0 0 1 0 4.4h-4V4.8z"/><path d="M10 9.2h4a2.2 2.2 0 0 1 0 4.4h-4V9.2z"/><path d="M10 13.6h2.2a2.2 2.2 0 1 1-2.2 2.2v-2.2z"/><path d="M10 4.8a2.2 2.2 0 1 0 0 4.4V4.8zM10 9.2a2.2 2.2 0 1 0 0 4.4V9.2z"/></>)}
    {type === "mac" && (<><rect x="4.5" y="6.2" width="15" height="10.8" rx="2"/><path d="M9.5 19h5"/><path d="M12 17v2"/></>)}
    {type === "vercel" && <path d="M12 5.5l7.5 13H4.5l7.5-13z"/>}
    {type === "mongo" && (<><path d="M12 4.7c3.1 3 4.1 5.6 3.1 8.4-.6 1.8-1.8 3.3-3.1 4.8-1.3-1.5-2.5-3-3.1-4.8-1-2.8 0-5.4 3.1-8.4z"/><path d="M12 9.2v10"/></>)}
    {(type === "supabase" || type === "fire") && <path d="M13 3.8L5.8 13h5.5L11 20.2 18.2 11h-5.5L13 3.8z"/>}
    {type === "ai" && (<><path d="M12 4.4l1.7 5.1 5.3 1.7-5.3 1.7L12 18l-1.7-5.1L5 11.2l5.3-1.7L12 4.4z"/><path d="M18.8 4.8l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7z"/></>)}
    {type === "swift" && (<><path d="M5.4 6.3c3.3 3.8 6.4 6 9.8 7.1"/><path d="M7.3 5.1c2.2 2.5 4.7 4.5 7.6 6"/><path d="M5.5 15.6c3.9 2.4 8.2 2 10.9-.7l2.1 1.9c.2-3.6-1.2-7.3-4.2-10.7"/></>)}
    {["node","express","redux","state","ui","cursor","nodes","motion"].includes(type) && (<><rect x="5" y="5" width="14" height="14" rx={type === "motion" ? "7" : "4"}/><path d="M8.2 12h7.6"/>{type !== "express" && <path d="M12 8.2v7.6"/>}{type === "nodes" && <circle cx="12" cy="12" r="2.1"/>}</>)}
  </svg>
);

interface TechTokenProps {
  name: string;
  index?: number;
  variant?: string | number;
  className?: string;
}

const TechToken: React.FC<TechTokenProps> = ({ name, index, variant = "default", className = "" }) => (
  <span
    className={`stack-token stack-token--${variant} ${className}`.trim()}
    data-index={index !== undefined ? String(index).padStart(2, "0") : undefined}
    title={name}
  >
    <span className="stack-mark">
      <StackLogo type={techLogoTypes[name] || "nodes"} />
    </span>
    <span className="stack-token__label">{name}</span>
  </span>
);

export default TechToken;
