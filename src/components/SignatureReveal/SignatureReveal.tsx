"use client";
import React, { useEffect, useRef, useState } from "react";

const SignatureReveal: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setOn(true); }),
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onMove = (event: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((event.clientX - r.left) / r.width) * 100;
    const y = ((event.clientY - r.top) / r.height) * 100;
    el.style.setProperty("--mx", `${x.toFixed(1)}%`);
    el.style.setProperty("--my", `${y.toFixed(1)}%`);
  };

  const cls = [
    "sig-reveal",
    on ? "sig-reveal--on" : "",
    hovered ? "sig-reveal--hover" : "",
  ].filter(Boolean).join(" ");

  return (
    <section
      ref={ref}
      className={cls}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Pattanasak A."
    >
      <div className="sig-reveal__spot" aria-hidden="true" />
      <div className="sig-reveal__glow" aria-hidden="true" />
      <div className="sig-reveal__grid" aria-hidden="true" />

      <div className="sig-reveal__inner">
        <div className="sig-reveal__top">
          <span className="mono upper">© 2026 — Pattanasak Atakul</span>
          <span className="mono upper">Crafted in Bangkok · Built from scratch</span>
        </div>

        <div className="sig-reveal__name">
          <span className="sig-outlined" data-text="PATTANASAK">
            <span className="sig-outlined__base">PATTANASAK</span>
            <span className="sig-outlined__lit" aria-hidden="true">PATTANASAK</span>
          </span>
          <span className="sig-accent-a">A.</span>
        </div>

        <div className="sig-reveal__bot">
          <span className="mono upper">end of file</span>
          <span className="mono upper sig-reveal__cursor">
            {"//"} <em className="sig-blink">_</em>
          </span>
        </div>
      </div>
    </section>
  );
};

export default SignatureReveal;
