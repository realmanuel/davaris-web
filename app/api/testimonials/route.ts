    import { NextRequest, NextResponse } from "next/server";
    import { redis } from "@/lib/redis";

    export type Testimonial = {
    id:        string;
    initials:  string;
    name:      string;
    role:      string;
    text:      string;
    rating:    number;
    createdAt: string;
    approved:  boolean;
    };

    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "davaris2026";
    const KV_KEY         = "testimonials";

    // ── GET — fetch all approved testimonials ──
    export async function GET() {
    try {
        const all = await redis.get<Testimonial[]>(KV_KEY) ?? [];
        const approved = all.filter((t) => t.approved);
        return NextResponse.json({ testimonials: approved });
    } catch {
        return NextResponse.json({ testimonials: [] });
    }
    }

    // ── POST — submit a new testimonial ──
    export async function POST(req: NextRequest) {
    try {
        const { name, role, text, rating } = await req.json();

        if (!name || !role || !text) {
        return NextResponse.json(
            { error: "Name, role and message are required." },
            { status: 400 }
        );
        }

        if (text.length > 400) {
        return NextResponse.json(
            { error: "Message must be under 400 characters." },
            { status: 400 }
        );
        }

        const initials = name
        .split(" ")
        .map((w: string) => w[0]?.toUpperCase() ?? "")
        .slice(0, 2)
        .join("");

        const newEntry: Testimonial = {
        id:        `t_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        initials,
        name:      name.trim(),
        role:      role.trim(),
        text:      text.trim(),
        rating:    Math.min(5, Math.max(1, Number(rating) || 5)),
        createdAt: new Date().toISOString(),
        approved:  false,
        };//Change the approved to true if you do not want to approve

        const existing = await redis.get<Testimonial[]>(KV_KEY) ?? [];
        await redis.set(KV_KEY, [...existing, newEntry]);

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
        { error: "Failed to save testimonial." },
        { status: 500 }
        );
    }
    }

    // ── DELETE — admin removes a testimonial ──
    export async function DELETE(req: NextRequest) {
    try {
        const { id, password } = await req.json();

        if (password !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
        }

        const existing = await redis.get<Testimonial[]>(KV_KEY) ?? [];
        await redis.set(KV_KEY, existing.filter((t) => t.id !== id));

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
        { error: "Failed to delete testimonial." },
        { status: 500 }
        );
    }
    }

    // ── PATCH — admin approves a testimonial ──
    export async function PATCH(req: NextRequest) {
    try {
        const { id, password } = await req.json();

        if (password !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
        }

        const existing = await redis.get<Testimonial[]>(KV_KEY) ?? [];
        await redis.set(
        KV_KEY,
        existing.map((t) => (t.id === id ? { ...t, approved: true } : t))
        );

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
        { error: "Failed to approve testimonial." },
        { status: 500 }
        );
    }
    }