import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbykqYJWKtKNmJ9Qemxki3qOVkH2JTJ1huF3qRZi5ZA8DTTiXKsO_Z0ychUnACWEMzez/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), // This now includes phone and source
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}