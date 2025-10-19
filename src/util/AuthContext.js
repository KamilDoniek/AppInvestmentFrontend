'use client'
import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {getAuthToken, getTokenDuration} from "@/util/auth";

const AuthContext = createContext();

export function AuthProvider({children}) {
    const router = useRouter();
    const [token, setToken] = useState();

    const autoLogout = useCallback(async () => {
        const storedToken = await getAuthToken();
        const duration = await getTokenDuration();
        if (!storedToken) return null;
        if (duration <= 0) {
            logout()
        }
        const timer = setTimeout(() => {
            logout();
        }, duration * 1000);

        return () => clearTimeout(timer)
    }, []);

    useEffect(() => {
        autoLogout();
    }, [autoLogout]);

    const login = async (email, password) => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        });
        if (!res.ok) {
            if (res.status === 401) throw new Error("Nieprawidłowy email lub hasło");
            throw new Error("Błąd logowania");
        }
        setToken(await getAuthToken());
        router.push("/UserWallet");


    }

    const register = async (email, password, name, surname) => {
        try {
            const res = await fetch("http://localhost:8080/api/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email, password, name, surname})
            })
            const data = await res.json();

            if (!res.ok) {

                if (data?.error) throw new Error(data.error);

                throw new Error("Błąd rejestracji (kod " + res.status + ")");

            }
            await login(email, password)
        } catch (err) {
            throw new Error(err.message || "bląd polaczenia z serwerem")
        }
    }
    const logout = async () => {
        await fetch("/api/auth/logout", {method: "POST", credentials: "include"})
        setToken(null);
        router.push("/Login");
    };

    const value = {
        login,
        register,
        logout,
        token
    };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext);
}