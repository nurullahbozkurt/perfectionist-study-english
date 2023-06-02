import React, { useState } from 'react'
import { PostOrPage } from '@tryghost/content-api';
import { useEffect, useRef } from 'react';
import { IoIosAddCircle } from 'react-icons/io';
import { FaHandPointRight } from 'react-icons/fa';
import MobileStudyModal from './MobileStudyModal';


type Props = {
    isLoading: boolean;
    topic: string;
    turkishSentence: string;
    englishSentence: string;
    changeSentence?: () => void;
    setAnswer: (answer: string) => void;
    answer: string;
    sendAnswer: (e: React.FormEvent<HTMLFormElement>) => void;
    correctSentence: {
        yourSentence: string;
        correctSentence: string;
        sentence: string;
    }[]
    setCorretSentence: (correctSentence: string) => void;
    post?: PostOrPage
    postError?: string
    openReviewModal: () => void;

}

const MobileWorkSpaceLayout = (props: Props) => {
    const scrollContainer = useRef<HTMLDivElement | null>(null);
    const [isStudyModalOpen, setIsStudyModalOpen] = useState(false);


    useEffect(() => {
        scrollContainer.current?.scrollTo(
            0,
            scrollContainer.current.scrollHeight
        );
    }, [props.correctSentence, props.sendAnswer]);


    return (
        <div style={{ height: 'calc(100vh - 300px)' }} className='w-full h-screen flex flex-col items-center justify-between'>
            <main style={{ paddingBottom: 'env(safe-area-inset-bottom)' }} className='w-full h-full flex-3 flex flex-col items-center pb-safe' >
                {<div ref={scrollContainer} className='w-full md:mb-5 flex flex-col gap-2 p-0.5 overflow-y-scroll' >
                    {
                        props.correctSentence.map((sentence, index) => (
                            <div className='flex flex-col border rounded p-2 border-gray-300 bg-gray-100' >
                                <div className='flex items-center text-sm gap-1 text-gray-900'><FaHandPointRight /><p>{sentence.sentence}</p></div>
                                <div className='flex items-center justify-between' >
                                    <p><span className='font-semibold' >Cümlen :</span>{sentence.yourSentence}</p>
                                    <button onClick={props.openReviewModal} className='text-primary-800' >
                                        <IoIosAddCircle className='text-3xl' />
                                    </button>
                                </div>
                                <p><span className='font-semibold text-green-900' >Doğru Cümle :</span>{sentence.correctSentence}</p>
                            </div>
                        ))
                    }
                </div>}
            </main>
            <footer className='fixed bottom-0 left-0 right-0 bg-white pb-2' >
                <div className='w-full flex flex-col gap-2' >
                    <div className='flex flex-col gap-1 bg-primary-800 text-white p-2' >
                        <div className='flex items-center justify-between my-1' >
                            <p className='text-xs' >Aşağıdaki Cümleyi Çevir</p>
                            <p className='text-[10px] md:text-xs border rounded  bg-gray-50 text-black px-1' >{props.topic}</p>
                        </div>
                        <div className='bg-gray-50 text-black p-1 rounded' ><p>{props.turkishSentence}</p></div>
                        <div className='flex items-center justify-between gap-4' >
                            {props.changeSentence && <button onClick={props.changeSentence} className='text-xs md:text-sm bg-primary-700 text-white w-full px-2 py-1 mt-2 rounded' >
                                Cümleyi Değiştir
                            </button>}
                            <button onClick={() => setIsStudyModalOpen(true)} className='text-xs md:text-sm bg-green-700 text-white w-full px-2 py-1 mt-2 rounded' >
                                Konu Anlatımı
                            </button>
                        </div>
                    </div>
                    <form onSubmit={(e) => props.sendAnswer(e)} className='w-full flex items-center justify-between gap-2 container px-1'>
                        <div className='w-full flex-1'>
                            <input onChange={(e) => props.setAnswer(e.target.value)} value={props.answer} className='w-full border border-gray-400 rounded p-2 bg-gray-50' />
                        </div>
                        <button type='submit' className='p-2 bg-green-700 hover:bg-green-600 text-white rounded'>SEND</button>
                    </form>
                </div>
            </footer>
            <MobileStudyModal post={props.post} setIsStudyModalOpen={setIsStudyModalOpen} isStudyModalOpen={isStudyModalOpen} />
        </div>

    )
}

export default MobileWorkSpaceLayout