// export { default } from "next-auth/middleware";
import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    if(
      req.nextUrl.pathname.startsWith('/admin') && 
      !req.nextauth.token
    ) 
      return NextResponse.rewrite(
        new URL('/auth/login?message=Bạn không có quyền truy cập!', req.url),
    )
    if(
      req.nextUrl.pathname.startsWith('/profile') && 
      !req.nextauth.token
    ) 
      return NextResponse.rewrite(
        new URL('/auth/login?message=Bạn không có quyền truy cập!', req.url),
    )
    if (
      req.nextUrl.pathname.startsWith('/admin') &&
      req.nextauth.token?.role !== 'ROLE_ADMIN'
    )
      return NextResponse.rewrite(
        new URL('/auth/login?message=Bạn không có quyền truy cập!', req.url),
      )
    if (
      req.nextUrl.pathname.startsWith('/profile') &&
      req.nextauth.token?.role !== 'ROLE_USER'
    )
      return NextResponse.rewrite(
        new URL('/auth/login?message=Bạn không có quyền truy cập!', req.url),
    )
    
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = {
  matcher: ['/admin/:path*', '/profile/:path*'],
}
