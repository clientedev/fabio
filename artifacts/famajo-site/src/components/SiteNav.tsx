import { useState } from "react";
import logoImg from "@assets/image_1776108637978.png";

function Logo({ height }: { height: number }) {
  return (
    <img
      src={logoImg}
      alt="Famajo Corretora"
      style={{ height, objectFit: "contain", mixBlendMode: "screen" }}
    />
  );
}

const navLinks: [string, string][] = [
  ["/#sobre", "Sobre"],
  ["/#solucoes", "Soluções"],
  ["/#contato", "Contato"],
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(42,55,96,0.96)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,168,75,0.1)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem",
          display: "flex", alignItems: "center", justifyContent: "space-between", height: 80,
        }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <Logo height={108} />
          </a>

          <nav className="nav-links-desktop">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>

          <a
            href="https://wa.me/5511992490109"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold nav-cta-desktop"
            style={{ padding: "0.625rem 1.5rem", borderRadius: 8 }}
          >
            Falar Agora
          </a>

          <button
            className="nav-hamburger-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="Abrir menu"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      <div className={`mobile-nav-overlay${open ? " open" : ""}`}>
        {navLinks.map(([href, label]) => (
          <a key={href} href={href} className="mobile-nav-link" onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          href="https://wa.me/5511992490109"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ marginTop: "1.25rem", justifyContent: "center" }}
          onClick={() => setOpen(false)}
        >
          Falar Agora
        </a>
      </div>
    </>
  );
}
