import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer style={{
        padding: 60, borderTop: "1px solid var(--border)",
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60,
      }}>
        <div>
          <span style={{ fontFamily: "var(--font-ui)", fontWeight: 800, fontSize: 22, letterSpacing: "0.12em", marginBottom: 16, display: "block" }}>
            DAV<span style={{ color: "var(--gold)" }}>A</span>RIS
          </span>
          <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, maxWidth: 260, marginBottom: 28 }}>
            Building digital futures for ambitious brands. Premium design, development, and strategy — all under one roof.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {["in", "IG", "𝕏", "Be"].map((s) => (
              <a key={s} href="#" style={{
                width: 36, height: 36, border: "1px solid var(--border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, textDecoration: "none", color: "var(--muted)",
                transition: "border-color 0.3s, color 0.3s",
              }}>{s}</a>
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
          <div key={col.title}>
            <h4 style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>{col.title}</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l, i) => (
                <li key={l}>
                  <Link href={(col.hrefs ? col.hrefs[i] : col.href) ?? "#"} style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div style={{
        padding: "24px 60px", borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <p style={{ fontSize: 12, color: "rgba(245,244,240,0.25)" }}>© 2026 Davaris. All rights reserved.</p>
        <div style={{ display: "flex", gap: 24 }}>
          {["Privacy Policy", "Terms of Service"].map((l) => (
            <Link key={l} href="#" style={{ fontSize: 11, color: "rgba(245,244,240,0.25)", textDecoration: "none" }}>{l}</Link>
          ))}
        </div>
      </div>
    </>
  );
}