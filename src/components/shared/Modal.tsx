"use client";
import React, { useState, useEffect } from "react";

interface ModalProps {
  images: string[];
  start: number;
  onClose: () => void;
}

const navBtn: React.CSSProperties = {
  position: "absolute", top: "50%", transform: "translateY(-50%)",
  width: 38, height: 38, borderRadius: "50%",
  background: "var(--paper)", border: "1px solid var(--line)",
  fontSize: 20, color: "var(--t1)",
  display: "flex", alignItems: "center", justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.18)", cursor: "pointer",
};

const Modal: React.FC<ModalProps> = ({ images, start, onClose }) => {
  const [i, setI] = useState(start);
  const prev = () => setI(x => (x - 1 + images.length) % images.length);
  const next = () => setI(x => (x + 1) % images.length);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <div className="img-modal-overlay" onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ position: "relative" }}>
        <img
          src={images[i]}
          alt=""
          style={{ maxWidth: "90vw", maxHeight: "84vh", objectFit: "contain", display: "block", borderRadius: 6, boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}
        />
        <button onClick={onClose} aria-label="Close" style={{ position: "absolute", top: -14, right: -14, width: 34, height: 34, borderRadius: "50%", background: "var(--paper)", border: "1px solid var(--line)", fontSize: 18, color: "var(--t1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.18)", cursor: "pointer" }}>×</button>
        {images.length > 1 && (
          <>
            <button onClick={prev} aria-label="Previous" style={{ ...navBtn, left: -52 }}>‹</button>
            <button onClick={next} aria-label="Next" style={{ ...navBtn, right: -52 }}>›</button>
          </>
        )}
        <p className="mono" style={{ textAlign: "center", marginTop: 14, fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
          {String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default Modal;
