import React, { useEffect, useMemo, useState } from 'react'


import { useApp } from '@/states/app'
import { useRouter } from 'next/router'
import { Layout } from '@/components/Layout';
import WorkSpaceLayout from '../WorkSpaceLayout'
import { PostOrPage } from '@tryghost/content-api'
import { IGrammar } from '@/types/api'
import MobileWorkSpaceLayout from '../MobileWorkSpaceLayout';



type Props = {
    post: PostOrPage
    postError: string
}

interface CorrectSentence {
    yourSentence: string;
    correctSentence: string;
    sentence: string;
    topic: string;
}

interface Sentence {
    index: number;
    turkishSentence: string;
    englishSentence: string;
    topic: string;
}

const Grammar = (props: Props) => {
    const router = useRouter()

    const { headerHeight, setHeaderHeight, isReviewModalOpen, setIsReviewModalOpen } = useApp();

    const [answer, setAnswer] = useState('')
    const [sentence, setSentence] = useState<Sentence>()
    const [contentHeight, setContentHeight] = useState(0);
    const [correctSentence, setCorrectSentence] = useState<CorrectSentence[]>([]);
    const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);

    // const { data: grammaticalSentences, isLoading } = useGetGrammaticalSentences({
    //     collectionName: `grammar_${router.query.grammar}` as string
    // })

    const useStaticGrammarData = (grammar: any) => {
        const [data, setData] = useState<IGrammar[] | null>(null);
        const [isLoading, setIsLoading] = useState(true);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await import(`@/data/grammars/${grammar}.json`);
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
    const { data: grammaticalSentences, isLoading } = useStaticGrammarData(router.query.grammar);



    const changeSentence = () => {
        if (grammaticalSentences) {
            const randomIndex = Math.floor(Math.random() * grammaticalSentences?.length)
            setSentence(grammaticalSentences && grammaticalSentences[randomIndex])
        }
    }

    const openReviewModal = () => {
        setIsReviewModalOpen(true)
    }

    const sendAnswer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!sentence) return
        setCorrectSentence([...correctSentence, { yourSentence: answer, correctSentence: sentence.englishSentence, sentence: sentence.turkishSentence, topic: sentence.topic }])
        setAnswer('')
        changeSentence()
    }

    useEffect(() => {
        if (grammaticalSentences) {
            const randomIndex = Math.floor(Math.random() * grammaticalSentences.length)
            setSentence(grammaticalSentences[randomIndex])
        }
    }, [grammaticalSentences])

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



    if (!sentence) {
        return (
            <Layout>
            </Layout>
        )
    }

    if (!router.query.grammar) {
        return (
            <Layout>
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
                    topic={sentence.topic}
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
                    topic={sentence.topic}
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

export default Grammar