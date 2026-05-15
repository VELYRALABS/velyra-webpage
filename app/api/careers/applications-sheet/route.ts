import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export async function GET(req: Request) {
  if (!isAdminAuthenticated(req)) {
    return NextResponse.redirect(new URL("/careers/admin/login", req.url));
  }

  const sheetUrl = process.env.LINK_TO_SHEET;
  if (!sheetUrl) {
    return NextResponse.json({ error: "Applications sheet link is not configured" }, { status: 500 });
  }

  return NextResponse.redirect(sheetUrl);
}
