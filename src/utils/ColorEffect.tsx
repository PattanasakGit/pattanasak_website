import React from "react";
import { useDarkModeState } from "@/store/Mode";

export const TopicEffect: React.FC<ITextEffectProps> = ({ text, className }) => (
  <h1
    className={`bg-cover bg-no-repeat ${className}`}
    style={{
      fontSize: "80px",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundImage: "url('https://media.giphy.com/media/FyoaJE2iah7WYeyxWr/giphy.gif')",
    }}
  >
    {text}
  </h1>
);

export const CustomText: React.FC<ICustomText> = ({ className, children }) => {
  const { isDarkMode } = useDarkModeState();
  return (
    <p className={`${className} ${isDarkMode ? 'text-white' : 'text-black'}`}>
      {children}
    </p>
  );
};