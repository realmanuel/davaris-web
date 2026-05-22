"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function CtaSection() {
  useReveal();

  return (
    <section id="cta-section" style={{
      padding: "160px 60px", textAlign: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(200,169,110,0.06) 0%, transparent 70%)",
      }} />
      <div className="reveal" style={{ fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24 }}>
        Ready When You Are
      </div>
      <h2 className="reveal reveal-delay-1" style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(48px, 7vw, 96px)",
        fontWeight: 300, lineHeight: 1.0,
        letterSpacing: "-0.02em", marginBottom: 24,
      }}>
        Ready to Build<br />Something <em style={{ fontStyle: "italic", color: "var(--gold)" }}>Great?</em>
      </h2>
      <p className="reveal reveal-delay-2" style={{
        fontSize: 15, color: "var(--muted)",
        maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7,
      }}>
        Let's talk about your project and how Davaris can help you grow. No fluff — just real conversations about real results.
      </p>
      <div className="reveal reveal-delay-3" style={{ display: "flex", gap: 20, justifyContent: "center", alignItems: "center" }}>
        <Link href="#contact" className="btn-primary">Work With Us</Link>
        <Link href="#portfolio" className="btn-ghost" style={{ color: "var(--muted)" }}>See Our Work</Link>
      </div>
    </section>
  );
}