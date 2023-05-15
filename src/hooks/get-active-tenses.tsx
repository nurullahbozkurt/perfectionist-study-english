import { useQuery } from "react-query";
import axios from "axios";
import { IActiveTense } from "@/types/api";

interface Props {
    collectionName: string;
}

const useGetActiveTenses = (query: Props) => {
    return useQuery<IActiveTense[]>(['active-sentences', query.collectionName], async () => {
        const response = await axios.get(`/api/active-tense-sentences`, {
            params: {
                collectionName: query.collectionName
            }
        });
        return response.data;
    }, {
        enabled: !!query.collectionName
    });
};

export default useGetActiveTenses;
