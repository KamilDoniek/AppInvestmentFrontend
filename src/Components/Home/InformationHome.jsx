export default function informationHome({title, items, background = 'bg-white', backgroundItem = 'bg-white'}) {
    return (
        <section className={`py-12 pb-30 ${background}`}>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold mb-10 text-black">{title}</h2>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`w-full md:w-1/4 p-6 rounded-lg border border-transparent   hover:border-blue-500 transition"
                 shadow ${backgroundItem} flex flex-col items-start text-left hover:shadow-md transition `}
                        >
                            {item.icon && <div className="text-3xl mb-4">{item.icon}</div>}
                            <h3 className="font-semibold text-lg mb-2 text-black">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            {item.list && (
                                <ul className="space-y-2 mt-4">
                                    {item.list.map((listItem, listIndex) => (
                                        <li key={listIndex} className="flex items-start gap-2">
                                            <span className="text-green-600 mt-1">✔</span>
                                            <span>{listItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}