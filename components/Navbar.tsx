"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "16px 60px" : "24px 60px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(8,8,8,0.92)" : "linear-gradient(to bottom, rgba(8,8,8,0.95), transparent)",
      backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      transition: "all 0.4s",
    }}>
      <Link href="#" style={{
        fontFamily: "var(--font-ui)", fontWeight: 800, fontSize: 20,
        letterSpacing: "0.12em", color: "var(--white)", textDecoration: "none",
      }}>
        DAV<span style={{ color: "var(--gold)" }}>A</span>RIS
      </Link>

      {/* Desktop Links */}
      <ul className="nav-links-wrap" style={{
        display: "flex", gap: 40, listStyle: "none",
      }}>
        {["services", "about", "portfolio", "contact"].map((id) => (
          <li key={id}>
            <Link href={`#${id}`} style={{
              fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 500,
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--muted)", textDecoration: "none",
            }}>
              {id === "portfolio" ? "Work" : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="#contact" className="nav-cta" style={{
        fontFamily: "var(--font-ui)", fontSize: 11, fontWeight: 600,
        letterSpacing: "0.15em", textTransform: "uppercase",
        color: "var(--black)", background: "var(--gold)",
        padding: "10px 24px", textDecoration: "none",
        transition: "background 0.3s",
      }}>
        Start a Project
      </Link>

      {/* Mobile Toggle */}
      <div
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          display: "none", flexDirection: "column", gap: 5, cursor: "pointer",
        }}
        className="nav-toggle"
      >
        <span style={{ width: 24, height: 1, background: "var(--white)", display: "block" }} />
        <span style={{ width: 24, height: 1, background: "var(--white)", display: "block" }} />
        <span style={{ width: 24, height: 1, background: "var(--white)", display: "block" }} />
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0,
          background: "rgba(8,8,8,0.98)", padding: 32,
          display: "flex", flexDirection: "column", gap: 24,
          zIndex: 999, borderBottom: "1px solid var(--border)",
        }}>
          {["services", "about", "portfolio", "contact"].map((id) => (
            <Link key={id} href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-ui)", fontSize: 14,
                textTransform: "uppercase", letterSpacing: "0.12em",
                color: "var(--white)", textDecoration: "none",
              }}>
              {id === "portfolio" ? "Work" : id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}