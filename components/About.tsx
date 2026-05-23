"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const values = [
  { name: "Excellence", desc: "We don't ship average work. Every project meets the highest standard." },
  { name: "Clarity", desc: "Strategy without confusion. Design without clutter." },
  { name: "Innovation", desc: "We bring what's next, today. Always ahead of the curve." },
  { name: "Partnership", desc: "We treat your business like our own. Your growth is our success." },
];

export default function About() {
  useReveal();

  return (
    <section id="about" style={{
      padding: "120px 60px",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gap: 100, alignItems: "center",
    }}>
      {/* Visual */}
      <div className="reveal" style={{ position: "relative", height: 560 }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "var(--panel)", border: "1px solid var(--border)", overflow: "hidden",
        }}>
          <div style={{
            width: "100%", height: "100%",
            background: `linear-gradient(135deg, rgba(200,169,110,0.08) 0%, transparent 50%),
                         repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(200,169,110,0.02) 40px, rgba(200,169,110,0.02) 41px)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 180, fontWeight: 300,
              color: "rgba(200,169,110,0.08)", letterSpacing: "-0.05em", lineHeight: 1,
            }}>D</span>
          </div>
        </div>
        <div style={{
          position: "absolute", bottom: -24, right: -24,
          width: 160, height: 120, background: "var(--gold)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 300, color: "var(--black)", lineHeight: 1 }}>2+</span>
          <span style={{ fontFamily: "var(--font-ui)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(0,0,0,0.6)", marginTop: 4 }}>Years of Excellence</span>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="section-label reveal">Who We Are</div>
        <h2 className="section-title reveal reveal-delay-1">
          Not Just an Agency.<br /><em>A Growth Partner.</em>
        </h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, margin: "28px 0 20px" }}>
          Davaris was built for ambitious brands that refuse to be average. We combine strategy, design, and technology to create digital platforms that don't just look good — they perform.
        </p>
        <p className="reveal reveal-delay-3" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8 }}>
          Whether you're launching, scaling, or repositioning, we bring the expertise and execution to make it happen. We think like business owners, not just creatives.
        </p>

        <div className="reveal reveal-delay-3" style={{
          marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20,
        }}>
          {values.map((v) => (
            <div key={v.name} style={{ padding: 20, border: "1px solid var(--border)", transition: "border-color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>{v.name}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>{v.desc}</div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-4" style={{ marginTop: 40 }}>
          <Link href="#contact" className="btn-primary">Learn More About Us</Link>
        </div>
      </div>
    </section>
  );
}