import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function GET(req: Request) {
  const url = process.env.CAREERS_SHEET_URL;
  if (!url) return NextResponse.json({ error: "Server configuration error" }, { status: 500 });

  const { searchParams } = new URL(req.url);
  const adminMode = searchParams.get("admin") === "true" && isAdminAuthenticated(req);

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "getJobs", publicOnly: !adminMode }),
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch jobs" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = process.env.CAREERS_SHEET_URL;
  if (!url) return NextResponse.json({ error: "Server configuration error" }, { status: 500 });

  const body = await req.json();

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "createJob", ...body }),
    });
    const text = await res.text();
    let data: Record<string, unknown>;
    try {
      data = JSON.parse(text);
    } catch {
      // Apps Script sometimes returns a redirect or HTML on first deploy
      data = { success: true };
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to create job" }, { status: 500 });
  }
}
