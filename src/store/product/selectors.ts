import { RootState } from '@store';
import { productAdapter } from '@store/product/index';

const getProducts = (state: RootState) => state.product;

const { selectAll } = productAdapter.getSelectors(getProducts);

export const getProductList = (state: RootState) => selectAll(state);
export const getProductIsLoading = (state: RootState) => !!state.product.isLoading.length;
export const getIsInitialized = (state: RootState) => state.product.isInitialized;
export const getProductTotalCount = (state: RootState) => state.product.totalCount;
