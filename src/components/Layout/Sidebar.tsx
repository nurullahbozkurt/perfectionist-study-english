import Link from 'next/link';
import React, { useState } from 'react'
import { SiBloglovin } from 'react-icons/si'
import { FaSignOutAlt } from 'react-icons/fa'
import { FaUserTie, FaUsers } from 'react-icons/fa'
import { useSession, signOut } from 'next-auth/react'
import { IoLogoWechat, IoDocumentsSharp } from 'react-icons/io5';
import { AiFillAlipayCircle, AiFillLayout, AiFillEdit, AiFillAudio } from 'react-icons/ai';


import MenuModal from './MenuModal';
import { useApp } from '@/states/app';


type Props = {}

const Sidebar = (props: Props) => {
    const { data: session, status } = useSession();
    const { sidebarRef, maxSidebarRef, maxToolbarRef, miniSidebarRef, openNav } = useApp();

    const [showGrammers, setShowGrammers] = useState(false);
    const [isOpenMenuModal, setIsOpenMenuModal] = useState(false);
    const [showActiveTenses, setShowActiveTenses] = useState(false);


    const openGrammarModal = (e: any) => {
        setIsOpenMenuModal(true);
        setShowActiveTenses(false);
        setShowGrammers(true);
        if (e !== "miniSidebar") {
            openNav && openNav();
        }
    }

    const openActiveTensesModal = (e: any) => {
        setIsOpenMenuModal(true);
        setShowGrammers(false);
        setShowActiveTenses(true);
        if (e !== "miniSidebar") {
            openNav && openNav();
        }

    }

    return (
        <>
            <MenuModal showGrammers={showGrammers} showActiveTenses={showActiveTenses} isOpenMenuModal={isOpenMenuModal} setIsOpenMenuModal={setIsOpenMenuModal} />
            <aside ref={sidebarRef} className="w-48 lg:w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-40 flex h-screen bg-primary-800 ">
                <div ref={maxToolbarRef} className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white bg-primary-800  absolute top-2 rounded-full h-12">
                    <div className="flex pl-4 items-center space-x-2 ">
                    </div>
                    <div className="flex items-center space-x-3 group bg-gradient-to-r bg-primary-900 shadow-lg border-l border-yellow-500 pl-10 pr-2 py-1 rounded-full text-white  ">
                        <div className="transform ease-in-out duration-300 mr-12">
                            <p className='capitalize text-white' >{session?.user.name}</p>
                        </div>
                    </div>
                </div>
                <button onClick={openNav} className="-right-14 lg:-right-6 transition transform ease-in-out duration-500 flex border-4 border-white bg-primary-800 hover:bg-yellow-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                </button>
                <div ref={maxSidebarRef} className="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]">
                    <button onClick={openGrammarModal} className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400 bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <AiFillAlipayCircle />
                        <div>
                            <p className='whitespace-nowrap' >Gramerler</p>
                        </div>
                    </button>
                    <button onClick={openActiveTensesModal} className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <AiFillLayout />
                        <div>
                            <p className='whitespace-nowrap' >Active Tense</p>
                        </div>
                    </button>
                    <Link onClick={openNav} passHref href={{ pathname: "/daily-sentences", query: { page: "Günlük İfadeler" } }} className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <IoLogoWechat className='text-lg' />
                        <div>
                            <p className='whitespace-nowrap' >Günlük İfadeler</p>
                        </div>
                    </Link>
                    <Link onClick={openNav} passHref href={{ pathname: "/reviews", query: { page: "Notlar" } }} className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <AiFillEdit />
                        <div>
                            <p className='whitespace-nowrap' >Notlarım</p>
                        </div>
                    </Link>
                    <Link onClick={openNav} href="https://drive.google.com/drive/u/0/folders/1UEQ8dThWgE24mhbKhkoYAGgTABkHlY_V" target='_blank' className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <AiFillAudio />
                        <div>
                            <p className='whitespace-nowrap' >Ders Kayıtları</p>
                        </div>
                    </Link>
                    <Link onClick={openNav} passHref href={{ pathname: "/course-documents", query: { page: "Dokümanlar" } }} className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <IoDocumentsSharp />
                        <div>
                            <p className='whitespace-nowrap' >Dokümanlar</p>
                        </div>
                    </Link>
                    <Link onClick={openNav} href="/community" className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <FaUsers />
                        <div>
                            <p className='whitespace-nowrap' >Topluluk</p>
                        </div>
                    </Link>

                    <Link onClick={openNav} href="/blog" className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <SiBloglovin />
                        <div>
                            <p className='whitespace-nowrap' >Blog</p>
                        </div>
                    </Link>

                    {session?.user.role === "admin" && <Link onClick={openNav} passHref href={{ pathname: "/admin/students", query: { page: "students" } }} className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <FaUserTie />
                        <div>
                            <p className='whitespace-nowrap' >Admin</p>
                        </div>
                    </Link>}
                    {<button onClick={() => signOut({ callbackUrl: '/auth/login' })} className="hover:ml-10 w-full cursor-pointer text-white hover:text-yellow-400  bg-primary-800 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3">
                        <FaSignOutAlt />
                        <p className='whitespace-nowrap' >Çıkış Yap</p>
                    </button>}

                </div>
                <div ref={miniSidebarRef} className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
                    <button onClick={() => openGrammarModal("miniSidebar")} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <AiFillAlipayCircle />
                    </button>

                    <button onClick={() => openActiveTensesModal("miniSidebar")} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <AiFillLayout />
                    </button>

                    <Link passHref href={{ pathname: "/daily-sentences", query: { page: "Günlük İfadeler" } }} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <IoLogoWechat className='text-lg' />
                    </Link>

                    <Link passHref href={{ pathname: "/reviews", query: { page: "Notlar" } }} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <AiFillEdit />
                    </Link>

                    <Link href="https://drive.google.com/drive/u/0/folders/1UEQ8dThWgE24mhbKhkoYAGgTABkHlY_V" target='_blank' className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <AiFillAudio />
                    </Link>

                    <Link passHref href={{ pathname: "/course-documents", query: { page: "Dokümanlar" } }} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <IoDocumentsSharp />
                    </Link>

                    <Link passHref href={{ pathname: "/community", query: { page: "Topluluk" } }} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <FaUsers />
                    </Link>

                    <Link passHref href={{ pathname: "/blog", query: { page: "Blog" } }} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <SiBloglovin />
                    </Link>

                    {session?.user.role === "admin" && <Link passHref href={{ pathname: "/admin/students", query: { page: "students" } }} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex">
                        <FaUserTie />
                    </Link>}
                    <button onClick={() => signOut({ callbackUrl: '/auth/login' })} className="hover:ml-4 justify-end pr-5 text-white hover:text-yellow-400  w-full bg-primary-800 p-3 rounded-full transform ease-in-out duration-300 flex ">
                        <FaSignOutAlt />
                    </button>
                </div>
            </aside>













        </>
    )
}

export default Sidebar

