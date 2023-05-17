import { Grammar } from "@/components/Grammars";
import { GetStaticProps, GetStaticPaths, GetServerSideProps, GetServerSidePropsContext } from 'next'
import GhostContentAPI from '@tryghost/content-api'
import { getSession } from "next-auth/react";



const api = new GhostContentAPI({
    url: 'https://study-english-product.digitalpress.blog',
    key: 'e3397053969f2a7ef7b3c8be7f',
    version: "v5.0"
});


export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }

    const slug = context.params?.grammar as string
    let post;

    try {
        post = await api.posts.read({ slug: slug }, { include: "authors" });
    } catch (error) {
        // Handle the error here, for example:
        console.error("Error fetching posts:", error);
        // You can choose to redirect to an error page or return a custom error message
        return {
            props: { postError: "Bu ders için konu anlatımı eklenmedi !" },
        };
    }

    return {
        props: { post },
    };
};

export default Grammar;