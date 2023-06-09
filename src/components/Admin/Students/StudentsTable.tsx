import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Puff } from 'react-loader-spinner'
import { FiUserPlus } from 'react-icons/fi'
import { FaUserGraduate } from 'react-icons/fa'

import { IUser } from '@/types/api'

type Props = {}

const StudentsTable = (props: Props) => {
    const { data, isLoading, isError, error, refetch } = useQuery<IUser[]>(['students'], async () => {
        const response = await axios.get('/api/admin/students')
        return response.data
    })


    if (isLoading) {
        return (
            <div className='flex items-center justify-center' >
                <Puff color="#0e7490" height={50} width={50} />
            </div>
        )
    }

    return (
        <div className="antialiased font-sans ">
            <div className="container mx-auto px-4 sm:px-8">
                <div className="w-full py-8">
                    <div>
                        <h2 className="text-2xl font-semibold leading-tight">Öğrenciler</h2>
                    </div>
                    <div className="w-full flex items-center justify-between my-2 ">
                        <div className='flex items-center gap-1' >
                            <p className='font-extralight ' >Aktif Öğrenci :</p>
                            <p className='font-extralight '>{data?.length}</p>
                        </div>
                        {/* <div className='flex sm:flex-row flex-col' >
                            <div className="flex flex-row mb-1 sm:mb-0">
                                <div className="relative">
                                    <select
                                        className="appearance-none h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="relative">
                                    <select
                                        className="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                                        <option>All</option>
                                        <option>Active</option>
                                        <option>Pasif</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="block relative">
                                <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                        <path
                                            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                        </path>
                                    </svg>
                                </span>
                                <input placeholder="Search"
                                    className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                            </div>
                        </div> */}
                        <button disabled className='flex duration-500 items-center gap-2 px-4 py-1 rounded border border-primary-900 bg-white text-primary-900 opacity-40' >
                            <FiUserPlus />
                            <p className='text-sm' >Öğrenci Ekle</p>
                        </button>
                    </div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Öğrenci
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Kurs Numarası
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Kurs Başlangıç
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Kurs Kurs Bitiş
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Durum
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data?.map((student, index) => (
                                            <tr>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="flex items-center justify-center text-2xl text-primary-700">
                                                            <FaUserGraduate />
                                                        </div>
                                                        <div className="ml-3">
                                                            <div className='flex flex-col' >
                                                                <p className="text-gray-900 whitespace-no-wrap flex items-center gap-1">
                                                                    <span className='capitalize' >{student.firstName}</span>
                                                                    <span className='capitalize' >{student.lastName}</span>
                                                                </p>
                                                                <p className="text-gray-500 text-xs whitespace-no-wrap">
                                                                    {student.email}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">208</p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        21 Mart, 2023
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        21 Temmuz, 2022
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                        <span className="relative">Aktif</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                            {/* <div
                                className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                        Önceki
                                    </button>
                                    <button
                                        className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                        Sonraki
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentsTable