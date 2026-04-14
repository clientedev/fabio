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

export function SiteNav() {
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,14,26,0.96)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(200,168,75,0.1)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 80,
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <Logo height={128} />
        </a>
        <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {[["/#sobre", "Sobre"], ["/#solucoes", "Soluções"], ["/#contato", "Contato"]].map(([href, label]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>
        <a
          href="https://wa.me/5511992490109"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ padding: "0.625rem 1.5rem", borderRadius: 8 }}
        >
          Falar Agora
        </a>
      </div>
    </header>
  );
}
