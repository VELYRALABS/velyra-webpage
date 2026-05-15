import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get("careers_session");
  const isAuthenticated =
    !!process.env.ADMIN_PASSWORD &&
    session?.value === process.env.ADMIN_PASSWORD;

  if (pathname === "/careers/admin/login") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/careers/admin", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/careers/admin")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/careers/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/careers/admin", "/careers/admin/:path*"],
};
