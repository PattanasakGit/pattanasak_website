"use client";
import React from "react";
import RevealWrapper from "@/components/shared/RevealWrapper";
import Pill from "@/components/shared/Pill";
import Display from "@/components/shared/Display";
import TechToken from "@/components/shared/TechToken";
import { STACK_CATEGORIES, CORE_STACK } from "@/store/siteData";

const StackSection: React.FC = () => (
  <section id="stack" style={{ maxWidth: "var(--w)", margin: "0 auto", padding: "var(--sp-section) var(--gut) 0", position: "relative" }}>
    <RevealWrapper>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
        <Pill>stack</Pill>
      </div>
    </RevealWrapper>
    <RevealWrapper delay={80}>
      <Display size="lg" align="center" as="h2" style={{ marginBottom: "clamp(56px, 7vw, 96px)", maxWidth: "16ch", margin: "0 auto" }}>
        The <em className="acc">stack</em> I build with.
      </Display>
    </RevealWrapper>

    <RevealWrapper delay={140}>
      <div className="stack-system">
        {/* Lead column */}
        <aside className="stack-system__lead">
          <p className="mono upper stack-system__kicker">working stack</p>
          <h3>Product UI first. Backend and data close behind.</h3>
          <p>
            I use this set when the work needs to move from interface details to APIs,
            schemas, deployment, and iteration without losing context.
          </p>
          <div className="stack-system__core">
            {CORE_STACK.map((t, i) => (
              <TechToken key={t} name={t} index={i + 1} variant={i < 3 ? "1" : "mini"} />
            ))}
          </div>
        </aside>

        {/* Lanes */}
        <div className="stack-system__lanes">
          {STACK_CATEGORIES.map(c => (
            <article key={c.title} className="stack-lane">
              <div className="stack-lane__meta">
                <span className="mono">{c.index}</span>
                <span className="mono upper">{c.role}</span>
              </div>
              <div className="stack-lane__copy">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
              <div className="stack-lane__tokens">
                {c.tags.map(t => <TechToken key={t} name={t} variant="grid" />)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealWrapper>
  </section>
);

export default StackSection;
