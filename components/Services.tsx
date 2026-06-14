"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const services = [
  { num: "01", name: "Website Development", desc: "Fast, modern, and conversion-focused websites built to perform. Custom-built for speed, usability, and results." },
  { num: "02", name: "Mobile App Development", desc: "Native and cross-platform apps designed around your users. From MVP to enterprise - built to scale." },
  { num: "03", name: "UI/UX Design", desc: "Interfaces that feel intuitive, look beautiful, and drive action. Rooted in user psychology and brand identity." },
  { num: "04", name: "Branding", desc: "Identity systems that make your brand impossible to ignore. Logo, color, typography, your full visual language." },
  { num: "05", name: "Social Media Management", desc: "Content, strategy, and growth across every relevant platform. Consistent, on-brand, and always performing." },
  { num: "06", name: "Digital Strategy", desc: "Data-driven plans that align your digital efforts with real business goals. Clarity before execution every time." },
];

export default function Services() {
  useReveal();

  return (
    <section id="services" style={{ padding: "clamp(60px, 12vw, 120px) clamp(16px, 5vw, 60px)", background: "var(--off-black)" }}>
      <div className="services-header" style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        marginBottom: "clamp(40px, 10vw, 72px)", borderBottom: "1px solid var(--border)", paddingBottom: "clamp(24px, 5vw, 48px)",
      }}>
        <div>
          <div className="section-label reveal">Our Services</div>
          <h2 className="section-title reveal reveal-delay-1">
            Everything Your Brand<br />Needs to <em>Win Online.</em>
          </h2>
        </div>
        <div className="reveal reveal-delay-2" style={{ maxWidth: 360 }}>
          <p style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "var(--muted)", lineHeight: 1.7, marginBottom: 24 }}>
            From first impression to final conversion, we handle every layer of your digital presence with precision.
          </p>
          <Link href="#contact" className="btn-primary">Explore All Services</Link>
        </div>
      </div>

      <div className="services-grid" style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: 1, background: "var(--border)",
      }}>
        {services.map((s, i) => (
          <div key={s.num}
            className={`reveal${i % 3 === 1 ? " reveal-delay-1" : i % 3 === 2 ? " reveal-delay-2" : ""}`}
            style={{
              background: "var(--off-black)", padding: "clamp(28px, 5vw, 44px) clamp(24px, 5vw, 40px)",
              transition: "background 0.4s", position: "relative", overflow: "hidden",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--off-black)")}
          >
            <div style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(42px, 8vw, 64px)", fontWeight: 300,
              color: "rgba(200,169,110,0.12)", lineHeight: 1, marginBottom: 24,
            }}>{s.num}</div>
            <div style={{
              fontFamily: "var(--font-ui)", fontSize: "clamp(13px, 2vw, 15px)", fontWeight: 600,
              letterSpacing: "0.05em", marginBottom: 12,
            }}>{s.name}</div>
            <div style={{ fontSize: "clamp(12px, 2vw, 13px)", color: "var(--muted)", lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</div>
            <Link href="#contact" style={{
              fontFamily: "var(--font-ui)", fontSize: "clamp(9px, 1.5vw, 10px)", fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--gold)", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 8,
            }}>
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}