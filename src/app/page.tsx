"use client"
import Home from "@/app/componants/Home/Home";
import { useDarkModeState } from "@/store/DarkModeState";
import AboutMe from "./componants/AboutMe/AboutMe";
import Contact from "./componants/Contact/Contact";
import Projects from "./componants/Projects/Projects";
import Skills from "./componants/Skills/Skills";

import { Element } from 'react-scroll';

export default function APP() {
  const { isDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#000000] bg-opacity-[83%] backdrop-blur-[90px]" : "bg-[#ffffff80] backdrop-blur-[200px]";
  const ElementStyles = 'w-full flex items-center justify-center my-16';

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between pt-[13vh] ${bg_color} `}>
      <Element name="hello" className={ElementStyles}> 
        <Home />
      </Element>
      <Element name="about" className={ElementStyles}>
        <AboutMe />
      </Element>
      <Element name="projects" className={ElementStyles}>
        <Projects />
      </Element>
      <Element name="skills" className={ElementStyles}>
        <Skills />
      </Element>
      <Element name="contact" className={ElementStyles}>
        <Contact />
      </Element>    
    </main>
  );
}
