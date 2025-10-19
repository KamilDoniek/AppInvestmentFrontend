import {cookies} from "next/headers";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return Response.json({message: "brak tokena"}, {status: 401});
    }
    let url = 'http://localhost:8080/api/stocks'

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    if (!res.ok) {
        return Response.json({message: "Błąd podczas pobierania akcji"}, {status: res.status});
    }

    const data = await res.json();
    return Response.json(data);
}