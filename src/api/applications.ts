import { axiosInstance } from './request';
/**======================
 * get list of applications from server
 *========================**/
export const fetchData = async (url: string, filters?: any) => {
    const response = await axiosInstance.get(url, { params: filters });
    // If not succes throw error
    if (!response.data.success) {
        const error = new Error('An error occurred while fetching the data.');
        throw error;
    }

    return response.data.result;
};
