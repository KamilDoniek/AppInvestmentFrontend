export async function getTokenDuration() {
    const res = await fetch("/api/auth/token", {
        method: "GET",
        credentials: "include",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.duration;
}


export async function getAuthToken() {
    const res = await fetch("/api/auth/token", {
        method: "GET",
        credentials: "include",
    });
    if (!res.ok) return null;
    const data = await res.json();

    return data.token
}



