"use client"
import { useDarkModeState } from "@/store/Mode";
import Home from "@/app/componants/Home"

export default function APP() {
  const { isDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#000000] bg-opacity-[83%] backdrop-blur-[90px]" : "bg-[#ffffff80] backdrop-blur-[200px]";
  
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-[13vh] ${bg_color} `}>
      <Home />
    </main>
  );
}
