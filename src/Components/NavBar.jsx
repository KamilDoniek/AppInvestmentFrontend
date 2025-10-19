'use client'
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
    // const {token,logout} = useRequireAuth()
    return (

        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <Link href="" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="Logo Icon" width="43" height="24"/>
                <span className="text-xl font-bold text-blue-600">NewInvest</span>
            </Link>

            <nav className="hidden md:flex">
                <ul className="flex gap-6 text-sm text-gray-700">
                    <li>
                        <Link href="/products" className="hover:text-blue-600">Produkty</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-600">O nas</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-600">Kontakt</Link>
                    </li>
                </ul>
            </nav>

            <div className="flex items-center gap-4">
                {
                    // token ? <button type="submit" onClick={logout} className="text-red-600">Logout</button> :
                    <>
                        <Link href="" className="text-blue-600 hover:text-blue-900">Logowanie</Link>
                        <Link href=""
                              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition">
                            Zacznij już teraz
                        </Link>
                    </>
                }
            </div>
        </nav>
    )
}