"use client";
import { useReveal } from "@/hooks/useReveal";

export default function Contact() {
  useReveal();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    btn.textContent = "Message Sent ✓";
    btn.style.background = "#4a7c59";
    setTimeout(() => {
      btn.textContent = "Send Message →";
      btn.style.background = "";
    }, 3000);
  };

  return (
    <section id="contact" style={{
      padding: "clamp(60px, 12vw, 120px) clamp(16px, 5vw, 60px)", background: "var(--off-black)",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px, 8vw, 100px)",
    }}>
      {/* Info */}
      <div>
        <div className="section-label reveal">Get In Touch</div>
        <h2 className="section-title reveal reveal-delay-1">Let's Build Something<br /><em>Together.</em></h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "var(--muted)", lineHeight: 1.8, margin: "clamp(16px, 4vw, 24px) 0 clamp(24px, 5vw, 48px)" }}>
          Whether you have a clear project brief or just an idea — we're here to help you shape it into something real.
        </p>
        <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column" }}>
          {[
            { icon: "✉", label: "Email Us", value: "hello@davaris.com", href: "mailto:hello@davaris.com" },
            { icon: "💬", label: "WhatsApp", value: "Chat With Us Directly", href: "https://wa.me/1234567890" },
            { icon: "📅", label: "Book a Call", value: "Schedule a Free Consultation", href: "#" },
          ].map((m) => (
            <a key={m.label} href={m.href} className="contact-item"
              style={{ display: "flex", alignItems: "center", gap: "clamp(12px, 3vw, 20px)", padding: "clamp(16px, 3vw, 24px) 0", borderBottom: "1px solid var(--border)", textDecoration: "none", color: "var(--white)", transition: "padding-left 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "12px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <div className="contact-item-icon" style={{ width: "clamp(36px, 6vw, 44px)", height: "clamp(36px, 6vw, 44px)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(14px, 3vw, 18px)", transition: "border-color 0.3s, background 0.3s" }}>
                {m.icon}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 2 }}>{m.label}</div>
                <div style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>{m.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="reveal reveal-delay-2 contact-form" style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 3vw, 20px)" }}>
        <div className="contact-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(12px, 2vw, 16px)" }}>
          {[{ label: "Full Name", type: "text", placeholder: "Your name" }, { label: "Email Address", type: "email", placeholder: "your@email.com" }].map((f) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{ background: "var(--dark)", border: "1px solid var(--border)", color: "var(--white)", padding: "clamp(10px, 2vw, 14px) clamp(12px, 2vw, 16px)", fontFamily: "var(--font-body)", fontSize: "clamp(12px, 2vw, 14px)", outline: "none" }} />
            </div>
          ))}
        </div>

        {[
          { label: "Service Interested In", options: ["Website Development", "Mobile App Development", "UI/UX Design", "Branding", "Social Media Management", "Digital Strategy", "Other"] },
          { label: "Budget Range", options: ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+"] },
        ].map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{s.label}</label>
            <select defaultValue="" style={{ background: "var(--dark)", border: "1px solid var(--border)", color: "var(--white)", padding: "clamp(10px, 2vw, 14px) clamp(12px, 2vw, 16px)", fontFamily: "var(--font-body)", fontSize: "clamp(12px, 2vw, 14px)", outline: "none", WebkitAppearance: "none" }}>
              <option value="" disabled>Select..</option>
              {s.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>Tell us about your project</label>
          <textarea rows={5} placeholder="Describe your project, goals, and timeline..." style={{ background: "var(--dark)", border: "1px solid var(--border)", color: "var(--white)", padding: "clamp(10px, 2vw, 14px) clamp(12px, 2vw, 16px)", fontFamily: "var(--font-body)", fontSize: "clamp(12px, 2vw, 14px)", outline: "none", resize: "none" }} />
        </div>

        <button onClick={handleSubmit} style={{
          fontFamily: "var(--font-ui)", fontSize: "clamp(9px, 1.5vw, 11px)", fontWeight: 600,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--black)", background: "var(--gold)",
          padding: "clamp(12px, 2vw, 18px) clamp(20px, 4vw, 40px)", border: "none", cursor: "pointer",
          alignSelf: "flex-start", transition: "background 0.3s, transform 0.2s",
        }}>
          Send Message →
        </button>
      </div>
    </section>
  );
}


