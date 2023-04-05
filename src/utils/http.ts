import axios from 'axios';

export type ICommonResponse<D = any> = {
    data: {
        data: D;
        metaData: {
            totalCount: number;
        };
    };
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
