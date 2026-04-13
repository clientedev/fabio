import { useEffect, useRef } from "react";
import logoImg from "@assets/Logo_Famajo_-_Copia.JPG_1776107021970.jpeg";
import fabioImg from "@assets/image_1776107063260.png";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          el.classList.remove("opacity-0-init");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`opacity-0-init ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const services = [
  {
    title: "Seguro de Vida Personalizado",
    icon: "🛡️",
    description:
      "O seguro personalizado é um modelo de proteção estruturado com base no perfil específico e nas necessidades reais do cliente, afastando-se de pacotes padronizados.",
    detail:
      "Ele garante segurança financeira em momentos inesperados e ajuda a manter o padrão de vida de quem você ama.",
  },
  {
    title: "Proteção Laboral (Renda em Vida)",
    icon: "💼",
    description: "Suporte financeiro imediato em situações como:",
    bullets: [
      "Diagnóstico de Doenças Graves",
      "Invalidez por doença ou acidente",
      "Diárias de internação hospitalar",
      "Afastamento temporário do trabalho (DIT)",
      "Risco cirúrgico",
      "Quebra de ossos",
    ],
    detail:
      "Tudo isso para que sua renda continue protegida mesmo em momentos delicados.",
  },
  {
    title: "Sucessão Empresarial — Blindagem do CNPJ",
    icon: "🏢",
    description: "O seguro pode ser utilizado para:",
    bullets: [
      "Compra de cotas entre sócios",
      "Continuidade da empresa",
      "Proteção do patrimônio empresarial",
    ],
    detail:
      "Evita a descapitalização da empresa ou a entrada de terceiros na gestão. Capital destinado para pagamento de impostos, custos de inventário e honorários jurídicos. Mitiga o risco de liquidação forçada de ativos.",
  },
  {
    title: "Consórcios",
    icon: "🔑",
    description:
      "Planejamento para aquisição de bens e serviços sem juros.",
    bullets: [
      "Consórcio de imóveis",
      "Consórcio de veículos",
      "Consórcio de motos",
      "Consórcio de caminhões",
      "Consórcio de serviços",
      "Consórcio empresarial",
    ],
  },
  {
    title: "Plano de Saúde",
    icon: "❤️",
    description:
      "Proteção para cuidar da sua saúde e da sua família, com acesso à rede médica de qualidade e segurança em momentos importantes.",
    detail:
      "Revisão de planos atuais, visando redução de custos ou melhorias na rede.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1a2340", color: "#c9a84c", fontFamily: "Georgia, 'Times New Roman', serif" }}>
      {/* HEADER */}
      <header style={{ backgroundColor: "#151c33", borderBottom: "1px solid rgba(201,168,76,0.3)" }} className="sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Famajo Corretora"
              className="h-14 w-auto object-contain rounded"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {["Sobre", "Soluções", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace("ç", "c").replace("õ", "o")}`}
                className="text-sm tracking-widest uppercase font-semibold transition-colors"
                style={{ color: "#c9a84c", letterSpacing: "0.12em" }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = "#f0d070")}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = "#c9a84c")}
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="https://wa.me/5511992490109"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded font-bold text-sm tracking-wider transition-all"
            style={{
              backgroundColor: "#c9a84c",
              color: "#151c33",
              border: "none",
            }}
            onMouseEnter={e => ((e.target as HTMLElement).style.backgroundColor = "#f0d070")}
            onMouseLeave={e => ((e.target as HTMLElement).style.backgroundColor = "#c9a84c")}
          >
            Falar com Especialista
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #151c33 0%, #1a2340 50%, #1f2d52 100%)", minHeight: "100vh", display: "flex", alignItems: "center" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ backgroundColor: "#c9a84c", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: "#c9a84c", transform: "translate(-30%, 30%)" }} />

        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="mb-4 inline-block px-4 py-1 rounded-full text-xs tracking-widest font-bold uppercase" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.4)" }}>
                15 anos de experiência
              </div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-4" style={{ color: "#ffffff", lineHeight: 1.15 }}>
                Transformando{" "}
                <span style={{ color: "#c9a84c" }}>Riscos</span>{" "}
                em Tranquilidade Financeira
              </h1>
              <div className="w-20 h-1 my-6 rounded" style={{ backgroundColor: "#c9a84c" }} />
              <p className="text-lg md:text-xl mb-4" style={{ color: "rgba(201,168,76,0.85)" }}>
                Soluções completas em{" "}
                <strong style={{ color: "#f0d070" }}>Proteção Patrimonial</strong>,{" "}
                <strong style={{ color: "#f0d070" }}>Planejamento Financeiro</strong> e{" "}
                <strong style={{ color: "#f0d070" }}>Segurança</strong> para sua família, sua renda e seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="https://wa.me/5511992490109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-base tracking-wider transition-all shadow-lg"
                  style={{ backgroundColor: "#c9a84c", color: "#151c33" }}
                  onMouseEnter={e => ((e.target as HTMLElement).style.backgroundColor = "#f0d070")}
                  onMouseLeave={e => ((e.target as HTMLElement).style.backgroundColor = "#c9a84c")}
                >
                  Falar com Especialista
                </a>
                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded font-bold text-base tracking-wider transition-all"
                  style={{ backgroundColor: "transparent", color: "#c9a84c", border: "2px solid #c9a84c" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(201,168,76,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  Conhecer Soluções
                </a>
              </div>
            </div>

            {/* Right: Fábio photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl" style={{ border: "2px solid rgba(201,168,76,0.3)", transform: "translate(12px, 12px)" }} />
                <img
                  src={fabioImg}
                  alt="Fábio Dias Neumann"
                  className="relative z-10 rounded-2xl object-cover shadow-2xl"
                  style={{ width: "380px", maxWidth: "100%", border: "2px solid rgba(201,168,76,0.6)" }}
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(21,28,51,0.93)", border: "1px solid rgba(201,168,76,0.4)", backdropFilter: "blur(8px)" }}>
                  <p className="font-bold text-lg" style={{ color: "#f0d070" }}>Fábio Dias Neumann</p>
                  <p className="text-sm" style={{ color: "rgba(201,168,76,0.7)" }}>Especialista em Proteção Patrimonial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PURPOSE */}
      <section id="sobre" className="py-24" style={{ backgroundColor: "#151c33" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full text-xs tracking-widest font-bold uppercase mb-4" style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}>
                Nosso Propósito
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#ffffff" }}>
                Protegemos Pessoas,{" "}
                <span style={{ color: "#c9a84c" }}>Famílias e Empresas</span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(201,168,76,0.85)" }}>
                  Nosso propósito é proteger pessoas, famílias e empresas, transformando riscos financeiros em tranquilidade e segurança.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "rgba(201,168,76,0.85)" }}>
                  Atuamos com soluções estratégicas para proteção patrimonial, planejamento financeiro e gestão de riscos, ajudando nossos clientes a estarem preparados para qualquer cenário.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "15+", label: "Anos de Experiência" },
                  { number: "100%", label: "Dedicação ao Cliente" },
                  { number: "5", label: "Soluções Completas" },
                  { number: "∞", label: "Tranquilidade Financeira" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-6 text-center"
                    style={{ backgroundColor: "#1a2340", border: "1px solid rgba(201,168,76,0.25)" }}
                  >
                    <div className="text-3xl font-bold mb-1" style={{ color: "#c9a84c" }}>
                      {stat.number}
                    </div>
                    <div className="text-xs tracking-wide uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="solucoes" className="py-24" style={{ backgroundColor: "#1a2340" }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full text-xs tracking-widest font-bold uppercase mb-4" style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}>
                Nossas Soluções
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#ffffff" }}>
                Proteção Completa para Você e{" "}
                <span style={{ color: "#c9a84c" }}>Seu Patrimônio</span>
              </h2>
              <div className="w-20 h-1 mx-auto mt-6 rounded" style={{ backgroundColor: "#c9a84c" }} />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <AnimatedSection key={service.title} delay={idx * 100}>
                <div
                  className="h-full rounded-2xl p-7 flex flex-col transition-all duration-300 group"
                  style={{
                    backgroundColor: "#1e2a4a",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.6)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(201,168,76,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3 leading-snug" style={{ color: "#f0d070" }}>
                    {service.title}
                  </h3>
                  <div className="w-10 h-0.5 mb-4 rounded" style={{ backgroundColor: "rgba(201,168,76,0.5)" }} />
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(201,168,76,0.75)" }}>
                    {service.description}
                  </p>
                  {service.bullets && (
                    <ul className="mb-3 space-y-1">
                      {service.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "rgba(201,168,76,0.75)" }}>
                          <span style={{ color: "#c9a84c", marginTop: 2 }}>▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.detail && (
                    <p className="text-sm leading-relaxed mt-auto pt-3 italic" style={{ color: "rgba(201,168,76,0.6)", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                      {service.detail}
                    </p>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.15) 0%, rgba(201,168,76,0.05) 100%)", borderTop: "1px solid rgba(201,168,76,0.3)", borderBottom: "1px solid rgba(201,168,76,0.3)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#ffffff" }}>
              Pronto para{" "}
              <span style={{ color: "#c9a84c" }}>Proteger</span> o que é Seu?
            </h2>
            <p className="text-lg mb-8" style={{ color: "rgba(201,168,76,0.8)" }}>
              Fale com o especialista e descubra a solução ideal para você, sua família ou empresa.
            </p>
            <a
              href="https://wa.me/5511992490109"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg tracking-wider transition-all shadow-xl"
              style={{ backgroundColor: "#c9a84c", color: "#151c33" }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#f0d070")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundColor = "#c9a84c")}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp: (11) 99249-0109
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contato" className="py-24" style={{ backgroundColor: "#151c33" }}>
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full text-xs tracking-widest font-bold uppercase mb-4" style={{ backgroundColor: "rgba(201,168,76,0.1)", color: "#c9a84c", border: "1px solid rgba(201,168,76,0.3)" }}>
                Contato
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#ffffff" }}>
                Onde me Encontrar
              </h2>
              <div className="w-20 h-1 mx-auto mt-6 rounded" style={{ backgroundColor: "#c9a84c" }} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Phone */}
              <a
                href="https://wa.me/5511992490109"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-8 text-center flex flex-col items-center gap-3 transition-all duration-300 group"
                style={{ backgroundColor: "#1a2340", border: "1px solid rgba(201,168,76,0.25)", textDecoration: "none" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.6)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.25)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#c9a84c">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>Contato</p>
                  <p className="font-bold text-xl" style={{ color: "#f0d070" }}>(11) 99249-0109</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/famajo_correto"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl p-8 text-center flex flex-col items-center gap-3 transition-all duration-300"
                style={{ backgroundColor: "#1a2340", border: "1px solid rgba(201,168,76,0.25)", textDecoration: "none" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.6)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.border = "1px solid rgba(201,168,76,0.25)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#c9a84c">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "rgba(201,168,76,0.6)" }}>Rede Social</p>
                  <p className="font-bold text-xl" style={{ color: "#f0d070" }}>@famajo_correto</p>
                </div>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#0e1525", borderTop: "1px solid rgba(201,168,76,0.2)" }} className="py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="Famajo Corretora" className="h-10 w-auto object-contain rounded" />
            <span className="font-bold tracking-wider text-sm" style={{ color: "#c9a84c" }}>FAMAJO CORRETORA</span>
          </div>
          <p className="text-xs text-center" style={{ color: "rgba(201,168,76,0.4)" }}>
            © {new Date().getFullYear()} Famajo Corretora — Fábio Dias Neumann. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/5511992490109" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: "#c9a84c" }}>
              (11) 99249-0109
            </a>
            <span style={{ color: "rgba(201,168,76,0.3)" }}>|</span>
            <a href="https://instagram.com/famajo_correto" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: "#c9a84c" }}>
              @famajo_correto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
