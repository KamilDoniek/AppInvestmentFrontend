'use server'
import {NextResponse} from "next/server";
import {setToken} from "@/app/api/auth/token/route";


export async function POST(req) {
    const {email, password} = await req.json();

    const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password}),
    });

    if (!res.ok) {
        return NextResponse.json({message: "Błędne dane logowania"}, {status: 401});
    }

    const data = await res.json();

    await setToken(data.token);

    return NextResponse.json({message: "Zalogowano pomyślnie"});
}