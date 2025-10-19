import {cookies} from "next/headers";
import {NextResponse} from "next/server";


export async function POST() {
    cookies().set("token", null, {
        httpOnly: true,
        secure: false,
        sameSite: "Lax",
        maxAge: 0,
        path: "/",
    });

    return NextResponse.json({message: "Wylogowano pomyślnie"})
}