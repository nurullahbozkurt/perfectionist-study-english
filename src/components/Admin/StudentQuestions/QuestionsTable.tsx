import React from 'react'
import SeeTheQuestionModal from './SeeTheQuestionModal'
import { useState } from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import useGetStudentQuestions from '@/hooks/get-student-questions'
import { Puff } from 'react-loader-spinner'
import { IReview } from '@/types/api'


type Props = {}

const QuestionsTable = (props: Props) => {
    const [isOpenQuestionModal, setIsOpenQuestionModal] = useState(false)
    const [question, setQuestion] = useState<IReview | null>(null)

    const { data, isLoading, isError, error, refetch } = useGetStudentQuestions();

    console.log("data::", data)


    if (isLoading) {
        return (
            <Puff color="#00BFFF" height={100} width={100} />
        )
    }


    const openQuestion = (questionId: string) => {
        const question = data?.find((question: IReview) => question._id === questionId)
        console.log("question::", question)
        if (question) {
            setQuestion(question)
            setIsOpenQuestionModal(true)
        }
    }

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3 flex items-center gap-2">
                                <FaUserGraduate className='text-lg' />
                                Öğrenci
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Kurs Numarası
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Durum
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Grammar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((question, index) => (
                                <>

                                    <tr className="bg-white ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                            {question.user?.firstName} {question.user?.lastName}
                                        </th>
                                        <td className="px-6 py-4">
                                            208
                                        </td>
                                        <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                                            {question.teacherAnswer !== null && (
                                                <span
                                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                    <span aria-hidden
                                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                    <span className="relative">Cevaplandı</span>
                                                </span>
                                            )}
                                            {question.teacherAnswer === null && <span
                                                className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                <span aria-hidden
                                                    className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                                <span className="relative">Cevap Bekliyor</span>
                                            </span>}
                                        </td>
                                        <td className="px-6 py-4">
                                            {question.grammar}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => openQuestion(question._id)} className="font-medium text-blue-600  hover:underline">
                                                Soruyu Gör
                                            </button>
                                        </td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <SeeTheQuestionModal question={question} questionsRefetch={refetch} isOpenQuestionModal={isOpenQuestionModal} setIsOpenQuestionModal={setIsOpenQuestionModal} />

        </div>
    )
}

export default QuestionsTable