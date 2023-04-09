import axios from 'axios';

export type IData<D = any> = {
    data: D;
    metaData: {
        totalCount: number;
    };
};

export type ICommonResponse<D = any> = {
    data: IData<D>;
    status: number;
    statusText: string;
};

export const http = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: true,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Language': 'ru',
    },
});
