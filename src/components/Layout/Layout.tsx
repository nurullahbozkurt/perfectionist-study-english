import React, { useRef, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Sidebar from './Sidebar'
import { useApp } from '@/states/app'
import PathNav from './PathNav'
import Link from 'next/link'


type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    const logo = useRef<HTMLDivElement>(null);

    const { data: session, status } = useSession();
    const { isSidebarOpen, setIsSidebarOpen, openNav } = useApp();

    const closeSidebar = () => {
        openNav && openNav()
        setIsSidebarOpen(false)
    }

    console.log("isSidebarOpen", isSidebarOpen)


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
                                <button onClick={() => signOut({ callbackUrl: '/auth/login' })} className="text-xs border hover:bg-primary-800 px-2 rounded font-semibold leading-6 text-gray-100">
                                    Çıkış Yap <span aria-hidden="true">&rarr;</span>
                                </button>
                            </div>
                        </div>)}

                    </div>
                </div>
                <Sidebar />

                <div className={`pt-[64px] pl-[48px] ${isSidebarOpen ? "relative " : ""}`} >
                    {isSidebarOpen && <div onClick={() => closeSidebar()} className={`${isSidebarOpen ? "block bg-black/50 h-screen" : "hidden "} absolute z-10 top-0 bottom-0 right-0 left-0`} ></div>}
                    {props.children}
                </div>

            </div>
        </>
    )
}

export default Layout