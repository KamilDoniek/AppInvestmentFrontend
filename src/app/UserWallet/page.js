export const dynamic = "force-dynamic";
import HeadSection from "@/Components/UserWallet/HeadSection";
import HeadSectionItem from "@/Components/UserWallet/HeadSectionItem";
import TableStock from "@/Components/UserWallet/TableStock";
import TableStockItem from "@/Components/UserWallet/TableStockItem";


export default function UserWallet() {
    return (
        <>
            <HeadSection>
                <HeadSectionItem name="Zainwestowane środki"/>
                <HeadSectionItem name="Zyski"/>
                <HeadSectionItem name="Wartość portfela"/>
            </HeadSection>
            <TableStock>
                <TableStockItem/>
            </TableStock>
        </>
    )
}