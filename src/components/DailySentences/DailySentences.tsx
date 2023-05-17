import { Puff } from 'react-loader-spinner';
import React, { useEffect, useState } from 'react'

import { useApp } from '@/states/app';
import { IDailySentence } from '@/types/api';
import { Layout } from '@/components/Layout';
import WorkSpaceLayout from '../WorkSpaceLayout';
import { PostOrPage } from '@tryghost/content-api';
import MobileWorkSpaceLayout from '../MobileWorkSpaceLayout';

type Props = {
    post: PostOrPage
    postError: string
}

interface CorrectSentence {
    yourSentence: string;
    correctSentence: string;
    sentence: string;
}

interface Sentence {
    index: number;
    turkishSentence: string;
    englishSentence: string;
    topic: string;
}

const DailySentences = (props: Props) => {
    const { headerHeight, setHeaderHeight, isReviewModalOpen, setIsReviewModalOpen } = useApp();

    const [answer, setAnswer] = useState('')
    const [sentence, setSentence] = useState<Sentence>()
    const [contentHeight, setContentHeight] = useState(0);
    const [correctSentence, setCorrectSentence] = useState<CorrectSentence[]>([]);
    const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);

    const useStaticGrammarData = () => {
        const [data, setData] = useState<IDailySentence[] | null>(null);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await import(`@/data/dailySentences.json`);
                    setData(response.default);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error fetching static grammar data:', error);
                    setIsLoading(false);
                }
            };
            fetchData();
        }, []);
        return { data, isLoading };
    };

    const { data: dailySentences, isLoading } = useStaticGrammarData()

    const changeSentence = () => {
        if (dailySentences) {
            const randomIndex = Math.floor(Math.random() * dailySentences?.length)
            setSentence(dailySentences && dailySentences[randomIndex])
        }
    }

    const openReviewModal = () => {
        setIsReviewModalOpen(true)
    }

    const sendAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!sentence) return
        setCorrectSentence([...correctSentence, { yourSentence: answer, correctSentence: sentence.englishSentence, sentence: sentence.turkishSentence }])
        setAnswer('')
        changeSentence()
    }

    useEffect(() => {
        if (dailySentences) {
            const randomIndex = Math.floor(Math.random() * dailySentences.length)
            setSentence(dailySentences[randomIndex])
        }
    }, [dailySentences])

    useEffect(() => {
        const header = document.getElementById("header");
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
    }, []);

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
    }, [correctSentence]);


    if (!sentence || isLoading) {
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
            <div className='hidden lg:block' >
                <WorkSpaceLayout
                    post={props.post}
                    postError={props.postError}
                    isLoading={isLoading}
                    turkishSentence={sentence?.turkishSentence}
                    englishSentence={sentence?.englishSentence}
                    topic={"Günlük İfadeler"}
                    changeSentence={changeSentence}
                    answer={answer}
                    setAnswer={setAnswer}
                    sendAnswer={sendAnswer}
                    correctSentence={correctSentence}
                    setCorretSentence={() => setCorrectSentence}
                    openReviewModal={openReviewModal}
                />
            </div>
            <div className='block lg:hidden' >
                <MobileWorkSpaceLayout
                    post={props.post}
                    postError={props.postError}
                    isLoading={isLoading}
                    turkishSentence={sentence?.turkishSentence}
                    englishSentence={sentence?.englishSentence}
                    topic={"Günlük İfadeler"}
                    changeSentence={changeSentence}
                    answer={answer}
                    setAnswer={setAnswer}
                    sendAnswer={sendAnswer}
                    correctSentence={correctSentence}
                    setCorretSentence={() => setCorrectSentence}
                    openReviewModal={openReviewModal}
                />
            </div>
        </Layout>
    )
}

export default DailySentences