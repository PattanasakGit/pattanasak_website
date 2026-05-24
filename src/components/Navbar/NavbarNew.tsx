"use client";
import React, { useEffect, useState } from "react";
import { useDarkModeState } from "@/store/DarkModeState";
import { ME } from "@/store/siteData";

const NAV = [
  { id: "work", l: "work" },
  { id: "experience", l: "experience" },
  { id: "about", l: "about" },
  { id: "stack", l: "stack" },
  { id: "contact", l: "contact" },
];

const glassLight = {
  bg: "rgba(255, 255, 255, 0.72)",
  border: "rgba(0, 0, 0, 0.10)",
  shadow: "0 1px 1px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.08), 0 0 0 0.5px rgba(255,255,255,0.5) inset",
};
const glassDark = {
  bg: "rgba(14, 14, 10, 0.76)",
  border: "rgba(255, 255, 255, 0.09)",
  shadow: "0 1px 1px rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06) inset",
};

const useActiveSection = () => {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = ["home", "work", "experience", "about", "stack", "contact"];
    const onScroll = () => {
      const y = window.scrollY + 140;
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return active;
};

const NavbarNew: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeState();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const g = isDarkMode ? glassDark : glassLight;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
  };

  const Divider = () => (
    <span style={{ width: 1, height: 18, background: isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)", borderRadius: 1, flexShrink: 0 }} />
  );

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, display: "flex", justifyContent: "center", padding: "16px var(--gut)", pointerEvents: "none" }}>

      {/* Desktop glass pill */}
      <div className="nav-pill-v4" style={{
        background: scrolled ? g.bg : (isDarkMode ? "rgba(14,14,10,0.30)" : "rgba(255,255,255,0.30)"),
        border: `1px solid ${scrolled ? g.border : "transparent"}`,
        boxShadow: scrolled ? g.shadow : "none",
      }}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Home"
          style={{ width: 36, height: 36, borderRadius: 999, background: isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--f-mono)", fontWeight: 700, fontSize: 12, color: "var(--t1)", letterSpacing: "-0.04em", margin: "0 4px 0 2px", transition: "background .2s, transform .2s" }}
          onMouseOver={e => { e.currentTarget.style.background = isDarkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.14)"; e.currentTarget.style.transform = "scale(1.06)"; }}
          onMouseOut={e => { e.currentTarget.style.background = isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "scale(1)"; }}
        >Pa</button>

        <Divider />

        <div style={{ display: "flex", alignItems: "center", gap: 2, padding: "0 6px" }}>
          {NAV.map(n => {
            const isActive = active === n.id;
            return (
              <button key={n.id} onClick={() => go(n.id)} style={{ position: "relative", padding: "7px 14px", borderRadius: 999, fontSize: 14, fontWeight: isActive ? 600 : 400, color: isActive ? "var(--t1)" : "var(--t2)", background: isActive ? (isDarkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.07)") : "transparent", transition: "color .2s, background .2s", letterSpacing: "-0.01em" }}
                onMouseOver={e => { if (!isActive) e.currentTarget.style.background = isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"; }}
                onMouseOut={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >{n.l}</button>
            );
          })}
        </div>

        <Divider />

        <button onClick={toggleDarkMode} aria-label="Toggle theme" style={{ width: 36, height: 36, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, color: "var(--t2)", margin: "0 2px", transition: "background .2s, color .2s" }}
          onMouseOver={e => { e.currentTarget.style.background = isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"; e.currentTarget.style.color = "var(--t1)"; }}
          onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--t2)"; }}
        >{isDarkMode ? "☀" : "☾"}</button>

        <a href={ME.cvUrl} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", padding: "8px 18px", borderRadius: 999, background: "var(--t1)", color: "var(--bg)", fontSize: 13.5, fontWeight: 600, letterSpacing: "-0.01em", margin: "0 2px 0 4px", transition: "transform .2s, opacity .2s" }}
          onMouseOver={e => { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "scale(0.97)"; }}
          onMouseOut={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "scale(1)"; }}
        >Resume</a>
      </div>

      {/* Mobile: two pills */}
      <div className="nav-mobile-bar">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ height: 44, padding: "0 16px", borderRadius: 999, background: g.bg, border: `1px solid ${g.border}`, backdropFilter: "blur(24px) saturate(200%)", WebkitBackdropFilter: "blur(24px) saturate(200%)", boxShadow: g.shadow, fontFamily: "var(--f-mono)", fontWeight: 700, fontSize: 13, color: "var(--t1)", letterSpacing: "-0.04em" }}>Pa</button>

        <button onClick={() => setOpen(o => !o)} style={{ height: 44, padding: "0 18px", borderRadius: 999, background: g.bg, border: `1px solid ${g.border}`, backdropFilter: "blur(24px) saturate(200%)", WebkitBackdropFilter: "blur(24px) saturate(200%)", boxShadow: g.shadow, fontSize: 18, color: "var(--t1)", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "var(--t2)" }}>Menu</span>
          <span>{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile dropdown sheet */}
      {open && (
        <div className="nav-sheet" style={{ background: g.bg, border: `1px solid ${g.border}`, boxShadow: g.shadow }}>
          {NAV.map(n => (
            <button key={n.id} onClick={() => go(n.id)} style={{ display: "block", width: "100%", padding: "14px 22px", textAlign: "left", fontSize: 17, fontWeight: active === n.id ? 600 : 400, color: active === n.id ? "var(--accent)" : "var(--t1)", letterSpacing: "-0.015em", borderBottom: `1px solid ${isDarkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)"}` }}>{n.l}</button>
          ))}
          <div style={{ display: "flex", gap: 8, padding: "12px 16px 6px" }}>
            <button onClick={toggleDarkMode} style={{ flex: 1, padding: "11px 0", background: isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)", borderRadius: 12, fontSize: 14, color: "var(--t2)", fontWeight: 500 }}>{isDarkMode ? "☀ Light" : "☾ Dark"}</button>
            <a href={ME.cvUrl} target="_blank" rel="noreferrer" style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "center", padding: "11px 0", background: "var(--t1)", color: "var(--bg)", borderRadius: 12, fontSize: 14, fontWeight: 600 }}>Resume ↗</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarNew;
