import { useQuery } from "react-query";
import axios from "axios";
import { IReview } from "@/types/api";

interface Props {
}

const useGetStudentQuestions = () => {
    return useQuery<IReview[]>(['student-questions'], async () => {
        const response = await axios.get(`/api/admin/reviews`);
        return response.data;
    });
};

export default useGetStudentQuestions;
