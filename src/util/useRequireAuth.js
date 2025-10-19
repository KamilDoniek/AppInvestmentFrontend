'use client'
import {useEffect} from "react";
import {useAuth} from "@/util/AuthContext";
import {useRouter} from "next/navigation";

export function useRequireAuth() {
    const {token, logout} = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (!token) {
            router.replace("/Login");
        }
    }, []);

    return {token, logout};
}