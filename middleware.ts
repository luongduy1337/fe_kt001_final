import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req){
        if(req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'ROLE_ADMIN'){
            return NextResponse.rewrite(new URL("/auth/login?message=You are not allowed to access"))
        }
    },
    {
        callbacks : {
            authorized : ({token}) => !!token,
        }
    }
)

export const config = {matcher : ["/admin"]}

