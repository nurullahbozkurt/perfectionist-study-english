import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns';
import { FaUserAlt } from 'react-icons/fa'

import { PostOrPage, PostsOrPages } from '@tryghost/content-api'


type Props = {
    post: PostOrPage
    firstBlog?: boolean
    smallCard?: boolean
}

const BlogCard = ({ firstBlog = false, post, smallCard }: Props) => {
    return (
        <Link href={`/blog/${post.slug}`} className={`col-span-1 space-y-4 flex flex-col ${firstBlog ? "mb-10 border-b" : "bg-gray-50 lg:hover:bg-primary-10 shadow-xl border-gray-100 lg:hover:border-gray-200 transition-all rounded-xl border border-transparent"}  lg:p-4 `} >
            <div className={`rounded overflow-hidden h-full `} >
                <Image src={`${post.feature_image || "/alternative-blog.jpg"}`} alt={`${post.feature_image_alt}`} width="1920" height="1280" className={`w-full h-full object-cover ${firstBlog ? "max-h-[500px]" : "max-h-[300px]"}`} />
            </div>
            <div className='p-2' >
                <div className='flex flex-col gap-5' >
                    <h1 className={`${smallCard ? "text-lg" : "text-2xl mb-4"} font-bold `} >{post.title}</h1>
                    <p className={`text-gray-700  line-clamp-4 ${smallCard ? "text-sm" : "leading-8"}`} >{post.excerpt}</p>
                </div>

                <div className='flex items-center gap-2' >
                    {
                        post.authors?.map((author: any) => (
                            <div className={`flex items-center ${smallCard ? "mt-5" : "mt-10"}`} >
                                <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center' >
                                    {!author.profile_image && <div className='text-2xl border rounded-full p-2 border-primaryText' >
                                        <FaUserAlt />
                                    </div>}
                                    {author.profile_image && <Image src={author.profile_image} alt="person-2" width="100" height="100" />}
                                </div>

                                <div className='text-sm ml-4 text-left' >
                                    <p className='text-primaryText/70' >{author.name}</p>
                                    <p className='text-primaryText/70 text-xs' >{format(new Date(String(post.published_at)), 'PPP')}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </Link>
    )
}

export default BlogCard