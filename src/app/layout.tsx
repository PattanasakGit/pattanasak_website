import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componants/Navbar/Navbar";
import Footer from "./componants/Footer/Footer";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pattanasak-Dev",
  description: "Explore my skills, experience, and projects in web development.",
  icons: "/avatar/head.png",
  keywords: [
    "developer website",
    "frontend developer",
    "software developer",
    "frontend developer",
    "Pattanasak Atakul",
    "web portfolio",
    "web developer",
    "Pattanasak",
    "portfolio",
    "resume",
    "cv",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
