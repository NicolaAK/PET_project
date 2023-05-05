import { http, ICommonResponse } from '@utils/http';
import { IProduct } from '@store/product/types';
import { COUNT_PRODUCT_ON_PAGE } from '@utils/constants';
import { IFilterProductList } from '@store/product/index';

export const fetchProductListRequest = (filter: IFilterProductList) =>
    http.get<IFilterProductList, ICommonResponse<Array<IProduct>>>('product', {
        params: {
            _limit: COUNT_PRODUCT_ON_PAGE,
            _page: filter.page,
            idCategory: filter.idCategory,
            _sort: filter.sort,
            _order: filter.order,
            isNew: filter.isNew,
        },
    });
