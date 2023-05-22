import axios from 'axios'
import { Fragment, useState } from 'react'
import { useSession } from 'next-auth/react'

import { useApp } from '@/states/app'
import { Dialog, Transition } from '@headlessui/react'

type Props = {
    yourSentence: string;
    correctSentence: string;
    sentence: string;
    grammar: string;
}

export default function ReviewModal(props: Props) {
    const [reviewNote, setReviewNote] = useState('')
    const { isReviewModalOpen, setIsReviewModalOpen } = useApp();

    const { data: session } = useSession()

    function closeModal() {
        setIsReviewModalOpen(false)
    }

    const addToReview = async () => {
        await axios.post('/api/reviews', {
            user: session?.user.id,
            yourSentence: props.yourSentence,
            correctSentence: props.correctSentence,
            sentence: props.sentence,
            reviewNote: reviewNote,
            grammar: props.grammar
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setReviewNote('')
        })
        closeModal()
    }

    return (
        <>
            <Transition appear show={isReviewModalOpen} as={Fragment} >
                <Dialog as="div" className="relative z-20" onClose={closeModal}>
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

                    <div className="fixed w-full inset-0 overflow-y-auto">
                        <div className="w-full flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full sm:max-w-lg max-w-[300px] ml-0 lg:ml-10 transform overflow-hidden rounded-2xl bg-white p-3 sm:p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-xl font-medium leading-6 text-gray-900 border-b text-center py-2"
                                    >
                                        <p className='font-light text-lg sm:text-xl' >{props.sentence}</p>

                                    </Dialog.Title>
                                    <div className="w-full mt-2">
                                        <div className='flex flex-col gap-1 text-sm sm:text-base' >
                                            <p><span className='font-semibold' >Senin Cümlen:</span> {props.yourSentence}</p>
                                            <p><span className='font-semibold' >Doğru Cümle:</span> {props.correctSentence}</p>
                                        </div>
                                    </div>
                                    <div className='pt-5 text-sm sm:text-base' >
                                        <label className="block text-sm  text-gray-700 font-light">
                                            Not Bırak
                                        </label>
                                        <textarea onChange={(e) => setReviewNote(e.target.value)} value={reviewNote} className='border rounded w-full p-3' />
                                    </div>

                                    <div className="mt-4 text-sm sm:text-base">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={addToReview}
                                        >
                                            Notlara Ekle
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
