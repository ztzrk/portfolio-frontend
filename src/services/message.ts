import axios from "axios";

interface FormData {
    name: string;
    email: string;
    message: string;
}

interface ApiResponse {
    message: string;
}

export const submitMessage = async (
    formData: FormData
): Promise<ApiResponse> => {
    try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const response = await axios.post<ApiResponse>(
            `${baseUrl}/message`,
            formData,
            {
                headers: { "Content-Type": "application/json" },
            }
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.data?.message) {
            throw new Error(error.response.data.message);
        }
        throw new Error("Failed to send message. Please try again.");
    }
};
