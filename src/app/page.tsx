
"use client"
import { useDarkModeState } from "@/store/Mode";
import Image from "next/image";

export default function Home() {
  const { isDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#000000] bg-opacity-[83%] backdrop-blur-[90px]" : "bg-[#ffffff80] backdrop-blur-[150px]";;
  const text_color = isDarkMode ? "white" : "black";

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${bg_color} `}>
    </main>
  );
}
