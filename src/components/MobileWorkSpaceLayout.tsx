import { PostOrPage } from '@tryghost/content-api';
import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io';


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
    const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);


    useEffect(() => {
        if (scrollContainer) {
            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
    }, [props.correctSentence]);

    return (
        <div className='mx-2' >
            <div className='w-full top-[64px] sticky bg-white' >
                {props.correctSentence.length > 0 && <div ref={setScrollContainer} className=' my-2 md:my-5 flex flex-col gap-2 max-h-[95px] md:max-h-[120px] border shadow-sm rounded p-0.5 overflow-y-scroll' >
                    {
                        props.correctSentence.map((sentence, index) => (
                            <div className='flex flex-col border p-2 border-gray-300 bg-gray-100' >

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
                <div className='' >
                    <div className='flex flex-col gap-1 bg-primary-800 text-white p-2' >
                        <div className='flex items-center justify-between my-1' >
                            <p className='text-xs' >Cümleyi çevir</p>
                            <p className='text-[10px] md:text-xs border rounded bg-gray-50 text-black px-1' >{props.topic}</p>
                        </div>
                        <div className='bg-gray-50 text-black p-1 rounded' ><p>{props.turkishSentence}</p></div>
                        <button onClick={props.changeSentence} className='text-xs md:text-sm bg-primary-700 text-white w-full px-2 py-1 mt-2 rounded' >Cümleyi Değiştir</button>
                    </div>
                </div>
            </div>
            <div className='my-2 pb-4' >
                {props.post && <div className='w-full h-full overflow-y-scroll ' >
                    <div><h1 className='text-lg md:text-2xl font-semibold px-2 capitalize' >{props?.post?.title}</h1></div>
                    <div className={`blog text-gray-800 p-3  `} dangerouslySetInnerHTML={{ __html: props.post?.html! }} />
                </div>}
                {
                    props.postError && <div className='w-full h-full flex items-center justify-center border bg-primary-800' >
                        <p className='text-white text-sm' >{props.postError}</p>
                    </div>
                }
            </div>
            <div className='container mx-auto max-w-[calc(100%-47px)] fixed bottom-0 right-0 py-2 bg-white' >
                <form onSubmit={(e) => props.sendAnswer(e)} className='w-full flex items-center justify-between gap-2 container px-1' >
                    <div className='w-full flex-1' >
                        <input onChange={(e) => props.setAnswer(e.target.value)} value={props.answer} className='w-full border border-gray-400 rounded px-2 py-1 bg-gray-50' />
                    </div>
                    <button type='submit' className='px-2 py-1 bg-green-700 hover:bg-green-600 text-white rounded ' >SEND </button>
                </form>
            </div>

        </div>
    )
}

export default MobileWorkSpaceLayout