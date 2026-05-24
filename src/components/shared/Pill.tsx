import React from "react";

interface PillProps {
  children: React.ReactNode;
  dot?: boolean;
  accent?: boolean;
}

const Pill: React.FC<PillProps> = ({ children, dot = false, accent = false }) => (
  <span className="pill">
    {dot
      ? <span className="dot" />
      : <span className="slash">{accent ? "/*" : "//"}</span>}
    <span>{children}</span>
  </span>
);

export default Pill;
