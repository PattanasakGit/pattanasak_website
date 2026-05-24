"use client";
import React, { useCallback, useState } from "react";
import RevealWrapper from "@/components/shared/RevealWrapper";
import Pill from "@/components/shared/Pill";
import Display from "@/components/shared/Display";
import TechToken from "@/components/shared/TechToken";
import Modal from "@/components/shared/Modal";
import HorizontalProjScroll from "./HorizontalProjScroll";
import { ME, CASES, PROJ } from "@/store/siteData";

type WorkPreviewKind = "inventory" | "barcode" | "theme";

const KIND_MAP: Record<string, WorkPreviewKind> = {
  "inventory-pos": "inventory",
  "match-barcode": "barcode",
  "paenia": "theme",
};

const WorkPreview: React.FC<{ kind: WorkPreviewKind; images?: string[] }> = ({ kind, images = [] }) => {
  if (images.length > 0) {
    return <img src={images[0]} alt="" loading="lazy" style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }} />;
  }
  if (kind === "inventory") {
    return (
      <svg viewBox="0 0 600 380" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs><linearGradient id="bgPOS" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f8faf7"/><stop offset="1" stopColor="#edf2ea"/></linearGradient></defs>
        <rect width="600" height="380" fill="url(#bgPOS)"/>
        <g opacity="0.38">{Array.from({length:12}).map((_,r)=>Array.from({length:18}).map((_,c)=><circle key={`${r}-${c}`} cx={28+c*32} cy={32+r*28} r="1.2" fill="#b8c7b3"/>))}</g>
        <g transform="translate(54 46)"><rect width="492" height="288" rx="16" fill="#ffffff" stroke="#d8dfd4"/><rect x="18" y="18" width="456" height="42" rx="11" fill="#0e0e0c"/><text x="38" y="45" fontFamily="IBM Plex Mono,monospace" fontSize="13" fill="#fff" fontWeight="600">Inventory POS</text><text x="376" y="45" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="#9db39a">70 branches</text><g transform="translate(32 88)"><rect width="128" height="76" rx="12" fill="#f7f8f5" stroke="#edf0ea"/><text x="16" y="28" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#6a6a64" fontWeight="600">POSTGRESQL</text><text x="16" y="56" fontFamily="Space Grotesk,IBM Plex Sans,sans-serif" fontSize="28" fill="#0e0e0c" fontWeight="700">SQL</text><circle cx="106" cy="28" r="7" fill="#4d8a4f"/></g><g transform="translate(180 88)">{[["stock movement","synced"],["sales support","stable"],["branch transfer","queued"],["inventory audit","ready"]].map((row,i)=><g key={row[0]} transform={`translate(0 ${i*42})`}><rect width="286" height="30" rx="7" fill={i%2?"#f8faf7":"#ffffff"} stroke="#edf0ea"/><text x="14" y="20" fontFamily="IBM Plex Sans,sans-serif" fontSize="12" fill="#0e0e0c" fontWeight="600">{row[0]}</text><text x="210" y="20" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#4d8a4f" fontWeight="600">{row[1]}</text></g>)}</g><g transform="translate(32 188)"><rect width="128" height="62" rx="12" fill="#0e0e0c"/><text x="16" y="26" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#9db39a" fontWeight="600">LIVE OPS</text><text x="16" y="47" fontFamily="IBM Plex Mono,monospace" fontSize="12" fill="#fff" fontWeight="600">branch-safe</text></g></g>
      </svg>
    );
  }
  if (kind === "barcode") {
    return (
      <svg viewBox="0 0 600 380" style={{ width: "100%", height: "100%", display: "block" }}>
        <defs><linearGradient id="bgA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#fff5f0"/><stop offset="1" stopColor="#fde7df"/></linearGradient></defs>
        <rect width="600" height="380" fill="url(#bgA)"/>
        <g opacity="0.34">{Array.from({length:18}).map((_,r)=>Array.from({length:28}).map((_,c)=><circle key={`${r}-${c}`} cx={20+c*22} cy={20+r*22} r="1" fill="#d8b8a8"/>))}</g>
        <g transform="translate(64 46)"><rect width="472" height="288" rx="18" fill="#ffffff" stroke="#e6c4b3"/><rect x="18" y="18" width="436" height="46" rx="12" fill="#0e0e0c"/><text x="38" y="47" fontFamily="IBM Plex Mono,monospace" fontSize="13" fill="#fff" fontWeight="600">Match Barcode System</text><g transform="translate(330 30)"><circle cx="8" cy="8" r="5" fill="#4d8a4f"/><text x="22" y="12" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#fff" fontWeight="600">verified</text></g><g transform="translate(34 92)"><rect width="174" height="144" rx="14" fill="#fffaf7" stroke="#efd1c2"/><text x="18" y="28" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#9b6d5b" fontWeight="600">SCAN INPUT</text><g transform="translate(18 48)">{[5,2,8,3,4,10,3,6,2,5,7,3,5,9,4,6].map((w,i,arr)=>{const x=arr.slice(0,i).reduce((a,b)=>a+b+3,0);return <rect key={i} x={x} y="0" width={w} height="76" fill="#0e0e0c"/>;})}</g><text x="18" y="132" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="#0e0e0c" fontWeight="600">SKU 7821-A</text></g><g transform="translate(236 92)">{[["SCM order","matched"],["received qty","confirmed"],["location bin","assigned"],["audit trail","written"]].map((row,i)=><g key={row[0]} transform={`translate(0 ${i*38})`}><rect width="218" height="28" rx="7" fill={i%2?"#fffaf7":"#ffffff"} stroke="#efd1c2"/><text x="12" y="19" fontFamily="IBM Plex Sans,sans-serif" fontSize="12" fill="#0e0e0c" fontWeight="600">{row[0]}</text><text x="144" y="19" fontFamily="IBM Plex Mono,monospace" fontSize="10" fill="#4d8a4f" fontWeight="600">{row[1]}</text></g>)}</g><g transform="translate(318 238)"><rect width="136" height="34" rx="17" fill="#0e0e0c"/><circle cx="20" cy="17" r="6" fill="#4d8a4f"/><text x="36" y="21" fontFamily="IBM Plex Mono,monospace" fontSize="10.5" fill="#fff" fontWeight="600">0 mismatches</text></g></g>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 600 380" style={{ width: "100%", height: "100%", display: "block" }}>
      <defs><linearGradient id="bgB" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#14140f"/><stop offset="1" stopColor="#1f1a14"/></linearGradient></defs>
      <rect width="600" height="380" fill="url(#bgB)"/>
      <g transform="translate(70 50)"><rect width="460" height="280" rx="12" fill="#1c1c16" stroke="#2a2a23"/><g transform="translate(16 18)"><circle cx="0" cy="0" r="6" fill="#ff5f57"/><circle cx="18" cy="0" r="6" fill="#febc2e"/><circle cx="36" cy="0" r="6" fill="#28c840"/><text x="170" y="4" fontFamily="IBM Plex Mono,monospace" fontSize="11" fill="#75736a">paenia — theme.json</text></g><g transform="translate(28 60)" fontFamily="IBM Plex Mono,monospace" fontSize="13"><text y="0" fill="#75736a">1</text><text x="22" y="0" fill="#c5c0b4">{"{"}</text><text y="22" fill="#75736a">2</text><text x="36" y="22" fill="#ff8a5c">&quot;name&quot;:</text><text x="120" y="22" fill="#6fb872">&quot;warm paper&quot;</text><text y="44" fill="#75736a">3</text><text x="36" y="44" fill="#ff8a5c">&quot;colors&quot;:</text><text x="135" y="44" fill="#c5c0b4">{"{"}</text><text y="66" fill="#75736a">4</text><text x="50" y="66" fill="#6ea7d7">&quot;editor.bg&quot;:</text><text x="170" y="66" fill="#6fb872">&quot;#f4f0ea&quot;</text><text y="88" fill="#75736a">5</text><text x="50" y="88" fill="#6ea7d7">&quot;editor.fg&quot;:</text><text x="170" y="88" fill="#6fb872">&quot;#1a1814&quot;</text><text y="110" fill="#75736a">6</text><text x="50" y="110" fill="#6ea7d7">&quot;accent&quot;:</text><text x="150" y="110" fill="#6fb872">&quot;#b85c1d&quot;</text><text y="132" fill="#75736a">7</text><text x="36" y="132" fill="#c5c0b4">{"}"}</text><text y="154" fill="#75736a">8</text><text x="22" y="154" fill="#c5c0b4">{"}"}</text></g><g transform="translate(310 80)"><text fontFamily="Space Grotesk,IBM Plex Sans,sans-serif" fontSize="10" fill="#75736a" y="-4" letterSpacing="1">PALETTE</text><rect x="0" y="6" width="32" height="32" rx="6" fill="#f4f0ea"/><rect x="40" y="6" width="32" height="32" rx="6" fill="#1a1814"/><rect x="80" y="6" width="32" height="32" rx="6" fill="#b85c1d"/><rect x="0" y="46" width="32" height="32" rx="6" fill="#6fb872"/><rect x="40" y="46" width="32" height="32" rx="6" fill="#6ea7d7"/><rect x="80" y="46" width="32" height="32" rx="6" fill="#ff8a5c"/></g></g>
    </svg>
  );
};

const WorkSection: React.FC = () => {
  const [modal, setModal] = useState<{ imgs: string[]; s: number } | null>(null);
  const openModal = useCallback((imgs: string[], s: number) => setModal({ imgs, s }), []);
  const closeModal = useCallback(() => setModal(null), []);

  return (
    <section id="work" style={{ maxWidth: "var(--w)", margin: "0 auto", padding: "var(--sp-section) var(--gut) 0", position: "relative" }}>
      {/* Header */}
      <div className="work-head">
        <div>
          <RevealWrapper><Pill>work</Pill></RevealWrapper>
          <RevealWrapper delay={60}>
            <Display size="lg" as="h2" style={{ marginTop: 18, maxWidth: "18ch" }}>
              Highlights from my recent <em className="acc">builds</em>.
            </Display>
          </RevealWrapper>
        </div>
        <RevealWrapper delay={120}>
          <a href={ME.github} target="_blank" rel="noreferrer" className="cta-btn">View all ↗</a>
        </RevealWrapper>
      </div>

      {/* Case study cards */}
      <RevealWrapper delay={180}>
        <div className="work-grid">
          {CASES.map((c) => (
            <article key={c.id} className="card lift" style={{ padding: 18, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: 10, overflow: "hidden", marginBottom: 22, background: "var(--bg2)" }}>
                <WorkPreview kind={KIND_MAP[c.id] || "theme"} images={c.images} />
                <span className="mono" style={{ position: "absolute", top: 14, left: 14, fontSize: 11.5, color: "#ffffff", fontWeight: 500, letterSpacing: "-0.01em", padding: "3px 9px", background: "rgba(0,0,0,0.58)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6 }}>{c.year}</span>
              </div>
              <div style={{ padding: "0 8px 6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
                  <span className="mono upper" style={{ fontSize: 10, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.14em" }}>{c.kind}</span>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--ln2)" }} />
                  <span className="mono" style={{ fontSize: 11, color: "var(--t3)" }}>{c.company}</span>
                </div>
                <h3 style={{ fontSize: "clamp(22px, 2.3vw, 28px)", fontWeight: 600, letterSpacing: "-0.028em", color: "var(--t1)", lineHeight: 1.18, marginBottom: 10, textWrap: "balance" } as React.CSSProperties}>{c.name}</h3>
                <p style={{ fontSize: 15, color: "var(--t2)", lineHeight: 1.6, marginBottom: 18, textWrap: "pretty" } as React.CSSProperties}>{c.headline}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {c.stack.slice(0, 5).map(s => <TechToken key={s} name={s} variant="mini" />)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </RevealWrapper>

      {/* Horizontal scroll section */}
      <RevealWrapper delay={240}>
        <div style={{ marginTop: "clamp(56px, 7vw, 96px)", paddingTop: 40 }} className="stitch-top">
          <HorizontalProjScroll
            projects={PROJ}
            onOpen={openModal}
          />
        </div>
      </RevealWrapper>

      {modal && <Modal images={modal.imgs} start={modal.s} onClose={closeModal} />}
    </section>
  );
};

export default WorkSection;
