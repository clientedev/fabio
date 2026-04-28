import { useParams } from "wouter";
import { useEffect } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { servicesData } from "@/data/services-data";
import NotFound from "@/pages/not-found";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const data = servicesData[slug ?? ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      .fade-up { animation: fadeUp 0.7s ease both; }
      .feature-card { background: rgba(20,30,48,0.65); backdrop-filter: blur(20px); border: 1px solid rgba(200,168,75,0.15); border-radius: 16px; padding: 2rem; transition: border-color 0.35s, transform 0.35s, box-shadow 0.35s; }
      .feature-card:hover { border-color: rgba(200,168,75,0.45); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(200,168,75,0.06); }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  if (!data) return <NotFound />;

  return (
    <div style={{ minHeight: "100vh", background: "var(--navy)", color: "#d4b96a" }}>
      <SiteNav />

      {/* ─── Hero ─── */}
      <section style={{ position: "relative", height: "60vh", minHeight: 420, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src={data.imageUrl}
          alt={data.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(42,55,96,1) 0%, rgba(42,55,96,0.7) 50%, rgba(42,55,96,0.25) 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 1.25rem 3rem" }}>
          <div className="fade-up" style={{ animationDelay: "0.1s" }}>
            <div style={{ display: "inline-block", background: "rgba(200,168,75,0.1)", border: "1px solid rgba(200,168,75,0.3)", borderRadius: 100, padding: "0.35rem 1rem", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {data.category}
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1rem" }}
              className="text-gold-gradient">
              {data.title}
            </h1>
            <p style={{ fontSize: "clamp(0.95rem, 2vw, 1.2rem)", color: "rgba(232,205,122,0.88)", maxWidth: 600, lineHeight: 1.6 }}>
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Intro + Stats ─── */}
      <section style={{ padding: "4rem 1.25rem", maxWidth: 1200, margin: "0 auto" }}>
        {data.stats.length > 0 ? (
          <div className="layout-grid-intro">
            <div>
              <div style={{ width: 56, height: 2, background: "linear-gradient(90deg, #c8a84b, transparent)", marginBottom: "1.5rem" }} />
              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(232,205,122,0.93)" }}>{data.intro}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {data.stats.map((s) => (
                <div key={s.label} style={{ background: "rgba(20,30,48,0.6)", border: "1px solid rgba(200,168,75,0.15)", borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                  <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", fontWeight: 700 }} className="text-gold-gradient">{s.value}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(232,205,122,0.63)", marginTop: "0.25rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ width: 56, height: 2, background: "linear-gradient(90deg, #c8a84b, transparent)", marginBottom: "1.5rem" }} />
            <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(232,205,122,0.93)" }}>{data.intro}</p>
          </div>
        )}
      </section>

      {/* ─── Features ─── */}
      <section style={{ padding: "2rem 1.25rem 4rem", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "2.5rem", textAlign: "center" }}
          className="text-gold-gradient">
          O Que Está Incluso
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "1.25rem" }}>
          {data.features.map((f, i) => (
            <div key={i} className="feature-card">
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(200,168,75,0.1)", border: "1px solid rgba(200,168,75,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.icon} />
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", color: "#d4b96a", marginBottom: "0.75rem" }}>{f.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(232,205,122,0.73)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Steps ─── */}
      <section style={{ padding: "4rem 1.25rem", background: "rgba(15,20,35,0.6)", borderTop: "1px solid rgba(200,168,75,0.06)", borderBottom: "1px solid rgba(200,168,75,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "2.5rem", textAlign: "center" }}
            className="text-gold-gradient">
            Como Funciona
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))", gap: "2rem" }}>
            {data.steps.map((step, i) => (
              <div key={i} style={{ position: "relative" }}>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3rem", fontWeight: 700, opacity: 0.12, lineHeight: 1, marginBottom: "0.5rem" }} className="text-gold-gradient">
                  {step.num}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#c8a84b", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.7, color: "rgba(232,205,122,0.68)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who needs ─── */}
      <section style={{ padding: "4rem 1.25rem", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: "2rem" }}
          className="text-gold-gradient">
          Para quem é esta solução
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
          {data.who.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.875rem", background: "rgba(200,168,75,0.04)", border: "1px solid rgba(200,168,75,0.12)", borderRadius: 10, padding: "0.875rem 1.25rem" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span style={{ fontSize: "0.9rem", color: "rgba(232,205,122,0.88)" }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "4rem 1.25rem", textAlign: "center", background: "rgba(15,20,35,0.5)", borderTop: "1px solid rgba(200,168,75,0.06)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.25rem" }}
            className="text-gold-gradient">
            Pronto para dar o próximo passo?
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(232,205,122,0.73)", marginBottom: "2.5rem" }}>
            Fale com Fábio Dias Neumann e receba uma análise personalizada, sem compromisso.
          </p>
          <a
            href="https://wa.me/5511992490109"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ padding: "1rem 2.5rem", borderRadius: 8, fontSize: "1rem", fontWeight: 700 }}
          >
            {data.ctaText}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
