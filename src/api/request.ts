import axios, { AxiosRequestConfig } from 'axios';

/**======================
 * config for axios instance (base url, common-headers,....)
 *========================**/
const axiosConfig: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Accept: 'application/json',
    },
    timeout: 60000,
};

// Create Default Axios Instace
const axiosInstance = axios.create(axiosConfig);

export { axiosInstance };
