import React, { CSSProperties, ElementType } from "react";

interface DisplayProps {
  children: React.ReactNode;
  size?: "xl" | "lg" | "md";
  align?: "left" | "center" | "right";
  as?: ElementType;
  style?: CSSProperties;
  className?: string;
}

const Display: React.FC<DisplayProps> = ({
  children, size = "xl", align = "left",
  as: Tag = "h2", style = {}, className = "",
}) => {
  const fs = {
    xl: "clamp(56px, 8.5vw, 116px)",
    lg: "clamp(44px, 6vw, 88px)",
    md: "clamp(32px, 4.5vw, 60px)",
  }[size];

  return (
    <Tag
      className={`display ${className}`.trim()}
      style={{ fontSize: fs, textAlign: align, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Display;
