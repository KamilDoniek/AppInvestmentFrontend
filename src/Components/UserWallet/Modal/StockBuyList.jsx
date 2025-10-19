import Modal from "@/Components/UserWallet/Modal/Modal";
import {useMemo, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {fetchStock} from "@/util/fetchStock";
import StockListItem from "@/Components/UserWallet/Modal/StockListItem";
import {AnimatePresence, motion} from "framer-motion";

export default function StockBuyList({open, setopen}) {

    const [inputValue, setInputValue] = useState("")
    const {data = [], error, isError, isLoading} = useQuery({
        queryKey: ['stock'],
        queryFn: fetchStock
    })

    const filtered = useMemo(() => {
        if (!inputValue) return data.slice(0, 5);
        const lower = inputValue.toLowerCase();
        const filteredData = data.filter(
            (stock) => stock.symbol.toLowerCase().includes(lower) ||
                stock.name.toLowerCase().includes(lower)
        )
        return filteredData.slice(0, 5)
    }, [inputValue, data])
    return (
        <AnimatePresence>
            <Modal open={open}>
                <motion.div className="fixed inset-0 bg-[rgba(0,0,0,0.4)] flex justify-center items-center z-50"
                            onClick={() => setopen(false)}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 1.2}}
                >
                    <motion.div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative"
                                initial={{opacity: 0, scale: 0.9, y: 20}}
                                animate={{opacity: 1, scale: 1, y: 0}}
                                exit={{opacity: 0, scale: 0.9, y: 20}}
                                transition={{duration: 1.2, ease: "easeOut"}}
                    >
                        <h3 className="text-lg font-bold mb-4">
                            {"Dodaj akcję"}
                        </h3>
                        <form className="flex flex-col gap-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Symbol akcji"
                                    autoComplete="off"
                                    className="border p-2 rounded w-full"
                                    onChange={(e) => setInputValue(e.target.value)}
                                    value={inputValue}
                                    required
                                />
                            </div>
                            {isLoading ? <p>fetching...</p> : filtered.map((stock) => (
                                <StockListItem stock={stock} buy={1}/>
                            ))}
                        </form>
                    </motion.div>
                </motion.div>
            </Modal>
        </AnimatePresence>

    )
}