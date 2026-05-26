"use client";
import { useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";

type Testimonial = {
  id: string;
  initials: string;
  name: string;
  role: string;
  text: string;
  rating: number;
};

type FormStatus = "idle" | "loading" | "success" | "error";

// ── Single testimonial card ──
const Card = ({ t }: { t: Testimonial }) => (
  <div
    className="testimonials-card"
    style={{
      width: "clamp(260px, 80vw, 400px)",
      flexShrink: 0,
      background: "var(--dark)",
      border: "1px solid var(--border)",
      padding: "clamp(20px, 4vw, 40px)",
      position: "relative",
    }}
  >
    <div style={{
      position: "absolute",
      top: "clamp(16px, 3vw, 40px)",
      right: "clamp(16px, 3vw, 40px)",
      color: "var(--gold)",
      fontSize: "clamp(10px, 1.5vw, 12px)",
      letterSpacing: 2,
    }}>
      {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
    </div>
    <div style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(36px, 8vw, 64px)",
      color: "var(--gold)", opacity: 0.3,
      lineHeight: 0.8, marginBottom: 16,
    }}>"</div>
    <p style={{
      fontSize: "clamp(12px, 1.8vw, 14px)",
      color: "var(--muted)", lineHeight: 1.8,
      marginBottom: "clamp(16px, 3vw, 28px)",
      fontStyle: "italic",
    }}>
      {t.text}
    </p>
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{
        width: "clamp(32px, 6vw, 40px)",
        height: "clamp(32px, 6vw, 40px)",
        borderRadius: "50%",
        background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-ui)",
        fontSize: "clamp(11px, 2vw, 13px)",
        fontWeight: 700, color: "var(--black)", flexShrink: 0,
      }}>
        {t.initials}
      </div>
      <div>
        <div style={{
          fontFamily: "var(--font-ui)",
          fontSize: "clamp(11px, 1.8vw, 13px)",
          fontWeight: 600,
        }}>
          {t.name}
        </div>
        <div style={{ fontSize: "clamp(9px, 1.5vw, 11px)", color: "var(--muted)" }}>
          {t.role}
        </div>
      </div>
    </div>
  </div>
);

// ── Star rating picker ──
const StarPicker = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (n: number) => void;
}) => {
  const [hovered, setHovered] = useState(0);
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          style={{
            fontSize: 22,
            cursor: "pointer",
            color: n <= (hovered || value) ? "var(--gold)" : "var(--border)",
            transition: "color 0.2s",
            userSelect: "none",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Testimonials() {
  useReveal();

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading]           = useState(true);
  const [showForm, setShowForm]         = useState(false);
  const [status, setStatus]             = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg]         = useState("");
  const [charCount, setCharCount]       = useState(0);

  const [form, setForm] = useState({
    name: "", role: "", text: "", rating: 5,
  });

  // Fetch approved testimonials on mount
  useEffect(() => {
    fetch("/api/testimonials")
      .then((r) => r.json())
      .then((d) => {
        setTestimonials(d.testimonials ?? []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const update = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "text") setCharCount((value as string).length);
  };

  const handleSubmit = async () => {
    if (!form.name || !form.role || !form.text) {
      setErrorMsg("Please fill in all fields.");
      return;
    }
    if (form.text.length > 400) {
      setErrorMsg("Message must be under 400 characters.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", role: "", text: "", rating: 5 });
      setCharCount(0);
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "var(--black)",
    border: "1px solid var(--border)",
    color: "var(--white)",
    padding: "12px 16px",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    outline: "none",
    width: "100%",
    transition: "border-color 0.3s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-ui)",
    fontSize: 10, fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 6,
    display: "block",
  };

  // Duplicate for seamless scroll loop
  // const displayList = testimonials.length > 0
  //   ? [...testimonials, ...testimonials]
  //   : [];

  // Only duplicate if there are enough cards to need looping
const shouldLoop = testimonials.length >= 3;
const displayList = testimonials.length > 0
  ? shouldLoop
    ? [...testimonials, ...testimonials]
    : testimonials
  : [];

  return (
    <section
      id="testimonials"
      style={{
        padding: "clamp(60px, 12vw, 120px) 0",
        background: "var(--off-black)",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <div
        className="testimonials-header"
        style={{
          marginBottom: "clamp(32px, 8vw, 72px)",
          paddingLeft: "clamp(16px, 5vw, 60px)",
          paddingRight: "clamp(16px, 5vw, 60px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <div className="section-label reveal">Client Voices</div>
          <h2 className="section-title reveal reveal-delay-1">
            Trusted by Brands That<br /><em>Mean Business.</em>
          </h2>
        </div>

        {/* Leave a review button */}
        <button
          onClick={() => { setShowForm(!showForm); setStatus("idle"); setErrorMsg(""); }}
          className="reveal reveal-delay-2"
          style={{
            fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: showForm ? "var(--black)" : "var(--gold)",
            background: showForm ? "var(--gold)" : "transparent",
            border: "1px solid var(--gold)",
            padding: "12px 24px", cursor: "pointer",
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => {
            if (!showForm) {
              e.currentTarget.style.background = "rgba(200,169,110,0.1)";
            }
          }}
          onMouseLeave={(e) => {
            if (!showForm) {
              e.currentTarget.style.background = "transparent";
            }
          }}
        >
          {showForm ? "✕ Close" : "+ Leave a Review"}
        </button>
      </div>

      {/* ── Submission Form ── */}
      {showForm && (
        <div
          style={{
            margin: "0 clamp(16px, 5vw, 60px) clamp(40px, 6vw, 60px)",
            padding: "clamp(24px, 4vw, 40px)",
            border: "1px solid var(--border)",
            background: "var(--dark)",
          }}
        >
          {status === "success" ? (
            // Success state
            <div style={{ textAlign: "center", padding: "clamp(24px, 4vw, 40px) 0" }}>
              <div style={{
                width: 56, height: 56, borderRadius: "50%",
                border: "1px solid var(--gold)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: 22, color: "var(--gold)",
              }}>✓</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(22px, 4vw, 28px)",
                fontWeight: 300, marginBottom: 12,
              }}>
                Thank you!
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 24px" }}>
                Your review has been submitted and is pending approval. It will appear here once approved.
              </p>
              <button
                onClick={() => { setStatus("idle"); setShowForm(false); }}
                style={{
                  fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "var(--black)", background: "var(--gold)",
                  padding: "12px 28px", border: "none", cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          ) : (
            // Form fields
            <>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 300, marginBottom: 28,
              }}>
                Share Your <em style={{ color: "var(--gold)", fontStyle: "italic" }}>Experience</em>
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input
                    type="text" placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Your Role *</label>
                  <input
                    type="text" placeholder="e.g. CEO, Acme Corp"
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Your Rating *</label>
                <StarPicker value={form.rating} onChange={(n) => update("rating", n)} />
              </div>

              <div style={{ marginBottom: 8 }}>
                <label style={labelStyle}>
                  Your Review *
                  <span style={{ float: "right", color: charCount > 380 ? "#e07070" : "var(--muted)" }}>
                    {charCount}/400
                  </span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your experience working with Davaris..."
                  value={form.text}
                  onChange={(e) => update("text", e.target.value)}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {errorMsg && (
                <p style={{ fontSize: 13, color: "#e07070", marginBottom: 16 }}>⚠ {errorMsg}</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "loading"}
                style={{
                  fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--black)",
                  background: status === "loading" ? "rgba(200,169,110,0.5)" : "var(--gold)",
                  padding: "14px 32px", border: "none",
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  transition: "background 0.3s",
                }}
              >
                {status === "loading" ? "Submitting..." : "Submit Review →"}
              </button>
            </>
          )}
        </div>
      )}

{/* ── Scrolling Cards ── */}
{loading ? (
  <div style={{
    textAlign: "center", padding: "60px 0",
    color: "var(--muted)", fontFamily: "var(--font-ui)",
    fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
  }}>
    Loading reviews...
  </div>
) : displayList.length === 0 ? (
  <div style={{
    textAlign: "center",
    padding: "60px clamp(16px, 5vw, 60px)",
    color: "var(--muted)",
  }}>
    <p style={{
      fontFamily: "var(--font-display)",
      fontSize: "clamp(20px, 3vw, 28px)",
      fontWeight: 300, marginBottom: 12,
    }}>
      No reviews yet.
    </p>
    <p style={{ fontSize: 14 }}>Be the first to share your experience.</p>
  </div>
) : (
  <div style={{
    // Outer wrapper — hides overflow and allows touch scroll on mobile
    overflowX: "auto",
    overflowY: "hidden",
    WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
    // Hide scrollbar visually but keep it functional
    scrollbarWidth: "none" as React.CSSProperties["scrollbarWidth"],
    msOverflowStyle: "none" as React.CSSProperties["msOverflowStyle"],
    marginTop: "clamp(24px, 5vw, 48px)",
    cursor: "grab",
  }}
    // Hide webkit scrollbar via ref trick — we handle with CSS below
    ref={(el) => {
      if (el) {
        el.style.cssText += "; scrollbar-width: none; -ms-overflow-style: none;";
      }
    }}
  >
    <style>{`
      .testimonials-scroll-inner::-webkit-scrollbar { display: none; }
      @keyframes testimonial-scroll {
        from { transform: translateX(0); }
        to   { transform: translateX(-50%); }
      }
      @media (hover: hover) {
        .testimonials-scroll-inner { overflow-x: hidden !important; }
        .testimonials-track-inner  { animation: testimonial-scroll 30s linear infinite; }
        .testimonials-track-inner:hover { animation-play-state: paused; }
      }
      @media (hover: none) {
        .testimonials-scroll-inner { overflow-x: auto !important; scroll-snap-type: x mandatory; }
        .testimonials-card         { scroll-snap-align: start; }
        .testimonials-track-inner  { animation: none !important; }
      }
    `}</style>

    <div
      className="testimonials-scroll-inner"
      style={{
        overflow: "hidden",
        paddingLeft: "clamp(16px, 5vw, 60px)",
        paddingRight: "clamp(16px, 5vw, 60px)",
        paddingBottom: 8,
      }}
    >
      <div
        className="testimonials-track-inner"
        style={{
          display: "flex",
          gap: "clamp(14px, 3vw, 24px)",
          width: "max-content",
        }}
      >
        {displayList.map((t, i) => (
          <Card key={`${t.id}-${i}`} t={t} />
        ))}
      </div>
    </div>
  </div>
)}
    </section>
  );
}