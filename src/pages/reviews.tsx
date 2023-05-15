import { getSession } from "next-auth/react";
import { Reviews } from "@/components/Reviews";


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


export default Reviews