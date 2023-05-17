import { useRouter } from 'next/router';
import { Puff } from 'react-loader-spinner';
import React, { useState, useEffect } from 'react';

import { useApp } from '@/states/app';
import { IActiveTense } from '@/types/api';
import { Layout } from '@/components/Layout';
import WorkSpaceLayout from '../WorkSpaceLayout';
import { PostOrPage } from '@tryghost/content-api';
import MobileWorkSpaceLayout from '../MobileWorkSpaceLayout';

type Props = {
    post: PostOrPage
    postError: string
};

interface ISentence {
    english: string;
    turkish: string;
}

interface CorrectSentence {
    yourSentence: string;
    correctSentence: string;
    sentence: string;
    topic: string;
}

const ActiveTense = (props: Props) => {
    const router = useRouter();
    const { setIsReviewModalOpen } = useApp();


    const [answer, setAnswer] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);
    const [correctSentence, setCorrectSentence] = useState<CorrectSentence[]>([]);

    // const { data: activeTenses, isLoading } = useGetActiveTenses({
    //     collectionName: `activeTense_${router.query.activeTenses}` as string,
    // });

    const useStaticGrammarData = (grammar: any) => {
        const [isLoading, setIsLoading] = useState(true);
        const [data, setData] = useState<IActiveTense[] | null>(null);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await import(`@/data/active-tenses/${grammar}.json`);
                    setData(response.default);
                    setIsLoading(false);
                } catch (error) {
                    console.error('Error fetching static grammar data:', error);
                    setIsLoading(false);
                }
            };

            fetchData();
        }, [grammar]);

        return { data, isLoading };
    };

    const { data: activeTenses, isLoading } = useStaticGrammarData(router.query.activeTenses);

    const getActiveSentence = (): ISentence | null => {
        if (activeTenses?.length === 0) return null;
        const activeData = activeTenses && activeTenses[activeIndex];
        if (!activeData) return null;

        const sentences = [
            ...activeData.positiveSentence,
            ...activeData.negativeSentence,
            ...activeData.questionSentence,
            ...activeData.negativeInterrogativeSentence,
        ];

        if (activeSentenceIndex >= sentences.length) {
            setActiveIndex((prevIndex) => (prevIndex + 1) % (activeTenses?.length || 1));
            setActiveSentenceIndex(0);
            return null;
        }

        return sentences[activeSentenceIndex];
    };

    const activeSentence = getActiveSentence();

    console.log("activeSentence", activeSentence)

    const sendAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActiveSentenceIndex((prevIndex) => prevIndex + 1);
        setCorrectSentence([...correctSentence, { yourSentence: answer, correctSentence: activeSentence?.english || '', sentence: activeSentence?.turkish || '', topic: router.query.activeTenses as string }]);
        setAnswer('');
    };

    const openReviewModal = () => {
        setIsReviewModalOpen(true)
    }


    useEffect(() => {
        setActiveIndex(0);
        setActiveSentenceIndex(0);
        setCorrectSentence([]);
    }, [activeTenses]);


    if (!router.query.activeTenses || isLoading || !activeSentence) {
        return (
            <Layout>
                <div className='flex items-center justify-center' >
                    <Puff color="#0e7490" height={50} width={50} />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className='hidden lg:block' >
                <WorkSpaceLayout
                    sendAnswer={sendAnswer}
                    isLoading={isLoading}
                    turkishSentence={activeSentence?.turkish}
                    englishSentence={activeSentence?.english}
                    topic={router.query.activeTenses as string}
                    setAnswer={setAnswer}
                    answer={answer}
                    correctSentence={correctSentence}
                    setCorretSentence={() => setCorrectSentence}
                    post={props.post}
                    openReviewModal={openReviewModal}
                    postError={props.postError}

                />
            </div>

            <div className='block lg:hidden' >
                <MobileWorkSpaceLayout
                    sendAnswer={sendAnswer}
                    isLoading={isLoading}
                    turkishSentence={activeSentence?.turkish}
                    englishSentence={activeSentence?.english}
                    topic={router.query.activeTenses as string}
                    setAnswer={setAnswer}
                    answer={answer}
                    correctSentence={correctSentence}
                    setCorretSentence={() => setCorrectSentence}
                    post={props.post}
                    openReviewModal={openReviewModal}
                    postError={props.postError}
                />
            </div>
        </Layout>
    );
};

export default ActiveTense;
