"use client";
import React, { useState } from "react";
import TechToken from "@/components/shared/TechToken";

export interface ProjData {
  name: string;
  year: string;
  tag: string;
  images: string[];
  desc: string;
  stack: string[];
  link?: string;
}

interface ProjCardProps {
  p: ProjData;
  onOpen: (images: string[], start: number) => void;
}

const ProjCard: React.FC<ProjCardProps> = ({ p, onOpen }) => {
  const [ii, setIi] = useState(0);
  const [hov, setHov] = useState(false);
  const has = p.images.length > 0;

  const overlayStyle: React.CSSProperties = {
    color: "var(--t1)",
    background: "color-mix(in srgb, var(--paper) 92%, transparent)",
    border: "1px solid color-mix(in srgb, var(--line) 82%, transparent)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  return (
    <article
      className="card lift"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ width: "100%", height: 462, padding: 14, display: "flex", flexDirection: "column", overflow: "hidden", boxShadow: hov ? "0 22px 54px -28px rgba(20,20,15,0.28), 0 10px 24px -20px rgba(20,20,15,0.22)" : "0 12px 34px -30px rgba(20,20,15,0.24)", transform: hov ? "translateY(-3px)" : "translateY(0)", transition: "border-color .25s ease, transform .25s ease, box-shadow .25s ease" }}
    >
      {/* Image area */}
      <div
        style={{ position: "relative", aspectRatio: "16/10", borderRadius: 10, overflow: "hidden", marginBottom: 16, background: "var(--bg2)", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)", cursor: has ? "zoom-in" : "default" }}
        onClick={() => has && onOpen(p.images, ii)}
      >
        {has ? (
          <img src={p.images[ii]} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease", transform: hov ? "scale(1.04)" : "scale(1)" }} />
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--f-mono)", fontSize: 13, color: "var(--t3)" }}>{p.name}</div>
        )}
        {has && p.images.length > 1 && (
          <>
            <button onClick={e => { e.stopPropagation(); setIi(x => (x - 1 + p.images.length) % p.images.length); }} aria-label="Prev" style={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", opacity: hov ? 1 : 0, width: 28, height: 28, borderRadius: "50%", ...overlayStyle, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity .2s", cursor: "pointer" }}>‹</button>
            <button onClick={e => { e.stopPropagation(); setIi(x => (x + 1) % p.images.length); }} aria-label="Next" style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", opacity: hov ? 1 : 0, width: 28, height: 28, borderRadius: "50%", ...overlayStyle, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", transition: "opacity .2s", cursor: "pointer" }}>›</button>
            <span className="mono" style={{ position: "absolute", bottom: 8, right: 10, fontSize: 10, padding: "2px 7px", borderRadius: 999, ...overlayStyle }}>{ii + 1}/{p.images.length}</span>
          </>
        )}
        <span className="mono" style={{ position: "absolute", top: 10, left: 10, fontSize: 10.5, padding: "2px 8px", borderRadius: 6, ...overlayStyle, fontWeight: 500, letterSpacing: "-0.005em" }}>{p.year}</span>
      </div>

      {/* Content */}
      <div style={{ padding: "0 6px 6px", display: "flex", flexDirection: "column", gap: 8, flexGrow: 1 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10, minHeight: 40 }}>
          <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--t1)", letterSpacing: "-0.022em", lineHeight: 1.2 }}>{p.name}</h4>
        </div>
        <p className="mono upper" style={{ fontSize: 9.5, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em" }}>{p.tag}</p>
        <p style={{ fontSize: 13, color: "var(--t2)", lineHeight: 1.6, flexGrow: 1, minHeight: 62, textWrap: "pretty" } as React.CSSProperties}>{p.desc}</p>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 2, minHeight: 48, alignContent: "flex-start" }}>
          {p.stack.slice(0, 4).map(s => <TechToken key={s} name={s} variant="mini" />)}
        </div>
        {p.link && (
          <a href={p.link} target="_blank" rel="noreferrer" style={{ fontSize: 12.5, fontWeight: 500, color: "var(--t3)", display: "inline-flex", alignItems: "center", gap: 4, marginTop: "auto", transition: "color .15s" }}
            onMouseOver={e => e.currentTarget.style.color = "var(--accent)"}
            onMouseOut={e => e.currentTarget.style.color = "var(--t3)"}
          >View project →</a>
        )}
      </div>
    </article>
  );
};

export default ProjCard;
