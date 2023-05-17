import axios from 'axios'
import { IReview } from '@/types/api'
import { useMutation } from 'react-query'
import { FaUserGraduate } from 'react-icons/fa'
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'


type Props = {
    question: IReview | null
    isOpenQuestionModal: boolean
    questionsRefetch: () => void
    setIsOpenQuestionModal: (isOpen: boolean) => void
}

export default function SeeTheQuestionModal(props: Props) {
    const [teacherAnswer, setTeacherAnswer] = useState("")

    const mutation = useMutation(async (teacherAnswer: string) =>
        await axios.put(`/api/admin/reviews`, {
            reviewId: props.question?._id,
            teacherAnswer: teacherAnswer as string
        })
    );

    const onSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await mutation.mutateAsync(teacherAnswer);
        } catch (error) {
            console.log("error", error)
        }
        setTeacherAnswer("")
        props.questionsRefetch()
        props.setIsOpenQuestionModal(false)
    };


    function closeModal() {
        props.setIsOpenQuestionModal(false)
    }

    useEffect(() => {
        if (props.question?.teacherAnswer === null) {
            setTeacherAnswer("")
        }
        setTeacherAnswer(props.question?.teacherAnswer as string)
    }, [props.question])



    return (
        <>

            <Transition appear show={props.isOpenQuestionModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex items-center gap-2 mb-5 border-b pb-2"
                                    >
                                        <FaUserGraduate />
                                        {props.question?.user?.firstName}
                                    </Dialog.Title>
                                    <div className="mt-2 flex flex-col gap-3">
                                        <p className="border rounded p-2 bg-red-100">
                                            <span className='font-semibold text-primary-900' >{props.question?.user.firstName} :</span>{props.question?.reviewNote}
                                        </p>
                                        <div className='flex flex-col gap-1' >
                                            <p><span className='text-green-700 font-semibold' >Verilen Cümle :</span> {props.question?.sentence}</p>
                                            <p><span className='text-red-700 font-semibold' >Öğrencinin Cümlesi :</span>{props.question?.yourSentence}</p>
                                            <p><span className='text-primary-900 font-semibold' >Doğru Cümle :</span>{props.question?.correctSentence}</p>
                                        </div>
                                        <form onSubmit={(e) => onSubmit(e)} className='border p-2 rounded bg-green-50' >
                                            <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                                                <span className='font-semibold text-green-800' >Eğitmen Cevabı :</span>
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    onChange={(e) => setTeacherAnswer(e.target.value)}
                                                    value={teacherAnswer}
                                                    id="answer"
                                                    name="answer"
                                                    rows={3}
                                                    className="shadow-sm border p-2 focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                    placeholder="Cevabınızı buraya yazınız."
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    Cevabı Gönder
                                                </button>
                                            </div>
                                        </form>
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
