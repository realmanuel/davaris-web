    "use client";
    import { useEffect, useState } from "react";
    import { useSearchParams } from "next/navigation";
    import { Suspense } from "react";

    type Testimonial = {
    id: string;
    initials: string;
    name: string;
    role: string;
    text: string;
    rating: number;
    createdAt: string;
    approved: boolean;
    };

    function AdminPanel() {
    const searchParams  = useSearchParams();
    const pw            = searchParams.get("pw") ?? "";

    const [all, setAll]         = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [authed, setAuthed]   = useState(false);
    const [input, setInput]     = useState("");
    const [msg, setMsg]         = useState("");

    const fetchAll = async (password: string) => {
        // We use the PATCH endpoint with a dummy ID just to verify password
        // Instead, fetch via a custom header
        const res = await fetch(`/api/testimonials/all?pw=${password}`);
        if (res.status === 401) { setAuthed(false); return; }
        const data = await res.json();
        setAll(data.testimonials ?? []);
        setAuthed(true);
        setLoading(false);
    };

    const approve = async (id: string) => {
        setMsg("");
        await fetch("/api/testimonials", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password: pw || input }),
        });
        setMsg("✓ Approved");
        fetchAll(pw || input);
    };

    const remove = async (id: string) => {
        if (!confirm("Delete this testimonial?")) return;
        setMsg("");
        await fetch("/api/testimonials", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, password: pw || input }),
        });
        setMsg("✓ Deleted");
        fetchAll(pw || input);
    };

    useEffect(() => {
        if (pw) fetchAll(pw);
        else setLoading(false);
    }, [pw]);

const base: React.CSSProperties = {
background: "#080808", minHeight: "100vh",
color: "#f5f4f0", fontFamily: "sans-serif",
padding: "clamp(20px, 5vw, 40px)",
cursor: "default",
};

    // ── Password gate ──
    if (!authed) return (
        <div style={{ ...base, display: "flex", alignItems: "center", justifyContent: "center", cursor: "default" }}>
        <div style={{ width: "100%", maxWidth: 360, textAlign: "center" }}>
            <h1 style={{ color: "#C8A96E", marginBottom: 8, fontFamily: "Georgia, serif", fontWeight: 300 }}>Admin</h1>
            <p style={{ color: "rgba(245,244,240,0.4)", fontSize: 13, marginBottom: 28 }}>Enter your admin password</p>
            <input
            type="password" placeholder="Password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchAll(input)}
            style={{
                width: "100%", background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#f5f4f0", padding: "14px 16px",
                fontSize: 14, outline: "none", marginBottom: 12,
            }}
            />
            <button
            onClick={() => fetchAll(input)}
            style={{
                width: "100%", background: "#C8A96E", color: "#080808",
                border: "none", padding: "14px", fontSize: 12,
                fontWeight: 600, letterSpacing: "0.15em",
                textTransform: "uppercase", cursor: "pointer",
            }}
            >
            Enter
            </button>
            {msg && <p style={{ color: "#e07070", marginTop: 12, fontSize: 13 }}>{msg}</p>}
        </div>
        </div>
    );

    const pending  = all.filter((t) => !t.approved);
    const approved = all.filter((t) => t.approved);

    const cardStyle: React.CSSProperties = {
        background: "#141414", border: "1px solid rgba(255,255,255,0.07)",
        padding: 20, marginBottom: 12,
    };

    const renderCard = (t: Testimonial) => (
        <div key={t.id} style={cardStyle}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <div style={{
                width: 32, height: 32, borderRadius: "50%",
                background: "linear-gradient(135deg, #C8A96E, #dfc48e)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: "#080808", flexShrink: 0,
                }}>
                {t.initials}
                </div>
                <div>
                <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                <div style={{ fontSize: 11, color: "rgba(245,244,240,0.4)" }}>{t.role}</div>
                </div>
                <div style={{ color: "#C8A96E", fontSize: 12, marginLeft: "auto" }}>
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(245,244,240,0.6)", lineHeight: 1.7, marginBottom: 8 }}>
                "{t.text}"
            </p>
            <div style={{ fontSize: 11, color: "rgba(245,244,240,0.25)" }}>
                {new Date(t.createdAt).toLocaleString("en-GB", { timeZone: "Africa/Lagos" })}
            </div>
            </div>

            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            {!t.approved && (
                <button
                onClick={() => approve(t.id)}
                style={{
                    background: "rgba(200,169,110,0.15)", color: "#C8A96E",
                    border: "1px solid rgba(200,169,110,0.3)",
                    padding: "8px 16px", fontSize: 11, fontWeight: 600,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    cursor: "pointer", transition: "background 0.2s",
                }}
                >
                ✓ Approve
                </button>
            )}
            <button
                onClick={() => remove(t.id)}
                style={{
                background: "rgba(224,112,112,0.1)", color: "#e07070",
                border: "1px solid rgba(224,112,112,0.2)",
                padding: "8px 16px", fontSize: 11, fontWeight: 600,
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", transition: "background 0.2s",
                }}
            >
                ✕ Delete
            </button>
            </div>
        </div>
        </div>
    );

    return (
        <div style={base}>
            <style>
                {`
                    body { cursor: default !important; }
                    * { cursor: inherit; }
                    button, a { cursor: pointer !important; }
                    input { cursor: text !important; }
                `}
            

            </style>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
            <div>
                <h1 style={{ color: "#C8A96E", fontFamily: "Georgia, serif", fontWeight: 300, fontSize: "clamp(24px, 4vw, 32px)" }}>
                Testimonials
                </h1>
                <p style={{ color: "rgba(245,244,240,0.4)", fontSize: 13, marginTop: 4 }}>
                {pending.length} pending · {approved.length} approved
                </p>
            </div>
            {msg && (
                <span style={{ color: "#C8A96E", fontSize: 13, fontWeight: 600 }}>{msg}</span>
            )}
            </div>

            {/* Pending */}
            {pending.length > 0 && (
            <div style={{ marginBottom: 40 }}>
                <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e0a040", marginBottom: 16 }}>
                ⏳ Pending Approval ({pending.length})
                </h2>
                {pending.map(renderCard)}
            </div>
            )}

            {/* Approved */}
            {approved.length > 0 && (
            <div>
                <h2 style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A96E", marginBottom: 16 }}>
                ✓ Approved ({approved.length})
                </h2>
                {approved.map(renderCard)}
            </div>
            )}

            {all.length === 0 && !loading && (
            <p style={{ color: "rgba(245,244,240,0.3)", textAlign: "center", padding: "60px 0", fontSize: 14 }}>
                No testimonials yet.
            </p>
            )}
        </div>
        </div>
    );
    }

    export default function Page() {
    return (
        <Suspense>
        <AdminPanel />
        </Suspense>
    );
    }