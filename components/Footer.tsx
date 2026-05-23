import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-grid" style={{
        padding: "clamp(40px, 10vw, 60px) clamp(16px, 5vw, 60px)", borderTop: "1px solid var(--border)",
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "clamp(30px, 5vw, 60px)",
      }}>
        <div className="footer-brand">
          <span style={{ fontFamily: "var(--font-ui)", fontWeight: 800, fontSize: "clamp(18px, 3vw, 22px)", letterSpacing: "0.12em", marginBottom: 16, display: "block" }}>
            DAV<span style={{ color: "var(--gold)" }}>A</span>RIS
          </span>
          <p style={{ fontSize: "clamp(11px, 1.8vw, 13px)", color: "var(--muted)", lineHeight: 1.6, maxWidth: 260, marginBottom: 28 }}>
            Building digital futures for ambitious brands. Premium design, development, and strategy — all under one roof.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["in", "IG", "𝕏", "Be"].map((s) => (
              <a key={s} href="#" className="social-icon" style={{
                width: "clamp(30px, 5vw, 36px)", height: "clamp(30px, 5vw, 36px)", border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "clamp(12px, 2vw, 14px)", textDecoration: "none", color: "var(--muted)",
                transition: "border-color 0.3s, color 0.3s, background 0.3s",
              }}>
                  {s}
                
                </a>
            ))}
          </div>
        </div>

        {[
          {
            title: "Services",
            links: ["Website Development", "App Development", "UI/UX Design", "Branding", "Social Media", "Digital Strategy"],
            href: "#services",
          },
          {
            title: "Company",
            links: ["About Davaris", "Our Process", "Portfolio", "Testimonials", "Contact"],
            hrefs: ["#about", "#process", "#portfolio", "#testimonials", "#contact"],
          },
          {
            title: "Contact",
            links: ["hello@davaris.com", "WhatsApp Chat", "Book a Call", "Instagram", "LinkedIn"],
            hrefs: ["mailto:hello@davaris.com", "#", "#", "#", "#"],
          },
        ].map((col) => (
          <div key={col.title} className={`footer-col footer-${col.title.toLowerCase()}`}>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: "clamp(8px, 1.5vw, 10px)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>{col.title}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l, i) => (
                <li key={l}>
                  <Link href={(col.hrefs ? col.hrefs[i] : col.href) ?? "#"} className="footer-link" style={{ fontSize: "clamp(11px, 1.8vw, 13px)", color: "var(--muted)", textDecoration: "none" }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div style={{
        padding: "clamp(16px, 3vw, 24px) clamp(16px, 5vw, 60px)", borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12,
      }} className="footer-bottom">
        <p style={{ fontSize: "clamp(10px, 1.5vw, 12px)", color: "rgba(245,244,240,0.25)" }}>© 2026 Davaris. All rights reserved.</p>
        <div style={{ display: "flex", gap: "clamp(12px, 2vw, 24px)" }} className="footer-bottom-links">
          {["Privacy Policy", "Terms of Service"].map((l) => (
            <Link key={l} href="#" className = "footer-link" style={{ fontSize: "clamp(9px, 1.5vw, 11px)", color: "rgba(245,244,240,0.25)", textDecoration: "none" }}>{l}</Link>
          ))}
        </div>
      </div>
    </>
  );
}