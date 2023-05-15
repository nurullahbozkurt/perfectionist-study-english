import React, { useMemo, useState } from 'react'
import { Layout } from '@/components/Layout';
import { useQuery, useMutation } from 'react-query'
import { useSession } from 'next-auth/react'
import axios from 'axios'
import { IReview } from '@/types/api'
import OpenToggle from './OpenToggle'
import { format, compareAsc } from 'date-fns'
import tr from 'date-fns/locale/tr';
import { TiTimes } from 'react-icons/ti'
import { TiDelete } from 'react-icons/ti'
import { Puff } from 'react-loader-spinner'
import { AiOutlineSend } from 'react-icons/ai'


type Props = {}

const Reviews = (props: Props) => {
    const { data: session, status } = useSession()

    const { data, isLoading, isError, error, refetch } = useQuery(['reviews'], async () => {
        const response = await axios.get('/api/reviews', {
            params: {
                userId: session?.user.id
            }
        })
        return response.data
    })

    const deleteMutation = useMutation(async (itemId: string) =>
        await axios.delete(`/api/reviews`, {
            params: {
                itemId: itemId,
            },
        })
    );

    const deleteReview = async (itemId: string) => {
        await deleteMutation.mutateAsync(itemId);
        refetch()
    }


    if (isLoading) {
        return (
            <Layout>
                <div className='flex justify-center items-center h-screen' >
                    <Puff color='#155e75' />
                </div>
            </Layout>
        )
    }

    if (deleteMutation.isLoading) {
        return (
            <Layout>
                <div className='flex justify-center items-center h-screen' >
                    <Puff color='#155e75' />
                </div>
            </Layout>
        )
    }

    return (
        <Layout>
            <div className='container mx-auto' >
                <div className='py-10' >
                    <h1 className='text-3xl font-semibold' >Notlarım</h1>
                </div>
                <div className='grid grid-cols-3 gap-5' >
                    {data?.map((item: IReview) => (
                        <div className={`relative flex flex-col shadow-md gap-2 border overflow-hidden border-primary-800/70 rounded-lg  bg-stone-50`} >
                            <div className={`absolute top-0 bottom-0 left-0 right-0 ${item.enabled ? "hidden " : "block bg-stone-50/80"}`} ></div>
                            <div className='border-b p-2 flex items-center justify-between ' >
                                <div className='flex items-center gap-3' >
                                    <OpenToggle itemId={item._id} enabled={item.enabled} refetch={refetch} />
                                    <button onClick={() => deleteReview(item._id)} className=' text-red-700 hover:text-red-800' >
                                        <TiDelete className='inline-block' size={27} />
                                    </button>
                                    <button className='flex items-center gap-1 border rounded border-primary-900 text-primary-900 px-2 hover:bg-gray-200' >
                                        <p className='text-xs' >Eğitmene Sor</p>
                                        <AiOutlineSend />
                                    </button>
                                </div>
                                <div className='flex items-center gap-2' >
                                    {item.createdAt && <div className='text-xs' >{format(new Date(item.createdAt), 'PPP', { locale: tr })}</div>}
                                    {item.grammar && <p className='text-sm  rounded bg-primary-800 text-white px-2' >{item?.grammar}</p>}
                                </div>
                            </div>
                            <div className=' flex flex-col justify-between gap-2  p-3 bg-stone-50' >

                                <div className='flex flex-col gap-2' >
                                    <div className='flex gap-3 ' >
                                        <p className='font-semibold whitespace-nowrap' >Verilen Cümle :</p>
                                        <p>{item.sentence}</p>
                                    </div>
                                    <div className='flex gap-3 ' >
                                        <p className='font-semibold whitespace-nowrap' >Kurduğun Cümle :</p>
                                        <p>{item.yourSentence}</p>
                                    </div>
                                    <div className='flex gap-3 ' >
                                        <p className='font-semibold text-green-900 whitespace-nowrap' >Doğru Cümle :</p>
                                        <p>{item.correctSentence}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 border-t border-primary-800 p-2' >
                                <p className='font-semibold text-green-900 whitespace-nowrap' >Not :</p>
                                <p className='italic' >{item.reviewNote}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Reviews
