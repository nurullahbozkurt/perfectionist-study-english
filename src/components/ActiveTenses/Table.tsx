import React from 'react'
import { IActiveTense } from '@/types/api'

type Props = {
    activeTenses: IActiveTense[] | undefined
}

const Table = (props: Props) => {

    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-900  border">
                <thead className="text-xs text-gray-100 uppercase bg-primary-800 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Olumlu Cümle
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Olumsuz Cümle
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Olumlu Soru Cümlesi
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Olumsuz Soru Cümlesi
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {props.activeTenses?.map((activeTense, index) => (
                        <tr className="bg-gray-100 border-b border-blue-400">
                            <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                <div className='w-full flex flex-col' >
                                    <p className='text-center text-lg' >{activeTense.positiveSentence[0].turkish}</p>
                                    <input className='border rounded-full p-1' />
                                    <div>
                                        <p>Doğru Cevap :</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className='w-full flex flex-col' >
                                    <p className='text-center text-lg' >{activeTense.negativeSentence[0].turkish}</p>
                                    <input className='border rounded-full p-1' />
                                    <div>
                                        <p>Doğru Cevap :</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className='w-full flex flex-col' >
                                    <p className='text-center text-lg' >{activeTense.questionSentence[0].turkish}</p>
                                    <input className='border rounded-full p-1' />
                                    <div>
                                        <p>Doğru Cevap :</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className='w-full flex flex-col' >
                                    <p className='text-center text-lg' >{activeTense.negativeInterrogativeSentence[0].turkish}</p>
                                    <input className='border rounded-full p-1' />
                                    <div>
                                        <p>Doğru Cevap :</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Table