import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchProductListRequest } from '@store/product/http';
import { IData } from '@utils/http';
import { IProduct } from './types';

export const productAdapter = createEntityAdapter<IProduct>();

type InitialStateType = { isLoading: boolean[]; isInitialized: boolean; totalCount: number };

const initialState = productAdapter.getInitialState<InitialStateType>({
    isLoading: [],
    isInitialized: false,
    totalCount: 0,
});

export const fetchProductList = createAsyncThunk<IData<Array<IProduct>>, number>('product/fetch', async (page) => {
    const { data } = await fetchProductListRequest(page);
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
    },
});

export default Product.reducer;
