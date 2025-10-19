import InformationHome from "./InformationHome.jsx";

export default function ClientFeatures() {
    const clientsItems = [
        {
            title: "Smart Portfolio Management ",
            description: "Advanced tools for portfolio optimization and risk management",
            icon: "#"
        },
        {
            title: "AI-Powered Insights",
            description: "Machine learning algorithms to predict market trends",
            icon: "#",
            highlighted: true
        },
        {title: "Bank-Grade Security", description: "Enterprise-level security to protect your investments", icon: "#"},
    ];
    return (
        <InformationHome title="Nasi Klienci" items={clientsItems} backgroundItem="bg-gray-50"/>

    )
}