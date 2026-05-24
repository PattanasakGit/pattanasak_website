"use client";
import React, { useEffect, useRef, useState, CSSProperties } from "react";

interface RevealWrapperProps {
  children: React.ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
}

const RevealWrapper: React.FC<RevealWrapperProps> = ({ children, delay = 0, style = {}, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.07 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity .55s ease ${delay}ms, transform .55s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default RevealWrapper;
