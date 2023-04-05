import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchCategoryListRequest } from '@store/category/http';
import { ICategory } from './types';

export const categoryAdapter = createEntityAdapter<ICategory>();

type InitialStateType = { isLoading: boolean[]; isInitialized: boolean };

const initialState = categoryAdapter.getInitialState<InitialStateType>({
    isLoading: [],
    isInitialized: false,
});

export const fetchCategoryList = createAsyncThunk<Array<ICategory>, void>('category/fetch', async () => {
    const { data } = await fetchCategoryListRequest();
    return data.data;
});

const Category = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // fetchMerchantById
        builder.addCase(fetchCategoryList.pending, (state) => {
            state.isLoading.push(true);
        });
        builder.addCase(fetchCategoryList.fulfilled, (state, { payload }) => {
            state.isLoading.pop();
            state.isInitialized = true;
            categoryAdapter.setAll(state, payload);
        });
        builder.addCase(fetchCategoryList.rejected, (state) => {
            state.isLoading.pop();
            state.isInitialized = true;
        });
    },
});

export default Category.reducer;
