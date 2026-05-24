"use client";
import React from "react";
import RevealWrapper from "@/components/shared/RevealWrapper";
import Pill from "@/components/shared/Pill";
import Display from "@/components/shared/Display";

const AboutSection: React.FC = () => (
  <section id="about" style={{ maxWidth: "var(--w)", margin: "0 auto", padding: "var(--sp-section) var(--gut) 0", position: "relative" }}>
    <div
      style={{
        position: "relative",
        padding: "clamp(28px, 4vw, 44px) 0 clamp(24px, 4vw, 40px)",
        backgroundImage: "repeating-linear-gradient(90deg, color-mix(in srgb, var(--ln2) 86%, var(--t2)) 0 18px, transparent 18px 28px)",
        backgroundSize: "28px 2px",
        backgroundRepeat: "repeat-x",
        backgroundPosition: "left top",
      }}
    >
      <div className="about-grid-v4">
        {/* Sticky kicker */}
        <RevealWrapper className="about-kicker-v4">
          <Pill>about</Pill>
          <p className="mono upper" style={{ marginTop: 18, fontSize: 10, lineHeight: 1.7, color: "var(--t3)", letterSpacing: "0.14em" }}>
            Systems<br />clarity<br />production UI
          </p>
        </RevealWrapper>

        {/* Content */}
        <RevealWrapper delay={80}>
          <Display size="lg" as="h2" className="about-statement-v4">
            <span style={{ color: "var(--t1)" }}>
              Computer engineer turned full-stack developer,
            </span>
            {" "}
            <span style={{ color: "var(--t2)" }}>
              turning messy warehouse operations into validated, predictable software flows.
            </span>
          </Display>

          <div style={{
            marginTop: "clamp(34px, 5vw, 58px)", height: 2,
            backgroundImage: "repeating-linear-gradient(90deg, color-mix(in srgb, var(--ln2) 86%, var(--t2)) 0 18px, transparent 18px 28px)",
            backgroundSize: "28px 2px", backgroundRepeat: "repeat-x", backgroundPosition: "left top",
          }} />

          <div className="about-body-v4">
            <div>
              <p style={{ fontSize: "clamp(18px, 1.55vw, 22px)", lineHeight: 1.45, color: "var(--t1)", fontWeight: 500, letterSpacing: "-0.026em", maxWidth: 420 }}>
                I build admin systems, operational tools, and product interfaces where edge cases matter more than decoration.
              </p>
              <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.75, color: "var(--t2)", maxWidth: 430 }}>
                My work usually sits between frontend polish, backend rules, SQL data, and the people who need the workflow to be reliable every day.
              </p>
            </div>

            <div className="about-meta-v4">
              {[
                ["Location",  "Bangkok, TH"],
                ["Education", "B.Eng Computer\nEngineering · SUT"],
                ["Now at",    "Zetta Soft\nDPLUS Intertrade"],
                ["Focus",     "Full-stack systems\nReact · Node · SQL"],
              ].map(([k, v], i) => (
                <div key={k} style={{ paddingTop: 18, borderTop: "1px solid var(--line)" }}>
                  <p className="mono upper" style={{ fontSize: 10, fontWeight: 600, color: i === 2 ? "var(--accent)" : "var(--t3)", marginBottom: 10, letterSpacing: "0.16em" }}>{k}</p>
                  <p style={{ fontSize: "clamp(15px, 1.2vw, 18px)", color: "var(--t1)", lineHeight: 1.48, whiteSpace: "pre-line", fontWeight: 550, letterSpacing: "-0.018em" } as React.CSSProperties}>{v}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </div>
  </section>
);

export default AboutSection;
