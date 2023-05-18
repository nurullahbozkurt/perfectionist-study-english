import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import React, { useEffect, useRef, useState } from 'react'

import Sidebar from './Sidebar'
import PathNav from './PathNav'
import { useApp } from '@/states/app'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    const logo = useRef<HTMLDivElement>(null);

    const { data: session, status } = useSession();
    const { isSidebarOpen, setIsSidebarOpen, openNav } = useApp();

    console.log("session", session)


    const closeSidebar = () => {
        openNav && openNav()
        setIsSidebarOpen(false)
    }

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.scrollBehavior = 'unset';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.overflow = 'auto';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [isSidebarOpen]);


    return (
        <>
            <div className="body bg-white ">
                <div id='header' className="fixed w-full bg-primary-800 z-30 flex p-2 items-center justify-center h-16 px-10">
                    <div ref={logo} className="logo ml-12 mr-6 transform ease-in-out duration-500 flex-none h-full flex items-center justify-center">
                        <Link href="/" className='text-white text-sm' > Perfectionist</Link>
                    </div>
                    <PathNav />
                    <div className="grow h-full flex items-center justify-center"></div>

                    <div className="flex-none h-full text-center flex items-center justify-center">

                        {!session?.user && (<div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="/auth/login" className="text-sm font-semibold leading-6 text-gray-100">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>)}
                        {session?.user && (<div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <div className='flex items-center gap-2'>
                                <p className="text-sm font-semibold leading-6 text-gray-100 capitalize">
                                    {session?.user?.name}
                                </p>
                                <button onClick={() => signOut({ callbackUrl: '/auth/login' })} className="text-xs border hover:bg-primary-800 px-2 rounded font-semibold leading-6 text-gray-100">
                                    Çıkış Yap <span aria-hidden="true">&rarr;</span>
                                </button>
                            </div>
                        </div>)}

                    </div>
                </div>
                <Sidebar />

                <div className={`pt-[64px] pl-[48px] ${isSidebarOpen ? "relative " : ""} `} >
                    {isSidebarOpen && <div onClick={() => closeSidebar()} className={`${isSidebarOpen ? "block bg-black/50 h-screen" : "hidden "} absolute z-10 top-0 bottom-0 right-0 left-0`} ></div>}
                    {props.children}
                </div>

            </div>
        </>
    )
}

export default Layout