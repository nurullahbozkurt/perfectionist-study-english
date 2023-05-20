import React from 'react'
import Layout from '@/components/Layout/Layout';
import Header from '../Header';
import { FaUserGraduate } from 'react-icons/fa'
import { FiUserPlus } from 'react-icons/fi'
import StudentsTable from './StudentsTable';

type Props = {}

const Students = (props: Props) => {
    return (
        <Layout>
            <Header />
            <StudentsTable />

        </Layout>
    )
}

export default Students