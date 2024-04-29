import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./componants/Navbar/Navbar";
import Footer from "./componants/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pattanasak-Dev",
  description: "Explore my skills, experience, and projects in web development.",
  icons: "/avatar/head.png",
  keywords: [
    "developer website",
    "frontend developer",
    "software developer",
    "web portfolio",
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
        <Footer/>
      </body>
    </html>
  );
}
