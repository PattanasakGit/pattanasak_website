"use client";
import React, { useEffect } from "react";
import { IconSunMoon } from "@tabler/icons-react";
import { useDarkModeState } from "@/store/Mode";
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#00000080] " : "bg-[#ffffff80] ";
  const text_color = isDarkMode ? "white" : "black";

  const css_hover_btn = () => {    
    const css_light_mode = "hover:bg-[#E8EFCF] p-3 rounded-[100px]";
    const css_dark_mode = "hover:bg-[#FFBB70] p-3 rounded-[100px] text-white";
    return isDarkMode ? css_dark_mode : css_light_mode;
  };

  return (
    <div className="h-[70px] flex justify-center items-center w-screen mt-8 fixed top-0 z-[1000]">
      <img src={"avatar.gif"} alt="avatar" className={`${bg_color} backdrop-blur-[10px] border-[1px] border-gray-400 shadow-xl w-[65px] h-[65px] rounded-[500px]`}/>
      <div className={`${bg_color} backdrop-blur-[10px] flex justify-between w-1/2 p-2 rounded-[100px] mx-8 border-[1px] border-gray-400 shadow-xl `} >
        <Link to="hello" smooth={true} duration={500} offset={-150} className={css_hover_btn()}> HELLO </Link>
        <Link to="about" smooth={true} duration={500} offset={-150} className={css_hover_btn()}> ABOUT ME </Link>
        <Link to="projects" smooth={true} duration={500} offset={-150} className={css_hover_btn()}> MY PROJECTS </Link>
        <Link to="skills" smooth={true} duration={500} offset={-150} className={css_hover_btn()}> SKILLS </Link>
        <Link to="contact" smooth={true} duration={500} offset={-150} className={css_hover_btn()}> CONTACT </Link>
      </div>
      <button
        className={`${bg_color}  backdrop-blur-[10px] border-[1px] border-gray-400 shadow-xl w-[65px] h-[65px] flex items-center justify-center rounded-[1000px]`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <IconSunMoon stroke={2} className={`text-${text_color}`} />
      </button>
    </div>
  );
};

export default Navbar;
