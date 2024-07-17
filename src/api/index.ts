import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'https://tgame-backend.alloca.info',
    withCredentials: true,
});
const telegramInitData = typeof window !== 'undefined' ? window?.Telegram?.WebApp?.initData : undefined;

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const newConfig = config;
    newConfig.url = `/${config.url}`;
    newConfig.headers.Authorization = `tma ${telegramInitData}`;

    return newConfig;
};

const onResponse = async (response: AxiosResponse): Promise<AxiosResponse> => {
    return response;
};
const onResponseError = async (error: AxiosError<any, any>): Promise<never> => {
    const { response } = error;
    if (response?.status === 401) {
        const authURL = `${response.config.baseURL}${response.data.location}`;

        window.location.replace(authURL);
    }

    if (typeof window === 'undefined') {
        console.log(error.message);
    }

    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.reject(response?.data);
};

export const setupInterceptorsTo = (axiosInstance: AxiosInstance): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
};

export default setupInterceptorsTo(api);
