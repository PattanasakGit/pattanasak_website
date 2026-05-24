"use client";
import React from "react";
import RevealWrapper from "@/components/shared/RevealWrapper";
import Display from "@/components/shared/Display";
import BusinessCardFlip from "./BusinessCardFlip";
import { ME } from "@/store/siteData";

const contactRows = [
  { k: "email",    v: ME.email,                              href: `mailto:${ME.email}` },
  { k: "github",   v: "github.com/PattanasakGit",           href: ME.github },
  { k: "linkedin", v: "linkedin.com/in/pattanasak-atakul",  href: ME.linkedin },
];

const metaRows: [string, string][] = [
  ["Based in", "Bangkok, TH"],
  ["Timezone", "GMT+7"],
  ["Current", "Full-stack Developer @ Zetta Soft"],
];

const ContactSection: React.FC = () => (
  <footer id="contact" className="contact-minimal">
    <RevealWrapper>
      <div className="contact-minimal__hero">
        <div className="contact-minimal__title-col">
          <p className="mono upper contact-minimal__kicker">06 — contact</p>
          <Display size="lg" as="h2" className="contact-minimal__title">
            Let&apos;s build something useful<em className="acc">.</em>
          </Display>
        </div>
        <div className="contact-minimal__card-col">
          <BusinessCardFlip />
        </div>
      </div>
    </RevealWrapper>

    <RevealWrapper delay={80}>
      <div className="contact-minimal__links" aria-label="Contact links">
        {contactRows.map(({ k, v, href }) => (
          <a
            key={k}
            href={href}
            target={k === "email" ? undefined : "_blank"}
            rel={k === "email" ? undefined : "noreferrer"}
            className="contact-minimal__row"
          >
            <span className="mono upper">{k}</span>
            <strong>{v}</strong>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>
    </RevealWrapper>

    <RevealWrapper delay={140}>
      <div className="contact-minimal__meta">
        {metaRows.map(([k, v]) => (
          <div key={k}>
            <span className="mono upper">{k}</span>
            <strong>{v}</strong>
          </div>
        ))}
        <a href={ME.cvUrl} target="_blank" rel="noreferrer" className="contact-minimal__resume">
          Resume ↗
        </a>
      </div>
    </RevealWrapper>
  </footer>
);

export default ContactSection;
