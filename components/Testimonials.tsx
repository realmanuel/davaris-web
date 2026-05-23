"use client";
import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  { initials: "AK", name: "Amara Konte", role: "CEO, Konte Consulting", text: "Davaris didn't just build our website — they transformed how we present ourselves online. The results were immediate. Inquiries doubled within the first month." },
  { initials: "BN", name: "Blessing Nwosu", role: "Founder, Nwosu Studios", text: "The team at Davaris understood our vision from day one. They created a brand identity that finally felt like us. Premium, clean, and unforgettable." },
  { initials: "TO", name: "Tunde Okafor", role: "Director, Okafor Group", text: "Working with Davaris felt like having an in-house team that actually cared. They brought strategy, creativity, and execution all under one roof." },
  { initials: "FA", name: "Fatima Al-Rashid", role: "CTO, Rashid Tech", text: "Our app launch was flawless. Davaris handled design, development, and launch strategy. The attention to detail was extraordinary from start to finish." },
  { initials: "KM", name: "Kofi Mensah", role: "Brand Manager, Mensah Co.", text: "I was skeptical at first, but Davaris exceeded every expectation. Our social media growth went from stagnant to 40% month-over-month. Incredible team." },
];

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="testimonials-card" style={{
    width: 400, flexShrink: 0,
    background: "var(--dark)", border: "1px solid var(--border)",
    padding: "clamp(24px, 4vw, 40px)", position: "relative",
  }}>
    <div style={{ position: "absolute", top: "clamp(20px, 3vw, 40px)", right: "clamp(20px, 3vw, 40px)", color: "var(--gold)", fontSize: "clamp(10px, 1.5vw, 12px)", letterSpacing: 2 }}>★★★★★</div>
    <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 8vw, 64px)", color: "var(--gold)", opacity: 0.3, lineHeight: 0.8, marginBottom: 16 }}>"</div>
    <p style={{ fontSize: "clamp(12px, 1.8vw, 14px)", color: "var(--muted)", lineHeight: 1.8, marginBottom: 28, fontStyle: "italic" }}>{t.text}</p>
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{
        width: "clamp(32px, 6vw, 40px)", height: "clamp(32px, 6vw, 40px)", borderRadius: "50%",
        background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-ui)", fontSize: "clamp(11px, 2vw, 13px)", fontWeight: 700, color: "var(--black)", flexShrink: 0,
      }}>{t.initials}</div>
      <div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(11px, 1.8vw, 13px)", fontWeight: 600 }}>{t.name}</div>
        <div style={{ fontSize: "clamp(9px, 1.5vw, 11px)", color: "var(--muted)" }}>{t.role}</div>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  useReveal();

  return (
    <section id="testimonials" style={{ padding: "clamp(60px, 12vw, 120px) 0", background: "var(--off-black)", overflow: "hidden" }}>
      <div className="testimonials-header" style={{ marginBottom: "clamp(32px, 8vw, 72px)", paddingLeft: "clamp(16px, 5vw, 60px)", paddingRight: "clamp(16px, 5vw, 60px)" }}>
        <div className="section-label reveal">Client Voices</div>
        <h2 className="section-title reveal reveal-delay-1">Trusted by Brands That<br /><em>Mean Business.</em></h2>
      </div>
      <div className="testimonials-scroll" style={{ overflow: "hidden", marginTop: "clamp(24px, 5vw, 48px)" }}>
        <div style={{
          display: "flex", gap: "clamp(16px, 3vw, 24px)",
          animation: "scroll 30s linear infinite",
          width: "max-content",
        }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.animationPlayState = "running")}
        >
          {/* Render twice for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}