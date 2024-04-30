"use client";
import { useDarkModeState } from "@/store/DarkModeState";
import { IconSunMoon, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { Link } from 'react-scroll';
import { IconMenu2 } from '@tabler/icons-react';
import { CustomText } from "@/utils/ColorEffect";

const NavbarPhone: React.FC = () => {
  const { isDarkMode, setIsDarkMode } = useDarkModeState();
  const bg_color = isDarkMode ? "bg-[#000000cc] " : "bg-[#ffffffcc] ";
  const text_color = isDarkMode ? "white" : "black";

  const css_btn = () => {    
    const css_light_mode = "h-full w-[300px] text-center hover:bg-[#E8EFCF] p-3 rounded-[100px] cursor-pointer";
    const css_dark_mode = "h-full w-[300px] text-center hover:bg-[#FFBB70] p-3 rounded-[100px] text-white cursor-pointer";
    return isDarkMode ? css_dark_mode : css_light_mode;
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="h-[70px] flex justify-center items-center w-full mt-8 fixed top-0 z-[1000]">
      <button 
        name='btn-open-modal'
        className={`${bg_color}  backdrop-blur-[10px] border-[1px] border-[#75757584] shadow-xl w-[65px] h-[65px] flex items-center justify-center rounded-[1000px]`}
        onClick={toggleDropdown}
      >
        <IconMenu2 stroke={2} className={`text-${text_color}`} />
      </button>

      <div>
        <div className={`${bg_color} text-${text_color} h-[65px] flex justify-center items-center backdrop-blur-[10px] p-8 rounded-[100px] mx-8 border-[1px] border-[#75757584] shadow-xl `} >PATTANASAK</div>
        {isDropdownOpen && (
            <>
                <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 z-10"></div>
                <div className={`${bg_color} absolute top-full left-1/2 transform -translate-x-1/2 w-[90%] h-[50vh] rounded-[50px] shadow-lg mt-6 p-8 z-20 grid items-center justify-center`}>
                    <button name='btn-close-modal' className="flex justify-end" onClick={toggleDropdown}> 
                       <CustomText> <IconX stroke={3} /> </CustomText>
                    </button>
                    <Link to="hello" smooth={true} duration={500} offset={-150} className={css_btn()} onClick={()=>{setIsDropdownOpen(false)}} > HELLO </Link>
                    <Link to="about" smooth={true} duration={500} offset={-150} className={css_btn()} onClick={()=>{setIsDropdownOpen(false)}} > ABOUT ME </Link>
                    <Link to="projects" smooth={true} duration={500} offset={-150} className={css_btn()} onClick={()=>{setIsDropdownOpen(false)}} > PROJECTS </Link>
                    <Link to="skills" smooth={true} duration={500} offset={-150} className={css_btn()} onClick={()=>{setIsDropdownOpen(false)}} > SKILLS </Link>
                    <Link to="contact" smooth={true} duration={500} offset={-150} className={css_btn()} onClick={()=>{setIsDropdownOpen(false)}} > CONTACT </Link>
                </div>
            </>
        )}
      </div>
      
      <button
        name='btn-Darkmode-in-phone'
        className={`${bg_color}  backdrop-blur-[10px] border-[1px] border-[#75757584] shadow-xl w-[65px] h-[65px] flex items-center justify-center rounded-[1000px]`}
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        <IconSunMoon stroke={2} className={`text-${text_color}`} />
      </button>
    </div>
  );
};

export default NavbarPhone;
