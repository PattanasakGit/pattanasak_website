import { useDarkModeState } from "@/store/DarkModeState";
import { IconSunMoon } from "@tabler/icons-react";
import React from "react";
import { Link } from 'react-scroll';

const NavbarDesktop: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#00000080] " : "bg-[#ffffff80] ";
  const text_color = isDarkMode ? "white" : "black";

  const css_btn = () => {    
    const css_light_mode = "w-[20vw] text-center hover:bg-[#E8EFCF] p-3 rounded-[100px] cursor-pointer";
    const css_dark_mode = "w-[20vw] text-center hover:bg-[#FFBB70] p-3 rounded-[100px] text-white cursor-pointer";
    return isDarkMode ? css_dark_mode : css_light_mode;
  };

  return (
    <div className="h-[70px] flex justify-center items-center w-full mt-8 fixed top-0 z-[1000]">
      <img src={"avatar/twofing.gif"} alt="avatar" className={`${bg_color} backdrop-blur-[10px] border-[1px] border-[#75757584] shadow-xl w-[65px] h-[65px] rounded-[500px]`}/>
      <div className={`${bg_color} backdrop-blur-[10px] flex justify-between p-2 rounded-[100px] mx-8 border-[1px] border-[#75757584] shadow-xl w-[90%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%]`} >
        <Link to="hello" smooth={true} duration={500} offset={-150} className={css_btn()}> HELLO </Link>
        <Link to="about" smooth={true} duration={500} offset={-150} className={css_btn()}> ABOUT ME </Link>
        <Link to="projects" smooth={true} duration={500} offset={-150} className={css_btn()}> PROJECTS </Link>
        <Link to="skills" smooth={true} duration={500} offset={-150} className={css_btn()}> SKILLS </Link>
        <Link to="contact" smooth={true} duration={500} offset={-150} className={css_btn()}> CONTACT </Link>
      </div>
      
      <button
        name='btn-Darkmode-in-Desktop'
        className={`${bg_color}  backdrop-blur-[10px] border-[1px] border-[#75757584] shadow-xl w-[65px] h-[65px] flex items-center justify-center rounded-[1000px]`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <IconSunMoon stroke={2} className={`text-${text_color}`} />
      </button>
    </div>
  );
};

export default NavbarDesktop;
