"use client";
import React, { useEffect, useRef, useState } from "react";
import ProjCard, { ProjData } from "./ProjCard";

const CARD_W = 300;
const CARD_GAP = 14;
const CARD_PAD = 48;

interface HorizontalProjScrollProps {
  projects: ProjData[];
  onOpen: (images: string[], start: number) => void;
}

const HorizontalProjScroll: React.FC<HorizontalProjScrollProps> = ({ projects, onOpen }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const rightFadeRef = useRef<HTMLDivElement>(null);
  const leftFadeRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [wrapHeight, setWrapHeight] = useState(0);

  const totalCards = projects.length;
  const totalTravel = (CARD_W + CARD_GAP) * (totalCards - 1);
  const thumbPct = Math.max(8, (1 / totalCards) * 100);

  useEffect(() => {
    setWrapHeight(totalTravel + window.innerHeight);
  }, [totalTravel]);

  useEffect(() => {
    if (!wrapHeight) return;

    const tick = () => {
      const wrap = wrapRef.current;
      if (!wrap) return;
      const top = wrap.getBoundingClientRect().top;
      const scrolled = Math.min(Math.max(-top, 0), totalTravel);
      const prog = totalTravel > 0 ? scrolled / totalTravel : 0;

      if (railRef.current) railRef.current.style.transform = `translateX(${-scrolled}px)`;
      if (thumbRef.current) thumbRef.current.style.left = `${prog * (100 - thumbPct)}%`;
      if (counterRef.current) counterRef.current.textContent = `${Math.min(Math.round(prog * (totalCards - 1)) + 1, totalCards)} / ${totalCards}`;
      if (rightFadeRef.current) rightFadeRef.current.style.opacity = prog > 0.97 ? "0" : "1";
      if (leftFadeRef.current) leftFadeRef.current.style.opacity = prog < 0.03 ? "0" : "1";
      if (hintRef.current) hintRef.current.style.opacity = prog > 0.04 ? "0" : "1";
    };

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [wrapHeight, totalTravel, thumbPct, totalCards]);

  if (!wrapHeight) return null;

  return (
    <div ref={wrapRef} style={{ height: wrapHeight, position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        {/* Heading */}
        <div style={{ position: "absolute", top: "clamp(88px, 12vh, 148px)", left: CARD_PAD, right: CARD_PAD, zIndex: 3, display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 20, pointerEvents: "none" }}>
          <h3 style={{ fontSize: "clamp(28px, 3.2vw, 44px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1, color: "var(--t1)", maxWidth: "22ch" }}>
            Other <em className="acc">experiments</em> &amp; side projects.
          </h3>
          <span className="mono upper" style={{ fontSize: 10, color: "var(--t3)", fontWeight: 500, letterSpacing: "0.14em", whiteSpace: "nowrap" }}>{projects.length} · archived</span>
        </div>

        {/* Card rail */}
        <div ref={railRef} style={{ display: "flex", gap: CARD_GAP, alignItems: "stretch", paddingLeft: CARD_PAD, paddingTop: "clamp(72px, 9vh, 104px)", willChange: "transform" }}>
          {projects.map(p => (
            <div key={p.name} style={{ flexShrink: 0, width: CARD_W, display: "flex" }}>
              <ProjCard p={p} onOpen={onOpen} />
            </div>
          ))}
          <div style={{ flexShrink: 0, width: CARD_PAD }} />
        </div>

        {/* Right vignette */}
        <div ref={rightFadeRef} style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 140, pointerEvents: "none", background: "linear-gradient(to right, transparent, var(--bg) 80%)", opacity: 1, transition: "opacity .5s ease" }} />
        {/* Left vignette */}
        <div ref={leftFadeRef} style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, pointerEvents: "none", background: "linear-gradient(to left, transparent, var(--bg) 80%)", opacity: 0, transition: "opacity .5s ease" }} />

        {/* Scroll hint */}
        <div ref={hintRef} style={{ position: "absolute", right: CARD_PAD, bottom: 52, display: "flex", alignItems: "center", gap: 8, pointerEvents: "none", opacity: 1, transition: "opacity .5s ease" }}>
          <span className="mono" style={{ fontSize: 11, color: "var(--t3)" }}>scroll to explore</span>
          <span style={{ fontSize: 18, color: "var(--t3)", animation: "drift 1.5s ease-in-out infinite" }}>→</span>
        </div>

        {/* Progress bar */}
        <div style={{ position: "absolute", bottom: 28, left: CARD_PAD, right: CARD_PAD, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ height: 2, background: "var(--line)", borderRadius: 999, overflow: "hidden", position: "relative" }}>
            <div ref={thumbRef} style={{ position: "absolute", left: 0, top: 0, bottom: 0, borderRadius: 999, background: "var(--t1)", width: `${thumbPct}%` }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span ref={counterRef} className="mono" style={{ fontSize: 10, color: "var(--t3)" }}>1 / {totalCards}</span>
            <span className="mono" style={{ fontSize: 10, color: "var(--t3)" }}>other projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProjScroll;
