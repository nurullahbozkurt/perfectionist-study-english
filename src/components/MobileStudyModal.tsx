import { Dialog, Transition } from '@headlessui/react'
import { PostOrPage } from '@tryghost/content-api';
import { Fragment, useState } from 'react'

type Props = {
    post?: PostOrPage
    isStudyModalOpen: boolean;
    setIsStudyModalOpen: (isStudyModalOpen: boolean) => void;
}

export default function MobileStudyModal({ post, isStudyModalOpen, setIsStudyModalOpen }: Props) {

    function closeModal() {
        setIsStudyModalOpen(false)
    }

    return (
        <>

            <Transition appear show={isStudyModalOpen} as={Fragment}>
                <Dialog as="div" className="relative " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-scroll z-50">
                        <div className="flex items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md max-h-[600px] transform overflow-y-scroll rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2 p-2">
                                        {post && <div className='w-full h-full overflow-y-scroll ' >
                                            <div><h1 className='text-lg md:text-2xl font-semibold px-2 capitalize' >{post?.title}</h1></div>
                                            <div className={`blog text-gray-800 p-3`} dangerouslySetInnerHTML={{ __html: post?.html! }} />
                                        </div>}
                                    </div>
                                    <div className="mt-4 w-full sticky bottom-0 left-0 right-0 ">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Kapat
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
