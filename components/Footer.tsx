"use client";
import type React from "react";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  const linkStyle: React.CSSProperties = {
    fontSize: "clamp(11px, 1.8vw, 13px)",
    color: "var(--muted)",
    textDecoration: "none",
    transition: "color 0.3s",
    cursor: "pointer",
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceLinks = [
    "Website Development",
    "App Development",
    "UI/UX Design",
    "Branding",
    "Social Media",
    "Digital Strategy",
  ];

  const companyLinks = [
    { label: "About Davaris.io",  id: "about"},
    { label: "Our Process",    id: "process"},
    { label: "Portfolio",      id: "portfolio"},
    { label: "Testimonials",   id: "testimonials"},
    { label: "Contact",        id: "contact"},
  ];

  const contactLinks = [
    { label: "hello@davaris.io", href: `mailto:${SITE_CONFIG.email}`, external: true, disabled:false,},
    { label: "WhatsApp Chat", href: `https://wa.me/${SITE_CONFIG.whatsapp.number}`,  external: true, disabled:false,},
    { label: "Book a Call", href: SITE_CONFIG.calendly, external: true, disabled:true,},
    { label: "Instagram", href: SITE_CONFIG.socials.instagram, external: true, disabled:true,},
    { label: "LinkedIn", href: SITE_CONFIG.socials.linkedin, external: true, disabled:true,},
  ];

  const legal = [
    {label: "Privacy Policy", href: "/privacy-policy"},
    {label: "Terms of Service", href: "/terms-of-service"},
  ]

  const socials = [
    { label: "in", href: SITE_CONFIG.socials.linkedin, disabled:true,},
    { label: "IG", href: SITE_CONFIG.socials.instagram,},
    { label: "𝕏",  href: SITE_CONFIG.socials.twitter, disabled:true,},
    { label: "Be", href: SITE_CONFIG.socials.behance, disabled:true,},
  ];

  return (
    <>
      <footer
        className="footer-grid"
        style={{
          padding: "clamp(40px, 10vw, 60px) clamp(16px, 5vw, 60px)",
          borderTop: "1px solid var(--border)",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "clamp(30px, 5vw, 60px)",
        }}
      >
        {/* ── Brand ── */}
        <div className="footer-brand">
          <span
            style={{
              fontFamily: "var(--font-ui)", fontWeight: 800,
              fontSize: "clamp(18px, 3vw, 22px)", letterSpacing: "0.12em",
              marginBottom: 16, display: "block",
            }}
          >
            DAV<span style={{ color: "var(--gold)" }}>A</span>RIS
          </span>
          <p
            style={{
              fontSize: "clamp(11px, 1.8vw, 13px)", color: "var(--muted)",
              lineHeight: 1.6, maxWidth: 260, marginBottom: 28,
            }}
          >
            Building digital futures for ambitious brands. Premium design,
            development, and strategy - all under one roof.
          </p>

          {/* Socials */}
          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.disabled ?undefined: s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{
                  width: "clamp(30px, 5vw, 36px)",
                  height: "clamp(30px, 5vw, 36px)",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "clamp(12px, 2vw, 14px)",
                  textDecoration: "none", color: "var(--muted)",
                  transition: "border-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold)";
                  e.currentTarget.style.color = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Services Column ── */}
        <div className="footer-col footer-services">
          <h4 style={{
            fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)",
            fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: 20,
          }}>
            Services
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {serviceLinks.map((label) => (
              <li key={label}>
                <a
                  href="#services"
                  onClick={(e) => { e.preventDefault(); scrollTo("services"); }}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Company Column ── */}
        <div className="footer-col footer-company">
          <h4 style={{
            fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)",
            fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: 20,
          }}>
            Company
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {companyLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact Column ── */}
        <div className="footer-col footer-contact">
          <h4 style={{
            fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)",
            fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--gold)", marginBottom: 20,
          }}>
            Contact
          </h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
            {contactLinks.map(({ label, href, external, disabled }) => (
              <li key={label}>
                <a
                  href={disabled ? undefined: href}
                  target={!disabled && external ? "_blank" : undefined}
                  rel={!disabled && external ? "noopener noreferrer" : undefined}
                  style={{
                          ...linkStyle,
                          opacity: disabled ? 0.45 : 1,
                          pointerEvents: disabled ? "none" : "auto",
                          cursor: disabled ? "not-allowed" : "pointer"
                        }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--white)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      {/* ── Footer Bottom ── */}
      <div
        className="footer-bottom"
        style={{
          padding: "clamp(16px, 3vw, 24px) clamp(16px, 5vw, 60px)",
          borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 12,
        }}
      >
        <p style={{ fontSize: "clamp(10px, 1.5vw, 12px)", color: "rgba(245,244,240,0.25)" }}>
          © {new Date().getFullYear()} Davaris. All rights reserved.
        </p>
        <div
          className="footer-bottom-links"
          style={{ display: "flex", gap: "clamp(12px, 2vw, 24px)" }}
        >
          {legal.map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: "clamp(9px, 1.5vw, 11px)",
                color: "rgba(245,244,240,0.25)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,240,0.25)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}