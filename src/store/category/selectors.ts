import { RootState } from '@store';
import { categoryAdapter } from '@store/category/index';

const getCategories = (state: RootState) => state.category;

const { selectAll } = categoryAdapter.getSelectors(getCategories);

export const getCategoryList = (state: RootState) => selectAll(state);
export const getCategoryIsLoading = (state: RootState) => !!state.category.isLoading.length;
export const getIsInitialized = (state: RootState) => state.category.isInitialized;
