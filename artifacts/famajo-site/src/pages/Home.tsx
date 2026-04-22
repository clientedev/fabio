import { useEffect, useState } from "react";
import { Link } from "wouter";

import logoImg from "@assets/image_1776108637978.png";
import fabioImg from "@assets/image_1776107063260.png";

function LogoTransparent({ height, style }: { height: number; style?: React.CSSProperties }) {
  return (
    <img
      src={logoImg}
      alt="Famajo Corretora"
      style={{ height, objectFit: "contain", mixBlendMode: "screen", ...style }}
    />
  );
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const services = [
  {
    slug: "seguro-de-vida",
    imageUrl: "/service-vida.png",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: "Seguro de Vida Personalizado",
    subtitle: "Proteção sob medida para você",
    desc: "Modelo de proteção estruturado com base no seu perfil específico — longe de pacotes padronizados. Garante segurança financeira em momentos inesperados e mantém o padrão de vida de quem você ama.",
    bullets: [],
  },
  {
    slug: "protecao-laboral",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    imageUrl: "/service-laboral.png",
    title: "Proteção Laboral",
    subtitle: "Sua renda protegida em vida",
    desc: "Suporte financeiro imediato para situações críticas que afetam sua capacidade de trabalho.",
    bullets: ["Diagnóstico de Doenças Graves", "Invalidez por doença ou acidente", "Diárias de internação hospitalar", "Afastamento temporário (DIT)", "Risco cirúrgico e quebra de ossos"],
  },
  {
    slug: "sucessao-empresarial",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    imageUrl: "/service-empresarial.png",
    title: "Sucessão Empresarial",
    subtitle: "Blindagem do CNPJ",
    desc: "Evita descapitalização e a entrada de terceiros na gestão da empresa em momentos críticos.",
    bullets: ["Compra de cotas entre sócios", "Continuidade da empresa", "Pagamento de impostos e inventário", "Honorários jurídicos"],
  },
  {
    slug: "consorcios",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    imageUrl: "/service-consorcio.png",
    title: "Consórcios",
    subtitle: "Aquisição planejada sem juros",
    desc: "Diferente das modalidades de crédito tradicionais, o consórcio oferece uma estrutura de custos mais eficiente, pautada na ausência de juros e na previsibilidade financeira. Nossa consultoria atua na identificação das melhores oportunidades de mercado, desenhando estratégias personalizadas para a aquisição de imóveis, veículos leves, pesados ou serviços, garantindo que o seu crescimento patrimonial seja sustentável e planejado.",
    bullets: ["Imóveis", "Veículos", "Máquinas", "Serviços"],
  },
  {
    slug: "plano-de-saude",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    imageUrl: "/service-saude.png",
    title: "Plano de Saúde",
    subtitle: "Cuidado com quem importa",
    desc: "Acesso à rede médica de qualidade com revisão dos planos atuais — buscando redução de custos ou melhoria na cobertura.",
    bullets: [],
  },
  {
    slug: "seguro-viagem",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-8 10 8M12 22V7M12 22H2M12 22h10"/>
        <path d="M20 21.85V13a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v8.85"/>
        <path d="M12 21.85V19"/>
      </svg>
    ),
    imageUrl: "/service-viagem.png",
    title: "Seguro Viagem",
    subtitle: "Tranquilidade em qualquer destino",
    desc: "Proteção completa para suas viagens nacionais e internacionais, garantindo assistência médica, cobertura para extravio de bagagem e suporte 24h em qualquer lugar do mundo.",
    bullets: ["Assistência Médica Internacional", "Extravio de Bagagem", "Cancelamento de Viagem", "Suporte 24h em Português"],
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const inputStyle: React.CSSProperties = {
    width: "100%", boxSizing: "border-box",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(200,168,75,0.2)",
    borderRadius: 10,
    padding: "0.875rem 1rem",
    fontSize: "0.9rem",
    color: "#fff",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json() as { error?: string };
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(data.error ?? "Erro ao enviar. Tente novamente.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div style={{
        background: "rgba(200,168,75,0.07)",
        border: "1px solid rgba(200,168,75,0.25)",
        borderRadius: 20,
        padding: "3rem 2rem",
        textAlign: "center",
      }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(200,168,75,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#fff", marginBottom: "0.75rem" }}>Mensagem enviada!</h3>
        <p style={{ fontSize: "0.9rem", color: "rgba(232,205,122,0.78)", lineHeight: 1.7 }}>
          Obrigado pelo contato. Fábio Dias Neumann responderá em breve.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
        <input
          type="text" placeholder="Seu nome *" required
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          style={inputStyle}
        />
        <input
          type="email" placeholder="Seu e-mail *" required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          style={inputStyle}
        />
      </div>
      <input
        type="tel" placeholder="Telefone / WhatsApp"
        value={form.phone}
        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        style={inputStyle}
      />
      <textarea
        placeholder="Como posso ajudar? *" required rows={5}
        value={form.message}
        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        style={{ ...inputStyle, resize: "vertical" }}
      />
      {error && (
        <p style={{ fontSize: "0.85rem", color: "#e07070", margin: 0 }}>{error}</p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className="btn-gold"
        style={{ justifyContent: "center", opacity: submitting ? 0.7 : 1, cursor: submitting ? "not-allowed" : "pointer", border: "none" }}
      >
        {submitting ? "Enviando..." : "Enviar Mensagem"}
      </button>
      <p style={{ fontSize: "0.75rem", color: "rgba(232,205,122,0.53)", margin: 0, textAlign: "center" }}>
        Seus dados são usados apenas para responder ao seu contato.
      </p>
    </form>
  );
}

const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=85&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85&auto=format&fit=crop",
];

export default function Home() {
  useReveal();
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setHeroSlide(s => (s + 1) % HERO_SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  const navLinks: [string, string][] = [["#sobre", "Sobre"], ["#solucoes", "Soluções"], ["#contato", "Contato"]];

  return (
    <div style={{ backgroundColor: "#2a3760", fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>

      {/* ─── NAVBAR ─── */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(42,55,96,0.96)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,168,75,0.1)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
          <LogoTransparent height={108} />
          <nav className="nav-links-desktop">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="nav-link">{label}</a>
            ))}
          </nav>
          <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer" className="btn-gold nav-cta-desktop" style={{ padding: "0.625rem 1.5rem", borderRadius: 8 }}>
            Falar Agora
          </a>
          <button className="nav-hamburger-btn" onClick={() => setMenuOpen(o => !o)} aria-label="Abrir menu">
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </header>
      <div className={`mobile-nav-overlay${menuOpen ? " open" : ""}`}>
        {navLinks.map(([href, label]) => (
          <a key={href} href={href} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>{label}</a>
        ))}
        <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginTop: "1.25rem", justifyContent: "center" }} onClick={() => setMenuOpen(false)}>
          Falar Agora
        </a>
      </div>

      {/* ─── HERO ─── */}
      <section className="hero-bg" style={{ position: "relative", display: "flex", alignItems: "center", paddingTop: 72, minHeight: "100vh" }}>

        {/* Background photo slideshow */}
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            style={{
              position: "absolute", inset: 0, zIndex: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: "cover", backgroundPosition: "center",
              opacity: i === heroSlide ? 1 : 0,
              transition: "opacity 1.8s ease-in-out",
            }}
          />
        ))}

        {/* Dark navy film over photos */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: "linear-gradient(135deg, rgba(36,51,88,0.88) 0%, rgba(58,74,125,0.82) 50%, rgba(36,51,88,0.75) 100%)",
        }} />

        <div className="noise-overlay" style={{ zIndex: 2 }} />

        {/* Decorative orbs */}
        <div style={{ position: "absolute", top: "15%", right: "5%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,168,75,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 3 }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: 320, height: 320, borderRadius: "50%", background: "radial-gradient(circle, rgba(17,50,100,0.4) 0%, transparent 70%)", pointerEvents: "none", zIndex: 3 }} />

        <div className="layout-grid-hero" style={{ maxWidth: 1200, margin: "0 auto", padding: "5rem 1.25rem", position: "relative", zIndex: 4 }}>

          {/* Left */}
          <div>
            <h1 className="heading-serif reveal reveal-delay-1" style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
              Proteção que vai{" "}
              <em className="text-gold-gradient" style={{ fontStyle: "italic" }}>além do seguro</em>
            </h1>

            <p className="reveal reveal-delay-2" style={{ fontSize: "1.0625rem", lineHeight: 1.75, color: "rgba(232,205,122,0.8)", marginBottom: "2.5rem", maxWidth: 480 }}>
              Soluções estratégicas em proteção patrimonial, planejamento financeiro e gestão de riscos — para que sua família, sua renda e seu negócio estejam preparados para qualquer cenário.
            </p>

            <div className="reveal reveal-delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer" className="btn-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar com Especialista
              </a>
              <a href="#solucoes" className="btn-outline">Ver Soluções</a>
            </div>

            {/* Stats row */}
            <div className="reveal reveal-delay-4 hero-stats-row" style={{ display: "flex", gap: "2rem", marginTop: "3.5rem", paddingTop: "2.5rem", borderTop: "1px solid rgba(200,168,75,0.12)" }}>
              {[["15+", "Anos de Mercado"], ["5", "Áreas de Atuação"], ["100%", "Dedicação ao Cliente"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "#c8a84b", lineHeight: 1 }}>{num}</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(232,205,122,0.68)", letterSpacing: "0.08em", marginTop: "0.35rem", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Fábio photo */}
          <div className="hero-photo-col reveal reveal-delay-2" style={{ display: "flex", justifyContent: "flex-end", position: "relative" }}>
            {/* Decorative frame */}
            <div style={{
              position: "absolute", top: 20, right: 20, bottom: -20, left: 20,
              border: "1px solid rgba(200,168,75,0.2)", borderRadius: 24,
              pointerEvents: "none",
            }} />
            {/* Gold corner accents */}
            <div style={{ position: "absolute", top: 8, left: 8, width: 32, height: 32, borderTop: "2px solid #c8a84b", borderLeft: "2px solid #c8a84b", borderRadius: "4px 0 0 0", zIndex: 2 }} />
            <div style={{ position: "absolute", bottom: -10, right: 30, width: 32, height: 32, borderBottom: "2px solid #c8a84b", borderRight: "2px solid #c8a84b", borderRadius: "0 0 4px 0", zIndex: 2 }} />

            <div style={{ position: "relative" }}>
              <img
                src={fabioImg}
                alt="Fábio Dias Neumann"
                style={{
                  width: "100%", maxWidth: 400,
                  borderRadius: 20,
                  objectFit: "cover",
                  filter: "brightness(0.95) contrast(1.05)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(200,168,75,0.25)",
                  display: "block",
                }}
              />
              {/* Name badge */}
              <div style={{
                position: "absolute", bottom: 24, left: 20, right: 20,
                background: "rgba(58,74,125,0.88)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(200,168,75,0.3)",
                borderRadius: 14,
                padding: "1rem 1.25rem",
                display: "flex", alignItems: "center", gap: "0.875rem",
              }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,#c8a84b,#e8c96a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a3760" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600, color: "#fff" }}>Fábio Dias Neumann</div>
                  <div style={{ fontSize: "0.72rem", color: "rgba(232,205,122,0.78)", letterSpacing: "0.06em", marginTop: 2 }}>Especialista em Proteção Patrimonial</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.4 }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a84b" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, #c8a84b, transparent)" }} />
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="sobre" style={{ background: "linear-gradient(180deg, #2a3760 0%, #324070 100%)", padding: "8rem 1.25rem" }}>
        <div className="layout-grid-2col" style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Left visual: logo + quote card */}
          <div className="reveal" style={{ position: "relative" }}>
            <div style={{
              background: "#2e3c6a",
              border: "1px solid rgba(200,168,75,0.15)",
              borderRadius: 24,
              padding: "3rem",
            }}>
              <LogoTransparent height={200} style={{ marginBottom: "2rem" }} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", lineHeight: 1.65, color: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>
                "Nosso propósito é proteger pessoas, famílias e empresas, transformando riscos financeiros em tranquilidade e segurança."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(200,168,75,0.12)" }}>
                <div className="gold-line" />
                <span style={{ fontSize: "0.8rem", color: "#c8a84b", letterSpacing: "0.08em" }}>FAMAJO CORRETORA</span>
              </div>
            </div>

            {/* Floating accent */}
            <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, borderRadius: 16, background: "linear-gradient(135deg,rgba(200,168,75,0.2),rgba(200,168,75,0.05))", border: "1px solid rgba(200,168,75,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
          </div>

          {/* Right: text */}
          <div>
            <div className="section-label reveal" style={{ marginBottom: "1.25rem" }}>Sobre Nós</div>
            <h2 className="heading-serif reveal reveal-delay-1" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "1.5rem" }}>
              Mais de uma década<br />
              <span className="text-gold-gradient">protegendo quem importa</span>
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(232,205,122,0.8)", marginBottom: "1.25rem" }}>
              Atuamos no desenvolvimento de soluções estratégicas voltadas à proteção patrimonial, ao planejamento financeiro e à gestão de riscos, assegurando que nossos clientes estejam plenamente preparados para qualquer cenário econômico.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: "1rem", lineHeight: 1.8, color: "rgba(232,205,122,0.8)", marginBottom: "2.5rem" }}>
              Sob a liderança do especialista Fábio Dias Neumann, que acumula 15 anos de sólida experiência, desenvolvemos estratégias personalizadas que transcendem a entrega de apólices, consolidando-se como consultorias financeiras completas para a preservação e continuidade do seu legado.
            </p>

            {/* Feature list */}
            <div className="reveal reveal-delay-4" style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {["Análise personalizada do seu perfil de risco", "Planejamento estratégico de longo prazo", "Revisão e otimização de contratos existentes", "Atendimento próximo e consultivo"].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 20, height: 20, borderRadius: 6, background: "rgba(200,168,75,0.12)", border: "1px solid rgba(200,168,75,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <polyline points="2,6 5,9 10,3" stroke="#c8a84b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.9rem", color: "rgba(232,205,122,0.93)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <hr className="gold-rule" />
      </div>

      {/* ─── SERVICES ─── */}
      <section id="solucoes" style={{ padding: "8rem 1.25rem", background: "linear-gradient(180deg, #324070 0%, #2a3760 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "1.25rem" }}>Nossas Soluções</div>
            <h2 className="heading-serif" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>
              Proteção completa em{" "}
              <span className="text-gold-gradient">todas as frentes</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(232,205,122,0.73)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Soluções estratégicas desenhadas para proteger seu patrimônio, sua saúde, sua renda e a continuidade do seu negócio.
            </p>
          </div>

          {/* Grid */}
          <div className="layout-grid-3col">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                href={`/solucoes/${svc.slug}`}
                className={`glass-card reveal reveal-delay-${i + 1}`}
                style={{ borderRadius: 20, overflow: "hidden", padding: 0, display: "block", textDecoration: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(200,168,75,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
              >
                <div style={{ height: 160, overflow: "hidden", position: "relative" }}>
                  <img
                    src={svc.imageUrl}
                    alt={svc.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", filter: "brightness(0.85) contrast(1.05)" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(58,74,125,0.9) 100%)" }} />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <div className="service-icon">{svc.icon}</div>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: "0.4rem" }}>
                    {svc.subtitle}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: "0.875rem", lineHeight: 1.3 }}>
                    {svc.title}
                  </h3>
                  <div className="gold-line" style={{ marginBottom: "1rem" }} />
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(232,205,122,0.78)", marginBottom: svc.bullets.length ? "1rem" : 0 }}>
                    {svc.desc}
                  </p>
                  {svc.bullets.length > 0 && (
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {svc.bullets.map((b) => (
                        <li key={b} className="gold-bullet">
                          <span className="gold-bullet-dot" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFÍCIOS DO SEGURO DE VIDA ─── */}
      <section id="beneficios" style={{ padding: "8rem 1.25rem", background: "linear-gradient(180deg, #2a3760 0%, #243358 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "1.25rem" }}>Proteção além do óbvio</div>
            <h2 className="heading-serif" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", marginBottom: "1rem" }}>
              Benefícios do{" "}
              <span className="text-gold-gradient">Seguro de Vida</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(232,205,122,0.73)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Vantagens jurídicas, fiscais e patrimoniais que fazem do seguro de vida uma das ferramentas mais poderosas de planejamento financeiro.
            </p>
          </div>

          {/* 2×2 Cards */}
          <div className="layout-grid-benefits">

            {/* Card 1 — Fora do Inventário */}
            <Link href="/beneficios/fora-do-inventario" className="glass-card reveal reveal-delay-1" style={{ borderRadius: 20, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", textDecoration: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(200,168,75,0.15)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <path d="M9 22V12h6v10"/>
                  <line x1="3" y1="3" x2="6" y2="6"/>
                  <line x1="21" y1="3" x2="18" y2="6"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: "0.4rem" }}>
                  Planejamento patrimonial
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: "0.875rem", lineHeight: 1.3 }}>
                  Fora do Inventário
                </h3>
              </div>
              <div className="gold-line" />
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(232,205,122,0.78)" }}>
                O seguro de vida não integra o espólio nem se submete ao inventário. O capital é pago de forma direta e ágil aos beneficiários, preservando o patrimônio e evitando a descapitalização da família em momentos críticos.
              </p>
            </Link>

            {/* Card 2 — Isenção Fiscal */}
            <Link href="/beneficios/isencao-fiscal" className="glass-card reveal reveal-delay-2" style={{ borderRadius: 20, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", textDecoration: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(200,168,75,0.15)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="3"/>
                  <path d="M9 12l2 2 4-4"/>
                  <line x1="9" y1="7" x2="15" y2="7"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: "0.4rem" }}>
                  Vantagem tributária
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: "0.875rem", lineHeight: 1.3 }}>
                  Isenção Fiscal
                </h3>
              </div>
              <div className="gold-line" />
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(232,205,122,0.78)" }}>
                O capital segurado pago por falecimento é totalmente isento de Imposto de Renda para o beneficiário, conforme o Art. 6º da Lei 7.713. O valor chega íntegro — sem tributação e sem perdas para o Estado.
              </p>
            </Link>

            {/* Card 3 — Beneficiários */}
            <Link href="/beneficios/beneficiarios" className="glass-card reveal reveal-delay-3" style={{ borderRadius: 20, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", textDecoration: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(200,168,75,0.15)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: "0.4rem" }}>
                  Liberdade de escolha
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: "0.875rem", lineHeight: 1.3 }}>
                  Beneficiários Livres
                </h3>
              </div>
              <div className="gold-line" />
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(232,205,122,0.78)" }}>
                Você tem total autonomia para indicar qualquer pessoa como beneficiário — familiar ou não —, sem restrições legais. A indicação pode ser formal, contratual ou alterada a qualquer momento, com flexibilidade total.
              </p>
            </Link>

            {/* Card 4 — Impenhorabilidade */}
            <Link href="/beneficios/impenhorabilidade" className="glass-card reveal reveal-delay-4" style={{ borderRadius: 20, padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", textDecoration: "none", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 60px rgba(200,168,75,0.15)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
              <div className="service-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: "0.4rem" }}>
                  Proteção jurídica
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 600, color: "#fff", marginBottom: "0.875rem", lineHeight: 1.3 }}>
                  Impenhorabilidade
                </h3>
              </div>
              <div className="gold-line" />
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(232,205,122,0.78)" }}>
                Amparado pelo Código Civil e pelo CPC, o capital do seguro de vida é protegido contra dívidas e penhores. Credores não podem acessar esse valor — garantindo que chegue integralmente aos beneficiários.
              </p>
            </Link>
          </div>

          {/* Callout card — full width */}
          <div className="reveal reveal-delay-5" style={{
            borderRadius: 20,
            padding: "2.25rem 2.5rem",
            background: "linear-gradient(135deg, rgba(200,168,75,0.1) 0%, rgba(200,168,75,0.04) 100%)",
            border: "1px solid rgba(200,168,75,0.28)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1.5rem",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,168,75,0.07), transparent 70%)", pointerEvents: "none" }} />
            <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 14, background: "rgba(200,168,75,0.12)", border: "1px solid rgba(200,168,75,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.5)", marginBottom: "0.5rem" }}>
                Importante saber
              </div>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(232,205,122,0.98)", maxWidth: 860 }}>
                <strong style={{ color: "#e8c96a", fontWeight: 600 }}>O seguro de vida não compõe o espólio e não se enquadra como herança.</strong>{" "}
                Isso garante que o capital seja pago diretamente aos beneficiários, fora do inventário e da Tabela do ITCMD, independentemente de partilha de bens — assegurando liquidez imediata para quem você ama.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ padding: "0 1.25rem 8rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="reveal"
            style={{
              borderRadius: 24,
              padding: "4rem 4.5rem",
              background: "linear-gradient(135deg, rgba(200,168,75,0.1) 0%, rgba(200,168,75,0.04) 100%)",
              border: "1px solid rgba(200,168,75,0.22)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "3rem",
              flexWrap: "wrap",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* BG orb */}
            <div style={{ position: "absolute", right: -60, top: -60, width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle, rgba(200,168,75,0.08), transparent 70%)", pointerEvents: "none" }} />

            <div>
              <div className="section-label" style={{ marginBottom: "1rem" }}>Começar agora</div>
              <h2 className="heading-serif" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "0.75rem" }}>
                Pronto para proteger o que<br />
                <span className="text-gold-gradient">você construiu?</span>
              </h2>
              <p style={{ fontSize: "0.95rem", color: "rgba(232,205,122,0.78)", maxWidth: 440, lineHeight: 1.7 }}>
                Fale diretamente com o especialista Fábio Dias Neumann e receba uma análise personalizada para o seu perfil.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", minWidth: 220 }}>
              <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ justifyContent: "center" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Agora
              </a>
              <a href="https://instagram.com/famajo_corretora" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: "center" }}>
                @famajo_corretora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contato" style={{ padding: "0 1.25rem 8rem", background: "transparent" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-label" style={{ justifyContent: "center", marginBottom: "1.25rem" }}>Contato</div>
            <h2 className="heading-serif" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)" }}>
              Fale com o <span className="text-gold-gradient">especialista</span>
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(232,205,122,0.73)", maxWidth: 480, margin: "1rem auto 0", lineHeight: 1.7 }}>
              Preencha o formulário e entraremos em contato em breve. Ou escolha o canal de preferência.
            </p>
          </div>

          <div className="layout-grid-2col-start reveal reveal-delay-1">

            {/* Form */}
            <ContactForm />

            {/* Contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(200,168,75,0.1)", border: "1px solid rgba(200,168,75,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#c8a84b">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: 4 }}>WhatsApp</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#fff" }}>(11) 99249-0109</div>
                </div>
              </a>

              <a href="https://instagram.com/famajo_corretora" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(200,168,75,0.1)", border: "1px solid rgba(200,168,75,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="#c8a84b">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: 4 }}>Instagram</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600, color: "#fff" }}>@famajo_corretora</div>
                </div>
              </a>

              <div className="glass-card" style={{ borderRadius: 16, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,168,75,0.5)", marginBottom: "0.75rem" }}>Atendimento</div>
                <p style={{ fontSize: "0.9rem", color: "rgba(232,205,122,0.88)", lineHeight: 1.7 }}>
                  Fábio Dias Neumann responde pessoalmente a cada contato. Especialista com 15 anos de experiência em proteção patrimonial e planejamento financeiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: "1px solid rgba(200,168,75,0.1)", background: "rgba(8,12,22,0.98)", paddingTop: "4rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem" }}>

          {/* Top grid */}
          <div className="layout-grid-footer">

            {/* Col 1: Brand */}
            <div>
              <LogoTransparent height={108} style={{ marginBottom: "1.25rem" }} />
              <p style={{ fontSize: "0.875rem", lineHeight: 1.75, color: "rgba(232,205,122,0.68)", maxWidth: 320, marginBottom: "1.5rem" }}>
                Soluções estratégicas em proteção patrimonial, planejamento financeiro e gestão de riscos para pessoas, famílias e empresas.
              </p>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(200,168,75,0.08)", border: "1px solid rgba(200,168,75,0.2)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "background 0.2s" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#c8a84b">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/famajo_corretora" target="_blank" rel="noopener noreferrer"
                  style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(200,168,75,0.08)", border: "1px solid rgba(200,168,75,0.2)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#c8a84b">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: "1.25rem" }}>Navegação</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[["#sobre", "Sobre Nós"], ["#solucoes", "Soluções"], ["#beneficios", "Benefícios"], ["#contato", "Contato"]].map(([href, label]) => (
                  <a key={href} href={href} style={{ fontSize: "0.875rem", color: "rgba(232,205,122,0.73)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#c8a84b"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(232,205,122,0.73)"; }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Contact */}
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.45)", marginBottom: "1.25rem" }}>Contato</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(200,168,75,0.4)", marginBottom: "0.25rem" }}>WhatsApp</div>
                  <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.9rem", color: "rgba(232,205,122,0.93)", textDecoration: "none" }}>
                    (11) 99249-0109
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(200,168,75,0.4)", marginBottom: "0.25rem" }}>Instagram</div>
                  <a href="https://instagram.com/famajo_corretora" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "0.9rem", color: "rgba(232,205,122,0.93)", textDecoration: "none" }}>
                    @famajo_corretora
                  </a>
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", color: "rgba(200,168,75,0.4)", marginBottom: "0.25rem" }}>Especialista</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(232,205,122,0.93)" }}>Fábio Dias Neumann</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(200,168,75,0.08)", padding: "1.5rem 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(232,205,122,0.43)" }}>
              © {new Date().getFullYear()} Famajo Corretora · Fábio Dias Neumann. Todos os direitos reservados.
            </p>
            <p style={{ fontSize: "0.75rem", color: "rgba(232,205,122,0.38)" }}>
              SUSEP · Corretora de Seguros Autorizada
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
