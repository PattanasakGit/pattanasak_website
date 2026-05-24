import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pattanasak Atakul — Software Developer",
  description: "Explore my skills, experience, and projects in web development.",
  icons: "/avatar/head.png",
  keywords: [
    "developer website", "frontend developer", "software developer",
    "Pattanasak Atakul", "web portfolio", "web developer", "Pattanasak",
    "portfolio", "resume", "cv", "full-stack developer",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        {/* Prevent dark mode flash by reading localStorage before React hydrates */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem("v3-theme");if(s){document.documentElement.dataset.theme=s;}else if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.dataset.theme="dark";}else{document.documentElement.dataset.theme="light";}}catch(e){}`,
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
