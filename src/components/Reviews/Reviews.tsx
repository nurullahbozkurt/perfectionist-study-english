import axios from 'axios'
import { format } from 'date-fns'
import tr from 'date-fns/locale/tr';
import React, { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { Puff } from 'react-loader-spinner'
import { useSession } from 'next-auth/react'
import { AiOutlineSend } from 'react-icons/ai'
import { useQuery, useMutation } from 'react-query'


import { IReview } from '@/types/api'
import OpenToggle from './OpenToggle'
import AnswerModal from './AnswerModal';
import { Layout } from '@/components/Layout';


type Props = {}

type SendQuestionProps = {
    itemId: string
    sendToTeacher: boolean
}

const Reviews = (props: Props) => {
    const { data: session, status } = useSession()
    const [answerModalOpen, setAnswerModalOpen] = useState(false)
    const [answer, setAnswer] = useState('')


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

    const mutationChangeQuestionStatus = useMutation(async (props: SendQuestionProps) =>
        await axios.put(`/api/reviews`, {
            itemId: props.itemId,
            sendToTeacher: props.sendToTeacher
        })
    );

    const sendQuestion = async (e: string) => {
        await mutationChangeQuestionStatus.mutateAsync({
            itemId: e,
            sendToTeacher: true
        });
        refetch()
    }

    const backQuestion = async (e: string) => {
        await mutationChangeQuestionStatus.mutateAsync({
            itemId: e,
            sendToTeacher: false
        });
        refetch()
    }

    const openAnswer = (e: string) => {
        setAnswerModalOpen(true)
        const item = data?.find((item: IReview) => item._id === e)
        if (item) {
            setAnswer(item.teacherAnswer)
        }
    }


    if (isLoading || deleteMutation.isLoading) {
        return (
            <Layout>
                <div className='flex items-center justify-center' >
                    <Puff color="#0e7490" height={50} width={50} />
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
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 p-1' >
                    {data?.map((item: IReview) => (
                        <>
                            <div className={`relative flex flex-col shadow-md gap-2 border overflow-hidden border-primary-800/70 rounded-lg  bg-stone-50`} >
                                <div className={`absolute top-0 bottom-0 left-0 right-0 ${item.enabled ? "hidden " : "block bg-stone-50/80"}`} ></div>
                                <div className='border-b p-2 flex items-start flex-col gap-2' >
                                    <div className='w-full flex items-center gap-3 justify-between' >
                                        <div className='flex items-center gap-3' >
                                            <div className='flex items-center gap-2' >
                                                <OpenToggle itemId={item._id} enabled={item.enabled} refetch={refetch} />
                                                <button onClick={() => deleteReview(item._id)} className=' text-red-700 hover:text-red-800' >
                                                    <TiDelete className='inline-block' size={27} />
                                                </button>
                                            </div>
                                            {!item.sendToTeacher && <button onClick={() => sendQuestion(item._id)} className='flex items-center gap-1 border rounded border-primary-900 text-primary-900 px-2 hover:bg-gray-200' >
                                                <p className='text-xs whitespace-nowrap' >Eğitmene Sor</p>
                                                <AiOutlineSend />
                                            </button>}
                                            {item.sendToTeacher && <button onClick={() => backQuestion(item._id)} className='flex items-center gap-1 border rounded border-red-900 text-red-900 px-2 hover:bg-red-100' >
                                                <p className='text-xs whitespace-nowrap' >Soruyu Geri Al</p>
                                                <AiOutlineSend className=' rotate-180' />
                                            </button>}
                                        </div>
                                        {item.createdAt && <div className='text-xs' >{format(new Date(item.createdAt), 'PPP', { locale: tr })}</div>}

                                        {
                                            mutationChangeQuestionStatus.isLoading && <Puff color='#155e75' width={25} height={25} />
                                        }
                                    </div>
                                    <div className='w-full flex items-center gap-2 justify-between' >
                                        {item.grammar && <p className='text-xs  rounded bg-primary-800 text-white px-2' >{item?.grammar}</p>}
                                        {item.teacherAnswer !== null && <button onClick={() => openAnswer(item._id)} className='text-xs border border-green-800 text-green-800 rounded px-1 py-1' >CEVAPLANDI</button>}
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
                                    <p className='italic' >{item.reviewNote} </p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <AnswerModal answer={answer as string} answerModalOpen={answerModalOpen} setAnswerModalOpen={setAnswerModalOpen} />
        </Layout>
    )
}

export default Reviews
