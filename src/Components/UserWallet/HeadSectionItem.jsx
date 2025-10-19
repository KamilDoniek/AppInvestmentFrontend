import Image from "next/image";

export default function HeadSectionItem({name, iconPath = "/logo.svg", value = "0", progress = "0"}) {
    return (
        <div className="flex flex-col w-full sm:w-1/2 md:w-1/4 justify-around bg-white rounded-xl shadow-md p-4 pl-8">
            <div className="flex flex-row items-center justify-between">
                <p className="text-gray-500 text-base pb-4">
                    {name}
                </p>
                <Image
                    src={iconPath}
                    width={50}
                    height={50}
                    alt="default photo"
                />
            </div>
            <p className="text-2xl font-bold text-black">
                {value}
            </p>
            <p className="text-green-500 text-sm pt-2">
                {progress}
            </p>
        </div>
    )
}