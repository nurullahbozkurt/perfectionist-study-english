import { useQuery } from "react-query";
import axios from "axios";
import { IGrammar } from "@/types/api";

interface Props {
    collectionName: string;
}

const useGetGrammaticalSentences = (query: Props) => {
    return useQuery<IGrammar[]>(['grammatical-sentences', query.collectionName], async () => {
        const response = await axios.get(`/api/grammatical-sentences`, {
            params: {
                collectionName: query.collectionName
            }
        });
        console.log("response.data", response.data)
        return response.data;
    }, {
        enabled: !!query.collectionName // Koleksiyon adı varsa sorguyu başlat
    });
};

export default useGetGrammaticalSentences;
