"use client";
import React from "react";
import RevealWrapper from "@/components/shared/RevealWrapper";
import Pill from "@/components/shared/Pill";
import Display from "@/components/shared/Display";
import TechToken from "@/components/shared/TechToken";
import TerminalMockup from "./TerminalMockup";
import { EXP, FEATURED_STACK_TAGS } from "@/store/siteData";

const subCards = [
  {
    company: "Chomchob Group",
    period: "Jul — Oct 2024",
    pos: "Frontend Developer",
    bullet: "Built production frontend screens for a business-partner back-office system. Translated Figma designs into maintainable, API-integrated interfaces in Next.js, React, and TypeScript.",
  },
  {
    company: "NIPA Technology",
    period: "Nov 2023 — Feb 2024",
    pos: "Software Engineer Intern · Wallet Team",
    bullet: "Supported SCB QR Code Payment API integration. Built frontend and backend components for the NIPA Cloud management web application.",
  },
  {
    company: "SUT",
    period: "2020 — 2024",
    pos: "B.Eng Computer Engineering",
    bullet: "Graduated with GPA 3.46. Final project: Yakkai Online — a full-stack community marketplace for SUT students.",
  },
];

const featured = EXP[0];

const ExperienceSection: React.FC = () => (
  <section id="experience" style={{ maxWidth: "var(--w)", margin: "0 auto", padding: "var(--sp-section) var(--gut) 0", position: "relative" }}>
    <RevealWrapper>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
        <Pill>past few years</Pill>
      </div>
    </RevealWrapper>
    <RevealWrapper delay={80}>
      <Display size="lg" align="center" as="h2" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
        My recent <em className="acc">deploys</em>.
      </Display>
    </RevealWrapper>

    {/* Featured card */}
    <RevealWrapper delay={140}>
      <div className="exp-featured card">
        {/* Left: terminal */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TerminalMockup />
        </div>

        {/* Right: content */}
        <div style={{ padding: "10px 14px 10px 0", display: "flex", flexDirection: "column", minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
            <span style={{ width: 28, height: 28, borderRadius: 7, background: "var(--t1)", color: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--f-mono)", fontWeight: 700, fontSize: 14, letterSpacing: "-0.04em" }}>{"</>"}</span>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 999, background: "var(--accent-soft)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "pulse 2.2s ease-in-out infinite" }} />
              <span className="mono upper" style={{ fontSize: 10, color: "var(--accent)", fontWeight: 600, letterSpacing: "0.12em" }}>Current</span>
            </div>
          </div>

          <p className="mono" style={{ fontSize: 13, color: "var(--t2)", marginBottom: 6 }}>{featured.period}</p>
          <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.025em", color: "var(--t1)", marginBottom: 16, lineHeight: 1.3 }}>
            <strong style={{ fontWeight: 700 }}>{featured.company}</strong>{" — "}
            <span style={{ fontWeight: 500, color: "var(--t1)" }}>{featured.pos}</span>
          </h3>

          <p style={{ fontSize: 15.5, color: "var(--t2)", lineHeight: 1.65, marginBottom: 14, textWrap: "pretty" } as React.CSSProperties}>
            I designed and shipped the{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>Match Barcode System</strong> end-to-end —{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>Go, SQL, REST APIs, and React</strong> — owning{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>requirements, schema, backend, frontend, and deployment</strong>.{" "}
            The system enforces scan-based verification before warehouse storage,{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>reducing receiving mismatches to zero</strong>.
          </p>
          <p style={{ fontSize: 15.5, color: "var(--t2)", lineHeight: 1.65, marginBottom: 20, textWrap: "pretty" } as React.CSSProperties}>
            Also contribute features, bug fixes, and maintenance to an enterprise{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>Inventory POS</strong> used across{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>70 retail branches</strong>{" "}
            with <strong style={{ color: "var(--t1)", fontWeight: 600 }}>PostgreSQL-backed workflows</strong>, and shipped{" "}
            <strong style={{ color: "var(--t1)", fontWeight: 600 }}>SCM and Production Order</strong> features for factory supply-chain workflows.
          </p>
        </div>

        {/* Stack marquee — spans full width */}
        <section className="exp-stack-marquee" aria-label="Zetta Soft stack">
          <div className="exp-stack-marquee__head">
            <span className="mono upper">stack I use</span>
            <span className="mono">Zetta Soft</span>
          </div>
          <div className="exp-stack-marquee__viewport">
            <div className="exp-stack-marquee__track" aria-hidden="true">
              {[0, 1, 2, 3, 4].map(group => (
                <div key={group} className="exp-stack-marquee__group">
                  {FEATURED_STACK_TAGS.map((t, i) => (
                    <TechToken key={`${group}-${t}`} name={t} index={i + 1} variant={i % 4} />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <ul className="sr-only">
            {FEATURED_STACK_TAGS.map(t => <li key={t}>{t}</li>)}
          </ul>
        </section>
      </div>
    </RevealWrapper>

    {/* Sub-cards */}
    <RevealWrapper delay={200}>
      <div className="exp-sub-grid">
        {subCards.map((e, i) => (
          <article key={i} className="card lift" style={{ padding: "22px 22px 24px", display: "flex", flexDirection: "column", minHeight: 180 }}>
            <p className="mono" style={{ fontSize: 13, color: "var(--t2)", marginBottom: 12 }}>{e.period}</p>
            <h4 style={{ fontSize: 17, fontWeight: 600, color: "var(--t1)", letterSpacing: "-0.022em", marginBottom: 12, lineHeight: 1.25 }}>
              <strong style={{ fontWeight: 700 }}>{e.company}</strong>{" — "}
              <span style={{ fontWeight: 500 }}>{e.pos}</span>
            </h4>
            <p style={{ fontSize: 13.5, color: "var(--t2)", lineHeight: 1.65 }}>{e.bullet}</p>
          </article>
        ))}
      </div>
    </RevealWrapper>
  </section>
);

export default ExperienceSection;
