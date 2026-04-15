import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEET_URL;
    
    if (!GOOGLE_SCRIPT_URL) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }
    
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