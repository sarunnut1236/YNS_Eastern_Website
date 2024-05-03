// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL("/camp/asa16", request.url)); // Pass control to the next Middleware or route handler

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        "/",
        "/camp/",
    ],
};
