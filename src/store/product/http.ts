import { http, ICommonResponse } from '@utils/http';
import { IProduct } from '@store/product/types';

export const fetchProductListRequest = (limit = 18, page = 1) =>
    http.get<void, ICommonResponse<Array<IProduct>>>('product', {
        params: { _limit: limit, _page: page },
    });
