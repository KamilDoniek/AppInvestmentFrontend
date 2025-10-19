import {NextResponse} from "next/server";

export default function middleware(request) {
    const token = request.cookies.get("token")?.value;
    const {pathname} = request.nextUrl;

    const protectedRoutes = ["/UserWallet"];
    const authPages = ["/Login", "/Register"];

    if (!token && protectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/Login", request.url));
    }

    if (token && authPages.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/UserWallet", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/UserWallet", "/Login", "/Register"],
};
