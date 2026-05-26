"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = ["services", "about", "portfolio", "testimonials", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current ?? "");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = [
    { id: "services", label: "Services" },
    { id: "about",    label: "About"    },
    { id: "portfolio",label: "Work"     },
    { id: "contact",  label: "Contact"  },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "16px 60px" : "24px 60px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled
          ? "rgba(8,8,8,0.92)"
          : "linear-gradient(to bottom, rgba(8,8,8,0.95), transparent)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        transition: "all 0.4s",
      }}>

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          style={{
            fontFamily: "var(--font-ui)", fontWeight: 800, fontSize: 20,
            letterSpacing: "0.12em", color: "var(--white)", textDecoration: "none",
            cursor: "pointer",
          }}
        >
          DAV<span style={{ color: "var(--gold)" }}>A</span>RIS.<span style={{ color: "var(--gold)" }}>IO</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links-wrap" style={{ display: "flex", gap: 40, listStyle: "none" }}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                href={`#${id}`}
                style={{
                  fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: activeSection === id ? "var(--gold)" : "var(--muted)",
                  textDecoration: "none", cursor: "pointer",
                  transition: "color 0.3s",
                  borderBottom: activeSection === id ? "1px solid var(--gold)" : "1px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          className="nav-cta"
          style={{
            fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "var(--black)", background: "var(--gold)",
            padding: "10px 24px", textDecoration: "none",
            transition: "background 0.3s", cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-light)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
        >
          Start a Project
        </a>

        {/* Mobile Toggle */}
        <div
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-toggle"
          style={{ flexDirection: "column", gap: 5, cursor: "pointer" }}
        >
          <span style={{
            width: 24, height: 1, display: "block",
            background: "var(--white)",
            transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            transition: "transform 0.3s",
          }} />
          <span style={{
            width: 24, height: 1, display: "block",
            background: "var(--white)",
            opacity: mobileOpen ? 0 : 1,
            transition: "opacity 0.3s",
          }} />
          <span style={{
            width: 24, height: 1, display: "block",
            background: "var(--white)",
            transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            transition: "transform 0.3s",
          }} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div style={{
        position: "fixed", top: 64, left: 0, right: 0,
        background: "rgba(8,8,8,0.98)",
        padding: mobileOpen ? "32px" : "0 32px",
        display: "flex", flexDirection: "column", gap: 24,
        zIndex: 998,
        maxHeight: mobileOpen ? "100vh" : "0",
        overflow: "hidden",
        borderBottom: mobileOpen ? "1px solid var(--border)" : "none",
        transition: "max-height 0.4s ease, padding 0.4s ease",
      }}>
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => { e.preventDefault(); scrollTo(id); }}
            style={{
              fontFamily: "var(--font-ui)", fontSize: 14,
              textTransform: "uppercase", letterSpacing: "0.12em",
              color: activeSection === id ? "var(--gold)" : "var(--white)",
              textDecoration: "none", cursor: "pointer",
              transition: "color 0.3s",
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
          style={{
            fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600,
            letterSpacing: "0.15em", textTransform: "uppercase",
            color: "var(--black)", background: "var(--gold)",
            padding: "10px 24px", textDecoration: "none",
            display: "inline-block", width: "fit-content",
            transition: "background 0.3s",
          }}
        >
          Start a Project
        </a>
      </div>
    </>
  );
}