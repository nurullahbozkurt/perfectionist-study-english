import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { Slug } from "@/components/Blog/Slug";
import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
    url: 'https://yungsten-tech.digitalpress.blog',
    key: '370439746f526229149d1ac78a',
    version: "v5.0"
});

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const slug = context.params?.slug as string
    const post = await api.posts.read({ slug }, { include: "authors" });
    const posts = await api.posts.browse({ limit: 4, include: ['tags', 'authors'] });


    const otherPosts = posts.filter((post) => post.slug !== slug)

    return {
        props: { post, otherPosts }, // will be passed to the page component as props
    };
};

export default Slug