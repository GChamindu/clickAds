import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname

  // Clone the request URL
  const url = request.nextUrl.clone()

  // Admin page protection (in a real app, you would implement proper authentication)
  if (pathname.startsWith("/admin")) {
    // This is a simple example - in a real app, you would check for authentication
    const isAuthenticated = request.cookies.has("admin_authenticated")

    if (!isAuthenticated) {
      url.pathname = "/"
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
