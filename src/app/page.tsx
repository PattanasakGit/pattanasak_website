"use client";
import NavbarNew from "@/components/Navbar/NavbarNew";
import HeroSection from "@/components/Hero/HeroSection";
import WorkSection from "@/components/Work/WorkSection";
import ExperienceSection from "@/components/Experience/ExperienceSection";
import AboutSection from "@/components/About/AboutSection";
import StackSection from "@/components/Stack/StackSection";
import ContactSection from "@/components/Contact/ContactSection";
import SignatureReveal from "@/components/SignatureReveal/SignatureReveal";

export default function APP() {
  return (
    <>
      <NavbarNew />
      <div className="page-grid" aria-hidden="true" />
      <main>
        <HeroSection />
        <div className="sec-divider" />
        <WorkSection />
        <div className="sec-divider" style={{ marginTop: "var(--sp-section)" }} />
        <ExperienceSection />
        <AboutSection />
        <div className="sec-divider" style={{ marginTop: "var(--sp-section)" }} />
        <StackSection />
        <div className="sec-divider" style={{ marginTop: "var(--sp-section)" }} />
        <ContactSection />
        <SignatureReveal />
      </main>
    </>
  );
}
