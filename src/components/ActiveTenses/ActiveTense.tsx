import React, { useState, useEffect } from 'react';
import useGetActiveTenses from '@/hooks/get-active-tenses';
import { useRouter } from 'next/router';
import { Layout } from '@/components/Layout';
import { IActiveTense } from '@/types/api';
import StudyAreaLayout from '../StudyAreaLayout';
import { PostOrPage } from '@tryghost/content-api';
import { useApp } from '@/states/app';
import MobileStudyAreaLayout from '../MobileStudyAreaLayout';

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
}

const ActiveTense = (props: Props) => {
    const router = useRouter();
    const { headerHeight, setHeaderHeight, isReviewModalOpen, setIsReviewModalOpen } = useApp();

    const [activeIndex, setActiveIndex] = useState(0);
    const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);
    const [correctSentence, setCorrectSentence] = useState<CorrectSentence[]>([]);
    const [answer, setAnswer] = useState('');

    // const { data: activeTenses, isLoading } = useGetActiveTenses({
    //     collectionName: `activeTense_${router.query.activeTenses}` as string,
    // });

    const useStaticGrammarData = (grammar: any) => {
        const [data, setData] = useState<IActiveTense[] | null>(null);
        const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        setActiveIndex(0);
        setActiveSentenceIndex(0);
        setCorrectSentence([]);
    }, [activeTenses]);

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

    const sendAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setActiveSentenceIndex((prevIndex) => prevIndex + 1);
        setCorrectSentence([...correctSentence, { yourSentence: answer, correctSentence: activeSentence?.english || '', sentence: activeSentence?.turkish || '' }]);
        setAnswer('');
    };

    const openReviewModal = () => {
        setIsReviewModalOpen(true)
    }

    if (!activeSentence) {
        return <p>Loading...</p>;
    }
    if (!router.query.activeTenses) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
            <div className='hidden lg:block' >
                <StudyAreaLayout
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
                <MobileStudyAreaLayout
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
