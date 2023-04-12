import { http, ICommonResponse } from '@utils/http';
import { IProduct } from '@store/product/types';
import { COUNT_PRODUCT_ON_PAGE } from '@utils/constants';

export const fetchProductListRequest = (page = 1) =>
    http.get<void, ICommonResponse<Array<IProduct>>>('product', {
        params: { _limit: COUNT_PRODUCT_ON_PAGE, _page: page },
    });
