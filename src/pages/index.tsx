import { Home } from "@/components/Home";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";


export async function getServerSideProps(context: any) {
    const session = await getSession(context);
    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }
    return {
        props: { session },
    };
}

export default Home;