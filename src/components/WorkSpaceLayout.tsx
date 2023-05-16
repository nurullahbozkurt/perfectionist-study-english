import { useApp } from '@/states/app';
import React, { useEffect, useState } from 'react'
import { AiFillRightCircle } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import { Puff } from 'react-loader-spinner'
import ReviewModal from './ReviewModal';
import { PostOrPage } from '@tryghost/content-api'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

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

const WorkSpaceLayout = (props: Props) => {
    const { headerHeight, setHeaderHeight } = useApp();
    const [contentHeight, setContentHeight] = useState(0);
    const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleResize = () => {
            setContentHeight(window.innerHeight);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    }, [props.correctSentence]);

    const contentStyle = {
        height: `calc(${contentHeight}px - ${headerHeight}px)`,
    };
    return (
        <div className='bg-gray-100' >
            <div className='container mx-auto ' >
                <div style={contentStyle} className='grid md:grid-cols-2 xl:grid-cols-3 w-full ' >
                    <div className='col-span-1 border-r pr-4 pt-5' >
                        <div className='flex flex-col justify-between max-h-[800px] h-full bg-white p-2 rounded shadow-md border border-primary-900' >
                            <div className='flex flex-col gap-2 overflow-hidden ' >
                                <div className='w-full px-10 py-5 bg-primary-800 border border-primary-900 text-white rounded flex flex-col gap-5' >
                                    {props.isLoading && (
                                        <Puff
                                            height="40"
                                            width="40"
                                            radius={1}
                                            color="white"
                                            ariaLabel="puff-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    )}
                                    {!props.isLoading && (
                                        <>
                                            <p className='font-bold text-[15px]' >Cümleyi  <span className='bg-primary-700 rounded text-white px-2' >{props.topic}</span> gramer kuralına göre çevir.</p>
                                            <div className='flex items-start gap-1' >
                                                <h1 className='text-base text-black border shadow-lg bg-gray-100  px-2 py-1 rounded' >{props.turkishSentence}</h1>
                                            </div>
                                            <div className='flex justify-end' >
                                                <p className='rounded px-2 py-0.5 text-xs bg-white text-primary-900 shadow' ><span className='font-bold' >Gramer:</span>{props.topic}</p>
                                            </div>
                                            <div className='w-full' >
                                                {props.changeSentence && <button onClick={props.changeSentence} className='w-full bg-primary-700 hover:bg-primary-800 text-white rounded' >Cümleyi Değiştir</button>}
                                            </div>
                                        </>
                                    )}
                                </div>
                                {props.post && <div className='w-full h-full overflow-y-scroll ' >
                                    <div><h1 className='text-2xl font-semibold px-2 capitalize' >{props?.post?.title}</h1></div>
                                    <div className={`blog text-gray-800 p-3  `} dangerouslySetInnerHTML={{ __html: props.post?.html! }} />
                                </div>}
                                {
                                    props.postError && <div className='w-full h-full flex items-center justify-center border bg-primary-800' >
                                        <p className='text-white text-sm' >{props.postError}</p>
                                    </div>
                                }
                            </div>

                            <form onSubmit={(e) => props.sendAnswer(e)} className='w-full flex items-center justify-between gap-2' >
                                <div className='w-full flex-1' >
                                    <input onChange={(e) => props.setAnswer(e.target.value)} value={props.answer} className='w-full border border-gray-400 rounded px-2 py-1 bg-gray-50' />
                                </div>
                                <button type='submit' className='px-2 py-1 bg-green-700 hover:bg-green-600 text-white rounded ' >SEND </button>
                            </form>
                        </div>
                    </div>
                    <div className='col-span-1 xl:col-span-2 p-5' >
                        <div ref={setScrollContainer} className='flex flex-col gap-5 max-h-full overflow-scroll' >
                            {props.correctSentence && props.correctSentence.map((item, index) => (
                                <div className='border  border-primary-700 rounded flex flex-col gap-2 p-2 bg-white shadow-md' >
                                    <div className='flex items-center justify-between' >
                                        <p className='border-b text-sm' >{item.sentence}</p>
                                        <button onClick={props.openReviewModal} className='text-3xl text-primary-900 hover:text-primary-700'> <IoIosAddCircle /></button>
                                    </div>
                                    <p><span className='font-semibold' >Senin Cümlen: </span>{item.yourSentence}</p>
                                    <p><span className='font-semibold text-green-800' >Doğru Cümle  : </span>{item.correctSentence}</p>
                                    <ReviewModal yourSentence={item.yourSentence} correctSentence={item.correctSentence} sentence={item.sentence} grammar={props.topic} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WorkSpaceLayout