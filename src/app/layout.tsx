import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

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
