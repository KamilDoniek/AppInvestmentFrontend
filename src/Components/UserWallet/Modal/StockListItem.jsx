export default function StockListItem({stock, classes, buy}) {
    return (
        <li
            key={stock.symbol}
            className="flex justify-between items-center py-3 hover:bg-gray-50 transition"
        >
            <div>
                <p className="font-semibold">{stock.symbol}</p>
                <p className="text-sm text-gray-500">{stock.name}</p>
            </div>
            <button
                className={`${buy ? "bg-blue-600" : "bg-red-600"} text-white px-3 py-1 rounded-lg`}
            >
                {buy ? "Kup" : "Sell"}
            </button>
        </li>
    )
}