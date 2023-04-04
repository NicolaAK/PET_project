import { http, ICommonResponse } from '@utils/http';
import { IProduct } from '@store/product/types';

export const fetchProductListRequest = () => http.get<void, ICommonResponse<Array<IProduct>>>('product');
