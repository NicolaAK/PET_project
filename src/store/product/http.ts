import { http, ICommonResponse } from '@utils/http';
import { IProduct } from '@store/product/types';

export const fetchProductListRequest = (page = 1, limit = 18) =>
    http.get<void, ICommonResponse<Array<IProduct>>>('product', {
        params: { _limit: limit, _page: page },
    });
