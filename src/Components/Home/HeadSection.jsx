"use client";
import Link from "next/link";
import {motion, useScroll, useTransform} from "motion/react"

export default function HeadSection() {
    const {scrollY} = useScroll();

    const headerOpacity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.6, 0.5, 0.4]);

    return (
        <motion.section style={{opacity: headerOpacity}}
                        className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Nowa <br/> Generacja Inwestowania
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 max-w-md">
                            Zyskaj dostęp do globalnych rynków, zaawansowanych analiz i profesjonalnych narzędzi —
                            wszystko w jednym miejscu
                        </p>
                        <Link href="">
                            <motion.button
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.95}}
                                transition={{type: "spring", stiffness: 200}}
                                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium ">Zacznij
                                już teraz
                            </motion.button>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                    </div>
                </div>
            </div>
        </motion.section>
    );
}