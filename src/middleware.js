import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
    const token = await getToken({ req });
    console.log("middleware");
 
    const { pathname } = req.nextUrl;
     
  
 



    if (pathname.startsWith('/admin')) {
        if (token?.user.role !== 'admin') {
            return NextResponse.redirect(new URL('/unauthorized', req.url));
        }
    } else if (pathname.startsWith('/developer')) {
        if (token?.user.role !== 'developer') {
            return NextResponse.redirect(new URL('/unauthorized', req.url));
        }
    }else if (pathname.startsWith('/man')) {
        if (token?.user.role !== 'man') {
            return NextResponse.redirect(new URL('/unauthorized', req.url));
        }
    }


    return NextResponse.next();
}
