export interface IReview{
    _id: string;
    user:string;
    sentence:string;
    reviewNote:string;
    yourSentence: string;
    correctSentence: string;
    createdAt: string;
    enabled: boolean;
    grammar: string;
}

export interface IGrammar{
    _id: string;
    index: number;
    turkishSentence: string;
    englishSentence: string;
    topic: string;
}

export interface IDailySentence{
    _id?: string | undefined
    index: number;
    turkishSentence: string;
    englishSentence: string;
    topic: string;

}

export interface IActiveTense{
    _id: string;
    positiveSentence: [
        {
            english: string;
            turkish: string;
        }
    ];
    negativeSentence: [
        {
            english: string;
            turkish: string;
        }
    ];
    questionSentence: [
        {
            english: string;
            turkish: string;
        }
    ];
    negativeInterrogativeSentence: [
        {
            english: string;
            turkish: string;
        }
    ]
}