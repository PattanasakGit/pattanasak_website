"use client"
import { useDarkModeState } from "@/store/Mode";
import Home from "@/app/componants/Home"
import AboutMe from "./componants/AboutMe";
import Skills from "./componants/Skills";
import Exexperience from "./componants/Exexperience";
import Projects from "./componants/Projects";
import Contact from "./componants/Contact";

export default function APP() {
  const { isDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#000000] bg-opacity-[83%] backdrop-blur-[90px]" : "bg-[#ffffff80] backdrop-blur-[200px]";
  
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-[13vh] ${bg_color} `}>
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      
      {/* <Exexperience /> */}
      
    </main>
  );
}
