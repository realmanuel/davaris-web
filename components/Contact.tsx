"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { SITE_CONFIG } from "@/lib/config";

type FormState = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  useReveal();

  const [form, setForm] = useState<FormState>({
    name: "", email: "", service: "", budget: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in your name, email and message.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", service: "", budget: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${encodeURIComponent(
    SITE_CONFIG.whatsapp.message
  )}`;

  const contactMethods = [
    { icon: "✉",  label: "Email Us",    value: "hello@davaris.io",              href: `mailto:${SITE_CONFIG.email}`,   external: false, disabled:false, },
    { icon: "💬", label: "WhatsApp",    value: "Chat With Us Directly",         href: whatsappUrl,                     external: true, disabled:false, },
    { icon: "📅", label: "Book a Call", value: "Schedule a Free Consultation",  href: SITE_CONFIG.calendly,            external: true, disabled:false,  },
  ];

  // Reused styles 
  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-ui)",
    fontSize: "clamp(8px, 1.5vw, 10px)",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--muted)",
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--dark)",
    border: "1px solid var(--border)",
    color: "var(--white)",
    padding: "clamp(10px, 2vw, 14px) clamp(12px, 2vw, 16px)",
    fontFamily: "var(--font-body)",
    fontSize: "clamp(12px, 2vw, 14px)",
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "clamp(60px, 12vw, 120px) clamp(16px, 5vw, 60px)",
        background: "var(--off-black)",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "clamp(40px, 8vw, 100px)",
      }}
    >
      {/* ── Info Side ── */}
      <div>
        <div className="section-label reveal">Get In Touch</div>
        <h2 className="section-title reveal reveal-delay-1">
          Let's Build Something<br />
          <em>Together.</em>
        </h2>
        <p
          className="reveal reveal-delay-2"
          style={{
            fontSize: "clamp(13px, 2vw, 15px)",
            color: "var(--muted)",
            lineHeight: 1.8,
            margin: "clamp(16px, 4vw, 24px) 0 clamp(24px, 5vw, 48px)",
          }}
        >
          Whether you have a clear project brief or just an idea - we're here
          to help you shape it into something real.
        </p>

        <div className="reveal reveal-delay-3" style={{ display: "flex", flexDirection: "column" }}>
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.disabled ? undefined: m.href}
              target={m.external ? "_blank" : undefined}
              rel={m.external ? "noopener noreferrer" : undefined}
              className="contact-item"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(12px, 3vw, 20px)",
                padding: "clamp(16px, 3vw, 24px) 0",
                borderBottom: "1px solid var(--border)",
                textDecoration: "none",
                color: "var(--white)",
                transition: "padding-left 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "12px")}
              onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
            >
              <div
                className="contact-item-icon"
                style={{
                  width: "clamp(36px, 6vw, 44px)",
                  height: "clamp(36px, 6vw, 44px)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(14px, 3vw, 18px)",
                  transition: "border-color 0.3s, background 0.3s",
                  flexShrink: 0,
                }}
              >
                {m.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ui)",
                    fontSize: "clamp(8px, 1.5vw, 10px)",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 2,
                  }}
                >
                  {m.label}
                </div>
                <div style={{ fontSize: "clamp(12px, 2vw, 14px)" }}>{m.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ── Form Side ── */}
      <div
        className="reveal reveal-delay-2 contact-form"
        style={{ display: "flex", flexDirection: "column", gap: "clamp(12px, 3vw, 20px)" }}
      >
        {/* ── Success Screen ── */}
        {status === "success" ? (
          <div
            style={{
              padding: "clamp(28px, 6vw, 48px)",
              border: "1px solid rgba(200,169,110,0.3)",
              background: "rgba(200,169,110,0.05)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                width: 56, height: 56,
                border: "1px solid var(--gold)",
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22, color: "var(--gold)",
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(22px, 4vw, 32px)",
                fontWeight: 300,
              }}
            >
              Message Sent!
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.7, maxWidth: 340 }}>
              Thanks for reaching out. We'll get back to you within 24–48 hours.
              Check your inbox for a confirmation email.
            </p>
            <button
              onClick={() => setStatus("idle")}
              style={{
                marginTop: 8,
                fontFamily: "var(--font-ui)",
                fontSize: "clamp(9px, 1.5vw, 11px)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold)",
                background: "none",
                border: "1px solid var(--gold)",
                padding: "clamp(10px, 2vw, 14px) clamp(20px, 4vw, 32px)",
                cursor: "pointer",
                transition: "background 0.3s, color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--gold)";
                e.currentTarget.style.color = "var(--black)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.color = "var(--gold)";
              }}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            {/* ── Name + Email Row ── */}
            <div
              className="contact-form-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(12px, 2vw, 16px)",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Full Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={update("name")}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={update("email")}
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>
            </div>

            {/* ── Selects ── */}
            {[
              {
                label: "Service Interested In",
                field: "service" as const,
                options: ["Website Development", "Mobile App Development", "UI/UX Design", "Branding", "Social Media Management", "Digital Strategy", "Other"],
              },
              {
                label: "Budget Range",
                field: "budget" as const,
                options: ["Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+"],
              },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={labelStyle}>{s.label}</label>
                <select
                  value={form[s.field]}
                  onChange={update(s.field)}
                  style={{ ...inputStyle, WebkitAppearance: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                >
                  <option value="">Select...</option>
                  {s.options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
            ))}

            {/* ── Message ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <label style={labelStyle}>Tell us about your project *</label>
              <textarea
                rows={5}
                placeholder="Describe your project, goals, and timeline..."
                value={form.message}
                onChange={update("message")}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
              />
            </div>

            {/* ── Error Message ── */}
            {errorMsg && (
              <p style={{ fontSize: "clamp(11px, 2vw, 13px)", color: "#e07070", marginTop: -4 }}>
                ⚠ {errorMsg}
              </p>
            )}

            {/* ── Submit Button ── */}
            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "clamp(9px, 1.5vw, 11px)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--black)",
                background: status === "loading" ? "rgba(200,169,110,0.5)" : "var(--gold)",
                padding: "clamp(12px, 2vw, 18px) clamp(20px, 4vw, 40px)",
                border: "none",
                cursor: status === "loading" ? "not-allowed" : "pointer",
                alignSelf: "flex-start",
                transition: "background 0.3s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                if (status !== "loading") {
                  e.currentTarget.style.background = "var(--gold-light)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = status === "loading"
                  ? "rgba(200,169,110,0.5)"
                  : "var(--gold)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>
          </>
        )}
      </div>
    </section>
  );
}