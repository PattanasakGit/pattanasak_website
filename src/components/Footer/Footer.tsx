"use client"
import { CustomText } from "@/utils/ColorEffect";
import React, { useEffect, useState } from "react";
import { IconBrandGithub, IconDownload, IconMail, IconBrandLinkedin } from '@tabler/icons-react';
import { useDarkModeState } from "@/store/DarkModeState";
import { Data } from "@/store/Data";

const Footer: React.FC = () => {
  const { isDarkMode } = useDarkModeState();
  const [bgColor, setBgColor] = useState('');
  const btnStyle = "relative py-4 px-8 cursor-pointer flex items-center justify-center";
  const iconHover = "hover:text-amber-500";

  useEffect(() => {
    setBgColor(isDarkMode ? 'bg-zinc-800' : 'bg-slate-50');
  }, [isDarkMode]);

  const handleIconClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <section className={`w-full h-32 ${bgColor} flex justify-center items-center px-1/2 shadow-[1px_0px_10px_5px_rgba(0,0,0,0.1)]`}>
      <button id='btn-github' className={btnStyle} onClick={() => handleIconClick(Data.links.github_url)} title="GitHub">
        <CustomText>
          <IconBrandGithub className={iconHover}/>
        </CustomText>
      </button>
      <button id='btn-resume-in-footer' className={btnStyle} onClick={() => handleIconClick(Data.links.download_url)} title="Resume">
        <CustomText>
          <IconDownload className={iconHover} />
        </CustomText>
      </button>
      <button id='btn-email-in-footer' className={btnStyle} onClick={() => handleIconClick(Data.links.mail_url)} title="Email">
        <CustomText>
          <IconMail className={iconHover} />
        </CustomText>
      </button>
      <button id='btn-linkedin-in-footer' className={btnStyle} onClick={() => handleIconClick(Data.links.linkedin_url)} title="LinkedIn">
        <CustomText>
          <IconBrandLinkedin className={iconHover} />
        </CustomText>
      </button>
    </section>
  );
};

export default Footer;
