export default function TableStockItem({
                                           shortName = "AAPL",
                                           quantities = 0,
                                           avgPrice = 0,
                                           currentPrice = 0,
                                           profit = 0
                                       }) {
    return (
        <tr className="border-b border-gray-200">
            <td className="p-4">{shortName}</td>
            <td className="p-4">{quantities}</td>
            <td className="p-4">{avgPrice} zł</td>
            <td className="p-4">{currentPrice} zł</td>
            <td className={`p-4 font-semibold text-green-500 `}>
                {profit}
            </td>
        </tr>
    )
}