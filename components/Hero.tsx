"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: "100vh", position: "relative",
      display: "flex", flexDirection: "column", justifyContent: "flex-end",
      padding: "0 60px 80px", overflow: "hidden",
    }}>
      {/* Background */}
      <div style={{
        position: "absolute", inset: 0,
        background: `radial-gradient(ellipse 80% 60% at 70% 30%, rgba(200,169,110,0.06) 0%, transparent 60%),
                     radial-gradient(ellipse 50% 80% at 10% 80%, rgba(200,169,110,0.04) 0%, transparent 50%)`,
      }} />
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }} />

      {/* Stat Strip */}
      <div style={{
        position: "absolute", right: 0, top: "50%",
        transform: "translateY(-50%)",
        display: "flex", flexDirection: "column",
        borderLeft: "1px solid var(--border)",
        opacity: 0, animation: "fadeIn 1s 1.2s forwards",
      }}>
        {[
          { num: "50+", label: "Projects" },
          { num: "98%", label: "Satisfaction" },
          { num: "5★", label: "Rated" },
        ].map((s) => (
          <div key={s.label} style={{
            padding: "28px 48px",
            borderBottom: "1px solid var(--border)",
            textAlign: "center",
          }}>
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 38,
              fontWeight: 300, color: "var(--gold)", lineHeight: 1, display: "block",
            }}>{s.num}</span>
            <span style={{
              fontFamily: "var(--font-ui)", fontSize: 9,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "var(--muted)", display: "block", marginTop: 6,
            }}>{s.label}</span>
          </div>
        ))}
      </div>

      <div style={{ opacity: 0, animation: "fadeUp 0.8s 0.3s forwards", fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>
        Digital Agency · Est. 2024
      </div>

      <h1 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(52px, 8vw, 110px)",
        fontWeight: 300, lineHeight: 1.0,
        letterSpacing: "-0.02em", maxWidth: 900,
        opacity: 0, animation: "fadeUp 0.9s 0.5s forwards",
      }}>
        We Build Digital<br />Experiences That<br />
        <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Grow Businesses.</em>
      </h1>

      <p style={{
        fontSize: 16, fontWeight: 300, color: "var(--muted)",
        maxWidth: 480, marginTop: 28, lineHeight: 1.7,
        opacity: 0, animation: "fadeUp 0.9s 0.7s forwards",
      }}>
        Davaris is a premium digital agency crafting websites, apps, brands, and strategies that turn visitors into loyal clients.
      </p>

      <div style={{
        display: "flex", alignItems: "center", gap: 32, marginTop: 48,
        opacity: 0, animation: "fadeUp 0.9s 0.9s forwards",
      }}>
        <Link href="#contact" className="btn-primary">Start a Project</Link>
        <Link href="#portfolio" className="btn-ghost">View Our Work</Link>
      </div>

      <div style={{
        position: "absolute", right: 60, bottom: 80,
        writingMode: "vertical-rl",
        fontFamily: "var(--font-ui)", fontSize: 10,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "var(--muted)",
        opacity: 0, animation: "fadeIn 1s 1.4s forwards",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <span style={{ width: 1, height: 50, background: "linear-gradient(to bottom, transparent, var(--gold))", display: "block" }} />
        Scroll
      </div>
    </section>
  );
}