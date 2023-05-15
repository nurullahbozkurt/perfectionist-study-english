import React from 'react'
import { Layout } from '@/components/Layout';
import Header from '../Header';
import QuestionsTable from './QuestionsTable';

type Props = {}

const StudentQuestions = (props: Props) => {
    return (
        <Layout>
            <Header />
            <QuestionsTable />
        </Layout>
    )
}

export default StudentQuestions