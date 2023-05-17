export interface IUser{
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    createdAt: string;
}

export interface IReview{
    _id: string;
    user: IUser ;
    sentence:string;
    reviewNote:string;
    yourSentence: string;
    correctSentence: string;
    createdAt: string;
    enabled: boolean;
    grammar: string;
    sendToTeacher: boolean;
    teacherAnswer: string | null;
    
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