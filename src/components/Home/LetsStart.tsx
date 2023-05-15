import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

type Props = {
    image: string;
    width: any;
    height: any;
    title: string;
    subtitle: string;
    miniTitle1: string;
    miniTitle2: string;
    href: string;
}

const LetsStart = (props: Props) => {
    return (
        <>
            <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 hover:border hover:border-primary-700/50 transition duration-500">
                <h3 className="mb-3 text-2xl font-bold text-primary-700">{props.title}</h3>
                <div className="relative">
                    <Image width={props.width} height={props.height} className="w-full rounded-xl h-full max-h-[250px] object-cover" src={props.image} alt="active-tense" />
                </div>
                <h1 className="mt-4 text-gray-800 text-xl font-bold cursor-pointer">{props.subtitle}</h1>
                <div className="w-full flex flex-col my-4">
                    <div className="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <p>{props.miniTitle1}</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </span>
                        <p>{props.miniTitle2}</p>
                    </div>

                    <Link href={props.href} className="mt-4 text-center text-xl w-full text-white bg-primary-700 hover:bg-primary-800 py-2 rounded-xl shadow-lg">
                        Başla
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LetsStart