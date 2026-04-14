import { useParams } from "wouter";
import { useEffect } from "react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { benefitsData } from "@/data/benefits-data";
import NotFound from "@/pages/not-found";

export default function BenefitPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = benefitsData[slug ?? ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
      .fade-up { animation: fadeUp 0.7s ease both; }
      .nav-link { color: rgba(212,185,106,0.65); text-decoration: none; font-size: 0.875rem; font-weight: 500; letter-spacing: 0.04em; transition: color 0.2s; }
      .nav-link:hover { color: #c8a84b; }
      .btn-gold { background: linear-gradient(135deg, #b8902a, #e8c96a, #b8902a); background-size: 200%; color: #0d1220; font-weight: 700; text-decoration: none; cursor: pointer; border: none; transition: background-position 0.4s, transform 0.2s, box-shadow 0.2s; display: inline-flex; align-items: center; gap: 0.5rem; }
      .btn-gold:hover { background-position: right; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(200,168,75,0.35); }
      .feature-card { background: rgba(20,30,48,0.65); backdrop-filter: blur(20px); border: 1px solid rgba(200,168,75,0.15); border-radius: 16px; padding: 2rem; transition: border-color 0.35s, transform 0.35s, box-shadow 0.35s; }
      .feature-card:hover { border-color: rgba(200,168,75,0.45); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(200,168,75,0.06); }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  if (!data) return <NotFound />;

  return (
    <div style={{ minHeight: "100vh", background: "var(--navy)", color: "#d4b96a" }}>
      <SiteNav />

      {/* ─── Hero ─── */}
      <section style={{ position: "relative", height: "70vh", minHeight: 520, display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <img
          src={data.imageUrl}
          alt={data.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,14,26,1) 0%, rgba(10,14,26,0.7) 50%, rgba(10,14,26,0.25) 100%)" }} />
        <div style={{ position: "relative", width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 2rem 5rem" }}>
          <div className="fade-up" style={{ animationDelay: "0.1s" }}>
            <div style={{ display: "inline-block", background: "rgba(200,168,75,0.1)", border: "1px solid rgba(200,168,75,0.3)", borderRadius: 100, padding: "0.35rem 1rem", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {data.category}
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1rem" }}
              className="text-gold-gradient">
              {data.title}
            </h1>
            <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "rgba(212,185,106,0.7)", maxWidth: 640, lineHeight: 1.6 }}>
              {data.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section style={{ padding: "5rem 2rem", maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div style={{ width: 56, height: 2, background: "linear-gradient(90deg, transparent, #c8a84b, transparent)", margin: "0 auto 2rem" }} />
        <p style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "rgba(212,185,106,0.72)" }}>{data.intro}</p>
        {data.legalRef && (
          <div style={{ display: "inline-block", marginTop: "2rem", background: "rgba(200,168,75,0.06)", border: "1px solid rgba(200,168,75,0.2)", borderRadius: 8, padding: "0.625rem 1.25rem", fontSize: "0.75rem", letterSpacing: "0.08em", color: "#c8a84b" }}>
            📖 Amparo Legal: {data.legalRef}
          </div>
        )}
      </section>

      {/* ─── Details Grid ─── */}
      <section style={{ padding: "2rem 2rem 5rem", maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", marginBottom: "3rem", textAlign: "center" }}
          className="text-gold-gradient">
          Entenda na Prática
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {data.details.map((d, i) => (
            <div key={i} className="feature-card">
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(200,168,75,0.1)", border: "1px solid rgba(200,168,75,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={d.icon} />
                </svg>
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", color: "#d4b96a", marginBottom: "0.75rem" }}>{d.title}</h3>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "rgba(212,185,106,0.55)" }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Highlight box ─── */}
      <section style={{ padding: "4rem 2rem", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(135deg, rgba(200,168,75,0.07) 0%, rgba(200,168,75,0.03) 100%)",
          border: "1px solid rgba(200,168,75,0.2)",
          borderLeft: "4px solid #c8a84b",
          borderRadius: 16,
          padding: "2.5rem 3rem",
        }}>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
            <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: "rgba(200,168,75,0.12)", border: "1px solid rgba(200,168,75,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(200,168,75,0.5)", marginBottom: "0.75rem" }}>Importante Saber</div>
              <p style={{ fontSize: "0.975rem", lineHeight: 1.8, color: "rgba(212,185,106,0.72)" }}>{data.highlight}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "5rem 2rem", textAlign: "center", background: "rgba(15,20,35,0.5)", borderTop: "1px solid rgba(200,168,75,0.06)" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "1.25rem" }}
            className="text-gold-gradient">
            Quero aproveitar este benefício
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "rgba(212,185,106,0.55)", marginBottom: "2.5rem" }}>
            Converse com Fábio Dias Neumann e descubra como estruturar seu seguro para obter todos esses benefícios de forma legal e eficiente.
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
