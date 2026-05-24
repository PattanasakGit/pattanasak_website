"use client";
import React, { useCallback, useRef, useState } from "react";
import RevealWrapper from "@/components/shared/RevealWrapper";
import { ME, STATS } from "@/store/siteData";

const STAT_KEYS = ["stores", "quality", "runtime", "release"] as const;

const HeroSection: React.FC = () => {
  const [photoErr, setPhotoErr] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const moveLight = useCallback((event: React.MouseEvent) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mx", `${x.toFixed(2)}%`);
    el.style.setProperty("--my", `${y.toFixed(2)}%`);
    el.style.setProperty("--tilt-x", `${((y - 50) / -32).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${((x - 50) / 36).toFixed(2)}deg`);
  }, []);

  const resetLight = useCallback(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.setProperty("--mx", "62%");
    el.style.setProperty("--my", "34%");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-tech-v4"
      onMouseMove={moveLight}
      onMouseLeave={resetLight}
    >
      <div className="hero-shell-v4">
        {/* Left: copy */}
        <RevealWrapper>
          <div>
            <div className="hero-identity-v4">
              <span className="hero-avatar-v4">
                {!photoErr
                  ? <img src="/profile.webp" alt="" onError={() => setPhotoErr(true)} />
                  : "P"}
              </span>
              <span>Pattanasak Atakul</span>
              <span className="hero-status-dot-v4" />
              <span>Bangkok</span>
            </div>

            <h1 className="hero-title-v4">
              Minimal software for messy operational workflows.
            </h1>

            <p className="hero-lede-v4">
              I build production tools for retail, warehouse, and internal teams where the interface has to stay calm while the data underneath gets complicated.
            </p>

            <div className="hero-actions-v4">
              <a href="#work" className="cta-btn">View selected work</a>
              <a href={ME.cvUrl} target="_blank" rel="noreferrer" className="ghost-btn">Open resume</a>
            </div>
          </div>
        </RevealWrapper>

        {/* Right: console card */}
        <RevealWrapper delay={90}>
          <div className="hero-console-v4" aria-label="Portfolio system snapshot">
            <div className="hero-console-top-v4">
              <span>ops-portfolio</span>
              <span className="mono">live</span>
            </div>
            <div className="hero-console-body-v4">
              <div className="hero-command-v4 mono">$ ship --scope warehouse-flow</div>
              {STATS.map(({ n, sfx, l }, idx) => (
                  <div className="hero-metric-v4" key={STAT_KEYS[idx]}>
                    <span className="mono">{STAT_KEYS[idx]}</span>
                    <strong>{n}{sfx}</strong>
                    <small>{l}</small>
                  </div>
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
};

export default HeroSection;
