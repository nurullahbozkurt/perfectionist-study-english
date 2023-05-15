import React from 'react'
import { Layout } from '../Layout'
import { PostOrPage } from '@tryghost/content-api'

type Props = {
    post: PostOrPage
}

const CourseDocuments = (props: Props) => {
    return (
        <Layout>
            {props.post && <div className='w-full h-full overflow-y-scroll p-5 ' >
                <div><h1 className='text-2xl font-semibold px-2 capitalize' >{props?.post?.title}</h1></div>
                <div className='' >
                    <div className={`blog text-gray-800 p-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5`} dangerouslySetInnerHTML={{ __html: props.post?.html! }} />
                </div>
            </div>}
        </Layout>
    )
}

export default CourseDocuments