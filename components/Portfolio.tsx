"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

const items = [
  { label: "Website Development", tag: "E-Commerce · 2024", name: "Luxe Retail Platform", bg: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)", col: 7 },
  { label: "Branding", tag: "Brand Identity · 2024", name: "Amber & Co. Identity", bg: "linear-gradient(135deg, #1a0a00, #2d1200, #3d1a00)", col: 5 },
  { label: "UI/UX Design", tag: "Mobile App · 2025", name: "FinTrack App UI", bg: "linear-gradient(135deg, #0a0a1a, #1a1a0a)", col: 4 },
  { label: "Web App", tag: "SaaS · 2025", name: "Pulse Dashboard", bg: "linear-gradient(135deg, #0a1a0a, #0a200a)", col: 4 },
  { label: "Strategy", tag: "Digital Strategy · 2025", name: "NovaBrand Growth", bg: "linear-gradient(135deg, #1a0a1a, #200a20)", col: 4 },
];

export default function Portfolio() {
  useReveal();

  return (
    <section id="portfolio" style={{ padding: "clamp(60px, 12vw, 120px) clamp(16px, 5vw, 60px)" }}>
      <div className="portfolio-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "clamp(40px, 8vw, 60px)", flexWrap: "wrap", gap: 20 }}>
        <div>
          <div className="section-label reveal">Our Work</div>
          <h2 className="section-title reveal reveal-delay-1">Projects That Speak<br />for <em>Themselves.</em></h2>
        </div>
        <Link href="#contact" className="btn-ghost reveal reveal-delay-2" style={{ color: "var(--muted)" }}>View All Projects</Link>
      </div>

      <div className="reveal portfolio-grid" style={{
        display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "clamp(12px, 2vw, 16px)",
      }}>
        {items.map((item) => (
          <div key={item.name} className="portfolio-item"
            style={{
              gridColumn: `span ${item.col}`,
              position: "relative", overflow: "hidden",
              background: "var(--panel)", border: "1px solid var(--border)",
              cursor: "pointer", aspectRatio: item.col === 7 ? "16/9" : item.col === 5 ? "4/3" : "1",
            }}
            onMouseEnter={(e) => {
              const bg = e.currentTarget.querySelector(".p-bg") as HTMLElement;
              const overlay = e.currentTarget.querySelector(".p-overlay") as HTMLElement;
              const plus = e.currentTarget.querySelector(".p-plus") as HTMLElement;
              if (bg) bg.style.transform = "scale(1.05)";
              if (overlay) overlay.style.opacity = "1";
              if (plus) plus.style.transform = "translate(-50%, -50%) scale(1)";
            }}
            onMouseLeave={(e) => {
              const bg = e.currentTarget.querySelector(".p-bg") as HTMLElement;
              const overlay = e.currentTarget.querySelector(".p-overlay") as HTMLElement;
              const plus = e.currentTarget.querySelector(".p-plus") as HTMLElement;
              if (bg) bg.style.transform = "scale(1)";
              if (overlay) overlay.style.opacity = "0";
              if (plus) plus.style.transform = "translate(-50%, -50%) scale(0)";
            }}
          >
            <div className="p-bg" style={{ position: "absolute", inset: 0, background: item.bg, transition: "transform 0.6s ease" }} />
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 20px)",
            }} />
            <div style={{
              position: "absolute", top: "clamp(12px, 2vw, 24px)", left: "clamp(12px, 2vw, 24px)",
              fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)", fontWeight: 600,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--muted)", border: "1px solid var(--border)",
              padding: "clamp(4px, 1vw, 6px) clamp(8px, 1.5vw, 12px)", background: "rgba(8,8,8,0.6)", backdropFilter: "blur(8px)",
            }}>{item.label}</div>
            <div className="p-plus" style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%) scale(0)",
              width: 50, height: 50,
              border: "1px solid rgba(200,169,110,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 24, color: "var(--gold)",
              transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}>+</div>
            <div className="p-overlay" style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 50%)",
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
              padding: "clamp(16px, 3vw, 28px)", opacity: 0, transition: "opacity 0.4s",
            }}>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(7px, 1.5vw, 9px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>{item.tag}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px, 3vw, 22px)", fontWeight: 400, lineHeight: 1.2 }}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}