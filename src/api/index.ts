import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: 'https://tgame-backend.alloca.info',
    withCredentials: true,
});
const telegramInitData = typeof window !== 'undefined' ? window?.Telegram?.WebApp?.initData : undefined;

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const newConfig = config;
    // const v= 'user=%7B%22id%22%3A361872281%2C%22first_name%22%3A%22Nikolay%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22shwarz777%22%2C%22language_code%22%3A%22ru%22%2C%22is_premium%22%3Atrue%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=-6250684073079602450&chat_type=private&auth_date=1721241681&hash=5c4d400ac6e8a18c8e49661aabadff3426956316596548248958c83b418878d6';
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
