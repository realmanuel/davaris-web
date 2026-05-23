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
      padding: "120px 60px", background: "var(--off-black)",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100,
    }}>
      {/* Info */}
      <div>
        <div className="section-label reveal">Get In Touch</div>
        <h2 className="section-title reveal reveal-delay-1">Let's Build Something<br /><em>Together.</em></h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, margin: "24px 0 48px" }}>
          Whether you have a clear project brief or just an idea — we're here to help you shape it into something real.
        </p>
        <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column" }}>
          {[
            { icon: "✉", label: "Email Us", value: "hello@davaris.com", href: "mailto:hello@davaris.com" },
            { icon: "💬", label: "WhatsApp", value: "Chat With Us Directly", href: "https://wa.me/1234567890" },
            { icon: "📅", label: "Book a Call", value: "Schedule a Free Consultation", href: "#" },
          ].map((m) => (
            <a key={m.label} href={m.href} className="contact-item"
              style={{ display: "flex", alignItems: "center", gap: 20, padding: "24px 0", borderBottom: "1px solid var(--border)", textDecoration: "none", color: "var(--white)", transition: "padding-left 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "12px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <div className="contact-item-icon" style={{ width: 44, height: 44, border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, transition: "border-color 0.3s, background 0.3s" }}>
                {m.icon}
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 2 }}>{m.label}</div>
                <div style={{ fontSize: 14 }}>{m.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="reveal reveal-delay-2 contact-form" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[{ label: "Full Name", type: "text", placeholder: "Your name" }, { label: "Email Address", type: "email", placeholder: "your@email.com" }].map((f) => (
            <div key={f.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} style={{ background: "var(--dark)", border: "1px solid var(--border)", color: "var(--white)", padding: "14px 16px", fontFamily: "var(--font-body)", fontSize: 14, outline: "none" }} />
            </div>
          ))}
        </div>

        {[
          { label: "Service Interested In", options: ["Website Development", "Mobile App Development", "UI/UX Design", "Branding", "Social Media Management", "Digital Strategy", "Other"] },
          { label: "Budget Range", options: ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+"] },
        ].map((s) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>{s.label}</label>
            <select defaultValue="" style={{ background: "var(--dark)", border: "1px solid var(--border)", color: "var(--white)", padding: "14px 16px", fontFamily: "var(--font-body)", fontSize: 14, outline: "none", WebkitAppearance: "none" }}>
              <option value="" disabled>Select...</option>
              {s.options.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        ))}

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <label style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>Tell us about your project</label>
          <textarea rows={5} placeholder="Describe your project, goals, and timeline..." style={{ background: "var(--dark)", border: "1px solid var(--border)", color: "var(--white)", padding: "14px 16px", fontFamily: "var(--font-body)", fontSize: 14, outline: "none", resize: "none" }} />
        </div>

        <button onClick={handleSubmit} style={{
          fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--black)", background: "var(--gold)",
          padding: "18px 40px", border: "none", cursor: "pointer",
          alignSelf: "flex-start", transition: "background 0.3s, transform 0.2s",
        }}>
          Send Message →
        </button>
      </div>
    </section>
  );
}


