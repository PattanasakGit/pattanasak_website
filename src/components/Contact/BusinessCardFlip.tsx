"use client";
import React, { useState } from "react";
import { ME } from "@/store/siteData";

const BusinessCardFlip: React.FC = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`biz-wrap`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
      role="button"
      tabIndex={0}
      aria-label="Business card — hover or click to flip"
      onKeyDown={e => e.key === "Enter" && setFlipped(f => !f)}
    >
      <div className={`biz-inner${flipped ? " biz-inner--flip" : ""}`}>
        {/* Front */}
        <div className="biz-face biz-face--front">
          <div className="biz-dot-grid" aria-hidden="true" />
          <div className="biz-hatch" aria-hidden="true" />
          <div className="biz-f-top">
            <span className="biz-monogram">Pa</span>
            <span className="biz-flip-hint mono">FLIP ↩</span>
          </div>
          <div className="biz-f-name">
            <p className="biz-given">PATTANASAK</p>
            <p className="biz-family">ATAKUL</p>
          </div>
          <div className="biz-f-foot">
            <div>
              <p className="biz-role">Software Developer</p>
              <p className="biz-loc mono">Bangkok, TH · GMT+7</p>
            </div>
            <span className="biz-bar" aria-hidden="true" />
          </div>
        </div>

        {/* Back */}
        <div className="biz-face biz-face--back">
          <div className="biz-b-head">
            <span className="mono upper biz-b-label">— contact</span>
            <div style={{ flex: 1, height: 1, background: "var(--line)", margin: "0 12px" }} />
            <span className="biz-pulse-dot" aria-label="Open to work" />
          </div>
          <div className="biz-b-links">
            <a href={`mailto:${ME.email}`} className="biz-b-row" onClick={e => e.stopPropagation()}>
              <span className="mono upper">email</span>
              <strong>{ME.email}</strong>
              <span className="biz-arrow">↗</span>
            </a>
            <a href={ME.github} target="_blank" rel="noreferrer" className="biz-b-row" onClick={e => e.stopPropagation()}>
              <span className="mono upper">github</span>
              <strong>PattanasakGit</strong>
              <span className="biz-arrow">↗</span>
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" className="biz-b-row" onClick={e => e.stopPropagation()}>
              <span className="mono upper">linkedin</span>
              <strong>pattanasak-atakul</strong>
              <span className="biz-arrow">↗</span>
            </a>
          </div>
          <div className="biz-b-foot">
            <span className="mono upper biz-b-avail">Open to work</span>
            <span className="biz-b-year mono">2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardFlip;
