import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const ibmMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--f-mono",
  display: "swap",
});
const ibmSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--f-sans",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--f-display",
  display: "swap",
});

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
    <html lang="en" data-theme="light" className={`${ibmMono.variable} ${ibmSans.variable} ${spaceGrotesk.variable}`}>
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
