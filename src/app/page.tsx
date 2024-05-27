"use client";
import Home from "@/components/Home/Home";
import { useDarkModeState } from "@/store/DarkModeState";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { Element } from 'react-scroll';

export default function APP() {
  const { isDarkMode } = useDarkModeState();
  const bg_image = isDarkMode ? "url('/bg-black.webp')" : "url('/bg-white.webp')";
  const ElementStyles = 'w-full flex items-center justify-center my-16';
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between`}
      style={{
        backgroundImage: bg_image,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}
    >
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
