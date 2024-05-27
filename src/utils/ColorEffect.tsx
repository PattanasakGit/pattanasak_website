import { useDarkModeState } from "@/store/DarkModeState";
import React, { useMemo, useState } from "react";

export const TopicEffect: React.FC<ITextEffectProps> = ({ className, children }) => {
  return (
    <h1 className={`text-gradient ${className}`}>
      {children}
    </h1>
  );
};


export const CustomText: React.FC<ICustomText> = ({ className, children }) => {
  const { isDarkMode } = useDarkModeState();

  const textColor = useMemo(() => {
    return isDarkMode ? "#d9d9d9" : "#696969";
  }, [isDarkMode]);

  return (
    <p className={`${className}`} style={{ color: textColor }}>
      {children}
    </p>
  );
};

export const BGEffect: React.FC<ICustomText> = ({ className, children }) => {
  const { isDarkMode } = useDarkModeState();

  const backgroundColor = useMemo(() => {
    return isDarkMode ? "#00000050" : "#FFFFFF";
  }, [isDarkMode]);

  return (
    <div className={`${className} shadow-lg`} style={{ backgroundColor }}>
      {children}
    </div>
  );
};
