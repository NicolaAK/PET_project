import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchProductByIdRequest, fetchProductListRequest } from '@store/product/http';
import { IData } from '@utils/http';
import { IProduct } from './types';

export const productAdapter = createEntityAdapter<IProduct>();

type InitialStateType = { isLoading: boolean[]; isInitialized: boolean; totalCount: number };

const initialState = productAdapter.getInitialState<InitialStateType>({
    isLoading: [],
    isInitialized: false,
    totalCount: 0,
});

export interface IFilterProductList {
    page: number;
    idCategory?: number;
    sort?: string;
    order?: string;
    isNew?: boolean;
}

export const fetchProductList = createAsyncThunk<IData<Array<IProduct>>, IFilterProductList>(
    'product/fetch',
    async (filter) => {
        const { data } = await fetchProductListRequest(filter);
        return data;
    },
);

export const fetchProductById = createAsyncThunk<Array<IProduct>, number>('product/fetchById', async (id) => {
    const { data } = await fetchProductByIdRequest(id);
    return data;
});

const Product = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // fetchProductList
        builder.addCase(fetchProductList.pending, (state) => {
            state.isLoading.push(true);
        });
        builder.addCase(fetchProductList.fulfilled, (state, { payload }) => {
            state.isLoading.pop();
            state.isInitialized = true;
            state.totalCount = payload.metaData.totalCount;
            productAdapter.setAll(state, payload.data);
        });
        builder.addCase(fetchProductList.rejected, (state) => {
            state.isLoading.pop();
            state.isInitialized = true;
        });
        builder.addCase(fetchProductById.pending, (state) => {
            state.isLoading.push(true);
        });
        builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
            state.isLoading.pop();
            state.isInitialized = true;
            productAdapter.setAll(state, payload);
        });
        builder.addCase(fetchProductById.rejected, (state) => {
            state.isLoading.pop();
            state.isInitialized = true;
        });
    },
});

export default Product.reducer;
