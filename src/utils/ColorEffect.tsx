import React from "react";
import { useDarkModeState } from "@/store/Mode";

export const TopicEffect: React.FC<ITextEffectProps> = ({ className , children}) => (
  <h1
    className={`bg-cover bg-no-repeat ${className}`}
    style={{
      // fontSize: "60px",
      // fontFamily: "font-family: 'IBM Plex Sans Thai', sans-serif !important;",
      fontWeight: 800,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundImage: "url('https://media.giphy.com/media/FyoaJE2iah7WYeyxWr/giphy.gif')",
    }}
  >
    {children}
  </h1>
);

export const CustomText: React.FC<ICustomText> = ({ className, children }) => {
  const { isDarkMode } = useDarkModeState();
  const text_Color = () => {
    return isDarkMode ? '#d9d9d9' : '#696969';
  };
  
  return (
    <p className={`${className}`} style={{color:text_Color()}}>
      {children}
    </p>
  );
};

export const BGEffect: React.FC<ICustomText> = ({ className, children }) => {
  const { isDarkMode } = useDarkModeState();
  const bg_Color = () => {
    return isDarkMode ? '#00000050' : '#FFFFFF';
  };
  
  return (
    <div className={`${className} shadow-lg`} style={{backgroundColor:bg_Color()}}>
        {children}
    </div>
  );
};