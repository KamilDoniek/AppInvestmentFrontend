"use client";

import {useState} from "react";
import StockBuyList from "@/Components/UserWallet/Modal/StockBuyList";

export default function TableStock({children}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section className="container flex flex-col mx-auto px-4 py-12 bg-white rounded-lg shadow-md">
                <div className="flex flex-row justify-between">
                    <h2 className="text-2xl font-bold mb-10">Twoje akcje</h2>
                    <div className="flex flex-row">
                        <button className="text-blue-600 hover:underline" onClick={() => setOpen(true)}>
                            Dodaj
                        </button>
                        <button

                            className="text-red-600 hover:underline ml-4"
                        >
                            Sprzedaj
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="min-w-full">
                        <thead>
                        <tr className="border-b border-gray-200 text-gray-500 text-sm text-left">
                            <th className="px-4 py-2">Nazwa</th>
                            <th className="px-4 py-2">Udziały</th>
                            <th className="px-4 py-2">Średnia cena</th>
                            <th className="px-4 py-2">Aktualna cena</th>
                            <th className="px-4 py-2">Zysk/Strata</th>
                        </tr>
                        </thead>
                        <tbody>
                        {children}
                        </tbody>
                    </table>
                </div>
            </section>
            <StockBuyList open={open} setopen={setOpen}/>
        </>

    )

}