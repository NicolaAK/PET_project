import { RootState } from '@store';
import { productAdapter } from '@store/product/index';

const getProducts = (state: RootState) => state.product;

const { selectAll } = productAdapter.getSelectors(getProducts);

export const getProductList = (state: RootState) => selectAll(state);
export const getIsLoading = (state: RootState) => !!state.product.isLoading.length;
export const getIsInitialized = (state: RootState) => state.product.isInitialized;
