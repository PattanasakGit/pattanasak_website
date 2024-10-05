import { useDarkModeState } from "@/store/DarkModeState";
import { IconSunMoon } from "@tabler/icons-react";
import React from "react";
import { Link } from 'react-scroll';

const NavbarDesktop: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#00000080] " : "bg-[#ffffff80] ";
  const text_color = isDarkMode ? "white" : "black";

  const btnAction = () => {    
    const css_light_mode = "bg-[#B3C89055] p-3 rounded-[100px] cursor-pointer";
    const css_dark_mode = "bg-[#FF8A0880] p-3 rounded-[100px] text-white cursor-pointer";
    return isDarkMode ? css_dark_mode : css_light_mode;
  };

  const css_btn = () => {    
    const css_light_mode = "mx-2 w-[20vw] text-[#333] text-center font-bold hover:text-orange-500 p-3 rounded-[100px] cursor-pointer";
    const css_dark_mode = "mx-2 w-[20vw] text-[#fff] text-center font-bold hover:text-[#FFBF00] p-3 rounded-[100px] text-white cursor-pointer";
    return isDarkMode ? css_dark_mode : css_light_mode;
  };

  return (
    <div className="h-[70px] flex justify-center items-center w-full mt-8 fixed top-0 z-[1000]">
      <img src={"avatar/twofing.gif"} alt="avatar" className={`${bg_color} backdrop-blur-[10px] border-[1px] border-[#75757584] shadow-xl w-[65px] h-[65px] rounded-[500px]`}/>
      <div className={`${bg_color} backdrop-blur-[10px] flex justify-between p-2 rounded-[100px] mx-8 border-[1px] border-[#75757584] shadow-xl w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] xl:w-[60%] md:text-[14px]`} >
        <Link to="hello" spy={true} smooth={true} duration={500} offset={-150} className={`${css_btn()} ml-0 hidden xl:block`} activeClass={btnAction()}> HELLO </Link>
        <Link to="about" spy={true} smooth={true} duration={500} offset={-150} className={`${css_btn()}  ml-0 xl:ml-2`} activeClass={btnAction()}> ABOUT ME </Link>
        <Link to="experiences" spy={true} smooth={true} duration={500} offset={-150} className={`${css_btn()} truncate`} activeClass={btnAction()}> EXPERIENCES </Link>
        <Link to="projects" spy={true} smooth={true} duration={500} offset={-150} className={`${css_btn()} `} activeClass={btnAction()}> PROJECTS </Link>
        <Link to="skills" spy={true} smooth={true} duration={500} offset={-150} className={`${css_btn()} `} activeClass={btnAction()}> SKILLS </Link>
        <Link to="contact" spy={true} smooth={true} duration={500} offset={-150} className={`${css_btn()} mr-0 `} activeClass={btnAction()}> CONTACT </Link>
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
