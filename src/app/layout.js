import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import {AuthProvider} from "@/util/AuthContext";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/util/fetchStock";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});


export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <NavBar/>
                {children}
                <Footer/>
            </QueryClientProvider>
        </AuthProvider>
        </body>
        </html>
    );
}
