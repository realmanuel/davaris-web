"use client";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  { num: "1", title: "Discovery", desc: "We learn your business, goals, audience, and competition." },
  { num: "2", title: "Strategy", desc: "A clear digital plan tailored to your objectives." },
  { num: "3", title: "Design", desc: "Visual concepts that align with your brand and delight users." },
  { num: "4", title: "Development", desc: "Fast, secure, and scalable digital products built to last." },
  { num: "5", title: "Launch", desc: "We deploy, test, and go live with precision and care." },
  { num: "6", title: "Growth", desc: "We optimize, analyze, and evolve with your brand continuously." },
];

const delays = ["", " reveal-delay-1", " reveal-delay-2", " reveal-delay-3", " reveal-delay-4", " reveal-delay-5"];

export default function Process() {
  useReveal();

  return (
    <section id="process" style={{ padding: "clamp(60px, 12vw, 120px) clamp(16px, 5vw, 60px)", background: "var(--off-black)" }}>
      <div style={{ textAlign: "center", marginBottom: "clamp(40px, 10vw, 80px)" }}>
        <div className="section-label reveal" style={{ justifyContent: "center" }}>
          <span>How We Work</span>
        </div>
        <h2 className="section-title reveal reveal-delay-1">Our <em>Process</em></h2>
      </div>

      <div className="process-steps" style={{
        display: "grid", gridTemplateColumns: "repeat(6, 1fr)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", top: 28, left: "10%", right: "10%",
          height: 1,
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
        }} />
        {steps.map((s, i) => (
          <div key={s.num} className={`reveal${delays[i]} process-step-item`} style={{ padding: "0 clamp(12px, 2vw, 20px)", textAlign: "center" }}>
            <div style={{
              width: "clamp(40px, 7vw, 56px)", height: "clamp(40px, 7vw, 56px)", border: "1px solid var(--gold)",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto clamp(12px, 3vw, 20px)",
              fontFamily: "var(--font-display)", fontSize: "clamp(16px, 3vw, 20px)", fontWeight: 300,
              color: "var(--gold)", background: "var(--off-black)",
              position: "relative", zIndex: 1,
            }}>{s.num}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(10px, 1.8vw, 12px)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>{s.title}</div>
            <div style={{ fontSize: "clamp(10px, 1.8vw, 12px)", color: "var(--muted)", lineHeight: 1.6 }}>{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}