import React from 'react'
import { useSession } from 'next-auth/react'
import { FaUserGraduate } from 'react-icons/fa'

import { Layout } from '../Layout'

type Props = {}

const Community = (props: Props) => {
    const { data: session, status } = useSession()
    return (
        <Layout>
            <div className='mt-5 border rounded bg-yellow-200 py-2 top-16 sticky z-10 ' >
                <p className='w-full text-sm lg:text-base text-center text-black italic' >Topluluk sayfası Henüz Prototip Aşamasında ve İçerikler Örnektir</p>
            </div>
            <article className="px-2 lg:px-12 lg:grid lg:grid-cols-3 gap-5">
                <div className=" p-10 col-span-1 hidden lg:block">
                    <div className='top-16 sticky ' >
                        <div className='bg-stone-50 border rounded py-2' >
                            <div className="flex flex-col gap-1 text-center items-center">
                                <div className="h-32 w-32 bg-white p-2 rounded-full shadow mb-4 flex items-center justify-center"  >
                                    <FaUserGraduate className='w-full text-center text-7xl text-gray-700' />
                                </div>
                                <p className="font-semibold"><span className=' capitalize' >{session?.user.name}</span>{" "}<span className=' capitalize' >{session?.user.lastName}</span></p>
                                <div className="text-sm leading-normal text-gray-300 flex justify-center items-center">
                                    {session?.user.email}
                                </div>
                            </div>

                        </div>
                        <div className="bg-stone-50 border rounded shadow mt-8 p-6">
                            <h3 className="text-gray-600 text-sm font-semibold mb-4">Kullanıcılar</h3>
                            <ul className="flex items-center  space-x-2">
                                <li className="flex flex-col items-center space-y-2">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638708644743-2502f38000a0?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" />
                                    </a>
                                    <span className="text-xs text-gray-500">
                                        Sky
                                    </span>
                                </li>
                                <li className="flex flex-col items-center space-y-2">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638691899851-0e955bceba1f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" />
                                    </a>
                                    <span className="text-xs text-gray-500">
                                        Olivia
                                    </span>
                                </li>
                                <li className="flex flex-col items-center space-y-2">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638612913771-8f00622b96fb?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" />
                                    </a>
                                    <span className="text-xs text-gray-500">
                                        Julia
                                    </span>
                                </li>
                                <li className="flex flex-col items-center space-y-2">
                                    <a className="block bg-white p-1 rounded-full" href="#">
                                        <img className="w-16 rounded-full" src="https://images.unsplash.com/photo-1638649602320-450b717fa622?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=200&amp;h=200&amp;q=80" />
                                    </a>
                                    <span className="text-xs text-gray-500">
                                        Hendrick
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 ' >

                    <form className="bg-primary-800 shadow rounded-lg mb-6 mt-10 p-5">
                        <textarea name="message" placeholder="Type something..." className="w-full rounded-lg p-2 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400"></textarea>
                        <footer className="flex justify-between mt-2">
                            <div className="flex gap-2">
                                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                </span>
                                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </span>
                                <span className="flex items-center transition ease-out duration-300 hover:bg-blue-500 hover:text-white bg-blue-100 w-8 h-8 px-2 rounded-full text-blue-400 cursor-pointer">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                                </span>
                            </div>
                            <button className="flex items-center py-2 px-4 rounded-lg text-sm bg-blue-600 text-white shadow-lg">Gönder
                                <svg className="ml-1" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </footer>
                    </form>

                    <div className="shadow rounded-lg mb-6 bg-stone-50 border">
                        <div className="flex flex-row px-2 py-3 mx-3">
                            <div className="w-auto h-auto rounded-full">
                                <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                            </div>
                            <div className="flex flex-col mb-2 ml-4 mt-1">
                                <div className="text-gray-600 text-sm font-semibold">John Doe</div>
                                <div className="flex w-full mt-1">
                                    <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                        SEO
                                    </div>
                                    <div className="text-gray-400 font-thin text-xs">
                                        • 30 seconds ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-100"></div>
                        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                            <div className="grid grid-cols-6 col-span-2   gap-2  ">
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=735&amp;q=80" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                                    <img className="h-full w-full object-cover  " src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1399&amp;q=80" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80" alt="" />
                                </div>
                                <div className=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=687&amp;q=80" alt="" />
                                </div>
                                <div className="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                                    <div className="text-white text-xl absolute inset-0  bg-slate-900/80 flex justify-center items-center">
                                        + 23
                                    </div>
                                    <img className="h-full w-full object-cover " src="https://images.unsplash.com/photo-1560393464-5c69a73c5770?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=765&amp;q=80" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-500 text-sm mb-6 mx-3 px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
                        <div className="flex justify-start mb-4 border-t border-gray-100">
                            <div className="flex w-full mt-1 pt-2 pl-5">
                                <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                    </svg>
                                </span>
                                <img className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
                                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" />
                            </div>
                            <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                                <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                    </svg>
                                </span>
                                <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full border-t border-gray-100">
                            <div className="mt-3 mx-5 flex flex-row text-xs">
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div></div>
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div></div>
                            </div>
                            <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                                <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Likes: <div className="ml-1 text-gray-400  text-ms"> 120k</div></div>
                            </div>
                        </div>
                        <div className="text-black p-4 antialiased flex">
                            <img className="rounded-full h-8 w-8 mr-2 mt-1 " src="https://picsum.photos/id/1027/200/200" />
                            <div>
                                <div className="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
                                    <div className="font-semibold text-sm leading-relaxed">Sara Lauren</div>
                                    <div className="text-xs leading-snug md:leading-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                </div>
                                <div className="text-xs  mt-0.5 text-gray-500">14 w</div>

                            </div>
                        </div>
                        <div className="relative flex items-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                                    <svg className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>

                                </button>
                            </span>
                            <input type="search" className="w-full py-2 pl-4 pr-10 text-sm bg-white border rounded appearance-none rounded-tg placeholder-gray-400" placeholder="Post a comment..." />
                        </div>
                    </div>

                    <div className="shadow rounded-lg mb-6 bg-stone-50 border">
                        <div className="flex flex-row px-2 py-3 mx-3">
                            <div className="w-auto h-auto rounded-full border-2 border-green-500">
                                <img className="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=200" />
                            </div>
                            <div className="flex flex-col mb-2 ml-4 mt-1">
                                <div className="text-gray-600 text-sm font-semibold">Sara Lauren</div>
                                <div className="flex w-full mt-1">
                                    <div className="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                        UX Design
                                    </div>
                                    <div className="text-gray-400 font-thin text-xs">
                                        • 1 day ago
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-b border-gray-100"></div>
                        <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                            <img className="rounded w-full max-h-[250px] object-cover" src="https://picsum.photos/536/354" />
                        </div>
                        <div className="text-gray-600 font-semibold  mb-2 mx-3 px-2">Dummy text of the printing and typesetting industry</div>
                        <div className="text-gray-500 text-sm mb-6 mx-3 px-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</div>
                        <div className="flex justify-start mb-4 border-t border-gray-100">
                            <div className="flex w-full mt-1 pt-2 pl-5">
                                <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                    </svg>
                                </span>
                                <img className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" alt="" />
                                <img className="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.25&amp;w=256&amp;h=256&amp;q=80" alt="" />
                            </div>
                            <div className="flex justify-end w-full mt-1 pt-2 pr-5">
                                <span className="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                    </svg>
                                </span>
                                <span className="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                                    <svg className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className="flex w-full border-t border-gray-100">
                            <div className="mt-3 mx-5 flex flex-row text-xs">
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Comments:<div className="ml-1 text-gray-400 text-ms"> 30</div></div>
                                <div className="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Views: <div className="ml-1 text-gray-400 text-ms"> 60k</div></div>
                            </div>
                            <div className="mt-3 mx-5 w-full flex justify-end text-xs">
                                <div className="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Likes: <div className="ml-1 text-gray-400 text-ms"> 120k</div></div>
                            </div>
                        </div>
                        <div className="relative flex items-center self-center w-full p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                            <img className="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" />
                            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
                                <button type="submit" className="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                                    <svg className="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>

                                </button>
                            </span>
                            <input type="search" className="w-full py-2 pl-4 pr-10 text-sm bg-white border rounded appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" placeholder="Post a comment..." />
                        </div>
                    </div>
                </div>

            </article>
        </Layout>
    )
}

export default Community