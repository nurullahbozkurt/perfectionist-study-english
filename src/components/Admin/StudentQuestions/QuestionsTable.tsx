import React from 'react'
import SeeTheQuestionModal from './SeeTheQuestionModal'
import { useState } from 'react'
import { FaUserGraduate } from 'react-icons/fa'


type Props = {}

const QuestionsTable = (props: Props) => {
    const [isOpenQuestionModal, setIsOpenQuestionModal] = useState(false)
    return (
        <div>
            <SeeTheQuestionModal isOpenQuestionModal={isOpenQuestionModal} setIsOpenQuestionModal={setIsOpenQuestionModal} />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Nurullah Bozkurt
                            </th>
                            <td className="px-6 py-4">
                                208
                            </td>
                            <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span className="relative">Aktif</span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                Will Be
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => setIsOpenQuestionModal(!isOpenQuestionModal)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Soruyu Gör</button>
                            </td>
                        </tr>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Microsoft Surface Pro
                            </th>
                            <td className="px-6 py-4">
                                White
                            </td>
                            <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span className="relative">Aktif</span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                Am Is Are
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => setIsOpenQuestionModal(!isOpenQuestionModal)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Soruyu Gör</button>
                            </td>
                        </tr>
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Magic Mouse 2
                            </th>
                            <td className="px-6 py-4">
                                Black
                            </td>
                            <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden
                                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                    <span className="relative">Aktif</span>
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                Be Going To
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => setIsOpenQuestionModal(!isOpenQuestionModal)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Soruyu Gör
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default QuestionsTable