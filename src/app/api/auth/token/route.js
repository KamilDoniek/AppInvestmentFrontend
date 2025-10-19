'use server'
import {cookies} from "next/headers";
import {NextResponse} from "next/server";

function decodeJwt(token) {
    try {
        return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
        return null;
    }
}

export async function GET() {
    const res = await cookies();
    if (!res) return NextResponse.json({token: null}, {status: 401});
    const token = res.get("token")?.value;

    const payload = decodeJwt(token);

    const now = Math.floor(Date.now() / 1000);

    const duration = payload?.exp ? payload.exp - now : null;
    console.log(token);
    console.log("Now:", now);
    console.log("Exp:", payload?.exp);
    console.log("Duration:", duration);
    return NextResponse.json({token, duration});
}


export async function setToken(data) {
    const cookieStore = await cookies(); // 👈 musi być await

    cookieStore.set("token", data, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 60,
        path: "/",
    });
}
