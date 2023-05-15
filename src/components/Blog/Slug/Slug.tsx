import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { format } from 'date-fns';
import { useRouter } from 'next/router'
import { FaUserAlt } from 'react-icons/fa'
import { BiShareAlt } from 'react-icons/bi'
import { FaLinkedinIn, FaTwitter, FaFacebook } from 'react-icons/fa'


import BlogCard from '../BlogCard'
import { Layout } from '@/components/Layout';
import { PostOrPage } from '@tryghost/content-api'


type Props = {
    post: PostOrPage
    otherPosts: PostOrPage[]
}

const Slug = ({ post, otherPosts }: Props) => {
    const path = useRouter().asPath
    const blogUrl = process.env.NEXT_PUBLIC_APP_URL + path

    return (
        <div>
            <Head>
                <title>{post.title}</title>
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={post.feature_image || ""} />
                <meta property="og:url" content={blogUrl} />
                <meta property="og:type" content="article" />
                <meta property="article:published_time" content={post.published_at || ""} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                <meta name="twitter:image" content={post.feature_image || ""} />
                <meta name="twitter:url" content={blogUrl} />
            </Head>

            <Layout>
                <div className='container mx-auto pt-12 lg:pt-[100px]' >
                    <div className=' max-w-5xl mx-auto' >
                        <div className='h-full overflow-hidden' >
                            <Image src={post.feature_image || "/alternative-blog.jpg"} width="2400" height="1600" alt={post.feature_image_alt || "blog"} className='w-full h-full max-h-[500px]  object-cover' />
                        </div>
                        <div className='flex items-center justify-between py-5 px-2' >
                            <div className='flex items-center gap-1' >
                                {post.authors?.map((author) => (
                                    <div className='flex items-center ' >
                                        <div className='w-[40px] h-[40px] rounded-full overflow-hidden flex items-center justify-center' >
                                            {author.profile_image && <Image src={author.profile_image} alt="person-2" width="100" height="100" />}
                                            {!author.profile_image && <div className='border rounded-full p-1.5' >
                                                <FaUserAlt className='text-xl text-gray-700' />
                                            </div>}
                                        </div>

                                        <div className='text-sm ml-4 text-left' >
                                            <p className='text-primaryText' >{author.name}</p>
                                            <p className='text-primaryText/70 text-xs' >{format(new Date(String(post.published_at)), 'PPP')}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className='flex items-center gap-5 text-xl' >
                                <BiShareAlt />
                                <Link target='_blank' href={`https://www.linkedin.com/sharing/share-offsite/?url=${blogUrl}`} >
                                    <FaLinkedinIn />
                                </Link>
                                <Link target='_blank' href={`https://twitter.com/share?text=${post.title}&url=${blogUrl}`} >
                                    <FaTwitter />
                                </Link>
                                <Link target='_blank' href={`https://www.facebook.com/share.php?u=${blogUrl}`} >
                                    <FaFacebook />
                                </Link>
                            </div>
                        </div>
                        <div className='w-full mx-auto max-w-5xl my-10 space-y-7 p-4' >
                            <h1 className='text-3xl font-semibold text-center' >{post.title}</h1>
                            <div className={`blog text-gray-800 `} dangerouslySetInnerHTML={{ __html: post.html! }} />
                        </div>
                    </div>

                    <div className='mt-10 p-4' >
                        {otherPosts?.length > 0 && <h1 className='text-2xl font-medium my-5' >Other Blog Posts</h1>}
                        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' >
                            {otherPosts.map((post: PostOrPage) => (
                                <BlogCard post={post} smallCard />
                            ))}
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
    )
}

export default Slug


