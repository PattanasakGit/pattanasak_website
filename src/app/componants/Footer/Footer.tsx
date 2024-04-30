"use client"
import { CustomText } from "@/utils/ColorEffect";
import React, { useEffect, useState } from "react";
import { IconBrandGithub } from '@tabler/icons-react';
import { IconDownload } from '@tabler/icons-react';
import { IconMail } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useDarkModeState } from "@/store/DarkModeState";
import { Data } from "@/store/Data";

const Footer: React.FC = () => {
  const { isDarkMode } = useDarkModeState();
  const [bgColor, setBgColor] = useState('');
  const btnStyle = "py-4 px-8 cursor-pointer flex items-center justify-center";

  useEffect(() => {
    setBgColor(isDarkMode ? 'bg-zinc-800' : 'bg-slate-50');
  }, [isDarkMode]);

  const handleIconClick = (url: string) => {
    window.open(url, '_blank');
  }

  return (
    <div className={`w-full h-32 ${bgColor} flex justify-center items-center px-1/2 shadow-[10px_0px_5px_0px_rgba(0,0,0,1)]`}>
      <button name='btn-github' className={btnStyle} onClick={() => handleIconClick(Data.links.github_url)}>
        <CustomText>
          <IconBrandGithub />
        </CustomText>
      </button>
      <button name='btn-resume-in-footer' className={btnStyle} onClick={() => handleIconClick(Data.links.download_url)}>
        <CustomText>
          <IconDownload />
        </CustomText>
      </button>
      <button name='btn-email-in-footer' className={btnStyle} onClick={() => handleIconClick(Data.links.mail_url)}>
        <CustomText>
          <IconMail />
        </CustomText>
      </button>
      <button name='btn-linkedin-in-footer' className={btnStyle} onClick={() => handleIconClick(Data.links.linkedin_url)}>
        <CustomText>
          <IconBrandLinkedin />
        </CustomText>
      </button>
    </div>
  );
};

export default Footer;