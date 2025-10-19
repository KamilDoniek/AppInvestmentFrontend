import InformationHome from "@/Components/Home/InformationHome";

export default function OfferHome() {
    const products = [
        {title: "Stocks", description: "Trade shares of publicly listed companies", icon: "#"},
        {title: "ETFs", description: "Diversified investment funds tracking indices", icon: "#"},
        {title: "Crypto", description: "Digital currency investment options", icon: "#"},
    ];
    return (
        <InformationHome title="Oferta" items={products} backgroundItem="bg-gray-50"/>

    )
}