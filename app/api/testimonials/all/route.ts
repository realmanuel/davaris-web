    import { NextRequest, NextResponse } from "next/server";
    import { redis } from "@/lib/redis";
    import { Testimonial } from "../route";

    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "davaris2026";

    export async function GET(req: NextRequest) {
    const pw = req.nextUrl.searchParams.get("pw");

    if (pw !== ADMIN_PASSWORD) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const all = await redis.get<Testimonial[]>("testimonials") ?? [];
    return NextResponse.json({ testimonials: all });
    }