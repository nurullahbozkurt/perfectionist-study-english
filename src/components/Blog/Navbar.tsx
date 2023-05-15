import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NoSSRNavbar from '../NoSSRNavbar';
import MobileNavbar from '../MobileNavbar';

type Props = {}

const Navbar = (props: Props) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div className={`container max-[1680px]:max-w-full mx-auto lg:px-16 ${scroll > 400 ? "py-2 border-b duration-700 shadow-md bg-white" : "py-4 bg-white duration-700"} lg:fixed z-0 lg:z-20`} >
            <div className='lg:flex items-center gap-2 hidden' >
                <Link href="/" className='pr-5' >
                    <Image src="/logoTop.svg" width="66" height="71" alt='logo' className={`object-cover ${scroll > 400 ? "w-[50px] duration-700" : "duration-700"}`} />
                </Link>
                <div className={`w-full flex items-center justify-between ${scroll > 400 ? "text-sm duration-700" : "duration-700"}`} >
                    <NoSSRNavbar />
                    <div className='flex' >
                        <button onClick={() => {
                            window.Calendly.initPopupWidget({
                                url: 'https://calendly.com/yungsten/intro'
                            })
                            const iframe: any = document.querySelector('iframe');
                            iframe.style.overflow = 'hidden';
                            iframe.style.height = '670px';
                        }} className={`bg-primaryText hover:bg-primaryText/70 duration-500 text-white text-sm rounded-[55px] ${scroll > 400 ? "px-6 py-2 duration-700" : "px-8 py-3 duration-700"} flex gap-1 justify-between items-center`} >
                            Schedule a discovery call
                        </button>
                    </div>
                </div>
            </div>
            <MobileNavbar />
        </div>
    )
}

export default Navbar