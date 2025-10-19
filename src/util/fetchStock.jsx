'use client'
import {QueryClient} from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function fetchStock() {
    let url = '/api/stocks'
    const response = await fetch(url);
    if (!response.ok) {
        const error = new Error("Error with fetching stock");
        error.info = await response.json();
        throw error;
    }
    const data = await response.json();
    return data || [];
}