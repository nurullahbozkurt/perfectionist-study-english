
import React from 'react';
import Head from 'next/head';
import { PostOrPage, PostsOrPages } from '@tryghost/content-api'

import BlogCard from './BlogCard'
import { Layout } from '../Layout';

const Blog = ({ posts }: { posts: PostsOrPages }) => {


    const firstPost = posts[0]
    const allPosts = posts.slice(1)

    return (
        <div style={{ overflow: "hidden" }} className='relative overflow-scroll text-primaryText' >
            <Layout>

                <div className='container mx-auto pb-10 lg:pb-16 px-4' >
                    <div className='flex flex-col my-10 p-4' >
                        <p className='text-sm opacity-70 pb-1' >Neden </p>
                        <h1 className='text-3xl lg:text-[40px] font-semibold' >Perfectionist
                        </h1>
                        <p className='pt-5 italic' > 📌 İngilizce Öğrenmeyi Öğreniyoruz</p>
                    </div>

                    <>
                        <BlogCard post={firstPost} firstBlog />
                        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' >
                            {allPosts.map((post: PostOrPage) => (
                                <BlogCard post={post} />
                            ))}
                        </div>
                    </>
                </div>


            </Layout>
        </div>
    )
}

export default Blog