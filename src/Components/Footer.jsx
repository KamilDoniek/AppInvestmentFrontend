export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
                <div>
                    <h4 className="text-white font-bold mb-2">New Investment Generation</h4>
                </div>

                <div>
                    <h5 className="text-white font-semibold mb-2">Inwestycje</h5>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:underline">Akcje</a></li>
                        <li><a href="#" className="hover:underline">Etf-y</a></li>
                        <li><a href="#" className="hover:underline">Krypto</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-semibold mb-2">O nas</h5>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:underline">Firma</a></li>
                        <li><a href="#" className="hover:underline">Kontakt</a></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-semibold mb-2">Dokumentacje</h5>
                    <ul className="text-sm space-y-1">
                        <li><a href="#" className="hover:underline">Regulamin</a></li>
                    </ul>
                </div>
            </div>

            <div
                className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>© 2025 NewInvest. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#"><i className="fab fa-twitter hover:text-white"></i></a>
                    <a href="#"><i className="fab fa-linkedin hover:text-white"></i></a>
                    <a href="#"><i className="fab fa-facebook hover:text-white"></i></a>
                    <a href="#"><i className="fab fa-github hover:text-white"></i></a>
                </div>
            </div>
        </footer>
    )
}