"use client"
import { useDarkModeState } from "@/store/Mode";
import Home from "@/app/componants/Home"
import AboutMe from "./componants/AboutMe";
import Skills from "./componants/Skills";
import Exexperience from "./componants/Exexperience";
import Projects from "./componants/Projects";
import Contact from "./componants/Contact";

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
      
      {/* <Exexperience /> */}
      
    </main>
  );
}
