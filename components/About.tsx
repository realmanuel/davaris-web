"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const values = [
  { name: "Excellence", desc: "We don't ship average work. Every project meets the highest standard." },
  { name: "Clarity", desc: "Strategy without confusion. Design without clutter." },
  { name: "Innovation", desc: "We bring what's next, today. Always ahead of the curve." },
  { name: "Partnership", desc: "We treat your business like our own. Your growth is our success." },
];

// Founder's Statement
const FOUNDER = {
  initials:  "OD",
  name:      "Osasenaga David",
  title:     "Founder & MD/CEO",
  quote:     "We started Davaris with one belief - that great digital work should be accessible to every ambitious brand, not just the biggest ones. Every project we take on, we treat as if it were our own.",
};

export default function About() {
  useReveal();

  return (
    <section id="about" style={{
      padding: "clamp(60px, 12vw, 120px) clamp(16px, 5vw, 60px)",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: "clamp(40px, 8vw, 100px)", alignItems: "center",
    }}>

      {/* ── Visual Side ── */}
      <div
        className="about-visual reveal"
        style={{ position: "relative", height: "clamp(280px, 50vw, 560px)" }}
      >
        {/* Main Image */}
        <div style={{
          position: "absolute", inset: 0,
          background: "var(--panel)", border: "1px solid var(--border)", overflow: "hidden",
        }}>
          <img
            src="/Davaris.jpg"
            alt="Davaris"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Floating Experience Card */}
        <div className="experience-card" style={{
          position: "absolute",
          bottom: "calc(-1 * clamp(12px, 3vw, 24px))",
          right: "calc(-1 * clamp(12px, 3vw, 24px))",
          width: "clamp(120px, 20vw, 160px)",
          minWidth: 120,
          height: "clamp(80px, 15vw, 120px)",
          background: "var(--gold)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          border: "1px solid rgba(0,0,0,0.06)",
          zIndex: 3,
        }}>
          <span style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 300, color: "var(--black)", lineHeight: 1,
          }}>2+</span>
          <span style={{
            fontFamily: "var(--font-ui)", fontSize: "clamp(7px, 1.5vw, 9px)",
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "rgba(0,0,0,0.6)", marginTop: 4,
          }}>Years of Excellence</span>
        </div>
      </div>

      {/* ── Content Side ── */}
      <div>
        <div className="section-label reveal">Who We Are</div>
        <h2 className="section-title reveal reveal-delay-1">
          Not Just an Agency.<br /><em>A Growth Partner.</em>
        </h2>

        <p className="reveal reveal-delay-2" style={{
          fontSize: "clamp(13px, 2vw, 15px)", color: "var(--muted)",
          lineHeight: 1.8, margin: "clamp(16px, 4vw, 28px) 0 clamp(12px, 3vw, 20px)",
        }}>
          Davaris was built for ambitious brands that refuse to be average. We combine
          strategy, design, and technology to create digital platforms that don't just
          look good — they perform.
        </p>

        <p className="reveal reveal-delay-3" style={{
          fontSize: "clamp(13px, 2vw, 15px)", color: "var(--muted)", lineHeight: 1.8,
        }}>
          Whether you're launching, scaling, or repositioning, we bring the expertise
          and execution to make it happen. We think like business owners, not just creatives.
        </p>

        {/* Values Grid */}
        <div className="reveal reveal-delay-3 about-values-grid" style={{
          marginTop: "clamp(24px, 5vw, 40px)",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
        }}>
          {values.map((v) => (
            <div
              key={v.name}
              style={{ padding: "clamp(12px, 3vw, 20px)", border: "1px solid var(--border)", transition: "border-color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{
                fontFamily: "var(--font-ui)", fontSize: "clamp(9px, 1.5vw, 11px)",
                fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--gold)", marginBottom: 8,
              }}>{v.name}</div>
              <div style={{
                fontSize: "clamp(11px, 2vw, 12px)", color: "var(--muted)", lineHeight: 1.6,
              }}>{v.desc}</div>
            </div>
          ))}
        </div>

        {/* ── Founder Statement ── */}
        <div className="reveal reveal-delay-4" style={{
          marginTop: "clamp(28px, 5vw, 48px)",
          padding: "clamp(20px, 4vw, 28px) clamp(20px, 4vw, 32px)",
          borderLeft: "2px solid var(--gold)",
          background: "rgba(200,169,110,0.04)",
          position: "relative",
        }}>
          {/* Opening quote mark */}
          <div style={{
            position: "absolute", top: "clamp(8px, 2vw, 12px)", right: "clamp(12px, 3vw, 20px)",
            fontFamily: "var(--font-display)", fontSize: "clamp(48px, 8vw, 72px)",
            color: "rgba(200,169,110,0.12)", lineHeight: 1, pointerEvents: "none",
            userSelect: "none",
          }}>"</div>

          {/* Quote text */}
          <p style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(13px, 2.2vw, 16px)",
            fontStyle: "italic", fontWeight: 300,
            color: "var(--white)", lineHeight: 1.8,
            marginBottom: "clamp(16px, 3vw, 20px)",
            paddingRight: "clamp(16px, 4vw, 32px)",
          }}>
            "{FOUNDER.quote}"
          </p>

          {/* Founder info */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: "clamp(34px, 6vw, 42px)",
              height: "clamp(34px, 6vw, 42px)",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-ui)",
              fontSize: "clamp(11px, 2vw, 13px)",
              fontWeight: 700, color: "var(--black)", flexShrink: 0,
            }}>
              {FOUNDER.initials}
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-ui)",
                fontSize: "clamp(11px, 1.8vw, 13px)",
                fontWeight: 600, letterSpacing: "0.06em",
                color: "var(--white)",
              }}>
                {FOUNDER.name}
              </div>
              <div style={{
                fontFamily: "var(--font-ui)",
                fontSize: "clamp(8px, 1.5vw, 10px)",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "var(--gold)", marginTop: 3,
              }}>
                {FOUNDER.title}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal reveal-delay-5" style={{ marginTop: "clamp(24px, 5vw, 40px)" }}>
          <Link href="#contact" className="btn-primary">Learn More About Us</Link>
        </div>
      </div>
    </section>
  );
}