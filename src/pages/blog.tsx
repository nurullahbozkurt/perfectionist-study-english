import { GetServerSideProps } from 'next'

import { Blog } from "@/components/Blog";
import GhostContentAPI from '@tryghost/content-api'


const api = new GhostContentAPI({
    url: 'https://yungsten-tech.digitalpress.blog',
    key: '370439746f526229149d1ac78a',
    version: "v5.0"
});


export const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await api.posts.browse({ include: ['tags', 'authors'] });
    return {
        props: { posts }, // will be passed to the page component as props
    };
};

export default Blog