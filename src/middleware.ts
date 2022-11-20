import { NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';

export const middleware = async (request: NextRequest) => {
    const session = await getToken({ req: request, secret: process.env.JWT_SECRET });
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!session) return NextResponse.redirect(new URL('/', request.url));
    }
};